// Andhra Pradesh Wildlife Data
import { KarnatakaPOI } from '../../types/database';

export const sriVenkateswaraData: KarnatakaPOI = {
  id: 'sri_venkateswara_andhra_pradesh',
  name: 'Sri Venkateswara National Park',
  category: 'wildlife',
  coordinates: { lat: 13.6288, lng: 79.4192 },
  description: 'National park known for its biodiversity and scenic beauty.',
  icon_color: '#FF8C00',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Park Facts', description: 'National park with rich biodiversity.', image_url: 'https://example.com/park-facts.jpg', links: [{ title: 'Park Information', url: 'https://example.com/park-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Safari Options', description: 'Jeep safaris available for wildlife viewing.', image_url: 'https://example.com/safari-options.jpg', links: [{ title: 'Safari Booking', url: 'https://example.com/safari-booking' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'Wildlife Species', description: 'Various wildlife species found in the park.', image_url: 'https://example.com/wildlife-species.jpg', links: [{ title: 'Species List', url: 'https://example.com/species-list' }] }] }
  }
};

export default [sriVenkateswaraData];

