"""
Test Tourism Scraper
Quick test to verify the tourism scraper works with your existing system
"""

import sys
import os
from pathlib import Path

# Add the scraper directory to Python path
scraper_dir = Path(__file__).parent.parent / 'scraper'
sys.path.append(str(scraper_dir))

def test_tourism_scraper():
    """Test the tourism scraper with a single state"""
    print("🧪 Testing Tourism Scraper")
    print("=" * 40)
    
    try:
        # Import the tourism scraper
        from tourism.tourism_scraper import TourismDataScraper
        
        print("✅ Successfully imported TourismDataScraper")
        
        # Test with Karnataka (known working website)
        scraper = TourismDataScraper()
        print("✅ Successfully created scraper instance")
        
        # Test scraping Karnataka
        karnataka_url = "https://www.karnatakatourism.org/"
        print(f"🎯 Testing with Karnataka: {karnataka_url}")
        
        result = scraper.scrape_state_tourism('karnataka', karnataka_url)
        
        if result['success']:
            print("✅ Scraping successful!")
            print(f"   Pages scraped: {result['pages_scraped']}")
            print(f"   Duration: {result['duration']:.2f}s")
            
            # Show data summary
            data = result['data']
            print(f"   📊 Data extracted:")
            print(f"      - Places: {len(data.get('places', []))}")
            print(f"      - Activities: {len(data.get('activities', []))}")
            print(f"      - Accommodation: {len(data.get('accommodation', []))}")
            print(f"      - Food: {len(data.get('food', []))}")
            print(f"      - Culture: {len(data.get('culture', []))}")
            print(f"      - Festivals: {len(data.get('festivals', []))}")
            print(f"      - Wildlife: {len(data.get('wildlife', []))}")
            print(f"      - Adventure: {len(data.get('adventure', []))}")
            
            return True
        else:
            print(f"❌ Scraping failed: {result.get('error', 'Unknown error')}")
            return False
            
    except ImportError as e:
        print(f"❌ Import error: {e}")
        print("   Make sure the scraper directory structure is correct")
        return False
    except Exception as e:
        print(f"❌ Test failed: {e}")
        return False

def test_universal_scraper():
    """Test the universal scraper directly"""
    print("\n🧪 Testing Universal Scraper")
    print("=" * 40)
    
    try:
        from core.universal_scraper import UniversalScraper
        
        print("✅ Successfully imported UniversalScraper")
        
        # Create scraper instance
        scraper = UniversalScraper(max_pages=5)  # Limit for testing
        print("✅ Successfully created universal scraper")
        
        # Test with a simple website
        test_url = "https://www.karnatakatourism.org/"
        print(f"🎯 Testing with: {test_url}")
        
        result = scraper.scrape(test_url, depth=1)
        
        if result['success']:
            print("✅ Universal scraping successful!")
            print(f"   Pages scraped: {result['pages_scraped']}")
            print(f"   Duration: {result['duration_seconds']:.2f}s")
            return True
        else:
            print(f"❌ Universal scraping failed: {result.get('error', 'Unknown error')}")
            return False
            
    except Exception as e:
        print(f"❌ Universal scraper test failed: {e}")
        return False

def main():
    """Run all tests"""
    print("🕷️ Tourism Scraper Test Suite")
    print("Testing integration with your existing scraper system")
    print()
    
    # Test 1: Universal Scraper
    universal_success = test_universal_scraper()
    
    # Test 2: Tourism Scraper
    tourism_success = test_tourism_scraper()
    
    # Summary
    print("\n" + "=" * 50)
    print("📊 TEST SUMMARY")
    print("=" * 50)
    print(f"Universal Scraper: {'✅ PASS' if universal_success else '❌ FAIL'}")
    print(f"Tourism Scraper:  {'✅ PASS' if tourism_success else '❌ FAIL'}")
    
    if universal_success and tourism_success:
        print("\n🎉 All tests passed! Your scraper system is ready for tourism data.")
        print("\nNext steps:")
        print("1. Run: python scripts/scrapeTourismData.py")
        print("2. Choose option 2 (scrape working states)")
        print("3. Wait for data collection to complete")
    else:
        print("\n⚠️ Some tests failed. Please check the errors above.")

if __name__ == "__main__":
    main()

