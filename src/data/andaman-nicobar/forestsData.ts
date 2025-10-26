// Andaman and Nicobar Islands Forests Data
import { KarnatakaPOI } from '../../types/database';

export const tropicalForestData: KarnatakaPOI = {
  id: 'tropical_forest_andaman',
  name: 'Tropical Forest',
  category: 'forest',
  coordinates: { lat: 11.6667, lng: 92.7500 },
  description: 'Tropical forests in Andaman Islands.',
  banner_image: {
    storage_path: 'andaman-nicobar/forests/tropical/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Tropical Forest',
    credit: 'Unsplash',
    alt_text: 'Tropical forests in Andaman',
    uploaded_at: new Date()
  },
  icon_type: 'forest',
  created_at: new Date(),
  tabs: {
    facts: 'Tropical forests in Andaman Islands, important island ecosystem',
    visiting_info: 'Open for visitors, nature walks available',
    animals_found: ['Tropical birds', 'Island mammals', 'Reptiles']
  }
};

export const mangroveForestData: KarnatakaPOI = {
  id: 'mangrove_forest_andaman',
  name: 'Mangrove Forest',
  category: 'forest',
  coordinates: { lat: 12.0167, lng: 92.9833 },
  description: 'Mangrove forests in Andaman Islands.',
  banner_image: {
    storage_path: 'andaman-nicobar/forests/mangrove/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Mangrove Forest',
    credit: 'Unsplash',
    alt_text: 'Mangrove forests in Andaman',
    uploaded_at: new Date()
  },
  icon_type: 'forest',
  created_at: new Date(),
  tabs: {
    facts: 'Mangrove forests in Andaman Islands, important coastal ecosystem',
    visiting_info: 'Open for visitors, mangrove walks available',
    animals_found: ['Mangrove birds', 'Crab species', 'Marine life']
  }
};

export const nicobarForestData: KarnatakaPOI = {
  id: 'nicobar_forest_andaman',
  name: 'Nicobar Forest',
  category: 'forest',
  coordinates: { lat: 7.0000, lng: 93.7500 },
  description: 'Forests in Nicobar Islands.',
  banner_image: {
    storage_path: 'andaman-nicobar/forests/nicobar/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Nicobar Forest',
    credit: 'Unsplash',
    alt_text: 'Forests in Nicobar Islands',
    uploaded_at: new Date()
  },
  icon_type: 'forest',
  created_at: new Date(),
  tabs: {
    facts: 'Forests in Nicobar Islands, important island ecosystem',
    visiting_info: 'Open for visitors, nature walks available',
    animals_found: ['Nicobar birds', 'Island mammals', 'Reptiles']
  }
};

export default [tropicalForestData, mangroveForestData, nicobarForestData];

