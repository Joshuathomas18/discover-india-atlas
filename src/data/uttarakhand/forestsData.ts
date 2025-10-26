// Uttarakhand Forests Data
import { KarnatakaPOI } from '../../types/database';

export const oakForestData: KarnatakaPOI = {
  id: 'oak_forest_uttarakhand',
  name: 'Oak Forest',
  category: 'forest',
  coordinates: { lat: 30.0000, lng: 79.0000 },
  description: 'Forest area known for oak trees and diverse wildlife.',
  icon_color: '#228B22',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Forest Facts', description: 'Forest known for oak trees and biodiversity.', image_url: 'https://www.uttarakhandtourism.gov.in/forest-facts.jpg', links: [{ title: 'Forest Information', url: 'https://www.uttarakhandtourism.gov.in/forest-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Nature Walks', description: 'Guided nature walks through the forest.', image_url: 'https://www.uttarakhandtourism.gov.in/nature-walks.jpg', links: [{ title: 'Walk Routes', url: 'https://www.uttarakhandtourism.gov.in/walk-routes' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'Wildlife Species', description: 'Various wildlife species found in the forest.', image_url: 'https://www.uttarakhandtourism.gov.in/wildlife-species.jpg', links: [{ title: 'Species List', url: 'https://www.uttarakhandtourism.gov.in/species-list' }] }] }
  }
};

export default [oakForestData];
