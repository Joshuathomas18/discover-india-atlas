#!/usr/bin/env python3
"""
Debug JSON Extraction
Debug what's actually in the JSON objects found by the advanced color extractor
"""

import sys
import os
import json
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from myntra_advanced_color_extractor import extract_colors_by_script_scan, extract_colors_from_next_data
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager

def debug_json_extraction():
    """Debug what's in the JSON objects"""
    
    print("🔍 Debugging JSON Extraction")
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
        test_url = "https://www.myntra.com/tshirts/roadster/roadster-men-navy-blue-solid-round-neck-t-shirt/1700582/buy"
        
        print(f"🔍 Loading: {test_url}")
        driver.get(test_url)
        
        # Wait for page to load
        wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, "h1, .pdp-title, .pdp-name, #__next")))
        
        soup = BeautifulSoup(driver.page_source, "lxml")
        
        # Debug __NEXT_DATA__
        print("\n📊 Debugging __NEXT_DATA__:")
        nd_results = extract_colors_from_next_data(soup)
        if nd_results:
            print(f"Found {len(nd_results)} candidate nodes in __NEXT_DATA__")
            for i, result in enumerate(nd_results[:3]):  # Show first 3
                print(f"  {i+1}. Path: {result['path']}")
                node = result['node']
                if isinstance(node, dict):
                    print(f"     Keys: {list(node.keys())[:10]}...")  # Show first 10 keys
                elif isinstance(node, list):
                    print(f"     List length: {len(node)}")
                    if node and isinstance(node[0], dict):
                        print(f"     First item keys: {list(node[0].keys())[:10]}...")
        else:
            print("No __NEXT_DATA__ found")
        
        # Debug script scanning
        print("\n📊 Debugging Script Scanning:")
        script_cands = extract_colors_by_script_scan(soup)
        if script_cands:
            print(f"Found {len(script_cands)} script-based candidates")
            for i, cand in enumerate(script_cands[:3]):  # Show first 3
                print(f"  {i+1}. Script excerpt: {cand['script_excerpt']}")
                print(f"     Hits: {len(cand['hits'])}")
                for j, hit in enumerate(cand['hits'][:2]):  # Show first 2 hits
                    print(f"       {j+1}. Path: {hit[0]}")
                    print(f"          Value type: {type(hit[1])}")
                    if isinstance(hit[1], dict):
                        print(f"          Keys: {list(hit[1].keys())[:5]}...")
                    elif isinstance(hit[1], list):
                        print(f"          List length: {len(hit[1])}")
                        if hit[1] and isinstance(hit[1][0], dict):
                            print(f"          First item keys: {list(hit[1][0].keys())[:5]}...")
        else:
            print("No script-based candidates found")
        
        # Look for specific color-related terms in the page source
        print("\n🔍 Searching for color-related terms in page source:")
        page_source = driver.page_source.lower()
        color_terms = ['color', 'colour', 'variant', 'swatch', 'sku']
        for term in color_terms:
            count = page_source.count(term)
            print(f"  '{term}': {count} occurrences")
        
        # Look for specific Myntra color selectors
        print("\n🎨 Checking for Myntra color selectors:")
        color_selectors = [
            ".colour-listItem",
            ".colour-listItemContainer",
            ".swatch",
            ".colour-swatch",
            ".swatch-item",
            "[data-color]",
            "[data-variant]"
        ]
        
        for selector in color_selectors:
            elements = driver.find_elements(By.CSS_SELECTOR, selector)
            if elements:
                print(f"  {selector}: {len(elements)} elements found")
                for i, elem in enumerate(elements[:2]):  # Show first 2
                    try:
                        title = elem.get_attribute("title")
                        alt = elem.get_attribute("alt")
                        data_color = elem.get_attribute("data-color")
                        data_variant = elem.get_attribute("data-variant")
                        print(f"    {i+1}. title='{title}', alt='{alt}', data-color='{data_color}', data-variant='{data_variant}'")
                    except Exception as e:
                        print(f"    {i+1}. Error getting attributes: {e}")
            else:
                print(f"  {selector}: No elements found")
        
    except Exception as e:
        print(f"❌ Debug failed: {e}")
        import traceback
        traceback.print_exc()
    
    finally:
        driver.quit()

if __name__ == "__main__":
    debug_json_extraction()
