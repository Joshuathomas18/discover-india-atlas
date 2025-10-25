// Karnataka Waterfalls Data
// Comprehensive data for major waterfalls in Karnataka with 4 tabs each

import { KarnatakaPOI, WaterfallTabs, ImageReference } from '../../types/database';

export const jogFallsData: KarnatakaPOI = {
  id: 'jog_falls',
  name: 'Jog Falls',
  category: 'waterfall',
  description: 'Second highest plunge waterfall in India, also known as Gerusoppe Falls',
  coordinates: { lat: 14.2167, lng: 74.8167 },
  banner_image: {
    storage_path: 'karnataka/waterfalls/jog_falls/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Jog Falls - Second Highest Waterfall in India',
    credit: 'Unsplash',
    alt_text: 'Jog Falls cascading down rocky cliffs',
    uploaded_at: new Date()
  },
  icon_type: 'waterfall',
  created_at: new Date(),
  tabs: {
    size: 'Jog Falls is the second highest plunge waterfall in India, with a total height of 253 meters (830 feet). The waterfall is formed by the Sharavathi River and consists of four distinct streams: Raja, Rani, Roarer, and Rocket. During monsoon season, the waterfall is at its most spectacular with massive volumes of water cascading down the rocky cliffs. The falls are located in the Shimoga district of Karnataka.',
    rivers_associated: [
      'Sharavathi River - Primary source',
      'Linganamakki Dam - Upstream reservoir',
      'Gerusoppe Falls - Alternative name'
    ],
    facts_tourists: 'Jog Falls is one of the most popular tourist destinations in Karnataka, attracting thousands of visitors annually. The best time to visit is during monsoon season (June-September) when the waterfall is in full flow. The falls are illuminated at night during peak season, creating a spectacular sight. The area around the falls offers several viewpoints for photography. The falls are located in a forested area with rich biodiversity. Entry fee is INR 10 for Indians and INR 100 for foreigners.',
    how_to_reach: 'Jog Falls is located in the Shimoga district of Karnataka, about 100 km from Shimoga city. From Shimoga: 1) Take a bus or taxi to Jog Falls (100 km) - journey takes about 2-3 hours. 2) Private vehicles can reach the falls directly. 3) The nearest railway station is Shimoga (100 km). 4) The nearest airport is Mangaluru (200 km). The falls are accessible by road throughout the year, but the best time to visit is during monsoon season when the waterfall is in full flow.'
  } as WaterfallTabs
};

export const abbeyFallsData: KarnatakaPOI = {
  id: 'abbey_falls',
  name: 'Abbey Falls',
  category: 'waterfall',
  description: 'Picturesque waterfall in Coorg, surrounded by coffee plantations',
  coordinates: { lat: 12.4167, lng: 75.7333 },
  banner_image: {
    storage_path: 'karnataka/waterfalls/abbey_falls/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Abbey Falls - Coorg\'s Beautiful Waterfall',
    credit: 'Unsplash',
    alt_text: 'Abbey Falls cascading through coffee plantations',
    uploaded_at: new Date()
  },
  icon_type: 'waterfall',
  created_at: new Date(),
  tabs: {
    size: 'Abbey Falls is a beautiful waterfall located in Coorg (Kodagu) district of Karnataka. The waterfall has a height of about 70 meters (230 feet) and is formed by the Kaveri River. The falls are surrounded by lush green coffee plantations and dense forests, creating a picturesque setting. The waterfall is accessible through a short walk from the parking area.',
    rivers_associated: [
      'Kaveri River - Primary source',
      'Local streams and tributaries'
    ],
    facts_tourists: 'Abbey Falls is a popular tourist destination in Coorg, known for its natural beauty and serene surroundings. The falls are surrounded by coffee plantations, making it a perfect spot for nature lovers and photographers. The best time to visit is during monsoon season (June-September) when the waterfall is in full flow. The area around the falls offers several viewpoints and walking trails. Entry fee is INR 15 for Indians and INR 50 for foreigners.',
    how_to_reach: 'Abbey Falls is located in Coorg district, about 8 km from Madikeri town. From Madikeri: 1) Take a bus or taxi to Abbey Falls (8 km) - journey takes about 20-30 minutes. 2) Private vehicles can reach the falls directly. 3) The nearest railway station is Mysore (120 km). 4) The nearest airport is Mangaluru (150 km). The falls are accessible by road throughout the year, but the best time to visit is during monsoon season when the waterfall is in full flow.'
  } as WaterfallTabs
};

export const karnatakaWaterfallsData = [
  jogFallsData,
  abbeyFallsData,
  // Additional waterfalls will be added here
];

export default karnatakaWaterfallsData;
