// Telangana Mountains Data
import { KarnatakaPOI } from '../../types/database';

export const ananthagiriData: KarnatakaPOI = {
  id: 'ananthagiri_telangana',
  name: 'Ananthagiri Hills',
  category: 'mountain',
  coordinates: { lat: 17.3850, lng: 78.4867 },
  description: 'Scenic hill station near Hyderabad, known for its coffee plantations.',
  icon_color: '#8B4513',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Mountain Facts', description: 'Scenic hill station with coffee plantations.', image_url: 'https://example.com/mountain-facts.jpg', links: [{ title: 'Mountain Information', url: 'https://example.com/mountain-info' }] }] },
    trekking: { title: 'Trekking', content: [{ title: 'Trekking Routes', description: 'Various trekking routes through coffee plantations.', image_url: 'https://example.com/trekking-routes.jpg', links: [{ title: 'Trekking Guide', url: 'https://example.com/trekking-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'Mountains accessible from Hyderabad.', image_url: 'https://example.com/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://example.com/route-guide' }] }] }
  }
};

export default [ananthagiriData];

