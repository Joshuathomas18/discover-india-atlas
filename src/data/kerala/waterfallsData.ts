// Kerala Waterfalls Data
// Comprehensive data for major waterfalls in Kerala with 4 tabs each

import { KarnatakaPOI, WaterfallTabs, ImageReference } from '../../types/database';

// Athirapally Falls
export const athirapallyFallsData: KarnatakaPOI = {
  id: 'athirapally_falls',
  name: 'Athirapally Falls',
  category: 'waterfall',
  description: 'Famous waterfall known as the "Niagara of India", located in Thrissur district',
  coordinates: { lat: 10.2833, lng: 76.6167 },
  banner_image: {
    storage_path: 'kerala/waterfalls/athirapally/banner.jpg',
    download_url: '',
    caption: 'Athirapally Falls - Niagara of India',
    credit: 'Kerala Tourism',
    alt_text: 'Athirapally Falls with scenic surroundings',
    uploaded_at: new Date()
  },
  icon_type: 'waterfall',
  created_at: new Date(),
  tabs: {
    size: 'Athirapally Falls has a height of about 80 feet and cascades down rocky cliffs into a natural pool below. The waterfall is surrounded by lush green vegetation and is known for its spectacular beauty. The water flow varies with the season, being most impressive during the monsoon months (June-September) when it receives maximum water from the surrounding hills.',
    rivers_associated: [
      'Chalakudy River',
      'Periyar River (tributary)',
      'Arabian Sea (drainage basin)'
    ],
    facts_tourists: 'Athirapally Falls is a popular tourist destination known for its natural beauty and scenic surroundings. The waterfall is often referred to as the "Niagara of India" due to its impressive size and beauty. The area around the waterfall is home to diverse wildlife and offers excellent opportunities for nature photography. The best time to visit is during the monsoon season when the waterfall is at its most spectacular.',
    how_to_reach: 'Athirapally Falls is located about 60 km from Thrissur and 80 km from Kochi. By road, you can reach the waterfall via NH47 and then take a local road. The nearest railway station is Chalakudy Junction, from where you can take a taxi or bus. The nearest airport is Cochin International Airport (about 80 km away). Local transport including buses and taxis are available from nearby towns.'
  } as WaterfallTabs
};

// Vazhachal Falls
export const vazhachalFallsData: KarnatakaPOI = {
  id: 'vazhachal_falls',
  name: 'Vazhachal Falls',
  category: 'waterfall',
  description: 'Beautiful waterfall located near Athirapally Falls, known for its scenic beauty',
  coordinates: { lat: 10.2833, lng: 76.6167 },
  banner_image: {
    storage_path: 'kerala/waterfalls/vazhachal/banner.jpg',
    download_url: '',
    caption: 'Vazhachal Falls',
    credit: 'Kerala Tourism',
    alt_text: 'Vazhachal Falls with scenic surroundings',
    uploaded_at: new Date()
  },
  icon_type: 'waterfall',
  created_at: new Date(),
  tabs: {
    size: 'Vazhachal Falls has a height of about 60 feet and cascades down rocky cliffs into a natural pool below. The waterfall is surrounded by dense forests and is known for its scenic beauty. The water flow varies with the season, being most impressive during the monsoon months (June-September) when it receives maximum water from the surrounding hills.',
    rivers_associated: [
      'Chalakudy River',
      'Periyar River (tributary)',
      'Arabian Sea (drainage basin)'
    ],
    facts_tourists: 'Vazhachal Falls is a popular tourist destination known for its natural beauty and scenic surroundings. The waterfall is located near Athirapally Falls and offers a similar experience. The area around the waterfall is home to diverse wildlife and offers excellent opportunities for nature photography. The best time to visit is during the monsoon season when the waterfall is at its most spectacular.',
    how_to_reach: 'Vazhachal Falls is located about 65 km from Thrissur and 85 km from Kochi. By road, you can reach the waterfall via NH47 and then take a local road. The nearest railway station is Chalakudy Junction, from where you can take a taxi or bus. The nearest airport is Cochin International Airport (about 85 km away). Local transport including buses and taxis are available from nearby towns.'
  } as WaterfallTabs
};

// Export all waterfalls data
export const keralaWaterfallsData: KarnatakaPOI[] = [
  athirapallyFallsData,
  vazhachalFallsData
];

export default keralaWaterfallsData;

