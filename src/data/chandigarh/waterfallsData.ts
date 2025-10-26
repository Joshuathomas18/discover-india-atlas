// Chandigarh Waterfalls Data
import { KarnatakaPOI } from '../../types/database';

export const kasauliFallsData: KarnatakaPOI = {
  id: 'kasauli_falls_chandigarh',
  name: 'Kasauli Falls',
  category: 'waterfall',
  coordinates: { lat: 30.8986, lng: 76.9653 },
  description: 'Waterfall near Kasauli hill station.',
  banner_image: {
    storage_path: 'chandigarh/waterfalls/kasauli/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Kasauli Falls',
    credit: 'Unsplash',
    alt_text: 'Kasauli Falls',
    uploaded_at: new Date()
  },
  icon_type: 'waterfall',
  created_at: new Date(),
  tabs: {
    size: 'Small waterfall near Kasauli hill station',
    rivers_associated: ['Local streams'],
    facts_tourists: 'Popular tourist spot, scenic beauty',
    how_to_reach: 'Accessible by road from Kasauli'
  }
};

export const shivalikFallsData: KarnatakaPOI = {
  id: 'shivalik_falls_chandigarh',
  name: 'Shivalik Falls',
  category: 'waterfall',
  coordinates: { lat: 30.7333, lng: 76.7794 },
  description: 'Waterfall in Shivalik hills.',
  banner_image: {
    storage_path: 'chandigarh/waterfalls/shivalik/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Shivalik Falls',
    credit: 'Unsplash',
    alt_text: 'Shivalik Falls',
    uploaded_at: new Date()
  },
  icon_type: 'waterfall',
  created_at: new Date(),
  tabs: {
    size: 'Small waterfall in Shivalik hills',
    rivers_associated: ['Local streams'],
    facts_tourists: 'Natural waterfall, scenic beauty',
    how_to_reach: 'Accessible by hiking trails in Shivalik hills'
  }
};

export default [kasauliFallsData, shivalikFallsData];

