// Telangana Forests Data
import { KarnatakaPOI } from '../../types/database';

export const eturnagaramData: KarnatakaPOI = {
  id: 'eturnagaram_telangana',
  name: 'Eturnagaram Forest',
  category: 'forest',
  coordinates: { lat: 18.4333, lng: 79.1500 },
  description: 'Forest area known for its biodiversity and tribal culture.',
  icon_color: '#228B22',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Forest Facts', description: 'Forest known for its biodiversity and tribal culture.', image_url: 'https://example.com/forest-facts.jpg', links: [{ title: 'Forest Information', url: 'https://example.com/forest-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Nature Walks', description: 'Guided nature walks through the forest.', image_url: 'https://example.com/nature-walks.jpg', links: [{ title: 'Walk Routes', url: 'https://example.com/walk-routes' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'Wildlife Species', description: 'Various wildlife species found in the forest.', image_url: 'https://example.com/wildlife-species.jpg', links: [{ title: 'Species List', url: 'https://example.com/species-list' }] }] }
  }
};

export default [eturnagaramData];

