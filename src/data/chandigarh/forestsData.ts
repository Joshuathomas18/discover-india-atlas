// Chandigarh Forests Data
import { KarnatakaPOI } from '../../types/database';

export const sukhnaForestData: KarnatakaPOI = {
  id: 'sukhna_forest_chandigarh',
  name: 'Sukhna Forest',
  category: 'forest',
  coordinates: { lat: 30.7333, lng: 76.7794 },
  description: 'Forest area around Sukhna Lake.',
  banner_image: {
    storage_path: 'chandigarh/forests/sukhna/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Sukhna Forest',
    credit: 'Unsplash',
    alt_text: 'Sukhna Forest',
    uploaded_at: new Date()
  },
  icon_type: 'forest',
  created_at: new Date(),
  tabs: {
    facts: 'Forest area around Sukhna Lake, important ecological zone',
    visiting_info: 'Open for nature walks, eco-tourism',
    animals_found: ['Various bird species', 'Aquatic life', 'Small mammals']
  }
};

export const shivalikForestData: KarnatakaPOI = {
  id: 'shivalik_forest_chandigarh',
  name: 'Shivalik Forest',
  category: 'forest',
  coordinates: { lat: 30.7333, lng: 76.7794 },
  description: 'Forest area in Shivalik hills.',
  banner_image: {
    storage_path: 'chandigarh/forests/shivalik/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Shivalik Forest',
    credit: 'Unsplash',
    alt_text: 'Shivalik Forest',
    uploaded_at: new Date()
  },
  icon_type: 'forest',
  created_at: new Date(),
  tabs: {
    facts: 'Forest area in Shivalik hills, important ecological zone',
    visiting_info: 'Open for hiking, nature trails',
    animals_found: ['Mountain birds', 'Small mammals', 'Reptiles']
  }
};

export const kasauliForestData: KarnatakaPOI = {
  id: 'kasauli_forest_chandigarh',
  name: 'Kasauli Forest',
  category: 'forest',
  coordinates: { lat: 30.8986, lng: 76.9653 },
  description: 'Forest area around Kasauli.',
  banner_image: {
    storage_path: 'chandigarh/forests/kasauli/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Kasauli Forest',
    credit: 'Unsplash',
    alt_text: 'Kasauli Forest',
    uploaded_at: new Date()
  },
  icon_type: 'forest',
  created_at: new Date(),
  tabs: {
    facts: 'Forest area around Kasauli hill station',
    visiting_info: 'Open for nature walks, scenic trails',
    animals_found: ['Hill station birds', 'Small mammals', 'Mountain life']
  }
};

export default [sukhnaForestData, shivalikForestData, kasauliForestData];

