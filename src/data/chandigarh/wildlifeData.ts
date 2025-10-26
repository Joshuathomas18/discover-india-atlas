// Chandigarh Wildlife Data
import { KarnatakaPOI } from '../../types/database';

export const sukhnaWildlifeData: KarnatakaPOI = {
  id: 'sukhna_wildlife_chandigarh',
  name: 'Sukhna Wildlife',
  category: 'wildlife',
  coordinates: { lat: 30.7333, lng: 76.7794 },
  description: 'Wildlife area around Sukhna Lake.',
  banner_image: {
    storage_path: 'chandigarh/wildlife/sukhna/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Sukhna Wildlife',
    credit: 'Unsplash',
    alt_text: 'Sukhna Wildlife',
    uploaded_at: new Date()
  },
  icon_type: 'bird',
  created_at: new Date(),
  tabs: {
    facts: 'Wildlife area around Sukhna Lake, important ecological zone',
    visiting_info: 'Open for visitors, bird watching available',
    animals_found: ['Various bird species', 'Aquatic life', 'Small mammals']
  }
};

export const shivalikWildlifeData: KarnatakaPOI = {
  id: 'shivalik_wildlife_chandigarh',
  name: 'Shivalik Wildlife',
  category: 'wildlife',
  coordinates: { lat: 30.7333, lng: 76.7794 },
  description: 'Wildlife area in Shivalik hills.',
  banner_image: {
    storage_path: 'chandigarh/wildlife/shivalik/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Shivalik Wildlife',
    credit: 'Unsplash',
    alt_text: 'Shivalik Wildlife',
    uploaded_at: new Date()
  },
  icon_type: 'bird',
  created_at: new Date(),
  tabs: {
    facts: 'Wildlife area in Shivalik hills, important ecological zone',
    visiting_info: 'Open for visitors, nature trails available',
    animals_found: ['Mountain birds', 'Small mammals', 'Reptiles']
  }
};

export const kasauliWildlifeData: KarnatakaPOI = {
  id: 'kasauli_wildlife_chandigarh',
  name: 'Kasauli Wildlife',
  category: 'wildlife',
  coordinates: { lat: 30.8986, lng: 76.9653 },
  description: 'Wildlife area around Kasauli.',
  banner_image: {
    storage_path: 'chandigarh/wildlife/kasauli/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Kasauli Wildlife',
    credit: 'Unsplash',
    alt_text: 'Kasauli Wildlife',
    uploaded_at: new Date()
  },
  icon_type: 'bird',
  created_at: new Date(),
  tabs: {
    facts: 'Wildlife area around Kasauli hill station',
    visiting_info: 'Open for visitors, nature walks available',
    animals_found: ['Hill station birds', 'Small mammals', 'Mountain life']
  }
};

export const patialaWildlifeData: KarnatakaPOI = {
  id: 'patiala_wildlife_chandigarh',
  name: 'Patiala Wildlife',
  category: 'wildlife',
  coordinates: { lat: 30.7041, lng: 76.7179 },
  description: 'Wildlife area around Patiala.',
  banner_image: {
    storage_path: 'chandigarh/wildlife/patiala/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Patiala Wildlife',
    credit: 'Unsplash',
    alt_text: 'Patiala Wildlife',
    uploaded_at: new Date()
  },
  icon_type: 'bird',
  created_at: new Date(),
  tabs: {
    facts: 'Wildlife area around Patiala, important ecological zone',
    visiting_info: 'Open for visitors, nature trails available',
    animals_found: ['Various bird species', 'Small mammals', 'Local wildlife']
  }
};

export default [sukhnaWildlifeData, shivalikWildlifeData, kasauliWildlifeData, patialaWildlifeData];

