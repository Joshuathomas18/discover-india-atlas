// Jammu and Kashmir Forests Data
import { KarnatakaPOI } from '../../types/database';

export const deodarForestData: KarnatakaPOI = {
  id: 'deodar_forest_jk',
  name: 'Deodar Forest',
  category: 'forest',
  coordinates: { lat: 34.0837, lng: 74.7973 },
  description: 'Deodar forests in Kashmir Valley.',
  banner_image: {
    storage_path: 'jammu-kashmir/forests/deodar/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Deodar Forest',
    credit: 'Unsplash',
    alt_text: 'Deodar forests in Kashmir',
    uploaded_at: new Date()
  },
  icon_type: 'forest',
  created_at: new Date(),
  tabs: {
    facts: 'Deodar forests in Kashmir Valley, important for timber and ecosystem',
    visiting_info: 'Open for visitors, nature walks available',
    animals_found: ['Various bird species', 'Small mammals', 'Mountain wildlife']
  }
};

export const pineForestData: KarnatakaPOI = {
  id: 'pine_forest_jk',
  name: 'Pine Forest',
  category: 'forest',
  coordinates: { lat: 32.7266, lng: 74.8570 },
  description: 'Pine forests in Jammu region.',
  banner_image: {
    storage_path: 'jammu-kashmir/forests/pine/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Pine Forest',
    credit: 'Unsplash',
    alt_text: 'Pine forests in Jammu',
    uploaded_at: new Date()
  },
  icon_type: 'forest',
  created_at: new Date(),
  tabs: {
    facts: 'Pine forests in Jammu region, important for timber and ecosystem',
    visiting_info: 'Open for visitors, nature walks available',
    animals_found: ['Various bird species', 'Small mammals', 'Forest wildlife']
  }
};

export const alpineForestData: KarnatakaPOI = {
  id: 'alpine_forest_jk',
  name: 'Alpine Forest',
  category: 'forest',
  coordinates: { lat: 34.0484, lng: 74.3805 },
  description: 'Alpine forests in high-altitude regions.',
  banner_image: {
    storage_path: 'jammu-kashmir/forests/alpine/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Alpine Forest',
    credit: 'Unsplash',
    alt_text: 'Alpine forests in high-altitude',
    uploaded_at: new Date()
  },
  icon_type: 'forest',
  created_at: new Date(),
  tabs: {
    facts: 'Alpine forests in high-altitude regions, important for mountain ecosystem',
    visiting_info: 'Open for visitors, high-altitude trekking available',
    animals_found: ['Mountain birds', 'High-altitude mammals', 'Alpine wildlife']
  }
};

export default [deodarForestData, pineForestData, alpineForestData];

