// Dadra and Nagar Haveli and Daman and Diu Rivers Data
import { KarnatakaPOI } from '../../types/database';

export const damangangaData: KarnatakaPOI = {
  id: 'damanganga_dnh_dd',
  name: 'Damanganga',
  category: 'river',
  coordinates: { lat: 20.4140, lng: 72.8397 },
  description: 'Major river flowing through the region.',
  banner_image: {
    storage_path: 'dadra-nagar-haveli-daman-diu/rivers/damanganga/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Damanganga River',
    credit: 'Unsplash',
    alt_text: 'Damanganga River',
    uploaded_at: new Date()
  },
  icon_type: 'river',
  created_at: new Date(),
  tabs: {
    facts: 'Major river flowing through Dadra and Nagar Haveli and Daman',
    fishes_found: ['Various fish species', 'Local species', 'Aquatic life'],
    how_to_reach: 'Accessible from various points in the region'
  }
};

export const kolakData: KarnatakaPOI = {
  id: 'kolak_dnh_dd',
  name: 'Kolak',
  category: 'river',
  coordinates: { lat: 20.2737, lng: 73.0135 },
  description: 'River flowing through Dadra and Nagar Haveli.',
  banner_image: {
    storage_path: 'dadra-nagar-haveli-daman-diu/rivers/kolak/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Kolak River',
    credit: 'Unsplash',
    alt_text: 'Kolak River',
    uploaded_at: new Date()
  },
  icon_type: 'river',
  created_at: new Date(),
  tabs: {
    facts: 'River flowing through Dadra and Nagar Haveli',
    fishes_found: ['Local fish species', 'Freshwater fish', 'Aquatic life'],
    how_to_reach: 'Accessible from various points in Dadra and Nagar Haveli'
  }
};

export const sakartodData: KarnatakaPOI = {
  id: 'sakartod_dnh_dd',
  name: 'Sakartod',
  category: 'river',
  coordinates: { lat: 20.2737, lng: 73.0135 },
  description: 'River flowing through the region.',
  banner_image: {
    storage_path: 'dadra-nagar-haveli-daman-diu/rivers/sakartod/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Sakartod River',
    credit: 'Unsplash',
    alt_text: 'Sakartod River',
    uploaded_at: new Date()
  },
  icon_type: 'river',
  created_at: new Date(),
  tabs: {
    facts: 'River flowing through the region',
    fishes_found: ['Local fish species', 'Freshwater fish', 'Aquatic life'],
    how_to_reach: 'Accessible from various points in the region'
  }
};

export default [damangangaData, kolakData, sakartodData];

