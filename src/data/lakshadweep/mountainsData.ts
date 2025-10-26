// Lakshadweep Mountains Data
import { KarnatakaPOI } from '../../types/database';

export const coralHillsData: KarnatakaPOI = {
  id: 'coral_hills_lakshadweep',
  name: 'Coral Hills',
  category: 'mountain',
  coordinates: { lat: 10.5667, lng: 72.6167 },
  description: 'Coral formations rising from the sea.',
  banner_image: {
    storage_path: 'lakshadweep/mountains/coral-hills/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Coral Hills',
    credit: 'Unsplash',
    alt_text: 'Coral hills formations',
    uploaded_at: new Date()
  },
  icon_type: 'mountain',
  created_at: new Date(),
  tabs: {
    facts: 'Coral formations rising from the sea, unique geological features',
    trekking: 'Coral exploration, underwater trails, marine walks',
    how_to_reach: 'Accessible by boat, snorkeling and diving available'
  }
};

export const underwaterMountainsData: KarnatakaPOI = {
  id: 'underwater_mountains_lakshadweep',
  name: 'Underwater Mountains',
  category: 'mountain',
  coordinates: { lat: 10.8333, lng: 72.1833 },
  description: 'Underwater mountain formations.',
  banner_image: {
    storage_path: 'lakshadweep/mountains/underwater/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Underwater Mountains',
    credit: 'Unsplash',
    alt_text: 'Underwater mountain formations',
    uploaded_at: new Date()
  },
  icon_type: 'mountain',
  created_at: new Date(),
  tabs: {
    facts: 'Underwater mountain formations, important for marine life',
    trekking: 'Underwater exploration, diving trails, marine adventures',
    how_to_reach: 'Accessible by diving, underwater exploration available'
  }
};

export default [coralHillsData, underwaterMountainsData];

