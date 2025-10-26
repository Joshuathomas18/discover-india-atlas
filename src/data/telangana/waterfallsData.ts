// Telangana Waterfalls Data
import { KarnatakaPOI } from '../../types/database';

export const bogathaData: KarnatakaPOI = {
  id: 'bogatha_telangana',
  name: 'Bogatha Falls',
  category: 'waterfall',
  coordinates: { lat: 18.4333, lng: 79.1500 },
  description: 'Beautiful waterfall in Karimnagar district, popular among tourists.',
  icon_color: '#87CEEB',
  tabs: {
    size: { title: 'Size', content: [{ title: 'Waterfall Size', description: 'Waterfall height and dimensions.', image_url: 'https://example.com/waterfall-size.jpg', links: [{ title: 'Size Information', url: 'https://example.com/size-info' }] }] },
    rivers_associated: { title: 'Rivers Associated', content: [{ title: 'Water Source', description: 'Source of water for the waterfall.', image_url: 'https://example.com/water-source.jpg', links: [{ title: 'Source Information', url: 'https://example.com/source-info' }] }] },
    facts: { title: 'Facts', content: [{ title: 'Waterfall Facts', description: 'Interesting facts about the waterfall.', image_url: 'https://example.com/waterfall-facts.jpg', links: [{ title: 'Facts Information', url: 'https://example.com/facts-info' }] }] },
    tourists: { title: 'Tourists', content: [{ title: 'Tourist Information', description: 'Information for tourists visiting the waterfall.', image_url: 'https://example.com/tourist-info.jpg', links: [{ title: 'Tourist Guide', url: 'https://example.com/tourist-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'How to reach the waterfall.', image_url: 'https://example.com/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://example.com/route-guide' }] }] }
  }
};

export default [bogathaData];

