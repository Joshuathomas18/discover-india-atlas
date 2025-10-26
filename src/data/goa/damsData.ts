// Goa Dams Data
// Comprehensive data for major dams in Goa with 4 tabs each

import { KarnatakaPOI, DamTabs, ImageReference } from '../../types/database';

// Selaulim Dam
export const selaulimDamData: KarnatakaPOI = {
  id: 'selaulim_dam',
  name: 'Selaulim Dam',
  category: 'dam',
  description: 'Major dam providing water supply to Goa, known for its scenic beauty',
  coordinates: { lat: 15.2000, lng: 74.1000 },
  banner_image: {
    storage_path: 'goa/dams/selaulim/banner.jpg',
    download_url: '',
    caption: 'Selaulim Dam',
    credit: 'Goa Tourism',
    alt_text: 'Selaulim Dam with scenic surroundings',
    uploaded_at: new Date()
  },
  icon_type: 'dam',
  created_at: new Date(),
  tabs: {
    size: 'Selaulim Dam has a height of about 42 meters and a length of about 1,200 meters. The dam has a storage capacity of about 1,200 million cubic meters and covers an area of about 200 square kilometers. The dam is equipped with 8 spillway gates and has a power generation capacity of about 140 MW. The reservoir created by the dam is known as Selaulim Reservoir.',
    rivers_associated: [
      'Zuari River',
      'Mandovi River (tributary)',
      'Arabian Sea (drainage basin)'
    ],
    facts_tourists: 'Selaulim Dam is a major multipurpose dam that provides water supply to Goa. The dam is surrounded by scenic hills and offers beautiful views of the surrounding landscape. The reservoir created by the dam is a popular destination for boating and fishing. The dam is also known for its architectural beauty and engineering marvel.',
    how_to_reach: 'Selaulim Dam is located about 50 km from Panaji and 30 km from Margao. By road, you can reach the dam via NH4A and then take a local road. The nearest railway station is Margao, from where you can take a taxi or bus. The nearest airport is Dabolim Airport (about 50 km away). Local transport including buses and taxis are available from nearby towns.'
  } as DamTabs
};

// Export all dams data
export const goaDamsData: KarnatakaPOI[] = [
  selaulimDamData
];

export default goaDamsData;

