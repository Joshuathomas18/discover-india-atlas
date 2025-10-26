"""
Dynamic DOM Extractor
Smart element detection and extraction without configuration
"""

import re
import logging
from typing import Dict, Any, List, Optional
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse

logger = logging.getLogger(__name__)

class DynamicDOMExtractor:
    """Extract data by analyzing DOM structure dynamically"""
    
    def __init__(self):
        self.title_patterns = self._load_title_patterns()
        self.price_patterns = self._load_price_patterns()
        self.image_patterns = self._load_image_patterns()
        self.description_patterns = self._load_description_patterns()
    
    def extract(self, html: str, url: str, patterns: Dict[str, float] = None) -> Dict[str, Any]:
        """Extract data by analyzing DOM structure"""
        soup = BeautifulSoup(html, 'html.parser')
        data = {}
        
        # Extract based on detected patterns
        if patterns and patterns.get('product_page', 0) > 0.5:
            data.update(self._extract_product_data(soup, url))
        
        if patterns and patterns.get('listing_page', 0) > 0.5:
            data.update(self._extract_listing_data(soup, url))
        
        # Always try to extract basic information
        data.update(self._extract_basic_data(soup, url))
        
        return data
    
    def _load_title_patterns(self) -> List[str]:
        """Load title detection patterns"""
        return [
            'h1', 'h2', '.title', '.product-title', '.product-name',
            '[data-testid*="title"]', '[data-testid*="name"]',
            '.item-title', '.card-title', '.product-heading',
            '.product-name', '.item-name', '.product-title-text',
            '.product-header h1', '.product-info h1', '.detail-title'
        ]
    
    def _load_price_patterns(self) -> List[str]:
        """Load price detection patterns"""
        return [
            '.price', '.cost', '.amount', '.value',
            '[data-testid*="price"]', '[data-price]',
            '.product-price', '.item-price', '.current-price',
            '.price-current', '.price-now', '.sale-price',
            '.regular-price', '.discount-price', '.final-price'
        ]
    
    def _load_image_patterns(self) -> List[str]:
        """Load image detection patterns"""
        return [
            '.product-image img', '.product-photo img',
            '.gallery img', '.carousel img',
            '[data-testid*="image"] img', '.main-image img',
            '.product-img img', '.item-image img',
            '.product-gallery img', '.image-container img'
        ]
    
    def _load_description_patterns(self) -> List[str]:
        """Load description detection patterns"""
        return [
            '.description', '.product-description', '.item-description',
            '.product-details', '.product-info', '.product-summary',
            '.product-overview', '.product-content', '.detail-description',
            '.product-text', '.item-details', '.product-specs'
        ]
    
    def _extract_product_data(self, soup: BeautifulSoup, url: str) -> Dict[str, Any]:
        """Extract product data from product page"""
        data = {}
        
        # Extract title/name
        data['name'] = self._extract_title(soup)
        
        # Extract price
        data['price'] = self._extract_price(soup)
        
        # Extract images
        data['images'] = self._extract_images(soup, url)
        
        # Extract description
        data['description'] = self._extract_description(soup)
        
        # Extract additional product info
        data.update(self._extract_additional_info(soup))
        
        # Extract clothing-specific attributes
        data.update(self._extract_clothing_attributes(soup))
        
        return data
    
    def _extract_listing_data(self, soup: BeautifulSoup, url: str) -> Dict[str, Any]:
        """Extract data from listing page"""
        data = {}
        
        # Extract product cards
        products = self._extract_product_cards(soup, url)
        if products:
            data['products'] = products
        
        # Extract pagination info
        pagination = self._extract_pagination(soup, url)
        if pagination:
            data['pagination'] = pagination
        
        return data
    
    def _extract_basic_data(self, soup: BeautifulSoup, url: str) -> Dict[str, Any]:
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
        
        # Canonical URL
        canonical = soup.find('link', attrs={'rel': 'canonical'})
        if canonical:
            data['canonical_url'] = canonical.get('href', '')
        
        # Language
        html_tag = soup.find('html')
        if html_tag:
            data['language'] = html_tag.get('lang', '')
        
        return data
    
    def _extract_title(self, soup: BeautifulSoup) -> str:
        """Extract product title using multiple strategies"""
        # Strategy 1: Look for common title selectors
        for selector in self.title_patterns:
            element = soup.select_one(selector)
            if element and element.get_text(strip=True):
                title = element.get_text(strip=True)
                # Filter out very short or very long titles
                if 3 <= len(title) <= 200:
                    return title
        
        # Strategy 2: Look for meta tags
        meta_title = soup.find('meta', property='og:title')
        if meta_title:
            title = meta_title.get('content', '')
            if 3 <= len(title) <= 200:
                return title
        
        # Strategy 3: Use page title (filtered)
        title_tag = soup.find('title')
        if title_tag:
            title = title_tag.get_text(strip=True)
            # Remove common suffixes
            title = re.sub(r'\s*-\s*(Home|Store|Shop|Online).*$', '', title, flags=re.IGNORECASE)
            if 3 <= len(title) <= 200:
                return title
        
        return ''
    
    def _extract_price(self, soup: BeautifulSoup) -> Dict[str, Any]:
        """Extract price using multiple strategies"""
        price_data = {}
        
        # Strategy 1: Look for price elements
        for selector in self.price_patterns:
            elements = soup.select(selector)
            for element in elements:
                text = element.get_text(strip=True)
                price = self._parse_price(text)
                if price:
                    price_data['current'] = price
                    price_data['currency'] = self._extract_currency(text)
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
                    price_data['currency'] = self._extract_currency(matches[0])
                    break
        
        return price_data
    
    def _extract_images(self, soup: BeautifulSoup, base_url: str) -> List[Dict[str, Any]]:
        """Extract images using multiple strategies"""
        images = []
        
        # Strategy 1: Look for product images
        for selector in self.image_patterns:
            img_elements = soup.select(selector)
            for img in img_elements:
                src = img.get('src') or img.get('data-src') or img.get('data-lazy')
                if src:
                    # Convert relative URLs to absolute
                    src = urljoin(base_url, src)
                    # Determine image type for clothing
                    image_type = self._classify_clothing_image(img, soup)
                    
                    images.append({
                        'url': src,
                        'alt': img.get('alt', ''),
                        'is_primary': len(images) == 0,
                        'image_type': image_type,
                        'color_variant': self._extract_color_variant(img),
                        'angle': self._extract_image_angle(img)
                    })
        
        # Strategy 2: Look for Open Graph images
        if not images:
            og_image = soup.find('meta', property='og:image')
            if og_image:
                src = og_image.get('content', '')
                if src:
                    src = urljoin(base_url, src)
                    images.append({
                        'url': src,
                        'alt': '',
                        'is_primary': True
                    })
        
        # Strategy 3: Look for any images with product-related alt text
        if not images:
            all_images = soup.find_all('img')
            for img in all_images:
                alt_text = img.get('alt', '').lower()
                if any(keyword in alt_text for keyword in ['product', 'item', 'image']):
                    src = img.get('src') or img.get('data-src')
                    if src:
                        src = urljoin(base_url, src)
                        images.append({
                            'url': src,
                            'alt': img.get('alt', ''),
                            'is_primary': len(images) == 0
                        })
        
        return images
    
    def _extract_description(self, soup: BeautifulSoup) -> str:
        """Extract product description"""
        # Strategy 1: Look for description elements
        for selector in self.description_patterns:
            element = soup.select_one(selector)
            if element:
                desc = element.get_text(strip=True)
                if len(desc) > 20:  # Filter out very short descriptions
                    return desc
        
        # Strategy 2: Look for meta description
        meta_desc = soup.find('meta', attrs={'name': 'description'})
        if meta_desc:
            desc = meta_desc.get('content', '')
            if len(desc) > 20:
                return desc
        
        # Strategy 3: Look for paragraphs with product-related content
        paragraphs = soup.find_all('p')
        for p in paragraphs:
            text = p.get_text(strip=True)
            if len(text) > 50 and any(keyword in text.lower() for keyword in ['product', 'feature', 'description']):
                return text
        
        return ''
    
    def _extract_additional_info(self, soup: BeautifulSoup) -> Dict[str, Any]:
        """Extract additional product information"""
        info = {}
        
        # Extract SKU/Product ID
        sku_selectors = [
            '[data-sku]', '[data-product-id]', '[data-item-id]',
            '.sku', '.product-id', '.item-id'
        ]
        
        for selector in sku_selectors:
            element = soup.select_one(selector)
            if element:
                sku = element.get('data-sku') or element.get('data-product-id') or element.get_text(strip=True)
                if sku:
                    info['sku'] = sku
                    break
        
        # Extract availability
        availability_selectors = [
            '.availability', '.stock', '.in-stock', '.out-of-stock',
            '[data-availability]', '[data-stock]'
        ]
        
        for selector in availability_selectors:
            element = soup.select_one(selector)
            if element:
                availability = element.get_text(strip=True)
                if availability:
                    info['availability'] = availability
                    break
        
        # Extract brand
        brand_selectors = [
            '.brand', '.manufacturer', '.company', '.maker',
            '[data-brand]', '[data-manufacturer]'
        ]
        
        for selector in brand_selectors:
            element = soup.select_one(selector)
            if element:
                brand = element.get_text(strip=True)
                if brand:
                    info['brand'] = brand
                    break
        
        # Extract category/breadcrumb
        breadcrumb = soup.find('nav', class_=re.compile(r'breadcrumb', re.I))
        if breadcrumb:
            categories = []
            links = breadcrumb.find_all('a')
            for link in links:
                categories.append(link.get_text(strip=True))
            if categories:
                info['categories'] = categories
        
        return info
    
    def _extract_product_cards(self, soup: BeautifulSoup, base_url: str) -> List[Dict[str, Any]]:
        """Extract product cards from listing page"""
        products = []
        
        # Look for common product card patterns
        card_selectors = [
            '.product-card', '.item-card', '.product-item',
            '.product-tile', '.card', '.item', '.product',
            '.product-list-item', '.catalog-item'
        ]
        
        for selector in card_selectors:
            cards = soup.select(selector)
            if cards:
                for card in cards[:20]:  # Limit to first 20
                    product_data = {
                        'name': self._extract_title_from_card(card),
                        'price': self._extract_price_from_card(card),
                        'image': self._extract_image_from_card(card, base_url),
                        'url': self._extract_url_from_card(card, base_url)
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
                title = element.get_text(strip=True)
                if 3 <= len(title) <= 200:
                    return title
        return ''
    
    def _extract_price_from_card(self, card) -> str:
        """Extract price from product card"""
        price_selectors = ['.price', '.cost', '.amount', '.value']
        for selector in price_selectors:
            element = card.select_one(selector)
            if element:
                return element.get_text(strip=True)
        return ''
    
    def _extract_image_from_card(self, card, base_url: str) -> str:
        """Extract image from product card"""
        img = card.select_one('img')
        if img:
            src = img.get('src') or img.get('data-src') or img.get('data-lazy')
            if src:
                return urljoin(base_url, src)
        return ''
    
    def _extract_url_from_card(self, card, base_url: str) -> str:
        """Extract URL from product card"""
        link = card.select_one('a')
        if link:
            href = link.get('href')
            if href:
                return urljoin(base_url, href)
        return ''
    
    def _extract_pagination(self, soup: BeautifulSoup, base_url: str) -> Dict[str, Any]:
        """Extract pagination information"""
        pagination = {}
        
        # Look for pagination elements
        pagination_selectors = [
            '.pagination', '.pager', '.page-nav', '.paging',
            'nav[aria-label*="pagination"]', 'nav[aria-label*="paging"]'
        ]
        
        for selector in pagination_selectors:
            nav = soup.select_one(selector)
            if nav:
                # Extract current page
                current = nav.select_one('.current, .active, .selected')
                if current:
                    pagination['current_page'] = current.get_text(strip=True)
                
                # Extract next page
                next_link = nav.select_one('a[rel="next"], .next, .next-page')
                if next_link:
                    href = next_link.get('href')
                    if href:
                        pagination['next_page'] = urljoin(base_url, href)
                
                # Extract previous page
                prev_link = nav.select_one('a[rel="prev"], .prev, .previous-page')
                if prev_link:
                    href = prev_link.get('href')
                    if href:
                        pagination['previous_page'] = urljoin(base_url, href)
                
                break
        
        return pagination
    
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
    
    def _extract_currency(self, text: str) -> str:
        """Extract currency from price text"""
        if '$' in text:
            return 'USD'
        elif '₹' in text:
            return 'INR'
        elif '€' in text:
            return 'EUR'
        elif '£' in text:
            return 'GBP'
        elif 'USD' in text.upper():
            return 'USD'
        elif 'INR' in text.upper():
            return 'INR'
        elif 'EUR' in text.upper():
            return 'EUR'
        elif 'GBP' in text.upper():
            return 'GBP'
        else:
            return 'USD'  # Default
    
    def _extract_clothing_attributes(self, soup: BeautifulSoup) -> Dict[str, Any]:
        """Extract clothing-specific attributes"""
        attributes = {}
        
        # Extract sizes
        sizes = self._extract_sizes(soup)
        if sizes:
            attributes['sizes'] = sizes
        
        # Extract colors
        colors = self._extract_colors(soup)
        if colors:
            attributes['colors'] = colors
        
        # Extract material/fabric
        material = self._extract_material(soup)
        if material:
            attributes['material'] = material
        
        # Extract brand
        brand = self._extract_brand(soup)
        if brand:
            attributes['brand'] = brand
        
        # Extract gender category
        gender = self._extract_gender(soup)
        if gender:
            attributes['gender'] = gender
        
        # Extract season/collection
        season = self._extract_season(soup)
        if season:
            attributes['season'] = season
        
        # Extract care instructions
        care = self._extract_care_instructions(soup)
        if care:
            attributes['care_instructions'] = care
        
        # Extract availability
        availability = self._extract_availability(soup)
        if availability:
            attributes['availability'] = availability
        
        # Extract reviews and ratings
        reviews = self._extract_reviews(soup)
        if reviews:
            attributes['reviews'] = reviews
        
        return attributes
    
    def _extract_sizes(self, soup: BeautifulSoup) -> List[str]:
        """Extract available sizes"""
        sizes = []
        
        # Look for size selectors
        size_selectors = [
            'select[name*="size"] option',
            '.size-selector option',
            '.size-option',
            '[data-size]',
            '.size-chart td:first-child',
            '.product-sizes span',
            '.size-list li'
        ]
        
        for selector in size_selectors:
            elements = soup.select(selector)
            for element in elements:
                size_text = element.get_text(strip=True)
                if size_text and len(size_text) <= 10:  # Reasonable size length
                    sizes.append(size_text)
        
        # Remove duplicates and sort
        return sorted(list(set(sizes)))
    
    def _extract_colors(self, soup: BeautifulSoup) -> List[str]:
        """Extract available colors"""
        colors = []
        
        # Look for color selectors
        color_selectors = [
            'select[name*="color"] option',
            '.color-selector option',
            '.color-option',
            '[data-color]',
            '.color-swatch',
            '.product-colors span',
            '.color-list li'
        ]
        
        for selector in color_selectors:
            elements = soup.select(selector)
            for element in elements:
                color_text = element.get_text(strip=True)
                if color_text and len(color_text) <= 20:  # Reasonable color name length
                    colors.append(color_text)
        
        # Also look for color names in data attributes
        color_elements = soup.find_all(attrs={'data-color': True})
        for element in color_elements:
            color = element.get('data-color')
            if color:
                colors.append(color)
        
        return sorted(list(set(colors)))
    
    def _extract_material(self, soup: BeautifulSoup) -> Optional[str]:
        """Extract material/fabric information"""
        material_keywords = [
            'material', 'fabric', 'composition', 'fiber', 'textile',
            'made of', '100%', 'cotton', 'polyester', 'silk', 'wool',
            'denim', 'leather', 'synthetic'
        ]
        
        # Look in product details, specifications, or description
        text_content = soup.get_text().lower()
        
        for keyword in material_keywords:
            if keyword in text_content:
                # Try to extract the material sentence
                sentences = text_content.split('.')
                for sentence in sentences:
                    if keyword in sentence:
                        return sentence.strip()
        
        return None
    
    def _extract_brand(self, soup: BeautifulSoup) -> Optional[str]:
        """Extract brand information"""
        # Look for brand in various places
        brand_selectors = [
            'meta[property="product:brand"]',
            'meta[name="brand"]',
            '.brand',
            '.product-brand',
            '.manufacturer',
            '[data-brand]'
        ]
        
        for selector in brand_selectors:
            element = soup.select_one(selector)
            if element:
                if element.name == 'meta':
                    brand = element.get('content')
                else:
                    brand = element.get_text(strip=True)
                
                if brand and len(brand) <= 50:  # Reasonable brand name length
                    return brand
        
        return None
    
    def _extract_gender(self, soup: BeautifulSoup) -> Optional[str]:
        """Extract gender category"""
        text_content = soup.get_text().lower()
        
        gender_indicators = {
            "men's": "men",
            "mens": "men", 
            "male": "men",
            "women's": "women",
            "womens": "women",
            "female": "women",
            "ladies": "women",
            "unisex": "unisex",
            "kids": "kids",
            "children": "kids",
            "baby": "baby"
        }
        
        for indicator, gender in gender_indicators.items():
            if indicator in text_content:
                return gender
        
        return None
    
    def _extract_season(self, soup: BeautifulSoup) -> Optional[str]:
        """Extract season/collection information"""
        text_content = soup.get_text().lower()
        
        seasons = ['spring', 'summer', 'fall', 'autumn', 'winter', 'holiday', 'christmas']
        
        for season in seasons:
            if season in text_content:
                return season.title()
        
        return None
    
    def _extract_care_instructions(self, soup: BeautifulSoup) -> Optional[str]:
        """Extract care instructions"""
        care_keywords = [
            'care instructions', 'washing instructions', 'care label',
            'machine wash', 'hand wash', 'dry clean', 'iron', 'bleach'
        ]
        
        text_content = soup.get_text().lower()
        
        for keyword in care_keywords:
            if keyword in text_content:
                # Try to extract the care instruction sentence
                sentences = text_content.split('.')
                for sentence in sentences:
                    if keyword in sentence:
                        return sentence.strip()
        
        return None
    
    def _extract_availability(self, soup: BeautifulSoup) -> Optional[str]:
        """Extract availability status"""
        text_content = soup.get_text().lower()
        
        availability_indicators = {
            'in stock': 'in_stock',
            'available': 'in_stock',
            'out of stock': 'out_of_stock',
            'sold out': 'out_of_stock',
            'limited': 'limited',
            'pre-order': 'pre_order',
            'coming soon': 'coming_soon'
        }
        
        for indicator, status in availability_indicators.items():
            if indicator in text_content:
                return status
        
        return None
    
    def _classify_clothing_image(self, img_element, soup: BeautifulSoup) -> str:
        """Classify clothing image type"""
        src = img_element.get('src', '').lower()
        alt = img_element.get('alt', '').lower()
        class_name = ' '.join(img_element.get('class', [])).lower()
        
        # Check for specific clothing image types
        if any(keyword in src or keyword in alt or keyword in class_name for keyword in ['main', 'primary', 'hero']):
            return 'product_main'
        elif any(keyword in src or keyword in alt or keyword in class_name for keyword in ['detail', 'close', 'zoom']):
            return 'product_detail'
        elif any(keyword in src or keyword in alt or keyword in class_name for keyword in ['model', 'worn', 'lifestyle']):
            return 'model_photo'
        elif any(keyword in src or keyword in alt or keyword in class_name for keyword in ['size', 'chart', 'guide']):
            return 'size_chart'
        elif any(keyword in src or keyword in alt or keyword in class_name for keyword in ['color', 'swatch', 'variant']):
            return 'color_variant'
        elif any(keyword in src or keyword in alt or keyword in class_name for keyword in ['back', 'side', 'angle']):
            return 'product_angle'
        else:
            return 'product_general'
    
    def _extract_color_variant(self, img_element) -> Optional[str]:
        """Extract color variant from image element"""
        # Check data attributes
        color_attrs = ['data-color', 'data-variant', 'data-option']
        for attr in color_attrs:
            color = img_element.get(attr)
            if color:
                return color
        
        # Check parent elements for color information
        parent = img_element.parent
        while parent and parent.name != 'body':
            for attr in color_attrs:
                color = parent.get(attr)
                if color:
                    return color
            parent = parent.parent
        
        return None
    
    def _extract_image_angle(self, img_element) -> Optional[str]:
        """Extract image angle from image element"""
        src = img_element.get('src', '').lower()
        alt = img_element.get('alt', '').lower()
        class_name = ' '.join(img_element.get('class', [])).lower()
        
        angle_keywords = {
            'front': ['front', 'main', 'primary'],
            'back': ['back', 'rear'],
            'side': ['side', 'profile'],
            'detail': ['detail', 'close', 'zoom'],
            'top': ['top', 'overhead'],
            'bottom': ['bottom', 'under']
        }
        
        for angle, keywords in angle_keywords.items():
            if any(keyword in src or keyword in alt or keyword in class_name for keyword in keywords):
                return angle
        
        return None
    
    def _extract_reviews(self, soup: BeautifulSoup) -> Dict[str, Any]:
        """Extract reviews and ratings"""
        reviews_data = {}
        
        # Extract overall rating
        rating = self._extract_overall_rating(soup)
        if rating:
            reviews_data['overall_rating'] = rating
        
        # Extract review count
        review_count = self._extract_review_count(soup)
        if review_count:
            reviews_data['review_count'] = review_count
        
        # Extract individual reviews
        individual_reviews = self._extract_individual_reviews(soup)
        if individual_reviews:
            reviews_data['reviews'] = individual_reviews
        
        return reviews_data if reviews_data else None
    
    def _extract_overall_rating(self, soup: BeautifulSoup) -> Optional[float]:
        """Extract overall product rating"""
        # Look for rating in various formats
        rating_selectors = [
            '.rating', '.stars', '.score', '.review-rating',
            '.product-rating', '.average-rating', '[data-rating]'
        ]
        
        for selector in rating_selectors:
            element = soup.select_one(selector)
            if element:
                # Try to extract numeric rating
                text = element.get_text(strip=True)
                rating_match = re.search(r'(\d+\.?\d*)\s*(?:out of|/|stars?|★)', text)
                if rating_match:
                    return float(rating_match.group(1))
                
                # Check data attributes
                rating = element.get('data-rating') or element.get('data-score')
                if rating:
                    try:
                        return float(rating)
                    except ValueError:
                        continue
        
        # Look for structured data
        rating_schema = soup.find('meta', property='rating:value')
        if rating_schema:
            try:
                return float(rating_schema.get('content'))
            except ValueError:
                pass
        
        return None
    
    def _extract_review_count(self, soup: BeautifulSoup) -> Optional[int]:
        """Extract total number of reviews"""
        # Look for review count in various formats
        count_selectors = [
            '.review-count', '.rating-count', '.total-reviews',
            '.reviews-count', '[data-review-count]'
        ]
        
        for selector in count_selectors:
            element = soup.select_one(selector)
            if element:
                text = element.get_text(strip=True)
                count_match = re.search(r'(\d+)', text)
                if count_match:
                    return int(count_match.group(1))
                
                # Check data attributes
                count = element.get('data-review-count') or element.get('data-count')
                if count:
                    try:
                        return int(count)
                    except ValueError:
                        continue
        
        return None
    
    def _extract_individual_reviews(self, soup: BeautifulSoup) -> List[Dict[str, Any]]:
        """Extract individual customer reviews"""
        reviews = []
        
        # Look for review containers
        review_selectors = [
            '.review', '.customer-review', '.product-review',
            '.review-item', '.review-card', '[data-review]'
        ]
        
        for selector in review_selectors:
            review_elements = soup.select(selector)
            for review_element in review_elements:
                review_data = {}
                
                # Extract review text
                text_selectors = ['.review-text', '.review-content', '.review-body', 'p']
                for text_selector in text_selectors:
                    text_element = review_element.select_one(text_selector)
                    if text_element:
                        review_data['text'] = text_element.get_text(strip=True)
                        break
                
                # Extract rating
                rating_selectors = ['.review-rating', '.stars', '.rating', '[data-rating]']
                for rating_selector in rating_selectors:
                    rating_element = review_element.select_one(rating_selector)
                    if rating_element:
                        rating_text = rating_element.get_text(strip=True)
                        rating_match = re.search(r'(\d+\.?\d*)', rating_text)
                        if rating_match:
                            review_data['rating'] = float(rating_match.group(1))
                        break
                
                # Extract author
                author_selectors = ['.review-author', '.author', '.reviewer', '.customer-name']
                for author_selector in author_selectors:
                    author_element = review_element.select_one(author_selector)
                    if author_element:
                        review_data['author'] = author_element.get_text(strip=True)
                        break
                
                # Extract date
                date_selectors = ['.review-date', '.date', '.review-time', 'time']
                for date_selector in date_selectors:
                    date_element = review_element.select_one(date_selector)
                    if date_element:
                        review_data['date'] = date_element.get_text(strip=True)
                        break
                
                # Only add if we have at least text or rating
                if review_data.get('text') or review_data.get('rating'):
                    reviews.append(review_data)
        
        return reviews[:10]  # Limit to first 10 reviews
