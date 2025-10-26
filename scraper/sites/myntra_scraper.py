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
from .myntra_advanced_color_extractor import get_color_variants

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
        
    def search_products(self, search_term, max_scrolls=8, max_results=200):
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
            # Scroll to bottom with optimized scrolling for large batches
            scroll_distance = 1000 + (scroll_attempts * 500)
            self.driver.execute_script(f"window.scrollTo(0, {scroll_distance});")
            time.sleep(random.uniform(0.8, 1.5))  # Faster scrolling
            
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
                    
                    # Extract sizes and colors (basic extraction from search results)
                    product['sizes'] = []
                    product['colors'] = []
                    
                    # Try to extract sizes from size indicators in search results
                    try:
                        size_indicators = element.find_elements(By.CSS_SELECTOR, "[class*='size'], [class*='Size']")
                        for indicator in size_indicators:
                            size_text = indicator.text.strip()
                            if size_text and len(size_text) <= 4:
                                product['sizes'].append(size_text)
                    except Exception:
                        pass
                    
                    # Try to extract colors from color indicators in search results  
                    try:
                        color_indicators = element.find_elements(By.CSS_SELECTOR, "[class*='color'], [class*='Color'], [class*='colour']")
                        for indicator in color_indicators:
                            color_text = indicator.text.strip()
                            if color_text and len(color_text) <= 20:
                                product['colors'].append(color_text)
                    except Exception:
                        pass
                    
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
            
            # Sizes - extract from size buttons
            sizes = []
            try:
                # Try multiple selectors for size buttons
                size_selectors = [
                    "div.size-buttons-size-buttons button",
                    "div.size-buttons-size-buttons .size-buttons-tipAndBtnContainer",
                    ".size-buttons-size-button",
                    "button[class*='size']",
                    ".size-button"
                ]
                
                for selector in size_selectors:
                    try:
                        size_elements = self.driver.find_elements(By.CSS_SELECTOR, selector)
                        if size_elements:
                            for size_element in size_elements:
                                try:
                                    label = size_element.text.strip()
                                    if label and len(label) <= 4:  # Size labels are short (XS, S, M, L, XL, etc.)
                                        sizes.append(label)
                                except Exception:
                                    continue
                            break  # Found sizes with this selector
                    except Exception:
                        continue
                        
            except Exception as e:
                logger.debug(f"Error extracting sizes: {e}")
                pass
            
            product_data["sizes"] = list(set(sizes))  # Remove duplicates
            
            # Colors - extract from color variants
            if not product_data.get("colors"):
                colors = []
                try:
                    # Try multiple selectors for color variants
                    color_selectors = [
                        ".colour-listItem img[alt]",
                        ".color-listItem img[alt]", 
                        ".product-variants img[alt]",
                        ".variant-colors img[alt]",
                        ".color-options img[alt]",
                        "img[alt*='color']",
                        "img[alt*='Color']"
                    ]
                    
                    for selector in color_selectors:
                        try:
                            color_elements = self.driver.find_elements(By.CSS_SELECTOR, selector)
                            if color_elements:
                                for color_element in color_elements:
                                    alt = color_element.get_attribute("alt")
                                    if alt and alt not in colors:
                                        colors.append(alt.strip())
                                break  # Found colors with this selector
                        except Exception:
                            continue
                    
                    # Fallback: look for color titles
                    if not colors:
                        color_title_selectors = [
                            ".colour-listItem[title]",
                            ".color-listItem[title]",
                            ".product-variants[title]"
                        ]
                        for selector in color_title_selectors:
                            try:
                                color_elements = self.driver.find_elements(By.CSS_SELECTOR, selector)
                                if color_elements:
                                    for color_element in color_elements:
                                        color_title = color_element.get_attribute("title")
                                        if color_title and color_title not in colors:
                                            colors.append(color_title.strip())
                                    break
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
            
            # Also set image_url for backward compatibility
            if images:
                product_data["image_url"] = images[0]
            
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
    
    def comprehensive_scrape(self, search_term, max_products=50, detailed_analysis=True, progress_callback=None):
        """Comprehensive scraping: search + detailed analysis"""
        logger.info(f"🚀 Starting comprehensive scrape for '{search_term}'")
        
        # Step 1: Search and get basic product info
        # Use larger scrolls for comprehensive results
        basic_products = self.search_products(
            search_term,
            max_scrolls=6 if detailed_analysis else 4,  # Reduced scrolls for speed
            max_results=max_products if not detailed_analysis else max(max_products, 30)  # Reduced minimum
        )
        
        if not basic_products:
            logger.error("❌ No products found in search")
            return []
        
        # Step 2: Detailed analysis of selected products
        if detailed_analysis:
            # For large batches, analyze only top products to save time
            analysis_count = min(len(basic_products), min(max_products, 30))  # Max 30 detailed analyses
            logger.info(f"🔍 Performing detailed analysis on {analysis_count} products...")
            
            detailed_products = []
            for i, product in enumerate(basic_products[:analysis_count]):
                logger.info(f"📦 Analyzing product {i+1}/{analysis_count}")
                
                if progress_callback:
                    progress_callback(i, analysis_count, f"Analyzing product {i+1}/{analysis_count}")
                
                detailed_data = self.scrape_product_details(product['url'])
                detailed_products.append(detailed_data)
                
                # Optimized rate limiting for large batches
                if i < analysis_count - 1:
                    delay = random.uniform(1.0, 2.0)  # Further reduced delay
                    logger.info(f"⏱️ Waiting {delay:.1f}s...")
                    time.sleep(delay)
            
            # Add remaining products without detailed analysis
            if len(basic_products) > analysis_count:
                remaining_products = basic_products[analysis_count:]
                detailed_products.extend(remaining_products)
                logger.info(f"📦 Added {len(remaining_products)} products without detailed analysis")
            
            if progress_callback:
                progress_callback(len(detailed_products), len(detailed_products), "Analysis completed")
            
            return detailed_products
        else:
            return basic_products

    def comprehensive_scrape_with_scoring(self, search_term, max_products=50, filters=None, progress_callback=None):
        """Comprehensive scraping with real-time similarity scoring"""
        logger.info(f"🚀 Starting scored scrape for '{search_term}'")
        
        # Step 1: Search and get basic product info
        basic_products = self.search_products(
            search_term,
            max_scrolls=6,
            max_results=max_products
        )
        
        if not basic_products:
            logger.error("❌ No products found in search")
            return []
        
        # Step 2: Real-time scoring and filtering
        scored_products = []
        query_terms = set(search_term.lower().split())
        
        for i, product in enumerate(basic_products):
            if progress_callback:
                progress_callback(i, len(basic_products), f"Scoring product {i+1}/{len(basic_products)}")
            
            # Calculate similarity score
            similarity_score = self._calculate_similarity_score(product, query_terms, filters)
            product['similarity_score'] = similarity_score
            
            # Only keep products that pass filters and have decent scores
            if self._passes_filters(product, filters) and similarity_score > 0.001:  # Almost no threshold
                scored_products.append(product)
            
            # Early exit if we have enough good products
            if len(scored_products) >= 20:  # Increased to 20
                logger.info(f"✅ Early exit: Found 20 good products")
                break
        
        # Sort by similarity score (highest first)
        scored_products.sort(key=lambda x: x.get('similarity_score', 0), reverse=True)
        
        if progress_callback:
            progress_callback(len(scored_products), len(basic_products), "Scoring completed")
        
        return scored_products[:20]  # Return top 20
    
    def _calculate_similarity_score(self, product, query_terms, filters):
        """Calculate real-time similarity score"""
        score = 0.0
        
        # Query relevance (50% weight) - increased weight
        product_text = ' '.join([
            product.get('name', ''),
            product.get('brand', ''),
            product.get('category', ''),
            product.get('title', '')  # Added title field
        ]).lower()
        
        matches = sum(1 for term in query_terms if term in product_text)
        query_score = matches / len(query_terms) if query_terms else 0.0
        score += query_score * 0.5  # Increased weight
        
        # Base score for any product (ensure minimum score)
        score += 0.5  # Much higher base score
        
        # Quality score (20% weight) - reduced weight
        rating = product.get('rating', 0)
        if rating:
            try:
                if isinstance(rating, str):
                    rating = float(rating.split()[0])
                quality_score = min(rating / 5.0, 1.0)
                score += quality_score * 0.2
            except:
                score += 0.1
        else:
            score += 0.1
        
        # Value score (15% weight) - reduced weight
        discount = product.get('discount_percentage', 0)
        if discount > 30:
            score += 0.15
        elif discount > 10:
            score += 0.1
        else:
            score += 0.05
        
        # Availability score (15% weight) - increased weight
        if product.get('price') and product.get('url'):
            score += 0.15
        
        return min(score, 1.0)
    
    def _passes_filters(self, product, filters):
        """Check if product passes filters - lenient version"""
        if not filters:
            return True
        
        # Size filter - more lenient
        if filters.get('size'):
            product_sizes = product.get('sizes', [])
            if not product_sizes:  # If no sizes found, don't filter out
                pass  # Allow through
            elif filters['size'] not in product_sizes:
                return False
        
        # Brand filter - more lenient
        if filters.get('brand'):
            product_brand = product.get('brand', '').lower()
            filter_brand = filters['brand'].lower()
            if product_brand and filter_brand not in product_brand:
                return False
        
        # Price filter - more lenient
        if filters.get('min_price') or filters.get('max_price'):
            try:
                price_str = product.get('price', '0')
                price = float(''.join(filter(str.isdigit, price_str)))
                min_price = filters.get('min_price', 0)
                max_price = filters.get('max_price', 999999)
                if not (min_price <= price <= max_price):
                    return False
            except:
                pass  # If price parsing fails, don't filter out
        
        # Rating filter - more lenient
        if filters.get('min_rating'):
            try:
                rating = product.get('rating', 0)
                if isinstance(rating, str):
                    rating = float(rating.split()[0])
                if rating < filters['min_rating']:
                    return False
            except:
                pass  # If rating parsing fails, don't filter out
        
        # Discount filter - more lenient
        if filters.get('min_discount'):
            try:
                discount = product.get('discount_percentage', 0)
                if discount < filters['min_discount']:
                    return False
            except:
                pass  # If discount parsing fails, don't filter out
        
        return True
    
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
