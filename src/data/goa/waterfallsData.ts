// Goa Waterfalls Data
// Comprehensive data for major waterfalls in Goa with 4 tabs each

import { KarnatakaPOI, WaterfallTabs, ImageReference } from '../../types/database';

// Dudhsagar Falls
export const dudhsagarFallsData: KarnatakaPOI = {
  id: 'dudhsagar_falls',
  name: 'Dudhsagar Falls',
  category: 'waterfall',
  description: 'Famous waterfall known as the "Sea of Milk", located in the Western Ghats',
  coordinates: { lat: 15.3000, lng: 74.2000 },
  banner_image: {
    storage_path: 'goa/waterfalls/dudhsagar/banner.jpg',
    download_url: '',
    caption: 'Dudhsagar Falls - Sea of Milk',
    credit: 'Goa Tourism',
    alt_text: 'Dudhsagar Falls with scenic surroundings',
    uploaded_at: new Date()
  },
  icon_type: 'waterfall',
  created_at: new Date(),
  tabs: {
    size: 'Dudhsagar Falls has a height of about 310 meters and cascades down rocky cliffs into a natural pool below. The waterfall is surrounded by lush green vegetation and is known for its spectacular beauty. The water flow varies with the season, being most impressive during the monsoon months (June-September) when it receives maximum water from the surrounding hills.',
    rivers_associated: [
      'Mandovi River',
      'Zuari River (tributary)',
      'Arabian Sea (drainage basin)'
    ],
    facts_tourists: 'Dudhsagar Falls is a popular tourist destination known for its natural beauty and scenic surroundings. The waterfall is often referred to as the "Sea of Milk" due to its impressive size and beauty. The area around the waterfall is home to diverse wildlife and offers excellent opportunities for nature photography. The best time to visit is during the monsoon season when the waterfall is at its most spectacular.',
    how_to_reach: 'Dudhsagar Falls is located about 60 km from Panaji and 40 km from Ponda. By road, you can reach the waterfall via NH4A and then take a local road. The nearest railway station is Kulem, from where you can take a taxi or bus. The nearest airport is Dabolim Airport (about 60 km away). Local transport including buses and taxis are available from nearby towns.'
  } as WaterfallTabs
};

// Export all waterfalls data
export const goaWaterfallsData: KarnatakaPOI[] = [
  dudhsagarFallsData
];

export default goaWaterfallsData;

