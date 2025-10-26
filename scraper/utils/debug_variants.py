#!/usr/bin/env python3
"""
Debug Variants Extraction
Debug why .product-variants extraction isn't working
"""

import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager

def debug_variants():
    """Debug variants extraction"""
    
    print("🔍 Debugging Variants Extraction")
    print("=" * 50)
    
    # Setup driver
    opts = Options()
    opts.add_argument("--no-sandbox")
    opts.add_argument("--disable-dev-shm-usage")
    opts.add_argument("--disable-gpu")
    
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=opts)
    wait = WebDriverWait(driver, 15)
    
    try:
        # Test with a product
        test_url = "https://www.myntra.com/dresses/baesd/baesd-girls-floral-flutter-sleeve-net-fit--flare-dress/29524964/buy"
        
        print(f"🔍 Loading: {test_url}")
        driver.get(test_url)
        
        # Wait for page to load
        wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, "h1, .pdp-title, .pdp-name, #__next")))
        
        # Check for .product-variants
        print("\n🎨 Checking for .product-variants:")
        variant_elements = driver.find_elements(By.CSS_SELECTOR, ".product-variants")
        print(f"  .product-variants: {len(variant_elements)} elements found")
        
        if variant_elements:
            for i, element in enumerate(variant_elements):
                print(f"    {i+1}. HTML: {element.get_attribute('outerHTML')[:200]}...")
        
        # Check for .product-variants a
        print("\n🔗 Checking for .product-variants a:")
        variant_links = driver.find_elements(By.CSS_SELECTOR, ".product-variants a")
        print(f"  .product-variants a: {len(variant_links)} elements found")
        
        if variant_links:
            for i, link in enumerate(variant_links):
                href = link.get_attribute("href")
                print(f"    {i+1}. href: {href}")
                try:
                    img = link.find_element(By.TAG_NAME, "img")
                    alt = img.get_attribute("alt")
                    src = img.get_attribute("src")
                    print(f"       img alt: {alt}")
                    print(f"       img src: {src[:60]}...")
                except Exception as e:
                    print(f"       img error: {e}")
        
        # Check for other variant-related selectors
        print("\n🔍 Checking other variant selectors:")
        variant_selectors = [
            ".product-variants",
            ".product-variants a",
            ".variants",
            ".color-variants",
            ".style-variants",
            ".product-style-variants",
            "[class*='variant']",
            "[class*='color']",
            "[class*='style']"
        ]
        
        for selector in variant_selectors:
            elements = driver.find_elements(By.CSS_SELECTOR, selector)
            if elements:
                print(f"  {selector}: {len(elements)} elements found")
                for i, elem in enumerate(elements[:2]):  # Show first 2
                    try:
                        html = elem.get_attribute('outerHTML')
                        print(f"    {i+1}. {html[:100]}...")
                    except Exception as e:
                        print(f"    {i+1}. Error: {e}")
        
        # Check page source for variant-related terms
        print("\n🔍 Searching page source for variant terms:")
        page_source = driver.page_source.lower()
        variant_terms = ['product-variants', 'variants', 'color-variants', 'style-variants']
        for term in variant_terms:
            count = page_source.count(term)
            print(f"  '{term}': {count} occurrences")
        
        # Look for any links that might be variants
        print("\n🔗 Checking all links for potential variants:")
        all_links = driver.find_elements(By.TAG_NAME, "a")
        variant_candidates = []
        
        for link in all_links:
            href = link.get_attribute("href")
            if href and "myntra.com" in href and "/buy" in href:
                try:
                    # Check if link contains an img
                    img = link.find_element(By.TAG_NAME, "img")
                    alt = img.get_attribute("alt")
                    if alt and len(alt) < 50:  # Reasonable color name length
                        variant_candidates.append({
                            "href": href,
                            "alt": alt,
                            "src": img.get_attribute("src")
                        })
                except:
                    pass
        
        print(f"  Found {len(variant_candidates)} potential variant links")
        for i, candidate in enumerate(variant_candidates[:5]):  # Show first 5
            print(f"    {i+1}. {candidate['alt']} -> {candidate['href'][:60]}...")
        
    except Exception as e:
        print(f"❌ Debug failed: {e}")
        import traceback
        traceback.print_exc()
    
    finally:
        driver.quit()

if __name__ == "__main__":
    debug_variants()
