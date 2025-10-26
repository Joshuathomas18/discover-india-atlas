// Chandigarh Places Data
import { KarnatakaPOI } from '../../types/database';

export const chandigarhData: KarnatakaPOI = {
  id: 'chandigarh_chandigarh',
  name: 'Chandigarh',
  category: 'place',
  coordinates: { lat: 30.7333, lng: 76.7794 },
  description: 'Planned city and capital of Punjab and Haryana.',
  banner_image: {
    storage_path: 'chandigarh/places/chandigarh/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Chandigarh - Planned City',
    credit: 'Unsplash',
    alt_text: 'Chandigarh cityscape',
    uploaded_at: new Date()
  },
  icon_type: 'city',
  created_at: new Date(),
  tabs: {
    monuments: 'Rock Garden, Sukhna Lake, Capitol Complex, Rose Garden',
    food: 'Chole Bhature, Butter Chicken, Punjabi cuisine, Street food',
    customs: 'Modern planned city culture, Punjabi traditions',
    festivals: 'Baisakhi, Diwali, Holi, Republic Day, Independence Day',
    history: 'Designed by Le Corbusier, planned city development'
  }
};

export const mohaliData: KarnatakaPOI = {
  id: 'mohali_chandigarh',
  name: 'Mohali',
  category: 'place',
  coordinates: { lat: 30.7041, lng: 76.7179 },
  description: 'Industrial and residential city near Chandigarh.',
  banner_image: {
    storage_path: 'chandigarh/places/mohali/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Mohali - Industrial City',
    credit: 'Unsplash',
    alt_text: 'Mohali cityscape',
    uploaded_at: new Date()
  },
  icon_type: 'city',
  created_at: new Date(),
  tabs: {
    monuments: 'Modern buildings, Industrial complexes, Shopping malls',
    food: 'Punjabi cuisine, Street food, Local specialties',
    customs: 'Industrial culture, Punjabi traditions, Modern lifestyle',
    festivals: 'Local festivals, Cultural events, Traditional celebrations',
    history: 'Industrial development, Modern urbanization'
  }
};

export const panchkulaData: KarnatakaPOI = {
  id: 'panchkula_chandigarh',
  name: 'Panchkula',
  category: 'place',
  coordinates: { lat: 30.6942, lng: 76.8606 },
  description: 'Residential city in Haryana near Chandigarh.',
  banner_image: {
    storage_path: 'chandigarh/places/panchkula/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Panchkula - Residential City',
    credit: 'Unsplash',
    alt_text: 'Panchkula residential area',
    uploaded_at: new Date()
  },
  icon_type: 'city',
  created_at: new Date(),
  tabs: {
    monuments: 'Residential complexes, Modern buildings, Shopping centers',
    food: 'Local cuisine, Street food, Traditional dishes',
    customs: 'Residential culture, Haryanvi traditions, Community life',
    festivals: 'Local festivals, Cultural events, Traditional celebrations',
    history: 'Residential development, Urban planning'
  }
};

export default [chandigarhData, mohaliData, panchkulaData];

