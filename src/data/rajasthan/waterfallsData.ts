// Rajasthan Waterfalls Data
// Comprehensive data for major waterfalls in Rajasthan with 4 tabs each

import { KarnatakaPOI, WaterfallTabs, ImageReference } from '../../types/database';

// Menal Waterfall
export const menalWaterfallData: KarnatakaPOI = {
  id: 'menal_waterfall',
  name: 'Menal Waterfall',
  category: 'waterfall',
  description: 'Picturesque waterfall near Chittorgarh, known for its natural beauty and ancient temples',
  coordinates: { lat: 25.0000, lng: 74.5000 },
  banner_image: {
    storage_path: 'rajasthan/waterfalls/menal/banner.jpg',
    download_url: '',
    caption: 'Menal Waterfall',
    credit: 'Rajasthan Tourism',
    alt_text: 'Menal Waterfall in Rajasthan',
    uploaded_at: new Date()
  },
  icon_type: 'waterfall',
  created_at: new Date(),
  tabs: {
    size: 'Menal Waterfall has a height of about 30-40 feet and cascades down rocky cliffs into a natural pool below. The waterfall is surrounded by lush green vegetation and ancient temples. The water flow varies with the season, being most impressive during the monsoon months (July-September) when it receives maximum water from the surrounding hills.',
    rivers_associated: [
      'Menal River',
      'Banas River (tributary)',
      'Chambal River (drainage basin)'
    ],
    facts_tourists: 'Menal Waterfall is a popular tourist destination known for its natural beauty and historical significance. The area around the waterfall is home to ancient temples dating back to the 6th century. The waterfall is surrounded by dense forests and offers a peaceful retreat for nature lovers. The best time to visit is during the monsoon season when the waterfall is at its most spectacular. The area is also known for its wildlife and bird watching opportunities.',
    how_to_reach: 'Menal Waterfall is located about 90 km from Chittorgarh and 150 km from Udaipur. By road, you can reach the waterfall via NH79 and then take a local road. The nearest railway station is Chittorgarh Junction, from where you can take a taxi or bus. The nearest airport is Udaipur Airport (about 150 km away). Local transport including buses and taxis are available from nearby towns. The waterfall is accessible by a short trek from the parking area.'
  } as WaterfallTabs
};

// Harni Mahadev Waterfall
export const harniMahadevData: KarnatakaPOI = {
  id: 'harni_mahadev_waterfall',
  name: 'Harni Mahadev Waterfall',
  category: 'waterfall',
  description: 'Sacred waterfall near Mount Abu, known for its religious significance and natural beauty',
  coordinates: { lat: 24.5000, lng: 72.7000 },
  banner_image: {
    storage_path: 'rajasthan/waterfalls/harni_mahadev/banner.jpg',
    download_url: '',
    caption: 'Harni Mahadev Waterfall',
    credit: 'Rajasthan Tourism',
    alt_text: 'Harni Mahadev Waterfall near Mount Abu',
    uploaded_at: new Date()
  },
  icon_type: 'waterfall',
  created_at: new Date(),
  tabs: {
    size: 'Harni Mahadev Waterfall has a height of about 25-30 feet and cascades down rocky cliffs into a natural pool. The waterfall is surrounded by dense forests and is considered sacred by locals. The water flow is most impressive during the monsoon season (July-September) when it receives maximum water from the surrounding hills.',
    rivers_associated: [
      'West Banas River',
      'Sabarmati River (drainage basin)'
    ],
    facts_tourists: 'Harni Mahadev Waterfall is a sacred waterfall near Mount Abu, known for its religious significance and natural beauty. The waterfall is surrounded by ancient temples and is considered a holy site by devotees. The area offers excellent opportunities for trekking and nature photography. The best time to visit is during the monsoon season when the waterfall is at its most spectacular. The area is also known for its diverse flora and fauna.',
    how_to_reach: 'Harni Mahadev Waterfall is located about 15 km from Mount Abu. By road, you can reach the waterfall via local roads from Mount Abu. The nearest railway station is Abu Road, from where you can take a taxi or bus to Mount Abu and then to the waterfall. The nearest airport is Udaipur Airport (about 185 km away). Local transport including buses and taxis are available from Mount Abu. The waterfall is accessible by a short trek from the parking area.'
  } as WaterfallTabs
};

// Export all waterfalls data
export const rajasthanWaterfallsData: KarnatakaPOI[] = [
  menalWaterfallData,
  harniMahadevData
];

export default rajasthanWaterfallsData;

