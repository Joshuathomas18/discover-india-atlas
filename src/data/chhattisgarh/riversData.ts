// Chhattisgarh Rivers Data
import { KarnatakaPOI } from '../../types/database';

export const mahanadiChhattisgarhData: KarnatakaPOI = {
  id: 'mahanadi_chhattisgarh',
  name: 'Mahanadi River',
  category: 'river',
  coordinates: { lat: 21.2514, lng: 81.6296 },
  description: 'Major river flowing through Chhattisgarh, important for irrigation.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'River Facts', description: 'Important river for irrigation and agriculture.', image_url: 'https://example.com/river-facts.jpg', links: [{ title: 'River Information', url: 'https://example.com/river-info' }] }] },
    fishes_found: { title: 'Fishes Found', content: [{ title: 'Fish Species', description: 'Various fish species found in the river.', image_url: 'https://example.com/fish-species.jpg', links: [{ title: 'Species List', url: 'https://example.com/species-list' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'River accessible from Raipur and surrounding areas.', image_url: 'https://example.com/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://example.com/route-guide' }] }] }
  }
};

export const indravatiData: KarnatakaPOI = {
  id: 'indravati_chhattisgarh',
  name: 'Indravati River',
  category: 'river',
  coordinates: { lat: 19.0833, lng: 82.0333 },
  description: 'Important river in Chhattisgarh, known for its tributaries.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'River Facts', description: 'Important river with multiple tributaries.', image_url: 'https://example.com/river-facts.jpg', links: [{ title: 'River Information', url: 'https://example.com/river-info' }] }] },
    fishes_found: { title: 'Fishes Found', content: [{ title: 'Fish Species', description: 'Various fish species found in the river.', image_url: 'https://example.com/fish-species.jpg', links: [{ title: 'Species List', url: 'https://example.com/species-list' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'River accessible from Jagdalpur and surrounding areas.', image_url: 'https://example.com/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://example.com/route-guide' }] }] }
  }
};

export default [mahanadiChhattisgarhData, indravatiData];

