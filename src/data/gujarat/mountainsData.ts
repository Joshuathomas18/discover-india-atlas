// Gujarat Mountains Data
import { KarnatakaPOI } from '../../types/database';

export const girnarData: KarnatakaPOI = {
  id: 'girnar_gujarat',
  name: 'Girnar Hills',
  category: 'mountain',
  coordinates: { lat: 21.5226, lng: 70.4579 },
  description: 'Sacred mountain range known for its temples and religious significance.',
  icon_color: '#8B4513',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Mountain Facts', description: 'Sacred mountain range with religious significance.', image_url: 'https://www.gujarattourism.com/mountain-facts.jpg', links: [{ title: 'Mountain Information', url: 'https://www.gujarattourism.com/mountain-info' }] }] },
    trekking: { title: 'Trekking', content: [{ title: 'Trekking Routes', description: 'Trekking routes to various temples.', image_url: 'https://www.gujarattourism.com/trekking-routes.jpg', links: [{ title: 'Trekking Guide', url: 'https://www.gujarattourism.com/trekking-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'Mountains accessible from Junagadh.', image_url: 'https://www.gujarattourism.com/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://www.gujarattourism.com/route-guide' }] }] }
  }
};

export default [girnarData];
