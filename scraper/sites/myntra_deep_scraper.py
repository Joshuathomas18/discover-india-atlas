#!/usr/bin/env python3
"""
Myntra Deep Product Scraper
Extract detailed clothing attributes from individual product pages
"""

import json
import time
import random
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from selenium.common.exceptions import TimeoutException, NoSuchElementException
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class MyntraDeepScraper:
    """Deep scraper for individual Myntra product pages"""
    
    def __init__(self):
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
        
        self.driver = webdriver.Chrome(options=chrome_options)
        self.driver.execute_script("Object.defineProperty(navigator, 'webdriver', {get: () => undefined})")
        self.wait = WebDriverWait(self.driver, 10)
        
    def scrape_product(self, url):
        """Scrape detailed product information from a single product page"""
        if not self.driver:
            self.setup_driver()
            
        logger.info(f"🔍 Scraping product: {url}")
        
        try:
            self.driver.get(url)
            time.sleep(2)  # Let page load
            
            product_data = {"url": url}
            
            # Brand and Title
            try:
                brand_element = self.wait.until(
                    EC.presence_of_element_located((By.CLASS_NAME, "pdp-title"))
                )
                product_data["brand"] = brand_element.text.strip()
            except (TimeoutException, NoSuchElementException):
                product_data["brand"] = None
                logger.warning("⚠️ Could not find brand")
            
            try:
                title_element = self.driver.find_element(By.CLASS_NAME, "pdp-name")
                product_data["title"] = title_element.text.strip()
            except NoSuchElementException:
                product_data["title"] = None
                logger.warning("⚠️ Could not find title")
            
            # Price (discounted and original)
            try:
                price_element = self.driver.find_element(By.CLASS_NAME, "pdp-price")
                product_data["price"] = price_element.text.strip()
            except NoSuchElementException:
                product_data["price"] = None
                logger.warning("⚠️ Could not find price")
            
            try:
                original_price_element = self.driver.find_element(By.CLASS_NAME, "pdp-mrp")
                product_data["original_price"] = original_price_element.text.strip()
            except NoSuchElementException:
                product_data["original_price"] = None
            
            # Sizes
            sizes = []
            try:
                size_elements = self.driver.find_elements(By.CLASS_NAME, "size-buttons-size-button")
                for size_element in size_elements:
                    try:
                        label = size_element.text.strip()
                        disabled = "disabled" in size_element.get_attribute("class")
                        sizes.append({"size": label, "available": not disabled})
                    except Exception as e:
                        logger.warning(f"⚠️ Error processing size: {e}")
                        continue
            except NoSuchElementException:
                logger.warning("⚠️ Could not find size elements")
            product_data["sizes"] = sizes
            
            # Colors
            colors = []
            try:
                color_elements = self.driver.find_elements(By.CLASS_NAME, "colour-listItem")
                for color_element in color_elements:
                    try:
                        color_title = color_element.get_attribute("title")
                        if color_title:
                            colors.append(color_title.strip())
                    except Exception as e:
                        logger.warning(f"⚠️ Error processing color: {e}")
                        continue
            except NoSuchElementException:
                logger.warning("⚠️ Could not find color elements")
            product_data["colors"] = colors
            
            # Material / Description
            try:
                description_element = self.driver.find_element(By.CLASS_NAME, "pdp-product-description-content")
                product_data["description"] = description_element.text.strip()
            except NoSuchElementException:
                product_data["description"] = None
                logger.warning("⚠️ Could not find description")
            
            # Images
            images = []
            try:
                img_elements = self.driver.find_elements(By.CLASS_NAME, "image-grid-image")
                for img_element in img_elements:
                    try:
                        img_src = img_element.get_attribute("src")
                        if img_src:
                            images.append(img_src)
                    except Exception as e:
                        logger.warning(f"⚠️ Error processing image: {e}")
                        continue
            except NoSuchElementException:
                logger.warning("⚠️ Could not find image elements")
            product_data["images"] = images
            
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
            
            # Additional clothing-specific attributes
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
        
        # Gender category
        try:
            gender_element = self.driver.find_element(By.CSS_SELECTOR, "[class*='gender'], [class*='category']")
            attributes["gender"] = gender_element.text.strip()
        except NoSuchElementException:
            attributes["gender"] = None
        
        # Season/Collection
        try:
            season_element = self.driver.find_element(By.CSS_SELECTOR, "[class*='season'], [class*='collection']")
            attributes["season"] = season_element.text.strip()
        except NoSuchElementException:
            attributes["season"] = None
        
        return attributes
    
    def scrape_multiple_products(self, product_urls, max_products=10):
        """Scrape multiple products with rate limiting"""
        detailed_products = []
        
        for i, url in enumerate(product_urls[:max_products]):
            logger.info(f"📦 Scraping product {i+1}/{min(len(product_urls), max_products)}")
            
            product_data = self.scrape_product(url)
            detailed_products.append(product_data)
            
            # Rate limiting - random delay between requests
            if i < max_products - 1:  # Don't delay after last product
                delay = random.uniform(2, 5)
                logger.info(f"⏱️ Waiting {delay:.1f}s before next product...")
                time.sleep(delay)
        
        return detailed_products
    
    def close_driver(self):
        """Close the browser driver"""
        if self.driver:
            self.driver.quit()
            self.driver = None

def main():
    """Main function to test the deep scraper"""
    
    # Load existing product URLs
    try:
        with open('myntra_products_1758725829.json', 'r', encoding='utf-8') as f:
            products = json.load(f)
        
        # Extract URLs
        product_urls = [product['url'] for product in products if 'url' in product]
        logger.info(f"📋 Found {len(product_urls)} product URLs to scrape")
        
    except FileNotFoundError:
        logger.error("❌ Could not find myntra_products_1758725829.json")
        return
    
    # Initialize scraper
    scraper = MyntraDeepScraper()
    
    try:
        # Scrape first 5 products as a test
        logger.info("🚀 Starting deep product scraping...")
        detailed_products = scraper.scrape_multiple_products(product_urls, max_products=5)
        
        # Save detailed results
        output_file = f"myntra_detailed_products_{int(time.time())}.json"
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(detailed_products, f, indent=2, ensure_ascii=False)
        
        logger.info(f"✅ Detailed scraping complete! Results saved to {output_file}")
        
        # Show sample results
        print("\n📦 Sample Detailed Products:")
        for i, product in enumerate(detailed_products[:3]):
            print(f"\n{i+1}. {product.get('brand', 'Unknown')} - {product.get('title', 'Unknown')}")
            print(f"   Price: {product.get('price', 'N/A')}")
            print(f"   Original Price: {product.get('original_price', 'N/A')}")
            print(f"   Sizes: {len(product.get('sizes', []))} available")
            print(f"   Colors: {product.get('colors', [])}")
            print(f"   Rating: {product.get('rating', 'N/A')} ({product.get('rating_count', 'N/A')})")
            print(f"   Images: {len(product.get('images', []))} found")
            if product.get('description'):
                print(f"   Description: {product['description'][:100]}...")
        
    except Exception as e:
        logger.error(f"❌ Error in main: {e}")
    
    finally:
        scraper.close_driver()

if __name__ == "__main__":
    main()
