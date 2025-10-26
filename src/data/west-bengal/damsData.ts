// West Bengal Dams Data
import { KarnatakaPOI } from '../../types/database';

export const damodarValleyDamData: KarnatakaPOI = {
  id: 'damodar_valley_dam_west_bengal',
  name: 'Damodar Valley Dam',
  category: 'dam',
  coordinates: { lat: 23.5500, lng: 87.3200 },
  description: 'Dam on the Damodar River, important for flood control and power generation.',
  icon_color: '#4682B4',
  tabs: {
    size: { title: 'Size', content: [{ title: 'Dam Size', description: 'Dam dimensions and capacity.', image_url: 'https://www.wbtourism.gov.in/dam-size.jpg', links: [{ title: 'Size Information', url: 'https://www.wbtourism.gov.in/size-info' }] }] },
    rivers_associated: { title: 'Rivers Associated', content: [{ title: 'Damodar River', description: 'Built across the Damodar River.', image_url: 'https://www.wbtourism.gov.in/damodar-river.jpg', links: [{ title: 'River Information', url: 'https://www.wbtourism.gov.in/river-info' }] }] },
    facts: { title: 'Facts', content: [{ title: 'Dam Facts', description: 'Interesting facts about the dam.', image_url: 'https://www.wbtourism.gov.in/dam-facts.jpg', links: [{ title: 'Facts Information', url: 'https://www.wbtourism.gov.in/facts-info' }] }] },
    tourists: { title: 'Tourists', content: [{ title: 'Tourist Information', description: 'Information for tourists visiting the dam.', image_url: 'https://www.wbtourism.gov.in/tourist-info.jpg', links: [{ title: 'Tourist Guide', url: 'https://www.wbtourism.gov.in/tourist-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'How to reach the dam.', image_url: 'https://www.wbtourism.gov.in/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://www.wbtourism.gov.in/route-guide' }] }] }
  }
};

export default [damodarValleyDamData];
