// Andaman and Nicobar Islands Waterfalls Data
import { KarnatakaPOI } from '../../types/database';

export const baratangFallsData: KarnatakaPOI = {
  id: 'baratang_falls_andaman',
  name: 'Baratang Falls',
  category: 'waterfall',
  coordinates: { lat: 12.1667, lng: 92.7500 },
  description: 'Waterfall near Baratang Island.',
  banner_image: {
    storage_path: 'andaman-nicobar/waterfalls/baratang/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Baratang Falls',
    credit: 'Unsplash',
    alt_text: 'Baratang Falls',
    uploaded_at: new Date()
  },
  icon_type: 'waterfall',
  created_at: new Date(),
  tabs: {
    size: 'Small waterfall near Baratang Island',
    rivers_associated: ['Local streams'],
    facts_tourists: 'Popular tourist spot, scenic beauty',
    how_to_reach: 'Accessible by boat from Baratang Island'
  }
};

export const diglipurFallsData: KarnatakaPOI = {
  id: 'diglipur_falls_andaman',
  name: 'Diglipur Falls',
  category: 'waterfall',
  coordinates: { lat: 13.2500, lng: 93.0000 },
  description: 'Waterfall near Diglipur.',
  banner_image: {
    storage_path: 'andaman-nicobar/waterfalls/diglipur/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Diglipur Falls',
    credit: 'Unsplash',
    alt_text: 'Diglipur Falls',
    uploaded_at: new Date()
  },
  icon_type: 'waterfall',
  created_at: new Date(),
  tabs: {
    size: 'Small waterfall near Diglipur',
    rivers_associated: ['Local streams'],
    facts_tourists: 'Natural waterfall, scenic beauty',
    how_to_reach: 'Accessible by road from Diglipur'
  }
};

export default [baratangFallsData, diglipurFallsData];

