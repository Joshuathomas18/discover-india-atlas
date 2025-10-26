// Madhya Pradesh Wildlife Data
import { KarnatakaPOI } from '../../types/database';

export const kanhaData: KarnatakaPOI = {
  id: 'kanha_madhya_pradesh',
  name: 'Kanha National Park',
  category: 'wildlife',
  coordinates: { lat: 22.1667, lng: 80.6167 },
  description: 'National park known for its tiger population and inspired "The Jungle Book".',
  icon_color: '#FF8C00',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Park Facts', description: 'National park famous for tiger population and Jungle Book inspiration.', image_url: 'https://example.com/park-facts.jpg', links: [{ title: 'Park Information', url: 'https://example.com/park-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Safari Options', description: 'Jeep safaris and elephant rides available.', image_url: 'https://example.com/safari-options.jpg', links: [{ title: 'Safari Booking', url: 'https://example.com/safari-booking' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'Tiger Population', description: 'Famous for tiger population and diverse wildlife.', image_url: 'https://example.com/tiger-population.jpg', links: [{ title: 'Wildlife List', url: 'https://example.com/wildlife-list' }] }] }
  }
};

export const bandhavgarhData: KarnatakaPOI = {
  id: 'bandhavgarh_madhya_pradesh',
  name: 'Bandhavgarh National Park',
  category: 'wildlife',
  coordinates: { lat: 23.6833, lng: 80.9500 },
  description: 'National park known for its high tiger density and ancient fort.',
  icon_color: '#FF8C00',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Park Facts', description: 'National park with high tiger density and ancient fort.', image_url: 'https://example.com/park-facts.jpg', links: [{ title: 'Park Information', url: 'https://example.com/park-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Safari Options', description: 'Jeep safaris available for wildlife viewing.', image_url: 'https://example.com/safari-options.jpg', links: [{ title: 'Safari Booking', url: 'https://example.com/safari-booking' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'Tiger Population', description: 'Famous for high tiger density and diverse wildlife.', image_url: 'https://example.com/tiger-population.jpg', links: [{ title: 'Wildlife List', url: 'https://example.com/wildlife-list' }] }] }
  }
};

export default [kanhaData, bandhavgarhData];

