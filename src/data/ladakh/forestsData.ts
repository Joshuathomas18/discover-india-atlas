// Ladakh Forests Data
import { KarnatakaPOI } from '../../types/database';

export const alpineForestData: KarnatakaPOI = {
  id: 'alpine_forest_ladakh',
  name: 'Alpine Forest',
  category: 'forest',
  coordinates: { lat: 34.1526, lng: 77.5771 },
  description: 'Alpine forests in high-altitude regions.',
  banner_image: {
    storage_path: 'ladakh/forests/alpine/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Alpine Forest',
    credit: 'Unsplash',
    alt_text: 'Alpine forests in Ladakh',
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

export const coldDesertForestData: KarnatakaPOI = {
  id: 'cold_desert_forest_ladakh',
  name: 'Cold Desert Forest',
  category: 'forest',
  coordinates: { lat: 34.5539, lng: 77.5771 },
  description: 'Cold desert vegetation in Nubra Valley.',
  banner_image: {
    storage_path: 'ladakh/forests/cold-desert/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Cold Desert Forest',
    credit: 'Unsplash',
    alt_text: 'Cold desert vegetation',
    uploaded_at: new Date()
  },
  icon_type: 'forest',
  created_at: new Date(),
  tabs: {
    facts: 'Cold desert vegetation in Nubra Valley, unique ecosystem',
    visiting_info: 'Open for visitors, desert walks available',
    animals_found: ['Desert birds', 'Bactrian camels', 'Desert wildlife']
  }
};

export const highAltitudeForestData: KarnatakaPOI = {
  id: 'high_altitude_forest_ladakh',
  name: 'High Altitude Forest',
  category: 'forest',
  coordinates: { lat: 33.5000, lng: 76.9000 },
  description: 'High-altitude forests in Zanskar region.',
  banner_image: {
    storage_path: 'ladakh/forests/high-altitude/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'High Altitude Forest',
    credit: 'Unsplash',
    alt_text: 'High-altitude forests',
    uploaded_at: new Date()
  },
  icon_type: 'forest',
  created_at: new Date(),
  tabs: {
    facts: 'High-altitude forests in Zanskar region, important for mountain ecosystem',
    visiting_info: 'Open for visitors, high-altitude trekking available',
    animals_found: ['Mountain birds', 'High-altitude mammals', 'Mountain wildlife']
  }
};

export default [alpineForestData, coldDesertForestData, highAltitudeForestData];

