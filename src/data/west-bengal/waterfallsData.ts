// West Bengal Waterfalls Data
import { KarnatakaPOI } from '../../types/database';

export const mirikFallsData: KarnatakaPOI = {
  id: 'mirik_falls_west_bengal',
  name: 'Mirik Falls',
  category: 'waterfall',
  coordinates: { lat: 26.8833, lng: 88.1833 },
  description: 'Beautiful waterfall near Mirik, popular among tourists.',
  icon_color: '#87CEEB',
  tabs: {
    size: { title: 'Size', content: [{ title: 'Waterfall Size', description: 'Waterfall height and dimensions.', image_url: 'https://www.wbtourism.gov.in/waterfall-size.jpg', links: [{ title: 'Size Information', url: 'https://www.wbtourism.gov.in/size-info' }] }] },
    rivers_associated: { title: 'Rivers Associated', content: [{ title: 'Water Source', description: 'Source of water for the waterfall.', image_url: 'https://www.wbtourism.gov.in/water-source.jpg', links: [{ title: 'Source Information', url: 'https://www.wbtourism.gov.in/source-info' }] }] },
    facts: { title: 'Facts', content: [{ title: 'Waterfall Facts', description: 'Interesting facts about the waterfall.', image_url: 'https://www.wbtourism.gov.in/waterfall-facts.jpg', links: [{ title: 'Facts Information', url: 'https://www.wbtourism.gov.in/facts-info' }] }] },
    tourists: { title: 'Tourists', content: [{ title: 'Tourist Information', description: 'Information for tourists visiting the waterfall.', image_url: 'https://www.wbtourism.gov.in/tourist-info.jpg', links: [{ title: 'Tourist Guide', url: 'https://www.wbtourism.gov.in/tourist-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'How to reach the waterfall.', image_url: 'https://www.wbtourism.gov.in/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://www.wbtourism.gov.in/route-guide' }] }] }
  }
};

export default [mirikFallsData];
