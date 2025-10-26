// Puducherry Places Data
import { KarnatakaPOI } from '../../types/database';

export const puducherryData: KarnatakaPOI = {
  id: 'puducherry_puducherry',
  name: 'Puducherry',
  category: 'place',
  coordinates: { lat: 11.9416, lng: 79.8083 },
  description: 'Union Territory known for its French colonial heritage and beaches.',
  banner_image: {
    storage_path: 'puducherry/places/puducherry/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Puducherry - French Heritage',
    credit: 'Unsplash',
    alt_text: 'Puducherry French Quarter',
    uploaded_at: new Date()
  },
  icon_type: 'city',
  created_at: new Date(),
  tabs: {
    monuments: 'French Quarter, Aurobindo Ashram, Basilica of the Sacred Heart',
    food: 'French cuisine, South Indian food, Seafood, Continental dishes',
    customs: 'French colonial heritage, Tamil culture, Spiritual traditions',
    festivals: 'Bastille Day, Tamil festivals, Spiritual celebrations',
    history: 'French colonial period, Independence, Spiritual heritage'
  }
};

export const karaikalData: KarnatakaPOI = {
  id: 'karaikal_puducherry',
  name: 'Karaikal',
  category: 'place',
  coordinates: { lat: 10.9167, lng: 79.8333 },
  description: 'Coastal town in Puducherry.',
  banner_image: {
    storage_path: 'puducherry/places/karaikal/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Karaikal - Coastal Town',
    credit: 'Unsplash',
    alt_text: 'Karaikal coastal area',
    uploaded_at: new Date()
  },
  icon_type: 'city',
  created_at: new Date(),
  tabs: {
    monuments: 'Coastal monuments, Religious sites, Traditional buildings',
    food: 'Coastal cuisine, Seafood, Traditional Tamil food',
    customs: 'Coastal culture, Tamil traditions, Fishing community',
    festivals: 'Local festivals, Religious celebrations, Coastal events',
    history: 'Coastal development, Traditional fishing, Cultural heritage'
  }
};

export const maheData: KarnatakaPOI = {
  id: 'mahe_puducherry',
  name: 'Mahe',
  category: 'place',
  coordinates: { lat: 11.7000, lng: 75.5333 },
  description: 'Small coastal town in Puducherry.',
  banner_image: {
    storage_path: 'puducherry/places/mahe/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Mahe - Coastal Town',
    credit: 'Unsplash',
    alt_text: 'Mahe coastal town',
    uploaded_at: new Date()
  },
  icon_type: 'city',
  created_at: new Date(),
  tabs: {
    monuments: 'Coastal monuments, Traditional buildings, Religious sites',
    food: 'Coastal cuisine, Seafood, Local specialties',
    customs: 'Coastal culture, Traditional practices, Community life',
    festivals: 'Local festivals, Coastal celebrations, Cultural events',
    history: 'Coastal development, Traditional fishing, Cultural heritage'
  }
};

export default [puducherryData, karaikalData, maheData];

