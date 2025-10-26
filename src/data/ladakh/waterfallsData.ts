// Ladakh Waterfalls Data
import { KarnatakaPOI } from '../../types/database';

export const zangskarFallsData: KarnatakaPOI = {
  id: 'zanskar_falls_ladakh',
  name: 'Zanskar Waterfall',
  category: 'waterfall',
  coordinates: { lat: 33.5000, lng: 76.9000 },
  description: 'Waterfall in Zanskar Valley.',
  banner_image: {
    storage_path: 'ladakh/waterfalls/zanskar/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Zanskar Waterfall',
    credit: 'Unsplash',
    alt_text: 'Zanskar Waterfall',
    uploaded_at: new Date()
  },
  icon_type: 'waterfall',
  created_at: new Date(),
  tabs: {
    size: 'Small waterfall in Zanskar Valley',
    rivers_associated: ['Zanskar River'],
    facts_tourists: 'Natural waterfall, scenic beauty, trekking destination',
    how_to_reach: 'Accessible by trekking from Zanskar Valley'
  }
};

export const nubraFallsData: KarnatakaPOI = {
  id: 'nubra_falls_ladakh',
  name: 'Nubra Waterfall',
  category: 'waterfall',
  coordinates: { lat: 34.5539, lng: 77.5771 },
  description: 'Waterfall in Nubra Valley.',
  banner_image: {
    storage_path: 'ladakh/waterfalls/nubra/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Nubra Waterfall',
    credit: 'Unsplash',
    alt_text: 'Nubra Waterfall',
    uploaded_at: new Date()
  },
  icon_type: 'waterfall',
  created_at: new Date(),
  tabs: {
    size: 'Small waterfall in Nubra Valley',
    rivers_associated: ['Local streams'],
    facts_tourists: 'Natural waterfall, scenic beauty, high-altitude destination',
    how_to_reach: 'Accessible by trekking from Nubra Valley'
  }
};

export default [zangskarFallsData, nubraFallsData];

