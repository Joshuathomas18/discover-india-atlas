// Karnataka Rivers Data
// Comprehensive data for major rivers in Karnataka with 3 tabs each

import { KarnatakaPOI, RiverTabs, ImageReference } from '../../types/database';

export const kaveriRiverData: KarnatakaPOI = {
  id: 'kaveri_river',
  name: 'Kaveri River',
  category: 'river',
  description: 'Sacred river of South India, lifeline of Karnataka and Tamil Nadu',
  coordinates: { lat: 12.4167, lng: 75.5167 },
  banner_image: {
    storage_path: 'karnataka/rivers/kaveri/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Kaveri River flowing through Karnataka',
    credit: 'Unsplash',
    alt_text: 'Kaveri River with lush green surroundings',
    uploaded_at: new Date()
  },
  icon_type: 'wave',
  created_at: new Date(),
  tabs: {
    facts: 'The Kaveri River is one of the major rivers of India, flowing through Karnataka and Tamil Nadu. It originates from Talakaveri in the Western Ghats of Karnataka and flows for about 765 km before emptying into the Bay of Bengal. The river is considered sacred by Hindus and is often called the "Ganga of the South". It supports agriculture in both Karnataka and Tamil Nadu through extensive irrigation systems.',
    fishes: [
      'Mahseer (Tor khudree)',
      'Catla (Catla catla)',
      'Rohu (Labeo rohita)',
      'Mrigal (Cirrhinus mrigala)',
      'Common carp (Cyprinus carpio)',
      'Silver carp (Hypophthalmichthys molitrix)',
      'Grass carp (Ctenopharyngodon idella)',
      'Tilapia (Oreochromis mossambicus)'
    ],
    how_to_reach: 'The Kaveri River can be accessed from multiple points in Karnataka. Major access points include: 1) Talakaveri (origin) - 8 km from Bhagamandala, accessible by road from Madikeri. 2) Srirangapatna - 15 km from Mysuru, well connected by road and rail. 3) Shivanasamudra Falls - 85 km from Bengaluru, accessible by road. 4) Hogenakkal Falls - border of Karnataka and Tamil Nadu, accessible from Dharmapuri. Best time to visit is during monsoon (June-September) when the river is in full flow.'
  } as RiverTabs
};

export const krishnaRiverData: KarnatakaPOI = {
  id: 'krishna_river',
  name: 'Krishna River',
  category: 'river',
  description: 'One of the longest rivers in India, flowing through Maharashtra, Karnataka, and Andhra Pradesh',
  coordinates: { lat: 15.5000, lng: 76.0000 },
  banner_image: {
    storage_path: 'karnataka/rivers/krishna/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Krishna River in Karnataka',
    credit: 'Unsplash',
    alt_text: 'Krishna River flowing through Karnataka',
    uploaded_at: new Date()
  },
  icon_type: 'wave',
  created_at: new Date(),
  tabs: {
    facts: 'The Krishna River is one of the longest rivers in India, with a total length of about 1,400 km. It originates from Mahabaleshwar in Maharashtra and flows through Karnataka and Andhra Pradesh before emptying into the Bay of Bengal. The river basin covers an area of about 258,948 sq km. Major tributaries include the Tungabhadra, Koyna, and Bhima rivers. The Krishna River is crucial for irrigation and hydroelectric power generation in the region.',
    fishes: [
      'Mahseer (Tor khudree)',
      'Catla (Catla catla)',
      'Rohu (Labeo rohita)',
      'Mrigal (Cirrhinus mrigala)',
      'Common carp (Cyprinus carpio)',
      'Silver carp (Hypophthalmichthys molitrix)',
      'Grass carp (Ctenopharyngodon idella)',
      'Tilapia (Oreochromis mossambicus)',
      'Pangasius (Pangasius pangasius)'
    ],
    how_to_reach: 'The Krishna River in Karnataka can be accessed from several points: 1) Almatti Dam - 50 km from Bijapur, accessible by road. 2) Narayanpur - 30 km from Raichur, well connected by road and rail. 3) Srisailam - border area, accessible from Kurnool. 4) Vijayawada - downstream area, accessible by road, rail, and air. The best time to visit is during monsoon (June-September) and post-monsoon (October-November) when the river is in full flow.'
  } as RiverTabs
};

export const karnatakaRiversData = [
  kaveriRiverData,
  krishnaRiverData,
  // Additional rivers will be added here
];

export default karnatakaRiversData;
