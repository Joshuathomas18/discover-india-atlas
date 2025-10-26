// Sikkim Mountains Data
import { KarnatakaPOI } from '../../types/database';

export const kanchenjungaData: KarnatakaPOI = {
  id: 'kanchenjunga_sikkim',
  name: 'Kanchenjunga',
  category: 'mountain',
  coordinates: { lat: 27.7000, lng: 88.1500 },
  description: 'Third highest mountain in the world.',
  icon_color: '#95A5A6',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Mountain Facts', description: 'Important facts about Kanchenjunga.', image_url: 'https://www.sikkimtourism.gov.in/kanchenjunga-facts.jpg', links: [{ title: 'Mountain Information', url: 'https://www.sikkimtourism.gov.in/mountain-info' }] }] },
    trekking: { title: 'Trekking', content: [{ title: 'Trekking Routes', description: 'Popular trekking routes in Kanchenjunga.', image_url: 'https://www.sikkimtourism.gov.in/kanchenjunga-trekking.jpg', links: [{ title: 'Trekking Guide', url: 'https://www.sikkimtourism.gov.in/trekking-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Travel Guide', description: 'How to reach Kanchenjunga.', image_url: 'https://www.sikkimtourism.gov.in/kanchenjunga-travel.jpg', links: [{ title: 'Travel Information', url: 'https://www.sikkimtourism.gov.in/travel-info' }] }] }
  }
};

export const singalilaData: KarnatakaPOI = {
  id: 'singalila_sikkim',
  name: 'Singalila',
  category: 'mountain',
  coordinates: { lat: 27.0833, lng: 88.0833 },
  description: 'Mountain range in Sikkim.',
  icon_color: '#95A5A6',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Mountain Facts', description: 'Important facts about Singalila.', image_url: 'https://www.sikkimtourism.gov.in/singalila-facts.jpg', links: [{ title: 'Mountain Information', url: 'https://www.sikkimtourism.gov.in/mountain-info' }] }] },
    trekking: { title: 'Trekking', content: [{ title: 'Trekking Routes', description: 'Popular trekking routes in Singalila.', image_url: 'https://www.sikkimtourism.gov.in/singalila-trekking.jpg', links: [{ title: 'Trekking Guide', url: 'https://www.sikkimtourism.gov.in/trekking-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Travel Guide', description: 'How to reach Singalila.', image_url: 'https://www.sikkimtourism.gov.in/singalila-travel.jpg', links: [{ title: 'Travel Information', url: 'https://www.sikkimtourism.gov.in/travel-info' }] }] }
  }
};

export default [kanchenjungaData, singalilaData];
