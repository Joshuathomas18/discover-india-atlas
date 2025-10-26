// Delhi Mountains Data
import { KarnatakaPOI } from '../../types/database';

export const aravalliData: KarnatakaPOI = {
  id: 'aravalli_delhi',
  name: 'Aravalli Range',
  category: 'mountain',
  coordinates: { lat: 28.6139, lng: 77.2090 },
  description: 'Mountain range extending through Delhi.',
  banner_image: {
    storage_path: 'delhi/mountains/aravalli/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Aravalli Range in Delhi',
    credit: 'Unsplash',
    alt_text: 'Aravalli mountain range',
    uploaded_at: new Date()
  },
  icon_type: 'mountain',
  created_at: new Date(),
  tabs: {
    facts: 'Oldest mountain range in India, extends through Delhi',
    trekking: 'Hiking trails, nature walks, eco-tourism',
    how_to_reach: 'Accessible from various points in Delhi and NCR'
  }
};

export const ridgeData: KarnatakaPOI = {
  id: 'ridge_delhi',
  name: 'Delhi Ridge',
  category: 'mountain',
  coordinates: { lat: 28.6562, lng: 77.2410 },
  description: 'Extension of Aravalli range in Delhi.',
  banner_image: {
    storage_path: 'delhi/mountains/ridge/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Delhi Ridge',
    credit: 'Unsplash',
    alt_text: 'Delhi Ridge forest area',
    uploaded_at: new Date()
  },
  icon_type: 'mountain',
  created_at: new Date(),
  tabs: {
    facts: 'Extension of Aravalli range, important ecological area',
    trekking: 'Nature trails, bird watching, eco-tourism',
    how_to_reach: 'Accessible from various parts of Delhi'
  }
};

export default [aravalliData, ridgeData];

