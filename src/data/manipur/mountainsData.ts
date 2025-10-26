// Manipur Mountains Data
import { KarnatakaPOI } from '../../types/database';

export const koubruData: KarnatakaPOI = {
  id: 'koubru_manipur',
  name: 'Koubru',
  category: 'mountain',
  coordinates: { lat: 25.1333, lng: 93.9833 },
  description: 'Sacred mountain in Manipur.',
  icon_color: '#95A5A6',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Mountain Facts', description: 'Important facts about Koubru mountain.', image_url: 'https://www.manipurtourism.gov.in/koubru-facts.jpg', links: [{ title: 'Mountain Information', url: 'https://www.manipurtourism.gov.in/mountain-info' }] }] },
    trekking: { title: 'Trekking', content: [{ title: 'Trekking Routes', description: 'Popular trekking routes in Koubru.', image_url: 'https://www.manipurtourism.gov.in/koubru-trekking.jpg', links: [{ title: 'Trekking Guide', url: 'https://www.manipurtourism.gov.in/trekking-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Travel Guide', description: 'How to reach Koubru mountain.', image_url: 'https://www.manipurtourism.gov.in/koubru-travel.jpg', links: [{ title: 'Travel Information', url: 'https://www.manipurtourism.gov.in/travel-info' }] }] }
  }
};

export const thangjingData: KarnatakaPOI = {
  id: 'thangjing_manipur',
  name: 'Thangjing',
  category: 'mountain',
  coordinates: { lat: 24.6333, lng: 93.7667 },
  description: 'Sacred mountain in Manipur.',
  icon_color: '#95A5A6',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Mountain Facts', description: 'Important facts about Thangjing mountain.', image_url: 'https://www.manipurtourism.gov.in/thangjing-facts.jpg', links: [{ title: 'Mountain Information', url: 'https://www.manipurtourism.gov.in/mountain-info' }] }] },
    trekking: { title: 'Trekking', content: [{ title: 'Trekking Routes', description: 'Popular trekking routes in Thangjing.', image_url: 'https://www.manipurtourism.gov.in/thangjing-trekking.jpg', links: [{ title: 'Trekking Guide', url: 'https://www.manipurtourism.gov.in/trekking-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Travel Guide', description: 'How to reach Thangjing mountain.', image_url: 'https://www.manipurtourism.gov.in/thangjing-travel.jpg', links: [{ title: 'Travel Information', url: 'https://www.manipurtourism.gov.in/travel-info' }] }] }
  }
};

export default [koubruData, thangjingData];
