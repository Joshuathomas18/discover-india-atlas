// Jharkhand Rivers Data
import { KarnatakaPOI } from '../../types/database';

export const damodarData: KarnatakaPOI = {
  id: 'damodar_jharkhand',
  name: 'Damodar River',
  category: 'river',
  coordinates: { lat: 23.3441, lng: 85.3096 },
  description: 'Major river flowing through Jharkhand, important for irrigation.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'River Facts', description: 'Important river for irrigation and agriculture.', image_url: 'https://example.com/river-facts.jpg', links: [{ title: 'River Information', url: 'https://example.com/river-info' }] }] },
    fishes_found: { title: 'Fishes Found', content: [{ title: 'Fish Species', description: 'Various fish species found in the river.', image_url: 'https://example.com/fish-species.jpg', links: [{ title: 'Species List', url: 'https://example.com/species-list' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'River accessible from Ranchi and surrounding areas.', image_url: 'https://example.com/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://example.com/route-guide' }] }] }
  }
};

export const subarnarekhaData: KarnatakaPOI = {
  id: 'subarnarekha_jharkhand',
  name: 'Subarnarekha River',
  category: 'river',
  coordinates: { lat: 22.8046, lng: 86.2029 },
  description: 'Important river in Jharkhand, known for its gold deposits.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'River Facts', description: 'Important river known for gold deposits.', image_url: 'https://example.com/river-facts.jpg', links: [{ title: 'River Information', url: 'https://example.com/river-info' }] }] },
    fishes_found: { title: 'Fishes Found', content: [{ title: 'Fish Species', description: 'Various fish species found in the river.', image_url: 'https://example.com/fish-species.jpg', links: [{ title: 'Species List', url: 'https://example.com/species-list' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'River accessible from Jamshedpur and surrounding areas.', image_url: 'https://example.com/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://example.com/route-guide' }] }] }
  }
};

export default [damodarData, subarnarekhaData];

