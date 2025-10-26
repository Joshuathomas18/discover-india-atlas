#!/usr/bin/env python3
"""
Test Colour Container Extraction
Test the new ul.colour-listItemContainer extraction
"""

import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from myntra_comprehensive_scraper import MyntraComprehensiveScraper

def test_colour_container():
    """Test the colour container extraction"""
    
    print("🎨 Testing Colour Container Extraction")
    print("=" * 60)
    
    scraper = MyntraComprehensiveScraper()
    
    try:
        # Test with products that might have color variants
        test_urls = [
            "https://www.myntra.com/dresses/baesd/baesd-girls-floral-flutter-sleeve-net-fit--flare-dress/29524964/buy",
            "https://www.myntra.com/shirts/the+bear+house/the-bear-house-men-black-solid-slim-fit-casual-shirt/20506672/buy",
            "https://www.myntra.com/tshirts/roadster/roadster-men-navy-blue-solid-round-neck-t-shirt/1700582/buy"
        ]
        
        # Setup driver
        scraper.setup_driver()
        
        for i, url in enumerate(test_urls):
            print(f"\n{'='*60}")
            print(f"🛍️ TEST {i+1}: Colour Container Extraction")
            print(f"{'='*60}")
            
            print(f"🔍 URL: {url}")
            
            # Scrape with advanced color extraction
            product_data = scraper.scrape_product_details(url, use_advanced_color_extraction=True)
            
            print(f"\n📦 Results:")
            print(f"  Brand: {product_data.get('brand', 'N/A')}")
            print(f"  Title: {product_data.get('title', 'N/A')}")
            print(f"  Colors Found: {len(product_data.get('colors', []))}")
            print(f"  Variants Found: {len(product_data.get('variants', []))}")
            print(f"  Total Images: {len(product_data.get('images', []))}")
            
            # Show colors
            if product_data.get('colors'):
                print(f"  Colors: {product_data['colors']}")
            else:
                print(f"  Colors: None found")
            
            # Show variant details
            if product_data.get('variants'):
                print(f"\n🎨 Variant Details:")
                for j, variant in enumerate(product_data['variants']):
                    print(f"    {j+1}. Color: {variant.get('color', 'N/A')}")
                    print(f"       URL: {variant.get('url', 'N/A')[:60]}...")
                    print(f"       Thumbnail: {variant.get('thumbnail', 'N/A')[:60]}...")
            else:
                print(f"\n🎨 Variants: None found")
            
            # Show sample images
            if product_data.get('images'):
                print(f"\n📸 Sample Images ({len(product_data['images'])} total):")
                for j, img_url in enumerate(product_data['images'][:2]):
                    print(f"    {j+1}. {img_url[:60]}...")
            
            print(f"\n⏱️ Waiting 3 seconds before next product...")
            import time
            time.sleep(3)
        
        print(f"\n🎉 Colour container testing completed!")
        
    except Exception as e:
        print(f"❌ Test failed: {e}")
        import traceback
        traceback.print_exc()
    
    finally:
        scraper.close_driver()

if __name__ == "__main__":
    test_colour_container()
