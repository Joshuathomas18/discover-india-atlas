// Gujarat Rivers Data
import { KarnatakaPOI } from '../../types/database';

export const sabarmatiData: KarnatakaPOI = {
  id: 'sabarmati_gujarat',
  name: 'Sabarmati River',
  category: 'river',
  coordinates: { lat: 23.0225, lng: 72.5714 },
  description: 'Major river flowing through Ahmedabad, known for its historical significance.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'River Facts', description: 'Important river for irrigation and water supply.', image_url: 'https://www.gujarattourism.com/river-facts.jpg', links: [{ title: 'River Information', url: 'https://www.gujarattourism.com/river-info' }] }] },
    fishes_found: { title: 'Fishes Found', content: [{ title: 'Fish Species', description: 'Various fish species found in the river.', image_url: 'https://www.gujarattourism.com/fish-species.jpg', links: [{ title: 'Species List', url: 'https://www.gujarattourism.com/species-list' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'River accessible from Ahmedabad and surrounding areas.', image_url: 'https://www.gujarattourism.com/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://www.gujarattourism.com/route-guide' }] }] }
  }
};

export const narmadaData: KarnatakaPOI = {
  id: 'narmada_gujarat',
  name: 'Narmada River',
  category: 'river',
  coordinates: { lat: 21.7645, lng: 72.1519 },
  description: 'Sacred river flowing through Gujarat, known for its religious significance.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'River Facts', description: 'Sacred river with religious significance.', image_url: 'https://www.gujarattourism.com/river-facts.jpg', links: [{ title: 'River Information', url: 'https://www.gujarattourism.com/river-info' }] }] },
    fishes_found: { title: 'Fishes Found', content: [{ title: 'Fish Species', description: 'Various fish species found in the river.', image_url: 'https://www.gujarattourism.com/fish-species.jpg', links: [{ title: 'Species List', url: 'https://www.gujarattourism.com/species-list' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'River accessible from various cities in Gujarat.', image_url: 'https://www.gujarattourism.com/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://www.gujarattourism.com/route-guide' }] }] }
  }
};

export default [sabarmatiData, narmadaData];
