// Andaman and Nicobar Islands Mountains Data
import { KarnatakaPOI } from '../../types/database';

export const saddlePeakData: KarnatakaPOI = {
  id: 'saddle_peak_andaman',
  name: 'Saddle Peak',
  category: 'mountain',
  coordinates: { lat: 13.2500, lng: 93.0000 },
  description: 'Highest peak in Andaman Islands.',
  banner_image: {
    storage_path: 'andaman-nicobar/mountains/saddle-peak/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Saddle Peak',
    credit: 'Unsplash',
    alt_text: 'Saddle Peak highest peak',
    uploaded_at: new Date()
  },
  icon_type: 'mountain',
  created_at: new Date(),
  tabs: {
    facts: 'Highest peak in Andaman Islands, important for trekking',
    trekking: 'Hiking trails, nature walks, peak climbing',
    how_to_reach: 'Accessible by trekking from Diglipur'
  }
};

export const mountThullierData: KarnatakaPOI = {
  id: 'mount_thullier_andaman',
  name: 'Mount Thullier',
  category: 'mountain',
  coordinates: { lat: 7.0000, lng: 93.7500 },
  description: 'Highest peak in Nicobar Islands.',
  banner_image: {
    storage_path: 'andaman-nicobar/mountains/mount-thullier/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Mount Thullier',
    credit: 'Unsplash',
    alt_text: 'Mount Thullier highest peak',
    uploaded_at: new Date()
  },
  icon_type: 'mountain',
  created_at: new Date(),
  tabs: {
    facts: 'Highest peak in Nicobar Islands, important for trekking',
    trekking: 'Hiking trails, nature walks, peak climbing',
    how_to_reach: 'Accessible by trekking from Great Nicobar'
  }
};

export default [saddlePeakData, mountThullierData];

