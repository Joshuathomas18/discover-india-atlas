// Kerala Rivers Data
// Comprehensive data for major rivers in Kerala with 3 tabs each

import { KarnatakaPOI, RiverTabs, ImageReference } from '../../types/database';

// Periyar River
export const periyarRiverData: KarnatakaPOI = {
  id: 'periyar_river',
  name: 'Periyar River',
  category: 'river',
  description: 'Longest river in Kerala, flowing through the Western Ghats and supporting diverse ecosystems',
  coordinates: { lat: 10.0000, lng: 76.5000 },
  banner_image: {
    storage_path: 'kerala/rivers/periyar/banner.jpg',
    download_url: '',
    caption: 'Periyar River flowing through Kerala',
    credit: 'Kerala Tourism',
    alt_text: 'Periyar River with lush vegetation',
    uploaded_at: new Date()
  },
  icon_type: 'wave',
  created_at: new Date(),
  tabs: {
    facts: 'The Periyar River is the longest river in Kerala, flowing for about 244 km through the Western Ghats. It originates from the Sivagiri hills in Tamil Nadu and flows through Kerala before emptying into the Arabian Sea. The river is known for its rich biodiversity and supports various wildlife species. It is also a major source of water for irrigation and hydroelectric power generation in Kerala.',
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
    how_to_reach: 'The Periyar River can be accessed from various points in Kerala. The river flows near several towns including Kochi, Aluva, and Perumbavoor. From Kochi, you can reach the river by road (about 20-30 km). The nearest railway station is Aluva, and the nearest airport is Cochin International Airport. The river is best visited during the monsoon season (June-September) when it has sufficient water flow.'
  } as RiverTabs
};

// Bharathapuzha River
export const bharathapuzhaRiverData: KarnatakaPOI = {
  id: 'bharathapuzha_river',
  name: 'Bharathapuzha River',
  category: 'river',
  description: 'Second longest river in Kerala, known for its cultural significance and scenic beauty',
  coordinates: { lat: 10.5000, lng: 76.0000 },
  banner_image: {
    storage_path: 'kerala/rivers/bharathapuzha/banner.jpg',
    download_url: '',
    caption: 'Bharathapuzha River in Kerala',
    credit: 'Kerala Tourism',
    alt_text: 'Bharathapuzha River with scenic surroundings',
    uploaded_at: new Date()
  },
  icon_type: 'wave',
  created_at: new Date(),
  tabs: {
    facts: 'The Bharathapuzha River, also known as the Nila River, is the second longest river in Kerala, flowing for about 209 km. It originates from the Anamalai hills in Tamil Nadu and flows through Kerala before emptying into the Arabian Sea. The river is known for its cultural significance and is often referred to as the "River of Kerala" due to its importance in the state\'s literature and culture.',
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
    how_to_reach: 'The Bharathapuzha River can be accessed from various locations in Kerala. The river flows near several towns including Palakkad, Thrissur, and Malappuram. From Palakkad, you can reach the river by road (about 10-20 km). The nearest railway station is Palakkad Junction, and the nearest airport is Cochin International Airport. The river is best visited during the monsoon season (June-September) when it has sufficient water flow.'
  } as RiverTabs
};

// Pamba River
export const pambaRiverData: KarnatakaPOI = {
  id: 'pamba_river',
  name: 'Pamba River',
  category: 'river',
  description: 'Sacred river flowing through the Western Ghats, known for its religious significance',
  coordinates: { lat: 9.5000, lng: 76.5000 },
  banner_image: {
    storage_path: 'kerala/rivers/pamba/banner.jpg',
    download_url: '',
    caption: 'Pamba River in Kerala',
    credit: 'Kerala Tourism',
    alt_text: 'Pamba River with temple surroundings',
    uploaded_at: new Date()
  },
  icon_type: 'wave',
  created_at: new Date(),
  tabs: {
    facts: 'The Pamba River is a sacred river in Kerala, flowing for about 176 km through the Western Ghats. It originates from the Pulachimalai hills and flows through Kerala before emptying into the Arabian Sea. The river is known for its religious significance, especially in relation to the Sabarimala temple. It is considered one of the most sacred rivers in Kerala.',
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
    how_to_reach: 'The Pamba River can be accessed from various points in Kerala. The river flows near several towns including Pathanamthitta, Alappuzha, and Kottayam. From Pathanamthitta, you can reach the river by road (about 15-25 km). The nearest railway station is Chengannur, and the nearest airport is Cochin International Airport. The river is best visited during the monsoon season (June-September) when it has sufficient water flow.'
  } as RiverTabs
};

// Export all rivers data
export const keralaRiversData: KarnatakaPOI[] = [
  periyarRiverData,
  bharathapuzhaRiverData,
  pambaRiverData
];

export default keralaRiversData;

