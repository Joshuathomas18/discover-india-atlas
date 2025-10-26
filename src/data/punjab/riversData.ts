// Punjab Rivers Data
import { KarnatakaPOI } from '../../types/database';

export const sutlejData: KarnatakaPOI = {
  id: 'sutlej_punjab',
  name: 'Sutlej River',
  category: 'river',
  coordinates: { lat: 30.9000, lng: 75.8500 },
  description: 'Major river flowing through Punjab, important for irrigation.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'River Facts', description: 'Important river for irrigation and agriculture.', image_url: 'https://example.com/river-facts.jpg', links: [{ title: 'River Information', url: 'https://example.com/river-info' }] }] },
    fishes_found: { title: 'Fishes Found', content: [{ title: 'Fish Species', description: 'Various fish species found in the river.', image_url: 'https://example.com/fish-species.jpg', links: [{ title: 'Species List', url: 'https://example.com/species-list' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'River accessible from Ludhiana and surrounding areas.', image_url: 'https://example.com/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://example.com/route-guide' }] }] }
  }
};

export const beasData: KarnatakaPOI = {
  id: 'beas_punjab',
  name: 'Beas River',
  category: 'river',
  coordinates: { lat: 31.6330, lng: 74.8656 },
  description: 'Sacred river flowing through Punjab, known for its religious significance.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'River Facts', description: 'Sacred river with religious significance.', image_url: 'https://example.com/river-facts.jpg', links: [{ title: 'River Information', url: 'https://example.com/river-info' }] }] },
    fishes_found: { title: 'Fishes Found', content: [{ title: 'Fish Species', description: 'Various fish species found in the river.', image_url: 'https://example.com/fish-species.jpg', links: [{ title: 'Species List', url: 'https://example.com/species-list' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'River accessible from Amritsar and surrounding areas.', image_url: 'https://example.com/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://example.com/route-guide' }] }] }
  }
};

export default [sutlejData, beasData];

