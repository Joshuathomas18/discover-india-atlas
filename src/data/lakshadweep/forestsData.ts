// Lakshadweep Forests Data
import { KarnatakaPOI } from '../../types/database';

export const coconutForestData: KarnatakaPOI = {
  id: 'coconut_forest_lakshadweep',
  name: 'Coconut Forest',
  category: 'forest',
  coordinates: { lat: 10.5667, lng: 72.6167 },
  description: 'Coconut palm forests on Lakshadweep islands.',
  banner_image: {
    storage_path: 'lakshadweep/forests/coconut/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Coconut Forest',
    credit: 'Unsplash',
    alt_text: 'Coconut palm forests',
    uploaded_at: new Date()
  },
  icon_type: 'forest',
  created_at: new Date(),
  tabs: {
    facts: 'Coconut palm forests on Lakshadweep islands, important for local economy',
    visiting_info: 'Open for visitors, nature walks available',
    animals_found: ['Island birds', 'Small mammals', 'Reptiles']
  }
};

export const mangroveForestData: KarnatakaPOI = {
  id: 'mangrove_forest_lakshadweep',
  name: 'Mangrove Forest',
  category: 'forest',
  coordinates: { lat: 10.8333, lng: 72.1833 },
  description: 'Mangrove forests on Lakshadweep islands.',
  banner_image: {
    storage_path: 'lakshadweep/forests/mangrove/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Mangrove Forest',
    credit: 'Unsplash',
    alt_text: 'Mangrove forests on islands',
    uploaded_at: new Date()
  },
  icon_type: 'forest',
  created_at: new Date(),
  tabs: {
    facts: 'Mangrove forests on Lakshadweep islands, important coastal ecosystem',
    visiting_info: 'Open for visitors, mangrove walks available',
    animals_found: ['Mangrove birds', 'Crab species', 'Marine life']
  }
};

export const tropicalForestData: KarnatakaPOI = {
  id: 'tropical_forest_lakshadweep',
  name: 'Tropical Forest',
  category: 'forest',
  coordinates: { lat: 10.9333, lng: 72.2833 },
  description: 'Tropical forests on Lakshadweep islands.',
  banner_image: {
    storage_path: 'lakshadweep/forests/tropical/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Tropical Forest',
    credit: 'Unsplash',
    alt_text: 'Tropical forests on islands',
    uploaded_at: new Date()
  },
  icon_type: 'forest',
  created_at: new Date(),
  tabs: {
    facts: 'Tropical forests on Lakshadweep islands, important island ecosystem',
    visiting_info: 'Open for visitors, tropical forest walks available',
    animals_found: ['Tropical birds', 'Island mammals', 'Reptiles']
  }
};

export default [coconutForestData, mangroveForestData, tropicalForestData];

