// Punjab Wildlife Data
import { KarnatakaPOI } from '../../types/database';

export const harikeData: KarnatakaPOI = {
  id: 'harike_punjab',
  name: 'Harike Wildlife Sanctuary',
  category: 'wildlife',
  coordinates: { lat: 31.1667, lng: 75.1667 },
  description: 'Wildlife sanctuary known for its wetland ecosystem and bird population.',
  icon_color: '#FF8C00',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Park Facts', description: 'Wildlife sanctuary with wetland ecosystem.', image_url: 'https://example.com/park-facts.jpg', links: [{ title: 'Park Information', url: 'https://example.com/park-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Boat Tours', description: 'Boat tours available for wildlife viewing.', image_url: 'https://example.com/boat-tours.jpg', links: [{ title: 'Tour Booking', url: 'https://example.com/tour-booking' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'Bird Species', description: 'Famous for diverse bird population.', image_url: 'https://example.com/bird-species.jpg', links: [{ title: 'Species List', url: 'https://example.com/species-list' }] }] }
  }
};

export default [harikeData];

