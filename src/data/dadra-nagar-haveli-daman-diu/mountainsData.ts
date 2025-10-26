// Dadra and Nagar Haveli and Daman and Diu Mountains Data
import { KarnatakaPOI } from '../../types/database';

export const westernGhatsData: KarnatakaPOI = {
  id: 'western_ghats_dnh_dd',
  name: 'Western Ghats',
  category: 'mountain',
  coordinates: { lat: 20.2737, lng: 73.0135 },
  description: 'Mountain range near the region.',
  banner_image: {
    storage_path: 'dadra-nagar-haveli-daman-diu/mountains/western-ghats/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Western Ghats',
    credit: 'Unsplash',
    alt_text: 'Western Ghats',
    uploaded_at: new Date()
  },
  icon_type: 'mountain',
  created_at: new Date(),
  tabs: {
    facts: 'Mountain range near the region, part of Western Ghats',
    trekking: 'Hiking trails, nature walks, eco-tourism',
    how_to_reach: 'Accessible from Silvassa and surrounding areas'
  }
};

export const sahyadriData: KarnatakaPOI = {
  id: 'sahyadri_dnh_dd',
  name: 'Sahyadri Hills',
  category: 'mountain',
  coordinates: { lat: 20.2737, lng: 73.0135 },
  description: 'Hills near the region.',
  banner_image: {
    storage_path: 'dadra-nagar-haveli-daman-diu/mountains/sahyadri/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Sahyadri Hills',
    credit: 'Unsplash',
    alt_text: 'Sahyadri Hills',
    uploaded_at: new Date()
  },
  icon_type: 'mountain',
  created_at: new Date(),
  tabs: {
    facts: 'Hills near the region, part of Sahyadri range',
    trekking: 'Hiking trails, nature walks, scenic views',
    how_to_reach: 'Accessible from Silvassa and surrounding areas'
  }
};

export default [westernGhatsData, sahyadriData];

