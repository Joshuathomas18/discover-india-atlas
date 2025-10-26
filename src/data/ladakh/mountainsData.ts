// Ladakh Mountains Data
import { KarnatakaPOI } from '../../types/database';

export const khardungLaData: KarnatakaPOI = {
  id: 'khardung_la_ladakh',
  name: 'Khardung La',
  category: 'mountain',
  coordinates: { lat: 34.2784, lng: 77.6033 },
  description: 'One of the highest motorable passes in the world.',
  banner_image: {
    storage_path: 'ladakh/mountains/khardung-la/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Khardung La - Highest Motorable Pass',
    credit: 'Unsplash',
    alt_text: 'Khardung La mountain pass',
    uploaded_at: new Date()
  },
  icon_type: 'mountain',
  created_at: new Date(),
  tabs: {
    facts: 'One of the highest motorable passes in the world, gateway to Nubra Valley',
    trekking: 'Motorable pass, high-altitude experience, scenic views',
    how_to_reach: 'Accessible by road from Leh'
  }
};

export const changLaData: KarnatakaPOI = {
  id: 'chang_la_ladakh',
  name: 'Chang La',
  category: 'mountain',
  coordinates: { lat: 33.9667, lng: 78.0333 },
  description: 'High-altitude mountain pass.',
  banner_image: {
    storage_path: 'ladakh/mountains/chang-la/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Chang La - Mountain Pass',
    credit: 'Unsplash',
    alt_text: 'Chang La mountain pass',
    uploaded_at: new Date()
  },
  icon_type: 'mountain',
  created_at: new Date(),
  tabs: {
    facts: 'High-altitude mountain pass, gateway to Panggong Tso',
    trekking: 'Motorable pass, high-altitude experience, scenic views',
    how_to_reach: 'Accessible by road from Leh'
  }
};

export default [khardungLaData, changLaData];

