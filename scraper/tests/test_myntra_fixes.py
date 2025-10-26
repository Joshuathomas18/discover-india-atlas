#!/usr/bin/env python3
"""
Test Myntra Scraper Fixes
Quick test to verify sitemap parsing and search functionality
"""

import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from myntra_scraper import MyntraScraper

def test_myntra_fixes():
    """Test the fixed Myntra scraper"""
    
    print("🧪 Testing Myntra Scraper Fixes")
    print("=" * 50)
    
    scraper = MyntraScraper()
    
    # Test 1: Sitemap parsing
    print("\n1️⃣ Testing Sitemap Parsing...")
    sitemap_urls = scraper.step2_check_robots_sitemap()
    print(f"✅ Found {len(sitemap_urls)} product sitemaps")
    
    # Test 2: Browser automation with a simple search
    print("\n2️⃣ Testing Browser Automation...")
    try:
        driver = scraper.step3_browser_automation("dresses")
        if driver:
            print("✅ Browser automation successful!")
            
            # Test 3: Extract a few products
            print("\n3️⃣ Testing Product Extraction...")
            products = scraper._extract_products_from_page(driver)
            print(f"✅ Extracted {len(products)} products")
            
            # Show sample products
            if products:
                print("\n📦 Sample Products:")
                for i, product in enumerate(products[:3]):
                    print(f"  {i+1}. {product['name']} - {product['price']}")
                    print(f"     URL: {product['url'][:60]}...")
            
            driver.quit()
            print("✅ Test completed successfully!")
        else:
            print("❌ Browser automation failed")
            
    except Exception as e:
        print(f"❌ Test failed: {e}")

if __name__ == "__main__":
    test_myntra_fixes()
