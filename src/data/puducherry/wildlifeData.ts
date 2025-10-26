// Puducherry Wildlife Data
import { KarnatakaPOI } from '../../types/database';

export const aurovilleWildlifeData: KarnatakaPOI = {
  id: 'auroville_wildlife_puducherry',
  name: 'Auroville Wildlife',
  category: 'wildlife',
  coordinates: { lat: 12.0044, lng: 79.8083 },
  description: 'Wildlife area around Auroville.',
  banner_image: {
    storage_path: 'puducherry/wildlife/auroville/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Auroville Wildlife',
    credit: 'Unsplash',
    alt_text: 'Auroville Wildlife',
    uploaded_at: new Date()
  },
  icon_type: 'bird',
  created_at: new Date(),
  tabs: {
    facts: 'Wildlife area around Auroville, important ecological zone',
    visiting_info: 'Open for visitors, nature walks available',
    animals_found: ['Various bird species', 'Small mammals', 'Reptiles']
  }
};

export const gingeeWildlifeData: KarnatakaPOI = {
  id: 'gingee_wildlife_puducherry',
  name: 'Gingee Wildlife',
  category: 'wildlife',
  coordinates: { lat: 12.2500, lng: 79.4167 },
  description: 'Wildlife area around Gingee.',
  banner_image: {
    storage_path: 'puducherry/wildlife/gingee/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Gingee Wildlife',
    credit: 'Unsplash',
    alt_text: 'Gingee Wildlife',
    uploaded_at: new Date()
  },
  icon_type: 'bird',
  created_at: new Date(),
  tabs: {
    facts: 'Wildlife area around Gingee, important ecological zone',
    visiting_info: 'Open for visitors, nature trails available',
    animals_found: ['Various bird species', 'Small mammals', 'Reptiles']
  }
};

export const coastalWildlifeData: KarnatakaPOI = {
  id: 'coastal_wildlife_puducherry',
  name: 'Coastal Wildlife',
  category: 'wildlife',
  coordinates: { lat: 11.9416, lng: 79.8083 },
  description: 'Coastal wildlife area in Puducherry.',
  banner_image: {
    storage_path: 'puducherry/wildlife/coastal/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Coastal Wildlife',
    credit: 'Unsplash',
    alt_text: 'Coastal Wildlife',
    uploaded_at: new Date()
  },
  icon_type: 'bird',
  created_at: new Date(),
  tabs: {
    facts: 'Coastal wildlife area in Puducherry, important ecological zone',
    visiting_info: 'Open for visitors, coastal walks available',
    animals_found: ['Coastal birds', 'Marine life', 'Aquatic species']
  }
};

export const nilgiriWildlifeData: KarnatakaPOI = {
  id: 'nilgiri_wildlife_puducherry',
  name: 'Nilgiri Wildlife',
  category: 'wildlife',
  coordinates: { lat: 11.9416, lng: 79.8083 },
  description: 'Wildlife area in Nilgiri hills.',
  banner_image: {
    storage_path: 'puducherry/wildlife/nilgiri/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Nilgiri Wildlife',
    credit: 'Unsplash',
    alt_text: 'Nilgiri Wildlife',
    uploaded_at: new Date()
  },
  icon_type: 'bird',
  created_at: new Date(),
  tabs: {
    facts: 'Wildlife area in Nilgiri hills, important ecological zone',
    visiting_info: 'Open for visitors, mountain trails available',
    animals_found: ['Mountain birds', 'Small mammals', 'Reptiles']
  }
};

export default [aurovilleWildlifeData, gingeeWildlifeData, coastalWildlifeData, nilgiriWildlifeData];

