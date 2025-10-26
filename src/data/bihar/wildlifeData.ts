// Bihar Wildlife Data
import { KarnatakaPOI } from '../../types/database';

export const valmikiData: KarnatakaPOI = {
  id: 'valmiki_bihar',
  name: 'Valmiki National Park',
  category: 'wildlife',
  coordinates: { lat: 27.5000, lng: 84.1667 },
  description: 'National park known for its tiger population and biodiversity.',
  icon_color: '#FF8C00',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Park Facts', description: 'National park with tiger population and biodiversity.', image_url: 'https://www.bihartourism.gov.in/park-facts.jpg', links: [{ title: 'Park Information', url: 'https://www.bihartourism.gov.in/park-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Safari Options', description: 'Jeep safaris available for wildlife viewing.', image_url: 'https://www.bihartourism.gov.in/safari-options.jpg', links: [{ title: 'Safari Booking', url: 'https://www.bihartourism.gov.in/safari-booking' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'Tiger Population', description: 'Famous for tiger population and diverse wildlife.', image_url: 'https://www.bihartourism.gov.in/tiger-population.jpg', links: [{ title: 'Wildlife List', url: 'https://www.bihartourism.gov.in/wildlife-list' }] }] }
  }
};

export default [valmikiData];
