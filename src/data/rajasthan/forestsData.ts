// Rajasthan Forests Data
// Comprehensive data for major forests in Rajasthan with 3 tabs each

import { KarnatakaPOI, ForestTabs, ImageReference } from '../../types/database';

// Kumbhalgarh Wildlife Sanctuary
export const kumbhalgarhData: KarnatakaPOI = {
  id: 'kumbhalgarh_wildlife_sanctuary',
  name: 'Kumbhalgarh Wildlife Sanctuary',
  category: 'forest',
  description: 'Forest sanctuary surrounding the famous Kumbhalgarh Fort, known for its diverse wildlife',
  coordinates: { lat: 25.1500, lng: 73.5833 },
  banner_image: {
    storage_path: 'rajasthan/forests/kumbhalgarh/banner.jpg',
    download_url: '',
    caption: 'Kumbhalgarh Wildlife Sanctuary',
    credit: 'Rajasthan Tourism',
    alt_text: 'Kumbhalgarh Wildlife Sanctuary forest',
    uploaded_at: new Date()
  },
  icon_type: 'tree',
  created_at: new Date(),
  tabs: {
    facts: 'Kumbhalgarh Wildlife Sanctuary is located around the famous Kumbhalgarh Fort in Rajasthan, covering an area of 608 square kilometers. The sanctuary was established in 1971 and is known for its diverse flora and fauna. The forest is characterized by dry deciduous vegetation and rocky terrain. It is home to various wildlife species including leopards, wolves, and sloth bears. The sanctuary also protects the historical Kumbhalgarh Fort, which is a UNESCO World Heritage Site.',
    visiting_info: 'Kumbhalgarh Wildlife Sanctuary offers jeep safaris for wildlife viewing. Safari timings are: Morning 6:00 AM - 10:00 AM, Evening 3:00 PM - 6:00 PM. Entry fees: INR 200 (Indians), INR 1,000 (foreigners) for jeep safari. The sanctuary is open from October to June and closed during monsoon season (July-September). Accommodation options include forest lodges and hotels near the fort. The nearest town is Rajsamand, which is about 50 km away.',
    animals_found: [
      'Indian Leopard',
      'Striped Hyena',
      'Golden Jackal',
      'Indian Wolf',
      'Sloth Bear',
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
  } as ForestTabs
};

// Mukundra Hills National Park
export const mukundraData: KarnatakaPOI = {
  id: 'mukundra_hills_national_park',
  name: 'Mukundra Hills National Park',
  category: 'forest',
  description: 'National park known for its tiger population and scenic hills',
  coordinates: { lat: 25.5000, lng: 76.0000 },
  banner_image: {
    storage_path: 'rajasthan/forests/mukundra/banner.jpg',
    download_url: '',
    caption: 'Mukundra Hills National Park',
    credit: 'Rajasthan Tourism',
    alt_text: 'Mukundra Hills National Park landscape',
    uploaded_at: new Date()
  },
  icon_type: 'tree',
  created_at: new Date(),
  tabs: {
    facts: 'Mukundra Hills National Park is located in the Kota district of Rajasthan, covering an area of 759 square kilometers. The park was established in 2013 and is known for its tiger population and scenic hills. The park features dry deciduous forests and rocky terrain. It is home to various wildlife species including tigers, leopards, and sloth bears. The park is part of Project Tiger and is considered an important tiger habitat in Rajasthan.',
    visiting_info: 'Mukundra Hills National Park offers jeep safaris for wildlife viewing. Safari timings are: Morning 6:00 AM - 10:00 AM, Evening 3:00 PM - 6:00 PM. Entry fees: INR 200 (Indians), INR 1,000 (foreigners) for jeep safari. The park is open from October to June and closed during monsoon season (July-September). Accommodation options include forest lodges and hotels in Kota. The nearest town is Kota, which is about 50 km away.',
    animals_found: [
      'Bengal Tiger',
      'Indian Leopard',
      'Striped Hyena',
      'Golden Jackal',
      'Sloth Bear',
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
  } as ForestTabs
};

// Export all forests data
export const rajasthanForestsData: KarnatakaPOI[] = [
  kumbhalgarhData,
  mukundraData
];

export default rajasthanForestsData;

