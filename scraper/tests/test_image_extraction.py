#!/usr/bin/env python3
"""
Test Image Extraction Debugging
Debug why images aren't being extracted
"""

import sys
import os
import time
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from selenium.common.exceptions import TimeoutException, NoSuchElementException

def test_image_extraction():
    """Debug image extraction on Myntra product page"""
    
    print("🔍 Testing Image Extraction Debugging")
    print("=" * 50)
    
    # Setup driver
    chrome_options = Options()
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.add_argument("--disable-blink-features=AutomationControlled")
    chrome_options.add_experimental_option("excludeSwitches", ["enable-automation"])
    chrome_options.add_experimental_option('useAutomationExtension', False)
    
    driver = webdriver.Chrome(options=chrome_options)
    driver.execute_script("Object.defineProperty(navigator, 'webdriver', {get: () => undefined})")
    wait = WebDriverWait(driver, 15)
    
    try:
        # Test with a different product URL
        test_url = "https://www.myntra.com/tshirts/roadster/roadster-men-navy-blue-solid-round-neck-t-shirt/1700582/buy"
        
        print(f"🔍 Testing image extraction on: {test_url}")
        driver.get(test_url)
        time.sleep(3)
        
        # Wait for page to load
        wait.until(EC.presence_of_element_located((By.CLASS_NAME, "pdp-title")))
        
        print("\n📸 Debugging Image Elements:")
        
        # Check different image selectors
        selectors_to_test = [
            ".image-grid-image",
            ".image-grid-imageContainer img",
            ".image-grid-imageContainer",
            "img[src*='myntassets']",
            ".pdp-image",
            ".product-image",
            "[class*='image']"
        ]
        
        for selector in selectors_to_test:
            try:
                elements = driver.find_elements(By.CSS_SELECTOR, selector)
                print(f"  Selector '{selector}': {len(elements)} elements found")
                
                if elements:
                    for i, elem in enumerate(elements[:3]):  # Show first 3
                        try:
                            src = elem.get_attribute("src")
                            style = elem.get_attribute("style")
                            print(f"    Element {i+1}: src='{src}', style='{style[:50]}...'")
                        except Exception as e:
                            print(f"    Element {i+1}: Error getting attributes - {e}")
            except Exception as e:
                print(f"  Selector '{selector}': Error - {e}")
        
        # Try to scroll to trigger lazy loading
        print("\n🔄 Scrolling to trigger lazy loading...")
        driver.execute_script("window.scrollTo(0, 500);")
        time.sleep(2)
        
        # Check again after scrolling
        print("\n📸 After Scrolling:")
        img_elements = driver.find_elements(By.CSS_SELECTOR, "img")
        print(f"  Total img elements: {len(img_elements)}")
        
        for i, img in enumerate(img_elements[:5]):  # Show first 5
            try:
                src = img.get_attribute("src")
                if src and "myntassets" in src:
                    print(f"    Image {i+1}: {src}")
            except Exception as e:
                print(f"    Image {i+1}: Error - {e}")
        
        # Check page source for image URLs
        print("\n🔍 Checking page source for image patterns...")
        page_source = driver.page_source
        if "myntassets" in page_source:
            print("  ✅ Found 'myntassets' in page source")
            # Count occurrences
            count = page_source.count("myntassets")
            print(f"  Found {count} occurrences of 'myntassets'")
        else:
            print("  ❌ No 'myntassets' found in page source")
        
    except Exception as e:
        print(f"❌ Test failed: {e}")
    
    finally:
        driver.quit()

if __name__ == "__main__":
    test_image_extraction()
