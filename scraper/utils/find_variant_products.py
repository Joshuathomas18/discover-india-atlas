#!/usr/bin/env python3
"""
Find Products with Variants
Search for products that actually have color variants
"""

import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from myntra_comprehensive_scraper import MyntraComprehensiveScraper

def find_variant_products():
    """Find products that have color variants"""
    
    print("🔍 Finding Products with Color Variants")
    print("=" * 60)
    
    scraper = MyntraComprehensiveScraper()
    
    try:
        # Setup driver
        scraper.setup_driver()
        
        # Search for products that commonly have variants
        search_terms = ["tshirts", "shirts", "dresses"]
        
        for term in search_terms:
            print(f"\n{'='*60}")
            print(f"🔍 Searching for '{term}' with variants...")
            print(f"{'='*60}")
            
            # Get initial product list
            products = scraper.comprehensive_scrape(term, max_products=10, detailed_analysis=False)
            
            if not products:
                print(f"❌ No products found for '{term}'")
                continue
            
            print(f"✅ Found {len(products)} products, checking for variants...")
            
            # Check first few products for variants
            variant_products = []
            for i, product in enumerate(products[:5]):  # Check first 5
                print(f"  📦 Checking product {i+1}: {product.get('name', 'N/A')[:50]}...")
                
                try:
                    # Quick check for variants without full scraping
                    scraper.driver.get(product['url'])
                    import time
                    time.sleep(2)
                    
                    # Check for .product-variants
                    variant_elements = scraper.driver.find_elements(By.CSS_SELECTOR, ".product-variants a")
                    
                    if variant_elements:
                        print(f"    ✅ Found {len(variant_elements)} variants!")
                        variant_products.append({
                            'product': product,
                            'variant_count': len(variant_elements)
                        })
                        
                        # Show variant details
                        for j, variant_link in enumerate(variant_elements[:3]):  # Show first 3
                            try:
                                href = variant_link.get_attribute("href")
                                img = variant_link.find_element(By.TAG_NAME, "img")
                                alt = img.get_attribute("alt")
                                print(f"      {j+1}. {alt} -> {href[:50]}...")
                            except Exception as e:
                                print(f"      {j+1}. Error: {e}")
                    else:
                        print(f"    ❌ No variants found")
                        
                except Exception as e:
                    print(f"    ❌ Error checking product: {e}")
                
                # Small delay
                time.sleep(1)
            
            if variant_products:
                print(f"\n🎉 Found {len(variant_products)} products with variants!")
                print("These products have color variants:")
                for i, vp in enumerate(variant_products):
                    print(f"  {i+1}. {vp['product']['name'][:50]}... ({vp['variant_count']} variants)")
            else:
                print(f"\n❌ No products with variants found for '{term}'")
            
            print(f"\n⏱️ Waiting 3 seconds before next search...")
            import time
            time.sleep(3)
        
    except Exception as e:
        print(f"❌ Search failed: {e}")
        import traceback
        traceback.print_exc()
    
    finally:
        scraper.close_driver()

if __name__ == "__main__":
    find_variant_products()
