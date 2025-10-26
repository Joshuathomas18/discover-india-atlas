#!/usr/bin/env python3
"""
Test Improved Myntra Scraper
Test the fixed image and color extraction
"""

import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from myntra_comprehensive_scraper import MyntraComprehensiveScraper

def test_improved_scraper():
    """Test the improved scraper with a single product"""
    
    print("🧪 Testing Improved Myntra Scraper")
    print("=" * 50)
    
    scraper = MyntraComprehensiveScraper()
    
    try:
        # Test with a single product URL (from our previous results)
        test_url = "https://www.myntra.com/dresses/baesd/baesd-girls-floral-flutter-sleeve-net-fit--flare-dress/29524964/buy"
        
        print(f"🔍 Testing detailed extraction on: {test_url}")
        
        # Setup driver
        scraper.setup_driver()
        
        # Scrape the product
        product_data = scraper.scrape_product_details(test_url)
        
        print("\n📦 Extracted Product Data:")
        print(f"  Brand: {product_data.get('brand', 'N/A')}")
        print(f"  Title: {product_data.get('title', 'N/A')}")
        print(f"  Price: {product_data.get('price', 'N/A')}")
        print(f"  Original Price: {product_data.get('original_price', 'N/A')}")
        print(f"  Sizes: {product_data.get('sizes', [])}")
        print(f"  Colors: {product_data.get('colors', [])}")
        print(f"  Rating: {product_data.get('rating', 'N/A')}")
        print(f"  Rating Count: {product_data.get('rating_count', 'N/A')}")
        print(f"  Images Found: {len(product_data.get('images', []))}")
        
        if product_data.get('images'):
            print("  Image URLs:")
            for i, img_url in enumerate(product_data['images'][:3]):  # Show first 3
                print(f"    {i+1}. {img_url}")
        
        if product_data.get('description'):
            print(f"  Description: {product_data['description'][:100]}...")
        
        # Check if we got the expected format
        print("\n✅ Expected Output Format Check:")
        expected_fields = ['brand', 'title', 'price', 'original_price', 'sizes', 'colors', 'rating', 'rating_count', 'images', 'description']
        for field in expected_fields:
            if field in product_data and product_data[field] is not None:
                print(f"  ✅ {field}: Present")
            else:
                print(f"  ❌ {field}: Missing or None")
        
        print("\n🎉 Test completed!")
        
    except Exception as e:
        print(f"❌ Test failed: {e}")
    
    finally:
        scraper.close_driver()

if __name__ == "__main__":
    test_improved_scraper()
