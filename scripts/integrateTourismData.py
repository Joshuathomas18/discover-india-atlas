"""
Tourism Data Integration Script
Integrate scraped tourism data with your existing React frontend
"""

import json
import sys
from pathlib import Path
from typing import Dict, Any, List

def convert_scraped_data_to_frontend_format(scraped_data: Dict[str, Any]) -> Dict[str, Any]:
    """
    Convert scraped tourism data to match your frontend's expected format
    
    Your frontend expects:
    - KarnatakaPOI format for places
    - Cultural categories (monuments, food, customs, festivals, history)
    - Geographical POIs (rivers, mountains, wildlife, forests, waterfalls, dams)
    """
    
    converted_data = {
        'places': [],
        'rivers': [],
        'mountains': [],
        'wildlife': [],
        'forests': [],
        'waterfalls': [],
        'dams': []
    }
    
    # Convert places to KarnatakaPOI format
    for place in scraped_data.get('places', []):
        converted_place = {
            'id': f"{place['name'].lower().replace(' ', '_')}_{scraped_data['state_info']['name']}",
            'name': place['name'],
            'category': 'place',
            'description': place.get('description', ''),
            'coordinates': {
                'lat': 0,  # Would need geocoding
                'lng': 0
            },
            'banner_image': {
                'storage_path': f"{scraped_data['state_info']['name']}/places/{place['name'].lower().replace(' ', '_')}/banner.jpg",
                'download_url': place.get('images', [''])[0] if place.get('images') else '',
                'caption': place['name'],
                'credit': 'Tourism Website',
                'alt_text': f"{place['name']} - {scraped_data['state_info']['name']}",
                'uploaded_at': place.get('extracted_at', 0)
            },
            'icon_type': 'pin',
            'created_at': place.get('extracted_at', 0),
            'tabs': {
                'monuments': [{
                    'id': f"{place['name'].lower().replace(' ', '_')}_monument",
                    'place_id': f"{place['name'].lower().replace(' ', '_')}_{scraped_data['state_info']['name']}",
                    'state_id': scraped_data['state_info']['name'],
                    'category': 'monuments',
                    'name': f"{place['name']} - Monuments",
                    'description': place.get('description', ''),
                    'details': place.get('description', ''),
                    'coordinates': {'lat': 0, 'lng': 0},
                    'images': [],
                    'actions': {},
                    'opening_hours': 'All day',
                    'entry_fee': 'Varies',
                    'best_time': 'Any time',
                    'duration': '1-2 hours',
                    'accessibility_info': 'Public access',
                    'created_at': place.get('extracted_at', 0),
                    'updated_at': place.get('extracted_at', 0)
                }],
                'food': [{
                    'id': f"{place['name'].lower().replace(' ', '_')}_food",
                    'place_id': f"{place['name'].lower().replace(' ', '_')}_{scraped_data['state_info']['name']}",
                    'state_id': scraped_data['state_info']['name'],
                    'category': 'food',
                    'name': f"{place['name']} - Local Cuisine",
                    'description': 'Local food specialties',
                    'details': 'Traditional local cuisine and delicacies',
                    'coordinates': {'lat': 0, 'lng': 0},
                    'images': [],
                    'actions': {},
                    'opening_hours': 'All day',
                    'entry_fee': 'Varies',
                    'best_time': 'Any time',
                    'duration': '1 hour',
                    'accessibility_info': 'Restaurant dependent',
                    'created_at': place.get('extracted_at', 0),
                    'updated_at': place.get('extracted_at', 0)
                }],
                'customs': [{
                    'id': f"{place['name'].lower().replace(' ', '_')}_customs",
                    'place_id': f"{place['name'].lower().replace(' ', '_')}_{scraped_data['state_info']['name']}",
                    'state_id': scraped_data['state_info']['name'],
                    'category': 'customs',
                    'name': f"{place['name']} - Local Customs",
                    'description': 'Traditional customs and practices',
                    'details': 'Local traditions and cultural practices',
                    'coordinates': {'lat': 0, 'lng': 0},
                    'images': [],
                    'actions': {},
                    'opening_hours': 'N/A',
                    'entry_fee': 'N/A',
                    'best_time': 'N/A',
                    'duration': 'N/A',
                    'accessibility_info': 'N/A',
                    'created_at': place.get('extracted_at', 0),
                    'updated_at': place.get('extracted_at', 0)
                }],
                'festivals': [{
                    'id': f"{place['name'].lower().replace(' ', '_')}_festivals",
                    'place_id': f"{place['name'].lower().replace(' ', '_')}_{scraped_data['state_info']['name']}",
                    'state_id': scraped_data['state_info']['name'],
                    'category': 'festivals',
                    'name': f"{place['name']} - Festivals",
                    'description': 'Local festivals and celebrations',
                    'details': 'Traditional festivals and cultural celebrations',
                    'coordinates': {'lat': 0, 'lng': 0},
                    'images': [],
                    'actions': {},
                    'opening_hours': 'N/A',
                    'entry_fee': 'N/A',
                    'best_time': 'N/A',
                    'duration': 'N/A',
                    'accessibility_info': 'N/A',
                    'created_at': place.get('extracted_at', 0),
                    'updated_at': place.get('extracted_at', 0)
                }],
                'history': [{
                    'id': f"{place['name'].lower().replace(' ', '_')}_history",
                    'place_id': f"{place['name'].lower().replace(' ', '_')}_{scraped_data['state_info']['name']}",
                    'state_id': scraped_data['state_info']['name'],
                    'category': 'history',
                    'name': f"{place['name']} - History",
                    'description': 'Historical significance',
                    'details': 'Historical background and significance',
                    'coordinates': {'lat': 0, 'lng': 0},
                    'images': [],
                    'actions': {},
                    'opening_hours': 'N/A',
                    'entry_fee': 'N/A',
                    'best_time': 'N/A',
                    'duration': 'N/A',
                    'accessibility_info': 'N/A',
                    'created_at': place.get('extracted_at', 0),
                    'updated_at': place.get('extracted_at', 0)
                }]
            }
        }
        converted_data['places'].append(converted_place)
    
    # Convert wildlife to KarnatakaPOI format
    for wildlife in scraped_data.get('wildlife', []):
        converted_wildlife = {
            'id': f"{wildlife['name'].lower().replace(' ', '_')}_{scraped_data['state_info']['name']}",
            'name': wildlife['name'],
            'category': 'wildlife',
            'description': wildlife.get('description', ''),
            'coordinates': {'lat': 0, 'lng': 0},
            'banner_image': {
                'storage_path': f"{scraped_data['state_info']['name']}/wildlife/{wildlife['name'].lower().replace(' ', '_')}/banner.jpg",
                'download_url': '',
                'caption': wildlife['name'],
                'credit': 'Tourism Website',
                'alt_text': f"{wildlife['name']} - {scraped_data['state_info']['name']}",
                'uploaded_at': wildlife.get('extracted_at', 0)
            },
            'icon_type': 'elephant',  # Default wildlife icon
            'created_at': wildlife.get('extracted_at', 0),
            'tabs': {
                'facts': wildlife.get('description', ''),
                'visiting_info': f"Best time: {wildlife.get('best_time', 'Year round')}, Entry fee: {wildlife.get('entry_fee', 'Varies')}",
                'animals_found': wildlife.get('species', [])
            }
        }
        converted_data['wildlife'].append(converted_wildlife)
    
    # Convert activities to adventure POIs
    for activity in scraped_data.get('adventure', []):
        converted_adventure = {
            'id': f"{activity['name'].lower().replace(' ', '_')}_{scraped_data['state_info']['name']}",
            'name': activity['name'],
            'category': 'adventure',
            'description': activity.get('description', ''),
            'coordinates': {'lat': 0, 'lng': 0},
            'banner_image': {
                'storage_path': f"{scraped_data['state_info']['name']}/adventure/{activity['name'].lower().replace(' ', '_')}/banner.jpg",
                'download_url': '',
                'caption': activity['name'],
                'credit': 'Tourism Website',
                'alt_text': f"{activity['name']} - {scraped_data['state_info']['name']}",
                'uploaded_at': activity.get('extracted_at', 0)
            },
            'icon_type': 'mountain',
            'created_at': activity.get('extracted_at', 0),
            'tabs': {
                'facts': activity.get('description', ''),
                'trekking': f"Difficulty: {activity.get('difficulty', 'Moderate')}, Duration: {activity.get('duration', 'Varies')}",
                'how_to_reach': activity.get('location', 'Contact local tourism office')
            }
        }
        converted_data['mountains'].append(converted_adventure)
    
    return converted_data

def integrate_scraped_data():
    """Integrate scraped tourism data with your frontend"""
    print("🔄 Integrating Scraped Tourism Data")
    print("=" * 50)
    
    # Look for scraped data files
    results_files = [
        'tourism_scraping_results.json',
        'working_states_scraping_results.json'
    ]
    
    scraped_data = None
    for file_name in results_files:
        file_path = Path(__file__).parent.parent / file_name
        if file_path.exists():
            print(f"📁 Found scraped data: {file_name}")
            with open(file_path, 'r', encoding='utf-8') as f:
                scraped_data = json.load(f)
            break
    
    if not scraped_data:
        print("❌ No scraped data found. Please run the scraper first.")
        return
    
    print(f"📊 Processing data for {len(scraped_data['total_data'])} states")
    
    # Convert data for each state
    all_converted_data = {}
    
    for state_name, state_data in scraped_data['total_data'].items():
        if state_data['success']:
            print(f"🔄 Converting {state_name}...")
            converted = convert_scraped_data_to_frontend_format(state_data['data'])
            all_converted_data[state_name] = converted
    
    # Save converted data
    output_file = Path(__file__).parent.parent / 'src' / 'data' / 'scrapedTourismData.json'
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(all_converted_data, f, indent=2, ensure_ascii=False)
    
    print(f"✅ Converted data saved to: {output_file}")
    
    # Create individual state files
    for state_name, state_data in all_converted_data.items():
        state_file = Path(__file__).parent.parent / 'src' / 'data' / f'{state_name}Data.ts'
        
        # Generate TypeScript file
        ts_content = f"""// Auto-generated from scraped tourism data
import {{ KarnatakaPOI }} from '../types/database';

// {state_name.title()} Tourism Data
export const {state_name}Data: KarnatakaPOI[] = {json.dumps(state_data, indent=2)};

export default {state_name}Data;
"""
        
        with open(state_file, 'w', encoding='utf-8') as f:
            f.write(ts_content)
        
        print(f"📄 Created: {state_file}")
    
    print(f"\n🎉 Integration complete!")
    print(f"   - Converted {len(all_converted_data)} states")
    print(f"   - Created individual TypeScript files")
    print(f"   - Ready for frontend integration")

def main():
    """Main function"""
    print("🔗 Tourism Data Integration")
    print("Converting scraped data to frontend format")
    print()
    
    integrate_scraped_data()

if __name__ == "__main__":
    main()

