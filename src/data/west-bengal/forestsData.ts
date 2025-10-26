// West Bengal Forests Data
import { KarnatakaPOI } from '../../types/database';

export const mangroveForestData: KarnatakaPOI = {
  id: 'mangrove_forest_west_bengal',
  name: 'Mangrove Forest',
  category: 'forest',
  coordinates: { lat: 21.7333, lng: 88.8667 },
  description: 'Mangrove forest ecosystem in the Sundarbans region.',
  icon_color: '#228B22',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Forest Facts', description: 'Mangrove forest ecosystem with unique biodiversity.', image_url: 'https://www.wbtourism.gov.in/forest-facts.jpg', links: [{ title: 'Forest Information', url: 'https://www.wbtourism.gov.in/forest-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Boat Tours', description: 'Boat tours through mangrove forests.', image_url: 'https://www.wbtourism.gov.in/boat-tours.jpg', links: [{ title: 'Tour Booking', url: 'https://www.wbtourism.gov.in/tour-booking' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'Mangrove Wildlife', description: 'Various wildlife species adapted to mangrove ecosystem.', image_url: 'https://www.wbtourism.gov.in/mangrove-wildlife.jpg', links: [{ title: 'Species List', url: 'https://www.wbtourism.gov.in/species-list' }] }] }
  }
};

export default [mangroveForestData];
