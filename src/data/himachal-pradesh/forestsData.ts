// Himachal Pradesh Forests Data
import { KarnatakaPOI } from '../../types/database';

export const deodarForestData: KarnatakaPOI = {
  id: 'deodar_forest_himachal_pradesh',
  name: 'Deodar Forest',
  category: 'forest',
  coordinates: { lat: 32.0000, lng: 77.0000 },
  description: 'Forest area known for deodar trees and scenic beauty.',
  icon_color: '#228B22',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Forest Facts', description: 'Forest known for deodar trees.', image_url: 'https://www.himachaltourism.gov.in/forest-facts.jpg', links: [{ title: 'Forest Information', url: 'https://www.himachaltourism.gov.in/forest-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Visitor Information', description: 'Information for visitors to the forest.', image_url: 'https://www.himachaltourism.gov.in/visitor-info.jpg', links: [{ title: 'Visitor Guide', url: 'https://www.himachaltourism.gov.in/visitor-guide' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'Wildlife Species', description: 'Various wildlife species found in the forest.', image_url: 'https://www.himachaltourism.gov.in/wildlife-species.jpg', links: [{ title: 'Species List', url: 'https://www.himachaltourism.gov.in/species-list' }] }] }
  }
};

export default [deodarForestData];
