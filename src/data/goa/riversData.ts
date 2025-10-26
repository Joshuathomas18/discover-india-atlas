// Goa Rivers Data
// Comprehensive data for major rivers in Goa with 3 tabs each

import { KarnatakaPOI, RiverTabs, ImageReference } from '../../types/database';

// Mandovi River
export const mandoviRiverData: KarnatakaPOI = {
  id: 'mandovi_river',
  name: 'Mandovi River',
  category: 'river',
  description: 'Major river flowing through Goa, known for its scenic beauty and water sports',
  coordinates: { lat: 15.5000, lng: 73.8000 },
  banner_image: {
    storage_path: 'goa/rivers/mandovi/banner.jpg',
    download_url: '',
    caption: 'Mandovi River flowing through Goa',
    credit: 'Goa Tourism',
    alt_text: 'Mandovi River with scenic views',
    uploaded_at: new Date()
  },
  icon_type: 'wave',
  created_at: new Date(),
  tabs: {
    facts: 'The Mandovi River is one of the major rivers in Goa, flowing for about 77 km through the state. It originates from the Western Ghats and flows through Goa before emptying into the Arabian Sea. The river is known for its scenic beauty and is a popular destination for water sports and boat cruises. It is also an important source of water for irrigation and drinking purposes.',
    fishes: [
      'Mahseer (Tor khudree)',
      'Catla (Catla catla)',
      'Rohu (Labeo rohita)',
      'Mrigal (Cirrhinus mrigala)',
      'Common Carp (Cyprinus carpio)',
      'Silver Carp (Hypophthalmichthys molitrix)',
      'Grass Carp (Ctenopharyngodon idella)',
      'Catfish (Siluriformes)'
    ],
    how_to_reach: 'The Mandovi River can be accessed from various points in Goa. The river flows near several towns including Panaji, Old Goa, and Ponda. From Panaji, you can reach the river by road (about 5-10 km). The nearest railway station is Thivim, and the nearest airport is Dabolim Airport. The river is best visited during the monsoon season (June-September) when it has sufficient water flow.'
  } as RiverTabs
};

// Zuari River
export const zuariRiverData: KarnatakaPOI = {
  id: 'zuari_river',
  name: 'Zuari River',
  category: 'river',
  description: 'Major river in Goa, known for its scenic beauty and water sports',
  coordinates: { lat: 15.3000, lng: 73.9000 },
  banner_image: {
    storage_path: 'goa/rivers/zuari/banner.jpg',
    download_url: '',
    caption: 'Zuari River in Goa',
    credit: 'Goa Tourism',
    alt_text: 'Zuari River with scenic surroundings',
    uploaded_at: new Date()
  },
  icon_type: 'wave',
  created_at: new Date(),
  tabs: {
    facts: 'The Zuari River is one of the major rivers in Goa, flowing for about 34 km through the state. It originates from the Western Ghats and flows through Goa before emptying into the Arabian Sea. The river is known for its scenic beauty and is a popular destination for water sports and boat cruises. It is also an important source of water for irrigation and drinking purposes.',
    fishes: [
      'Mahseer (Tor khudree)',
      'Catla (Catla catla)',
      'Rohu (Labeo rohita)',
      'Mrigal (Cirrhinus mrigala)',
      'Common Carp (Cyprinus carpio)',
      'Silver Carp (Hypophthalmichthys molitrix)',
      'Grass Carp (Ctenopharyngodon idella)',
      'Catfish (Siluriformes)'
    ],
    how_to_reach: 'The Zuari River can be accessed from various locations in Goa. The river flows near several towns including Margao, Vasco da Gama, and Ponda. From Margao, you can reach the river by road (about 10-15 km). The nearest railway station is Margao, and the nearest airport is Dabolim Airport. The river is best visited during the monsoon season (June-September) when it has sufficient water flow.'
  } as RiverTabs
};

// Export all rivers data
export const goaRiversData: KarnatakaPOI[] = [
  mandoviRiverData,
  zuariRiverData
];

export default goaRiversData;

