// Jharkhand Mountains Data
import { KarnatakaPOI } from '../../types/database';

export const parasnathData: KarnatakaPOI = {
  id: 'parasnath_jharkhand',
  name: 'Parasnath Hills',
  category: 'mountain',
  coordinates: { lat: 23.9833, lng: 85.3500 },
  description: 'Sacred mountain range in Jharkhand, known for its religious significance.',
  icon_color: '#8B4513',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Mountain Facts', description: 'Sacred mountain range with religious significance.', image_url: 'https://example.com/mountain-facts.jpg', links: [{ title: 'Mountain Information', url: 'https://example.com/mountain-info' }] }] },
    trekking: { title: 'Trekking', content: [{ title: 'Trekking Routes', description: 'Various trekking routes through the hills.', image_url: 'https://example.com/trekking-routes.jpg', links: [{ title: 'Trekking Guide', url: 'https://example.com/trekking-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'Mountains accessible from Hazaribagh.', image_url: 'https://example.com/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://example.com/route-guide' }] }] }
  }
};

export default [parasnathData];

