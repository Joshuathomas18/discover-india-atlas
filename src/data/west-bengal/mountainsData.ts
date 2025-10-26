// West Bengal Mountains Data
import { KarnatakaPOI } from '../../types/database';

export const darjeelingHillsData: KarnatakaPOI = {
  id: 'darjeeling_hills_west_bengal',
  name: 'Darjeeling Hills',
  category: 'mountain',
  coordinates: { lat: 27.0360, lng: 88.2627 },
  description: 'Mountain range known for tea gardens and scenic beauty.',
  icon_color: '#8B4513',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Mountain Facts', description: 'Mountain range famous for tea cultivation.', image_url: 'https://www.wbtourism.gov.in/mountain-facts.jpg', links: [{ title: 'Mountain Information', url: 'https://www.wbtourism.gov.in/mountain-info' }] }] },
    trekking: { title: 'Trekking', content: [{ title: 'Trekking Routes', description: 'Various trekking routes through tea gardens.', image_url: 'https://www.wbtourism.gov.in/trekking-routes.jpg', links: [{ title: 'Trekking Guide', url: 'https://www.wbtourism.gov.in/trekking-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'Mountains accessible from Darjeeling.', image_url: 'https://www.wbtourism.gov.in/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://www.wbtourism.gov.in/route-guide' }] }] }
  }
};

export default [darjeelingHillsData];
