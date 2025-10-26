// Ladakh Rivers Data
import { KarnatakaPOI } from '../../types/database';

export const indusData: KarnatakaPOI = {
  id: 'indus_ladakh',
  name: 'Indus',
  category: 'river',
  coordinates: { lat: 34.1526, lng: 77.5771 },
  description: 'Major river flowing through Ladakh.',
  banner_image: {
    storage_path: 'ladakh/rivers/indus/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Indus River',
    credit: 'Unsplash',
    alt_text: 'Indus River flowing through Ladakh',
    uploaded_at: new Date()
  },
  icon_type: 'river',
  created_at: new Date(),
  tabs: {
    facts: 'Major river flowing through Ladakh, important for irrigation and culture',
    fishes_found: ['Snow trout', 'Local fish species', 'High-altitude fish'],
    how_to_reach: 'Accessible from various points in Ladakh'
  }
};

export const zangskarData: KarnatakaPOI = {
  id: 'zangskar_ladakh',
  name: 'Zanskar',
  category: 'river',
  coordinates: { lat: 33.5000, lng: 76.9000 },
  description: 'Tributary of Indus river.',
  banner_image: {
    storage_path: 'ladakh/rivers/zanskar/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Zanskar River',
    credit: 'Unsplash',
    alt_text: 'Zanskar River',
    uploaded_at: new Date()
  },
  icon_type: 'river',
  created_at: new Date(),
  tabs: {
    facts: 'Tributary of Indus river, important for trekking and rafting',
    fishes_found: ['Snow trout', 'Local fish species', 'Mountain fish'],
    how_to_reach: 'Accessible from Zanskar Valley'
  }
};

export const shyokData: KarnatakaPOI = {
  id: 'shyok_ladakh',
  name: 'Shyok',
  category: 'river',
  coordinates: { lat: 34.5539, lng: 77.5771 },
  description: 'River flowing through Nubra Valley.',
  banner_image: {
    storage_path: 'ladakh/rivers/shyok/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Shyok River',
    credit: 'Unsplash',
    alt_text: 'Shyok River in Nubra Valley',
    uploaded_at: new Date()
  },
  icon_type: 'river',
  created_at: new Date(),
  tabs: {
    facts: 'River flowing through Nubra Valley, important for valley ecosystem',
    fishes_found: ['Local fish species', 'High-altitude fish', 'Mountain fish'],
    how_to_reach: 'Accessible from Nubra Valley'
  }
};

export default [indusData, zangskarData, shyokData];

