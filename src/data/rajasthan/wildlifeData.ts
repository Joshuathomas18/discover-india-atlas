// Rajasthan Wildlife Data
// Comprehensive data for major wildlife sanctuaries in Rajasthan with 3 tabs each

import { KarnatakaPOI, WildlifeTabs, ImageReference } from '../../types/database';

// Ranthambore National Park
export const ranthamboreData: KarnatakaPOI = {
  id: 'ranthambore_national_park',
  name: 'Ranthambore National Park',
  category: 'wildlife',
  description: 'Famous tiger reserve and national park, known for its tiger population and ancient fort',
  coordinates: { lat: 26.0172, lng: 76.5026 },
  banner_image: {
    storage_path: 'rajasthan/wildlife/ranthambore/banner.jpg',
    download_url: '',
    caption: 'Ranthambore National Park - Tiger Reserve',
    credit: 'Rajasthan Tourism',
    alt_text: 'Ranthambore National Park with tiger',
    uploaded_at: new Date()
  },
  icon_type: 'tiger',
  created_at: new Date(),
  tabs: {
    facts: 'Ranthambore National Park is one of the largest and most renowned national parks in northern India, covering an area of 1,334 square kilometers. It was established in 1980 and is famous for its tiger population, with about 40-50 tigers. The park is also home to the ancient Ranthambore Fort, which dates back to the 10th century. The park features diverse landscapes including dry deciduous forests, grasslands, and rocky hills. It is part of Project Tiger and is considered one of the best places in India to spot tigers in their natural habitat.',
    visiting_info: 'Ranthambore National Park offers various safari options including jeep safaris and canter safaris. Safari timings are: Morning 6:00 AM - 10:00 AM, Evening 2:00 PM - 6:00 PM. Entry fees: INR 1,200 (Indians), INR 1,800 (foreigners) for jeep safari. The park is open from October to June and closed during monsoon season (July-September). Accommodation options include luxury resorts, forest lodges, and budget hotels. Advance booking is recommended for safaris, especially during peak season (October to March).',
    animals_found: [
      'Bengal Tiger',
      'Indian Leopard',
      'Sloth Bear',
      'Striped Hyena',
      'Sambar Deer',
      'Spotted Deer (Chital)',
      'Nilgai (Blue Bull)',
      'Wild Boar',
      'Mugger Crocodile',
      'Indian Python',
      'Peafowl',
      'Kingfisher',
      'Woodpecker',
      'Eagle',
      'Vulture'
    ]
  } as WildlifeTabs
};

// Sariska Tiger Reserve
export const sariskaData: KarnatakaPOI = {
  id: 'sariska_tiger_reserve',
  name: 'Sariska Tiger Reserve',
  category: 'wildlife',
  description: 'Tiger reserve and wildlife sanctuary, known for its tiger population and ancient temples',
  coordinates: { lat: 27.3333, lng: 76.5000 },
  banner_image: {
    storage_path: 'rajasthan/wildlife/sariska/banner.jpg',
    download_url: '',
    caption: 'Sariska Tiger Reserve',
    credit: 'Rajasthan Tourism',
    alt_text: 'Sariska Tiger Reserve wildlife',
    uploaded_at: new Date()
  },
  icon_type: 'tiger',
  created_at: new Date(),
  tabs: {
    facts: 'Sariska Tiger Reserve is located in the Alwar district of Rajasthan, covering an area of 866 square kilometers. It was declared a wildlife sanctuary in 1958 and became a tiger reserve in 1978. The reserve is famous for its tiger population and is home to about 20-25 tigers. The reserve features dry deciduous forests and rocky hills. It is also known for its ancient temples including the Neelkanth Mahadev Temple and the Pandupol Hanuman Temple. The reserve is part of Project Tiger and is considered one of the important tiger habitats in Rajasthan.',
    visiting_info: 'Sariska Tiger Reserve offers jeep safaris and canter safaris for wildlife viewing. Safari timings are: Morning 6:00 AM - 10:00 AM, Evening 2:00 PM - 6:00 PM. Entry fees: INR 1,200 (Indians), INR 1,800 (foreigners) for jeep safari. The reserve is open from October to June and closed during monsoon season (July-September). Accommodation options include forest lodges, resorts, and budget hotels. The nearest town is Alwar, which is about 35 km away. Advance booking is recommended for safaris.',
    animals_found: [
      'Bengal Tiger',
      'Indian Leopard',
      'Striped Hyena',
      'Golden Jackal',
      'Sambar Deer',
      'Spotted Deer (Chital)',
      'Nilgai (Blue Bull)',
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

// Keoladeo National Park
export const keoladeoData: KarnatakaPOI = {
  id: 'keoladeo_national_park',
  name: 'Keoladeo National Park',
  category: 'wildlife',
  description: 'UNESCO World Heritage Site and bird sanctuary, famous for migratory birds',
  coordinates: { lat: 27.1592, lng: 77.5250 },
  banner_image: {
    storage_path: 'rajasthan/wildlife/keoladeo/banner.jpg',
    download_url: '',
    caption: 'Keoladeo National Park - Bird Sanctuary',
    credit: 'Rajasthan Tourism',
    alt_text: 'Keoladeo National Park with birds',
    uploaded_at: new Date()
  },
  icon_type: 'bird',
  created_at: new Date(),
  tabs: {
    facts: 'Keoladeo National Park, also known as Bharatpur Bird Sanctuary, is a UNESCO World Heritage Site covering an area of 29 square kilometers. It was established in 1982 and is famous for its diverse bird population, especially migratory birds. The park is home to over 370 species of birds, including the endangered Siberian Crane. The park features wetlands, grasslands, and woodlands. It is considered one of the best bird-watching destinations in the world and attracts bird enthusiasts from across the globe.',
    visiting_info: 'Keoladeo National Park offers various ways to explore including walking, cycling, and rickshaw rides. The park is open from 6:00 AM to 6:00 PM. Entry fees: INR 75 (Indians), INR 500 (foreigners). The best time to visit is from October to March when migratory birds are present. Accommodation options include forest lodges and hotels in Bharatpur. The nearest railway station is Bharatpur Junction, and the nearest airport is Agra Airport (about 60 km away).',
    animals_found: [
      'Siberian Crane',
      'Greater Flamingo',
      'Lesser Flamingo',
      'Sarus Crane',
      'Painted Stork',
      'Openbill Stork',
      'Spoonbill',
      'Pelican',
      'Duck',
      'Goose',
      'Kingfisher',
      'Heron',
      'Egret',
      'Cormorant',
      'Snake',
      'Turtle',
      'Fish'
    ]
  } as WildlifeTabs
};

// Desert National Park
export const desertNationalParkData: KarnatakaPOI = {
  id: 'desert_national_park',
  name: 'Desert National Park',
  category: 'wildlife',
  description: 'Largest national park in India, showcasing the unique ecosystem of the Thar Desert',
  coordinates: { lat: 26.9167, lng: 70.9167 },
  banner_image: {
    storage_path: 'rajasthan/wildlife/desert_national_park/banner.jpg',
    download_url: '',
    caption: 'Desert National Park - Thar Desert',
    credit: 'Rajasthan Tourism',
    alt_text: 'Desert National Park landscape',
    uploaded_at: new Date()
  },
  icon_type: 'camel',
  created_at: new Date(),
  tabs: {
    facts: 'Desert National Park is the largest national park in India, covering an area of 3,162 square kilometers. It was established in 1980 and is located in the Thar Desert. The park showcases the unique ecosystem of the desert and is home to various desert-adapted species. The park features sand dunes, rocky outcrops, and sparse vegetation. It is famous for its fossilized remains of marine animals, indicating that the area was once under the sea. The park is also home to the Great Indian Bustard, which is critically endangered.',
    visiting_info: 'Desert National Park offers jeep safaris and camel safaris for wildlife viewing. Safari timings are: Morning 6:00 AM - 10:00 AM, Evening 3:00 PM - 6:00 PM. Entry fees: INR 200 (Indians), INR 1,000 (foreigners) for jeep safari. The park is open from October to March and closed during summer months (April to September) due to extreme heat. Accommodation options include desert camps and hotels in Jaisalmer. The nearest town is Jaisalmer, which is about 40 km away.',
    animals_found: [
      'Great Indian Bustard',
      'Desert Fox',
      'Desert Cat',
      'Indian Gazelle (Chinkara)',
      'Desert Monitor Lizard',
      'Spiny-tailed Lizard',
      'Sand Snake',
      'Desert Hare',
      'Indian Hedgehog',
      'Desert Gerbil',
      'Desert Eagle',
      'Vulture',
      'Desert Lark',
      'Desert Wheatear',
      'Desert Finch'
    ]
  } as WildlifeTabs
};

// Export all wildlife data
export const rajasthanWildlifeData: KarnatakaPOI[] = [
  ranthamboreData,
  sariskaData,
  keoladeoData,
  desertNationalParkData
];

export default rajasthanWildlifeData;

