// Delhi Waterfalls Data
import { KarnatakaPOI } from '../../types/database';

export const yamunaFallsData: KarnatakaPOI = {
  id: 'yamuna_falls_delhi',
  name: 'Yamuna Falls',
  category: 'waterfall',
  coordinates: { lat: 28.6139, lng: 77.2090 },
  description: 'Waterfall on Yamuna river.',
  banner_image: {
    storage_path: 'delhi/waterfalls/yamuna/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Yamuna Falls',
    credit: 'Unsplash',
    alt_text: 'Yamuna Falls',
    uploaded_at: new Date()
  },
  icon_type: 'waterfall',
  created_at: new Date(),
  tabs: {
    size: 'Medium-sized waterfall on Yamuna river',
    rivers_associated: ['Yamuna River'],
    facts_tourists: 'Popular tourist spot, natural beauty',
    how_to_reach: 'Accessible by road, located along Yamuna river'
  }
};

export const aravalliFallsData: KarnatakaPOI = {
  id: 'aravalli_falls_delhi',
  name: 'Aravalli Falls',
  category: 'waterfall',
  coordinates: { lat: 28.4595, lng: 77.0266 },
  description: 'Waterfall in Aravalli range.',
  banner_image: {
    storage_path: 'delhi/waterfalls/aravalli/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Aravalli Falls',
    credit: 'Unsplash',
    alt_text: 'Aravalli Falls',
    uploaded_at: new Date()
  },
  icon_type: 'waterfall',
  created_at: new Date(),
  tabs: {
    size: 'Small waterfall in Aravalli range',
    rivers_associated: ['Local streams'],
    facts_tourists: 'Natural waterfall, scenic beauty',
    how_to_reach: 'Accessible by hiking trails in Aravalli range'
  }
};

export default [yamunaFallsData, aravalliFallsData];

