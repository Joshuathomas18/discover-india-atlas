// Dadra and Nagar Haveli and Daman and Diu Waterfalls Data
import { KarnatakaPOI } from '../../types/database';

export const dudhniData: KarnatakaPOI = {
  id: 'dudhni_dnh_dd',
  name: 'Dudhni Waterfall',
  category: 'waterfall',
  coordinates: { lat: 20.2737, lng: 73.0135 },
  description: 'Waterfall near Silvassa.',
  banner_image: {
    storage_path: 'dadra-nagar-haveli-daman-diu/waterfalls/dudhni/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Dudhni Waterfall',
    credit: 'Unsplash',
    alt_text: 'Dudhni Waterfall',
    uploaded_at: new Date()
  },
  icon_type: 'waterfall',
  created_at: new Date(),
  tabs: {
    size: 'Small waterfall near Silvassa',
    rivers_associated: ['Local streams'],
    facts_tourists: 'Popular tourist spot, scenic beauty',
    how_to_reach: 'Accessible by road from Silvassa'
  }
};

export const khanvelData: KarnatakaPOI = {
  id: 'khanvel_waterfall_dnh_dd',
  name: 'Khanvel Waterfall',
  category: 'waterfall',
  coordinates: { lat: 20.2737, lng: 73.0135 },
  description: 'Waterfall near Khanvel.',
  banner_image: {
    storage_path: 'dadra-nagar-haveli-daman-diu/waterfalls/khanvel/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Khanvel Waterfall',
    credit: 'Unsplash',
    alt_text: 'Khanvel Waterfall',
    uploaded_at: new Date()
  },
  icon_type: 'waterfall',
  created_at: new Date(),
  tabs: {
    size: 'Small waterfall near Khanvel',
    rivers_associated: ['Local streams'],
    facts_tourists: 'Natural waterfall, scenic beauty',
    how_to_reach: 'Accessible by road from Khanvel'
  }
};

export default [dudhniData, khanvelData];

