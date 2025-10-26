// Lakshadweep Places Data
import { KarnatakaPOI } from '../../types/database';

export const kavarattiData: KarnatakaPOI = {
  id: 'kavaratti_lakshadweep',
  name: 'Kavaratti',
  category: 'place',
  coordinates: { lat: 10.5667, lng: 72.6167 },
  description: 'Capital of Lakshadweep, known for its lagoons and coral reefs.',
  banner_image: {
    storage_path: 'lakshadweep/places/kavaratti/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Kavaratti - Capital of Lakshadweep',
    credit: 'Unsplash',
    alt_text: 'Kavaratti island with lagoons',
    uploaded_at: new Date()
  },
  icon_type: 'city',
  created_at: new Date(),
  tabs: {
    monuments: 'Ujra Mosque, Marine Aquarium, Lighthouse, Government buildings',
    food: 'Seafood, Coconut-based dishes, Local specialties, Traditional cuisine',
    customs: 'Malayalam culture, Islamic traditions, Island lifestyle',
    festivals: 'Islamic festivals, Local celebrations, Cultural events',
    history: 'Islamic heritage, Portuguese period, British rule, Union Territory'
  }
};

export const agattiData: KarnatakaPOI = {
  id: 'agatti_lakshadweep',
  name: 'Agatti',
  category: 'place',
  coordinates: { lat: 10.8333, lng: 72.1833 },
  description: 'Island with airport and beautiful beaches.',
  banner_image: {
    storage_path: 'lakshadweep/places/agatti/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Agatti - Island with Airport',
    credit: 'Unsplash',
    alt_text: 'Agatti island with airport',
    uploaded_at: new Date()
  },
  icon_type: 'city',
  created_at: new Date(),
  tabs: {
    monuments: 'Airport, Lighthouse, Traditional buildings, Religious sites',
    food: 'Seafood, Coconut-based dishes, Local specialties, Traditional cuisine',
    customs: 'Malayalam culture, Islamic traditions, Island lifestyle',
    festivals: 'Islamic festivals, Local celebrations, Cultural events',
    history: 'Aviation hub, Traditional fishing, Cultural heritage'
  }
};

export const bangaramData: KarnatakaPOI = {
  id: 'bangaram_lakshadweep',
  name: 'Bangaram',
  category: 'place',
  coordinates: { lat: 10.9333, lng: 72.2833 },
  description: 'Pristine island known for its natural beauty.',
  banner_image: {
    storage_path: 'lakshadweep/places/bangaram/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Bangaram - Pristine Island',
    credit: 'Unsplash',
    alt_text: 'Bangaram pristine island',
    uploaded_at: new Date()
  },
  icon_type: 'city',
  created_at: new Date(),
  tabs: {
    monuments: 'Natural monuments, Coral reefs, Traditional structures',
    food: 'Seafood, Coconut-based dishes, Local specialties, Traditional cuisine',
    customs: 'Malayalam culture, Islamic traditions, Island lifestyle',
    festivals: 'Islamic festivals, Local celebrations, Cultural events',
    history: 'Natural heritage, Traditional fishing, Cultural significance'
  }
};

export default [kavarattiData, agattiData, bangaramData];

