// Delhi Forests Data
import { KarnatakaPOI } from '../../types/database';

export const ridgeForestData: KarnatakaPOI = {
  id: 'ridge_forest_delhi',
  name: 'Delhi Ridge Forest',
  category: 'forest',
  coordinates: { lat: 28.6562, lng: 77.2410 },
  description: 'Forest area in Delhi Ridge.',
  banner_image: {
    storage_path: 'delhi/forests/ridge/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Delhi Ridge Forest',
    credit: 'Unsplash',
    alt_text: 'Delhi Ridge Forest',
    uploaded_at: new Date()
  },
  icon_type: 'forest',
  created_at: new Date(),
  tabs: {
    facts: 'Forest area in Delhi Ridge, important ecological zone',
    visiting_info: 'Open for nature walks, eco-tourism',
    animals_found: ['Various bird species', 'Small mammals', 'Reptiles']
  }
};

export const yamunaForestData: KarnatakaPOI = {
  id: 'yamuna_forest_delhi',
  name: 'Yamuna Forest',
  category: 'forest',
  coordinates: { lat: 28.6139, lng: 77.2090 },
  description: 'Forest area along Yamuna river.',
  banner_image: {
    storage_path: 'delhi/forests/yamuna/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Yamuna Forest',
    credit: 'Unsplash',
    alt_text: 'Yamuna Forest area',
    uploaded_at: new Date()
  },
  icon_type: 'forest',
  created_at: new Date(),
  tabs: {
    facts: 'Forest area along Yamuna river, riparian ecosystem',
    visiting_info: 'Accessible for nature walks, bird watching',
    animals_found: ['Riparian birds', 'Aquatic life', 'Small mammals']
  }
};

export const aravalliForestData: KarnatakaPOI = {
  id: 'aravalli_forest_delhi',
  name: 'Aravalli Forest',
  category: 'forest',
  coordinates: { lat: 28.4595, lng: 77.0266 },
  description: 'Forest area in Aravalli range.',
  banner_image: {
    storage_path: 'delhi/forests/aravalli/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Aravalli Forest',
    credit: 'Unsplash',
    alt_text: 'Aravalli Forest',
    uploaded_at: new Date()
  },
  icon_type: 'forest',
  created_at: new Date(),
  tabs: {
    facts: 'Forest area in Aravalli range, important ecological zone',
    visiting_info: 'Open for hiking, nature trails',
    animals_found: ['Mountain birds', 'Small mammals', 'Reptiles']
  }
};

export default [ridgeForestData, yamunaForestData, aravalliForestData];

