"""
Structure Analyzer
Analyze HTML structure to detect patterns dynamically
"""

import re
import logging
from typing import Dict, Any, List
from bs4 import BeautifulSoup
from collections import Counter

logger = logging.getLogger(__name__)

class StructureAnalyzer:
    """Analyze HTML structure to detect patterns"""
    
    def __init__(self):
        self.structure_patterns = self._load_structure_patterns()
        self.class_patterns = self._load_class_patterns()
        self.id_patterns = self._load_id_patterns()
    
    def analyze(self, html: str) -> Dict[str, float]:
        """Analyze HTML structure for patterns"""
        soup = BeautifulSoup(html, 'html.parser')
        
        patterns = {}
        
        # Analyze DOM structure
        patterns.update(self._analyze_dom_structure(soup))
        
        # Analyze data attributes
        patterns.update(self._analyze_data_attributes(soup))
        
        # Analyze class patterns
        patterns.update(self._analyze_class_patterns(soup))
        
        # Analyze ID patterns
        patterns.update(self._analyze_id_patterns(soup))
        
        # Analyze element hierarchy
        patterns.update(self._analyze_element_hierarchy(soup))
        
        # Analyze content density
        patterns.update(self._analyze_content_density(soup))
        
        # Analyze clothing-specific patterns
        patterns.update(self._analyze_clothing_structure(soup))
        
        return patterns
    
    def _load_structure_patterns(self) -> Dict[str, List[str]]:
        """Load common structure patterns"""
        return {
            'product_page': [
                'main', 'article', 'section.product',
                'div.product', 'div.item', 'div.detail',
                'div.info', 'div.content', 'div.main'
            ],
            'listing_page': [
                'div.products', 'ul.products', 'div.grid',
                'div.listing', 'div.catalog', 'div.items',
                'div.results', 'div.search-results'
            ],
            'category_page': [
                'nav.breadcrumb', 'div.categories',
                'div.filters', 'div.sidebar', 'div.navigation',
                'div.menu', 'div.category-list'
            ],
            'search_page': [
                'div.search', 'form.search', 'input.search',
                'div.results', 'div.query', 'div.filters'
            ]
        }
    
    def _load_class_patterns(self) -> Dict[str, List[str]]:
        """Load common class name patterns"""
        return {
            'product': [
                'product', 'item', 'card', 'tile', 'goods',
                'merchandise', 'inventory', 'stock'
            ],
            'price': [
                'price', 'cost', 'amount', 'value', 'total',
                'sum', 'fee', 'charge', 'rate'
            ],
            'image': [
                'image', 'photo', 'picture', 'img', 'gallery',
                'carousel', 'slider', 'thumbnail'
            ],
            'button': [
                'button', 'btn', 'link', 'action', 'click',
                'submit', 'add', 'buy', 'cart'
            ]
        }
    
    def _load_id_patterns(self) -> Dict[str, List[str]]:
        """Load common ID patterns"""
        return {
            'product': ['product', 'item', 'detail', 'info'],
            'price': ['price', 'cost', 'amount', 'total'],
            'image': ['image', 'photo', 'gallery', 'main-image'],
            'button': ['add-to-cart', 'buy-now', 'purchase', 'checkout']
        }
    
    def _analyze_dom_structure(self, soup: BeautifulSoup) -> Dict[str, float]:
        """Analyze DOM structure for product patterns"""
        patterns = {}
        
        # Look for common product page structures
        for pattern_type, selectors in self.structure_patterns.items():
            for selector in selectors:
                elements = soup.select(selector)
                if elements:
                    patterns[pattern_type] = min(0.9, len(elements) * 0.1)
                    break
        
        # Analyze semantic HTML elements
        semantic_elements = {
            'main': soup.find_all('main'),
            'article': soup.find_all('article'),
            'section': soup.find_all('section'),
            'aside': soup.find_all('aside'),
            'nav': soup.find_all('nav')
        }
        
        for element_type, elements in semantic_elements.items():
            if elements:
                patterns[f'semantic_{element_type}'] = min(0.8, len(elements) * 0.1)
        
        return patterns
    
    def _analyze_data_attributes(self, soup: BeautifulSoup) -> Dict[str, float]:
        """Analyze data attributes for product info"""
        patterns = {}
        
        # Look for data attributes that indicate products
        data_attrs = soup.find_all(attrs={'data-product-id': True})
        if data_attrs:
            patterns['product_data_attrs'] = min(0.9, len(data_attrs) * 0.1)
        
        # Look for price data attributes
        price_attrs = soup.find_all(attrs={'data-price': True})
        if price_attrs:
            patterns['price_data_attrs'] = min(0.8, len(price_attrs) * 0.1)
        
        # Look for SKU data attributes
        sku_attrs = soup.find_all(attrs={'data-sku': True})
        if sku_attrs:
            patterns['sku_data_attrs'] = min(0.7, len(sku_attrs) * 0.1)
        
        # Look for availability data attributes
        availability_attrs = soup.find_all(attrs={'data-availability': True})
        if availability_attrs:
            patterns['availability_data_attrs'] = min(0.6, len(availability_attrs) * 0.1)
        
        # Look for any data attributes
        all_data_attrs = soup.find_all(attrs=lambda x: x and isinstance(x, dict) and any(k.startswith('data-') for k in x.keys()))
        if all_data_attrs:
            patterns['rich_data_attrs'] = min(0.5, len(all_data_attrs) * 0.05)
        
        return patterns
    
    def _analyze_class_patterns(self, soup: BeautifulSoup) -> Dict[str, float]:
        """Analyze CSS class patterns"""
        patterns = {}
        
        # Get all class names
        all_classes = []
        for element in soup.find_all(class_=True):
            all_classes.extend(element.get('class', []))
        
        # Count class occurrences
        class_counts = Counter(all_classes)
        
        # Look for product-related class patterns
        for pattern_type, keywords in self.class_patterns.items():
            matches = []
            for keyword in keywords:
                matches.extend([cls for cls in all_classes if re.search(keyword, cls, re.I)])
            
            if matches:
                patterns[f'{pattern_type}_classes'] = min(0.9, len(set(matches)) * 0.1)
        
        # Look for common e-commerce class patterns
        ecommerce_patterns = [
            'container', 'wrapper', 'content', 'main', 'sidebar',
            'header', 'footer', 'navigation', 'menu', 'breadcrumb'
        ]
        
        ecommerce_matches = []
        for pattern in ecommerce_patterns:
            ecommerce_matches.extend([cls for cls in all_classes if re.search(pattern, cls, re.I)])
        
        if ecommerce_matches:
            patterns['ecommerce_classes'] = min(0.7, len(set(ecommerce_matches)) * 0.05)
        
        return patterns
    
    def _analyze_id_patterns(self, soup: BeautifulSoup) -> Dict[str, float]:
        """Analyze ID patterns"""
        patterns = {}
        
        # Get all IDs
        all_ids = [element.get('id') for element in soup.find_all(id=True) if element.get('id')]
        
        # Look for product-related ID patterns
        for pattern_type, keywords in self.id_patterns.items():
            matches = []
            for keyword in keywords:
                matches.extend([id_val for id_val in all_ids if re.search(keyword, id_val, re.I)])
            
            if matches:
                patterns[f'{pattern_type}_ids'] = min(0.8, len(set(matches)) * 0.1)
        
        return patterns
    
    def _analyze_element_hierarchy(self, soup: BeautifulSoup) -> Dict[str, float]:
        """Analyze element hierarchy and nesting"""
        patterns = {}
        
        # Analyze nesting depth
        max_depth = self._get_max_nesting_depth(soup)
        if max_depth > 10:
            patterns['deep_nesting'] = min(0.8, (max_depth - 10) * 0.05)
        
        # Analyze form elements
        forms = soup.find_all('form')
        if forms:
            patterns['form_elements'] = min(0.7, len(forms) * 0.1)
        
        # Analyze input elements
        inputs = soup.find_all('input')
        if inputs:
            patterns['input_elements'] = min(0.6, len(inputs) * 0.05)
        
        # Analyze button elements
        buttons = soup.find_all(['button', 'input'], type=['submit', 'button'])
        if buttons:
            patterns['button_elements'] = min(0.7, len(buttons) * 0.1)
        
        # Analyze link elements
        links = soup.find_all('a')
        if links:
            patterns['link_elements'] = min(0.5, len(links) * 0.02)
        
        return patterns
    
    def _analyze_content_density(self, soup: BeautifulSoup) -> Dict[str, float]:
        """Analyze content density and structure"""
        patterns = {}
        
        # Get text content
        text_content = soup.get_text()
        text_length = len(text_content.strip())
        
        # Analyze text density
        if text_length > 1000:
            patterns['high_text_density'] = min(0.8, text_length / 10000)
        
        # Analyze image density
        images = soup.find_all('img')
        if images:
            patterns['image_density'] = min(0.7, len(images) * 0.1)
        
        # Analyze list elements
        lists = soup.find_all(['ul', 'ol'])
        if lists:
            patterns['list_density'] = min(0.6, len(lists) * 0.1)
        
        # Analyze table elements
        tables = soup.find_all('table')
        if tables:
            patterns['table_density'] = min(0.5, len(tables) * 0.1)
        
        # Analyze div density (indicates complex layout)
        divs = soup.find_all('div')
        if divs:
            patterns['div_density'] = min(0.6, len(divs) * 0.02)
        
        return patterns
    
    def _get_max_nesting_depth(self, soup: BeautifulSoup) -> int:
        """Get maximum nesting depth of elements"""
        max_depth = 0
        
        def get_depth(element, current_depth=0):
            nonlocal max_depth
            max_depth = max(max_depth, current_depth)
            
            for child in element.find_all(recursive=False):
                get_depth(child, current_depth + 1)
        
        get_depth(soup)
        return max_depth
    
    def get_structure_summary(self, patterns: Dict[str, float]) -> Dict[str, Any]:
        """Get a summary of the structure analysis"""
        summary = {
            'page_type': self._determine_page_type(patterns),
            'complexity_score': self._calculate_complexity_score(patterns),
            'ecommerce_indicators': self._count_ecommerce_indicators(patterns),
            'confidence': self._calculate_structure_confidence(patterns)
        }
        
        return summary
    
    def _determine_page_type(self, patterns: Dict[str, float]) -> str:
        """Determine the most likely page type"""
        page_types = {
            'product_page': patterns.get('product_page', 0),
            'listing_page': patterns.get('listing_page', 0),
            'category_page': patterns.get('category_page', 0),
            'search_page': patterns.get('search_page', 0)
        }
        
        if not page_types or max(page_types.values()) < 0.3:
            return 'unknown'
        
        return max(page_types, key=page_types.get)
    
    def _calculate_complexity_score(self, patterns: Dict[str, float]) -> float:
        """Calculate overall complexity score"""
        complexity_indicators = [
            'deep_nesting', 'div_density', 'form_elements',
            'rich_data_attrs', 'semantic_main', 'semantic_article'
        ]
        
        score = 0.0
        for indicator in complexity_indicators:
            score += patterns.get(indicator, 0)
        
        return min(1.0, score / len(complexity_indicators))
    
    def _count_ecommerce_indicators(self, patterns: Dict[str, float]) -> int:
        """Count e-commerce indicators"""
        ecommerce_indicators = [
            'product_data_attrs', 'price_data_attrs', 'sku_data_attrs',
            'product_classes', 'price_classes', 'button_classes',
            'form_elements', 'button_elements'
        ]
        
        count = 0
        for indicator in ecommerce_indicators:
            if patterns.get(indicator, 0) > 0.3:
                count += 1
        
        return count
    
    def _calculate_structure_confidence(self, patterns: Dict[str, float]) -> float:
        """Calculate confidence in structure analysis"""
        if not patterns:
            return 0.0
        
        # Weight different pattern types
        weights = {
            'product_page': 0.25,
            'product_data_attrs': 0.2,
            'product_classes': 0.15,
            'price_data_attrs': 0.15,
            'form_elements': 0.1,
            'semantic_main': 0.1,
            'deep_nesting': 0.05
        }
        
        score = 0.0
        for pattern_type, confidence in patterns.items():
            weight = weights.get(pattern_type, 0.02)
            score += confidence * weight
        
        return min(1.0, score)
    
    def _analyze_clothing_structure(self, soup: BeautifulSoup) -> Dict[str, float]:
        """Analyze clothing-specific structure patterns"""
        patterns = {}
        
        # Size selector patterns
        size_selectors = [
            'select[name*="size"]', 'select[id*="size"]',
            '.size-selector', '.size-option', '.size-picker',
            '[data-size]', '.product-sizes', '.size-chart'
        ]
        size_count = sum(1 for selector in size_selectors if soup.select(selector))
        if size_count > 0:
            patterns['size_selectors'] = min(0.8, size_count * 0.2)
        
        # Color selector patterns
        color_selectors = [
            'select[name*="color"]', 'select[id*="color"]',
            '.color-selector', '.color-option', '.color-picker',
            '[data-color]', '.product-colors', '.color-swatch'
        ]
        color_count = sum(1 for selector in color_selectors if soup.select(selector))
        if color_count > 0:
            patterns['color_selectors'] = min(0.8, color_count * 0.2)
        
        # Brand/designer patterns
        brand_selectors = [
            '.brand', '.designer', '.manufacturer', '.label',
            '[data-brand]', '.product-brand', '.brand-name'
        ]
        brand_count = sum(1 for selector in brand_selectors if soup.select(selector))
        if brand_count > 0:
            patterns['brand_elements'] = min(0.6, brand_count * 0.2)
        
        # Gender category patterns
        gender_selectors = [
            '.gender', '.category', '.product-category',
            '.men', '.women', '.unisex', '.kids'
        ]
        gender_count = sum(1 for selector in gender_selectors if soup.select(selector))
        if gender_count > 0:
            patterns['gender_elements'] = min(0.6, gender_count * 0.2)
        
        # Material/fabric patterns
        material_selectors = [
            '.material', '.fabric', '.composition', '.textile',
            '.care-instructions', '.washing', '.care-label'
        ]
        material_count = sum(1 for selector in material_selectors if soup.select(selector))
        if material_count > 0:
            patterns['material_elements'] = min(0.5, material_count * 0.2)
        
        # Product variant patterns
        variant_selectors = [
            '.variant', '.option', '.choice', '.selection',
            '.product-option', '.variant-selector'
        ]
        variant_count = sum(1 for selector in variant_selectors if soup.select(selector))
        if variant_count > 0:
            patterns['variant_elements'] = min(0.7, variant_count * 0.2)
        
        # Image gallery patterns
        gallery_selectors = [
            '.gallery', '.carousel', '.slider', '.image-gallery',
            '.product-photos', '.photo-gallery', '.thumbnail-gallery'
        ]
        gallery_count = sum(1 for selector in gallery_selectors if soup.select(selector))
        if gallery_count > 0:
            patterns['image_gallery'] = min(0.8, gallery_count * 0.2)
        
        # Size guide patterns
        size_guide_selectors = [
            '.size-guide', '.size-chart', '.measurement-chart',
            '.fit-guide', '.sizing', '.measurements'
        ]
        size_guide_count = sum(1 for selector in size_guide_selectors if soup.select(selector))
        if size_guide_count > 0:
            patterns['size_guide'] = min(0.6, size_guide_count * 0.3)
        
        # Availability patterns
        availability_selectors = [
            '.availability', '.stock', '.in-stock', '.out-of-stock',
            '.sold-out', '.limited', '.pre-order'
        ]
        availability_count = sum(1 for selector in availability_selectors if soup.select(selector))
        if availability_count > 0:
            patterns['availability_elements'] = min(0.5, availability_count * 0.2)
        
        # Review/rating patterns
        review_selectors = [
            '.reviews', '.ratings', '.stars', '.review',
            '.customer-review', '.product-review', '.rating'
        ]
        review_count = sum(1 for selector in review_selectors if soup.select(selector))
        if review_count > 0:
            patterns['review_elements'] = min(0.6, review_count * 0.2)
        
        return patterns
