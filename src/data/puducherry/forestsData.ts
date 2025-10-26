// Puducherry Forests Data
import { KarnatakaPOI } from '../../types/database';

export const aurovilleForestData: KarnatakaPOI = {
  id: 'auroville_forest_puducherry',
  name: 'Auroville Forest',
  category: 'forest',
  coordinates: { lat: 12.0044, lng: 79.8083 },
  description: 'Forest area around Auroville.',
  banner_image: {
    storage_path: 'puducherry/forests/auroville/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Auroville Forest',
    credit: 'Unsplash',
    alt_text: 'Auroville Forest',
    uploaded_at: new Date()
  },
  icon_type: 'forest',
  created_at: new Date(),
  tabs: {
    facts: 'Forest area around Auroville, important ecological zone',
    visiting_info: 'Open for nature walks, eco-tourism',
    animals_found: ['Various bird species', 'Small mammals', 'Reptiles']
  }
};

export const gingeeForestData: KarnatakaPOI = {
  id: 'gingee_forest_puducherry',
  name: 'Gingee Forest',
  category: 'forest',
  coordinates: { lat: 12.2500, lng: 79.4167 },
  description: 'Forest area around Gingee.',
  banner_image: {
    storage_path: 'puducherry/forests/gingee/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Gingee Forest',
    credit: 'Unsplash',
    alt_text: 'Gingee Forest',
    uploaded_at: new Date()
  },
  icon_type: 'forest',
  created_at: new Date(),
  tabs: {
    facts: 'Forest area around Gingee, important ecological zone',
    visiting_info: 'Open for hiking, nature trails',
    animals_found: ['Various bird species', 'Small mammals', 'Reptiles']
  }
};

export const nilgiriForestData: KarnatakaPOI = {
  id: 'nilgiri_forest_puducherry',
  name: 'Nilgiri Forest',
  category: 'forest',
  coordinates: { lat: 11.9416, lng: 79.8083 },
  description: 'Forest area in Nilgiri hills.',
  banner_image: {
    storage_path: 'puducherry/forests/nilgiri/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Nilgiri Forest',
    credit: 'Unsplash',
    alt_text: 'Nilgiri Forest',
    uploaded_at: new Date()
  },
  icon_type: 'forest',
  created_at: new Date(),
  tabs: {
    facts: 'Forest area in Nilgiri hills, important ecological zone',
    visiting_info: 'Open for hiking, mountain trails',
    animals_found: ['Mountain birds', 'Small mammals', 'Reptiles']
  }
};

export default [aurovilleForestData, gingeeForestData, nilgiriForestData];

