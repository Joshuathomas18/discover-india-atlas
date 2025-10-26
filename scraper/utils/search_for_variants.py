#!/usr/bin/env python3
"""
Search for Products with Color Variants
Find products that actually have ul.colour-listItemContainer
"""

import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from myntra_comprehensive_scraper import MyntraComprehensiveScraper
from selenium.webdriver.common.by import By
import time

def search_for_variants():
    """Search for products with actual color variants"""
    
    print("🔍 Searching for Products with Color Variants")
    print("=" * 60)
    
    scraper = MyntraComprehensiveScraper()
    
    try:
        # Setup driver
        scraper.setup_driver()
        
        # Search for products that commonly have variants
        search_terms = ["tshirts", "shirts", "dresses", "tops"]
        
        for term in search_terms:
            print(f"\n{'='*60}")
            print(f"🔍 Searching '{term}' for color variants...")
            print(f"{'='*60}")
            
            # Get initial product list
            products = scraper.comprehensive_scrape(term, max_products=20, detailed_analysis=False)
            
            if not products:
                print(f"❌ No products found for '{term}'")
                continue
            
            print(f"✅ Found {len(products)} products, checking for variants...")
            
            # Check products for variants
            variant_products = []
            for i, product in enumerate(products[:10]):  # Check first 10
                print(f"  📦 Checking {i+1}/10: {product.get('name', 'N/A')[:40]}...")
                
                try:
                    # Quick check for variants
                    scraper.driver.get(product['url'])
                    time.sleep(2)
                    
                    # Check for colour-listItemContainer
                    variant_elements = scraper.driver.find_elements(By.CSS_SELECTOR, "ul.colour-listItemContainer a")
                    
                    if variant_elements:
                        print(f"    ✅ Found {len(variant_elements)} color variants!")
                        variant_products.append({
                            'product': product,
                            'variant_count': len(variant_elements),
                            'variants': []
                        })
                        
                        # Extract variant details
                        for variant_link in variant_elements:
                            try:
                                href = variant_link.get_attribute("href")
                                img = variant_link.find_element(By.TAG_NAME, "img")
                                alt = img.get_attribute("alt")
                                src = img.get_attribute("src")
                                
                                variant_products[-1]['variants'].append({
                                    'color': alt,
                                    'url': href,
                                    'thumbnail': src
                                })
                                
                                print(f"      🎨 {alt}")
                            except Exception as e:
                                print(f"      ❌ Error extracting variant: {e}")
                    else:
                        print(f"    ❌ No variants")
                        
                except Exception as e:
                    print(f"    ❌ Error checking product: {e}")
                
                # Small delay
                time.sleep(1)
                
                # Stop if we found some variants
                if len(variant_products) >= 3:
                    print(f"    🎉 Found enough variants, stopping search...")
                    break
            
            if variant_products:
                print(f"\n🎉 Found {len(variant_products)} products with color variants!")
                print("Products with variants:")
                for i, vp in enumerate(variant_products):
                    print(f"  {i+1}. {vp['product']['name'][:50]}...")
                    print(f"     Colors: {[v['color'] for v in vp['variants']]}")
                    print(f"     URL: {vp['product']['url']}")
                
                # Test our extraction on the first variant product
                if variant_products:
                    print(f"\n🧪 Testing our extraction on first variant product...")
                    test_product = variant_products[0]['product']
                    print(f"Testing: {test_product['name'][:50]}...")
                    
                    product_data = scraper.scrape_product_details(test_product['url'], use_advanced_color_extraction=True)
                    
                    print(f"Results:")
                    print(f"  Colors: {product_data.get('colors', [])}")
                    print(f"  Variants: {len(product_data.get('variants', []))}")
                    
                    if product_data.get('variants'):
                        print(f"  Variant Details:")
                        for j, variant in enumerate(product_data['variants'][:3]):
                            print(f"    {j+1}. {variant.get('color', 'N/A')} -> {variant.get('url', 'N/A')[:50]}...")
                
                break  # Stop searching other terms if we found variants
            else:
                print(f"\n❌ No products with variants found for '{term}'")
            
            print(f"\n⏱️ Waiting 3 seconds before next search...")
            time.sleep(3)
        
    except Exception as e:
        print(f"❌ Search failed: {e}")
        import traceback
        traceback.print_exc()
    
    finally:
        scraper.close_driver()

if __name__ == "__main__":
    search_for_variants()
