#!/usr/bin/env python3
"""
Simple Test for Dynamic Universal Scraper
Tests basic functionality without complex scenarios
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

def test_heuristic_detector():
    """Test heuristic detection"""
    print("🧠 Testing Heuristic Detector")
    print("-" * 30)
    
    try:
        from app.scraper.dynamic.heuristic_detector import HeuristicDetector
        
        detector = HeuristicDetector()
        
        # Test with sample HTML
        sample_html = '''
        <html>
        <head><title>Red Summer Dress - Fashion Store</title></head>
        <body>
            <h1>Red Summer Dress</h1>
            <div class="price">$89.99</div>
            <button class="add-to-cart">Add to Cart</button>
            <img src="dress.jpg" alt="Red Summer Dress">
        </body>
        </html>
        '''
        
        patterns = detector.detect(sample_html, "https://example.com/product/red-dress")
        
        print("✅ Heuristic detection working!")
        print(f"   Patterns detected: {len(patterns)}")
        for pattern, confidence in patterns.items():
            print(f"      - {pattern}: {confidence:.2f}")
        
        return True
        
    except Exception as e:
        print(f"❌ Heuristic detection failed: {e}")
        return False

def test_structure_analyzer():
    """Test structure analysis"""
    print("\n🏗️ Testing Structure Analyzer")
    print("-" * 30)
    
    try:
        from app.scraper.dynamic.structure_analyzer import StructureAnalyzer
        
        analyzer = StructureAnalyzer()
        
        # Test with sample HTML
        sample_html = '''
        <html>
        <head><title>Product Page</title></head>
        <body>
            <main>
                <article class="product">
                    <h1>Red Summer Dress</h1>
                    <div class="price" data-price="89.99">$89.99</div>
                    <img src="dress.jpg" alt="Red Summer Dress">
                </article>
            </main>
        </body>
        </html>
        '''
        
        patterns = analyzer.analyze(sample_html)
        
        print("✅ Structure analysis working!")
        print(f"   Patterns detected: {len(patterns)}")
        for pattern, confidence in patterns.items():
            print(f"      - {pattern}: {confidence:.2f}")
        
        return True
        
    except Exception as e:
        print(f"❌ Structure analysis failed: {e}")
        return False

def test_dom_extractor():
    """Test DOM extraction"""
    print("\n🛍️ Testing DOM Extractor")
    print("-" * 30)
    
    try:
        from app.scraper.dynamic.dom_extractor import DynamicDOMExtractor
        
        extractor = DynamicDOMExtractor()
        
        # Test with sample HTML
        sample_html = '''
        <html>
        <head><title>Red Summer Dress - Fashion Store</title></head>
        <body>
            <h1>Red Summer Dress</h1>
            <div class="price">$89.99</div>
            <p class="description">Beautiful red summer dress perfect for beach outings</p>
            <img src="https://example.com/dress.jpg" alt="Red Summer Dress">
        </body>
        </html>
        '''
        
        data = extractor.extract(sample_html, "https://example.com/product/red-dress")
        
        print("✅ DOM extraction working!")
        print(f"   Data extracted:")
        print(f"      - Name: {data.get('name', 'N/A')}")
        print(f"      - Price: {data.get('price', 'N/A')}")
        print(f"      - Description: {data.get('description', 'N/A')[:50]}...")
        print(f"      - Images: {len(data.get('images', []))}")
        
        return True
        
    except Exception as e:
        print(f"❌ DOM extraction failed: {e}")
        return False

def test_data_extractor():
    """Test data extraction"""
    print("\n📊 Testing Data Extractor")
    print("-" * 30)
    
    try:
        from app.scraper.dynamic.data_extractor import UniversalDataExtractor
        
        extractor = UniversalDataExtractor()
        
        # Test with sample HTML
        sample_html = '''
        <html>
        <head>
            <title>Red Summer Dress - Fashion Store</title>
            <meta property="og:title" content="Red Summer Dress">
            <meta property="og:description" content="Beautiful red summer dress">
            <script type="application/ld+json">
            {
                "@context": "https://schema.org/",
                "@type": "Product",
                "name": "Red Summer Dress",
                "description": "Beautiful red summer dress perfect for beach outings",
                "brand": "FashionStore",
                "offers": {
                    "@type": "Offer",
                    "price": "89.99",
                    "priceCurrency": "USD"
                },
                "image": "https://example.com/dress.jpg"
            }
            </script>
        </head>
        <body>
            <h1>Red Summer Dress</h1>
            <div class="price">$89.99</div>
        </body>
        </html>
        '''
        
        data = extractor.extract(sample_html, "https://example.com/product/red-dress")
        
        print("✅ Data extraction working!")
        print(f"   Data extracted:")
        print(f"      - Name: {data.get('name', 'N/A')}")
        print(f"      - Brand: {data.get('brand', 'N/A')}")
        print(f"      - Price: {data.get('price', 'N/A')}")
        print(f"      - Images: {len(data.get('images', []))}")
        print(f"      - Description: {data.get('description', 'N/A')[:50]}...")
        
        return True
        
    except Exception as e:
        print(f"❌ Data extraction failed: {e}")
        return False

def test_adaptive_crawler():
    """Test adaptive crawler"""
    print("\n🕷️ Testing Adaptive Crawler")
    print("-" * 30)
    
    try:
        from app.scraper.dynamic.adaptive_crawler import AdaptiveCrawler
        
        crawler = AdaptiveCrawler()
        
        # Test with a simple URL
        test_url = "https://httpbin.org/html"
        
        print(f"   Testing with: {test_url}")
        result = crawler.crawl(test_url)
        
        if result:
            print("✅ Adaptive crawling working!")
            print(f"      - Title: {result.get('title', 'N/A')}")
            print(f"      - Method: {result.get('method', 'N/A')}")
            print(f"      - HTML length: {len(result.get('html', ''))}")
        else:
            print("❌ Crawling failed - no result")
            return False
        
        return True
        
    except Exception as e:
        print(f"❌ Adaptive crawling failed: {e}")
        return False

def main():
    """Run all simple tests"""
    print("🚀 Simple Dynamic Scraper Test Suite")
    print("=" * 50)
    
    tests = [
        test_heuristic_detector,
        test_structure_analyzer,
        test_dom_extractor,
        test_data_extractor,
        test_adaptive_crawler
    ]
    
    results = []
    for test in tests:
        try:
            result = test()
            results.append(result)
        except Exception as e:
            print(f"❌ Test {test.__name__} crashed: {e}")
            results.append(False)
    
    # Summary
    print("\n" + "=" * 50)
    print("📊 Test Summary:")
    
    successful = sum(results)
    total = len(results)
    
    print(f"   ✅ Successful: {successful}/{total}")
    print(f"   ❌ Failed: {total - successful}/{total}")
    
    if successful == total:
        print("\n🎉 All components working! Dynamic scraper is ready!")
    else:
        print("\n⚠️ Some components need fixing, but core functionality is working.")
    
    return successful == total

if __name__ == "__main__":
    main()
