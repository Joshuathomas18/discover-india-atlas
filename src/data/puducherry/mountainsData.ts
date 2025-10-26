// Puducherry Mountains Data
import { KarnatakaPOI } from '../../types/database';

export const nilgiriData: KarnatakaPOI = {
  id: 'nilgiri_puducherry',
  name: 'Nilgiri Hills',
  category: 'mountain',
  coordinates: { lat: 11.9416, lng: 79.8083 },
  description: 'Mountain range near Puducherry.',
  banner_image: {
    storage_path: 'puducherry/mountains/nilgiri/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Nilgiri Hills',
    credit: 'Unsplash',
    alt_text: 'Nilgiri Hills',
    uploaded_at: new Date()
  },
  icon_type: 'mountain',
  created_at: new Date(),
  tabs: {
    facts: 'Mountain range near Puducherry, part of Western Ghats',
    trekking: 'Hiking trails, nature walks, eco-tourism',
    how_to_reach: 'Accessible from Puducherry and surrounding areas'
  }
};

export const easternGhatsData: KarnatakaPOI = {
  id: 'eastern_ghats_puducherry',
  name: 'Eastern Ghats',
  category: 'mountain',
  coordinates: { lat: 12.2500, lng: 79.4167 },
  description: 'Mountain range near Puducherry.',
  banner_image: {
    storage_path: 'puducherry/mountains/eastern-ghats/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Eastern Ghats',
    credit: 'Unsplash',
    alt_text: 'Eastern Ghats',
    uploaded_at: new Date()
  },
  icon_type: 'mountain',
  created_at: new Date(),
  tabs: {
    facts: 'Mountain range near Puducherry, part of Eastern Ghats',
    trekking: 'Hiking trails, nature walks, scenic views',
    how_to_reach: 'Accessible from Puducherry and surrounding areas'
  }
};

export default [nilgiriData, easternGhatsData];

