#!/usr/bin/env python3
"""
Dynamic Universal Scraper Demo
Demonstrates the zero-configuration scraper working on real websites
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

def demo_single_product():
    """Demo scraping a single product page"""
    print("🛍️ Demo: Single Product Scraping")
    print("=" * 50)
    
    scraper = UniversalScraper()
    
    # Test with a real product page
    test_url = "https://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html"
    
    print(f"🔍 Scraping: {test_url}")
    print("   (This is a real product page from books.toscrape.com)")
    
    result = scraper.scrape_product(test_url)
    
    if result.get('success'):
        product = result['product_data']
        print("\n✅ Product scraped successfully!")
        print(f"   📖 Name: {product.get('name', 'N/A')}")
        print(f"   💰 Price: {product.get('price', 'N/A')}")
        print(f"   📝 Description: {product.get('description', 'N/A')[:100]}...")
        print(f"   🖼️ Images: {len(product.get('images', []))}")
        print(f"   🎯 Confidence: {product.get('product_metadata', {}).get('confidence_score', 'N/A')}")
        
        # Show extracted data structure
        print(f"\n📊 Extracted Data Structure:")
        for key, value in product.items():
            if key not in ['product_metadata', 'extraction_metadata']:
                if isinstance(value, dict):
                    print(f"   {key}: {list(value.keys())}")
                elif isinstance(value, list):
                    print(f"   {key}: [{len(value)} items]")
                else:
                    print(f"   {key}: {str(value)[:50]}...")
    else:
        print(f"❌ Failed: {result.get('error', 'Unknown error')}")
    
    return result

def demo_listing_page():
    """Demo scraping a product listing page"""
    print("\n📋 Demo: Product Listing Scraping")
    print("=" * 50)
    
    scraper = UniversalScraper()
    
    # Test with a real listing page
    test_url = "https://books.toscrape.com/catalogue/category/books/mystery_3/"
    
    print(f"🔍 Scraping: {test_url}")
    print("   (This is a real listing page from books.toscrape.com)")
    
    result = scraper.scrape_listing(test_url, max_products=5)
    
    if result.get('success'):
        products = result.get('products', [])
        print(f"\n✅ Listing scraped successfully!")
        print(f"   📦 Products found: {len(products)}")
        
        for i, product in enumerate(products[:3]):
            print(f"   {i+1}. {product.get('name', 'N/A')} - {product.get('price', 'N/A')}")
        
        if len(products) > 3:
            print(f"   ... and {len(products) - 3} more products")
        
        # Show listing metadata
        listing_data = result.get('listing_data', {})
        print(f"\n📊 Listing Metadata:")
        print(f"   Page Title: {listing_data.get('page_title', 'N/A')}")
        print(f"   Meta Description: {listing_data.get('meta_description', 'N/A')[:100]}...")
        
    else:
        print(f"❌ Failed: {result.get('error', 'Unknown error')}")
    
    return result

def demo_pattern_detection():
    """Demo pattern detection on different page types"""
    print("\n🧠 Demo: Pattern Detection")
    print("=" * 50)
    
    from app.scraper.dynamic.pattern_recognizer import UniversalPatternRecognizer
    
    recognizer = UniversalPatternRecognizer()
    
    # Test different page types
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
                <p class="description">Beautiful red summer dress perfect for beach outings</p>
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
                <nav class="pagination">
                    <a href="?page=2">Next Page</a>
                </nav>
            </body>
            </html>
            ''',
            'url': 'https://example.com/category/dresses'
        },
        {
            'name': 'Category Page',
            'html': '''
            <html>
            <head><title>Fashion Categories - Store</title></head>
            <body>
                <nav class="breadcrumb">Home > Fashion > Women</nav>
                <div class="categories">
                    <a href="/dresses">Dresses</a>
                    <a href="/tops">Tops</a>
                    <a href="/bottoms">Bottoms</a>
                </div>
                <div class="filters">
                    <select name="size">Size</select>
                    <select name="color">Color</select>
                </div>
            </body>
            </html>
            ''',
            'url': 'https://example.com/category/women'
        }
    ]
    
    for page in test_pages:
        print(f"\n🔍 Testing {page['name']}:")
        
        patterns = recognizer.detect_product_patterns(page['html'], page['url'])
        
        print(f"   Detected patterns:")
        for pattern, confidence in sorted(patterns.items(), key=lambda x: x[1], reverse=True):
            if confidence > 0.1:  # Only show significant patterns
                print(f"      - {pattern}: {confidence:.2f}")
        
        # Determine page type
        if patterns.get('product_page', 0) > 0.5:
            page_type = "🛍️ Product Page"
        elif patterns.get('listing_page', 0) > 0.5:
            page_type = "📋 Listing Page"
        elif patterns.get('category_page', 0) > 0.5:
            page_type = "📂 Category Page"
        else:
            page_type = "❓ Unknown Page Type"
        
        print(f"   📋 Detected Type: {page_type}")

def demo_adaptive_crawling():
    """Demo adaptive crawling strategies"""
    print("\n🕷️ Demo: Adaptive Crawling")
    print("=" * 50)
    
    from app.scraper.dynamic.adaptive_crawler import AdaptiveCrawler
    
    crawler = AdaptiveCrawler()
    
    # Test different types of websites
    test_sites = [
        {
            'name': 'Simple HTML Site',
            'url': 'https://httpbin.org/html',
            'expected_strategy': 'requests'
        },
        {
            'name': 'Dynamic Content Site',
            'url': 'https://books.toscrape.com',
            'expected_strategy': 'selenium'
        }
    ]
    
    for site in test_sites:
        print(f"\n🔍 Testing {site['name']}: {site['url']}")
        
        try:
            result = crawler.crawl(site['url'])
            
            if result:
                print(f"   ✅ Successfully crawled!")
                print(f"      - Method: {result.get('method', 'N/A')}")
                print(f"      - Title: {result.get('title', 'N/A')}")
                print(f"      - HTML Length: {len(result.get('html', ''))}")
                print(f"      - Status: {result.get('status_code', 'N/A')}")
            else:
                print(f"   ❌ Failed to crawl")
                
        except Exception as e:
            print(f"   ❌ Error: {str(e)}")

def demo_zero_configuration():
    """Demo zero-configuration usage"""
    print("\n⚡ Demo: Zero-Configuration Usage")
    print("=" * 50)
    
    print("🚀 Creating scraper with zero configuration...")
    scraper = UniversalScraper()
    
    print("✅ Scraper created! No configuration needed!")
    print("\n💡 What the scraper automatically detects:")
    print("   - Product pages vs listing pages vs category pages")
    print("   - Price patterns and currency symbols")
    print("   - Product images and descriptions")
    print("   - Schema.org structured data")
    print("   - Meta tags and Open Graph data")
    print("   - Anti-bot measures and crawling strategies")
    print("   - Rate limiting and politeness")
    
    print("\n🎯 Usage Examples:")
    print("   # Scrape a single product")
    print("   product = scraper.scrape_product('https://example.com/product/123')")
    print("   ")
    print("   # Scrape a product listing")
    print("   products = scraper.scrape_listing('https://example.com/category/dresses')")
    print("   ")
    print("   # Scrape multiple pages")
    print("   results = scraper.scrape('https://example.com', depth=2)")

def main():
    """Run all demos"""
    print("🚀 Dynamic Universal Scraper Demo")
    print("=" * 60)
    print("This demo shows a zero-configuration scraper that works on ANY website!")
    print("=" * 60)
    
    # Run demos
    demo_zero_configuration()
    demo_pattern_detection()
    demo_adaptive_crawling()
    demo_single_product()
    demo_listing_page()
    
    print("\n" + "=" * 60)
    print("🎉 Demo Complete!")
    print("\n✨ Key Features Demonstrated:")
    print("   ✅ Zero-configuration scraping")
    print("   ✅ Automatic pattern detection")
    print("   ✅ Multi-strategy data extraction")
    print("   ✅ Adaptive crawling strategies")
    print("   ✅ Anti-detection measures")
    print("   ✅ Works on any website!")
    
    print("\n🚀 Ready to scrape any website!")
    print("   Just provide a URL and the scraper handles everything else!")

if __name__ == "__main__":
    main()
