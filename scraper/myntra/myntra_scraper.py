#!/usr/bin/env python3
"""
Myntra Comprehensive Scraper
Combines search results scraping with deep product page analysis
"""

import json
import csv
import time
import random
import requests
import gzip
import xml.etree.ElementTree as ET
from datetime import datetime
from urllib.parse import urljoin, urlparse
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from selenium.common.exceptions import TimeoutException, NoSuchElementException
from bs4 import BeautifulSoup
import logging

# Import advanced color extraction functions
from myntra_advanced_color_extractor import get_color_variants

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class MyntraComprehensiveScraper:
    """Comprehensive Myntra scraper with search + deep product analysis"""
    
    def __init__(self):
        self.base_url = "https://www.myntra.com"
        self.robots_url = f"{self.base_url}/robots.txt"
        self.sitemap_url = f"{self.base_url}/sitemap-index.xml.gz"
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        })
        self.driver = None
        self.wait = None
        
    def setup_driver(self):
        """Setup Chrome driver with stealth options"""
        chrome_options = Options()
        chrome_options.add_argument("--no-sandbox")
        chrome_options.add_argument("--disable-dev-shm-usage")
        chrome_options.add_argument("--disable-blink-features=AutomationControlled")
        chrome_options.add_experimental_option("excludeSwitches", ["enable-automation"])
        chrome_options.add_experimental_option('useAutomationExtension', False)
        chrome_options.add_argument("--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")
        # Speed optimizations: quicker page load strategy and disable images
        try:
            chrome_options.page_load_strategy = 'eager'
        except Exception:
            pass
        chrome_prefs = {
            "profile.managed_default_content_settings.images": 2
        }
        chrome_options.add_experimental_option("prefs", chrome_prefs)
        
        self.driver = webdriver.Chrome(options=chrome_options)
        self.driver.execute_script("Object.defineProperty(navigator, 'webdriver', {get: () => undefined})")
        self.wait = WebDriverWait(self.driver, 15)
        
    def search_products(self, search_term, max_scrolls=5, max_results=50):
        """Search for products and extract basic info fast with early exit"""
        logger.info(f"🔍 Searching for '{search_term}'...")
        
        if not self.driver:
            self.setup_driver()
        
        # Navigate to Myntra
        self.driver.get(self.base_url)
        time.sleep(3)
        
        # Find search bar and search
        search_box = self.wait.until(
            EC.presence_of_element_located((By.CLASS_NAME, "desktop-searchBar"))
        )
        search_box.clear()
        search_box.send_keys(search_term)
        search_box.send_keys(Keys.RETURN)
        
        # Wait for results to load
        self.wait.until(
            EC.presence_of_all_elements_located((By.CLASS_NAME, "product-base"))
        )
        logger.info("✅ Search results loaded")
        
        # Scroll and collect products (dedupe incrementally)
        products = []
        seen_urls = set()
        last_height = self.driver.execute_script("return document.body.scrollHeight")
        scroll_attempts = 0
        
        while scroll_attempts < max_scrolls and len(products) < max_results:
            # Scroll to bottom
            self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
            time.sleep(random.uniform(1.0, 2.2))
            
            # Check if new content loaded
            new_height = self.driver.execute_script("return document.body.scrollHeight")
            if new_height == last_height:
                scroll_attempts += 1
            else:
                scroll_attempts = 0
                last_height = new_height
            
            # Extract products from current view
            current_products = self._extract_basic_products()
            for p in current_products:
                url = p.get('url')
                if url and url not in seen_urls:
                    products.append(p)
                    seen_urls.add(url)
                    if len(products) >= max_results:
                        break
            
            logger.info(f"📦 Found {len(current_products)} products in this scroll, total: {len(products)}")
            time.sleep(random.uniform(0.8, 1.8))
        
        logger.info(f"✅ Total unique products found: {len(products)}")
        return products[:max_results]
    
    def _extract_basic_products(self):
        """Extract comprehensive product info from search results"""
        products = []
        
        try:
            product_elements = self.driver.find_elements(By.CLASS_NAME, "product-base")
            
            for element in product_elements:
                try:
                    product = {}
                    
                    # Extract name and brand separately
                    try:
                        brand_element = element.find_element(By.CLASS_NAME, "product-brand")
                        product_name_element = element.find_element(By.CLASS_NAME, "product-product")
                        product['brand'] = brand_element.text.strip()
                        product['name'] = product_name_element.text.strip()
                        product['full_name'] = f"{product['brand']} {product['name']}"
                    except NoSuchElementException:
                        product['brand'] = "N/A"
                        product['name'] = "N/A"
                        product['full_name'] = "N/A"
                    
                    # Extract price with discount calculation
                    try:
                        try:
                            price_element = element.find_element(By.CLASS_NAME, "product-discountedPrice")
                            product['price'] = price_element.text.strip()
                        except NoSuchElementException:
                            price_element = element.find_element(By.CLASS_NAME, "product-price")
                            product['price'] = price_element.text.strip()
                        
                        # Try to extract original price for discount calculation
                        try:
                            original_price_element = element.find_element(By.CLASS_NAME, "product-strike")
                            product['original_price'] = original_price_element.text.strip()
                            # Calculate discount percentage
                            product['discount_percentage'] = self._calculate_discount(product['price'], product['original_price'])
                        except NoSuchElementException:
                            product['original_price'] = None
                            product['discount_percentage'] = 0
                            
                    except NoSuchElementException:
                        product['price'] = "N/A"
                        product['original_price'] = None
                        product['discount_percentage'] = 0
                    
                    # Extract URL
                    link_element = element.find_element(By.CSS_SELECTOR, "a")
                    product['url'] = urljoin(self.base_url, link_element.get_attribute('href'))
                    
                    # Extract image
                    try:
                        img_element = element.find_element(By.CSS_SELECTOR, "img")
                        product['image_url'] = img_element.get_attribute('src')
                    except NoSuchElementException:
                        product['image_url'] = "N/A"
                    
                    # Extract rating if available
                    try:
                        rating_element = element.find_element(By.CLASS_NAME, "product-ratingsContainer")
                        rating_text = rating_element.text.strip()
                        if rating_text:
                            product['rating'] = float(rating_text.split()[0])
                        else:
                            product['rating'] = None
                    except NoSuchElementException:
                        product['rating'] = None
                    
                    # Extract category from URL or page context
                    product['category'] = self._extract_category_from_url(product['url'])
                    
                    # Add metadata
                    product['scraped_at'] = datetime.now().isoformat()
                    product['source'] = 'myntra'
                    
                    products.append(product)
                    
                except Exception as e:
                    logger.warning(f"⚠️ Error extracting product: {e}")
                    continue
                    
        except Exception as e:
            logger.warning(f"⚠️ Error finding products: {e}")
        
        return products
    
    def scrape_product_details(self, url, use_advanced_color_extraction=True):
        """Scrape detailed product information from individual product page"""
        logger.info(f"🔍 Scraping product details: {url}")
        
        try:
            self.driver.get(url)
            time.sleep(2)
            
            product_data = {"url": url}
            
            # Use advanced color extraction if requested
            if use_advanced_color_extraction:
                try:
                    logger.info("🎨 Using advanced color extraction...")
                    color_data = get_color_variants(self.driver, url, click_each_swatch=True)
                    
                    # Merge color data into product_data
                    product_data["colors"] = color_data.get("colors", [])
                    product_data["variants"] = color_data.get("variants", [])
                    product_data["all_images"] = color_data.get("default_images", [])
                    
                    logger.info(f"✅ Advanced extraction found {len(color_data.get('colors', []))} colors and {len(color_data.get('variants', []))} variants")
                    
                except Exception as e:
                    logger.warning(f"⚠️ Advanced color extraction failed: {e}")
                    # Fall back to basic extraction
                    product_data["colors"] = []
                    product_data["variants"] = []
                    product_data["all_images"] = []
            
            # Brand and Title
            try:
                brand_element = self.wait.until(
                    EC.presence_of_element_located((By.CLASS_NAME, "pdp-title"))
                )
                product_data["brand"] = brand_element.text.strip()
            except (TimeoutException, NoSuchElementException):
                product_data["brand"] = None
            
            try:
                title_element = self.driver.find_element(By.CLASS_NAME, "pdp-name")
                product_data["title"] = title_element.text.strip()
            except NoSuchElementException:
                product_data["title"] = None
            
            # Price (discounted and original)
            try:
                price_element = self.driver.find_element(By.CLASS_NAME, "pdp-price")
                product_data["price"] = price_element.text.strip()
            except NoSuchElementException:
                product_data["price"] = None
            
            try:
                original_price_element = self.driver.find_element(By.CLASS_NAME, "pdp-mrp")
                product_data["original_price"] = original_price_element.text.strip()
            except NoSuchElementException:
                product_data["original_price"] = None
            
            # Sizes (simplified to just size names)
            sizes = []
            try:
                size_elements = self.driver.find_elements(By.CLASS_NAME, "size-buttons-size-button")
                for size_element in size_elements:
                    try:
                        label = size_element.text.strip()
                        if label:  # Only add non-empty sizes
                            sizes.append(label)
                    except Exception:
                        continue
            except NoSuchElementException:
                pass
            product_data["sizes"] = sizes
            
            # Colors (basic extraction - only if advanced extraction didn't work)
            if not product_data.get("colors"):
                colors = []
                try:
                    # Look for color variant images with alt text
                    color_elements = self.driver.find_elements(By.CSS_SELECTOR, ".colour-listItem img")
                    for c in color_elements:
                        alt = c.get_attribute("alt")
                        if alt:
                            colors.append(alt.strip())
                    
                    # Fallback: look for color titles
                    if not colors:
                        color_title_elements = self.driver.find_elements(By.CSS_SELECTOR, ".colour-listItem")
                        for color_element in color_title_elements:
                            try:
                                color_title = color_element.get_attribute("title")
                                if color_title:
                                    colors.append(color_title.strip())
                            except Exception:
                                continue
                except Exception as e:
                    logger.warning(f"⚠️ Error extracting colors: {e}")
                
                product_data["colors"] = colors
            
            # Description
            try:
                description_element = self.driver.find_element(By.CLASS_NAME, "pdp-product-description-content")
                product_data["description"] = description_element.text.strip()
            except NoSuchElementException:
                product_data["description"] = None
            
            # Images (improved extraction - combine with advanced extraction)
            images = []
            
            # Start with images from advanced extraction
            if product_data.get("all_images"):
                images.extend(product_data["all_images"])
            
            try:
                # Primary method: look for img elements with src
                img_elements = self.driver.find_elements(By.CSS_SELECTOR, "img")
                for img in img_elements:
                    src = img.get_attribute("src")
                    if src and "myntassets" in src and "constant.myntassets" not in src:
                        images.append(src)
                
                # Main method: extract from CSS background-image
                bg_elements = self.driver.find_elements(By.CSS_SELECTOR, ".image-grid-image")
                for bg in bg_elements:
                    style = bg.get_attribute("style")
                    if "background-image" in style and "url(" in style:
                        # Extract URL from background-image: url("...")
                        try:
                            url_start = style.find("url(") + 4
                            url_end = style.find(")", url_start)
                            url = style[url_start:url_end].strip('"\'')
                            if url and "myntassets" in url:
                                images.append(url)
                        except Exception as e:
                            logger.warning(f"⚠️ Error parsing background-image URL: {e}")
                            continue
                
                # Also check image-grid-imageContainer
                container_elements = self.driver.find_elements(By.CSS_SELECTOR, ".image-grid-imageContainer")
                for container in container_elements:
                    style = container.get_attribute("style")
                    if "background-image" in style and "url(" in style:
                        try:
                            url_start = style.find("url(") + 4
                            url_end = style.find(")", url_start)
                            url = style[url_start:url_end].strip('"\'')
                            if url and "myntassets" in url:
                                images.append(url)
                        except Exception as e:
                            continue
                            
            except Exception as e:
                logger.warning(f"⚠️ Error extracting images: {e}")
            
            product_data["images"] = list(set(images))  # deduplicate
            
            # Ratings & Reviews
            try:
                rating_element = self.driver.find_element(By.CLASS_NAME, "index-overallRating")
                product_data["rating"] = rating_element.text.strip()
            except NoSuchElementException:
                product_data["rating"] = None
            
            try:
                rating_count_element = self.driver.find_element(By.CLASS_NAME, "index-ratingsCount")
                product_data["rating_count"] = rating_count_element.text.strip()
            except NoSuchElementException:
                product_data["rating_count"] = None
            
            # Additional attributes
            product_data.update(self._extract_additional_attributes())
            
            logger.info(f"✅ Successfully scraped: {product_data.get('brand', 'Unknown')} - {product_data.get('title', 'Unknown')}")
            return product_data
            
        except Exception as e:
            logger.error(f"❌ Error scraping product {url}: {e}")
            return {"url": url, "error": str(e)}
    
    def _extract_additional_attributes(self):
        """Extract additional clothing-specific attributes"""
        attributes = {}
        
        # Care instructions
        try:
            care_element = self.driver.find_element(By.CSS_SELECTOR, "[class*='care'], [class*='washing'], [class*='instruction']")
            attributes["care_instructions"] = care_element.text.strip()
        except NoSuchElementException:
            attributes["care_instructions"] = None
        
        # Material composition
        try:
            material_element = self.driver.find_element(By.CSS_SELECTOR, "[class*='material'], [class*='fabric'], [class*='composition']")
            attributes["material"] = material_element.text.strip()
        except NoSuchElementException:
            attributes["material"] = None
        
        return attributes
    
    def _calculate_discount(self, current_price, original_price):
        """Calculate discount percentage from price strings"""
        try:
            # Extract numeric values from price strings
            current = float(''.join(filter(str.isdigit, current_price)))
            original = float(''.join(filter(str.isdigit, original_price)))
            
            if original > current:
                discount = ((original - current) / original) * 100
                return round(discount, 1)
            return 0
        except (ValueError, TypeError):
            return 0
    
    def _extract_category_from_url(self, url):
        """Extract category from Myntra URL"""
        try:
            # Myntra URLs typically have category in path: /category/brand/product
            path_parts = url.split('/')
            if len(path_parts) > 3:
                category = path_parts[3]  # Usually the category
                return category.replace('+', ' ').title()
            return 'General'
        except Exception:
            return 'General'
    
    def comprehensive_scrape(self, search_term, max_products=10, detailed_analysis=True):
        """Comprehensive scraping: search + detailed analysis"""
        logger.info(f"🚀 Starting comprehensive scrape for '{search_term}'")
        
        # Step 1: Search and get basic product info
        # Use smaller scrolls for speed and honor max_products when returning basic results
        basic_products = self.search_products(
            search_term,
            max_scrolls=4 if detailed_analysis else 3,
            max_results=max_products if not detailed_analysis else max(max_products, 20)
        )
        
        if not basic_products:
            logger.error("❌ No products found in search")
            return []
        
        # Step 2: Detailed analysis of selected products
        if detailed_analysis:
            logger.info(f"🔍 Performing detailed analysis on {min(len(basic_products), max_products)} products...")
            
            detailed_products = []
            for i, product in enumerate(basic_products[:max_products]):
                logger.info(f"📦 Analyzing product {i+1}/{min(len(basic_products), max_products)}")
                
                detailed_data = self.scrape_product_details(product['url'])
                detailed_products.append(detailed_data)
                
                # Rate limiting
                if i < max_products - 1:
                    delay = random.uniform(2, 5)
                    logger.info(f"⏱️ Waiting {delay:.1f}s...")
                    time.sleep(delay)
            
            return detailed_products
        else:
            return basic_products
    
    def save_results(self, products, filename_prefix="myntra_products"):
        """Save results to JSON and CSV"""
        timestamp = int(time.time())
        
        # Save JSON
        json_filename = f"{filename_prefix}_{timestamp}.json"
        with open(json_filename, 'w', encoding='utf-8') as f:
            json.dump(products, f, indent=2, ensure_ascii=False)
        logger.info(f"✅ JSON saved to {json_filename}")
        
        # Save CSV (if products have consistent structure)
        if products and isinstance(products[0], dict):
            csv_filename = f"{filename_prefix}_{timestamp}.csv"
            try:
                with open(csv_filename, 'w', newline='', encoding='utf-8') as f:
                    writer = csv.DictWriter(f, fieldnames=products[0].keys())
                    writer.writeheader()
                    writer.writerows(products)
                logger.info(f"✅ CSV saved to {csv_filename}")
            except Exception as e:
                logger.warning(f"⚠️ Could not save CSV: {e}")
        
        return json_filename
    
    def close_driver(self):
        """Close the browser driver"""
        if self.driver:
            self.driver.quit()
            self.driver = None

def main():
    """Main function to run comprehensive scraping"""
    
    scraper = MyntraComprehensiveScraper()
    
    try:
        # Test with different search terms
        search_terms = ["dresses", "shirts", "shoes"]
        
        for term in search_terms:
            print(f"\n{'='*60}")
            print(f"🛍️ COMPREHENSIVE SCRAPING: {term.upper()}")
            print(f"{'='*60}")
            
            # Comprehensive scrape with detailed analysis
            products = scraper.comprehensive_scrape(term, max_products=3, detailed_analysis=True)
            
            if products:
                # Save results
                filename = scraper.save_results(products, f"myntra_comprehensive_{term}")
                
                print(f"✅ Successfully scraped {len(products)} products")
                print(f"📁 Results saved to: {filename}")
                
                # Show sample products
                print(f"\n📦 Sample Products for '{term}':")
                for i, product in enumerate(products[:2]):
                    print(f"  {i+1}. {product.get('brand', 'Unknown')} - {product.get('title', 'Unknown')}")
                    print(f"     Price: {product.get('price', 'N/A')}")
                    print(f"     Sizes: {len(product.get('sizes', []))} available")
                    print(f"     Colors: {product.get('colors', [])}")
                    print(f"     Rating: {product.get('rating', 'N/A')}")
            else:
                print(f"❌ No products found for '{term}'")
            
            # Wait between searches
            time.sleep(5)
    
    except Exception as e:
        logger.error(f"❌ Error in main: {e}")
    
    finally:
        scraper.close_driver()

if __name__ == "__main__":
    main()
