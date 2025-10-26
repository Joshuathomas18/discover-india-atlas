// Delhi Wildlife Data
import { KarnatakaPOI } from '../../types/database';

export const asolaData: KarnatakaPOI = {
  id: 'asola_delhi',
  name: 'Asola Wildlife Sanctuary',
  category: 'wildlife',
  coordinates: { lat: 28.4595, lng: 77.0266 },
  description: 'Wildlife sanctuary in the Aravalli range.',
  banner_image: {
    storage_path: 'delhi/wildlife/asola/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Asola Wildlife Sanctuary',
    credit: 'Unsplash',
    alt_text: 'Asola Wildlife Sanctuary',
    uploaded_at: new Date()
  },
  icon_type: 'bird',
  created_at: new Date(),
  tabs: {
    facts: 'Wildlife sanctuary in Aravalli range, important ecological area',
    visiting_info: 'Open for visitors, nature trails available',
    animals_found: ['Various bird species', 'Small mammals', 'Reptiles']
  }
};

export const okhlaData: KarnatakaPOI = {
  id: 'okhla_delhi',
  name: 'Okhla Bird Sanctuary',
  category: 'wildlife',
  coordinates: { lat: 28.5355, lng: 77.3910 },
  description: 'Bird sanctuary on Yamuna river.',
  banner_image: {
    storage_path: 'delhi/wildlife/okhla/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Okhla Bird Sanctuary',
    credit: 'Unsplash',
    alt_text: 'Okhla Bird Sanctuary',
    uploaded_at: new Date()
  },
  icon_type: 'bird',
  created_at: new Date(),
  tabs: {
    facts: 'Bird sanctuary on Yamuna river, important for migratory birds',
    visiting_info: 'Open for bird watching, guided tours available',
    animals_found: ['Migratory birds', 'Local bird species', 'Aquatic life']
  }
};

export const najafgarhData: KarnatakaPOI = {
  id: 'najafgarh_delhi',
  name: 'Najafgarh Drain',
  category: 'wildlife',
  coordinates: { lat: 28.6139, lng: 77.2090 },
  description: 'Important wetland area for birds.',
  banner_image: {
    storage_path: 'delhi/wildlife/najafgarh/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Najafgarh Drain',
    credit: 'Unsplash',
    alt_text: 'Najafgarh Drain wetland',
    uploaded_at: new Date()
  },
  icon_type: 'bird',
  created_at: new Date(),
  tabs: {
    facts: 'Important wetland area, habitat for various bird species',
    visiting_info: 'Accessible for bird watching, nature photography',
    animals_found: ['Water birds', 'Migratory species', 'Aquatic life']
  }
};

export const yamunaBiodiversityData: KarnatakaPOI = {
  id: 'yamuna_biodiversity_delhi',
  name: 'Yamuna Biodiversity Park',
  category: 'wildlife',
  coordinates: { lat: 28.6139, lng: 77.2090 },
  description: 'Biodiversity park along Yamuna river.',
  banner_image: {
    storage_path: 'delhi/wildlife/yamuna-biodiversity/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Yamuna Biodiversity Park',
    credit: 'Unsplash',
    alt_text: 'Yamuna Biodiversity Park',
    uploaded_at: new Date()
  },
  icon_type: 'bird',
  created_at: new Date(),
  tabs: {
    facts: 'Biodiversity park along Yamuna, conservation area',
    visiting_info: 'Open for visitors, educational tours available',
    animals_found: ['Various bird species', 'Small mammals', 'Aquatic life']
  }
};

export default [asolaData, okhlaData, najafgarhData, yamunaBiodiversityData];

