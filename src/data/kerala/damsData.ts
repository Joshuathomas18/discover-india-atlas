// Kerala Dams Data
// Comprehensive data for major dams in Kerala with 4 tabs each

import { KarnatakaPOI, DamTabs, ImageReference } from '../../types/database';

// Idukki Dam
export const idukkiDamData: KarnatakaPOI = {
  id: 'idukki_dam',
  name: 'Idukki Dam',
  category: 'dam',
  description: 'Arch dam providing hydroelectric power to Kerala, known for its scenic beauty',
  coordinates: { lat: 9.8333, lng: 76.9167 },
  banner_image: {
    storage_path: 'kerala/dams/idukki/banner.jpg',
    download_url: '',
    caption: 'Idukki Dam',
    credit: 'Kerala Tourism',
    alt_text: 'Idukki Dam with scenic surroundings',
    uploaded_at: new Date()
  },
  icon_type: 'dam',
  created_at: new Date(),
  tabs: {
    size: 'Idukki Dam has a height of about 169 meters and a length of about 365 meters. The dam has a storage capacity of about 1,996 million cubic meters and covers an area of about 60 square kilometers. The dam is equipped with 6 spillway gates and has a power generation capacity of about 780 MW. The reservoir created by the dam is known as Idukki Reservoir.',
    rivers_associated: [
      'Periyar River',
      'Mullayar River (tributary)',
      'Arabian Sea (drainage basin)'
    ],
    facts_tourists: 'Idukki Dam is a major multipurpose dam that provides hydroelectric power to Kerala. The dam is surrounded by scenic hills and offers beautiful views of the surrounding landscape. The reservoir created by the dam is a popular destination for boating and fishing. The dam is also known for its architectural beauty and engineering marvel.',
    how_to_reach: 'Idukki Dam is located about 40 km from Kottayam and 120 km from Kochi. By road, you can reach the dam via NH220 and then take a local road. The nearest railway station is Kottayam Junction, from where you can take a taxi or bus. The nearest airport is Cochin International Airport (about 120 km away). Local transport including buses and taxis are available from nearby towns.'
  } as DamTabs
};

// Mullaperiyar Dam
export const mullaperiyarDamData: KarnatakaPOI = {
  id: 'mullaperiyar_dam',
  name: 'Mullaperiyar Dam',
  category: 'dam',
  description: 'Historic dam providing water to Tamil Nadu, known for its scenic beauty',
  coordinates: { lat: 9.5000, lng: 77.1667 },
  banner_image: {
    storage_path: 'kerala/dams/mullaperiyar/banner.jpg',
    download_url: '',
    caption: 'Mullaperiyar Dam',
    credit: 'Kerala Tourism',
    alt_text: 'Mullaperiyar Dam with scenic surroundings',
    uploaded_at: new Date()
  },
  icon_type: 'dam',
  created_at: new Date(),
  tabs: {
    size: 'Mullaperiyar Dam has a height of about 53 meters and a length of about 365 meters. The dam has a storage capacity of about 443 million cubic meters and covers an area of about 20 square kilometers. The dam is equipped with 13 spillway gates and has a power generation capacity of about 175 MW. The reservoir created by the dam is known as Mullaperiyar Reservoir.',
    rivers_associated: [
      'Periyar River',
      'Mullayar River (tributary)',
      'Arabian Sea (drainage basin)'
    ],
    facts_tourists: 'Mullaperiyar Dam is a historic dam that provides water to Tamil Nadu for irrigation purposes. The dam is surrounded by scenic hills and offers beautiful views of the surrounding landscape. The reservoir created by the dam is a popular destination for boating and fishing. The dam is also known for its historical significance and engineering marvel.',
    how_to_reach: 'Mullaperiyar Dam is located about 60 km from Kottayam and 140 km from Kochi. By road, you can reach the dam via NH220 and then take a local road. The nearest railway station is Kottayam Junction, from where you can take a taxi or bus. The nearest airport is Cochin International Airport (about 140 km away). Local transport including buses and taxis are available from nearby towns.'
  } as DamTabs
};

// Export all dams data
export const keralaDamsData: KarnatakaPOI[] = [
  idukkiDamData,
  mullaperiyarDamData
];

export default keralaDamsData;

