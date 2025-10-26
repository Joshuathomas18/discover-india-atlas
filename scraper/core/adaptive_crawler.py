"""
Adaptive Crawler
Crawler that adapts to any website with dynamic strategy selection
"""

import time
import random
import logging
import requests
from typing import Dict, Any, Optional, List
from urllib.parse import urljoin, urlparse
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, WebDriverException
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup

logger = logging.getLogger(__name__)

class AdaptiveCrawler:
    """Crawler that adapts to any website with dynamic strategy selection"""
    
    def __init__(self):
        self.session_manager = DynamicSessionManager()
        self.rate_limiter = AdaptiveRateLimiter()
        self.anti_detection = UniversalAntiDetection()
        self.strategies = {
            'requests': self._requests_crawl,
            'selenium': self._selenium_crawl,
            'stealth_selenium': self._stealth_selenium_crawl
        }
    
    def crawl(self, url: str, max_retries: int = 3) -> Dict[str, Any]:
        """Crawl any website with adaptive strategies"""
        
        # Step 1: Analyze target website
        site_analysis = self._analyze_site(url)
        
        # Step 2: Choose crawling strategy
        strategy = self._choose_strategy(site_analysis)
        
        # Step 3: Execute crawling with retries
        for attempt in range(max_retries):
            try:
                result = self._execute_crawling(url, strategy)
                if result:
                    return result
            except Exception as e:
                logger.warning(f"Crawl attempt {attempt + 1} failed: {e}")
                if attempt < max_retries - 1:
                    # Try different strategy on retry
                    strategy = self._choose_fallback_strategy(strategy)
                    time.sleep(random.uniform(2, 5))
        
        logger.error(f"All crawl attempts failed for {url}")
        return None
    
    def _analyze_site(self, url: str) -> Dict[str, Any]:
        """Analyze target website to determine best approach"""
        analysis = {}
        
        try:
            # Check robots.txt
            analysis['robots'] = self._check_robots_txt(url)
            
            # Check for JavaScript requirements
            analysis['js_required'] = self._check_js_requirements(url)
            
            # Check for anti-bot measures
            analysis['anti_bot'] = self._check_anti_bot(url)
            
            # Check site speed
            analysis['speed'] = self._check_site_speed(url)
            
            # Check content type
            analysis['content_type'] = self._check_content_type(url)
            
        except Exception as e:
            logger.warning(f"Site analysis failed: {e}")
            analysis = {
                'robots': {'crawl_delay': 1, 'disallowed': []},
                'js_required': False,
                'anti_bot': False,
                'speed': 'medium',
                'content_type': 'html'
            }
        
        return analysis
    
    def _check_robots_txt(self, url: str) -> Dict[str, Any]:
        """Check robots.txt for crawling policies"""
        try:
            base_url = f"{urlparse(url).scheme}://{urlparse(url).netloc}"
            robots_url = urljoin(base_url, '/robots.txt')
            
            response = requests.get(robots_url, timeout=10)
            if response.status_code == 200:
                robots_content = response.text
                
                # Parse robots.txt
                crawl_delay = 1
                disallowed = []
                
                for line in robots_content.split('\n'):
                    line = line.strip()
                    if line.startswith('Crawl-delay:'):
                        crawl_delay = int(line.split(':', 1)[1].strip())
                    elif line.startswith('Disallow:'):
                        disallowed.append(line.split(':', 1)[1].strip())
                
                return {
                    'crawl_delay': crawl_delay,
                    'disallowed': disallowed,
                    'found': True
                }
        except Exception as e:
            logger.warning(f"Could not check robots.txt: {e}")
        
        return {'crawl_delay': 1, 'disallowed': [], 'found': False}
    
    def _check_js_requirements(self, url: str) -> bool:
        """Check if site requires JavaScript"""
        try:
            # Make a simple request to check if content is loaded
            response = requests.get(url, timeout=10)
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # Look for indicators that JavaScript is required
            js_indicators = [
                'noscript',  # Sites that require JS often have noscript tags
                'data-react',  # React applications
                'ng-app',  # Angular applications
                'vue-app',  # Vue applications
                'application/json'  # JSON responses
            ]
            
            content = response.text.lower()
            for indicator in js_indicators:
                if indicator in content:
                    return True
            
            # Check for empty content (might be loaded by JS)
            text_content = soup.get_text(strip=True)
            if len(text_content) < 100:  # Very little text content
                return True
            
            return False
            
        except Exception as e:
            logger.warning(f"Could not check JS requirements: {e}")
            return False
    
    def _check_anti_bot(self, url: str) -> bool:
        """Check for anti-bot measures"""
        try:
            response = requests.get(url, timeout=10)
            
            # Check for common anti-bot indicators
            anti_bot_indicators = [
                'cloudflare', 'incapsula', 'akamai',
                'access denied', 'blocked', 'captcha',
                'robot check', 'please verify'
            ]
            
            content = response.text.lower()
            for indicator in anti_bot_indicators:
                if indicator in content:
                    return True
            
            # Check status code
            if response.status_code in [403, 429, 503]:
                return True
            
            return False
            
        except Exception as e:
            logger.warning(f"Could not check anti-bot measures: {e}")
            return False
    
    def _check_site_speed(self, url: str) -> str:
        """Check site response speed"""
        try:
            start_time = time.time()
            response = requests.get(url, timeout=10)
            response_time = time.time() - start_time
            
            if response_time < 1:
                return 'fast'
            elif response_time < 3:
                return 'medium'
            else:
                return 'slow'
                
        except Exception as e:
            logger.warning(f"Could not check site speed: {e}")
            return 'medium'
    
    def _check_content_type(self, url: str) -> str:
        """Check content type"""
        try:
            response = requests.head(url, timeout=10)
            content_type = response.headers.get('content-type', '').lower()
            
            if 'application/json' in content_type:
                return 'json'
            elif 'text/html' in content_type:
                return 'html'
            else:
                return 'other'
                
        except Exception as e:
            logger.warning(f"Could not check content type: {e}")
            return 'html'
    
    def _choose_strategy(self, analysis: Dict[str, Any]) -> str:
        """Choose best crawling strategy based on analysis"""
        
        # High anti-bot measures -> stealth selenium
        if analysis.get('anti_bot', False):
            return 'stealth_selenium'
        
        # JavaScript required -> selenium
        if analysis.get('js_required', False):
            return 'selenium'
        
        # Fast site, no anti-bot -> requests
        if analysis.get('speed') == 'fast' and not analysis.get('anti_bot', False):
            return 'requests'
        
        # Default to selenium for reliability
        return 'selenium'
    
    def _choose_fallback_strategy(self, current_strategy: str) -> str:
        """Choose fallback strategy"""
        if current_strategy == 'requests':
            return 'selenium'
        elif current_strategy == 'selenium':
            return 'stealth_selenium'
        else:
            return 'requests'
    
    def _execute_crawling(self, url: str, strategy: str) -> Dict[str, Any]:
        """Execute crawling with chosen strategy"""
        
        if strategy not in self.strategies:
            raise ValueError(f"Unknown strategy: {strategy}")
        
        return self.strategies[strategy](url)
    
    def _requests_crawl(self, url: str) -> Dict[str, Any]:
        """Crawl using requests library"""
        try:
            # Rate limiting
            self.rate_limiter.acquire(url)
            
            # Create session with proper headers
            session = self.session_manager.get_session()
            
            # Make request
            response = session.get(url, timeout=30)
            response.raise_for_status()
            
            # Extract data
            page_data = {
                'url': url,
                'title': self._extract_title_from_html(response.text),
                'html': response.text,
                'status_code': response.status_code,
                'crawled_at': time.time(),
                'method': 'requests'
            }
            
            return page_data
            
        except Exception as e:
            logger.error(f"Requests crawl failed: {e}")
            raise
    
    def _selenium_crawl(self, url: str) -> Dict[str, Any]:
        """Crawl using Selenium"""
        driver = None
        try:
            # Rate limiting
            self.rate_limiter.acquire(url)
            
            # Setup Chrome driver
            options = Options()
            options.add_argument("--no-sandbox")
            options.add_argument("--disable-dev-shm-usage")
            options.add_argument("--disable-gpu")
            options.add_argument("--window-size=1920,1080")
            
            service = Service(ChromeDriverManager().install())
            driver = webdriver.Chrome(service=service, options=options)
            
            # Navigate to page
            driver.get(url)
            
            # Wait for page to load
            WebDriverWait(driver, 10).until(
                lambda d: d.execute_script("return document.readyState") == "complete"
            )
            
            # Extract data
            page_data = {
                'url': url,
                'title': driver.title,
                'html': driver.page_source,
                'status_code': 200,
                'crawled_at': time.time(),
                'method': 'selenium'
            }
            
            return page_data
            
        except Exception as e:
            logger.error(f"Selenium crawl failed: {e}")
            raise
        finally:
            if driver:
                driver.quit()
    
    def _stealth_selenium_crawl(self, url: str) -> Dict[str, Any]:
        """Crawl using stealth Selenium"""
        driver = None
        try:
            # Rate limiting
            self.rate_limiter.acquire(url)
            
            # Setup stealth Chrome driver
            options = self.anti_detection.get_stealth_options()
            
            service = Service(ChromeDriverManager().install())
            driver = webdriver.Chrome(service=service, options=options)
            
            # Apply stealth measures
            self.anti_detection.apply_stealth_scripts(driver)
            
            # Navigate to page
            driver.get(url)
            
            # Wait for page to load
            WebDriverWait(driver, 15).until(
                lambda d: d.execute_script("return document.readyState") == "complete"
            )
            
            # Check for blocking
            if self.anti_detection.detect_blocking(driver):
                raise Exception("Page blocked by anti-bot measures")
            
            # Extract data
            page_data = {
                'url': url,
                'title': driver.title,
                'html': driver.page_source,
                'status_code': 200,
                'crawled_at': time.time(),
                'method': 'stealth_selenium'
            }
            
            return page_data
            
        except Exception as e:
            logger.error(f"Stealth Selenium crawl failed: {e}")
            raise
        finally:
            if driver:
                driver.quit()
    
    def _extract_title_from_html(self, html: str) -> str:
        """Extract title from HTML"""
        try:
            soup = BeautifulSoup(html, 'html.parser')
            title_tag = soup.find('title')
            return title_tag.get_text(strip=True) if title_tag else ''
        except Exception:
            return ''

class DynamicSessionManager:
    """Manage HTTP sessions with proper headers"""
    
    def __init__(self):
        self.session = requests.Session()
        self._setup_session()
    
    def _setup_session(self):
        """Setup session with proper headers"""
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'Accept-Encoding': 'gzip, deflate',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'none',
            'Cache-Control': 'max-age=0'
        })
    
    def get_session(self) -> requests.Session:
        """Get configured session"""
        return self.session

class AdaptiveRateLimiter:
    """Adaptive rate limiter that adjusts based on site response"""
    
    def __init__(self):
        self.delays = {}
        self.last_request = {}
    
    def acquire(self, url: str):
        """Acquire permission to make a request"""
        domain = urlparse(url).netloc
        
        # Get delay for this domain
        delay = self.delays.get(domain, 1.0)
        
        # Check if enough time has passed
        last_time = self.last_request.get(domain, 0)
        current_time = time.time()
        
        if current_time - last_time < delay:
            sleep_time = delay - (current_time - last_time)
            time.sleep(sleep_time)
        
        # Update last request time
        self.last_request[domain] = time.time()
    
    def adjust_delay(self, url: str, response_time: float, status_code: int):
        """Adjust delay based on response"""
        domain = urlparse(url).netloc
        
        if status_code == 429:  # Too many requests
            self.delays[domain] = min(60.0, self.delays.get(domain, 1.0) * 2)
        elif status_code == 200 and response_time < 1:
            self.delays[domain] = max(0.5, self.delays.get(domain, 1.0) * 0.9)
        elif response_time > 5:
            self.delays[domain] = min(10.0, self.delays.get(domain, 1.0) * 1.5)

class UniversalAntiDetection:
    """Universal anti-detection measures"""
    
    def get_stealth_options(self) -> Options:
        """Get Chrome options optimized for stealth"""
        options = Options()
        
        # Basic stealth options
        options.add_argument("--no-sandbox")
        options.add_argument("--disable-dev-shm-usage")
        options.add_argument("--disable-blink-features=AutomationControlled")
        options.add_experimental_option("excludeSwitches", ["enable-automation"])
        options.add_experimental_option('useAutomationExtension', False)
        
        # User agent rotation
        user_agents = [
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        ]
        options.add_argument(f"--user-agent={random.choice(user_agents)}")
        
        # Window size randomization
        width = random.randint(1200, 1920)
        height = random.randint(800, 1080)
        options.add_argument(f"--window-size={width},{height}")
        
        # Disable images for faster loading
        prefs = {
            "profile.managed_default_content_settings.images": 2,
            "profile.default_content_setting_values.notifications": 2
        }
        options.add_experimental_option("prefs", prefs)
        
        return options
    
    def apply_stealth_scripts(self, driver: webdriver.Chrome):
        """Apply JavaScript stealth scripts"""
        stealth_scripts = [
            "Object.defineProperty(navigator, 'webdriver', {get: () => undefined})",
            "Object.defineProperty(navigator, 'plugins', {get: () => [1, 2, 3, 4, 5]})",
            "Object.defineProperty(navigator, 'languages', {get: () => ['en-US', 'en']})",
            "window.chrome = {runtime: {}}",
            "Object.defineProperty(navigator, 'permissions', {get: () => ({query: () => Promise.resolve({state: 'granted'})})})"
        ]
        
        for script in stealth_scripts:
            driver.execute_script(script)
    
    def detect_blocking(self, driver: webdriver.Chrome) -> bool:
        """Detect if page is blocked by anti-bot measures"""
        blocking_indicators = [
            "Access Denied", "Blocked", "CAPTCHA", "Robot Check",
            "Please verify you are human", "Cloudflare", "Incapsula"
        ]
        
        page_text = driver.page_source
        return any(indicator in page_text for indicator in blocking_indicators)
