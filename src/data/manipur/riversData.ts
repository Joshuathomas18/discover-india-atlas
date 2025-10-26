// Manipur Rivers Data
import { KarnatakaPOI } from '../../types/database';

export const imphalData: KarnatakaPOI = {
  id: 'imphal_river_manipur',
  name: 'Imphal',
  category: 'river',
  coordinates: { lat: 24.8167, lng: 93.9500 },
  description: 'Major river in Manipur.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'River Facts', description: 'Important facts about Imphal river.', image_url: 'https://www.manipurtourism.gov.in/imphal-river-facts.jpg', links: [{ title: 'River Information', url: 'https://www.manipurtourism.gov.in/river-info' }] }] },
    fishes_found: { title: 'Fishes Found', content: [{ title: 'Fish Species', description: 'Various fish species found in Imphal.', image_url: 'https://www.manipurtourism.gov.in/imphal-river-fish.jpg', links: [{ title: 'Fish Guide', url: 'https://www.manipurtourism.gov.in/fish-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Travel Guide', description: 'How to reach Imphal river.', image_url: 'https://www.manipurtourism.gov.in/imphal-river-travel.jpg', links: [{ title: 'Travel Information', url: 'https://www.manipurtourism.gov.in/travel-info' }] }] }
  }
};

export const thoubalData: KarnatakaPOI = {
  id: 'thoubal_river_manipur',
  name: 'Thoubal',
  category: 'river',
  coordinates: { lat: 24.6333, lng: 93.9833 },
  description: 'Major river in Manipur.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'River Facts', description: 'Important facts about Thoubal river.', image_url: 'https://www.manipurtourism.gov.in/thoubal-river-facts.jpg', links: [{ title: 'River Information', url: 'https://www.manipurtourism.gov.in/river-info' }] }] },
    fishes_found: { title: 'Fishes Found', content: [{ title: 'Fish Species', description: 'Various fish species found in Thoubal.', image_url: 'https://www.manipurtourism.gov.in/thoubal-river-fish.jpg', links: [{ title: 'Fish Guide', url: 'https://www.manipurtourism.gov.in/fish-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Travel Guide', description: 'How to reach Thoubal river.', image_url: 'https://www.manipurtourism.gov.in/thoubal-river-travel.jpg', links: [{ title: 'Travel Information', url: 'https://www.manipurtourism.gov.in/travel-info' }] }] }
  }
};

export const barakData: KarnatakaPOI = {
  id: 'barak_manipur',
  name: 'Barak',
  category: 'river',
  coordinates: { lat: 24.8000, lng: 93.1167 },
  description: 'Major river in Manipur.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'River Facts', description: 'Important facts about Barak river.', image_url: 'https://www.manipurtourism.gov.in/barak-facts.jpg', links: [{ title: 'River Information', url: 'https://www.manipurtourism.gov.in/river-info' }] }] },
    fishes_found: { title: 'Fishes Found', content: [{ title: 'Fish Species', description: 'Various fish species found in Barak.', image_url: 'https://www.manipurtourism.gov.in/barak-fish.jpg', links: [{ title: 'Fish Guide', url: 'https://www.manipurtourism.gov.in/fish-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Travel Guide', description: 'How to reach Barak river.', image_url: 'https://www.manipurtourism.gov.in/barak-travel.jpg', links: [{ title: 'Travel Information', url: 'https://www.manipurtourism.gov.in/travel-info' }] }] }
  }
};

export default [imphalData, thoubalData, barakData];
