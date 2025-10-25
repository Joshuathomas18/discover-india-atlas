// Karnataka Forests Data
// Comprehensive data for major forests in Karnataka with 3 tabs each

import { KarnatakaPOI, ForestTabs, ImageReference } from '../../types/database';

export const sharavathiValleyForestData: KarnatakaPOI = {
  id: 'sharavathi_valley_forest',
  name: 'Sharavathi Valley Forest',
  category: 'forest',
  description: 'Dense forest area around Sharavathi River with rich biodiversity',
  coordinates: { lat: 14.2333, lng: 74.8833 },
  banner_image: {
    storage_path: 'karnataka/forests/sharavathi_valley/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Sharavathi Valley Forest',
    credit: 'Unsplash',
    alt_text: 'Sharavathi Valley Forest with dense vegetation',
    uploaded_at: new Date()
  },
  icon_type: 'tree',
  created_at: new Date(),
  tabs: {
    facts: 'Sharavathi Valley Forest is located in the Shimoga district and covers a vast area around the Sharavathi River. It is known for its dense vegetation, waterfalls, and rich biodiversity. The forest is home to various species of flora and fauna and is a popular destination for nature lovers and trekkers.',
    visiting_info: 'The forest can be visited throughout the year, but the best time is from October to May. Entry is free, but visitors need to follow forest department guidelines. Trekking permits may be required for certain areas. Accommodation options include forest lodges and nearby resorts.',
    animals_found: [
      'Indian Elephant',
      'Leopard',
      'Sambar Deer',
      'Spotted Deer',
      'Wild Boar',
      'Sloth Bear',
      'Various birds',
      'Reptiles',
      'Butterflies'
    ]
  } as ForestTabs
};

export const brahmagiriForestData: KarnatakaPOI = {
  id: 'brahmagiri_forest',
  name: 'Brahmagiri Forest',
  category: 'forest',
  description: 'Mountain forest area in the Western Ghats with trekking trails',
  coordinates: { lat: 12.0167, lng: 75.9500 },
  banner_image: {
    storage_path: 'karnataka/forests/brahmagiri/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Brahmagiri Forest',
    credit: 'Unsplash',
    alt_text: 'Brahmagiri Forest mountain area',
    uploaded_at: new Date()
  },
  icon_type: 'tree',
  created_at: new Date(),
  tabs: {
    facts: 'Brahmagiri Forest is located in the Kodagu district and is part of the Western Ghats. It is known for its mountain forests, trekking trails, and scenic beauty. The forest area is rich in biodiversity and offers opportunities for wildlife spotting and nature photography.',
    visiting_info: 'The forest is accessible for trekking and nature walks. Trekking permits are required and can be obtained from the forest department. Best time to visit is from October to May. Visitors should carry proper trekking gear and follow safety guidelines.',
    animals_found: [
      'Indian Elephant',
      'Leopard',
      'Sambar Deer',
      'Spotted Deer',
      'Wild Boar',
      'Various birds',
      'Reptiles',
      'Butterflies'
    ]
  } as ForestTabs
};

export const pushpagiriForestData: KarnatakaPOI = {
  id: 'pushpagiri_forest',
  name: 'Pushpagiri Forest',
  category: 'forest',
  description: 'Forest reserve known for its unique flora and fauna',
  coordinates: { lat: 12.5833, lng: 75.7500 },
  banner_image: {
    storage_path: 'karnataka/forests/pushpagiri/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Pushpagiri Forest',
    credit: 'Unsplash',
    alt_text: 'Pushpagiri Forest reserve',
    uploaded_at: new Date()
  },
  icon_type: 'tree',
  created_at: new Date(),
  tabs: {
    facts: 'Pushpagiri Forest is located in the Kodagu district and is known for its unique ecosystem. It is home to several endangered species and is an important part of the Western Ghats biodiversity hotspot. The forest offers opportunities for wildlife research and nature conservation activities.',
    visiting_info: 'The forest is accessible for research and educational purposes. Special permits are required for entry. Visitors should contact the forest department for permission and guidelines. Best time to visit is from October to May.',
    animals_found: [
      'Indian Elephant',
      'Leopard',
      'Sambar Deer',
      'Spotted Deer',
      'Wild Boar',
      'Various birds',
      'Reptiles',
      'Endangered species'
    ]
  } as ForestTabs
};

export const karnatakaForestsData = [
  sharavathiValleyForestData,
  brahmagiriForestData,
  pushpagiriForestData
];

export default karnatakaForestsData;
