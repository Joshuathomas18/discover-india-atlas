// Odisha Wildlife Data
import { KarnatakaPOI } from '../../types/database';

export const simlipalData: KarnatakaPOI = {
  id: 'simlipal_odisha',
  name: 'Simlipal National Park',
  category: 'wildlife',
  coordinates: { lat: 21.7500, lng: 86.3333 },
  description: 'National park known for its tiger population and biodiversity.',
  icon_color: '#FF8C00',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Park Facts', description: 'National park with rich biodiversity and tiger population.', image_url: 'https://example.com/park-facts.jpg', links: [{ title: 'Park Information', url: 'https://example.com/park-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Safari Options', description: 'Jeep safaris available for wildlife viewing.', image_url: 'https://example.com/safari-options.jpg', links: [{ title: 'Safari Booking', url: 'https://example.com/safari-booking' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'Tiger Population', description: 'Famous for tiger population and diverse wildlife.', image_url: 'https://example.com/tiger-population.jpg', links: [{ title: 'Wildlife List', url: 'https://example.com/wildlife-list' }] }] }
  }
};

export const bhitarkanikaData: KarnatakaPOI = {
  id: 'bhitarkanika_odisha',
  name: 'Bhitarkanika National Park',
  category: 'wildlife',
  coordinates: { lat: 20.5000, lng: 86.4167 },
  description: 'National park known for its mangrove forests and saltwater crocodiles.',
  icon_color: '#FF8C00',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Park Facts', description: 'National park with mangrove forests and crocodiles.', image_url: 'https://example.com/park-facts.jpg', links: [{ title: 'Park Information', url: 'https://example.com/park-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Boat Safaris', description: 'Boat safaris available for wildlife viewing.', image_url: 'https://example.com/boat-safaris.jpg', links: [{ title: 'Safari Booking', url: 'https://example.com/safari-booking' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'Saltwater Crocodiles', description: 'Famous for saltwater crocodile population.', image_url: 'https://example.com/crocodiles.jpg', links: [{ title: 'Wildlife List', url: 'https://example.com/wildlife-list' }] }] }
  }
};

export default [simlipalData, bhitarkanikaData];

