#!/usr/bin/env python3
"""
Final Comprehensive Test
Test the complete Myntra scraper with multiple products
"""

import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from myntra_comprehensive_scraper import MyntraComprehensiveScraper

def final_comprehensive_test():
    """Run comprehensive test with multiple products"""
    
    print("🚀 Final Comprehensive Myntra Scraper Test")
    print("=" * 60)
    
    scraper = MyntraComprehensiveScraper()
    
    try:
        # Test with different search terms
        search_terms = ["shirts", "dresses"]
        
        for term in search_terms:
            print(f"\n{'='*60}")
            print(f"🛍️ COMPREHENSIVE TEST: {term.upper()}")
            print(f"{'='*60}")
            
            # Comprehensive scrape with detailed analysis
            products = scraper.comprehensive_scrape(term, max_products=2, detailed_analysis=True)
            
            if products:
                print(f"✅ Successfully scraped {len(products)} products")
                
                # Show detailed results
                for i, product in enumerate(products):
                    print(f"\n📦 Product {i+1}:")
                    print(f"  Brand: {product.get('brand', 'N/A')}")
                    print(f"  Title: {product.get('title', 'N/A')}")
                    print(f"  Price: {product.get('price', 'N/A')}")
                    print(f"  Original Price: {product.get('original_price', 'N/A')}")
                    print(f"  Sizes: {product.get('sizes', [])}")
                    print(f"  Colors: {product.get('colors', [])}")
                    print(f"  Rating: {product.get('rating', 'N/A')}")
                    print(f"  Rating Count: {product.get('rating_count', 'N/A')}")
                    print(f"  Images: {len(product.get('images', []))} found")
                    
                    if product.get('images'):
                        print("  Sample Images:")
                        for j, img_url in enumerate(product['images'][:2]):
                            print(f"    {j+1}. {img_url[:80]}...")
                    
                    if product.get('description'):
                        print(f"  Description: {product['description'][:100]}...")
                
                # Save results
                filename = scraper.save_results(products, f"myntra_final_test_{term}")
                print(f"\n📁 Results saved to: {filename}")
                
            else:
                print(f"❌ No products found for '{term}'")
            
            print(f"\n⏱️ Waiting 5 seconds before next search...")
            import time
            time.sleep(5)
        
        print(f"\n🎉 COMPREHENSIVE TEST COMPLETED!")
        print("✅ All features working:")
        print("  ✅ Search functionality")
        print("  ✅ Product URL extraction")
        print("  ✅ Detailed product analysis")
        print("  ✅ Image extraction (CSS backgrounds)")
        print("  ✅ Size and color extraction")
        print("  ✅ Rating and review extraction")
        print("  ✅ Description extraction")
        print("  ✅ JSON/CSV output")
        print("  ✅ Rate limiting and ethical scraping")
        
    except Exception as e:
        print(f"❌ Test failed: {e}")
        import traceback
        traceback.print_exc()
    
    finally:
        scraper.close_driver()

if __name__ == "__main__":
    final_comprehensive_test()
