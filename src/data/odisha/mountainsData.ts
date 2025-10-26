// Odisha Mountains Data
import { KarnatakaPOI } from '../../types/database';

export const deomaliData: KarnatakaPOI = {
  id: 'deomali_odisha',
  name: 'Deomali',
  category: 'mountain',
  coordinates: { lat: 18.8167, lng: 82.7167 },
  description: 'Highest peak in Odisha, known for its scenic beauty.',
  icon_color: '#8B4513',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Mountain Facts', description: 'Highest peak in Odisha with scenic beauty.', image_url: 'https://example.com/mountain-facts.jpg', links: [{ title: 'Mountain Information', url: 'https://example.com/mountain-info' }] }] },
    trekking: { title: 'Trekking', content: [{ title: 'Trekking Routes', description: 'Various trekking routes to the peak.', image_url: 'https://example.com/trekking-routes.jpg', links: [{ title: 'Trekking Guide', url: 'https://example.com/trekking-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'Mountains accessible from Koraput.', image_url: 'https://example.com/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://example.com/route-guide' }] }] }
  }
};

export default [deomaliData];

