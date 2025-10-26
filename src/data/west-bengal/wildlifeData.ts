// West Bengal Wildlife Data
import { KarnatakaPOI } from '../../types/database';

export const sundarbansData: KarnatakaPOI = {
  id: 'sundarbans_west_bengal',
  name: 'Sundarbans National Park',
  category: 'wildlife',
  coordinates: { lat: 21.7333, lng: 88.8667 },
  description: 'UNESCO World Heritage Site, home to Royal Bengal Tigers.',
  icon_color: '#FF8C00',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Park Facts', description: 'UNESCO World Heritage Site with mangrove forests.', image_url: 'https://www.wbtourism.gov.in/park-facts.jpg', links: [{ title: 'Park Information', url: 'https://www.wbtourism.gov.in/park-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Boat Safaris', description: 'Boat safaris available for wildlife viewing.', image_url: 'https://www.wbtourism.gov.in/boat-safaris.jpg', links: [{ title: 'Safari Booking', url: 'https://www.wbtourism.gov.in/safari-booking' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'Royal Bengal Tigers', description: 'Famous for Royal Bengal Tiger population.', image_url: 'https://www.wbtourism.gov.in/royal-bengal-tigers.jpg', links: [{ title: 'Wildlife List', url: 'https://www.wbtourism.gov.in/wildlife-list' }] }] }
  }
};

export const jaldaparaData: KarnatakaPOI = {
  id: 'jaldapara_west_bengal',
  name: 'Jaldapara National Park',
  category: 'wildlife',
  coordinates: { lat: 26.6167, lng: 89.3500 },
  description: 'National park known for its one-horned rhinoceros population.',
  icon_color: '#FF8C00',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Park Facts', description: 'National park known for rhinoceros population.', image_url: 'https://www.wbtourism.gov.in/park-facts.jpg', links: [{ title: 'Park Information', url: 'https://www.wbtourism.gov.in/park-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Safari Options', description: 'Jeep safaris and elephant rides available.', image_url: 'https://www.wbtourism.gov.in/safari-options.jpg', links: [{ title: 'Safari Booking', url: 'https://www.wbtourism.gov.in/safari-booking' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'One-horned Rhinoceros', description: 'Famous for one-horned rhinoceros population.', image_url: 'https://www.wbtourism.gov.in/rhinoceros.jpg', links: [{ title: 'Wildlife List', url: 'https://www.wbtourism.gov.in/wildlife-list' }] }] }
  }
};

export default [sundarbansData, jaldaparaData];
