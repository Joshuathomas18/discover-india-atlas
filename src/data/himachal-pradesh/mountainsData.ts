// Himachal Pradesh Mountains Data
import { KarnatakaPOI } from '../../types/database';

export const himalayasData: KarnatakaPOI = {
  id: 'himalayas_himachal_pradesh',
  name: 'Himalayas',
  category: 'mountain',
  coordinates: { lat: 32.0000, lng: 77.0000 },
  description: 'Mighty Himalayan mountain range with snow-capped peaks.',
  icon_color: '#8B4513',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Mountain Facts', description: 'Highest mountain range in the world.', image_url: 'https://www.himachaltourism.gov.in/mountain-facts.jpg', links: [{ title: 'Mountain Information', url: 'https://www.himachaltourism.gov.in/mountain-info' }] }] },
    trekking: { title: 'Trekking', content: [{ title: 'Trekking Routes', description: 'Various trekking routes available.', image_url: 'https://www.himachaltourism.gov.in/trekking-routes.jpg', links: [{ title: 'Trekking Guide', url: 'https://www.himachaltourism.gov.in/trekking-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'Mountains accessible from various cities.', image_url: 'https://www.himachaltourism.gov.in/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://www.himachaltourism.gov.in/route-guide' }] }] }
  }
};

export const dhauladharData: KarnatakaPOI = {
  id: 'dhauladhar_himachal_pradesh',
  name: 'Dhauladhar Range',
  category: 'mountain',
  coordinates: { lat: 32.2000, lng: 76.5000 },
  description: 'Mountain range known for its scenic beauty and trekking opportunities.',
  icon_color: '#8B4513',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Mountain Facts', description: 'Beautiful mountain range with scenic views.', image_url: 'https://www.himachaltourism.gov.in/mountain-facts.jpg', links: [{ title: 'Mountain Information', url: 'https://www.himachaltourism.gov.in/mountain-info' }] }] },
    trekking: { title: 'Trekking', content: [{ title: 'Trekking Routes', description: 'Popular trekking destination.', image_url: 'https://www.himachaltourism.gov.in/trekking-routes.jpg', links: [{ title: 'Trekking Guide', url: 'https://www.himachaltourism.gov.in/trekking-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'Mountains accessible from various cities.', image_url: 'https://www.himachaltourism.gov.in/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://www.himachaltourism.gov.in/route-guide' }] }] }
  }
};

export default [himalayasData, dhauladharData];
