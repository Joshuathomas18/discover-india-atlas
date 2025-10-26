// Andhra Pradesh Rivers Data
import { KarnatakaPOI } from '../../types/database';

export const krishnaData: KarnatakaPOI = {
  id: 'krishna_andhra_pradesh',
  name: 'Krishna River',
  category: 'river',
  coordinates: { lat: 16.5062, lng: 80.6480 },
  description: 'Major river flowing through Andhra Pradesh, important for irrigation.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'River Facts', description: 'Important river for irrigation and agriculture.', image_url: 'https://example.com/river-facts.jpg', links: [{ title: 'River Information', url: 'https://example.com/river-info' }] }] },
    fishes_found: { title: 'Fishes Found', content: [{ title: 'Fish Species', description: 'Various fish species found in the river.', image_url: 'https://example.com/fish-species.jpg', links: [{ title: 'Species List', url: 'https://example.com/species-list' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'River accessible from Vijayawada and surrounding areas.', image_url: 'https://example.com/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://example.com/route-guide' }] }] }
  }
};

export const godavariData: KarnatakaPOI = {
  id: 'godavari_andhra_pradesh',
  name: 'Godavari River',
  category: 'river',
  coordinates: { lat: 17.0000, lng: 81.7833 },
  description: 'Sacred river flowing through Andhra Pradesh, known for its religious significance.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'River Facts', description: 'Sacred river with religious significance.', image_url: 'https://example.com/river-facts.jpg', links: [{ title: 'River Information', url: 'https://example.com/river-info' }] }] },
    fishes_found: { title: 'Fishes Found', content: [{ title: 'Fish Species', description: 'Various fish species found in the river.', image_url: 'https://example.com/fish-species.jpg', links: [{ title: 'Species List', url: 'https://example.com/species-list' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'River accessible from Rajahmundry and surrounding areas.', image_url: 'https://example.com/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://example.com/route-guide' }] }] }
  }
};

export default [krishnaData, godavariData];

