#!/usr/bin/env python3
"""
Test Advanced Color Extraction
Test the new advanced color/variant extraction functionality
"""

import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from myntra_comprehensive_scraper import MyntraComprehensiveScraper

def test_advanced_color_extraction():
    """Test the advanced color extraction functionality"""
    
    print("🎨 Testing Advanced Color Extraction")
    print("=" * 60)
    
    scraper = MyntraComprehensiveScraper()
    
    try:
        # Test with a product that likely has color variants
        test_url = "https://www.myntra.com/tshirts/roadster/roadster-men-navy-blue-solid-round-neck-t-shirt/1700582/buy"
        
        print(f"🔍 Testing advanced color extraction on: {test_url}")
        
        # Setup driver
        scraper.setup_driver()
        
        # Scrape the product with advanced color extraction
        product_data = scraper.scrape_product_details(test_url, use_advanced_color_extraction=True)
        
        print("\n📦 Advanced Extraction Results:")
        print(f"  Brand: {product_data.get('brand', 'N/A')}")
        print(f"  Title: {product_data.get('title', 'N/A')}")
        print(f"  Price: {product_data.get('price', 'N/A')}")
        print(f"  Original Price: {product_data.get('original_price', 'N/A')}")
        print(f"  Sizes: {product_data.get('sizes', [])}")
        print(f"  Colors: {product_data.get('colors', [])}")
        print(f"  Rating: {product_data.get('rating', 'N/A')}")
        print(f"  Rating Count: {product_data.get('rating_count', 'N/A')}")
        print(f"  Total Images: {len(product_data.get('images', []))}")
        print(f"  Default Images: {len(product_data.get('all_images', []))}")
        print(f"  Variants Found: {len(product_data.get('variants', []))}")
        
        # Show variant details
        if product_data.get('variants'):
            print("\n🎨 Color Variants:")
            for i, variant in enumerate(product_data['variants']):
                print(f"  {i+1}. Color: {variant.get('color', 'N/A')}")
                print(f"     SKU: {variant.get('sku', 'N/A')}")
                print(f"     Images: {len(variant.get('images', []))}")
                if variant.get('images'):
                    print(f"     Sample Image: {variant['images'][0][:80]}...")
        
        # Show sample images
        if product_data.get('images'):
            print("\n📸 Sample Images:")
            for i, img_url in enumerate(product_data['images'][:3]):
                print(f"  {i+1}. {img_url[:80]}...")
        
        if product_data.get('description'):
            print(f"\n📝 Description: {product_data['description'][:150]}...")
        
        # Compare with basic extraction
        print(f"\n🔄 Testing basic extraction for comparison...")
        basic_data = scraper.scrape_product_details(test_url, use_advanced_color_extraction=False)
        
        print(f"\n📊 Comparison Results:")
        print(f"  Advanced Colors: {len(product_data.get('colors', []))}")
        print(f"  Basic Colors: {len(basic_data.get('colors', []))}")
        print(f"  Advanced Images: {len(product_data.get('images', []))}")
        print(f"  Basic Images: {len(basic_data.get('images', []))}")
        print(f"  Advanced Variants: {len(product_data.get('variants', []))}")
        print(f"  Basic Variants: {len(basic_data.get('variants', []))}")
        
        print("\n🎉 Advanced color extraction test completed!")
        
    except Exception as e:
        print(f"❌ Test failed: {e}")
        import traceback
        traceback.print_exc()
    
    finally:
        scraper.close_driver()

if __name__ == "__main__":
    test_advanced_color_extraction()
