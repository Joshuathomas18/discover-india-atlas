// Gujarat Forests Data
import { KarnatakaPOI } from '../../types/database';

export const girForestData: KarnatakaPOI = {
  id: 'gir_forest_gujarat',
  name: 'Gir Forest',
  category: 'forest',
  coordinates: { lat: 21.5226, lng: 70.4579 },
  description: 'Forest area surrounding Gir National Park, known for its biodiversity.',
  icon_color: '#228B22',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Forest Facts', description: 'Forest known for its biodiversity and wildlife.', image_url: 'https://www.gujarattourism.com/forest-facts.jpg', links: [{ title: 'Forest Information', url: 'https://www.gujarattourism.com/forest-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Nature Walks', description: 'Guided nature walks through the forest.', image_url: 'https://www.gujarattourism.com/nature-walks.jpg', links: [{ title: 'Walk Routes', url: 'https://www.gujarattourism.com/walk-routes' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'Wildlife Species', description: 'Various wildlife species found in the forest.', image_url: 'https://www.gujarattourism.com/wildlife-species.jpg', links: [{ title: 'Species List', url: 'https://www.gujarattourism.com/species-list' }] }] }
  }
};

export default [girForestData];
