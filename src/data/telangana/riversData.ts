// Telangana Rivers Data
import { KarnatakaPOI } from '../../types/database';

export const musiData: KarnatakaPOI = {
  id: 'musi_telangana',
  name: 'Musi River',
  category: 'river',
  coordinates: { lat: 17.3850, lng: 78.4867 },
  description: 'River flowing through Hyderabad, important for the city\'s water supply.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'River Facts', description: 'Important river for Hyderabad\'s water supply.', image_url: 'https://example.com/river-facts.jpg', links: [{ title: 'River Information', url: 'https://example.com/river-info' }] }] },
    fishes_found: { title: 'Fishes Found', content: [{ title: 'Fish Species', description: 'Various fish species found in the river.', image_url: 'https://example.com/fish-species.jpg', links: [{ title: 'Species List', url: 'https://example.com/species-list' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'River accessible from Hyderabad and surrounding areas.', image_url: 'https://example.com/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://example.com/route-guide' }] }] }
  }
};

export const godavariTelanganaData: KarnatakaPOI = {
  id: 'godavari_telangana',
  name: 'Godavari River',
  category: 'river',
  coordinates: { lat: 18.6715, lng: 78.0938 },
  description: 'Sacred river flowing through Telangana, known for its religious significance.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'River Facts', description: 'Sacred river with religious significance.', image_url: 'https://example.com/river-facts.jpg', links: [{ title: 'River Information', url: 'https://example.com/river-info' }] }] },
    fishes_found: { title: 'Fishes Found', content: [{ title: 'Fish Species', description: 'Various fish species found in the river.', image_url: 'https://example.com/fish-species.jpg', links: [{ title: 'Species List', url: 'https://example.com/species-list' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'River accessible from Nizamabad and surrounding areas.', image_url: 'https://example.com/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://example.com/route-guide' }] }] }
  }
};

export default [musiData, godavariTelanganaData];

