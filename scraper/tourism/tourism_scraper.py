"""
Tourism Data Scraper
Specialized scraper for Indian state tourism websites
"""

import logging
from typing import Dict, Any, List, Optional
from urllib.parse import urljoin, urlparse
import time
import json
import sys
from pathlib import Path

# Add the scraper directory to Python path
scraper_dir = Path(__file__).parent.parent
sys.path.append(str(scraper_dir))

from core.universal_scraper import UniversalScraper
from core.data_extractor import UniversalDataExtractor
from core.pattern_recognizer import UniversalPatternRecognizer

logger = logging.getLogger(__name__)

class TourismDataScraper:
    """Specialized scraper for Indian state tourism websites"""
    
    def __init__(self):
        self.universal_scraper = UniversalScraper(
            max_pages=50,
            respect_robots=True,
            use_selenium=True,
            anti_detection=True,
            rate_limit=2.0  # Slower for tourism sites
        )
        
        # Tourism-specific patterns
        self.tourism_patterns = {
            'places': [
                'tourist places', 'attractions', 'destinations', 'monuments',
                'temples', 'forts', 'palaces', 'beaches', 'hill stations'
            ],
            'activities': [
                'activities', 'adventure', 'trekking', 'safari', 'boating',
                'water sports', 'cultural programs', 'festivals'
            ],
            'accommodation': [
                'hotels', 'resorts', 'guest houses', 'homestays', 'lodging'
            ],
            'transport': [
                'how to reach', 'transportation', 'bus', 'train', 'flight',
                'road connectivity', 'nearest airport', 'nearest railway'
            ],
            'food': [
                'cuisine', 'food', 'restaurants', 'local delicacies', 'street food'
            ],
            'culture': [
                'culture', 'traditions', 'festivals', 'art', 'music', 'dance'
            ]
        }
    
    def scrape_state_tourism(self, state_name: str, tourism_url: str) -> Dict[str, Any]:
        """
        Scrape a state's tourism website for comprehensive data
        
        Args:
            state_name: Name of the state (e.g., 'karnataka')
            tourism_url: Official tourism website URL
            
        Returns:
            Dictionary containing structured tourism data
        """
        logger.info(f"Scraping tourism data for {state_name}: {tourism_url}")
        
        try:
            # Scrape the main tourism website
            results = self.universal_scraper.scrape(tourism_url, depth=2)
            
            if not results['success']:
                return {
                    'success': False,
                    'state': state_name,
                    'error': results.get('error', 'Unknown error'),
                    'data': {}
                }
            
            # Process and structure the data
            structured_data = self._structure_tourism_data(
                state_name, tourism_url, results['data']
            )
            
            return {
                'success': True,
                'state': state_name,
                'url': tourism_url,
                'pages_scraped': results['pages_scraped'],
                'duration': results['duration_seconds'],
                'data': structured_data,
                'metadata': {
                    'scraped_at': time.time(),
                    'source_urls': results['metadata']['visited_urls']
                }
            }
            
        except Exception as e:
            logger.error(f"Failed to scrape {state_name}: {e}")
            return {
                'success': False,
                'state': state_name,
                'error': str(e),
                'data': {}
            }
    
    def _structure_tourism_data(self, state_name: str, base_url: str, scraped_pages: List[Dict]) -> Dict[str, Any]:
        """Structure raw scraped data into tourism categories"""
        
        structured = {
            'state_info': {
                'name': state_name,
                'official_tourism_url': base_url,
                'last_updated': time.time()
            },
            'places': [],
            'activities': [],
            'accommodation': [],
            'transport': [],
            'food': [],
            'culture': [],
            'festivals': [],
            'wildlife': [],
            'adventure': []
        }
        
        for page_data in scraped_pages:
            # Extract tourism-specific data from each page
            page_url = page_data.get('page_metadata', {}).get('url', '')
            page_title = page_data.get('page_metadata', {}).get('title', '')
            
            # Categorize content based on patterns
            content_type = self._categorize_content(page_title, page_data)
            
            if content_type == 'places':
                places = self._extract_places(page_data, page_url)
                structured['places'].extend(places)
            
            elif content_type == 'activities':
                activities = self._extract_activities(page_data, page_url)
                structured['activities'].extend(activities)
            
            elif content_type == 'accommodation':
                accommodation = self._extract_accommodation(page_data, page_url)
                structured['accommodation'].extend(accommodation)
            
            elif content_type == 'transport':
                transport = self._extract_transport(page_data, page_url)
                structured['transport'].extend(transport)
            
            elif content_type == 'food':
                food = self._extract_food(page_data, page_url)
                structured['food'].extend(food)
            
            elif content_type == 'culture':
                culture = self._extract_culture(page_data, page_url)
                structured['culture'].extend(culture)
            
            elif content_type == 'festivals':
                festivals = self._extract_festivals(page_data, page_url)
                structured['festivals'].extend(festivals)
            
            elif content_type == 'wildlife':
                wildlife = self._extract_wildlife(page_data, page_url)
                structured['wildlife'].extend(wildlife)
            
            elif content_type == 'adventure':
                adventure = self._extract_adventure(page_data, page_url)
                structured['adventure'].extend(adventure)
        
        # Remove duplicates and clean data
        for category in structured:
            if isinstance(structured[category], list):
                structured[category] = self._deduplicate_items(structured[category])
        
        return structured
    
    def _categorize_content(self, title: str, page_data: Dict) -> str:
        """Categorize page content based on title and content"""
        title_lower = title.lower()
        content_text = self._extract_text_content(page_data)
        
        # Check for tourism category keywords
        for category, keywords in self.tourism_patterns.items():
            for keyword in keywords:
                if keyword in title_lower or keyword in content_text:
                    return category
        
        # Additional specific checks
        if any(word in title_lower for word in ['festival', 'utsav', 'mela']):
            return 'festivals'
        
        if any(word in title_lower for word in ['wildlife', 'sanctuary', 'national park', 'reserve']):
            return 'wildlife'
        
        if any(word in title_lower for word in ['adventure', 'trekking', 'mountaineering', 'rafting']):
            return 'adventure'
        
        return 'places'  # Default category
    
    def _extract_text_content(self, page_data: Dict) -> str:
        """Extract text content from page data"""
        text_parts = []
        
        # Extract from various fields
        if 'title' in page_data:
            text_parts.append(page_data['title'])
        
        if 'description' in page_data:
            text_parts.append(page_data['description'])
        
        if 'content' in page_data:
            text_parts.append(page_data['content'])
        
        if 'text' in page_data:
            text_parts.append(page_data['text'])
        
        return ' '.join(text_parts).lower()
    
    def _extract_places(self, page_data: Dict, page_url: str) -> List[Dict]:
        """Extract tourist places from page data"""
        places = []
        
        # Look for structured data
        if 'places' in page_data:
            for place in page_data['places']:
                places.append({
                    'name': place.get('name', ''),
                    'description': place.get('description', ''),
                    'location': place.get('location', ''),
                    'type': place.get('type', 'attraction'),
                    'images': place.get('images', []),
                    'source_url': page_url,
                    'extracted_at': time.time()
                })
        
        # Extract from text content
        text_content = self._extract_text_content(page_data)
        
        # Look for place names (this is a simplified approach)
        # In a real implementation, you'd use NLP or pattern matching
        if 'temple' in text_content or 'fort' in text_content or 'palace' in text_content:
            places.append({
                'name': page_data.get('title', 'Unknown Place'),
                'description': page_data.get('description', ''),
                'location': 'Unknown',
                'type': 'attraction',
                'images': page_data.get('images', []),
                'source_url': page_url,
                'extracted_at': time.time()
            })
        
        return places
    
    def _extract_activities(self, page_data: Dict, page_url: str) -> List[Dict]:
        """Extract activities from page data"""
        activities = []
        
        if 'activities' in page_data:
            for activity in page_data['activities']:
                activities.append({
                    'name': activity.get('name', ''),
                    'description': activity.get('description', ''),
                    'type': activity.get('type', 'recreation'),
                    'location': activity.get('location', ''),
                    'duration': activity.get('duration', ''),
                    'difficulty': activity.get('difficulty', ''),
                    'source_url': page_url,
                    'extracted_at': time.time()
                })
        
        return activities
    
    def _extract_accommodation(self, page_data: Dict, page_url: str) -> List[Dict]:
        """Extract accommodation options from page data"""
        accommodation = []
        
        if 'hotels' in page_data or 'accommodation' in page_data:
            hotels = page_data.get('hotels', page_data.get('accommodation', []))
            for hotel in hotels:
                accommodation.append({
                    'name': hotel.get('name', ''),
                    'type': hotel.get('type', 'hotel'),
                    'location': hotel.get('location', ''),
                    'rating': hotel.get('rating', ''),
                    'price_range': hotel.get('price_range', ''),
                    'amenities': hotel.get('amenities', []),
                    'contact': hotel.get('contact', ''),
                    'source_url': page_url,
                    'extracted_at': time.time()
                })
        
        return accommodation
    
    def _extract_transport(self, page_data: Dict, page_url: str) -> List[Dict]:
        """Extract transportation information from page data"""
        transport = []
        
        if 'transport' in page_data or 'how_to_reach' in page_data:
            transport_info = page_data.get('transport', page_data.get('how_to_reach', {}))
            
            transport.append({
                'by_air': transport_info.get('by_air', ''),
                'by_train': transport_info.get('by_train', ''),
                'by_road': transport_info.get('by_road', ''),
                'by_bus': transport_info.get('by_bus', ''),
                'source_url': page_url,
                'extracted_at': time.time()
            })
        
        return transport
    
    def _extract_food(self, page_data: Dict, page_url: str) -> List[Dict]:
        """Extract food and cuisine information from page data"""
        food = []
        
        if 'food' in page_data or 'cuisine' in page_data:
            food_items = page_data.get('food', page_data.get('cuisine', []))
            for item in food_items:
                food.append({
                    'name': item.get('name', ''),
                    'description': item.get('description', ''),
                    'type': item.get('type', 'local_cuisine'),
                    'ingredients': item.get('ingredients', []),
                    'where_to_find': item.get('where_to_find', ''),
                    'source_url': page_url,
                    'extracted_at': time.time()
                })
        
        return food
    
    def _extract_culture(self, page_data: Dict, page_url: str) -> List[Dict]:
        """Extract cultural information from page data"""
        culture = []
        
        if 'culture' in page_data:
            cultural_items = page_data['culture']
            for item in cultural_items:
                culture.append({
                    'name': item.get('name', ''),
                    'description': item.get('description', ''),
                    'type': item.get('type', 'cultural'),
                    'significance': item.get('significance', ''),
                    'source_url': page_url,
                    'extracted_at': time.time()
                })
        
        return culture
    
    def _extract_festivals(self, page_data: Dict, page_url: str) -> List[Dict]:
        """Extract festival information from page data"""
        festivals = []
        
        if 'festivals' in page_data:
            festival_list = page_data['festivals']
            for festival in festival_list:
                festivals.append({
                    'name': festival.get('name', ''),
                    'description': festival.get('description', ''),
                    'month': festival.get('month', ''),
                    'duration': festival.get('duration', ''),
                    'significance': festival.get('significance', ''),
                    'activities': festival.get('activities', []),
                    'source_url': page_url,
                    'extracted_at': time.time()
                })
        
        return festivals
    
    def _extract_wildlife(self, page_data: Dict, page_url: str) -> List[Dict]:
        """Extract wildlife information from page data"""
        wildlife = []
        
        if 'wildlife' in page_data:
            wildlife_items = page_data['wildlife']
            for item in wildlife_items:
                wildlife.append({
                    'name': item.get('name', ''),
                    'type': item.get('type', 'sanctuary'),
                    'description': item.get('description', ''),
                    'area': item.get('area', ''),
                    'species': item.get('species', []),
                    'best_time': item.get('best_time', ''),
                    'entry_fee': item.get('entry_fee', ''),
                    'source_url': page_url,
                    'extracted_at': time.time()
                })
        
        return wildlife
    
    def _extract_adventure(self, page_data: Dict, page_url: str) -> List[Dict]:
        """Extract adventure activities from page data"""
        adventure = []
        
        if 'adventure' in page_data:
            adventure_items = page_data['adventure']
            for item in adventure_items:
                adventure.append({
                    'name': item.get('name', ''),
                    'type': item.get('type', 'adventure'),
                    'description': item.get('description', ''),
                    'location': item.get('location', ''),
                    'difficulty': item.get('difficulty', ''),
                    'duration': item.get('duration', ''),
                    'equipment': item.get('equipment', []),
                    'source_url': page_url,
                    'extracted_at': time.time()
                })
        
        return adventure
    
    def _deduplicate_items(self, items: List[Dict]) -> List[Dict]:
        """Remove duplicate items based on name and description"""
        seen = set()
        unique_items = []
        
        for item in items:
            # Create a unique identifier
            identifier = f"{item.get('name', '')}_{item.get('description', '')}"
            if identifier not in seen:
                seen.add(identifier)
                unique_items.append(item)
        
        return unique_items
    
    def scrape_all_states(self, state_urls: Dict[str, str]) -> Dict[str, Any]:
        """
        Scrape tourism data for all states
        
        Args:
            state_urls: Dictionary mapping state names to their tourism URLs
            
        Returns:
            Dictionary containing data for all states
        """
        logger.info(f"Starting bulk scraping for {len(state_urls)} states")
        
        all_results = {
            'success': True,
            'total_states': len(state_urls),
            'scraped_states': 0,
            'failed_states': 0,
            'states_data': {},
            'summary': {
                'start_time': time.time(),
                'end_time': None,
                'total_duration': 0
            }
        }
        
        for state_name, tourism_url in state_urls.items():
            logger.info(f"Scraping {state_name}...")
            
            try:
                state_data = self.scrape_state_tourism(state_name, tourism_url)
                all_results['states_data'][state_name] = state_data
                
                if state_data['success']:
                    all_results['scraped_states'] += 1
                else:
                    all_results['failed_states'] += 1
                
                # Add delay between states to be respectful
                time.sleep(5)
                
            except Exception as e:
                logger.error(f"Failed to scrape {state_name}: {e}")
                all_results['states_data'][state_name] = {
                    'success': False,
                    'state': state_name,
                    'error': str(e)
                }
                all_results['failed_states'] += 1
        
        # Calculate summary
        all_results['summary']['end_time'] = time.time()
        all_results['summary']['total_duration'] = (
            all_results['summary']['end_time'] - all_results['summary']['start_time']
        )
        
        logger.info(f"Bulk scraping completed: {all_results['scraped_states']} successful, {all_results['failed_states']} failed")
        
        return all_results
