// Chandigarh Mountains Data
import { KarnatakaPOI } from '../../types/database';

export const shivalikData: KarnatakaPOI = {
  id: 'shivalik_chandigarh',
  name: 'Shivalik Hills',
  category: 'mountain',
  coordinates: { lat: 30.7333, lng: 76.7794 },
  description: 'Mountain range near Chandigarh.',
  banner_image: {
    storage_path: 'chandigarh/mountains/shivalik/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Shivalik Hills',
    credit: 'Unsplash',
    alt_text: 'Shivalik Hills',
    uploaded_at: new Date()
  },
  icon_type: 'mountain',
  created_at: new Date(),
  tabs: {
    facts: 'Mountain range near Chandigarh, part of Himalayas',
    trekking: 'Hiking trails, nature walks, eco-tourism',
    how_to_reach: 'Accessible from Chandigarh and surrounding areas'
  }
};

export const kasauliData: KarnatakaPOI = {
  id: 'kasauli_chandigarh',
  name: 'Kasauli',
  category: 'mountain',
  coordinates: { lat: 30.8986, lng: 76.9653 },
  description: 'Hill station near Chandigarh.',
  banner_image: {
    storage_path: 'chandigarh/mountains/kasauli/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Kasauli Hill Station',
    credit: 'Unsplash',
    alt_text: 'Kasauli Hill Station',
    uploaded_at: new Date()
  },
  icon_type: 'mountain',
  created_at: new Date(),
  tabs: {
    facts: 'Popular hill station near Chandigarh, scenic beauty',
    trekking: 'Nature trails, hiking paths, scenic walks',
    how_to_reach: 'Accessible by road from Chandigarh'
  }
};

export default [shivalikData, kasauliData];

