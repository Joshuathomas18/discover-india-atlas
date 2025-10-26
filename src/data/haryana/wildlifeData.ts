// Haryana Wildlife Data
import { KarnatakaPOI } from '../../types/database';

export const sultanpurData: KarnatakaPOI = {
  id: 'sultanpur_haryana',
  name: 'Sultanpur National Park',
  category: 'wildlife',
  coordinates: { lat: 28.4595, lng: 77.0266 },
  description: 'National park known for its bird population and wetland ecosystem.',
  icon_color: '#FF8C00',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Park Facts', description: 'National park with wetland ecosystem and bird population.', image_url: 'https://example.com/park-facts.jpg', links: [{ title: 'Park Information', url: 'https://example.com/park-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Bird Watching', description: 'Bird watching tours available.', image_url: 'https://example.com/bird-watching.jpg', links: [{ title: 'Tour Booking', url: 'https://example.com/tour-booking' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'Bird Species', description: 'Famous for diverse bird population.', image_url: 'https://example.com/bird-species.jpg', links: [{ title: 'Species List', url: 'https://example.com/species-list' }] }] }
  }
};

export default [sultanpurData];

