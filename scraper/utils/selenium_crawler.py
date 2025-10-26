"""
Selenium-based Web Crawler with Anti-Bot Measures
Handles rate limiting, proxy rotation, and stealth crawling
"""

import time
import random
import logging
from typing import Dict, Any, Optional, List
from datetime import datetime, timezone
from urllib.parse import urljoin, urlparse
import json

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, WebDriverException
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

from ..config.scraper_config import get_selenium_config, get_anti_bot_config, get_site_config

logger = logging.getLogger(__name__)

class RateLimiter:
    """Token bucket rate limiter for domain-specific crawling"""
    
    def __init__(self, site_id: str):
        self.site_id = site_id
        self.site_config = get_site_config(site_id)
        self.tokens = self.site_config['requests_per_second']
        self.max_tokens = self.site_config['requests_per_second']
        self.last_update = time.time()
    
    def acquire(self) -> bool:
        """Acquire a token for making a request"""
        now = time.time()
        time_passed = now - self.last_update
        
        # Add tokens based on time passed
        self.tokens = min(
            self.max_tokens,
            self.tokens + time_passed * self.max_tokens
        )
        self.last_update = now
        
        if self.tokens >= 1:
            self.tokens -= 1
            return True
        return False
    
    def wait_time(self) -> float:
        """Calculate time to wait before next request"""
        if self.tokens >= 1:
            return 0
        return (1 - self.tokens) / self.max_tokens

class ProxyManager:
    """Manages proxy rotation for anti-detection"""
    
    def __init__(self):
        self.proxies = self._load_proxies()
        self.current_proxy = None
        self.proxy_index = 0
    
    def _load_proxies(self) -> List[str]:
        """Load proxy list from environment or config"""
        # In production, load from secure config
        return [
            # Add your proxy list here
            # "http://proxy1:port",
            # "http://proxy2:port",
        ]
    
    def get_proxy(self) -> Optional[str]:
        """Get next proxy in rotation"""
        if not self.proxies:
            return None
        
        proxy = self.proxies[self.proxy_index]
        self.proxy_index = (self.proxy_index + 1) % len(self.proxies)
        return proxy
    
    def rotate_proxy(self):
        """Force proxy rotation"""
        self.proxy_index = (self.proxy_index + 1) % len(self.proxies)

class StealthWebDriver:
    """Stealth WebDriver with anti-detection measures"""
    
    def __init__(self, site_id: str, use_proxy: bool = False):
        self.site_id = site_id
        self.config = get_selenium_config()
        self.anti_bot_config = get_anti_bot_config()
        self.proxy_manager = ProxyManager() if use_proxy else None
        self.driver = None
        self.session_cookies = {}
        
    def _create_driver(self) -> webdriver.Chrome:
        """Create Chrome driver with stealth options"""
        options = Options()
        
        # Basic stealth options
        options.add_argument('--no-sandbox')
        options.add_argument('--disable-dev-shm-usage')
        options.add_argument('--disable-blink-features=AutomationControlled')
        options.add_experimental_option("excludeSwitches", ["enable-automation"])
        options.add_experimental_option('useAutomationExtension', False)
        
        # Window size
        options.add_argument(f'--window-size={self.config["window_size"][0]},{self.config["window_size"][1]}')
        
        # User agent
        options.add_argument(f'--user-agent={self.config["user_agent"]}')
        
        # Headless mode
        if self.config['headless']:
            options.add_argument('--headless')
        
        # Proxy configuration
        if self.proxy_manager and self.proxy_manager.proxies:
            proxy = self.proxy_manager.get_proxy()
            if proxy:
                options.add_argument(f'--proxy-server={proxy}')
        
        # Additional stealth options
        options.add_argument('--disable-extensions')
        options.add_argument('--disable-plugins')
        options.add_argument('--disable-images')  # Faster loading
        options.add_argument('--disable-javascript')  # For some sites
        
        # Create driver
        service = Service(ChromeDriverManager().install())
        driver = webdriver.Chrome(service=service, options=options)
        
        # Execute stealth script
        driver.execute_script("""
            Object.defineProperty(navigator, 'webdriver', {
                get: () => undefined
            });
        """)
        
        # Set timeouts
        driver.set_page_load_timeout(self.config['page_load_timeout'])
        driver.implicitly_wait(self.config['implicit_wait'])
        
        return driver
    
    def start(self):
        """Start the WebDriver"""
        try:
            self.driver = self._create_driver()
            logger.info(f"WebDriver started for site: {self.site_id}")
        except Exception as e:
            logger.error(f"Failed to start WebDriver: {str(e)}")
            raise
    
    def stop(self):
        """Stop the WebDriver"""
        if self.driver:
            try:
                self.driver.quit()
                logger.info(f"WebDriver stopped for site: {self.site_id}")
            except Exception as e:
                logger.error(f"Error stopping WebDriver: {str(e)}")
            finally:
                self.driver = None
    
    def get_page(self, url: str) -> Optional[Dict[str, Any]]:
        """Get page content with anti-detection measures"""
        if not self.driver:
            self.start()
        
        try:
            # Random delay before request
            time.sleep(random.uniform(1, 3))
            
            # Navigate to URL
            self.driver.get(url)
            
            # Wait for page load
            WebDriverWait(self.driver, 10).until(
                EC.presence_of_element_located((By.TAG_NAME, "body"))
            )
            
            # Random mouse movements (simulate human behavior)
            self._simulate_human_behavior()
            
            # Check for CAPTCHA
            if self._detect_captcha():
                logger.warning(f"CAPTCHA detected on {url}")
                return None
            
            # Get page content
            page_data = {
                'url': url,
                'title': self.driver.title,
                'html': self.driver.page_source,
                'cookies': self.driver.get_cookies(),
                'headers': self._get_response_headers(),
                'screenshot': self._take_screenshot(),
                'crawled_at': datetime.now(timezone.utc).isoformat(),
                'site_id': self.site_id
            }
            
            # Store cookies for session reuse
            self._update_session_cookies(page_data['cookies'])
            
            return page_data
            
        except TimeoutException:
            logger.error(f"Timeout loading page: {url}")
            return None
        except WebDriverException as e:
            logger.error(f"WebDriver error on {url}: {str(e)}")
            return None
        except Exception as e:
            logger.error(f"Unexpected error crawling {url}: {str(e)}")
            return None
    
    def _simulate_human_behavior(self):
        """Simulate human-like behavior"""
        try:
            # Random scroll
            scroll_height = self.driver.execute_script("return document.body.scrollHeight")
            scroll_to = random.randint(0, scroll_height)
            self.driver.execute_script(f"window.scrollTo(0, {scroll_to});")
            
            # Random pause
            time.sleep(random.uniform(0.5, 2.0))
            
            # Random mouse movement (if not headless)
            if not self.config['headless']:
                from selenium.webdriver.common.action_chains import ActionChains
                actions = ActionChains(self.driver)
                actions.move_by_offset(random.randint(-100, 100), random.randint(-100, 100))
                actions.perform()
                
        except Exception as e:
            logger.debug(f"Error simulating human behavior: {str(e)}")
    
    def _detect_captcha(self) -> bool:
        """Detect if page contains CAPTCHA"""
        captcha_indicators = [
            "captcha",
            "recaptcha",
            "hcaptcha",
            "cloudflare",
            "challenge"
        ]
        
        try:
            page_source = self.driver.page_source.lower()
            return any(indicator in page_source for indicator in captcha_indicators)
        except Exception:
            return False
    
    def _get_response_headers(self) -> Dict[str, str]:
        """Get response headers (limited in Selenium)"""
        try:
            # Selenium doesn't provide direct access to response headers
            # This is a workaround
            return {
                'user-agent': self.config['user_agent'],
                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
            }
        except Exception:
            return {}
    
    def _take_screenshot(self) -> Optional[str]:
        """Take screenshot of the page"""
        try:
            if self.config['headless']:
                return None
            
            screenshot_path = f"screenshots/{self.site_id}_{int(time.time())}.png"
            self.driver.save_screenshot(screenshot_path)
            return screenshot_path
        except Exception as e:
            logger.debug(f"Error taking screenshot: {str(e)}")
            return None
    
    def _update_session_cookies(self, cookies: List[Dict[str, Any]]):
        """Update session cookies for reuse"""
        for cookie in cookies:
            self.session_cookies[cookie['name']] = cookie['value']

class SeleniumCrawler:
    """Main crawler class with rate limiting and anti-bot measures"""
    
    def __init__(self, site_id: str):
        self.site_id = site_id
        self.rate_limiter = RateLimiter(site_id)
        self.stealth_driver = StealthWebDriver(site_id)
        self.logger = logging.getLogger(__name__)
        
    def crawl_urls(self, urls: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        """
        Crawl a list of URLs with rate limiting
        
        Args:
            urls: List of URL dictionaries with metadata
            
        Returns:
            List of crawled page data
        """
        results = []
        
        for url_data in urls:
            url = url_data['url']
            
            # Rate limiting
            if not self.rate_limiter.acquire():
                wait_time = self.rate_limiter.wait_time()
                self.logger.info(f"Rate limited, waiting {wait_time:.2f}s")
                time.sleep(wait_time)
            
            # Crawl URL
            page_data = self.stealth_driver.get_page(url)
            
            if page_data:
                # Add original metadata
                page_data.update({
                    'original_priority': url_data.get('priority', 0.5),
                    'original_scores': url_data.get('scores', {}),
                    'total_score': url_data.get('total_score', 0.0)
                })
                results.append(page_data)
                self.logger.info(f"Successfully crawled: {url}")
            else:
                self.logger.warning(f"Failed to crawl: {url}")
            
            # Random delay between requests
            time.sleep(random.uniform(1, 3))
        
        return results
    
    def crawl_single_url(self, url: str) -> Optional[Dict[str, Any]]:
        """Crawl a single URL"""
        url_data = {'url': url, 'priority': 0.5, 'scores': {}, 'total_score': 0.0}
        results = self.crawl_urls([url_data])
        return results[0] if results else None
    
    def start_session(self):
        """Start crawling session"""
        self.stealth_driver.start()
        self.logger.info(f"Started crawling session for site: {self.site_id}")
    
    def end_session(self):
        """End crawling session"""
        self.stealth_driver.stop()
        self.logger.info(f"Ended crawling session for site: {self.site_id}")
    
    def __enter__(self):
        """Context manager entry"""
        self.start_session()
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        """Context manager exit"""
        self.end_session()
