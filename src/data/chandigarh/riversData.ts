// Chandigarh Rivers Data
import { KarnatakaPOI } from '../../types/database';

export const ghaggarData: KarnatakaPOI = {
  id: 'ghaggar_chandigarh',
  name: 'Ghaggar',
  category: 'river',
  coordinates: { lat: 30.7333, lng: 76.7794 },
  description: 'Major river flowing through Chandigarh.',
  banner_image: {
    storage_path: 'chandigarh/rivers/ghaggar/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Ghaggar River',
    credit: 'Unsplash',
    alt_text: 'Ghaggar River',
    uploaded_at: new Date()
  },
  icon_type: 'river',
  created_at: new Date(),
  tabs: {
    facts: 'Major river flowing through Chandigarh region',
    fishes_found: ['Various freshwater fish', 'Local species', 'Aquatic life'],
    how_to_reach: 'Accessible from various points in Chandigarh region'
  }
};

export const sukhnaData: KarnatakaPOI = {
  id: 'sukhna_chandigarh',
  name: 'Sukhna',
  category: 'river',
  coordinates: { lat: 30.7333, lng: 76.7794 },
  description: 'Artificial lake in Chandigarh.',
  banner_image: {
    storage_path: 'chandigarh/rivers/sukhna/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Sukhna Lake',
    credit: 'Unsplash',
    alt_text: 'Sukhna Lake',
    uploaded_at: new Date()
  },
  icon_type: 'river',
  created_at: new Date(),
  tabs: {
    facts: 'Artificial lake in Chandigarh, popular tourist spot',
    fishes_found: ['Various fish species', 'Aquatic life', 'Birds'],
    how_to_reach: 'Located in Chandigarh, easily accessible'
  }
};

export const markandaData: KarnatakaPOI = {
  id: 'markanda_chandigarh',
  name: 'Markanda',
  category: 'river',
  coordinates: { lat: 30.7041, lng: 76.7179 },
  description: 'River flowing through the region.',
  banner_image: {
    storage_path: 'chandigarh/rivers/markanda/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Markanda River',
    credit: 'Unsplash',
    alt_text: 'Markanda River',
    uploaded_at: new Date()
  },
  icon_type: 'river',
  created_at: new Date(),
  tabs: {
    facts: 'River flowing through the Chandigarh region',
    fishes_found: ['Local fish species', 'Freshwater fish', 'Aquatic life'],
    how_to_reach: 'Accessible from various points in the region'
  }
};

export default [ghaggarData, sukhnaData, markandaData];

