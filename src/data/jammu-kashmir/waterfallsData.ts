// Jammu and Kashmir Waterfalls Data
import { KarnatakaPOI } from '../../types/database';

export const aharbalData: KarnatakaPOI = {
  id: 'aharbal_jk',
  name: 'Aharbal Waterfall',
  category: 'waterfall',
  coordinates: { lat: 33.7311, lng: 75.1481 },
  description: 'Waterfall in Anantnag district.',
  banner_image: {
    storage_path: 'jammu-kashmir/waterfalls/aharbal/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Aharbal Waterfall',
    credit: 'Unsplash',
    alt_text: 'Aharbal Waterfall',
    uploaded_at: new Date()
  },
  icon_type: 'waterfall',
  created_at: new Date(),
  tabs: {
    size: 'Medium-sized waterfall in Anantnag district',
    rivers_associated: ['Veshu River'],
    facts_tourists: 'Popular tourist spot, scenic beauty, trekking destination',
    how_to_reach: 'Accessible by road from Anantnag'
  }
};

export const nooriChambaData: KarnatakaPOI = {
  id: 'noori_chamba_jk',
  name: 'Noori Chamba Waterfall',
  category: 'waterfall',
  coordinates: { lat: 33.3800, lng: 74.3100 },
  description: 'Waterfall in Rajouri district.',
  banner_image: {
    storage_path: 'jammu-kashmir/waterfalls/noori-chamba/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Noori Chamba Waterfall',
    credit: 'Unsplash',
    alt_text: 'Noori Chamba Waterfall',
    uploaded_at: new Date()
  },
  icon_type: 'waterfall',
  created_at: new Date(),
  tabs: {
    size: 'Small waterfall in Rajouri district',
    rivers_associated: ['Local streams'],
    facts_tourists: 'Natural waterfall, scenic beauty, picnic spot',
    how_to_reach: 'Accessible by road from Rajouri'
  }
};

export default [aharbalData, nooriChambaData];

