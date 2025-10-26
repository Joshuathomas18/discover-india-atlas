"""
Heuristic Detector
Use heuristics to detect product patterns on any website
"""

import re
import logging
from typing import Dict, Any, List
from bs4 import BeautifulSoup
from urllib.parse import urlparse

logger = logging.getLogger(__name__)

class HeuristicDetector:
    """Use heuristics to detect product patterns"""
    
    def __init__(self):
        self.ecommerce_patterns = self._load_ecommerce_patterns()
        self.product_keywords = self._load_product_keywords()
        self.price_patterns = self._load_price_patterns()
    
    def detect(self, html: str, url: str) -> Dict[str, float]:
        """Detect patterns using heuristics"""
        patterns = {}
        
        # URL-based heuristics
        patterns.update(self._url_heuristics(url))
        
        # HTML structure heuristics
        patterns.update(self._html_heuristics(html))
        
        # Content heuristics
        patterns.update(self._content_heuristics(html))
        
        # Meta tag heuristics
        patterns.update(self._meta_heuristics(html))
        
        # Clothing-specific heuristics
        patterns.update(self._clothing_heuristics(html))
        
        return patterns
    
    def _load_ecommerce_patterns(self) -> List[str]:
        """Load e-commerce URL patterns"""
        return [
            r'/product/', r'/item/', r'/p/', r'/shop/',
            r'/buy/', r'/catalog/', r'/store/', r'/goods/',
            r'/merchandise/', r'/inventory/', r'/stock/',
            r'/detail/', r'/view/', r'/show/', r'/display/'
        ]
    
    def _load_product_keywords(self) -> List[str]:
        """Load product-related keywords"""
        return [
            'add to cart', 'buy now', 'purchase', 'checkout',
            'shopping cart', 'product', 'price', 'sale',
            'discount', 'offer', 'deal', 'bargain',
            'in stock', 'out of stock', 'availability',
            'quantity', 'size', 'color', 'variant',
            'shipping', 'delivery', 'return', 'refund'
        ]
    
    def _load_price_patterns(self) -> List[str]:
        """Load price detection patterns"""
        return [
            r'\$\d+\.?\d*', r'₹\d+', r'€\d+', r'£\d+',
            r'price.*\d+', r'cost.*\d+', r'amount.*\d+',
            r'\d+\.?\d*\s*(?:USD|INR|EUR|GBP|CAD|AUD)',
            r'from\s+\$\d+', r'starting\s+at\s+\$\d+',
            r'as\s+low\s+as\s+\$\d+'
        ]
    
    def _url_heuristics(self, url: str) -> Dict[str, float]:
        """Detect patterns from URL structure"""
        patterns = {}
        
        # E-commerce indicators
        for pattern in self.ecommerce_patterns:
            if re.search(pattern, url, re.IGNORECASE):
                patterns['product_page'] = 0.8
                break
        
        # Category indicators
        category_patterns = [
            r'/category/', r'/cat/', r'/c/', r'/department/',
            r'/section/', r'/collection/', r'/brand/'
        ]
        
        for pattern in category_patterns:
            if re.search(pattern, url, re.IGNORECASE):
                patterns['category_page'] = 0.9
                break
        
        # Search indicators
        search_patterns = [
            r'/search/', r'/find/', r'/query/', r'/results/',
            r'\?.*search=', r'\?.*q=', r'\?.*query='
        ]
        
        for pattern in search_patterns:
            if re.search(pattern, url, re.IGNORECASE):
                patterns['search_page'] = 0.7
                break
        
        # Listing indicators
        listing_patterns = [
            r'/list/', r'/listing/', r'/grid/', r'/gallery/',
            r'/browse/', r'/all/', r'/items/'
        ]
        
        for pattern in listing_patterns:
            if re.search(pattern, url, re.IGNORECASE):
                patterns['listing_page'] = 0.8
                break
        
        return patterns
    
    def _html_heuristics(self, html: str) -> Dict[str, float]:
        """Detect patterns from HTML structure"""
        patterns = {}
        soup = BeautifulSoup(html, 'html.parser')
        
        # Product-specific elements
        product_indicators = [
            'price', 'add-to-cart', 'buy-now', 'product-name',
            'product-title', 'product-image', 'product-description',
            'product-detail', 'product-info', 'product-specs'
        ]
        
        for indicator in product_indicators:
            elements = soup.find_all(attrs={'class': re.compile(indicator, re.I)})
            if elements:
                patterns['product_elements'] = min(0.9, len(elements) * 0.1)
        
        # Schema.org detection
        if soup.find('script', type='application/ld+json'):
            patterns['schema_org'] = 0.9
        
        # Microdata detection
        if soup.find(attrs={'itemscope': True}):
            patterns['microdata'] = 0.8
        
        # Price patterns
        for pattern in self.price_patterns:
            if re.search(pattern, html, re.IGNORECASE):
                patterns['price_detected'] = 0.7
                break
        
        # Form elements (add to cart, checkout)
        forms = soup.find_all('form')
        for form in forms:
            form_text = form.get_text().lower()
            if any(keyword in form_text for keyword in ['cart', 'buy', 'purchase', 'checkout']):
                patterns['ecommerce_form'] = 0.8
                break
        
        # Button elements
        buttons = soup.find_all(['button', 'input'], type=['submit', 'button'])
        for button in buttons:
            button_text = button.get_text().lower()
            if any(keyword in button_text for keyword in ['add to cart', 'buy now', 'purchase']):
                patterns['ecommerce_button'] = 0.8
                break
        
        return patterns
    
    def _content_heuristics(self, html: str) -> Dict[str, float]:
        """Detect patterns from content analysis"""
        patterns = {}
        
        # E-commerce keywords
        keyword_count = sum(1 for keyword in self.product_keywords 
                           if keyword.lower() in html.lower())
        
        if keyword_count > 3:
            patterns['ecommerce_content'] = min(0.9, keyword_count * 0.1)
        
        # Currency symbols
        currency_symbols = ['$', '₹', '€', '£', '¥', '₽', '₩']
        currency_count = sum(html.count(symbol) for symbol in currency_symbols)
        
        if currency_count > 0:
            patterns['currency_detected'] = min(0.8, currency_count * 0.1)
        
        # Product codes/SKUs
        sku_patterns = [
            r'SKU[:\s]*[A-Z0-9]+', r'Product\s+Code[:\s]*[A-Z0-9]+',
            r'Item\s+Number[:\s]*[A-Z0-9]+', r'Model[:\s]*[A-Z0-9]+'
        ]
        
        for pattern in sku_patterns:
            if re.search(pattern, html, re.IGNORECASE):
                patterns['sku_detected'] = 0.7
                break
        
        # Availability indicators
        availability_keywords = [
            'in stock', 'out of stock', 'available', 'unavailable',
            'limited quantity', 'only few left', 'sold out'
        ]
        
        for keyword in availability_keywords:
            if keyword.lower() in html.lower():
                patterns['availability_detected'] = 0.6
                break
        
        return patterns
    
    def _meta_heuristics(self, html: str) -> Dict[str, float]:
        """Detect patterns from meta tags"""
        patterns = {}
        soup = BeautifulSoup(html, 'html.parser')
        
        # Open Graph tags
        og_type = soup.find('meta', property='og:type')
        if og_type and og_type.get('content'):
            og_content = og_type.get('content').lower()
            if 'product' in og_content:
                patterns['og_product'] = 0.9
            elif 'website' in og_content:
                patterns['og_website'] = 0.5
        
        # Twitter Card tags
        twitter_card = soup.find('meta', attrs={'name': 'twitter:card'})
        if twitter_card and twitter_card.get('content'):
            if 'product' in twitter_card.get('content').lower():
                patterns['twitter_product'] = 0.8
        
        # Schema.org type
        schema_scripts = soup.find_all('script', type='application/ld+json')
        for script in schema_scripts:
            try:
                import json
                data = json.loads(script.string)
                if isinstance(data, dict) and data.get('@type'):
                    schema_type = data.get('@type', '').lower()
                    if 'product' in schema_type:
                        patterns['schema_product'] = 0.9
                    elif 'organization' in schema_type:
                        patterns['schema_organization'] = 0.6
            except:
                continue
        
        return patterns
    
    def get_confidence_score(self, patterns: Dict[str, float]) -> float:
        """Calculate overall confidence score"""
        if not patterns:
            return 0.0
        
        # Weight different pattern types
        weights = {
            'product_page': 0.3,
            'product_elements': 0.2,
            'schema_org': 0.2,
            'price_detected': 0.15,
            'ecommerce_content': 0.1,
            'currency_detected': 0.05
        }
        
        score = 0.0
        for pattern_type, confidence in patterns.items():
            weight = weights.get(pattern_type, 0.05)
            score += confidence * weight
        
        return min(1.0, score)
    
    def _clothing_heuristics(self, html: str) -> Dict[str, float]:
        """Detect clothing-specific patterns"""
        patterns = {}
        soup = BeautifulSoup(html, 'html.parser')
        
        # Size-related patterns
        size_indicators = [
            'size', 'sizes', 'small', 'medium', 'large', 'xl', 'xxl',
            'size chart', 'size guide', 'measurements', 'fit'
        ]
        size_count = sum(1 for indicator in size_indicators if indicator.lower() in html.lower())
        if size_count > 0:
            patterns['size_indicators'] = min(0.8, size_count * 0.1)
        
        # Color-related patterns
        color_indicators = [
            'color', 'colors', 'colour', 'colours', 'shade', 'hue',
            'color swatch', 'color picker', 'color option'
        ]
        color_count = sum(1 for indicator in color_indicators if indicator.lower() in html.lower())
        if color_count > 0:
            patterns['color_indicators'] = min(0.8, color_count * 0.1)
        
        # Material/fabric patterns
        material_indicators = [
            'cotton', 'polyester', 'silk', 'wool', 'denim', 'leather',
            'fabric', 'material', 'composition', 'fiber', 'textile',
            '100%', 'blend', 'synthetic', 'natural'
        ]
        material_count = sum(1 for indicator in material_indicators if indicator.lower() in html.lower())
        if material_count > 0:
            patterns['material_indicators'] = min(0.7, material_count * 0.1)
        
        # Brand patterns
        brand_indicators = [
            'brand', 'designer', 'label', 'manufacturer', 'maker',
            'by ', 'designed by', 'created by'
        ]
        brand_count = sum(1 for indicator in brand_indicators if indicator.lower() in html.lower())
        if brand_count > 0:
            patterns['brand_indicators'] = min(0.6, brand_count * 0.1)
        
        # Gender category patterns
        gender_indicators = [
            "men's", "mens", "women's", "womens", "ladies", "male", "female",
            "unisex", "kids", "children", "baby", "infant"
        ]
        gender_count = sum(1 for indicator in gender_indicators if indicator.lower() in html.lower())
        if gender_count > 0:
            patterns['gender_indicators'] = min(0.7, gender_count * 0.15)
        
        # Season/collection patterns
        season_indicators = [
            'spring', 'summer', 'fall', 'autumn', 'winter', 'seasonal',
            'collection', 'line', 'new arrivals', 'trending'
        ]
        season_count = sum(1 for indicator in season_indicators if indicator.lower() in html.lower())
        if season_count > 0:
            patterns['season_indicators'] = min(0.6, season_count * 0.1)
        
        # Care instruction patterns
        care_indicators = [
            'care instructions', 'washing', 'dry clean', 'iron', 'bleach',
            'machine wash', 'hand wash', 'delicate', 'care label'
        ]
        care_count = sum(1 for indicator in care_indicators if indicator.lower() in html.lower())
        if care_count > 0:
            patterns['care_indicators'] = min(0.5, care_count * 0.1)
        
        # Availability patterns
        availability_indicators = [
            'in stock', 'out of stock', 'sold out', 'available', 'limited',
            'pre-order', 'coming soon', 'backorder', 'discontinued'
        ]
        availability_count = sum(1 for indicator in availability_indicators if indicator.lower() in html.lower())
        if availability_count > 0:
            patterns['availability_indicators'] = min(0.6, availability_count * 0.1)
        
        # Clothing-specific HTML elements
        clothing_elements = [
            'select[name*="size"]', 'select[name*="color"]', '.size-chart',
            '.color-swatch', '.product-sizes', '.product-colors',
            '.size-guide', '.measurement-chart', '.fit-guide'
        ]
        element_count = sum(1 for selector in clothing_elements if soup.select(selector))
        if element_count > 0:
            patterns['clothing_elements'] = min(0.8, element_count * 0.2)
        
        # Fashion-specific meta tags
        fashion_meta_tags = [
            'meta[property*="product"]', 'meta[name*="brand"]',
            'meta[property*="fashion"]', 'meta[name*="designer"]'
        ]
        meta_count = sum(1 for selector in fashion_meta_tags if soup.select(selector))
        if meta_count > 0:
            patterns['fashion_meta'] = min(0.6, meta_count * 0.2)
        
        return patterns
