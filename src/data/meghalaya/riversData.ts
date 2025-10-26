// Meghalaya Rivers Data
import { KarnatakaPOI } from '../../types/database';

export const umngotData: KarnatakaPOI = {
  id: 'umngot_meghalaya',
  name: 'Umngot',
  category: 'river',
  coordinates: { lat: 25.2167, lng: 91.9167 },
  description: 'Major river in Meghalaya.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'River Facts', description: 'Important facts about Umngot river.', image_url: 'https://www.meghalayatourism.gov.in/umngot-facts.jpg', links: [{ title: 'River Information', url: 'https://www.meghalayatourism.gov.in/river-info' }] }] },
    fishes_found: { title: 'Fishes Found', content: [{ title: 'Fish Species', description: 'Various fish species found in Umngot.', image_url: 'https://www.meghalayatourism.gov.in/umngot-fish.jpg', links: [{ title: 'Fish Guide', url: 'https://www.meghalayatourism.gov.in/fish-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Travel Guide', description: 'How to reach Umngot river.', image_url: 'https://www.meghalayatourism.gov.in/umngot-travel.jpg', links: [{ title: 'Travel Information', url: 'https://www.meghalayatourism.gov.in/travel-info' }] }] }
  }
};

export const kynshiData: KarnatakaPOI = {
  id: 'kynshi_meghalaya',
  name: 'Kynshi',
  category: 'river',
  coordinates: { lat: 25.5167, lng: 91.2667 },
  description: 'Major river in Meghalaya.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'River Facts', description: 'Important facts about Kynshi river.', image_url: 'https://www.meghalayatourism.gov.in/kynshi-facts.jpg', links: [{ title: 'River Information', url: 'https://www.meghalayatourism.gov.in/river-info' }] }] },
    fishes_found: { title: 'Fishes Found', content: [{ title: 'Fish Species', description: 'Various fish species found in Kynshi.', image_url: 'https://www.meghalayatourism.gov.in/kynshi-fish.jpg', links: [{ title: 'Fish Guide', url: 'https://www.meghalayatourism.gov.in/fish-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Travel Guide', description: 'How to reach Kynshi river.', image_url: 'https://www.meghalayatourism.gov.in/kynshi-travel.jpg', links: [{ title: 'Travel Information', url: 'https://www.meghalayatourism.gov.in/travel-info' }] }] }
  }
};

export const simsangData: KarnatakaPOI = {
  id: 'simsang_meghalaya',
  name: 'Simsang',
  category: 'river',
  coordinates: { lat: 25.5000, lng: 90.6167 },
  description: 'Major river in Meghalaya.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'River Facts', description: 'Important facts about Simsang river.', image_url: 'https://www.meghalayatourism.gov.in/simsang-facts.jpg', links: [{ title: 'River Information', url: 'https://www.meghalayatourism.gov.in/river-info' }] }] },
    fishes_found: { title: 'Fishes Found', content: [{ title: 'Fish Species', description: 'Various fish species found in Simsang.', image_url: 'https://www.meghalayatourism.gov.in/simsang-fish.jpg', links: [{ title: 'Fish Guide', url: 'https://www.meghalayatourism.gov.in/fish-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Travel Guide', description: 'How to reach Simsang river.', image_url: 'https://www.meghalayatourism.gov.in/simsang-travel.jpg', links: [{ title: 'Travel Information', url: 'https://www.meghalayatourism.gov.in/travel-info' }] }] }
  }
};

export default [umngotData, kynshiData, simsangData];
