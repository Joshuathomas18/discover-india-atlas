// Delhi Dams Data
import { KarnatakaPOI } from '../../types/database';

export const wazirabadData: KarnatakaPOI = {
  id: 'wazirabad_delhi',
  name: 'Wazirabad Barrage',
  category: 'dam',
  coordinates: { lat: 28.6139, lng: 77.2090 },
  description: 'Barrage on Yamuna river in Delhi.',
  banner_image: {
    storage_path: 'delhi/dams/wazirabad/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Wazirabad Barrage',
    credit: 'Unsplash',
    alt_text: 'Wazirabad Barrage on Yamuna',
    uploaded_at: new Date()
  },
  icon_type: 'dam',
  created_at: new Date(),
  tabs: {
    size: 'Medium-sized barrage on Yamuna river',
    rivers_associated: ['Yamuna River'],
    facts_tourists: 'Important water management structure',
    how_to_reach: 'Accessible by road, located on Yamuna river'
  }
};

export const okhlaData: KarnatakaPOI = {
  id: 'okhla_dam_delhi',
  name: 'Okhla Barrage',
  category: 'dam',
  coordinates: { lat: 28.5355, lng: 77.3910 },
  description: 'Barrage on Yamuna river.',
  banner_image: {
    storage_path: 'delhi/dams/okhla/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Okhla Barrage',
    credit: 'Unsplash',
    alt_text: 'Okhla Barrage',
    uploaded_at: new Date()
  },
  icon_type: 'dam',
  created_at: new Date(),
  tabs: {
    size: 'Medium-sized barrage on Yamuna river',
    rivers_associated: ['Yamuna River'],
    facts_tourists: 'Water management and irrigation structure',
    how_to_reach: 'Accessible by road, located on Yamuna river'
  }
};

export default [wazirabadData, okhlaData];

