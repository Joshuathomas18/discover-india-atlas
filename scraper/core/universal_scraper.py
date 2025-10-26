"""
Universal Scraper
Zero-configuration scraper that works on any website
"""

import logging
from typing import Dict, Any, List, Optional
from urllib.parse import urljoin, urlparse
import time

from .pattern_recognizer import UniversalPatternRecognizer
from .data_extractor import UniversalDataExtractor
from .adaptive_crawler import AdaptiveCrawler
from .dom_extractor import DynamicDOMExtractor

logger = logging.getLogger(__name__)

class UniversalScraper:
    """Zero-configuration scraper that works on any website"""
    
    def __init__(self, 
                 max_pages: int = 100,
                 respect_robots: bool = True,
                 use_selenium: bool = True,
                 anti_detection: bool = True,
                 rate_limit: float = 1.0):
        """
        Initialize Universal Scraper
        
        Args:
            max_pages: Maximum number of pages to scrape
            respect_robots: Whether to respect robots.txt
            use_selenium: Whether to use Selenium for dynamic content
            anti_detection: Whether to use anti-detection measures
            rate_limit: Requests per second
        """
        self.max_pages = max_pages
        self.respect_robots = respect_robots
        self.use_selenium = use_selenium
        self.anti_detection = anti_detection
        self.rate_limit = rate_limit
        
        # Initialize components
        self.pattern_recognizer = UniversalPatternRecognizer()
        self.data_extractor = UniversalDataExtractor()
        self.crawler = AdaptiveCrawler()
        self.dom_extractor = DynamicDOMExtractor()
        
        # Results storage
        self.scraped_data = []
        self.visited_urls = set()
        self.failed_urls = set()
    
    def scrape(self, url: str, depth: int = 1) -> Dict[str, Any]:
        """
        Scrape a website starting from the given URL
        
        Args:
            url: Starting URL to scrape
            depth: Maximum depth to crawl (1 = only the given page)
            
        Returns:
            Dictionary containing scraped data and metadata
        """
        logger.info(f"Starting scrape of {url} with depth {depth}")
        
        # Reset state
        self.scraped_data = []
        self.visited_urls = set()
        self.failed_urls = set()
        
        # Start scraping
        start_time = time.time()
        
        try:
            # Scrape the main page
            self._scrape_page(url, depth)
            
            # Calculate statistics
            end_time = time.time()
            duration = end_time - start_time
            
            results = {
                'success': True,
                'url': url,
                'depth': depth,
                'pages_scraped': len(self.scraped_data),
                'pages_failed': len(self.failed_urls),
                'duration_seconds': duration,
                'data': self.scraped_data,
                'metadata': {
                    'start_time': start_time,
                    'end_time': end_time,
                    'visited_urls': list(self.visited_urls),
                    'failed_urls': list(self.failed_urls)
                }
            }
            
            logger.info(f"Scraping completed: {len(self.scraped_data)} pages scraped in {duration:.2f}s")
            return results
            
        except Exception as e:
            logger.error(f"Scraping failed: {e}")
            return {
                'success': False,
                'url': url,
                'error': str(e),
                'pages_scraped': len(self.scraped_data),
                'data': self.scraped_data
            }
    
    def _scrape_page(self, url: str, remaining_depth: int):
        """Scrape a single page"""
        if url in self.visited_urls or remaining_depth <= 0:
            return
        
        if len(self.scraped_data) >= self.max_pages:
            logger.info(f"Reached maximum pages limit ({self.max_pages})")
            return
        
        logger.info(f"Scraping: {url}")
        self.visited_urls.add(url)
        
        try:
            # Crawl the page
            page_data = self.crawler.crawl(url)
            if not page_data:
                self.failed_urls.add(url)
                return
            
            # Detect patterns
            patterns = self.pattern_recognizer.detect_product_patterns(
                page_data['html'], url
            )
            
            # Extract data
            extracted_data = self.data_extractor.extract(
                page_data['html'], url, patterns
            )
            
            # Add page metadata
            extracted_data['page_metadata'] = {
                'url': url,
                'title': page_data.get('title', ''),
                'status_code': page_data.get('status_code', 200),
                'crawled_at': page_data.get('crawled_at', time.time()),
                'method': page_data.get('method', 'unknown'),
                'patterns_detected': patterns
            }
            
            # Store results
            self.scraped_data.append(extracted_data)
            
            # Find links to crawl next
            if remaining_depth > 1:
                links = self._extract_links(page_data['html'], url)
                for link in links[:10]:  # Limit to 10 links per page
                    self._scrape_page(link, remaining_depth - 1)
            
        except Exception as e:
            logger.error(f"Failed to scrape {url}: {e}")
            self.failed_urls.add(url)
    
    def _extract_links(self, html: str, base_url: str) -> List[str]:
        """Extract links from HTML"""
        from bs4 import BeautifulSoup
        
        soup = BeautifulSoup(html, 'html.parser')
        links = []
        
        # Find all links
        for link in soup.find_all('a', href=True):
            href = link['href']
            
            # Convert relative URLs to absolute
            absolute_url = urljoin(base_url, href)
            
            # Filter out external links
            if urlparse(absolute_url).netloc != urlparse(base_url).netloc:
                continue
            
            # Filter out unwanted URLs
            if self._is_valid_url(absolute_url):
                links.append(absolute_url)
        
        return list(set(links))  # Remove duplicates
    
    def _is_valid_url(self, url: str) -> bool:
        """Check if URL is valid for crawling"""
        # Skip common non-content URLs
        skip_patterns = [
            '/login', '/register', '/logout', '/account',
            '/cart', '/checkout', '/payment', '/billing',
            '/admin', '/api/', '/ajax/', '/json',
            '/css/', '/js/', '/images/', '/img/',
            '/download', '/pdf', '/doc', '/file'
        ]
        
        url_lower = url.lower()
        for pattern in skip_patterns:
            if pattern in url_lower:
                return False
        
        # Skip URLs with certain extensions
        skip_extensions = ['.css', '.js', '.png', '.jpg', '.gif', '.pdf', '.doc']
        for ext in skip_extensions:
            if url_lower.endswith(ext):
                return False
        
        return True
    
    def scrape_product(self, url: str) -> Dict[str, Any]:
        """
        Scrape a single product page with enhanced extraction
        
        Args:
            url: Product page URL
            
        Returns:
            Dictionary containing product data
        """
        logger.info(f"Scraping product: {url}")
        
        try:
            # Crawl the page
            page_data = self.crawler.crawl(url)
            if not page_data:
                return {'success': False, 'error': 'Failed to crawl page'}
            
            # Detect patterns
            patterns = self.pattern_recognizer.detect_product_patterns(
                page_data['html'], url
            )
            
            # Extract data with enhanced product extraction
            extracted_data = self.data_extractor.extract(
                page_data['html'], url, patterns
            )
            
            # Add product-specific metadata
            extracted_data['product_metadata'] = {
                'url': url,
                'title': page_data.get('title', ''),
                'scraped_at': time.time(),
                'patterns_detected': patterns,
                'confidence_score': self._calculate_confidence(patterns)
            }
            
            return {
                'success': True,
                'product_data': extracted_data
            }
            
        except Exception as e:
            logger.error(f"Product scraping failed: {e}")
            return {'success': False, 'error': str(e)}
    
    def scrape_listing(self, url: str, max_products: int = 50) -> Dict[str, Any]:
        """
        Scrape a product listing page
        
        Args:
            url: Listing page URL
            max_products: Maximum number of products to extract
            
        Returns:
            Dictionary containing product listing data
        """
        logger.info(f"Scraping listing: {url}")
        
        try:
            # Crawl the page
            page_data = self.crawler.crawl(url)
            if not page_data:
                return {'success': False, 'error': 'Failed to crawl page'}
            
            # Detect patterns
            patterns = self.pattern_recognizer.detect_product_patterns(
                page_data['html'], url
            )
            
            # Extract listing data
            extracted_data = self.data_extractor.extract(
                page_data['html'], url, patterns
            )
            
            # Extract product cards if available
            products = extracted_data.get('products', [])
            if products:
                products = products[:max_products]
            
            return {
                'success': True,
                'listing_data': extracted_data,
                'products': products,
                'total_products': len(products)
            }
            
        except Exception as e:
            logger.error(f"Listing scraping failed: {e}")
            return {'success': False, 'error': str(e)}
    
    def _calculate_confidence(self, patterns: Dict[str, float]) -> float:
        """Calculate confidence score for extracted data"""
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
            weight = weights.get(pattern_type, 0.02)
            score += confidence * weight
        
        return min(1.0, score)
    
    def get_scraping_stats(self) -> Dict[str, Any]:
        """Get scraping statistics"""
        return {
            'total_pages_scraped': len(self.scraped_data),
            'total_pages_failed': len(self.failed_urls),
            'success_rate': len(self.scraped_data) / (len(self.scraped_data) + len(self.failed_urls)) if (len(self.scraped_data) + len(self.failed_urls)) > 0 else 0,
            'visited_urls': len(self.visited_urls),
            'failed_urls': list(self.failed_urls)
        }
    
    def export_data(self, format: str = 'json') -> str:
        """
        Export scraped data in specified format
        
        Args:
            format: Export format ('json', 'csv')
            
        Returns:
            Exported data as string
        """
        if format == 'json':
            import json
            return json.dumps(self.scraped_data, indent=2)
        elif format == 'csv':
            import csv
            import io
            
            if not self.scraped_data:
                return ''
            
            # Get all unique keys
            all_keys = set()
            for item in self.scraped_data:
                all_keys.update(item.keys())
            
            # Create CSV
            output = io.StringIO()
            writer = csv.DictWriter(output, fieldnames=sorted(all_keys))
            writer.writeheader()
            
            for item in self.scraped_data:
                # Flatten nested dictionaries
                flattened = self._flatten_dict(item)
                writer.writerow(flattened)
            
            return output.getvalue()
        else:
            raise ValueError(f"Unsupported format: {format}")
    
    def _flatten_dict(self, d: Dict[str, Any], parent_key: str = '', sep: str = '_') -> Dict[str, Any]:
        """Flatten nested dictionary"""
        items = []
        for k, v in d.items():
            new_key = f"{parent_key}{sep}{k}" if parent_key else k
            if isinstance(v, dict):
                items.extend(self._flatten_dict(v, new_key, sep=sep).items())
            elif isinstance(v, list):
                items.append((new_key, str(v)))
            else:
                items.append((new_key, v))
        return dict(items)
