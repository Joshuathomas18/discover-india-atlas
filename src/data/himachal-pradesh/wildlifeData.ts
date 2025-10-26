// Himachal Pradesh Wildlife Data
import { KarnatakaPOI } from '../../types/database';

export const greatHimalayanData: KarnatakaPOI = {
  id: 'great_himalayan_himachal_pradesh',
  name: 'Great Himalayan National Park',
  category: 'wildlife',
  coordinates: { lat: 31.8000, lng: 77.5000 },
  description: 'UNESCO World Heritage Site known for its biodiversity.',
  icon_color: '#FF8C00',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Park Facts', description: 'UNESCO World Heritage Site with rich biodiversity.', image_url: 'https://www.himachaltourism.gov.in/park-facts.jpg', links: [{ title: 'Park Information', url: 'https://www.himachaltourism.gov.in/park-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Visitor Information', description: 'Information for visitors to the park.', image_url: 'https://www.himachaltourism.gov.in/visitor-info.jpg', links: [{ title: 'Visitor Guide', url: 'https://www.himachaltourism.gov.in/visitor-guide' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'Wildlife Species', description: 'Various wildlife species found in the park.', image_url: 'https://www.himachaltourism.gov.in/wildlife-species.jpg', links: [{ title: 'Species List', url: 'https://www.himachaltourism.gov.in/species-list' }] }] }
  }
};

export const pinValleyData: KarnatakaPOI = {
  id: 'pin_valley_himachal_pradesh',
  name: 'Pin Valley National Park',
  category: 'wildlife',
  coordinates: { lat: 32.0000, lng: 78.0000 },
  description: 'National park known for its high-altitude wildlife.',
  icon_color: '#FF8C00',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Park Facts', description: 'High-altitude national park with unique wildlife.', image_url: 'https://www.himachaltourism.gov.in/park-facts.jpg', links: [{ title: 'Park Information', url: 'https://www.himachaltourism.gov.in/park-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Visitor Information', description: 'Information for visitors to the park.', image_url: 'https://www.himachaltourism.gov.in/visitor-info.jpg', links: [{ title: 'Visitor Guide', url: 'https://www.himachaltourism.gov.in/visitor-guide' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'Wildlife Species', description: 'Various wildlife species found in the park.', image_url: 'https://www.himachaltourism.gov.in/wildlife-species.jpg', links: [{ title: 'Species List', url: 'https://www.himachaltourism.gov.in/species-list' }] }] }
  }
};

export default [greatHimalayanData, pinValleyData];
