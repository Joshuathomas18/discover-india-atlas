// Jammu and Kashmir Places Data
import { KarnatakaPOI } from '../../types/database';

export const srinagarData: KarnatakaPOI = {
  id: 'srinagar_jk',
  name: 'Srinagar',
  category: 'place',
  coordinates: { lat: 34.0837, lng: 74.7973 },
  description: 'Summer capital of Jammu and Kashmir, known for Dal Lake and houseboats.',
  banner_image: {
    storage_path: 'jammu-kashmir/places/srinagar/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Srinagar - Dal Lake',
    credit: 'Unsplash',
    alt_text: 'Srinagar Dal Lake with houseboats',
    uploaded_at: new Date()
  },
  icon_type: 'city',
  created_at: new Date(),
  tabs: {
    monuments: 'Dal Lake, Mughal Gardens, Hazratbal Shrine, Shankaracharya Temple',
    food: 'Wazwan, Rogan Josh, Kahwa, Kashmiri cuisine, Traditional dishes',
    customs: 'Kashmiri culture, Sufi traditions, Handicrafts, Shikara rides',
    festivals: 'Eid, Tulip Festival, Shivratri, Urs celebrations',
    history: 'Mughal period, Dogra rule, Partition, Cultural heritage'
  }
};

export const jammuData: KarnatakaPOI = {
  id: 'jammu_jk',
  name: 'Jammu',
  category: 'place',
  coordinates: { lat: 32.7266, lng: 74.8570 },
  description: 'Winter capital of Jammu and Kashmir, known for temples.',
  banner_image: {
    storage_path: 'jammu-kashmir/places/jammu/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Jammu - City of Temples',
    credit: 'Unsplash',
    alt_text: 'Jammu city temples',
    uploaded_at: new Date()
  },
  icon_type: 'city',
  created_at: new Date(),
  tabs: {
    monuments: 'Vaishno Devi Temple, Raghunath Temple, Bahu Fort, Amar Mahal Palace',
    food: 'Rajma Chawal, Kalari, Dogra cuisine, Traditional dishes',
    customs: 'Dogra culture, Hindu traditions, Temple rituals',
    festivals: 'Navratri, Diwali, Lohri, Religious festivals',
    history: 'Dogra dynasty, Hindu heritage, Cultural significance'
  }
};

export const gulmargData: KarnatakaPOI = {
  id: 'gulmarg_jk',
  name: 'Gulmarg',
  category: 'place',
  coordinates: { lat: 34.0484, lng: 74.3805 },
  description: 'Hill station known for skiing and gondola rides.',
  banner_image: {
    storage_path: 'jammu-kashmir/places/gulmarg/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Gulmarg - Skiing Destination',
    credit: 'Unsplash',
    alt_text: 'Gulmarg skiing slopes',
    uploaded_at: new Date()
  },
  icon_type: 'city',
  created_at: new Date(),
  tabs: {
    monuments: 'Gulmarg Gondola, Apharwat Peak, St. Mary\'s Church, Skiing slopes',
    food: 'Kashmiri cuisine, Hot beverages, Local specialties',
    customs: 'Hill station culture, Skiing traditions, Tourism',
    festivals: 'Winter sports festivals, Local celebrations',
    history: 'British period, Tourism development, Skiing heritage'
  }
};

export default [srinagarData, jammuData, gulmargData];

