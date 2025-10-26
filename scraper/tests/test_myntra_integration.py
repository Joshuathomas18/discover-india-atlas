"""
Test script for Myntra scraper integration
Tests the new API endpoints and service layer
"""

import requests
import json
import time

# Configuration
BASE_URL = "http://localhost:8000/api/v1"
MYNTRA_ENDPOINTS = {
    'search': f"{BASE_URL}/myntra/search/",
    'analyze': f"{BASE_URL}/myntra/analyze/",
    'trending': f"{BASE_URL}/myntra/trending/",
    'batch_analyze': f"{BASE_URL}/myntra/batch-analyze/"
}

def test_myntra_search():
    """Test live Myntra product search"""
    print("🔍 Testing Myntra Search...")
    
    payload = {
        "query": "dresses",
        "max_products": 5
    }
    
    try:
        response = requests.post(MYNTRA_ENDPOINTS['search'], json=payload, timeout=60)
        
        if response.status_code == 200:
            data = response.json()
            print(f"✅ Search successful!")
            print(f"   Found: {data.get('total_found', 0)} products")
            print(f"   Query: {data.get('search_query', 'N/A')}")
            print(f"   Scraped: {data.get('scraped_at', 'N/A')}")
            
            if data.get('products'):
                print(f"\n📦 Sample Product:")
                product = data['products'][0]
                print(f"   Name: {product.get('name', 'N/A')}")
                print(f"   Brand: {product.get('brand', 'N/A')}")
                print(f"   Price: {product.get('price', 'N/A')}")
                print(f"   URL: {product.get('url', 'N/A')}")
                print(f"   Images: {len(product.get('images', []))}")
                print(f"   Sizes: {product.get('sizes', [])}")
                print(f"   Colors: {product.get('colors', [])}")
            
            return True
        else:
            print(f"❌ Search failed: {response.status_code}")
            print(f"   Error: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ Search error: {e}")
        return False

def test_myntra_trending():
    """Test trending products endpoint"""
    print("\n📈 Testing Myntra Trending...")
    
    try:
        response = requests.get(MYNTRA_ENDPOINTS['trending'], params={'max_products': 3}, timeout=30)
        
        if response.status_code == 200:
            data = response.json()
            print(f"✅ Trending successful!")
            print(f"   Found: {data.get('total_found', 0)} products")
            print(f"   Category: {data.get('category', 'All')}")
            
            if data.get('products'):
                print(f"\n📦 Sample Trending Product:")
                product = data['products'][0]
                print(f"   Name: {product.get('name', 'N/A')}")
                print(f"   Brand: {product.get('brand', 'N/A')}")
                print(f"   Price: {product.get('price', 'N/A')}")
            
            return True
        else:
            print(f"❌ Trending failed: {response.status_code}")
            print(f"   Error: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ Trending error: {e}")
        return False

def test_myntra_analyze():
    """Test single product analysis"""
    print("\n🔬 Testing Myntra Product Analysis...")
    
    # Use a known Myntra product URL
    test_url = "https://www.myntra.com/dresses/baesd/baesd-girls-floral-printed-maxi-dress/29524964/buy"
    
    payload = {
        "product_url": test_url,
        "use_advanced_extraction": True
    }
    
    try:
        response = requests.post(MYNTRA_ENDPOINTS['analyze'], json=payload, timeout=120)
        
        if response.status_code == 200:
            data = response.json()
            print(f"✅ Analysis successful!")
            
            if data.get('product'):
                product = data['product']
                print(f"\n📦 Analyzed Product:")
                print(f"   Brand: {product.get('brand', 'N/A')}")
                print(f"   Title: {product.get('title', 'N/A')}")
                print(f"   Price: {product.get('price', 'N/A')}")
                print(f"   Original Price: {product.get('original_price', 'N/A')}")
                print(f"   Sizes: {product.get('sizes', [])}")
                print(f"   Colors: {product.get('colors', [])}")
                print(f"   Images: {len(product.get('images', []))}")
                print(f"   Rating: {product.get('rating', 'N/A')}")
                print(f"   Description: {product.get('description', 'N/A')[:100]}...")
            
            return True
        else:
            print(f"❌ Analysis failed: {response.status_code}")
            print(f"   Error: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ Analysis error: {e}")
        return False

def main():
    """Run all integration tests"""
    print("🚀 Myntra Scraper Integration Tests")
    print("=" * 50)
    
    # Check if server is running
    try:
        response = requests.get(f"{BASE_URL}/index/status/", timeout=5)
        if response.status_code != 200:
            print("❌ Server not running or not accessible")
            return
    except:
        print("❌ Server not running or not accessible")
        return
    
    print("✅ Server is running\n")
    
    # Run tests
    tests = [
        test_myntra_search,
        test_myntra_trending,
        test_myntra_analyze
    ]
    
    results = []
    for test in tests:
        try:
            result = test()
            results.append(result)
            time.sleep(2)  # Be nice to the server
        except KeyboardInterrupt:
            print("\n⏹️ Tests interrupted by user")
            break
        except Exception as e:
            print(f"❌ Test error: {e}")
            results.append(False)
    
    # Summary
    print("\n" + "=" * 50)
    print("📊 Test Summary:")
    passed = sum(results)
    total = len(results)
    print(f"   Passed: {passed}/{total}")
    print(f"   Success Rate: {(passed/total)*100:.1f}%")
    
    if passed == total:
        print("🎉 All tests passed! Integration is working correctly.")
    else:
        print("⚠️ Some tests failed. Check the errors above.")

if __name__ == "__main__":
    main()

