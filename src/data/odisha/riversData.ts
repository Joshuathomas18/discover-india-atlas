// Odisha Rivers Data
import { KarnatakaPOI } from '../../types/database';

export const mahanadiData: KarnatakaPOI = {
  id: 'mahanadi_odisha',
  name: 'Mahanadi River',
  category: 'river',
  coordinates: { lat: 20.2961, lng: 85.8245 },
  description: 'Major river flowing through Odisha, important for irrigation and agriculture.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'River Facts', description: 'Important river for irrigation and agriculture.', image_url: 'https://example.com/river-facts.jpg', links: [{ title: 'River Information', url: 'https://example.com/river-info' }] }] },
    fishes_found: { title: 'Fishes Found', content: [{ title: 'Fish Species', description: 'Various fish species found in the river.', image_url: 'https://example.com/fish-species.jpg', links: [{ title: 'Species List', url: 'https://example.com/species-list' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'River accessible from Bhubaneswar and surrounding areas.', image_url: 'https://example.com/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://example.com/route-guide' }] }] }
  }
};

export const brahmaniData: KarnatakaPOI = {
  id: 'brahmani_odisha',
  name: 'Brahmani River',
  category: 'river',
  coordinates: { lat: 20.4625, lng: 85.8825 },
  description: 'Important river flowing through Odisha, known for its tributaries.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'River Facts', description: 'Important river with multiple tributaries.', image_url: 'https://example.com/river-facts.jpg', links: [{ title: 'River Information', url: 'https://example.com/river-info' }] }] },
    fishes_found: { title: 'Fishes Found', content: [{ title: 'Fish Species', description: 'Various fish species found in the river.', image_url: 'https://example.com/fish-species.jpg', links: [{ title: 'Species List', url: 'https://example.com/species-list' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'River accessible from Cuttack and surrounding areas.', image_url: 'https://example.com/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://example.com/route-guide' }] }] }
  }
};

export default [mahanadiData, brahmaniData];

