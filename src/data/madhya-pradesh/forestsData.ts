// Madhya Pradesh Forests Data
import { KarnatakaPOI } from '../../types/database';

export const tropicalForestMPData: KarnatakaPOI = {
  id: 'tropical_forest_madhya_pradesh',
  name: 'Tropical Forest',
  category: 'forest',
  coordinates: { lat: 23.2599, lng: 77.4126 },
  description: 'Tropical forest ecosystem in MP, known for its biodiversity.',
  icon_color: '#228B22',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Forest Facts', description: 'Tropical forest ecosystem with rich biodiversity.', image_url: 'https://example.com/forest-facts.jpg', links: [{ title: 'Forest Information', url: 'https://example.com/forest-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Nature Walks', description: 'Guided nature walks through the forest.', image_url: 'https://example.com/nature-walks.jpg', links: [{ title: 'Walk Routes', url: 'https://example.com/walk-routes' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'Wildlife Species', description: 'Various wildlife species found in the forest.', image_url: 'https://example.com/wildlife-species.jpg', links: [{ title: 'Species List', url: 'https://example.com/species-list' }] }] }
  }
};

export default [tropicalForestMPData];

