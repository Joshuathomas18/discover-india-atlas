"""
Universal Data Extractor
Extract data from any website using multiple strategies
"""

import json
import re
import logging
from typing import Dict, Any, List, Optional
from bs4 import BeautifulSoup
from datetime import datetime, timezone

from .dom_extractor import DynamicDOMExtractor

logger = logging.getLogger(__name__)

class UniversalDataExtractor:
    """Extract data from any website without configuration"""
    
    def __init__(self):
        self.extractors = [
            SchemaOrgExtractor(),
            MicrodataExtractor(),
            RDFaExtractor(),
            DynamicDOMExtractor(),
            APIPatternExtractor(),
            MetaTagExtractor()
        ]
        self.pattern_recognizer = None  # Will be injected
    
    def extract(self, html: str, url: str, patterns: Dict[str, float] = None) -> Dict[str, Any]:
        """Extract all possible data from any page"""
        
        if patterns is None:
            patterns = {}
        
        extracted_data = {}
        
        # Extract using multiple strategies
        for extractor in self.extractors:
            try:
                data = extractor.extract(html, url, patterns)
                if data:
                    extracted_data.update(data)
            except Exception as e:
                logger.warning(f"Extractor {extractor.__class__.__name__} failed: {e}")
        
        # Add clothing-specific schema extraction
        try:
            from bs4 import BeautifulSoup
            soup = BeautifulSoup(html, 'html.parser')
            clothing_schema_data = self._extract_clothing_schema(soup)
            if clothing_schema_data:
                extracted_data.update(clothing_schema_data)
        except Exception as e:
            logger.warning(f"Clothing schema extraction failed: {e}")
        
        # Merge and deduplicate
        merged_data = self._merge_data(extracted_data)
        
        # Add metadata
        merged_data['extraction_metadata'] = {
            'url': url,
            'extracted_at': datetime.now(timezone.utc).isoformat(),
            'patterns_detected': patterns,
            'extractors_used': [extractor.__class__.__name__ for extractor in self.extractors]
        }
        
        return merged_data
    
    def _merge_data(self, data: Dict[str, Any]) -> Dict[str, Any]:
        """Merge data from multiple extractors"""
        merged = {}
        
        for key, value in data.items():
            if key not in merged:
                merged[key] = value
            elif isinstance(value, list) and isinstance(merged[key], list):
                # Merge lists and remove duplicates
                merged[key] = list(set(merged[key] + value))
            elif isinstance(value, dict) and isinstance(merged[key], dict):
                # Merge dictionaries
                merged[key] = {**merged[key], **value}
            elif value and not merged[key]:
                # Replace empty values with non-empty ones
                merged[key] = value
        
        return merged
    
    def _extract_clothing_schema(self, soup: BeautifulSoup) -> Dict[str, Any]:
        """Extract clothing-specific schema.org data"""
        data = {}
        
        # Look for Product schema with clothing-specific properties
        product_schemas = soup.find_all('script', type='application/ld+json')
        
        for schema_script in product_schemas:
            try:
                import json
                schema_data = json.loads(schema_script.string)
                
                if isinstance(schema_data, dict) and schema_data.get('@type') == 'Product':
                    # Extract clothing-specific properties
                    if 'additionalProperty' in schema_data:
                        additional_props = schema_data['additionalProperty']
                        if isinstance(additional_props, list):
                            for prop in additional_props:
                                if prop.get('name') == 'size':
                                    data['sizes'] = [prop.get('value')] if prop.get('value') else []
                                elif prop.get('name') == 'color':
                                    data['colors'] = [prop.get('value')] if prop.get('value') else []
                                elif prop.get('name') == 'material':
                                    data['material'] = prop.get('value')
                                elif prop.get('name') == 'gender':
                                    data['gender'] = prop.get('value')
                    
                    # Extract brand information
                    if 'brand' in schema_data:
                        brand = schema_data['brand']
                        if isinstance(brand, dict):
                            data['brand'] = brand.get('name', brand.get('@type', ''))
                        else:
                            data['brand'] = str(brand)
                    
                    break  # Use the first valid Product schema
                    
            except (json.JSONDecodeError, KeyError, TypeError):
                continue
        
        return data

class SchemaOrgExtractor:
    """Extract data from Schema.org JSON-LD"""
    
    def extract(self, html: str, url: str, patterns: Dict[str, float] = None) -> Dict[str, Any]:
        """Extract product data from Schema.org JSON-LD"""
        soup = BeautifulSoup(html, 'html.parser')
        data = {}
        
        # Find JSON-LD scripts
        json_scripts = soup.find_all('script', type='application/ld+json')
        
        for script in json_scripts:
            try:
                script_data = json.loads(script.string)
                
                # Handle single object or array
                if isinstance(script_data, list):
                    script_data = script_data[0] if script_data else {}
                
                if script_data.get('@type') == 'Product':
                    product_data = self._extract_from_schema(script_data)
                    data.update(product_data)
                    
            except (json.JSONDecodeError, KeyError) as e:
                logger.warning(f"Failed to parse JSON-LD: {e}")
                continue
        
        return data
    
    def _extract_from_schema(self, schema_data: Dict[str, Any]) -> Dict[str, Any]:
        """Extract product data from Schema.org structure"""
        product_data = {}
        
        # Basic product info
        product_data['name'] = schema_data.get('name', '')
        product_data['description'] = schema_data.get('description', '')
        product_data['brand'] = self._extract_brand(schema_data)
        product_data['category'] = self._extract_category(schema_data)
        
        # Price information
        product_data['price'] = self._extract_price(schema_data)
        
        # Images
        product_data['images'] = self._extract_images(schema_data)
        
        # Availability
        product_data['availability'] = self._extract_availability(schema_data)
        
        # Ratings
        product_data['rating'] = self._extract_rating(schema_data)
        
        # Additional properties
        product_data['sku'] = schema_data.get('sku', '')
        product_data['gtin'] = schema_data.get('gtin', '')
        product_data['mpn'] = schema_data.get('mpn', '')
        
        return product_data
    
    def _extract_brand(self, schema_data: Dict[str, Any]) -> str:
        """Extract brand information"""
        brand = schema_data.get('brand', {})
        if isinstance(brand, dict):
            return brand.get('name', '')
        return str(brand) if brand else ''
    
    def _extract_category(self, schema_data: Dict[str, Any]) -> List[str]:
        """Extract category information"""
        category = schema_data.get('category', '')
        if isinstance(category, list):
            return category
        elif isinstance(category, str):
            return [category]
        return []
    
    def _extract_price(self, schema_data: Dict[str, Any]) -> Dict[str, Any]:
        """Extract price information"""
        offers = schema_data.get('offers', {})
        if isinstance(offers, list):
            offers = offers[0] if offers else {}
        
        price = offers.get('price', '')
        currency = offers.get('priceCurrency', 'USD')
        
        return {
            'current': self._parse_price(price),
            'currency': currency,
            'original': offers.get('price', ''),
            'discount_percent': self._calculate_discount(offers)
        }
    
    def _extract_images(self, schema_data: Dict[str, Any]) -> List[Dict[str, Any]]:
        """Extract image information"""
        images = schema_data.get('image', [])
        if isinstance(images, str):
            images = [images]
        
        image_list = []
        for i, img in enumerate(images):
            if isinstance(img, dict):
                image_list.append({
                    'url': img.get('url', ''),
                    'alt_text': img.get('caption', ''),
                    'is_primary': i == 0
                })
            else:
                image_list.append({
                    'url': str(img),
                    'alt_text': '',
                    'is_primary': i == 0
                })
        
        return image_list
    
    def _extract_availability(self, schema_data: Dict[str, Any]) -> str:
        """Extract availability information"""
        offers = schema_data.get('offers', {})
        if isinstance(offers, list):
            offers = offers[0] if offers else {}
        
        availability = offers.get('availability', '')
        if 'InStock' in availability:
            return 'In Stock'
        elif 'OutOfStock' in availability:
            return 'Out of Stock'
        elif 'PreOrder' in availability:
            return 'Pre-Order'
        else:
            return availability
    
    def _extract_rating(self, schema_data: Dict[str, Any]) -> Dict[str, Any]:
        """Extract rating information"""
        rating_data = {}
        
        # Aggregate rating
        if 'aggregateRating' in schema_data:
            agg_rating = schema_data['aggregateRating']
            rating_data['average'] = agg_rating.get('ratingValue', 0)
            rating_data['count'] = agg_rating.get('reviewCount', 0)
            rating_data['best'] = agg_rating.get('bestRating', 5)
            rating_data['worst'] = agg_rating.get('worstRating', 1)
        
        # Individual reviews
        if 'review' in schema_data:
            reviews = schema_data['review']
            if isinstance(reviews, list):
                rating_data['reviews'] = len(reviews)
        
        return rating_data
    
    def _parse_price(self, price_str: str) -> Optional[str]:
        """Parse price from string"""
        if not price_str:
            return None
        
        # Extract numeric value
        price_match = re.search(r'[\d,]+\.?\d*', str(price_str))
        return price_match.group() if price_match else str(price_str)
    
    def _calculate_discount(self, offers: Dict[str, Any]) -> Optional[float]:
        """Calculate discount percentage"""
        try:
            current_price = float(self._parse_price(offers.get('price', '0')) or 0)
            original_price = float(self._parse_price(offers.get('priceSpecification', {}).get('valueAddedTaxIncluded', '0')) or 0)
            
            if original_price > current_price and original_price > 0:
                return round(((original_price - current_price) / original_price) * 100, 2)
        except (ValueError, TypeError):
            pass
        
        return None

class MicrodataExtractor:
    """Extract data from Microdata"""
    
    def extract(self, html: str, url: str, patterns: Dict[str, float] = None) -> Dict[str, Any]:
        """Extract product data from Microdata"""
        soup = BeautifulSoup(html, 'html.parser')
        data = {}
        
        # Find elements with itemscope
        product_elements = soup.find_all(attrs={'itemscope': True})
        
        for element in product_elements:
            itemtype = element.get('itemtype', '')
            if 'Product' in itemtype:
                product_data = self._extract_microdata(element)
                data.update(product_data)
        
        return data
    
    def _extract_microdata(self, element) -> Dict[str, Any]:
        """Extract data from microdata element"""
        data = {}
        
        # Extract basic properties
        for prop in element.find_all(attrs={'itemprop': True}):
            prop_name = prop.get('itemprop')
            prop_value = prop.get('content') or prop.get_text(strip=True)
            
            if prop_name == 'name':
                data['name'] = prop_value
            elif prop_name == 'description':
                data['description'] = prop_value
            elif prop_name == 'brand':
                data['brand'] = prop_value
            elif prop_name == 'price':
                data['price'] = {'current': prop_value}
            elif prop_name == 'image':
                if 'images' not in data:
                    data['images'] = []
                data['images'].append({'url': prop_value, 'alt_text': '', 'is_primary': len(data['images']) == 0})
        
        return data

class RDFaExtractor:
    """Extract data from RDFa"""
    
    def extract(self, html: str, url: str, patterns: Dict[str, float] = None) -> Dict[str, Any]:
        """Extract product data from RDFa"""
        # RDFa extraction would be implemented here
        # For now, return empty dict
        return {}

class APIPatternExtractor:
    """Extract data by finding API patterns in the page"""
    
    def extract(self, html: str, url: str, patterns: Dict[str, float] = None) -> Dict[str, Any]:
        """Extract data by analyzing API patterns"""
        soup = BeautifulSoup(html, 'html.parser')
        data = {}
        
        # Look for API endpoints in script tags
        scripts = soup.find_all('script')
        for script in scripts:
            script_content = script.string or ''
            
            # Look for common API patterns
            api_patterns = [
                r'api\.\w+\.com/[^"\']+',
                r'/api/[^"\']+',
                r'\.json[^"\']*',
                r'product[^"\']*\.json'
            ]
            
            for pattern in api_patterns:
                matches = re.findall(pattern, script_content)
                if matches:
                    data['api_endpoints'] = matches
        
        # Look for data in window objects
        window_patterns = [
            r'window\.\w+Product\s*=\s*({[^}]+})',
            r'window\.productData\s*=\s*({[^}]+})',
            r'window\.\w+Data\s*=\s*({[^}]+})'
        ]
        
        for script in scripts:
            script_content = script.string or ''
            for pattern in window_patterns:
                matches = re.findall(pattern, script_content)
                for match in matches:
                    try:
                        json_data = json.loads(match)
                        if isinstance(json_data, dict):
                            data.update(json_data)
                    except json.JSONDecodeError:
                        continue
        
        return data

class MetaTagExtractor:
    """Extract data from meta tags"""
    
    def extract(self, html: str, url: str, patterns: Dict[str, float] = None) -> Dict[str, Any]:
        """Extract data from meta tags"""
        soup = BeautifulSoup(html, 'html.parser')
        data = {}
        
        # Open Graph tags
        og_tags = {
            'og:title': 'name',
            'og:description': 'description',
            'og:image': 'image',
            'og:price:amount': 'price',
            'og:price:currency': 'currency',
            'og:type': 'type',
            'og:brand': 'brand',
            'og:availability': 'availability'
        }
        
        for og_tag, data_key in og_tags.items():
            meta = soup.find('meta', property=og_tag)
            if meta and meta.get('content'):
                if data_key == 'image':
                    if 'images' not in data:
                        data['images'] = []
                    data['images'].append({
                        'url': meta.get('content'),
                        'alt_text': '',
                        'is_primary': True
                    })
                elif data_key == 'price':
                    if 'price' not in data:
                        data['price'] = {}
                    data['price']['current'] = meta.get('content')
                elif data_key == 'currency':
                    if 'price' not in data:
                        data['price'] = {}
                    data['price']['currency'] = meta.get('content')
                else:
                    data[data_key] = meta.get('content')
        
        # Twitter Card tags
        twitter_tags = {
            'twitter:title': 'name',
            'twitter:description': 'description',
            'twitter:image': 'image'
        }
        
        for twitter_tag, data_key in twitter_tags.items():
            meta = soup.find('meta', attrs={'name': twitter_tag})
            if meta and meta.get('content'):
                if data_key == 'image' and 'images' not in data:
                    data['images'] = []
                    data['images'].append({
                        'url': meta.get('content'),
                        'alt_text': '',
                        'is_primary': True
                    })
                elif data_key not in data:
                    data[data_key] = meta.get('content')
        
        return data
    
    def _extract_clothing_schema(self, soup: BeautifulSoup) -> Dict[str, Any]:
        """Extract clothing-specific schema.org data"""
        data = {}
        
        # Look for Product schema with clothing-specific properties
        product_schemas = soup.find_all('script', type='application/ld+json')
        
        for schema_script in product_schemas:
            try:
                import json
                schema_data = json.loads(schema_script.string)
                
                if isinstance(schema_data, dict) and schema_data.get('@type') == 'Product':
                    # Extract basic product info
                    if 'name' in schema_data:
                        data['name'] = schema_data['name']
                    
                    if 'description' in schema_data:
                        data['description'] = schema_data['description']
                    
                    if 'image' in schema_data:
                        images = schema_data['image']
                        if isinstance(images, list):
                            data['images'] = [{'url': img, 'is_primary': i == 0} for i, img in enumerate(images)]
                        else:
                            data['images'] = [{'url': images, 'is_primary': True}]
                    
                    # Extract clothing-specific properties
                    if 'additionalProperty' in schema_data:
                        additional_props = schema_data['additionalProperty']
                        if isinstance(additional_props, list):
                            for prop in additional_props:
                                if prop.get('name') == 'size':
                                    data['sizes'] = [prop.get('value')] if prop.get('value') else []
                                elif prop.get('name') == 'color':
                                    data['colors'] = [prop.get('value')] if prop.get('value') else []
                                elif prop.get('name') == 'material':
                                    data['material'] = prop.get('value')
                                elif prop.get('name') == 'gender':
                                    data['gender'] = prop.get('value')
                    
                    # Extract brand information
                    if 'brand' in schema_data:
                        brand = schema_data['brand']
                        if isinstance(brand, dict):
                            data['brand'] = brand.get('name', brand.get('@type', ''))
                        else:
                            data['brand'] = str(brand)
                    
                    # Extract offers
                    if 'offers' in schema_data:
                        offers = schema_data['offers']
                        if isinstance(offers, dict):
                            if 'price' in offers:
                                data['price'] = {'current': str(offers['price'])}
                            if 'priceCurrency' in offers:
                                if 'price' not in data:
                                    data['price'] = {}
                                data['price']['currency'] = offers['priceCurrency']
                            if 'availability' in offers:
                                data['availability'] = offers['availability']
                        elif isinstance(offers, list) and offers:
                            # Take the first offer
                            offer = offers[0]
                            if 'price' in offer:
                                data['price'] = {'current': str(offer['price'])}
                            if 'priceCurrency' in offer:
                                if 'price' not in data:
                                    data['price'] = {}
                                data['price']['currency'] = offer['priceCurrency']
                            if 'availability' in offer:
                                data['availability'] = offer['availability']
                    
                    break  # Use the first valid Product schema
                    
            except (json.JSONDecodeError, KeyError, TypeError):
                continue
        
        return data

class DynamicDOMExtractor:
    """Extract data by analyzing DOM structure dynamically"""
    
    def extract(self, html: str, url: str, patterns: Dict[str, float] = None) -> Dict[str, Any]:
        """Extract data by analyzing DOM structure"""
        soup = BeautifulSoup(html, 'html.parser')
        data = {}
        
        # Extract based on detected patterns
        if patterns and patterns.get('product_page', 0) > 0.5:
            data.update(self._extract_product_data(soup))
        
        if patterns and patterns.get('listing_page', 0) > 0.5:
            data.update(self._extract_listing_data(soup))
        
        # Always try to extract basic information
        data.update(self._extract_basic_data(soup))
        
        return data
    
    def _extract_product_data(self, soup: BeautifulSoup) -> Dict[str, Any]:
        """Extract product data from product page"""
        data = {}
        
        # Extract title/name
        data['name'] = self._extract_title(soup)
        
        # Extract price
        data['price'] = self._extract_price(soup)
        
        # Extract images
        data['images'] = self._extract_images(soup)
        
        # Extract description
        data['description'] = self._extract_description(soup)
        
        return data
    
    def _extract_listing_data(self, soup: BeautifulSoup) -> Dict[str, Any]:
        """Extract data from listing page"""
        data = {}
        
        # Extract product cards
        products = self._extract_product_cards(soup)
        if products:
            data['products'] = products
        
        return data
    
    def _extract_basic_data(self, soup: BeautifulSoup) -> Dict[str, Any]:
        """Extract basic data from any page"""
        data = {}
        
        # Page title
        title_tag = soup.find('title')
        if title_tag:
            data['page_title'] = title_tag.get_text(strip=True)
        
        # Meta description
        meta_desc = soup.find('meta', attrs={'name': 'description'})
        if meta_desc:
            data['meta_description'] = meta_desc.get('content', '')
        
        return data
    
    def _extract_title(self, soup: BeautifulSoup) -> str:
        """Extract product title using multiple strategies"""
        # Strategy 1: Look for common title selectors
        title_selectors = [
            'h1', 'h2', '.title', '.product-title', '.product-name',
            '[data-testid*="title"]', '[data-testid*="name"]',
            '.item-title', '.card-title', '.product-heading'
        ]
        
        for selector in title_selectors:
            element = soup.select_one(selector)
            if element and element.get_text(strip=True):
                return element.get_text(strip=True)
        
        # Strategy 2: Look for meta tags
        meta_title = soup.find('meta', property='og:title')
        if meta_title:
            return meta_title.get('content', '')
        
        # Strategy 3: Use page title
        title_tag = soup.find('title')
        if title_tag:
            return title_tag.get_text(strip=True)
        
        return ''
    
    def _extract_price(self, soup: BeautifulSoup) -> Dict[str, Any]:
        """Extract price using multiple strategies"""
        price_data = {}
        
        # Strategy 1: Look for price elements
        price_selectors = [
            '.price', '.cost', '.amount', '.value',
            '[data-testid*="price"]', '[data-price]',
            '.product-price', '.item-price', '.current-price'
        ]
        
        for selector in price_selectors:
            elements = soup.select(selector)
            for element in elements:
                text = element.get_text(strip=True)
                price = self._parse_price(text)
                if price:
                    price_data['current'] = price
                    break
            if price_data:
                break
        
        # Strategy 2: Look for price in data attributes
        if not price_data:
            price_elements = soup.find_all(attrs={'data-price': True})
            if price_elements:
                price_data['current'] = price_elements[0]['data-price']
        
        # Strategy 3: Use regex to find prices in text
        if not price_data:
            price_patterns = [
                r'\$\d+\.?\d*', r'₹\d+', r'€\d+', r'£\d+',
                r'\d+\.?\d*\s*(?:USD|INR|EUR|GBP)'
            ]
            
            for pattern in price_patterns:
                matches = re.findall(pattern, soup.get_text())
                if matches:
                    price_data['current'] = matches[0]
                    break
        
        return price_data
    
    def _extract_images(self, soup: BeautifulSoup) -> List[Dict[str, Any]]:
        """Extract images using multiple strategies"""
        images = []
        
        # Strategy 1: Look for product images
        img_selectors = [
            '.product-image img', '.product-photo img',
            '.gallery img', '.carousel img',
            '[data-testid*="image"] img', '.main-image img'
        ]
        
        for selector in img_selectors:
            img_elements = soup.select(selector)
            for img in img_elements:
                src = img.get('src') or img.get('data-src') or img.get('data-lazy')
                if src:
                    images.append({
                        'url': src,
                        'alt': img.get('alt', ''),
                        'is_primary': len(images) == 0
                    })
        
        # Strategy 2: Look for Open Graph images
        if not images:
            og_image = soup.find('meta', property='og:image')
            if og_image:
                images.append({
                    'url': og_image.get('content', ''),
                    'alt': '',
                    'is_primary': True
                })
        
        return images
    
    def _extract_description(self, soup: BeautifulSoup) -> str:
        """Extract product description"""
        desc_selectors = [
            '.description', '.product-description', '.item-description',
            '.product-details', '.product-info', '.product-summary'
        ]
        
        for selector in desc_selectors:
            element = soup.select_one(selector)
            if element:
                return element.get_text(strip=True)
        
        # Look for meta description
        meta_desc = soup.find('meta', attrs={'name': 'description'})
        if meta_desc:
            return meta_desc.get('content', '')
        
        return ''
    
    def _extract_product_cards(self, soup: BeautifulSoup) -> List[Dict[str, Any]]:
        """Extract product cards from listing page"""
        products = []
        
        # Look for common product card patterns
        card_selectors = [
            '.product-card', '.item-card', '.product-item',
            '.product-tile', '.card', '.item'
        ]
        
        for selector in card_selectors:
            cards = soup.select(selector)
            if cards:
                for card in cards[:10]:  # Limit to first 10
                    product_data = {
                        'name': self._extract_title_from_card(card),
                        'price': self._extract_price_from_card(card),
                        'image': self._extract_image_from_card(card),
                        'url': self._extract_url_from_card(card)
                    }
                    if product_data['name']:  # Only add if we found a name
                        products.append(product_data)
                break
        
        return products
    
    def _extract_title_from_card(self, card) -> str:
        """Extract title from product card"""
        title_selectors = ['h3', 'h4', '.title', '.name', '.product-name', 'a']
        for selector in title_selectors:
            element = card.select_one(selector)
            if element:
                return element.get_text(strip=True)
        return ''
    
    def _extract_price_from_card(self, card) -> str:
        """Extract price from product card"""
        price_selectors = ['.price', '.cost', '.amount']
        for selector in price_selectors:
            element = card.select_one(selector)
            if element:
                return element.get_text(strip=True)
        return ''
    
    def _extract_image_from_card(self, card) -> str:
        """Extract image from product card"""
        img = card.select_one('img')
        if img:
            return img.get('src') or img.get('data-src') or ''
        return ''
    
    def _extract_url_from_card(self, card) -> str:
        """Extract URL from product card"""
        link = card.select_one('a')
        if link:
            return link.get('href') or ''
        return ''
    
    def _parse_price(self, text: str) -> Optional[str]:
        """Parse price from text"""
        price_patterns = [
            r'\$\d+\.?\d*', r'₹\d+', r'€\d+', r'£\d+',
            r'\d+\.?\d*\s*(?:USD|INR|EUR|GBP)'
        ]
        
        for pattern in price_patterns:
            match = re.search(pattern, text)
            if match:
                return match.group()
        
        return None
