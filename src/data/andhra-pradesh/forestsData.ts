// Andhra Pradesh Forests Data
import { KarnatakaPOI } from '../../types/database';

export const papikondaluData: KarnatakaPOI = {
  id: 'papikondalu_andhra_pradesh',
  name: 'Papikondalu Forest',
  category: 'forest',
  coordinates: { lat: 17.0000, lng: 81.7833 },
  description: 'Forest area known for its scenic beauty and biodiversity.',
  icon_color: '#228B22',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Forest Facts', description: 'Forest known for its scenic beauty and biodiversity.', image_url: 'https://example.com/forest-facts.jpg', links: [{ title: 'Forest Information', url: 'https://example.com/forest-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Boat Tours', description: 'Boat tours through the forest area.', image_url: 'https://example.com/boat-tours.jpg', links: [{ title: 'Tour Booking', url: 'https://example.com/tour-booking' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'Wildlife Species', description: 'Various wildlife species found in the forest.', image_url: 'https://example.com/wildlife-species.jpg', links: [{ title: 'Species List', url: 'https://example.com/species-list' }] }] }
  }
};

export default [papikondaluData];

