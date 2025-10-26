// Himachal Pradesh Rivers Data
import { KarnatakaPOI } from '../../types/database';

export const beasData: KarnatakaPOI = {
  id: 'beas_himachal_pradesh',
  name: 'Beas River',
  category: 'river',
  coordinates: { lat: 32.0000, lng: 77.0000 },
  description: 'Major river flowing through Himachal Pradesh, known for its scenic beauty.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'River Facts', description: 'Important river for irrigation and hydroelectric power.', image_url: 'https://www.himachaltourism.gov.in/river-facts.jpg', links: [{ title: 'River Information', url: 'https://www.himachaltourism.gov.in/river-info' }] }] },
    fishes_found: { title: 'Fishes Found', content: [{ title: 'Fish Species', description: 'Various fish species found in the river.', image_url: 'https://www.himachaltourism.gov.in/fish-species.jpg', links: [{ title: 'Species List', url: 'https://www.himachaltourism.gov.in/species-list' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'River accessible from various cities.', image_url: 'https://www.himachaltourism.gov.in/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://www.himachaltourism.gov.in/route-guide' }] }] }
  }
};

export const sutlejData: KarnatakaPOI = {
  id: 'sutlej_himachal_pradesh',
  name: 'Sutlej River',
  category: 'river',
  coordinates: { lat: 31.5000, lng: 78.0000 },
  description: 'Major river flowing through Himachal Pradesh.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'River Facts', description: 'Important river for hydroelectric projects.', image_url: 'https://www.himachaltourism.gov.in/river-facts.jpg', links: [{ title: 'River Information', url: 'https://www.himachaltourism.gov.in/river-info' }] }] },
    fishes_found: { title: 'Fishes Found', content: [{ title: 'Fish Species', description: 'Various fish species found in the river.', image_url: 'https://www.himachaltourism.gov.in/fish-species.jpg', links: [{ title: 'Species List', url: 'https://www.himachaltourism.gov.in/species-list' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'River accessible from various cities.', image_url: 'https://www.himachaltourism.gov.in/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://www.himachaltourism.gov.in/route-guide' }] }] }
  }
};

export default [beasData, sutlejData];
