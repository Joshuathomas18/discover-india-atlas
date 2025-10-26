// Madhya Pradesh Rivers Data
import { KarnatakaPOI } from '../../types/database';

export const narmadaData: KarnatakaPOI = {
  id: 'narmada_madhya_pradesh',
  name: 'Narmada River',
  category: 'river',
  coordinates: { lat: 23.1815, lng: 79.9864 },
  description: 'Sacred river flowing through MP, known as the "Lifeline of Madhya Pradesh".',
  icon_color: '#4ECDC4',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'River Facts', description: 'Sacred river known as the lifeline of MP.', image_url: 'https://example.com/river-facts.jpg', links: [{ title: 'River Information', url: 'https://example.com/river-info' }] }] },
    fishes_found: { title: 'Fishes Found', content: [{ title: 'Fish Species', description: 'Various fish species found in the river.', image_url: 'https://example.com/fish-species.jpg', links: [{ title: 'Species List', url: 'https://example.com/species-list' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'River accessible from Jabalpur and surrounding areas.', image_url: 'https://example.com/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://example.com/route-guide' }] }] }
  }
};

export const chambalData: KarnatakaPOI = {
  id: 'chambal_madhya_pradesh',
  name: 'Chambal River',
  category: 'river',
  coordinates: { lat: 26.2183, lng: 78.1828 },
  description: 'Important river flowing through MP, known for its gharial population.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'River Facts', description: 'Important river known for gharial population.', image_url: 'https://example.com/river-facts.jpg', links: [{ title: 'River Information', url: 'https://example.com/river-info' }] }] },
    fishes_found: { title: 'Fishes Found', content: [{ title: 'Fish Species', description: 'Various fish species found in the river.', image_url: 'https://example.com/fish-species.jpg', links: [{ title: 'Species List', url: 'https://example.com/species-list' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'River accessible from Gwalior and surrounding areas.', image_url: 'https://example.com/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://example.com/route-guide' }] }] }
  }
};

export default [narmadaData, chambalData];

