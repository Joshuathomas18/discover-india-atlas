// Assam Rivers Data
import { KarnatakaPOI } from '../../types/database';

export const brahmaputraData: KarnatakaPOI = {
  id: 'brahmaputra_assam',
  name: 'Brahmaputra River',
  category: 'river',
  coordinates: { lat: 26.1445, lng: 91.7362 },
  description: 'Major river flowing through Assam, known as the "Lifeline of Assam".',
  icon_color: '#4ECDC4',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'River Facts', description: 'Major river known as the lifeline of Assam.', image_url: 'https://example.com/river-facts.jpg', links: [{ title: 'River Information', url: 'https://example.com/river-info' }] }] },
    fishes_found: { title: 'Fishes Found', content: [{ title: 'Fish Species', description: 'Various fish species found in the river.', image_url: 'https://example.com/fish-species.jpg', links: [{ title: 'Species List', url: 'https://example.com/species-list' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'River accessible from Guwahati and surrounding areas.', image_url: 'https://example.com/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://example.com/route-guide' }] }] }
  }
};

export const barakData: KarnatakaPOI = {
  id: 'barak_assam',
  name: 'Barak River',
  category: 'river',
  coordinates: { lat: 24.8167, lng: 92.8000 },
  description: 'Important river in southern Assam, known for its tributaries.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'River Facts', description: 'Important river with multiple tributaries.', image_url: 'https://example.com/river-facts.jpg', links: [{ title: 'River Information', url: 'https://example.com/river-info' }] }] },
    fishes_found: { title: 'Fishes Found', content: [{ title: 'Fish Species', description: 'Various fish species found in the river.', image_url: 'https://example.com/fish-species.jpg', links: [{ title: 'Species List', url: 'https://example.com/species-list' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'River accessible from Silchar and surrounding areas.', image_url: 'https://example.com/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://example.com/route-guide' }] }] }
  }
};

export default [brahmaputraData, barakData];

