// Meghalaya Dams Data
import { KarnatakaPOI } from '../../types/database';

export const umiamData: KarnatakaPOI = {
  id: 'umiam_meghalaya',
  name: 'Umiam',
  category: 'dam',
  coordinates: { lat: 25.7000, lng: 91.8833 },
  description: 'Major dam in Meghalaya.',
  icon_color: '#8E44AD',
  tabs: {
    size: { title: 'Size', content: [{ title: 'Dam Size', description: 'Information about the size of Umiam Dam.', image_url: 'https://www.meghalayatourism.gov.in/umiam-size.jpg', links: [{ title: 'Size Information', url: 'https://www.meghalayatourism.gov.in/size-info' }] }] },
    rivers_associated: { title: 'Rivers Associated', content: [{ title: 'Associated Rivers', description: 'Rivers associated with Umiam Dam.', image_url: 'https://www.meghalayatourism.gov.in/umiam-rivers.jpg', links: [{ title: 'River Information', url: 'https://www.meghalayatourism.gov.in/river-info' }] }] },
    facts: { title: 'Facts', content: [{ title: 'Dam Facts', description: 'Important facts about Umiam Dam.', image_url: 'https://www.meghalayatourism.gov.in/umiam-facts.jpg', links: [{ title: 'Facts Information', url: 'https://www.meghalayatourism.gov.in/facts-info' }] }] },
    tourists: { title: 'Tourists', content: [{ title: 'Tourist Information', description: 'Information for tourists visiting Umiam Dam.', image_url: 'https://www.meghalayatourism.gov.in/umiam-tourists.jpg', links: [{ title: 'Tourist Guide', url: 'https://www.meghalayatourism.gov.in/tourist-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Travel Guide', description: 'How to reach Umiam Dam.', image_url: 'https://www.meghalayatourism.gov.in/umiam-travel.jpg', links: [{ title: 'Travel Information', url: 'https://www.meghalayatourism.gov.in/travel-info' }] }] }
  }
};

export const myntduData: KarnatakaPOI = {
  id: 'myntdu_meghalaya',
  name: 'Myntdu',
  category: 'dam',
  coordinates: { lat: 25.4500, lng: 92.2000 },
  description: 'Major dam in Meghalaya.',
  icon_color: '#8E44AD',
  tabs: {
    size: { title: 'Size', content: [{ title: 'Dam Size', description: 'Information about the size of Myntdu Dam.', image_url: 'https://www.meghalayatourism.gov.in/myntdu-size.jpg', links: [{ title: 'Size Information', url: 'https://www.meghalayatourism.gov.in/size-info' }] }] },
    rivers_associated: { title: 'Rivers Associated', content: [{ title: 'Associated Rivers', description: 'Rivers associated with Myntdu Dam.', image_url: 'https://www.meghalayatourism.gov.in/myntdu-rivers.jpg', links: [{ title: 'River Information', url: 'https://www.meghalayatourism.gov.in/river-info' }] }] },
    facts: { title: 'Facts', content: [{ title: 'Dam Facts', description: 'Important facts about Myntdu Dam.', image_url: 'https://www.meghalayatourism.gov.in/myntdu-facts.jpg', links: [{ title: 'Facts Information', url: 'https://www.meghalayatourism.gov.in/facts-info' }] }] },
    tourists: { title: 'Tourists', content: [{ title: 'Tourist Information', description: 'Information for tourists visiting Myntdu Dam.', image_url: 'https://www.meghalayatourism.gov.in/myntdu-tourists.jpg', links: [{ title: 'Tourist Guide', url: 'https://www.meghalayatourism.gov.in/tourist-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Travel Guide', description: 'How to reach Myntdu Dam.', image_url: 'https://www.meghalayatourism.gov.in/myntdu-travel.jpg', links: [{ title: 'Travel Information', url: 'https://www.meghalayatourism.gov.in/travel-info' }] }] }
  }
};

export default [umiamData, myntduData];
