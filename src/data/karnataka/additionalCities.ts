// Additional Cities for Karnataka
// Quick additions to expand the dataset

import { KarnatakaPOI, PlaceTabs } from '../../types/database';

export const hubliData: KarnatakaPOI = {
  id: 'hubli_karnataka',
  name: 'Hubli',
  category: 'place',
  description: 'Major commercial and educational hub in North Karnataka',
  coordinates: { lat: 15.3647, lng: 75.1240 },
  banner_image: {
    storage_path: 'karnataka/places/hubli/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Hubli City',
    credit: 'Unsplash',
    alt_text: 'Hubli city commercial center',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: {
    monuments: [],
    food: [],
    customs: [],
    festivals: [],
    history: []
  } as PlaceTabs
};

export const belgaumData: KarnatakaPOI = {
  id: 'belgaum_karnataka',
  name: 'Belgaum',
  category: 'place',
  description: 'Historic city known for its pleasant climate and military presence',
  coordinates: { lat: 15.8497, lng: 74.4977 },
  banner_image: {
    storage_path: 'karnataka/places/belgaum/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Belgaum City',
    credit: 'Unsplash',
    alt_text: 'Belgaum city with historical significance',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: {
    monuments: [],
    food: [],
    customs: [],
    festivals: [],
    history: []
  } as PlaceTabs
};

export const shimogaData: KarnatakaPOI = {
  id: 'shimoga_karnataka',
  name: 'Shimoga',
  category: 'place',
  description: 'Gateway to the Western Ghats, rich in natural beauty',
  coordinates: { lat: 13.9299, lng: 75.5681 },
  banner_image: {
    storage_path: 'karnataka/places/shimoga/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Shimoga City',
    credit: 'Unsplash',
    alt_text: 'Shimoga city gateway to Western Ghats',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: {
    monuments: [],
    food: [],
    customs: [],
    festivals: [],
    history: []
  } as PlaceTabs
};

export const udupiData: KarnatakaPOI = {
  id: 'udupi_karnataka',
  name: 'Udupi',
  category: 'place',
  description: 'Famous for temples and delicious vegetarian cuisine',
  coordinates: { lat: 13.3409, lng: 74.7421 },
  banner_image: {
    storage_path: 'karnataka/places/udupi/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Udupi City',
    credit: 'Unsplash',
    alt_text: 'Udupi city with temples',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: {
    monuments: [],
    food: [],
    customs: [],
    festivals: [],
    history: []
  } as PlaceTabs
};

export const davangereData: KarnatakaPOI = {
  id: 'davangere_karnataka',
  name: 'Davangere',
  category: 'place',
  description: 'Known for textile industry and famous Davangere Benne Dosa',
  coordinates: { lat: 14.4644, lng: 75.9218 },
  banner_image: {
    storage_path: 'karnataka/places/davangere/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Davangere City',
    credit: 'Unsplash',
    alt_text: 'Davangere city industrial center',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: {
    monuments: [],
    food: [],
    customs: [],
    festivals: [],
    history: []
  } as PlaceTabs
};

export const additionalCitiesData = [
  hubliData,
  belgaumData,
  shimogaData,
  udupiData,
  davangereData
];

export default additionalCitiesData;
