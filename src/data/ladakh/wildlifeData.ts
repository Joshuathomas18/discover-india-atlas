// Ladakh Wildlife Data
import { KarnatakaPOI } from '../../types/database';

export const hemisNationalParkData: KarnatakaPOI = {
  id: 'hemis_national_park_ladakh',
  name: 'Hemis National Park',
  category: 'wildlife',
  coordinates: { lat: 34.0000, lng: 77.5000 },
  description: 'Largest national park in South Asia, home to snow leopards.',
  banner_image: {
    storage_path: 'ladakh/wildlife/hemis/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Hemis National Park',
    credit: 'Unsplash',
    alt_text: 'Hemis National Park with snow leopard',
    uploaded_at: new Date()
  },
  icon_type: 'leopard',
  created_at: new Date(),
  tabs: {
    facts: 'Largest national park in South Asia, home to endangered snow leopards',
    visiting_info: 'Open for visitors, high-altitude trekking available',
    animals_found: ['Snow leopard', 'Tibetan wolf', 'Bharal', 'Argali', 'Various birds']
  }
};

export const changthangData: KarnatakaPOI = {
  id: 'changthang_ladakh',
  name: 'Changthang Wildlife Sanctuary',
  category: 'wildlife',
  coordinates: { lat: 33.0000, lng: 78.0000 },
  description: 'High-altitude wildlife sanctuary.',
  banner_image: {
    storage_path: 'ladakh/wildlife/changthang/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Changthang Wildlife Sanctuary',
    credit: 'Unsplash',
    alt_text: 'Changthang Wildlife Sanctuary',
    uploaded_at: new Date()
  },
  icon_type: 'bird',
  created_at: new Date(),
  tabs: {
    facts: 'High-altitude wildlife sanctuary, important for Tibetan wildlife',
    visiting_info: 'Open for visitors, high-altitude trekking available',
    animals_found: ['Tibetan wild ass', 'Black-necked crane', 'Tibetan gazelle', 'Various birds']
  }
};

export const karakoramWildlifeData: KarnatakaPOI = {
  id: 'karakoram_wildlife_ladakh',
  name: 'Karakoram Wildlife Sanctuary',
  category: 'wildlife',
  coordinates: { lat: 35.0000, lng: 77.0000 },
  description: 'Wildlife sanctuary in Karakoram range.',
  banner_image: {
    storage_path: 'ladakh/wildlife/karakoram/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Karakoram Wildlife Sanctuary',
    credit: 'Unsplash',
    alt_text: 'Karakoram Wildlife Sanctuary',
    uploaded_at: new Date()
  },
  icon_type: 'bird',
  created_at: new Date(),
  tabs: {
    facts: 'Wildlife sanctuary in Karakoram range, important for high-altitude wildlife',
    visiting_info: 'Open for visitors, extreme high-altitude trekking available',
    animals_found: ['Snow leopard', 'Tibetan wolf', 'Various high-altitude species']
  }
};

export const tsoMoririWildlifeData: KarnatakaPOI = {
  id: 'tso_moriri_wildlife_ladakh',
  name: 'Tso Moriri Wildlife Sanctuary',
  category: 'wildlife',
  coordinates: { lat: 32.9000, lng: 78.3000 },
  description: 'Wildlife sanctuary around Tso Moriri lake.',
  banner_image: {
    storage_path: 'ladakh/wildlife/tso-moriri/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Tso Moriri Wildlife Sanctuary',
    credit: 'Unsplash',
    alt_text: 'Tso Moriri Wildlife Sanctuary',
    uploaded_at: new Date()
  },
  icon_type: 'bird',
  created_at: new Date(),
  tabs: {
    facts: 'Wildlife sanctuary around Tso Moriri lake, important for migratory birds',
    visiting_info: 'Open for visitors, bird watching available',
    animals_found: ['Black-necked crane', 'Tibetan gazelle', 'Various migratory birds']
  }
};

export default [hemisNationalParkData, changthangData, karakoramWildlifeData, tsoMoririWildlifeData];

