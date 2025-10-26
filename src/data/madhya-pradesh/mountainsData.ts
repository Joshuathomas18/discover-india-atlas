// Madhya Pradesh Mountains Data
import { KarnatakaPOI } from '../../types/database';

export const vindhyaRangeData: KarnatakaPOI = {
  id: 'vindhya_range_madhya_pradesh',
  name: 'Vindhya Range',
  category: 'mountain',
  coordinates: { lat: 23.2599, lng: 77.4126 },
  description: 'Mountain range in MP, known for its scenic beauty and biodiversity.',
  icon_color: '#8B4513',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Mountain Facts', description: 'Mountain range with scenic beauty and biodiversity.', image_url: 'https://example.com/mountain-facts.jpg', links: [{ title: 'Mountain Information', url: 'https://example.com/mountain-info' }] }] },
    trekking: { title: 'Trekking', content: [{ title: 'Trekking Routes', description: 'Various trekking routes through the range.', image_url: 'https://example.com/trekking-routes.jpg', links: [{ title: 'Trekking Guide', url: 'https://example.com/trekking-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'Mountains accessible from Bhopal.', image_url: 'https://example.com/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://example.com/route-guide' }] }] }
  }
};

export default [vindhyaRangeData];

