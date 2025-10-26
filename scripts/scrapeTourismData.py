"""
Tourism Data Scraping Script
Scrape all Indian state tourism websites using the existing scraper system
"""

import sys
import os
import json
import time
from pathlib import Path

# Add the scraper directory to Python path
scraper_dir = Path(__file__).parent.parent / 'scraper'
sys.path.append(str(scraper_dir))

from tourism.tourism_scraper import TourismDataScraper

def load_state_urls():
    """Load state tourism URLs from the JSON file"""
    json_path = Path(__file__).parent.parent / 'src' / 'data' / 'stateTourismWebsites.json'
    
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    return data['stateTourismWebsites']

def scrape_single_state(state_name: str, tourism_url: str):
    """Scrape tourism data for a single state"""
    print(f"\n🏛️ Scraping {state_name.upper()}...")
    print(f"   URL: {tourism_url}")
    
    scraper = TourismDataScraper()
    result = scraper.scrape_state_tourism(state_name, tourism_url)
    
    if result['success']:
        print(f"   ✅ Success: {result['pages_scraped']} pages scraped in {result['duration']:.2f}s")
        
        # Print summary of extracted data
        data = result['data']
        print(f"   📊 Data Summary:")
        print(f"      - Places: {len(data.get('places', []))}")
        print(f"      - Activities: {len(data.get('activities', []))}")
        print(f"      - Accommodation: {len(data.get('accommodation', []))}")
        print(f"      - Food: {len(data.get('food', []))}")
        print(f"      - Culture: {len(data.get('culture', []))}")
        print(f"      - Festivals: {len(data.get('festivals', []))}")
        print(f"      - Wildlife: {len(data.get('wildlife', []))}")
        print(f"      - Adventure: {len(data.get('adventure', []))}")
        
        return result
    else:
        print(f"   ❌ Failed: {result.get('error', 'Unknown error')}")
        return None

def scrape_all_states():
    """Scrape tourism data for all states"""
    print("🇮🇳 Starting Tourism Data Scraping for All Indian States")
    print("=" * 60)
    
    # Load state URLs
    state_urls = load_state_urls()
    
    print(f"📋 Found {len(state_urls)} states to scrape")
    
    # Track results
    results = {
        'successful': [],
        'failed': [],
        'total_data': {}
    }
    
    # Scrape each state
    for state_name, tourism_url in state_urls.items():
        try:
            result = scrape_single_state(state_name, tourism_url)
            
            if result:
                results['successful'].append(state_name)
                results['total_data'][state_name] = result
            else:
                results['failed'].append(state_name)
            
            # Add delay between states
            print(f"   ⏳ Waiting 10 seconds before next state...")
            time.sleep(10)
            
        except Exception as e:
            print(f"   💥 Exception: {e}")
            results['failed'].append(state_name)
    
    # Print final summary
    print("\n" + "=" * 60)
    print("📊 SCRAPING SUMMARY")
    print("=" * 60)
    print(f"✅ Successful: {len(results['successful'])} states")
    print(f"❌ Failed: {len(results['failed'])} states")
    print(f"📈 Success Rate: {len(results['successful'])/len(state_urls)*100:.1f}%")
    
    if results['successful']:
        print(f"\n✅ Successfully scraped:")
        for state in results['successful']:
            print(f"   - {state}")
    
    if results['failed']:
        print(f"\n❌ Failed to scrape:")
        for state in results['failed']:
            print(f"   - {state}")
    
    # Save results to file
    output_file = Path(__file__).parent.parent / 'tourism_scraping_results.json'
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    
    print(f"\n💾 Results saved to: {output_file}")
    
    return results

def scrape_working_states_only():
    """Scrape only the states with working tourism websites"""
    print("🎯 Scraping Only Working Tourism Websites")
    print("=" * 50)
    
    # Working states from our earlier check
    working_states = {
        'andhra_pradesh': 'https://tourism.ap.gov.in/',
        'arunachal_pradesh': 'http://www.arunachaltourism.com/',
        'assam': 'https://tourism.assam.gov.in/',
        'chandigarh': 'http://chandigarhtourism.gov.in/',
        'dadra_nagar_haveli_daman_diu': 'https://www.tourismdddnh.in/',
        'goa': 'https://goa-tourism.com/',
        'gujarat': 'https://www.gujarattourism.com/',
        'haryana': 'http://haryanatourism.gov.in/',
        'karnataka': 'https://www.karnatakatourism.org/',
        'kerala': 'http://www.keralatourism.org',
        'lakshadweep': 'https://www.lakshadweeptourism.com/',
        'maharashtra': 'http://www.maharashtratourism.gov.in/',
        'manipur': 'http://www.manipurtourism.gov.in/',
        'meghalaya': 'https://www.meghalayatourism.in/',
        'mizoram': 'https://tourism.mizoram.gov.in',
        'nagaland': 'http://tourismnagaland.com/',
        'delhi': 'http://www.delhitourism.gov.in',
        'odisha': 'http://www.odishatourism.gov.in',
        'punjab': 'https://punjabtourism.punjab.gov.in/',
        'rajasthan': 'http://www.tourism.rajasthan.gov.in/',
        'telangana': 'https://tourism.telangana.gov.in/',
        'uttar_pradesh': 'https://uptourism.gov.in/',
        'uttarakhand': 'https://uttarakhandtourism.gov.in/'
    }
    
    print(f"📋 Found {len(working_states)} working state websites")
    
    # Track results
    results = {
        'successful': [],
        'failed': [],
        'total_data': {}
    }
    
    # Scrape each working state
    for state_name, tourism_url in working_states.items():
        try:
            result = scrape_single_state(state_name, tourism_url)
            
            if result:
                results['successful'].append(state_name)
                results['total_data'][state_name] = result
            else:
                results['failed'].append(state_name)
            
            # Add delay between states
            print(f"   ⏳ Waiting 5 seconds before next state...")
            time.sleep(5)
            
        except Exception as e:
            print(f"   💥 Exception: {e}")
            results['failed'].append(state_name)
    
    # Print final summary
    print("\n" + "=" * 50)
    print("📊 WORKING STATES SCRAPING SUMMARY")
    print("=" * 50)
    print(f"✅ Successful: {len(results['successful'])} states")
    print(f"❌ Failed: {len(results['failed'])} states")
    print(f"📈 Success Rate: {len(results['successful'])/len(working_states)*100:.1f}%")
    
    # Save results to file
    output_file = Path(__file__).parent.parent / 'working_states_scraping_results.json'
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    
    print(f"\n💾 Results saved to: {output_file}")
    
    return results

def main():
    """Main function"""
    print("🕷️ Tourism Data Scraper")
    print("Using your existing universal scraper system")
    print()
    
    # Ask user what to do
    print("Choose an option:")
    print("1. Scrape all states (including broken websites)")
    print("2. Scrape only working states (recommended)")
    print("3. Scrape a single state (for testing)")
    
    choice = input("\nEnter your choice (1/2/3): ").strip()
    
    if choice == '1':
        scrape_all_states()
    elif choice == '2':
        scrape_working_states_only()
    elif choice == '3':
        state_name = input("Enter state name (e.g., karnataka): ").strip().lower()
        state_urls = load_state_urls()
        
        if state_name in state_urls:
            scrape_single_state(state_name, state_urls[state_name])
        else:
            print(f"❌ State '{state_name}' not found in the list")
    else:
        print("❌ Invalid choice")

if __name__ == "__main__":
    main()

