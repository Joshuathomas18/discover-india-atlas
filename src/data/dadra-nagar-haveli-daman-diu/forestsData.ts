// Dadra and Nagar Haveli and Daman and Diu Forests Data
import { KarnatakaPOI } from '../../types/database';

export const tribalForestData: KarnatakaPOI = {
  id: 'tribal_forest_dnh_dd',
  name: 'Tribal Forest',
  category: 'forest',
  coordinates: { lat: 20.2737, lng: 73.0135 },
  description: 'Tribal forests in Dadra and Nagar Haveli.',
  banner_image: {
    storage_path: 'dadra-nagar-haveli-daman-diu/forests/tribal/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Tribal Forest',
    credit: 'Unsplash',
    alt_text: 'Tribal forests',
    uploaded_at: new Date()
  },
  icon_type: 'forest',
  created_at: new Date(),
  tabs: {
    facts: 'Tribal forests in Dadra and Nagar Haveli, important for tribal ecosystem',
    visiting_info: 'Open for visitors, tribal nature walks available',
    animals_found: ['Various bird species', 'Small mammals', 'Reptiles']
  }
};

export const westernGhatsForestData: KarnatakaPOI = {
  id: 'western_ghats_forest_dnh_dd',
  name: 'Western Ghats Forest',
  category: 'forest',
  coordinates: { lat: 20.2737, lng: 73.0135 },
  description: 'Forests in Western Ghats region.',
  banner_image: {
    storage_path: 'dadra-nagar-haveli-daman-diu/forests/western-ghats/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Western Ghats Forest',
    credit: 'Unsplash',
    alt_text: 'Western Ghats forests',
    uploaded_at: new Date()
  },
  icon_type: 'forest',
  created_at: new Date(),
  tabs: {
    facts: 'Forests in Western Ghats region, important mountain ecosystem',
    visiting_info: 'Open for visitors, mountain forest walks available',
    animals_found: ['Mountain birds', 'Small mammals', 'Reptiles']
  }
};

export const coastalForestData: KarnatakaPOI = {
  id: 'coastal_forest_dnh_dd',
  name: 'Coastal Forest',
  category: 'forest',
  coordinates: { lat: 20.4140, lng: 72.8397 },
  description: 'Coastal forests in Daman and Diu.',
  banner_image: {
    storage_path: 'dadra-nagar-haveli-daman-diu/forests/coastal/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Coastal Forest',
    credit: 'Unsplash',
    alt_text: 'Coastal forests',
    uploaded_at: new Date()
  },
  icon_type: 'forest',
  created_at: new Date(),
  tabs: {
    facts: 'Coastal forests in Daman and Diu, important coastal ecosystem',
    visiting_info: 'Open for visitors, coastal forest walks available',
    animals_found: ['Coastal birds', 'Small mammals', 'Marine life']
  }
};

export default [tribalForestData, westernGhatsForestData, coastalForestData];

