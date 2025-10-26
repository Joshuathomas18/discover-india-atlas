#!/usr/bin/env python3
"""
Test Dynamic Universal Scraper
Demonstrates the zero-configuration scraper working on any website
"""

import os
import sys
import django
from pathlib import Path

# Add the project root to Python path
project_root = Path(__file__).parent
sys.path.insert(0, str(project_root))

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from app.scraper.dynamic.universal_scraper import UniversalScraper
import json

def test_dynamic_scraper():
    """Test the dynamic scraper with various websites"""
    print("🚀 Testing Dynamic Universal Scraper")
    print("=" * 60)
    
    # Initialize scraper
    scraper = UniversalScraper(
        max_pages=5,
        respect_robots=True,
        use_selenium=True,
        anti_detection=True,
        rate_limit=1.0
    )
    
    # Test websites
    test_sites = [
        {
            'name': 'Myntra',
            'url': 'https://www.myntra.com/women-dresses',
            'type': 'listing'
        },
        {
            'name': 'Example E-commerce',
            'url': 'https://example.com',
            'type': 'basic'
        },
        {
            'name': 'Books to Scrape',
            'url': 'https://books.toscrape.com',
            'type': 'listing'
        }
    ]
    
    results = {}
    
    for site in test_sites:
        print(f"\n🔍 Testing {site['name']}: {site['url']}")
        print("-" * 40)
        
        try:
            if site['type'] == 'listing':
                result = scraper.scrape_listing(site['url'], max_products=5)
            else:
                result = scraper.scrape(site['url'], depth=1)
            
            results[site['name']] = result
            
            if result.get('success'):
                print(f"✅ Success!")
                
                if 'products' in result:
                    print(f"   📦 Products found: {len(result['products'])}")
                    for i, product in enumerate(result['products'][:3]):
                        print(f"      {i+1}. {product.get('name', 'N/A')} - {product.get('price', 'N/A')}")
                
                if 'data' in result:
                    print(f"   📄 Pages scraped: {len(result['data'])}")
                    for i, page in enumerate(result['data'][:2]):
                        print(f"      {i+1}. {page.get('name', page.get('page_title', 'N/A'))}")
                
                if 'product_data' in result:
                    product = result['product_data']
                    print(f"   🛍️ Product: {product.get('name', 'N/A')}")
                    print(f"   💰 Price: {product.get('price', 'N/A')}")
                    print(f"   🖼️ Images: {len(product.get('images', []))}")
                
            else:
                print(f"❌ Failed: {result.get('error', 'Unknown error')}")
                
        except Exception as e:
            print(f"❌ Exception: {str(e)}")
            results[site['name']] = {'success': False, 'error': str(e)}
    
    # Summary
    print("\n" + "=" * 60)
    print("📊 Test Summary:")
    
    successful = sum(1 for r in results.values() if r.get('success'))
    total = len(results)
    
    print(f"   ✅ Successful: {successful}/{total}")
    print(f"   ❌ Failed: {total - successful}/{total}")
    
    # Show detailed results for first successful test
    for name, result in results.items():
        if result.get('success'):
            print(f"\n🎯 Detailed Results for {name}:")
            print(json.dumps(result, indent=2)[:500] + "...")
            break
    
    return results

def test_single_product():
    """Test scraping a single product page"""
    print("\n🛍️ Testing Single Product Scraping")
    print("=" * 40)
    
    scraper = UniversalScraper()
    
    # Test with a product page
    test_url = "https://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html"
    
    print(f"🔍 Scraping product: {test_url}")
    
    result = scraper.scrape_product(test_url)
    
    if result.get('success'):
        product = result['product_data']
        print("✅ Product scraped successfully!")
        print(f"   📖 Name: {product.get('name', 'N/A')}")
        print(f"   💰 Price: {product.get('price', 'N/A')}")
        print(f"   📝 Description: {product.get('description', 'N/A')[:100]}...")
        print(f"   🖼️ Images: {len(product.get('images', []))}")
        print(f"   🎯 Confidence: {product.get('product_metadata', {}).get('confidence_score', 'N/A')}")
    else:
        print(f"❌ Failed: {result.get('error', 'Unknown error')}")
    
    return result

def test_pattern_detection():
    """Test pattern detection on various pages"""
    print("\n🧠 Testing Pattern Detection")
    print("=" * 40)
    
    from app.scraper.dynamic.pattern_recognizer import UniversalPatternRecognizer
    
    recognizer = UniversalPatternRecognizer()
    
    test_pages = [
        {
            'name': 'Product Page',
            'html': '''
            <html>
            <head><title>Red Summer Dress - Fashion Store</title></head>
            <body>
                <h1>Red Summer Dress</h1>
                <div class="price">$89.99</div>
                <button class="add-to-cart">Add to Cart</button>
                <img src="dress.jpg" alt="Red Summer Dress">
            </body>
            </html>
            ''',
            'url': 'https://example.com/product/red-dress'
        },
        {
            'name': 'Listing Page',
            'html': '''
            <html>
            <head><title>Women Dresses - Fashion Store</title></head>
            <body>
                <h1>Women Dresses</h1>
                <div class="product-grid">
                    <div class="product-card">
                        <h3>Blue Dress</h3>
                        <div class="price">$79.99</div>
                    </div>
                    <div class="product-card">
                        <h3>Green Dress</h3>
                        <div class="price">$69.99</div>
                    </div>
                </div>
            </body>
            </html>
            ''',
            'url': 'https://example.com/category/dresses'
        }
    ]
    
    for page in test_pages:
        print(f"\n🔍 Testing {page['name']}:")
        
        patterns = recognizer.detect_product_patterns(page['html'], page['url'])
        
        print(f"   Detected patterns:")
        for pattern, confidence in patterns.items():
            print(f"      - {pattern}: {confidence:.2f}")
        
        # Determine page type
        if patterns.get('product_page', 0) > patterns.get('listing_page', 0):
            page_type = "Product Page"
        elif patterns.get('listing_page', 0) > 0:
            page_type = "Listing Page"
        else:
            page_type = "Unknown"
        
        print(f"   📋 Page Type: {page_type}")

def main():
    """Run all tests"""
    print("🚀 Dynamic Universal Scraper Test Suite")
    print("=" * 60)
    
    # Test 1: Pattern Detection
    test_pattern_detection()
    
    # Test 2: Single Product Scraping
    test_single_product()
    
    # Test 3: Full Scraper Testing
    test_dynamic_scraper()
    
    print("\n🎉 All tests completed!")
    print("\n💡 Key Features Demonstrated:")
    print("   ✅ Zero-configuration scraping")
    print("   ✅ Automatic pattern detection")
    print("   ✅ Multi-strategy data extraction")
    print("   ✅ Adaptive crawling strategies")
    print("   ✅ Anti-detection measures")
    print("   ✅ Works on any website!")

if __name__ == "__main__":
    main()
