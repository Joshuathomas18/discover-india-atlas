// Jammu and Kashmir Wildlife Data
import { KarnatakaPOI } from '../../types/database';

export const dachigramData: KarnatakaPOI = {
  id: 'dachigram_jk',
  name: 'Dachigram National Park',
  category: 'wildlife',
  coordinates: { lat: 34.0837, lng: 74.7973 },
  description: 'National park near Srinagar, home to Hangul deer.',
  banner_image: {
    storage_path: 'jammu-kashmir/wildlife/dachigram/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Dachigram National Park',
    credit: 'Unsplash',
    alt_text: 'Dachigram National Park with Hangul deer',
    uploaded_at: new Date()
  },
  icon_type: 'deer',
  created_at: new Date(),
  tabs: {
    facts: 'National park near Srinagar, home to endangered Hangul deer',
    visiting_info: 'Open for visitors, nature trails available',
    animals_found: ['Hangul deer', 'Himalayan black bear', 'Leopard', 'Various birds']
  }
};

export const hemisData: KarnatakaPOI = {
  id: 'hemis_jk',
  name: 'Hemis National Park',
  category: 'wildlife',
  coordinates: { lat: 34.0000, lng: 77.5000 },
  description: 'Largest national park in South Asia, home to snow leopards.',
  banner_image: {
    storage_path: 'jammu-kashmir/wildlife/hemis/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Hemis National Park',
    credit: 'Unsplash',
    alt_text: 'Hemis National Park with snow leopard',
    uploaded_at: new Date()
  },
  icon_type: 'leopard',
  created_at: new Date(),
  tabs: {
    facts: 'Largest national park in South Asia, home to snow leopards',
    visiting_info: 'Open for visitors, high-altitude trekking available',
    animals_found: ['Snow leopard', 'Tibetan wolf', 'Bharal', 'Various birds']
  }
};

export const kishtwarData: KarnatakaPOI = {
  id: 'kishtwar_jk',
  name: 'Kishtwar National Park',
  category: 'wildlife',
  coordinates: { lat: 33.3167, lng: 75.7667 },
  description: 'National park in Kishtwar region.',
  banner_image: {
    storage_path: 'jammu-kashmir/wildlife/kishtwar/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Kishtwar National Park',
    credit: 'Unsplash',
    alt_text: 'Kishtwar National Park',
    uploaded_at: new Date()
  },
  icon_type: 'bird',
  created_at: new Date(),
  tabs: {
    facts: 'National park in Kishtwar region, important for wildlife conservation',
    visiting_info: 'Open for visitors, nature trails available',
    animals_found: ['Himalayan brown bear', 'Musk deer', 'Various birds', 'Mountain wildlife']
  }
};

export const salimAliData: KarnatakaPOI = {
  id: 'salim_ali_jk',
  name: 'Salim Ali National Park',
  category: 'wildlife',
  coordinates: { lat: 34.0837, lng: 74.7973 },
  description: 'Bird sanctuary near Srinagar.',
  banner_image: {
    storage_path: 'jammu-kashmir/wildlife/salim-ali/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Salim Ali National Park',
    credit: 'Unsplash',
    alt_text: 'Salim Ali National Park bird sanctuary',
    uploaded_at: new Date()
  },
  icon_type: 'bird',
  created_at: new Date(),
  tabs: {
    facts: 'Bird sanctuary near Srinagar, important for migratory birds',
    visiting_info: 'Open for visitors, bird watching available',
    animals_found: ['Various migratory birds', 'Local bird species', 'Waterfowl']
  }
};

export default [dachigramData, hemisData, kishtwarData, salimAliData];

