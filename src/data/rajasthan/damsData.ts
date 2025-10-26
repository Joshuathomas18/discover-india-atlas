// Rajasthan Dams Data
// Comprehensive data for major dams in Rajasthan with 4 tabs each

import { KarnatakaPOI, DamTabs, ImageReference } from '../../types/database';

// Mahi Bajaj Sagar Dam
export const mahiBajajSagarData: KarnatakaPOI = {
  id: 'mahi_bajaj_sagar_dam',
  name: 'Mahi Bajaj Sagar Dam',
  category: 'dam',
  description: 'Major dam on the Mahi River, providing irrigation and hydroelectric power to Rajasthan',
  coordinates: { lat: 24.0000, lng: 74.0000 },
  banner_image: {
    storage_path: 'rajasthan/dams/mahi_bajaj_sagar/banner.jpg',
    download_url: '',
    caption: 'Mahi Bajaj Sagar Dam',
    credit: 'Rajasthan Tourism',
    alt_text: 'Mahi Bajaj Sagar Dam on Mahi River',
    uploaded_at: new Date()
  },
  icon_type: 'dam',
  created_at: new Date(),
  tabs: {
    size: 'Mahi Bajaj Sagar Dam has a height of about 43 meters and a length of about 1,200 meters. The dam has a storage capacity of about 1,200 million cubic meters and covers an area of about 200 square kilometers. The dam is equipped with 8 spillway gates and has a power generation capacity of about 140 MW. The reservoir created by the dam is known as Mahi Bajaj Sagar Reservoir.',
    rivers_associated: [
      'Mahi River',
      'Som River (tributary)',
      'Anas River (tributary)'
    ],
    facts_tourists: 'Mahi Bajaj Sagar Dam is a major multipurpose dam that provides irrigation water to about 2.5 lakh hectares of land in Rajasthan and Gujarat. The dam also generates hydroelectric power and provides drinking water to nearby towns. The reservoir created by the dam is a popular destination for boating and fishing. The dam is surrounded by scenic hills and offers beautiful views of the surrounding landscape. The best time to visit is during the monsoon season when the dam is at its most impressive.',
    how_to_reach: 'Mahi Bajaj Sagar Dam is located about 50 km from Banswara and 200 km from Udaipur. By road, you can reach the dam via NH79 and then take a local road. The nearest railway station is Banswara Junction, from where you can take a taxi or bus. The nearest airport is Udaipur Airport (about 200 km away). Local transport including buses and taxis are available from nearby towns. The dam is accessible by road and has parking facilities.'
  } as DamTabs
};

// Bisalpur Dam
export const bisalpurDamData: KarnatakaPOI = {
  id: 'bisalpur_dam',
  name: 'Bisalpur Dam',
  category: 'dam',
  description: 'Major dam on the Banas River, providing water supply to Jaipur and surrounding areas',
  coordinates: { lat: 26.0000, lng: 75.0000 },
  banner_image: {
    storage_path: 'rajasthan/dams/bisalpur/banner.jpg',
    download_url: '',
    caption: 'Bisalpur Dam',
    credit: 'Rajasthan Tourism',
    alt_text: 'Bisalpur Dam on Banas River',
    uploaded_at: new Date()
  },
  icon_type: 'dam',
  created_at: new Date(),
  tabs: {
    size: 'Bisalpur Dam has a height of about 39 meters and a length of about 574 meters. The dam has a storage capacity of about 1,100 million cubic meters and covers an area of about 150 square kilometers. The dam is equipped with 12 spillway gates and has a power generation capacity of about 45 MW. The reservoir created by the dam is known as Bisalpur Reservoir.',
    rivers_associated: [
      'Banas River',
      'Kothari River (tributary)',
      'Mashi River (tributary)'
    ],
    facts_tourists: 'Bisalpur Dam is a major multipurpose dam that provides drinking water to Jaipur and surrounding areas. The dam also provides irrigation water to about 1.5 lakh hectares of land in Rajasthan. The reservoir created by the dam is a popular destination for boating and fishing. The dam is surrounded by scenic hills and offers beautiful views of the surrounding landscape. The best time to visit is during the monsoon season when the dam is at its most impressive.',
    how_to_reach: 'Bisalpur Dam is located about 100 km from Jaipur and 50 km from Tonk. By road, you can reach the dam via NH12 and then take a local road. The nearest railway station is Tonk Junction, from where you can take a taxi or bus. The nearest airport is Jaipur Airport (about 100 km away). Local transport including buses and taxis are available from nearby towns. The dam is accessible by road and has parking facilities.'
  } as DamTabs
};

// Export all dams data
export const rajasthanDamsData: KarnatakaPOI[] = [
  mahiBajajSagarData,
  bisalpurDamData
];

export default rajasthanDamsData;

