// Assam Wildlife Data
import { KarnatakaPOI } from '../../types/database';

export const kazirangaData: KarnatakaPOI = {
  id: 'kaziranga_assam',
  name: 'Kaziranga National Park',
  category: 'wildlife',
  coordinates: { lat: 26.5000, lng: 93.1667 },
  description: 'UNESCO World Heritage Site, home to the one-horned rhinoceros.',
  icon_color: '#FF8C00',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Park Facts', description: 'UNESCO World Heritage Site with one-horned rhinoceros.', image_url: 'https://example.com/park-facts.jpg', links: [{ title: 'Park Information', url: 'https://example.com/park-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Safari Options', description: 'Jeep safaris and elephant rides available.', image_url: 'https://example.com/safari-options.jpg', links: [{ title: 'Safari Booking', url: 'https://example.com/safari-booking' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'One-horned Rhinoceros', description: 'Famous for one-horned rhinoceros population.', image_url: 'https://example.com/rhinoceros.jpg', links: [{ title: 'Wildlife List', url: 'https://example.com/wildlife-list' }] }] }
  }
};

export const manasData: KarnatakaPOI = {
  id: 'manas_assam',
  name: 'Manas National Park',
  category: 'wildlife',
  coordinates: { lat: 26.7500, lng: 91.0000 },
  description: 'UNESCO World Heritage Site, known for its tiger population.',
  icon_color: '#FF8C00',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Park Facts', description: 'UNESCO World Heritage Site with tiger population.', image_url: 'https://example.com/park-facts.jpg', links: [{ title: 'Park Information', url: 'https://example.com/park-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Safari Options', description: 'Jeep safaris available for wildlife viewing.', image_url: 'https://example.com/safari-options.jpg', links: [{ title: 'Safari Booking', url: 'https://example.com/safari-booking' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'Tiger Population', description: 'Famous for tiger population and diverse wildlife.', image_url: 'https://example.com/tiger-population.jpg', links: [{ title: 'Wildlife List', url: 'https://example.com/wildlife-list' }] }] }
  }
};

export default [kazirangaData, manasData];

