// Jammu and Kashmir Rivers Data
import { KarnatakaPOI } from '../../types/database';

export const jhelumData: KarnatakaPOI = {
  id: 'jhelum_jk',
  name: 'Jhelum',
  category: 'river',
  coordinates: { lat: 34.0837, lng: 74.7973 },
  description: 'Major river flowing through Kashmir Valley.',
  banner_image: {
    storage_path: 'jammu-kashmir/rivers/jhelum/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Jhelum River',
    credit: 'Unsplash',
    alt_text: 'Jhelum River flowing through Kashmir',
    uploaded_at: new Date()
  },
  icon_type: 'river',
  created_at: new Date(),
  tabs: {
    facts: 'Major river flowing through Kashmir Valley, important for irrigation',
    fishes_found: ['Trout', 'Snow trout', 'Local fish species'],
    how_to_reach: 'Accessible from various points in Kashmir Valley'
  }
};

export const chenabData: KarnatakaPOI = {
  id: 'chenab_jk',
  name: 'Chenab',
  category: 'river',
  coordinates: { lat: 32.7266, lng: 74.8570 },
  description: 'Major river flowing through Jammu region.',
  banner_image: {
    storage_path: 'jammu-kashmir/rivers/chenab/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Chenab River',
    credit: 'Unsplash',
    alt_text: 'Chenab River',
    uploaded_at: new Date()
  },
  icon_type: 'river',
  created_at: new Date(),
  tabs: {
    facts: 'Major river flowing through Jammu region, important for hydropower',
    fishes_found: ['Various fish species', 'Local species', 'Aquatic life'],
    how_to_reach: 'Accessible from various points in Jammu region'
  }
};

export const lidderData: KarnatakaPOI = {
  id: 'lidder_jk',
  name: 'Lidder',
  category: 'river',
  coordinates: { lat: 34.0161, lng: 75.3150 },
  description: 'River flowing through Pahalgam.',
  banner_image: {
    storage_path: 'jammu-kashmir/rivers/lidder/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Lidder River',
    credit: 'Unsplash',
    alt_text: 'Lidder River in Pahalgam',
    uploaded_at: new Date()
  },
  icon_type: 'river',
  created_at: new Date(),
  tabs: {
    facts: 'River flowing through Pahalgam, important for tourism',
    fishes_found: ['Trout', 'Local fish species', 'Mountain fish'],
    how_to_reach: 'Accessible from Pahalgam'
  }
};

export default [jhelumData, chenabData, lidderData];

