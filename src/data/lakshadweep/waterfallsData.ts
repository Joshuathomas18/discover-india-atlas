// Lakshadweep Waterfalls Data
import { KarnatakaPOI } from '../../types/database';

export const coralFallsData: KarnatakaPOI = {
  id: 'coral_falls_lakshadweep',
  name: 'Coral Falls',
  category: 'waterfall',
  coordinates: { lat: 10.5667, lng: 72.6167 },
  description: 'Underwater coral formations resembling waterfalls.',
  banner_image: {
    storage_path: 'lakshadweep/waterfalls/coral/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Coral Falls',
    credit: 'Unsplash',
    alt_text: 'Underwater coral formations',
    uploaded_at: new Date()
  },
  icon_type: 'waterfall',
  created_at: new Date(),
  tabs: {
    size: 'Underwater coral formations resembling waterfalls',
    rivers_associated: ['Marine waters'],
    facts_tourists: 'Popular diving spot, unique underwater formations',
    how_to_reach: 'Accessible by diving, underwater exploration available'
  }
};

export const marineFallsData: KarnatakaPOI = {
  id: 'marine_falls_lakshadweep',
  name: 'Marine Falls',
  category: 'waterfall',
  coordinates: { lat: 10.8333, lng: 72.1833 },
  description: 'Underwater marine formations resembling waterfalls.',
  banner_image: {
    storage_path: 'lakshadweep/waterfalls/marine/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Marine Falls',
    credit: 'Unsplash',
    alt_text: 'Underwater marine formations',
    uploaded_at: new Date()
  },
  icon_type: 'waterfall',
  created_at: new Date(),
  tabs: {
    size: 'Underwater marine formations resembling waterfalls',
    rivers_associated: ['Ocean waters'],
    facts_tourists: 'Unique underwater formations, diving destination',
    how_to_reach: 'Accessible by diving, marine exploration available'
  }
};

export default [coralFallsData, marineFallsData];

