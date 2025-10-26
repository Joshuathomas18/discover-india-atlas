// Goa Wildlife Data
// Comprehensive data for major wildlife sanctuaries in Goa with 3 tabs each

import { KarnatakaPOI, WildlifeTabs, ImageReference } from '../../types/database';

// Bhagwan Mahavir Wildlife Sanctuary
export const bhagwanMahavirData: KarnatakaPOI = {
  id: 'bhagwan_mahavir_wildlife_sanctuary',
  name: 'Bhagwan Mahavir Wildlife Sanctuary',
  category: 'wildlife',
  description: 'Largest wildlife sanctuary in Goa, known for its diverse wildlife and scenic beauty',
  coordinates: { lat: 15.3000, lng: 74.2000 },
  banner_image: {
    storage_path: 'goa/wildlife/bhagwan_mahavir/banner.jpg',
    download_url: '',
    caption: 'Bhagwan Mahavir Wildlife Sanctuary',
    credit: 'Goa Tourism',
    alt_text: 'Bhagwan Mahavir Wildlife Sanctuary with wildlife',
    uploaded_at: new Date()
  },
  icon_type: 'elephant',
  created_at: new Date(),
  tabs: {
    facts: 'Bhagwan Mahavir Wildlife Sanctuary is the largest wildlife sanctuary in Goa, covering an area of 240 square kilometers. It was established in 1969 and is famous for its diverse wildlife, including tigers, leopards, and elephants. The sanctuary is also home to the famous Dudhsagar Falls and is known for its scenic beauty and rich biodiversity.',
    visiting_info: 'Bhagwan Mahavir Wildlife Sanctuary offers jeep safaris and trekking opportunities for wildlife viewing. Safari timings are: Morning 6:00 AM - 10:00 AM, Evening 2:00 PM - 6:00 PM. Entry fees: INR 200 (Indians), INR 1,000 (foreigners) for jeep safari. The sanctuary is open from October to June and closed during monsoon season (July-September). Accommodation options include forest lodges and hotels in Ponda. The nearest town is Ponda, which is about 20 km away.',
    animals_found: [
      'Bengal Tiger',
      'Indian Elephant',
      'Indian Leopard',
      'Sloth Bear',
      'Striped Hyena',
      'Sambar Deer',
      'Spotted Deer (Chital)',
      'Nilgai (Blue Bull)',
      'Wild Boar',
      'Indian Porcupine',
      'Indian Hare',
      'Peafowl',
      'Grey Francolin',
      'Red Junglefowl',
      'Indian Eagle'
    ]
  } as WildlifeTabs
};

// Mollem National Park
export const mollemNationalParkData: KarnatakaPOI = {
  id: 'mollem_national_park',
  name: 'Mollem National Park',
  category: 'wildlife',
  description: 'National park known for its diverse wildlife and scenic beauty',
  coordinates: { lat: 15.3000, lng: 74.2000 },
  banner_image: {
    storage_path: 'goa/wildlife/mollem/banner.jpg',
    download_url: '',
    caption: 'Mollem National Park',
    credit: 'Goa Tourism',
    alt_text: 'Mollem National Park with wildlife',
    uploaded_at: new Date()
  },
  icon_type: 'elephant',
  created_at: new Date(),
  tabs: {
    facts: 'Mollem National Park is located in the Western Ghats of Goa, covering an area of 107 square kilometers. It was established in 1978 and is famous for its diverse wildlife, including tigers, leopards, and elephants. The park is also home to the famous Dudhsagar Falls and is known for its scenic beauty and rich biodiversity.',
    visiting_info: 'Mollem National Park offers jeep safaris and trekking opportunities for wildlife viewing. Safari timings are: Morning 6:00 AM - 10:00 AM, Evening 2:00 PM - 6:00 PM. Entry fees: INR 200 (Indians), INR 1,000 (foreigners) for jeep safari. The park is open from October to June and closed during monsoon season (July-September). Accommodation options include forest lodges and hotels in Ponda. The nearest town is Ponda, which is about 20 km away.',
    animals_found: [
      'Bengal Tiger',
      'Indian Elephant',
      'Indian Leopard',
      'Sloth Bear',
      'Striped Hyena',
      'Sambar Deer',
      'Spotted Deer (Chital)',
      'Nilgai (Blue Bull)',
      'Wild Boar',
      'Indian Porcupine',
      'Indian Hare',
      'Peafowl',
      'Grey Francolin',
      'Red Junglefowl',
      'Indian Eagle'
    ]
  } as WildlifeTabs
};

// Export all wildlife data
export const goaWildlifeData: KarnatakaPOI[] = [
  bhagwanMahavirData,
  mollemNationalParkData
];

export default goaWildlifeData;

