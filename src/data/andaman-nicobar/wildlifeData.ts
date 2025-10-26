// Andaman and Nicobar Islands Wildlife Data
import { KarnatakaPOI } from '../../types/database';

export const mahatmaGandhiData: KarnatakaPOI = {
  id: 'mahatma_gandhi_andaman',
  name: 'Mahatma Gandhi Marine National Park',
  category: 'wildlife',
  coordinates: { lat: 11.6667, lng: 92.7500 },
  description: 'Marine national park in Andaman Islands.',
  banner_image: {
    storage_path: 'andaman-nicobar/wildlife/mahatma-gandhi/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Mahatma Gandhi Marine National Park',
    credit: 'Unsplash',
    alt_text: 'Mahatma Gandhi Marine National Park',
    uploaded_at: new Date()
  },
  icon_type: 'fish',
  created_at: new Date(),
  tabs: {
    facts: 'Marine national park in Andaman Islands, important for marine life',
    visiting_info: 'Open for visitors, snorkeling and diving available',
    animals_found: ['Coral fish', 'Marine turtles', 'Dolphins', 'Whales']
  }
};

export const campbellBayData: KarnatakaPOI = {
  id: 'campbell_bay_andaman',
  name: 'Campbell Bay National Park',
  category: 'wildlife',
  coordinates: { lat: 7.0000, lng: 93.7500 },
  description: 'National park in Great Nicobar.',
  banner_image: {
    storage_path: 'andaman-nicobar/wildlife/campbell-bay/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Campbell Bay National Park',
    credit: 'Unsplash',
    alt_text: 'Campbell Bay National Park',
    uploaded_at: new Date()
  },
  icon_type: 'bird',
  created_at: new Date(),
  tabs: {
    facts: 'National park in Great Nicobar, important for wildlife',
    visiting_info: 'Open for visitors, nature trails available',
    animals_found: ['Nicobar megapode', 'Various bird species', 'Small mammals']
  }
};

export const mountHarrietData: KarnatakaPOI = {
  id: 'mount_harriet_andaman',
  name: 'Mount Harriet National Park',
  category: 'wildlife',
  coordinates: { lat: 11.6667, lng: 92.7500 },
  description: 'National park on Mount Harriet.',
  banner_image: {
    storage_path: 'andaman-nicobar/wildlife/mount-harriet/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Mount Harriet National Park',
    credit: 'Unsplash',
    alt_text: 'Mount Harriet National Park',
    uploaded_at: new Date()
  },
  icon_type: 'bird',
  created_at: new Date(),
  tabs: {
    facts: 'National park on Mount Harriet, important for wildlife',
    visiting_info: 'Open for visitors, nature trails available',
    animals_found: ['Various bird species', 'Small mammals', 'Reptiles']
  }
};

export const raniJhansiData: KarnatakaPOI = {
  id: 'rani_jhansi_andaman',
  name: 'Rani Jhansi Marine National Park',
  category: 'wildlife',
  coordinates: { lat: 12.0167, lng: 92.9833 },
  description: 'Marine national park near Havelock Island.',
  banner_image: {
    storage_path: 'andaman-nicobar/wildlife/rani-jhansi/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Rani Jhansi Marine National Park',
    credit: 'Unsplash',
    alt_text: 'Rani Jhansi Marine National Park',
    uploaded_at: new Date()
  },
  icon_type: 'fish',
  created_at: new Date(),
  tabs: {
    facts: 'Marine national park near Havelock Island, important for marine life',
    visiting_info: 'Open for visitors, snorkeling and diving available',
    animals_found: ['Coral fish', 'Marine turtles', 'Dolphins', 'Whales']
  }
};

export default [mahatmaGandhiData, campbellBayData, mountHarrietData, raniJhansiData];

