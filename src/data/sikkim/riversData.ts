// Sikkim Rivers Data
import { KarnatakaPOI } from '../../types/database';

export const teestaData: KarnatakaPOI = {
  id: 'teesta_sikkim',
  name: 'Teesta',
  category: 'river',
  coordinates: { lat: 27.3333, lng: 88.6167 },
  description: 'Major river flowing through Sikkim.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'River Facts', description: 'Important facts about Teesta river.', image_url: 'https://www.sikkimtourism.gov.in/teesta-facts.jpg', links: [{ title: 'River Information', url: 'https://www.sikkimtourism.gov.in/river-info' }] }] },
    fishes_found: { title: 'Fishes Found', content: [{ title: 'Fish Species', description: 'Various fish species found in Teesta.', image_url: 'https://www.sikkimtourism.gov.in/teesta-fish.jpg', links: [{ title: 'Fish Guide', url: 'https://www.sikkimtourism.gov.in/fish-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Travel Guide', description: 'How to reach Teesta river.', image_url: 'https://www.sikkimtourism.gov.in/teesta-travel.jpg', links: [{ title: 'Travel Information', url: 'https://www.sikkimtourism.gov.in/travel-info' }] }] }
  }
};

export const rangitData: KarnatakaPOI = {
  id: 'rangit_sikkim',
  name: 'Rangit',
  category: 'river',
  coordinates: { lat: 27.2167, lng: 88.4000 },
  description: 'Major river flowing through Sikkim.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'River Facts', description: 'Important facts about Rangit river.', image_url: 'https://www.sikkimtourism.gov.in/rangit-facts.jpg', links: [{ title: 'River Information', url: 'https://www.sikkimtourism.gov.in/river-info' }] }] },
    fishes_found: { title: 'Fishes Found', content: [{ title: 'Fish Species', description: 'Various fish species found in Rangit.', image_url: 'https://www.sikkimtourism.gov.in/rangit-fish.jpg', links: [{ title: 'Fish Guide', url: 'https://www.sikkimtourism.gov.in/fish-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Travel Guide', description: 'How to reach Rangit river.', image_url: 'https://www.sikkimtourism.gov.in/rangit-travel.jpg', links: [{ title: 'Travel Information', url: 'https://www.sikkimtourism.gov.in/travel-info' }] }] }
  }
};

export const lachungData: KarnatakaPOI = {
  id: 'lachung_sikkim',
  name: 'Lachung',
  category: 'river',
  coordinates: { lat: 27.6833, lng: 88.7167 },
  description: 'Major river flowing through Sikkim.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'River Facts', description: 'Important facts about Lachung river.', image_url: 'https://www.sikkimtourism.gov.in/lachung-facts.jpg', links: [{ title: 'River Information', url: 'https://www.sikkimtourism.gov.in/river-info' }] }] },
    fishes_found: { title: 'Fishes Found', content: [{ title: 'Fish Species', description: 'Various fish species found in Lachung.', image_url: 'https://www.sikkimtourism.gov.in/lachung-fish.jpg', links: [{ title: 'Fish Guide', url: 'https://www.sikkimtourism.gov.in/fish-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Travel Guide', description: 'How to reach Lachung river.', image_url: 'https://www.sikkimtourism.gov.in/lachung-travel.jpg', links: [{ title: 'Travel Information', url: 'https://www.sikkimtourism.gov.in/travel-info' }] }] }
  }
};

export default [teestaData, rangitData, lachungData];
