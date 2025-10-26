// Sikkim Waterfalls Data
import { KarnatakaPOI } from '../../types/database';

export const kanchenjungaFallsData: KarnatakaPOI = {
  id: 'kanchenjunga_falls_sikkim',
  name: 'Kanchenjunga Falls',
  category: 'waterfall',
  coordinates: { lat: 27.7000, lng: 88.1500 },
  description: 'Beautiful waterfall in Sikkim.',
  icon_color: '#3498DB',
  tabs: {
    size: { title: 'Size', content: [{ title: 'Waterfall Size', description: 'Information about the size of Kanchenjunga Falls.', image_url: 'https://www.sikkimtourism.gov.in/kanchenjunga-falls-size.jpg', links: [{ title: 'Size Information', url: 'https://www.sikkimtourism.gov.in/size-info' }] }] },
    rivers_associated: { title: 'Rivers Associated', content: [{ title: 'Associated Rivers', description: 'Rivers associated with Kanchenjunga Falls.', image_url: 'https://www.sikkimtourism.gov.in/kanchenjunga-falls-rivers.jpg', links: [{ title: 'River Information', url: 'https://www.sikkimtourism.gov.in/river-info' }] }] },
    facts: { title: 'Facts', content: [{ title: 'Waterfall Facts', description: 'Important facts about Kanchenjunga Falls.', image_url: 'https://www.sikkimtourism.gov.in/kanchenjunga-falls-facts.jpg', links: [{ title: 'Facts Information', url: 'https://www.sikkimtourism.gov.in/facts-info' }] }] },
    tourists: { title: 'Tourists', content: [{ title: 'Tourist Information', description: 'Information for tourists visiting Kanchenjunga Falls.', image_url: 'https://www.sikkimtourism.gov.in/kanchenjunga-falls-tourists.jpg', links: [{ title: 'Tourist Guide', url: 'https://www.sikkimtourism.gov.in/tourist-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Travel Guide', description: 'How to reach Kanchenjunga Falls.', image_url: 'https://www.sikkimtourism.gov.in/kanchenjunga-falls-travel.jpg', links: [{ title: 'Travel Information', url: 'https://www.sikkimtourism.gov.in/travel-info' }] }] }
  }
};

export const bhimNalaData: KarnatakaPOI = {
  id: 'bhim_nala_sikkim',
  name: 'Bhim Nala',
  category: 'waterfall',
  coordinates: { lat: 27.3333, lng: 88.5833 },
  description: 'Beautiful waterfall in Sikkim.',
  icon_color: '#3498DB',
  tabs: {
    size: { title: 'Size', content: [{ title: 'Waterfall Size', description: 'Information about the size of Bhim Nala.', image_url: 'https://www.sikkimtourism.gov.in/bhim-nala-size.jpg', links: [{ title: 'Size Information', url: 'https://www.sikkimtourism.gov.in/size-info' }] }] },
    rivers_associated: { title: 'Rivers Associated', content: [{ title: 'Associated Rivers', description: 'Rivers associated with Bhim Nala.', image_url: 'https://www.sikkimtourism.gov.in/bhim-nala-rivers.jpg', links: [{ title: 'River Information', url: 'https://www.sikkimtourism.gov.in/river-info' }] }] },
    facts: { title: 'Facts', content: [{ title: 'Waterfall Facts', description: 'Important facts about Bhim Nala.', image_url: 'https://www.sikkimtourism.gov.in/bhim-nala-facts.jpg', links: [{ title: 'Facts Information', url: 'https://www.sikkimtourism.gov.in/facts-info' }] }] },
    tourists: { title: 'Tourists', content: [{ title: 'Tourist Information', description: 'Information for tourists visiting Bhim Nala.', image_url: 'https://www.sikkimtourism.gov.in/bhim-nala-tourists.jpg', links: [{ title: 'Tourist Guide', url: 'https://www.sikkimtourism.gov.in/tourist-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Travel Guide', description: 'How to reach Bhim Nala.', image_url: 'https://www.sikkimtourism.gov.in/bhim-nala-travel.jpg', links: [{ title: 'Travel Information', url: 'https://www.sikkimtourism.gov.in/travel-info' }] }] }
  }
};

export default [kanchenjungaFallsData, bhimNalaData];
