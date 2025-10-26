// Goa Forests Data
// Comprehensive data for major forests in Goa with 3 tabs each

import { KarnatakaPOI, ForestTabs, ImageReference } from '../../types/database';

// Goa Spice Plantations
export const goaSpicePlantationsData: KarnatakaPOI = {
  id: 'goa_spice_plantations',
  name: 'Goa Spice Plantations',
  category: 'forest',
  description: 'Famous spice plantations covering the hills of Goa, known for their scenic beauty',
  coordinates: { lat: 15.4000, lng: 74.0167 },
  banner_image: {
    storage_path: 'goa/forests/spice_plantations/banner.jpg',
    download_url: '',
    caption: 'Goa Spice Plantations',
    credit: 'Goa Tourism',
    alt_text: 'Goa spice plantations with scenic views',
    uploaded_at: new Date()
  },
  icon_type: 'tree',
  created_at: new Date(),
  tabs: {
    facts: 'Goa Spice Plantations cover vast areas of the Western Ghats, creating a unique landscape of rolling hills covered with spice plants. The plantations were established by the Portuguese in the 16th century and are now managed by various companies. The spice gardens are known for their scenic beauty and are a major tourist attraction in Goa.',
    visiting_info: 'Goa Spice Plantations can be visited throughout the year, with the best time being from October to March. Entry fees: INR 50 (adults), INR 25 (children) for plantation tours. The plantations are open from 9:00 AM to 5:00 PM. Accommodation options include luxury resorts, spice estate bungalows, and budget hotels. The nearest town is Ponda, which is well-connected by road.',
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
export const goaForestsData: KarnatakaPOI[] = [
  goaSpicePlantationsData
];

export default goaForestsData;

