// Dadra and Nagar Haveli and Daman and Diu Places Data
import { KarnatakaPOI } from '../../types/database';

export const silvassaData: KarnatakaPOI = {
  id: 'silvassa_dnh_dd',
  name: 'Silvassa',
  category: 'place',
  coordinates: { lat: 20.2737, lng: 73.0135 },
  description: 'Capital of Dadra and Nagar Haveli, known for its tribal culture.',
  banner_image: {
    storage_path: 'dadra-nagar-haveli-daman-diu/places/silvassa/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Silvassa - Tribal Capital',
    credit: 'Unsplash',
    alt_text: 'Silvassa tribal culture',
    uploaded_at: new Date()
  },
  icon_type: 'city',
  created_at: new Date(),
  tabs: {
    monuments: 'Tribal Cultural Museum, Vanganga Lake Garden, Hirwa Van Gardens',
    food: 'Tribal cuisine, Gujarati food, Seafood, Local specialties',
    customs: 'Tribal culture, Portuguese heritage, Traditional practices',
    festivals: 'Tribal festivals, Local celebrations, Cultural events',
    history: 'Portuguese colonial period, Tribal heritage, Union Territory formation'
  }
};

export const damanData: KarnatakaPOI = {
  id: 'daman_dnh_dd',
  name: 'Daman',
  category: 'place',
  coordinates: { lat: 20.4140, lng: 72.8397 },
  description: 'Coastal town known for its beaches and Portuguese heritage.',
  banner_image: {
    storage_path: 'dadra-nagar-haveli-daman-diu/places/daman/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Daman - Portuguese Heritage',
    credit: 'Unsplash',
    alt_text: 'Daman coastal town',
    uploaded_at: new Date()
  },
  icon_type: 'city',
  created_at: new Date(),
  tabs: {
    monuments: 'Daman Fort, Moti Daman Fort, Jampore Beach, Devka Beach',
    food: 'Seafood, Portuguese cuisine, Gujarati food, Local specialties',
    customs: 'Portuguese heritage, Coastal culture, Traditional practices',
    festivals: 'Local festivals, Coastal celebrations, Cultural events',
    history: 'Portuguese colonial period, Coastal heritage, Union Territory'
  }
};

export const diuData: KarnatakaPOI = {
  id: 'diu_dnh_dd',
  name: 'Diu',
  category: 'place',
  coordinates: { lat: 20.7144, lng: 70.9871 },
  description: 'Island town known for its beaches and Portuguese architecture.',
  banner_image: {
    storage_path: 'dadra-nagar-haveli-daman-diu/places/diu/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Diu - Island Town',
    credit: 'Unsplash',
    alt_text: 'Diu island town',
    uploaded_at: new Date()
  },
  icon_type: 'city',
  created_at: new Date(),
  tabs: {
    monuments: 'Diu Fort, St. Paul\'s Church, Naida Caves, Nagoa Beach',
    food: 'Seafood, Portuguese cuisine, Gujarati food, Local specialties',
    customs: 'Portuguese heritage, Island culture, Traditional practices',
    festivals: 'Local festivals, Island celebrations, Cultural events',
    history: 'Portuguese colonial period, Island heritage, Union Territory'
  }
};

export default [silvassaData, damanData, diuData];

