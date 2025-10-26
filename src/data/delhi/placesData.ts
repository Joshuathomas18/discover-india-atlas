// Delhi Places Data
import { KarnatakaPOI } from '../../types/database';

export const newDelhiData: KarnatakaPOI = {
  id: 'new_delhi_delhi',
  name: 'New Delhi',
  category: 'place',
  coordinates: { lat: 28.6139, lng: 77.2090 },
  description: 'Capital city of India, known for its rich history and modern infrastructure.',
  banner_image: {
    storage_path: 'delhi/places/new-delhi/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'New Delhi - Capital of India',
    credit: 'Unsplash',
    alt_text: 'New Delhi skyline with India Gate',
    uploaded_at: new Date()
  },
  icon_type: 'city',
  created_at: new Date(),
  tabs: {
    monuments: 'Red Fort, India Gate, Qutub Minar, Humayun\'s Tomb, Lotus Temple',
    food: 'Chole Bhature, Butter Chicken, Parathas, Chaat, Biryani',
    customs: 'Rich cultural heritage, festivals, traditional arts, diverse communities',
    festivals: 'Diwali, Holi, Eid, Christmas, Republic Day, Independence Day',
    history: 'Capital of Mughal Empire, British Raj, Independence movement, modern India'
  }
};

export const oldDelhiData: KarnatakaPOI = {
  id: 'old_delhi_delhi',
  name: 'Old Delhi',
  category: 'place',
  coordinates: { lat: 28.6562, lng: 77.2410 },
  description: 'Historic part of Delhi with narrow lanes and traditional markets.',
  banner_image: {
    storage_path: 'delhi/places/old-delhi/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Old Delhi - Historic Charm',
    credit: 'Unsplash',
    alt_text: 'Old Delhi streets and markets',
    uploaded_at: new Date()
  },
  icon_type: 'city',
  created_at: new Date(),
  tabs: {
    monuments: 'Red Fort, Jama Masjid, Chandni Chowk, Spice Market, Kinari Bazaar',
    food: 'Street food, Mughlai cuisine, Sweets, Traditional snacks',
    customs: 'Traditional markets, cultural practices, community life',
    festivals: 'Local festivals, religious celebrations, cultural events',
    history: 'Mughal era, British period, traditional trade, cultural heritage'
  }
};

export const gurgaonData: KarnatakaPOI = {
  id: 'gurgaon_delhi',
  name: 'Gurgaon',
  category: 'place',
  coordinates: { lat: 28.4595, lng: 77.0266 },
  description: 'Modern IT hub and business district in the National Capital Region.',
  banner_image: {
    storage_path: 'delhi/places/gurgaon/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Gurgaon - IT Hub',
    credit: 'Unsplash',
    alt_text: 'Gurgaon modern skyline',
    uploaded_at: new Date()
  },
  icon_type: 'city',
  created_at: new Date(),
  tabs: {
    monuments: 'Modern architecture, Corporate buildings, Shopping malls',
    food: 'Multi-cuisine restaurants, Fast food, International cuisine',
    customs: 'Modern lifestyle, Corporate culture, International community',
    festivals: 'Corporate events, International festivals, Modern celebrations',
    history: 'Rapid development, IT boom, Modern urbanization'
  }
};

export default [newDelhiData, oldDelhiData, gurgaonData];

