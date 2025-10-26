// Delhi Rivers Data
import { KarnatakaPOI } from '../../types/database';

export const yamunaData: KarnatakaPOI = {
  id: 'yamuna_delhi',
  name: 'Yamuna',
  category: 'river',
  coordinates: { lat: 28.6139, lng: 77.2090 },
  description: 'Major river flowing through Delhi.',
  banner_image: {
    storage_path: 'delhi/rivers/yamuna/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Yamuna River in Delhi',
    credit: 'Unsplash',
    alt_text: 'Yamuna River flowing through Delhi',
    uploaded_at: new Date()
  },
  icon_type: 'river',
  created_at: new Date(),
  tabs: {
    facts: 'Sacred river, major tributary of Ganges, flows through Delhi',
    fishes_found: ['Various freshwater fish', 'Local species', 'Migratory birds'],
    how_to_reach: 'Accessible from various points in Delhi, boat rides available'
  }
};

export const hindonData: KarnatakaPOI = {
  id: 'hindon_delhi',
  name: 'Hindon',
  category: 'river',
  coordinates: { lat: 28.4595, lng: 77.0266 },
  description: 'Tributary of Yamuna river.',
  banner_image: {
    storage_path: 'delhi/rivers/hindon/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Hindon River',
    credit: 'Unsplash',
    alt_text: 'Hindon River tributary',
    uploaded_at: new Date()
  },
  icon_type: 'river',
  created_at: new Date(),
  tabs: {
    facts: 'Tributary of Yamuna, flows through NCR region',
    fishes_found: ['Local fish species', 'Freshwater fish', 'Aquatic life'],
    how_to_reach: 'Accessible from Ghaziabad and Noida areas'
  }
};

export const sabarmatiData: KarnatakaPOI = {
  id: 'sabarmati_delhi',
  name: 'Sabarmati',
  category: 'river',
  coordinates: { lat: 28.5355, lng: 77.3910 },
  description: 'River flowing through the NCR region.',
  banner_image: {
    storage_path: 'delhi/rivers/sabarmati/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Sabarmati River',
    credit: 'Unsplash',
    alt_text: 'Sabarmati River in NCR',
    uploaded_at: new Date()
  },
  icon_type: 'river',
  created_at: new Date(),
  tabs: {
    facts: 'River flowing through NCR, important for local ecosystem',
    fishes_found: ['Local aquatic species', 'Freshwater fish', 'River life'],
    how_to_reach: 'Accessible from various points in NCR region'
  }
};

export default [yamunaData, hindonData, sabarmatiData];

