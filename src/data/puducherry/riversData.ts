// Puducherry Rivers Data
import { KarnatakaPOI } from '../../types/database';

export const gingeeData: KarnatakaPOI = {
  id: 'gingee_river_puducherry',
  name: 'Gingee',
  category: 'river',
  coordinates: { lat: 12.2500, lng: 79.4167 },
  description: 'River flowing through Puducherry region.',
  banner_image: {
    storage_path: 'puducherry/rivers/gingee/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Gingee River',
    credit: 'Unsplash',
    alt_text: 'Gingee River',
    uploaded_at: new Date()
  },
  icon_type: 'river',
  created_at: new Date(),
  tabs: {
    facts: 'River flowing through Puducherry region',
    fishes_found: ['Local fish species', 'Freshwater fish', 'Aquatic life'],
    how_to_reach: 'Accessible from various points in Puducherry region'
  }
};

export const pennaiyarData: KarnatakaPOI = {
  id: 'pennaiyar_puducherry',
  name: 'Pennaiyar',
  category: 'river',
  coordinates: { lat: 11.9416, lng: 79.8083 },
  description: 'Major river flowing through Puducherry.',
  banner_image: {
    storage_path: 'puducherry/rivers/pennaiyar/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Pennaiyar River',
    credit: 'Unsplash',
    alt_text: 'Pennaiyar River',
    uploaded_at: new Date()
  },
  icon_type: 'river',
  created_at: new Date(),
  tabs: {
    facts: 'Major river flowing through Puducherry region',
    fishes_found: ['Various fish species', 'Local species', 'Aquatic life'],
    how_to_reach: 'Accessible from various points in Puducherry region'
  }
};

export const koraiyarData: KarnatakaPOI = {
  id: 'koraiyar_puducherry',
  name: 'Koraiyar',
  category: 'river',
  coordinates: { lat: 11.7500, lng: 79.7500 },
  description: 'River flowing through Puducherry region.',
  banner_image: {
    storage_path: 'puducherry/rivers/koraiyar/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Koraiyar River',
    credit: 'Unsplash',
    alt_text: 'Koraiyar River',
    uploaded_at: new Date()
  },
  icon_type: 'river',
  created_at: new Date(),
  tabs: {
    facts: 'River flowing through Puducherry region',
    fishes_found: ['Local fish species', 'Freshwater fish', 'Aquatic life'],
    how_to_reach: 'Accessible from various points in Puducherry region'
  }
};

export default [gingeeData, pennaiyarData, koraiyarData];

