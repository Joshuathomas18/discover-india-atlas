// Andaman and Nicobar Islands Places Data
import { KarnatakaPOI } from '../../types/database';

export const portBlairData: KarnatakaPOI = {
  id: 'port_blair_andaman',
  name: 'Port Blair',
  category: 'place',
  coordinates: { lat: 11.6667, lng: 92.7500 },
  description: 'Capital of Andaman and Nicobar Islands, known for its colonial history.',
  banner_image: {
    storage_path: 'andaman-nicobar/places/port-blair/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Port Blair - Capital',
    credit: 'Unsplash',
    alt_text: 'Port Blair colonial buildings',
    uploaded_at: new Date()
  },
  icon_type: 'city',
  created_at: new Date(),
  tabs: {
    monuments: 'Cellular Jail, Ross Island, Anthropological Museum, Samudrika Naval Museum',
    food: 'Seafood, Coconut-based dishes, Local specialties, Traditional cuisine',
    customs: 'Tribal culture, Colonial heritage, Island lifestyle',
    festivals: 'Local festivals, Cultural events, Traditional celebrations',
    history: 'British colonial period, Cellular Jail, Independence movement'
  }
};

export const havelockData: KarnatakaPOI = {
  id: 'havelock_andaman',
  name: 'Havelock Island',
  category: 'place',
  coordinates: { lat: 12.0167, lng: 92.9833 },
  description: 'Popular tourist destination known for its beaches.',
  banner_image: {
    storage_path: 'andaman-nicobar/places/havelock/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Havelock Island - Beach Destination',
    credit: 'Unsplash',
    alt_text: 'Havelock Island beaches',
    uploaded_at: new Date()
  },
  icon_type: 'city',
  created_at: new Date(),
  tabs: {
    monuments: 'Radhanagar Beach, Elephant Beach, Traditional buildings',
    food: 'Seafood, Coconut-based dishes, Local specialties, Traditional cuisine',
    customs: 'Island culture, Beach lifestyle, Traditional practices',
    festivals: 'Local festivals, Beach celebrations, Cultural events',
    history: 'Tourist development, Traditional fishing, Cultural heritage'
  }
};

export const neilData: KarnatakaPOI = {
  id: 'neil_andaman',
  name: 'Neil Island',
  category: 'place',
  coordinates: { lat: 11.8333, lng: 93.0500 },
  description: 'Small island known for its natural beauty.',
  banner_image: {
    storage_path: 'andaman-nicobar/places/neil/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Neil Island - Natural Beauty',
    credit: 'Unsplash',
    alt_text: 'Neil Island natural beauty',
    uploaded_at: new Date()
  },
  icon_type: 'city',
  created_at: new Date(),
  tabs: {
    monuments: 'Natural monuments, Traditional buildings, Beach formations',
    food: 'Seafood, Coconut-based dishes, Local specialties, Traditional cuisine',
    customs: 'Island culture, Traditional lifestyle, Natural practices',
    festivals: 'Local festivals, Natural celebrations, Cultural events',
    history: 'Natural heritage, Traditional fishing, Cultural significance'
  }
};

export default [portBlairData, havelockData, neilData];

