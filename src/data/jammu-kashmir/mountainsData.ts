// Jammu and Kashmir Mountains Data
import { KarnatakaPOI } from '../../types/database';

export const pirPanjalData: KarnatakaPOI = {
  id: 'pir_panjal_jk',
  name: 'Pir Panjal Range',
  category: 'mountain',
  coordinates: { lat: 33.5000, lng: 75.5000 },
  description: 'Major mountain range in Jammu and Kashmir.',
  banner_image: {
    storage_path: 'jammu-kashmir/mountains/pir-panjal/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Pir Panjal Range',
    credit: 'Unsplash',
    alt_text: 'Pir Panjal mountain range',
    uploaded_at: new Date()
  },
  icon_type: 'mountain',
  created_at: new Date(),
  tabs: {
    facts: 'Major mountain range in Jammu and Kashmir, important for trekking',
    trekking: 'Hiking trails, mountain climbing, scenic treks',
    how_to_reach: 'Accessible from various points in Kashmir Valley'
  }
};

export const karakoramData: KarnatakaPOI = {
  id: 'karakoram_jk',
  name: 'Karakoram Range',
  category: 'mountain',
  coordinates: { lat: 35.5000, lng: 76.5000 },
  description: 'Major mountain range in northern region.',
  banner_image: {
    storage_path: 'jammu-kashmir/mountains/karakoram/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Karakoram Range',
    credit: 'Unsplash',
    alt_text: 'Karakoram mountain range',
    uploaded_at: new Date()
  },
  icon_type: 'mountain',
  created_at: new Date(),
  tabs: {
    facts: 'Major mountain range in northern region, world\'s second-highest peak',
    trekking: 'Extreme mountain climbing, high-altitude treks, expeditions',
    how_to_reach: 'Accessible from Ladakh region'
  }
};

export default [pirPanjalData, karakoramData];

