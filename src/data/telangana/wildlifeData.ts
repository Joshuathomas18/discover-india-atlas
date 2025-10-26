// Telangana Wildlife Data
import { KarnatakaPOI } from '../../types/database';

export const kawalData: KarnatakaPOI = {
  id: 'kawal_telangana',
  name: 'Kawal Wildlife Sanctuary',
  category: 'wildlife',
  coordinates: { lat: 19.6667, lng: 78.5333 },
  description: 'Wildlife sanctuary known for its biodiversity and forest cover.',
  icon_color: '#FF8C00',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Park Facts', description: 'Wildlife sanctuary with rich biodiversity.', image_url: 'https://example.com/park-facts.jpg', links: [{ title: 'Park Information', url: 'https://example.com/park-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Safari Options', description: 'Jeep safaris available for wildlife viewing.', image_url: 'https://example.com/safari-options.jpg', links: [{ title: 'Safari Booking', url: 'https://example.com/safari-booking' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'Wildlife Species', description: 'Various wildlife species found in the sanctuary.', image_url: 'https://example.com/wildlife-species.jpg', links: [{ title: 'Species List', url: 'https://example.com/species-list' }] }] }
  }
};

export default [kawalData];

