// Rajasthan Rivers Data
// Comprehensive data for major rivers in Rajasthan with 3 tabs each

import { KarnatakaPOI, RiverTabs, ImageReference } from '../../types/database';

// Chambal River
export const chambalRiverData: KarnatakaPOI = {
  id: 'chambal_river',
  name: 'Chambal River',
  category: 'river',
  description: 'Major river flowing through Rajasthan, known for its clean water and wildlife sanctuary',
  coordinates: { lat: 25.5000, lng: 76.0000 },
  banner_image: {
    storage_path: 'rajasthan/rivers/chambal/banner.jpg',
    download_url: '',
    caption: 'Chambal River flowing through Rajasthan',
    credit: 'Rajasthan Tourism',
    alt_text: 'Chambal River with clean water',
    uploaded_at: new Date()
  },
  icon_type: 'wave',
  created_at: new Date(),
  tabs: {
    facts: 'The Chambal River is one of the cleanest rivers in India, flowing through Rajasthan, Madhya Pradesh, and Uttar Pradesh. It originates from the Janapav hills in Madhya Pradesh and flows for about 960 km before joining the Yamuna River. The river is famous for its National Chambal Sanctuary, which is home to endangered species like the Gharial crocodile, Gangetic dolphin, and various bird species. The river has been relatively free from pollution due to its remote location and the efforts of conservation organizations.',
    fishes: [
      'Gangetic Dolphin (Platanista gangetica)',
      'Gharial (Gavialis gangeticus)',
      'Mugger Crocodile (Crocodylus palustris)',
      'Mahseer (Tor tor)',
      'Catla (Catla catla)',
      'Rohu (Labeo rohita)',
      'Mrigal (Cirrhinus mrigala)',
      'Common Carp (Cyprinus carpio)'
    ],
    how_to_reach: 'The Chambal River can be accessed from various points in Rajasthan. The nearest major cities are Kota and Sawai Madhopur. From Kota, you can reach the river by road (about 30 km). From Sawai Madhopur, the river is accessible via road (about 50 km). The National Chambal Sanctuary can be visited by boat from Dholpur, which is well-connected by road and rail. The nearest railway station is Kota Junction, and the nearest airport is Jaipur Airport (about 200 km away).'
  } as RiverTabs
};

// Banas River
export const banasRiverData: KarnatakaPOI = {
  id: 'banas_river',
  name: 'Banas River',
  category: 'river',
  description: 'Seasonal river flowing through Rajasthan, important for agriculture and wildlife',
  coordinates: { lat: 25.8000, lng: 75.5000 },
  banner_image: {
    storage_path: 'rajasthan/rivers/banas/banner.jpg',
    download_url: '',
    caption: 'Banas River in Rajasthan',
    credit: 'Rajasthan Tourism',
    alt_text: 'Banas River flowing through Rajasthan',
    uploaded_at: new Date()
  },
  icon_type: 'wave',
  created_at: new Date(),
  tabs: {
    facts: 'The Banas River is a seasonal river that flows through Rajasthan, originating from the Aravalli Range near Kumbhalgarh. It flows for about 512 km and is a tributary of the Chambal River. The river is crucial for agriculture in the region, especially during the monsoon season. It flows through several districts including Rajsamand, Bhilwara, Tonk, and Sawai Madhopur. The river supports various wildlife species and is an important water source for the Ranthambore National Park.',
    fishes: [
      'Mahseer (Tor tor)',
      'Catla (Catla catla)',
      'Rohu (Labeo rohita)',
      'Mrigal (Cirrhinus mrigala)',
      'Common Carp (Cyprinus carpio)',
      'Silver Carp (Hypophthalmichthys molitrix)',
      'Grass Carp (Ctenopharyngodon idella)',
      'Catfish (Siluriformes)'
    ],
    how_to_reach: 'The Banas River can be accessed from various locations in Rajasthan. The river flows near several towns including Rajsamand, Bhilwara, and Tonk. From Jaipur, you can reach the river by road (about 100-150 km depending on the location). The nearest railway stations are Rajsamand, Bhilwara, and Tonk. The nearest airport is Jaipur Airport. The river is best visited during the monsoon season (July-September) when it has sufficient water flow.'
  } as RiverTabs
};

// Luni River
export const luniRiverData: KarnatakaPOI = {
  id: 'luni_river',
  name: 'Luni River',
  category: 'river',
  description: 'The only river in Rajasthan that flows into the Arabian Sea, known for its saline water',
  coordinates: { lat: 26.0000, lng: 71.0000 },
  banner_image: {
    storage_path: 'rajasthan/rivers/luni/banner.jpg',
    download_url: '',
    caption: 'Luni River in Rajasthan',
    credit: 'Rajasthan Tourism',
    alt_text: 'Luni River flowing through Rajasthan desert',
    uploaded_at: new Date()
  },
  icon_type: 'wave',
  created_at: new Date(),
  tabs: {
    facts: 'The Luni River is unique as it is the only river in Rajasthan that flows into the Arabian Sea. It originates from the Pushkar valley in the Aravalli Range and flows for about 495 km through Rajasthan and Gujarat before emptying into the Arabian Sea. The river is known for its saline water, especially in its lower reaches, which makes it unsuitable for drinking but supports unique ecosystems. The river flows through the Thar Desert and is crucial for the survival of desert wildlife and vegetation.',
    fishes: [
      'Desert Catfish (Clarias batrachus)',
      'Tilapia (Oreochromis mossambicus)',
      'Common Carp (Cyprinus carpio)',
      'Silver Carp (Hypophthalmichthys molitrix)',
      'Grass Carp (Ctenopharyngodon idella)',
      'Rohu (Labeo rohita)',
      'Catla (Catla catla)',
      'Mrigal (Cirrhinus mrigala)'
    ],
    how_to_reach: 'The Luni River can be accessed from various points in Rajasthan. The river flows through several districts including Ajmer, Pali, Jodhpur, Barmer, and Jalore. From Jodhpur, you can reach the river by road (about 50-100 km depending on the location). The nearest railway stations are Jodhpur, Pali, and Barmer. The nearest airport is Jodhpur Airport. The river is best visited during the monsoon season (July-September) when it has water flow, as it often dries up during other seasons.'
  } as RiverTabs
};

// Export all rivers data
export const rajasthanRiversData: KarnatakaPOI[] = [
  chambalRiverData,
  banasRiverData,
  luniRiverData
];

export default rajasthanRiversData;

