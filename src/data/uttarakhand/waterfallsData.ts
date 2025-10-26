// Uttarakhand Waterfalls Data
import { KarnatakaPOI } from '../../types/database';

export const kemptyFallsData: KarnatakaPOI = {
  id: 'kempty_falls_uttarakhand',
  name: 'Kempty Falls',
  category: 'waterfall',
  coordinates: { lat: 30.4598, lng: 78.0644 },
  description: 'Popular waterfall near Mussoorie, known for its scenic beauty.',
  icon_color: '#87CEEB',
  tabs: {
    size: { title: 'Size', content: [{ title: 'Waterfall Size', description: 'Waterfall height and dimensions.', image_url: 'https://www.uttarakhandtourism.gov.in/waterfall-size.jpg', links: [{ title: 'Size Information', url: 'https://www.uttarakhandtourism.gov.in/size-info' }] }] },
    rivers_associated: { title: 'Rivers Associated', content: [{ title: 'Water Source', description: 'Source of water for the waterfall.', image_url: 'https://www.uttarakhandtourism.gov.in/water-source.jpg', links: [{ title: 'Source Information', url: 'https://www.uttarakhandtourism.gov.in/source-info' }] }] },
    facts: { title: 'Facts', content: [{ title: 'Waterfall Facts', description: 'Interesting facts about the waterfall.', image_url: 'https://www.uttarakhandtourism.gov.in/waterfall-facts.jpg', links: [{ title: 'Facts Information', url: 'https://www.uttarakhandtourism.gov.in/facts-info' }] }] },
    tourists: { title: 'Tourists', content: [{ title: 'Tourist Information', description: 'Information for tourists visiting the waterfall.', image_url: 'https://www.uttarakhandtourism.gov.in/tourist-info.jpg', links: [{ title: 'Tourist Guide', url: 'https://www.uttarakhandtourism.gov.in/tourist-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'How to reach the waterfall.', image_url: 'https://www.uttarakhandtourism.gov.in/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://www.uttarakhandtourism.gov.in/route-guide' }] }] }
  }
};

export default [kemptyFallsData];
