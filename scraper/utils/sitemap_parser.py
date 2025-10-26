"""
Sitemap Parser with Priority Scoring
Parses sitemap.xml files and applies scoring algorithm for crawl prioritization
"""

import xml.etree.ElementTree as ET
import requests
import logging
from datetime import datetime, timezone
from typing import List, Dict, Any, Optional
from urllib.parse import urljoin, urlparse
import math

from ..config.scraper_config import get_priority_weights, get_site_config

logger = logging.getLogger(__name__)

class SitemapParser:
    """Parses sitemap.xml files and scores URLs for crawl prioritization"""
    
    def __init__(self, site_id: str):
        self.site_id = site_id
        self.site_config = get_site_config(site_id)
        self.priority_weights = get_priority_weights()
        
    def parse_sitemap(self, sitemap_url: str) -> List[Dict[str, Any]]:
        """
        Parse sitemap.xml and return scored URLs
        
        Args:
            sitemap_url: URL of the sitemap.xml file
            
        Returns:
            List of scored URL dictionaries
        """
        try:
            # Fetch sitemap content
            response = requests.get(sitemap_url, timeout=30)
            response.raise_for_status()
            
            # Parse XML
            root = ET.fromstring(response.content)
            
            # Handle different sitemap formats
            if root.tag.endswith('sitemapindex'):
                return self._parse_sitemap_index(root, sitemap_url)
            else:
                return self._parse_sitemap_urls(root, sitemap_url)
                
        except Exception as e:
            logger.error(f"Error parsing sitemap {sitemap_url}: {str(e)}")
            return []
    
    def _parse_sitemap_index(self, root: ET.Element, base_url: str) -> List[Dict[str, Any]]:
        """Parse sitemap index and extract individual sitemaps"""
        sitemaps = []
        
        for sitemap in root.findall('.//{http://www.sitemaps.org/schemas/sitemap/0.9}sitemap'):
            loc = sitemap.find('{http://www.sitemaps.org/schemas/sitemap/0.9}loc')
            lastmod = sitemap.find('{http://www.sitemaps.org/schemas/sitemap/0.9}lastmod')
            
            if loc is not None:
                sitemap_url = loc.text
                lastmod_str = lastmod.text if lastmod is not None else None
                
                # Recursively parse individual sitemaps
                individual_urls = self.parse_sitemap(sitemap_url)
                sitemaps.extend(individual_urls)
        
        return sitemaps
    
    def _parse_sitemap_urls(self, root: ET.Element, base_url: str) -> List[Dict[str, Any]]:
        """Parse individual sitemap and extract URLs with metadata"""
        urls = []
        
        for url_elem in root.findall('.//{http://www.sitemaps.org/schemas/sitemap/0.9}url'):
            url_data = self._extract_url_data(url_elem, base_url)
            if url_data:
                urls.append(url_data)
        
        return urls
    
    def _extract_url_data(self, url_elem: ET.Element, base_url: str) -> Optional[Dict[str, Any]]:
        """Extract URL data from sitemap entry"""
        try:
            loc = url_elem.find('{http://www.sitemaps.org/schemas/sitemap/0.9}loc')
            if loc is None:
                return None
            
            url = loc.text.strip()
            
            # Extract metadata
            lastmod = url_elem.find('{http://www.sitemaps.org/schemas/sitemap/0.9}lastmod')
            changefreq = url_elem.find('{http://www.sitemaps.org/schemas/sitemap/0.9}changefreq')
            priority = url_elem.find('{http://www.sitemaps.org/schemas/sitemap/0.9}priority')
            
            # Parse dates
            lastmod_date = None
            if lastmod is not None and lastmod.text:
                try:
                    lastmod_date = datetime.fromisoformat(lastmod.text.replace('Z', '+00:00'))
                except ValueError:
                    lastmod_date = None
            
            # Parse priority
            priority_value = 0.5  # Default priority
            if priority is not None and priority.text:
                try:
                    priority_value = float(priority.text)
                except ValueError:
                    priority_value = 0.5
            
            # Parse changefreq
            changefreq_value = 'monthly'  # Default
            if changefreq is not None and changefreq.text:
                changefreq_value = changefreq.text.lower()
            
            # Calculate scores
            scores = self._calculate_scores(
                url=url,
                lastmod=lastmod_date,
                priority=priority_value,
                changefreq=changefreq_value
            )
            
            return {
                'url': url,
                'lastmod': lastmod_date,
                'changefreq': changefreq_value,
                'priority': priority_value,
                'scores': scores,
                'total_score': sum(scores.values()),
                'site_id': self.site_id,
                'parsed_at': datetime.now(timezone.utc)
            }
            
        except Exception as e:
            logger.error(f"Error extracting URL data: {str(e)}")
            return None
    
    def _calculate_scores(self, url: str, lastmod: Optional[datetime], 
                         priority: float, changefreq: str) -> Dict[str, float]:
        """Calculate priority scores for URL"""
        scores = {}
        
        # Size score (based on URL path depth and product indicators)
        scores['size'] = self._calculate_size_score(url)
        
        # Cost score (based on URL patterns indicating discounts/sales)
        scores['cost'] = self._calculate_cost_score(url)
        
        # Style score (based on URL patterns indicating fashion categories)
        scores['style'] = self._calculate_style_score(url)
        
        # Priority score (from sitemap)
        scores['priority'] = priority
        
        # Freshness score (based on lastmod date)
        scores['freshness'] = self._calculate_freshness_score(lastmod)
        
        return scores
    
    def _calculate_size_score(self, url: str) -> float:
        """Calculate size score based on URL structure"""
        score = 0.5  # Base score
        
        # Product page indicators
        product_indicators = ['/product/', '/item/', '/p/', '/dp/', '/clothing/', '/dress/', '/shirt/', '/pants/']
        if any(indicator in url.lower() for indicator in product_indicators):
            score += 0.3
        
        # Category page indicators
        category_indicators = ['/category/', '/collection/', '/shop/', '/women/', '/men/', '/kids/']
        if any(indicator in url.lower() for indicator in category_indicators):
            score += 0.2
        
        # Avoid admin, search, or non-product pages
        exclude_indicators = ['/admin/', '/search/', '/cart/', '/checkout/', '/login/', '/register/']
        if any(indicator in url.lower() for indicator in exclude_indicators):
            score -= 0.5
        
        return max(0.0, min(1.0, score))
    
    def _calculate_cost_score(self, url: str) -> float:
        """Calculate cost score based on discount/sale indicators"""
        score = 0.5  # Base score
        
        # Sale/discount indicators
        sale_indicators = ['sale', 'discount', 'clearance', 'outlet', 'deal', 'offer']
        if any(indicator in url.lower() for indicator in sale_indicators):
            score += 0.4
        
        # Price range indicators (if present in URL)
        if any(char.isdigit() for char in url):
            score += 0.1
        
        return max(0.0, min(1.0, score))
    
    def _calculate_style_score(self, url: str) -> float:
        """Calculate style score based on fashion category indicators"""
        score = 0.5  # Base score
        
        # Fashion category indicators
        fashion_categories = [
            'dress', 'shirt', 'blouse', 'pants', 'jeans', 'skirt', 'jacket', 'coat',
            'sweater', 'cardigan', 'blazer', 'suit', 'shorts', 'tank', 'top', 'tee',
            'shoes', 'boots', 'sneakers', 'heels', 'sandals', 'accessories', 'bag',
            'jewelry', 'watch', 'belt', 'hat', 'scarf'
        ]
        
        url_lower = url.lower()
        category_matches = sum(1 for category in fashion_categories if category in url_lower)
        score += min(0.4, category_matches * 0.1)
        
        return max(0.0, min(1.0, score))
    
    def _calculate_freshness_score(self, lastmod: Optional[datetime]) -> float:
        """Calculate freshness score based on last modification date"""
        if lastmod is None:
            return 0.5  # Unknown freshness
        
        now = datetime.now(timezone.utc)
        days_old = (now - lastmod).days
        
        # Exponential decay: newer content gets higher scores
        if days_old <= 1:
            return 1.0
        elif days_old <= 7:
            return 0.8
        elif days_old <= 30:
            return 0.6
        elif days_old <= 90:
            return 0.4
        else:
            return 0.2
    
    def filter_urls(self, urls: List[Dict[str, Any]], 
                   min_score: float = 0.3) -> List[Dict[str, Any]]:
        """Filter URLs based on minimum score and other criteria"""
        filtered = []
        
        for url_data in urls:
            if url_data['total_score'] >= min_score:
                # Additional filtering logic can be added here
                filtered.append(url_data)
        
        # Sort by total score (descending)
        filtered.sort(key=lambda x: x['total_score'], reverse=True)
        
        return filtered
    
    def get_crawl_queue(self, sitemap_url: str, max_urls: int = 1000) -> List[Dict[str, Any]]:
        """
        Get prioritized crawl queue from sitemap
        
        Args:
            sitemap_url: URL of the sitemap.xml file
            max_urls: Maximum number of URLs to return
            
        Returns:
            List of prioritized URLs for crawling
        """
        # Parse sitemap
        urls = self.parse_sitemap(sitemap_url)
        
        # Filter and score URLs
        filtered_urls = self.filter_urls(urls)
        
        # Limit results
        return filtered_urls[:max_urls]

class SitemapDiscoveryService:
    """Service for discovering and managing sitemaps"""
    
    def __init__(self):
        self.logger = logging.getLogger(__name__)
    
    def discover_sitemap(self, base_url: str) -> Optional[str]:
        """
        Discover sitemap URL for a given website
        
        Args:
            base_url: Base URL of the website
            
        Returns:
            Sitemap URL if found, None otherwise
        """
        try:
            # Common sitemap locations
            sitemap_candidates = [
                f"{base_url.rstrip('/')}/sitemap.xml",
                f"{base_url.rstrip('/')}/sitemap_index.xml",
                f"{base_url.rstrip('/')}/sitemaps.xml",
                f"{base_url.rstrip('/')}/sitemap/sitemap.xml"
            ]
            
            for sitemap_url in sitemap_candidates:
                try:
                    response = requests.head(sitemap_url, timeout=10)
                    if response.status_code == 200:
                        self.logger.info(f"Found sitemap: {sitemap_url}")
                        return sitemap_url
                except requests.RequestException:
                    continue
            
            # Try robots.txt
            robots_url = f"{base_url.rstrip('/')}/robots.txt"
            try:
                response = requests.get(robots_url, timeout=10)
                if response.status_code == 200:
                    for line in response.text.split('\n'):
                        if line.strip().lower().startswith('sitemap:'):
                            sitemap_url = line.split(':', 1)[1].strip()
                            self.logger.info(f"Found sitemap in robots.txt: {sitemap_url}")
                            return sitemap_url
            except requests.RequestException:
                pass
            
            self.logger.warning(f"No sitemap found for {base_url}")
            return None
            
        except Exception as e:
            self.logger.error(f"Error discovering sitemap for {base_url}: {str(e)}")
            return None
