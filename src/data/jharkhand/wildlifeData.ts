// Jharkhand Wildlife Data
import { KarnatakaPOI } from '../../types/database';

export const betlaData: KarnatakaPOI = {
  id: 'betla_jharkhand',
  name: 'Betla National Park',
  category: 'wildlife',
  coordinates: { lat: 23.9833, lng: 85.3500 },
  description: 'National park known for its tiger population and biodiversity.',
  icon_color: '#FF8C00',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Park Facts', description: 'National park with tiger population and biodiversity.', image_url: 'https://example.com/park-facts.jpg', links: [{ title: 'Park Information', url: 'https://example.com/park-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Safari Options', description: 'Jeep safaris available for wildlife viewing.', image_url: 'https://example.com/safari-options.jpg', links: [{ title: 'Safari Booking', url: 'https://example.com/safari-booking' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'Tiger Population', description: 'Famous for tiger population and diverse wildlife.', image_url: 'https://example.com/tiger-population.jpg', links: [{ title: 'Wildlife List', url: 'https://example.com/wildlife-list' }] }] }
  }
};

export default [betlaData];

