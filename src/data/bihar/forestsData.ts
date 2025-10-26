// Bihar Forests Data
import { KarnatakaPOI } from '../../types/database';

export const tropicalForestBiharData: KarnatakaPOI = {
  id: 'tropical_forest_bihar',
  name: 'Tropical Forest',
  category: 'forest',
  coordinates: { lat: 25.5941, lng: 85.1376 },
  description: 'Tropical forest ecosystem in Bihar, known for its biodiversity.',
  icon_color: '#228B22',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Forest Facts', description: 'Tropical forest ecosystem with rich biodiversity.', image_url: 'https://www.bihartourism.gov.in/forest-facts.jpg', links: [{ title: 'Forest Information', url: 'https://www.bihartourism.gov.in/forest-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Nature Walks', description: 'Guided nature walks through the forest.', image_url: 'https://www.bihartourism.gov.in/nature-walks.jpg', links: [{ title: 'Walk Routes', url: 'https://www.bihartourism.gov.in/walk-routes' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'Wildlife Species', description: 'Various wildlife species found in the forest.', image_url: 'https://www.bihartourism.gov.in/wildlife-species.jpg', links: [{ title: 'Species List', url: 'https://www.bihartourism.gov.in/species-list' }] }] }
  }
};

export default [tropicalForestBiharData];
