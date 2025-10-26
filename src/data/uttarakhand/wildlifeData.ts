// Uttarakhand Wildlife Data
import { KarnatakaPOI } from '../../types/database';

export const jimCorbettData: KarnatakaPOI = {
  id: 'jim_corbett_uttarakhand',
  name: 'Jim Corbett National Park',
  category: 'wildlife',
  coordinates: { lat: 29.5000, lng: 78.8000 },
  description: 'India\'s first national park, famous for its tiger population.',
  icon_color: '#FF8C00',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Park Facts', description: 'India\'s first national park established in 1936.', image_url: 'https://www.uttarakhandtourism.gov.in/park-facts.jpg', links: [{ title: 'Park Information', url: 'https://www.uttarakhandtourism.gov.in/park-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Safari Options', description: 'Jeep safaris and elephant rides available.', image_url: 'https://www.uttarakhandtourism.gov.in/safari-options.jpg', links: [{ title: 'Safari Booking', url: 'https://www.uttarakhandtourism.gov.in/safari-booking' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'Tiger Population', description: 'Significant tiger population with regular sightings.', image_url: 'https://www.uttarakhandtourism.gov.in/tiger-population.jpg', links: [{ title: 'Wildlife List', url: 'https://www.uttarakhandtourism.gov.in/wildlife-list' }] }] }
  }
};

export const rajajiData: KarnatakaPOI = {
  id: 'rajaji_uttarakhand',
  name: 'Rajaji National Park',
  category: 'wildlife',
  coordinates: { lat: 30.2000, lng: 78.0000 },
  description: 'National park known for its elephant population and diverse wildlife.',
  icon_color: '#FF8C00',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Park Facts', description: 'National park known for elephant population.', image_url: 'https://www.uttarakhandtourism.gov.in/park-facts.jpg', links: [{ title: 'Park Information', url: 'https://www.uttarakhandtourism.gov.in/park-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Safari Options', description: 'Jeep safaris and nature walks available.', image_url: 'https://www.uttarakhandtourism.gov.in/safari-options.jpg', links: [{ title: 'Safari Booking', url: 'https://www.uttarakhandtourism.gov.in/safari-booking' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'Elephant Herds', description: 'Large elephant herds and diverse wildlife.', image_url: 'https://www.uttarakhandtourism.gov.in/elephant-herds.jpg', links: [{ title: 'Wildlife List', url: 'https://www.uttarakhandtourism.gov.in/wildlife-list' }] }] }
  }
};

export const valleyOfFlowersData: KarnatakaPOI = {
  id: 'valley_of_flowers_uttarakhand',
  name: 'Valley of Flowers',
  category: 'wildlife',
  coordinates: { lat: 30.7333, lng: 79.6167 },
  description: 'UNESCO World Heritage Site known for its alpine flowers.',
  icon_color: '#FF8C00',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Park Facts', description: 'UNESCO World Heritage Site with alpine flowers.', image_url: 'https://www.uttarakhandtourism.gov.in/park-facts.jpg', links: [{ title: 'Park Information', url: 'https://www.uttarakhandtourism.gov.in/park-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Trekking Routes', description: 'Trekking routes through the valley.', image_url: 'https://www.uttarakhandtourism.gov.in/trekking-routes.jpg', links: [{ title: 'Trekking Guide', url: 'https://www.uttarakhandtourism.gov.in/trekking-guide' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'Flower Species', description: 'Hundreds of alpine flower species.', image_url: 'https://www.uttarakhandtourism.gov.in/flower-species.jpg', links: [{ title: 'Species List', url: 'https://www.uttarakhandtourism.gov.in/species-list' }] }] }
  }
};

export default [jimCorbettData, rajajiData, valleyOfFlowersData];
