"""
Product Data Extractor
Extracts structured product data from HTML using schema.org JSON-LD and DOM fallback
"""

import json
import re
import logging
from typing import Dict, Any, Optional, List
from datetime import datetime, timezone
from urllib.parse import urljoin, urlparse
from bs4 import BeautifulSoup
import requests

logger = logging.getLogger(__name__)

class ProductExtractor:
    """Extracts product data from HTML using multiple strategies"""
    
    def __init__(self, site_id: str):
        self.site_id = site_id
        self.logger = logging.getLogger(__name__)
        
    def extract_product_data(self, page_data: Dict[str, Any]) -> Optional[Dict[str, Any]]:
        """
        Extract product data from page HTML
        
        Args:
            page_data: Dictionary containing HTML and metadata
            
        Returns:
            Structured product data or None if not a product page
        """
        try:
            html = page_data.get('html', '')
            url = page_data.get('url', '')
            
            if not html or not self._is_product_page(url, html):
                return None
            
            # Try schema.org JSON-LD first
            product_data = self._extract_from_schema_org(html, url)
            
            # Fallback to DOM parsing
            if not product_data:
                product_data = self._extract_from_dom(html, url)
            
            if product_data:
                # Normalize and validate data
                product_data = self._normalize_product_data(product_data, page_data)
                return product_data
            
            return None
            
        except Exception as e:
            self.logger.error(f"Error extracting product data: {str(e)}")
            return None
    
    def _is_product_page(self, url: str, html: str) -> bool:
        """Determine if page is likely a product page"""
        # URL patterns
        product_url_patterns = [
            r'/product/',
            r'/item/',
            r'/p/',
            r'/dp/',
            r'/clothing/',
            r'/dress/',
            r'/shirt/',
            r'/pants/',
            r'/shoes/',
            r'/accessories/'
        ]
        
        url_lower = url.lower()
        if any(re.search(pattern, url_lower) for pattern in product_url_patterns):
            return True
        
        # HTML patterns
        product_html_patterns = [
            'product',
            'item',
            'price',
            'add to cart',
            'buy now',
            'size',
            'color',
            'brand'
        ]
        
        html_lower = html.lower()
        product_indicators = sum(1 for pattern in product_html_patterns if pattern in html_lower)
        
        return product_indicators >= 3
    
    def _extract_from_schema_org(self, html: str, url: str) -> Optional[Dict[str, Any]]:
        """Extract product data from schema.org JSON-LD"""
        try:
            soup = BeautifulSoup(html, 'html.parser')
            
            # Find JSON-LD scripts
            json_scripts = soup.find_all('script', type='application/ld+json')
            
            for script in json_scripts:
                try:
                    data = json.loads(script.string)
                    
                    # Handle arrays
                    if isinstance(data, list):
                        for item in data:
                            if self._is_product_schema(item):
                                return self._parse_schema_product(item, url)
                    elif self._is_product_schema(data):
                        return self._parse_schema_product(data, url)
                        
                except json.JSONDecodeError:
                    continue
            
            return None
            
        except Exception as e:
            self.logger.error(f"Error extracting from schema.org: {str(e)}")
            return None
    
    def _is_product_schema(self, data: Dict[str, Any]) -> bool:
        """Check if JSON-LD data represents a product"""
        schema_type = data.get('@type', '')
        if isinstance(schema_type, list):
            schema_type = ' '.join(schema_type)
        
        product_types = [
            'Product',
            'Clothing',
            'Dress',
            'Shirt',
            'Pants',
            'Shoes',
            'Accessory',
            'Fashion'
        ]
        
        return any(product_type in schema_type for product_type in product_types)
    
    def _parse_schema_product(self, data: Dict[str, Any], url: str) -> Dict[str, Any]:
        """Parse schema.org product data"""
        product = {
            'url': url,
            'title': self._extract_text(data.get('name', '')),
            'description': self._extract_text(data.get('description', '')),
            'brand': self._extract_text(data.get('brand', {}).get('name', '')),
            'category': self._extract_categories(data),
            'price': self._extract_price(data),
            'availability': self._extract_availability(data),
            'images': self._extract_images(data),
            'sizes': self._extract_sizes(data),
            'colors': self._extract_colors(data),
            'material': self._extract_material(data),
            'rating': self._extract_rating(data),
            'reviews_count': self._extract_reviews_count(data),
            'sku': data.get('sku', ''),
            'gtin': data.get('gtin', ''),
            'mpn': data.get('mpn', ''),
            'extraction_method': 'schema_org'
        }
        
        return product
    
    def _extract_from_dom(self, html: str, url: str) -> Optional[Dict[str, Any]]:
        """Extract product data from DOM using CSS selectors"""
        try:
            soup = BeautifulSoup(html, 'html.parser')
            
            # Common selectors for different sites
            selectors = {
                'title': [
                    'h1.product-title',
                    'h1[data-testid="product-title"]',
                    '.product-name h1',
                    'h1.title',
                    'h1[itemprop="name"]',
                    'h1'
                ],
                'price': [
                    '.price',
                    '.product-price',
                    '[data-testid="price"]',
                    '.price-current',
                    '[itemprop="price"]',
                    '.cost'
                ],
                'description': [
                    '.product-description',
                    '.description',
                    '[data-testid="description"]',
                    '.product-details',
                    '[itemprop="description"]'
                ],
                'brand': [
                    '.brand',
                    '.product-brand',
                    '[data-testid="brand"]',
                    '[itemprop="brand"]',
                    '.manufacturer'
                ],
                'images': [
                    '.product-image img',
                    '.gallery img',
                    '[data-testid="product-image"] img',
                    '.product-photos img',
                    'img[itemprop="image"]'
                ]
            }
            
            product = {
                'url': url,
                'title': self._extract_by_selectors(soup, selectors['title']),
                'description': self._extract_by_selectors(soup, selectors['description']),
                'brand': self._extract_by_selectors(soup, selectors['brand']),
                'price': self._extract_price_from_dom(soup, selectors['price']),
                'images': self._extract_images_from_dom(soup, selectors['images']),
                'extraction_method': 'dom'
            }
            
            # Only return if we found meaningful data
            if product['title'] or product['price']:
                return product
            
            return None
            
        except Exception as e:
            self.logger.error(f"Error extracting from DOM: {str(e)}")
            return None
    
    def _extract_by_selectors(self, soup: BeautifulSoup, selectors: List[str]) -> str:
        """Extract text using multiple CSS selectors"""
        for selector in selectors:
            try:
                element = soup.select_one(selector)
                if element:
                    text = element.get_text(strip=True)
                    if text:
                        return text
            except Exception:
                continue
        return ''
    
    def _extract_text(self, data: Any) -> str:
        """Extract text from various data types"""
        if isinstance(data, str):
            return data.strip()
        elif isinstance(data, dict):
            return data.get('name', data.get('text', '')).strip()
        elif isinstance(data, list) and data:
            return self._extract_text(data[0])
        return ''
    
    def _extract_categories(self, data: Dict[str, Any]) -> List[str]:
        """Extract product categories"""
        categories = []
        
        # From category field
        if 'category' in data:
            category = data['category']
            if isinstance(category, str):
                categories.append(category)
            elif isinstance(category, list):
                categories.extend([self._extract_text(cat) for cat in category])
            elif isinstance(category, dict):
                categories.append(self._extract_text(category))
        
        # From additionalType
        if 'additionalType' in data:
            additional_type = data['additionalType']
            if isinstance(additional_type, str):
                categories.append(additional_type)
            elif isinstance(additional_type, list):
                categories.extend(additional_type)
        
        return [cat for cat in categories if cat]
    
    def _extract_price(self, data: Dict[str, Any]) -> Dict[str, Any]:
        """Extract price information from schema.org data"""
        price_info = {}
        
        # Current price
        if 'offers' in data:
            offers = data['offers']
            if isinstance(offers, list) and offers:
                offers = offers[0]
            
            if isinstance(offers, dict):
                price_info['current'] = self._extract_price_value(offers.get('price', ''))
                price_info['currency'] = offers.get('priceCurrency', 'USD')
                
                # Sale price
                if 'salePrice' in offers:
                    price_info['sale'] = self._extract_price_value(offers['salePrice'])
                
                # Original price
                if 'listPrice' in offers:
                    price_info['original'] = self._extract_price_value(offers['listPrice'])
        
        # Direct price field
        if 'price' in data and not price_info.get('current'):
            price_info['current'] = self._extract_price_value(data['price'])
            price_info['currency'] = data.get('priceCurrency', 'USD')
        
        return price_info
    
    def _extract_price_from_dom(self, soup: BeautifulSoup, selectors: List[str]) -> Dict[str, Any]:
        """Extract price from DOM"""
        price_text = self._extract_by_selectors(soup, selectors)
        if price_text:
            return {
                'current': self._extract_price_value(price_text),
                'currency': 'USD'  # Default currency
            }
        return {}
    
    def _extract_price_value(self, price_str: str) -> Optional[float]:
        """Extract numeric price value from string"""
        if not price_str:
            return None
        
        # Remove currency symbols and extract number
        price_clean = re.sub(r'[^\d.,]', '', str(price_str))
        price_clean = price_clean.replace(',', '')
        
        try:
            return float(price_clean)
        except ValueError:
            return None
    
    def _extract_availability(self, data: Dict[str, Any]) -> str:
        """Extract availability status"""
        if 'offers' in data:
            offers = data['offers']
            if isinstance(offers, list) and offers:
                offers = offers[0]
            
            if isinstance(offers, dict):
                availability = offers.get('availability', '')
                if 'InStock' in availability:
                    return 'InStock'
                elif 'OutOfStock' in availability:
                    return 'OutOfStock'
                elif 'PreOrder' in availability:
                    return 'PreOrder'
        
        return 'Unknown'
    
    def _extract_images(self, data: Dict[str, Any]) -> List[Dict[str, Any]]:
        """Extract product images metadata from schema.org data"""
        images = []
        
        # From image field
        if 'image' in data:
            image_data = data['image']
            if isinstance(image_data, str):
                images.append({
                    'url': image_data,
                    'alt_text': '',
                    'caption': '',
                    'is_primary': len(images) == 0
                })
            elif isinstance(image_data, list):
                for i, img in enumerate(image_data):
                    if isinstance(img, str):
                        images.append({
                            'url': img,
                            'alt_text': '',
                            'caption': '',
                            'is_primary': i == 0
                        })
                    elif isinstance(img, dict):
                        images.append({
                            'url': self._extract_text(img),
                            'alt_text': img.get('caption', ''),
                            'caption': img.get('description', ''),
                            'is_primary': i == 0
                        })
            elif isinstance(image_data, dict):
                images.append({
                    'url': self._extract_text(image_data),
                    'alt_text': image_data.get('caption', ''),
                    'caption': image_data.get('description', ''),
                    'is_primary': True
                })
        
        return [img for img in images if img.get('url')]
    
    def _extract_images_from_dom(self, soup: BeautifulSoup, selectors: List[str]) -> List[Dict[str, Any]]:
        """Extract images metadata from DOM"""
        images = []
        
        for selector in selectors:
            try:
                elements = soup.select(selector)
                for i, element in enumerate(elements):
                    src = element.get('src') or element.get('data-src')
                    if src:
                        images.append({
                            'url': src,
                            'alt_text': element.get('alt', ''),
                            'caption': element.get('title', ''),
                            'is_primary': len(images) == 0
                        })
            except Exception:
                continue
        
        return images
    
    def _extract_sizes(self, data: Dict[str, Any]) -> List[str]:
        """Extract available sizes"""
        sizes = []
        
        if 'offers' in data:
            offers = data['offers']
            if isinstance(offers, list):
                for offer in offers:
                    if 'itemOffered' in offer and 'size' in offer['itemOffered']:
                        size = offer['itemOffered']['size']
                        if isinstance(size, str):
                            sizes.append(size)
                        elif isinstance(size, list):
                            sizes.extend(size)
        
        return list(set(sizes))
    
    def _extract_colors(self, data: Dict[str, Any]) -> List[str]:
        """Extract available colors"""
        colors = []
        
        if 'color' in data:
            color = data['color']
            if isinstance(color, str):
                colors.append(color)
            elif isinstance(color, list):
                colors.extend(color)
        
        return list(set(colors))
    
    def _extract_material(self, data: Dict[str, Any]) -> str:
        """Extract material information"""
        if 'material' in data:
            return self._extract_text(data['material'])
        return ''
    
    def _extract_rating(self, data: Dict[str, Any]) -> Optional[float]:
        """Extract product rating"""
        if 'aggregateRating' in data:
            rating_data = data['aggregateRating']
            if isinstance(rating_data, dict) and 'ratingValue' in rating_data:
                try:
                    return float(rating_data['ratingValue'])
                except ValueError:
                    pass
        return None
    
    def _extract_reviews_count(self, data: Dict[str, Any]) -> Optional[int]:
        """Extract number of reviews"""
        if 'aggregateRating' in data:
            rating_data = data['aggregateRating']
            if isinstance(rating_data, dict) and 'reviewCount' in rating_data:
                try:
                    return int(rating_data['reviewCount'])
                except ValueError:
                    pass
        return None
    
    def _normalize_product_data(self, product_data: Dict[str, Any], page_data: Dict[str, Any]) -> Dict[str, Any]:
        """Normalize and validate product data"""
        # Add metadata
        product_data.update({
            'site_id': self.site_id,
            'crawled_at': page_data.get('crawled_at', datetime.now(timezone.utc).isoformat()),
            'title': product_data.get('title', '').strip(),
            'description': product_data.get('description', '').strip(),
            'brand': product_data.get('brand', '').strip(),
            'category': product_data.get('category', []),
            'price': product_data.get('price', {}),
            'availability': product_data.get('availability', 'Unknown'),
            'images': product_data.get('images', []),
            'sizes': product_data.get('sizes', []),
            'colors': product_data.get('colors', []),
            'material': product_data.get('material', '').strip(),
            'rating': product_data.get('rating'),
            'reviews_count': product_data.get('reviews_count'),
            'sku': product_data.get('sku', '').strip(),
            'gtin': product_data.get('gtin', '').strip(),
            'mpn': product_data.get('mpn', '').strip(),
            'extraction_method': product_data.get('extraction_method', 'unknown')
        })
        
        # Calculate discount percentage
        price = product_data.get('price', {})
        if price.get('current') and price.get('original'):
            try:
                current = float(price['current'])
                original = float(price['original'])
                if original > current:
                    discount = ((original - current) / original) * 100
                    product_data['discount_percent'] = round(discount, 2)
            except (ValueError, ZeroDivisionError):
                pass
        
        # Generate product ID
        product_data['product_id'] = self._generate_product_id(product_data)
        
        return product_data
    
    def _generate_product_id(self, product_data: Dict[str, Any]) -> str:
        """Generate unique product ID"""
        # Use SKU if available
        if product_data.get('sku'):
            return f"{self.site_id}_{product_data['sku']}"
        
        # Use GTIN if available
        if product_data.get('gtin'):
            return f"{self.site_id}_{product_data['gtin']}"
        
        # Generate from URL and title
        url = product_data.get('url', '')
        title = product_data.get('title', '')
        
        # Extract meaningful part from URL
        url_parts = url.split('/')
        url_id = url_parts[-1] if url_parts else ''
        
        # Create hash from title and URL
        import hashlib
        content = f"{title}_{url_id}".encode('utf-8')
        hash_id = hashlib.md5(content).hexdigest()[:12]
        
        return f"{self.site_id}_{hash_id}"
