// Gujarat Waterfalls Data
import { KarnatakaPOI } from '../../types/database';

export const saputaraFallsData: KarnatakaPOI = {
  id: 'saputara_falls_gujarat',
  name: 'Saputara Falls',
  category: 'waterfall',
  coordinates: { lat: 20.5833, lng: 73.7500 },
  description: 'Beautiful waterfall in Saputara hill station.',
  icon_color: '#87CEEB',
  tabs: {
    size: { title: 'Size', content: [{ title: 'Waterfall Size', description: 'Waterfall height and dimensions.', image_url: 'https://www.gujarattourism.com/waterfall-size.jpg', links: [{ title: 'Size Information', url: 'https://www.gujarattourism.com/size-info' }] }] },
    rivers_associated: { title: 'Rivers Associated', content: [{ title: 'Water Source', description: 'Source of water for the waterfall.', image_url: 'https://www.gujarattourism.com/water-source.jpg', links: [{ title: 'Source Information', url: 'https://www.gujarattourism.com/source-info' }] }] },
    facts: { title: 'Facts', content: [{ title: 'Waterfall Facts', description: 'Interesting facts about the waterfall.', image_url: 'https://www.gujarattourism.com/waterfall-facts.jpg', links: [{ title: 'Facts Information', url: 'https://www.gujarattourism.com/facts-info' }] }] },
    tourists: { title: 'Tourists', content: [{ title: 'Tourist Information', description: 'Information for tourists visiting the waterfall.', image_url: 'https://www.gujarattourism.com/tourist-info.jpg', links: [{ title: 'Tourist Guide', url: 'https://www.gujarattourism.com/tourist-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'How to reach the waterfall.', image_url: 'https://www.gujarattourism.com/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://www.gujarattourism.com/route-guide' }] }] }
  }
};

export default [saputaraFallsData];
