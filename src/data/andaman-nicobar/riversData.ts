// Andaman and Nicobar Islands Rivers Data
import { KarnatakaPOI } from '../../types/database';

export const kalpongData: KarnatakaPOI = {
  id: 'kalpong_andaman',
  name: 'Kalpong',
  category: 'river',
  coordinates: { lat: 13.2500, lng: 93.0000 },
  description: 'River flowing through Andaman Islands.',
  banner_image: {
    storage_path: 'andaman-nicobar/rivers/kalpong/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Kalpong River',
    credit: 'Unsplash',
    alt_text: 'Kalpong River',
    uploaded_at: new Date()
  },
  icon_type: 'river',
  created_at: new Date(),
  tabs: {
    facts: 'River flowing through Andaman Islands',
    fishes_found: ['Local fish species', 'Freshwater fish', 'Aquatic life'],
    how_to_reach: 'Accessible from various points in Andaman Islands'
  }
};

export const austinData: KarnatakaPOI = {
  id: 'austin_andaman',
  name: 'Austin',
  category: 'river',
  coordinates: { lat: 12.9167, lng: 92.9167 },
  description: 'River flowing through Middle Andaman.',
  banner_image: {
    storage_path: 'andaman-nicobar/rivers/austin/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Austin River',
    credit: 'Unsplash',
    alt_text: 'Austin River',
    uploaded_at: new Date()
  },
  icon_type: 'river',
  created_at: new Date(),
  tabs: {
    facts: 'River flowing through Middle Andaman',
    fishes_found: ['Local fish species', 'Freshwater fish', 'Aquatic life'],
    how_to_reach: 'Accessible from Middle Andaman region'
  }
};

export const galatheaData: KarnatakaPOI = {
  id: 'galathea_andaman',
  name: 'Galathea',
  category: 'river',
  coordinates: { lat: 7.0000, lng: 93.7500 },
  description: 'River flowing through Great Nicobar.',
  banner_image: {
    storage_path: 'andaman-nicobar/rivers/galathea/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Galathea River',
    credit: 'Unsplash',
    alt_text: 'Galathea River',
    uploaded_at: new Date()
  },
  icon_type: 'river',
  created_at: new Date(),
  tabs: {
    facts: 'River flowing through Great Nicobar',
    fishes_found: ['Local fish species', 'Freshwater fish', 'Aquatic life'],
    how_to_reach: 'Accessible from Great Nicobar region'
  }
};

export default [kalpongData, austinData, galatheaData];

