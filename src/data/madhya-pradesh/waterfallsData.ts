// Madhya Pradesh Waterfalls Data
import { KarnatakaPOI } from '../../types/database';

export const dhuandharData: KarnatakaPOI = {
  id: 'dhuandhar_madhya_pradesh',
  name: 'Dhuandhar Falls',
  category: 'waterfall',
  coordinates: { lat: 23.1815, lng: 79.9864 },
  description: 'Beautiful waterfall on Narmada River, popular among tourists.',
  icon_color: '#87CEEB',
  tabs: {
    size: { title: 'Size', content: [{ title: 'Waterfall Size', description: 'Waterfall height and dimensions.', image_url: 'https://example.com/waterfall-size.jpg', links: [{ title: 'Size Information', url: 'https://example.com/size-info' }] }] },
    rivers_associated: { title: 'Rivers Associated', content: [{ title: 'Narmada River', description: 'Built on the Narmada River.', image_url: 'https://example.com/narmada-river.jpg', links: [{ title: 'River Information', url: 'https://example.com/river-info' }] }] },
    facts: { title: 'Facts', content: [{ title: 'Waterfall Facts', description: 'Interesting facts about the waterfall.', image_url: 'https://example.com/waterfall-facts.jpg', links: [{ title: 'Facts Information', url: 'https://example.com/facts-info' }] }] },
    tourists: { title: 'Tourists', content: [{ title: 'Tourist Information', description: 'Information for tourists visiting the waterfall.', image_url: 'https://example.com/tourist-info.jpg', links: [{ title: 'Tourist Guide', url: 'https://example.com/tourist-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'How to reach the waterfall.', image_url: 'https://example.com/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://example.com/route-guide' }] }] }
  }
};

export default [dhuandharData];

