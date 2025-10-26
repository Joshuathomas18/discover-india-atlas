// Bihar Rivers Data
import { KarnatakaPOI } from '../../types/database';

export const gangesBiharData: KarnatakaPOI = {
  id: 'ganges_bihar',
  name: 'Ganges River',
  category: 'river',
  coordinates: { lat: 25.5941, lng: 85.1376 },
  description: 'Sacred river flowing through Bihar, important for irrigation and religious significance.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'River Facts', description: 'Sacred river important for irrigation and religious significance.', image_url: 'https://www.bihartourism.gov.in/river-facts.jpg', links: [{ title: 'River Information', url: 'https://www.bihartourism.gov.in/river-info' }] }] },
    fishes_found: { title: 'Fishes Found', content: [{ title: 'Fish Species', description: 'Various fish species found in the river.', image_url: 'https://www.bihartourism.gov.in/fish-species.jpg', links: [{ title: 'Species List', url: 'https://www.bihartourism.gov.in/species-list' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'River accessible from Patna and surrounding areas.', image_url: 'https://www.bihartourism.gov.in/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://www.bihartourism.gov.in/route-guide' }] }] }
  }
};

export const sonData: KarnatakaPOI = {
  id: 'son_bihar',
  name: 'Son River',
  category: 'river',
  coordinates: { lat: 24.7833, lng: 85.0000 },
  description: 'Important river in Bihar, known for its tributaries.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'River Facts', description: 'Important river with multiple tributaries.', image_url: 'https://www.bihartourism.gov.in/river-facts.jpg', links: [{ title: 'River Information', url: 'https://www.bihartourism.gov.in/river-info' }] }] },
    fishes_found: { title: 'Fishes Found', content: [{ title: 'Fish Species', description: 'Various fish species found in the river.', image_url: 'https://www.bihartourism.gov.in/fish-species.jpg', links: [{ title: 'Species List', url: 'https://www.bihartourism.gov.in/species-list' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'River accessible from Gaya and surrounding areas.', image_url: 'https://www.bihartourism.gov.in/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://www.bihartourism.gov.in/route-guide' }] }] }
  }
};

export default [gangesBiharData, sonData];
