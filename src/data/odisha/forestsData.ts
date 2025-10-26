// Odisha Forests Data
import { KarnatakaPOI } from '../../types/database';

export const mangroveForestOdishaData: KarnatakaPOI = {
  id: 'mangrove_forest_odisha',
  name: 'Mangrove Forest',
  category: 'forest',
  coordinates: { lat: 20.5000, lng: 86.4167 },
  description: 'Mangrove forest ecosystem in the Bhitarkanika region.',
  icon_color: '#228B22',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Forest Facts', description: 'Mangrove forest ecosystem with unique biodiversity.', image_url: 'https://example.com/forest-facts.jpg', links: [{ title: 'Forest Information', url: 'https://example.com/forest-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Boat Tours', description: 'Boat tours through mangrove forests.', image_url: 'https://example.com/boat-tours.jpg', links: [{ title: 'Tour Booking', url: 'https://example.com/tour-booking' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'Mangrove Wildlife', description: 'Various wildlife species adapted to mangrove ecosystem.', image_url: 'https://example.com/mangrove-wildlife.jpg', links: [{ title: 'Species List', url: 'https://example.com/species-list' }] }] }
  }
};

export default [mangroveForestOdishaData];

