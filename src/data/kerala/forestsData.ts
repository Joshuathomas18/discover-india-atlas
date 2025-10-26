// Kerala Forests Data
// Comprehensive data for major forests in Kerala with 3 tabs each

import { KarnatakaPOI, ForestTabs, ImageReference } from '../../types/database';

// Munnar Tea Plantations
export const munnarTeaPlantationsData: KarnatakaPOI = {
  id: 'munnar_tea_plantations',
  name: 'Munnar Tea Plantations',
  category: 'forest',
  description: 'Famous tea plantations covering the hills of Munnar, known for their scenic beauty',
  coordinates: { lat: 10.0889, lng: 77.0595 },
  banner_image: {
    storage_path: 'kerala/forests/munnar_tea/banner.jpg',
    download_url: '',
    caption: 'Munnar Tea Plantations',
    credit: 'Kerala Tourism',
    alt_text: 'Munnar tea plantations with scenic views',
    uploaded_at: new Date()
  },
  icon_type: 'tree',
  created_at: new Date(),
  tabs: {
    facts: 'Munnar Tea Plantations cover vast areas of the Western Ghats, creating a unique landscape of rolling hills covered with tea bushes. The plantations were established by the British in the 19th century and are now managed by various tea companies. The tea gardens are known for their scenic beauty and are a major tourist attraction in Kerala.',
    visiting_info: 'Munnar Tea Plantations can be visited throughout the year, with the best time being from October to March. Entry fees: INR 50 (adults), INR 25 (children) for plantation tours. The plantations are open from 9:00 AM to 5:00 PM. Accommodation options include luxury resorts, tea estate bungalows, and budget hotels. The nearest town is Munnar, which is well-connected by road.',
    animals_found: [
      'Indian Elephant',
      'Indian Leopard',
      'Striped Hyena',
      'Golden Jackal',
      'Sambar Deer',
      'Spotted Deer (Chital)',
      'Wild Boar',
      'Indian Porcupine',
      'Indian Hare',
      'Peafowl',
      'Grey Francolin',
      'Red Junglefowl',
      'Indian Eagle',
      'Vulture',
      'Kingfisher'
    ]
  } as ForestTabs
};

// Wayanad Coffee Plantations
export const wayanadCoffeePlantationsData: KarnatakaPOI = {
  id: 'wayanad_coffee_plantations',
  name: 'Wayanad Coffee Plantations',
  category: 'forest',
  description: 'Coffee plantations in Wayanad, known for their organic coffee production',
  coordinates: { lat: 11.6667, lng: 76.0000 },
  banner_image: {
    storage_path: 'kerala/forests/wayanad_coffee/banner.jpg',
    download_url: '',
    caption: 'Wayanad Coffee Plantations',
    credit: 'Kerala Tourism',
    alt_text: 'Wayanad coffee plantations with scenic views',
    uploaded_at: new Date()
  },
  icon_type: 'tree',
  created_at: new Date(),
  tabs: {
    facts: 'Wayanad Coffee Plantations are known for their organic coffee production and scenic beauty. The plantations are located in the Western Ghats and are managed by local farmers and cooperatives. The coffee grown here is known for its quality and is exported to various countries. The plantations also support diverse wildlife and are a major tourist attraction.',
    visiting_info: 'Wayanad Coffee Plantations can be visited throughout the year, with the best time being from October to March. Entry fees: INR 50 (adults), INR 25 (children) for plantation tours. The plantations are open from 9:00 AM to 5:00 PM. Accommodation options include forest lodges and hotels in Wayanad. The nearest town is Kalpetta, which is well-connected by road.',
    animals_found: [
      'Indian Elephant',
      'Indian Leopard',
      'Striped Hyena',
      'Golden Jackal',
      'Sambar Deer',
      'Spotted Deer (Chital)',
      'Wild Boar',
      'Indian Porcupine',
      'Indian Hare',
      'Peafowl',
      'Grey Francolin',
      'Red Junglefowl',
      'Indian Eagle',
      'Vulture',
      'Kingfisher'
    ]
  } as ForestTabs
};

// Export all forests data
export const keralaForestsData: KarnatakaPOI[] = [
  munnarTeaPlantationsData,
  wayanadCoffeePlantationsData
];

export default keralaForestsData;

