// Manipur Wildlife Data
import { KarnatakaPOI } from '../../types/database';

export const keibulLamjaoData: KarnatakaPOI = {
  id: 'keibul_lamjao_manipur',
  name: 'Keibul Lamjao',
  category: 'wildlife',
  coordinates: { lat: 24.5000, lng: 93.7667 },
  description: 'National park with diverse wildlife.',
  banner_image: {
    storage_path: 'manipur/wildlife/keibul-lamjao/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Keibul Lamjao National Park',
    credit: 'Unsplash',
    alt_text: 'Keibul Lamjao National Park with Sangai deer',
    uploaded_at: new Date()
  },
  icon_type: 'deer',
  created_at: new Date(),
  tabs: {
    facts: 'Important facts about Keibul Lamjao wildlife.',
    visiting_info: 'Information about visiting Keibul Lamjao.',
    animals_found: ['Sangai deer', 'Wild boar', 'Various bird species']
  }
};

export const yangoupokpiData: KarnatakaPOI = {
  id: 'yangoupokpi_manipur',
  name: 'Yangoupokpi',
  category: 'wildlife',
  coordinates: { lat: 24.3167, lng: 94.0167 },
  description: 'Wildlife sanctuary with diverse flora and fauna.',
  banner_image: {
    storage_path: 'manipur/wildlife/yangoupokpi/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Yangoupokpi Wildlife Sanctuary',
    credit: 'Unsplash',
    alt_text: 'Yangoupokpi Wildlife Sanctuary',
    uploaded_at: new Date()
  },
  icon_type: 'bird',
  created_at: new Date(),
  tabs: {
    facts: 'Important facts about Yangoupokpi wildlife.',
    visiting_info: 'Information about visiting Yangoupokpi.',
    animals_found: ['Various bird species', 'Small mammals', 'Reptiles']
  }
};

export const siroiData: KarnatakaPOI = {
  id: 'siroi_manipur',
  name: 'Siroi',
  category: 'wildlife',
  coordinates: { lat: 25.1167, lng: 94.3667 },
  description: 'Wildlife sanctuary with diverse flora and fauna.',
  banner_image: {
    storage_path: 'manipur/wildlife/siroi/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Siroi Wildlife Sanctuary',
    credit: 'Unsplash',
    alt_text: 'Siroi Wildlife Sanctuary with Siroi lily',
    uploaded_at: new Date()
  },
  icon_type: 'flower',
  created_at: new Date(),
  tabs: {
    facts: 'Important facts about Siroi wildlife.',
    visiting_info: 'Information about visiting Siroi.',
    animals_found: ['Siroi lily', 'Various bird species', 'Small mammals']
  }
};

export const khongjaingambaData: KarnatakaPOI = {
  id: 'khongjaingamba_manipur',
  name: 'Khongjaingamba',
  category: 'wildlife',
  coordinates: { lat: 24.9833, lng: 93.5000 },
  description: 'Wildlife sanctuary with diverse flora and fauna.',
  banner_image: {
    storage_path: 'manipur/wildlife/khongjaingamba/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Khongjaingamba Wildlife Sanctuary',
    credit: 'Unsplash',
    alt_text: 'Khongjaingamba Wildlife Sanctuary',
    uploaded_at: new Date()
  },
  icon_type: 'bird',
  created_at: new Date(),
  tabs: {
    facts: 'Important facts about Khongjaingamba wildlife.',
    visiting_info: 'Information about visiting Khongjaingamba.',
    animals_found: ['Various bird species', 'Small mammals', 'Reptiles']
  }
};

export default [keibulLamjaoData, yangoupokpiData, siroiData, khongjaingambaData];
