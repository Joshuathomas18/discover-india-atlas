// Himachal Pradesh Dams Data
import { KarnatakaPOI } from '../../types/database';

export const bhakraDamData: KarnatakaPOI = {
  id: 'bhakra_dam_himachal_pradesh',
  name: 'Bhakra Dam',
  category: 'dam',
  coordinates: { lat: 31.4000, lng: 76.4000 },
  description: 'Large dam on the Sutlej River, important for hydroelectric power generation.',
  icon_color: '#4682B4',
  tabs: {
    size: { title: 'Size', content: [{ title: 'Dam Size', description: 'Dam dimensions and capacity.', image_url: 'https://www.himachaltourism.gov.in/dam-size.jpg', links: [{ title: 'Size Information', url: 'https://www.himachaltourism.gov.in/size-info' }] }] },
    rivers_associated: { title: 'Rivers Associated', content: [{ title: 'Sutlej River', description: 'Built across the Sutlej River.', image_url: 'https://www.himachaltourism.gov.in/sutlej-river.jpg', links: [{ title: 'River Information', url: 'https://www.himachaltourism.gov.in/river-info' }] }] },
    facts: { title: 'Facts', content: [{ title: 'Dam Facts', description: 'Interesting facts about the dam.', image_url: 'https://www.himachaltourism.gov.in/dam-facts.jpg', links: [{ title: 'Facts Information', url: 'https://www.himachaltourism.gov.in/facts-info' }] }] },
    tourists: { title: 'Tourists', content: [{ title: 'Tourist Information', description: 'Information for tourists visiting the dam.', image_url: 'https://www.himachaltourism.gov.in/tourist-info.jpg', links: [{ title: 'Tourist Guide', url: 'https://www.himachaltourism.gov.in/tourist-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'How to reach the dam.', image_url: 'https://www.himachaltourism.gov.in/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://www.himachaltourism.gov.in/route-guide' }] }] }
  }
};

export default [bhakraDamData];
