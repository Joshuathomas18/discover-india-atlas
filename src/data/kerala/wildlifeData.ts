// Kerala Wildlife Data
// Comprehensive data for major wildlife sanctuaries in Kerala with 3 tabs each

import { KarnatakaPOI, WildlifeTabs, ImageReference } from '../../types/database';

// Periyar Wildlife Sanctuary
export const periyarWildlifeData: KarnatakaPOI = {
  id: 'periyar_wildlife_sanctuary',
  name: 'Periyar Wildlife Sanctuary',
  category: 'wildlife',
  description: 'Famous tiger reserve and wildlife sanctuary, known for its elephant population and boat safaris',
  coordinates: { lat: 9.4667, lng: 77.1667 },
  banner_image: {
    storage_path: 'kerala/wildlife/periyar/banner.jpg',
    download_url: '',
    caption: 'Periyar Wildlife Sanctuary - Tiger Reserve',
    credit: 'Kerala Tourism',
    alt_text: 'Periyar Wildlife Sanctuary with elephants',
    uploaded_at: new Date()
  },
  icon_type: 'elephant',
  created_at: new Date(),
  tabs: {
    facts: 'Periyar Wildlife Sanctuary is one of the most famous wildlife sanctuaries in India, covering an area of 925 square kilometers. It was established in 1982 and is famous for its tiger population, with about 35-40 tigers. The sanctuary is also home to the Periyar Lake, which offers unique boat safari experiences. The sanctuary features diverse landscapes including tropical evergreen forests, grasslands, and wetlands.',
    visiting_info: 'Periyar Wildlife Sanctuary offers various safari options including boat safaris, jeep safaris, and trekking. Safari timings are: Morning 6:00 AM - 10:00 AM, Evening 2:00 PM - 6:00 PM. Entry fees: INR 1,200 (Indians), INR 1,800 (foreigners) for boat safari. The sanctuary is open from October to June and closed during monsoon season (July-September). Accommodation options include luxury resorts, forest lodges, and budget hotels. Advance booking is recommended for safaris, especially during peak season (October to March).',
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
      'Indian Python',
      'King Cobra',
      'Peafowl',
      'Kingfisher',
      'Eagle',
      'Vulture'
    ]
  } as WildlifeTabs
};

// Eravikulam National Park
export const eravikulamNationalParkData: KarnatakaPOI = {
  id: 'eravikulam_national_park',
  name: 'Eravikulam National Park',
  category: 'wildlife',
  description: 'National park known for its Nilgiri Tahr population and scenic beauty',
  coordinates: { lat: 10.1699, lng: 77.0603 },
  banner_image: {
    storage_path: 'kerala/wildlife/eravikulam/banner.jpg',
    download_url: '',
    caption: 'Eravikulam National Park',
    credit: 'Kerala Tourism',
    alt_text: 'Eravikulam National Park with Nilgiri Tahr',
    uploaded_at: new Date()
  },
  icon_type: 'mountain-goat',
  created_at: new Date(),
  tabs: {
    facts: 'Eravikulam National Park is located in the Western Ghats, covering an area of 97 square kilometers. It was established in 1978 and is famous for its Nilgiri Tahr population, with about 700-800 individuals. The park is also home to Anamudi Peak, the highest peak in South India. The park features diverse landscapes including grasslands, shola forests, and rocky terrain.',
    visiting_info: 'Eravikulam National Park offers jeep safaris and trekking opportunities for wildlife viewing. Safari timings are: Morning 6:00 AM - 10:00 AM, Evening 2:00 PM - 6:00 PM. Entry fees: INR 200 (Indians), INR 1,000 (foreigners) for jeep safari. The park is open from October to June and closed during monsoon season (July-September). Accommodation options include forest lodges and hotels in Munnar. The nearest town is Munnar, which is about 15 km away.',
    animals_found: [
      'Nilgiri Tahr',
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
      'Vulture'
    ]
  } as WildlifeTabs
};

// Wayanad Wildlife Sanctuary
export const wayanadWildlifeData: KarnatakaPOI = {
  id: 'wayanad_wildlife_sanctuary',
  name: 'Wayanad Wildlife Sanctuary',
  category: 'wildlife',
  description: 'Wildlife sanctuary known for its elephant population and scenic beauty',
  coordinates: { lat: 11.6667, lng: 76.0000 },
  banner_image: {
    storage_path: 'kerala/wildlife/wayanad/banner.jpg',
    download_url: '',
    caption: 'Wayanad Wildlife Sanctuary',
    credit: 'Kerala Tourism',
    alt_text: 'Wayanad Wildlife Sanctuary with elephants',
    uploaded_at: new Date()
  },
  icon_type: 'elephant',
  created_at: new Date(),
  tabs: {
    facts: 'Wayanad Wildlife Sanctuary is located in the Wayanad district of Kerala, covering an area of 344 square kilometers. It was established in 1973 and is famous for its elephant population, with about 200-250 individuals. The sanctuary is part of the Nilgiri Biosphere Reserve and is known for its scenic beauty and diverse wildlife. The sanctuary features diverse landscapes including tropical evergreen forests, grasslands, and wetlands.',
    visiting_info: 'Wayanad Wildlife Sanctuary offers jeep safaris and trekking opportunities for wildlife viewing. Safari timings are: Morning 6:00 AM - 10:00 AM, Evening 2:00 PM - 6:00 PM. Entry fees: INR 200 (Indians), INR 1,000 (foreigners) for jeep safari. The sanctuary is open from October to June and closed during monsoon season (July-September). Accommodation options include forest lodges and hotels in Wayanad. The nearest town is Kalpetta, which is about 20 km away.',
    animals_found: [
      'Indian Elephant',
      'Bengal Tiger',
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

// Silent Valley National Park
export const silentValleyNationalParkData: KarnatakaPOI = {
  id: 'silent_valley_national_park',
  name: 'Silent Valley National Park',
  category: 'wildlife',
  description: 'National park known for its pristine rainforest and diverse wildlife',
  coordinates: { lat: 11.0833, lng: 76.4167 },
  banner_image: {
    storage_path: 'kerala/wildlife/silent_valley/banner.jpg',
    download_url: '',
    caption: 'Silent Valley National Park',
    credit: 'Kerala Tourism',
    alt_text: 'Silent Valley National Park rainforest',
    uploaded_at: new Date()
  },
  icon_type: 'tree',
  created_at: new Date(),
  tabs: {
    facts: 'Silent Valley National Park is located in the Palakkad district of Kerala, covering an area of 89 square kilometers. It was established in 1984 and is famous for its pristine rainforest ecosystem. The park is home to several endangered species and is considered one of the last remaining tracts of tropical evergreen forest in India. The park features diverse landscapes including tropical evergreen forests, grasslands, and wetlands.',
    visiting_info: 'Silent Valley National Park offers trekking opportunities for wildlife viewing. The park is open from October to June and closed during monsoon season (July-September). Entry fees: INR 200 (Indians), INR 1,000 (foreigners) for trekking. Accommodation options include forest lodges and hotels in Palakkad. The nearest town is Mannarkad, which is about 30 km away. Advance booking is recommended for trekking permits.',
    animals_found: [
      'Lion-tailed Macaque',
      'Indian Elephant',
      'Indian Leopard',
      'Sloth Bear',
      'Striped Hyena',
      'Sambar Deer',
      'Spotted Deer (Chital)',
      'Wild Boar',
      'Indian Porcupine',
      'Indian Hare',
      'Peafowl',
      'Grey Francolin',
      'Red Junglefowl',
      'Indian Eagle',
      'Vulture'
    ]
  } as WildlifeTabs
};

// Export all wildlife data
export const keralaWildlifeData: KarnatakaPOI[] = [
  periyarWildlifeData,
  eravikulamNationalParkData,
  wayanadWildlifeData,
  silentValleyNationalParkData
];

export default keralaWildlifeData;

