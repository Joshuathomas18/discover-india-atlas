// West Bengal Rivers Data
import { KarnatakaPOI } from '../../types/database';

export const hooghlyData: KarnatakaPOI = {
  id: 'hooghly_west_bengal',
  name: 'Hooghly River',
  category: 'river',
  coordinates: { lat: 22.5726, lng: 88.3639 },
  description: 'Distributary of the Ganges, flowing through Kolkata.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'River Facts', description: 'Important distributary of the Ganges.', image_url: 'https://www.wbtourism.gov.in/river-facts.jpg', links: [{ title: 'River Information', url: 'https://www.wbtourism.gov.in/river-info' }] }] },
    fishes_found: { title: 'Fishes Found', content: [{ title: 'Fish Species', description: 'Various fish species found in the river.', image_url: 'https://www.wbtourism.gov.in/fish-species.jpg', links: [{ title: 'Species List', url: 'https://www.wbtourism.gov.in/species-list' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'River accessible from Kolkata and surrounding areas.', image_url: 'https://www.wbtourism.gov.in/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://www.wbtourism.gov.in/route-guide' }] }] }
  }
};

export const damodarData: KarnatakaPOI = {
  id: 'damodar_west_bengal',
  name: 'Damodar River',
  category: 'river',
  coordinates: { lat: 23.5500, lng: 87.3200 },
  description: 'River known for its industrial importance and coal mining.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'River Facts', description: 'Important river for industrial development.', image_url: 'https://www.wbtourism.gov.in/river-facts.jpg', links: [{ title: 'River Information', url: 'https://www.wbtourism.gov.in/river-info' }] }] },
    fishes_found: { title: 'Fishes Found', content: [{ title: 'Fish Species', description: 'Various fish species found in the river.', image_url: 'https://www.wbtourism.gov.in/fish-species.jpg', links: [{ title: 'Species List', url: 'https://www.wbtourism.gov.in/species-list' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'River accessible from Durgapur and surrounding areas.', image_url: 'https://www.wbtourism.gov.in/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://www.wbtourism.gov.in/route-guide' }] }] }
  }
};

export default [hooghlyData, damodarData];
