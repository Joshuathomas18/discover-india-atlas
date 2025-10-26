// Bihar Mountains Data
import { KarnatakaPOI } from '../../types/database';

export const rajgirHillsData: KarnatakaPOI = {
  id: 'rajgir_hills_bihar',
  name: 'Rajgir Hills',
  category: 'mountain',
  coordinates: { lat: 25.0167, lng: 85.4167 },
  description: 'Sacred mountain range in Bihar, known for its religious significance.',
  icon_color: '#8B4513',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Mountain Facts', description: 'Sacred mountain range with religious significance.', image_url: 'https://www.bihartourism.gov.in/mountain-facts.jpg', links: [{ title: 'Mountain Information', url: 'https://www.bihartourism.gov.in/mountain-info' }] }] },
    trekking: { title: 'Trekking', content: [{ title: 'Trekking Routes', description: 'Various trekking routes through the hills.', image_url: 'https://www.bihartourism.gov.in/trekking-routes.jpg', links: [{ title: 'Trekking Guide', url: 'https://www.bihartourism.gov.in/trekking-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'Mountains accessible from Rajgir.', image_url: 'https://www.bihartourism.gov.in/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://www.bihartourism.gov.in/route-guide' }] }] }
  }
};

export default [rajgirHillsData];
