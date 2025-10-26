// Assam Mountains Data
import { KarnatakaPOI } from '../../types/database';

export const karbiAnglongData: KarnatakaPOI = {
  id: 'karbi_anglong_assam',
  name: 'Karbi Anglong Hills',
  category: 'mountain',
  coordinates: { lat: 26.0000, lng: 93.0000 },
  description: 'Mountain range known for its scenic beauty and tribal culture.',
  icon_color: '#8B4513',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Mountain Facts', description: 'Mountain range with scenic beauty and tribal culture.', image_url: 'https://example.com/mountain-facts.jpg', links: [{ title: 'Mountain Information', url: 'https://example.com/mountain-info' }] }] },
    trekking: { title: 'Trekking', content: [{ title: 'Trekking Routes', description: 'Various trekking routes through the hills.', image_url: 'https://example.com/trekking-routes.jpg', links: [{ title: 'Trekking Guide', url: 'https://example.com/trekking-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'Mountains accessible from various cities in Assam.', image_url: 'https://example.com/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://example.com/route-guide' }] }] }
  }
};

export default [karbiAnglongData];

