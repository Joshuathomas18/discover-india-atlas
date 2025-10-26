// Puducherry Waterfalls Data
import { KarnatakaPOI } from '../../types/database';

export const gingeeFallsData: KarnatakaPOI = {
  id: 'gingee_falls_puducherry',
  name: 'Gingee Falls',
  category: 'waterfall',
  coordinates: { lat: 12.2500, lng: 79.4167 },
  description: 'Waterfall near Gingee.',
  banner_image: {
    storage_path: 'puducherry/waterfalls/gingee/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Gingee Falls',
    credit: 'Unsplash',
    alt_text: 'Gingee Falls',
    uploaded_at: new Date()
  },
  icon_type: 'waterfall',
  created_at: new Date(),
  tabs: {
    size: 'Small waterfall near Gingee',
    rivers_associated: ['Local streams'],
    facts_tourists: 'Popular tourist spot, scenic beauty',
    how_to_reach: 'Accessible by road from Gingee'
  }
};

export const nilgiriFallsData: KarnatakaPOI = {
  id: 'nilgiri_falls_puducherry',
  name: 'Nilgiri Falls',
  category: 'waterfall',
  coordinates: { lat: 11.9416, lng: 79.8083 },
  description: 'Waterfall in Nilgiri hills.',
  banner_image: {
    storage_path: 'puducherry/waterfalls/nilgiri/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Nilgiri Falls',
    credit: 'Unsplash',
    alt_text: 'Nilgiri Falls',
    uploaded_at: new Date()
  },
  icon_type: 'waterfall',
  created_at: new Date(),
  tabs: {
    size: 'Small waterfall in Nilgiri hills',
    rivers_associated: ['Local streams'],
    facts_tourists: 'Natural waterfall, scenic beauty',
    how_to_reach: 'Accessible by hiking trails in Nilgiri hills'
  }
};

export default [gingeeFallsData, nilgiriFallsData];

