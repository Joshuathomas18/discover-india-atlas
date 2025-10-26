// Meghalaya Waterfalls Data
import { KarnatakaPOI } from '../../types/database';

export const nohkalikaiData: KarnatakaPOI = {
  id: 'nohkalikai_meghalaya',
  name: 'Nohkalikai',
  category: 'waterfall',
  coordinates: { lat: 25.3000, lng: 91.7000 },
  description: 'Beautiful waterfall in Meghalaya.',
  icon_color: '#3498DB',
  tabs: {
    size: { title: 'Size', content: [{ title: 'Waterfall Size', description: 'Information about the size of Nohkalikai Falls.', image_url: 'https://www.meghalayatourism.gov.in/nohkalikai-size.jpg', links: [{ title: 'Size Information', url: 'https://www.meghalayatourism.gov.in/size-info' }] }] },
    rivers_associated: { title: 'Rivers Associated', content: [{ title: 'Associated Rivers', description: 'Rivers associated with Nohkalikai Falls.', image_url: 'https://www.meghalayatourism.gov.in/nohkalikai-rivers.jpg', links: [{ title: 'River Information', url: 'https://www.meghalayatourism.gov.in/river-info' }] }] },
    facts: { title: 'Facts', content: [{ title: 'Waterfall Facts', description: 'Important facts about Nohkalikai Falls.', image_url: 'https://www.meghalayatourism.gov.in/nohkalikai-facts.jpg', links: [{ title: 'Facts Information', url: 'https://www.meghalayatourism.gov.in/facts-info' }] }] },
    tourists: { title: 'Tourists', content: [{ title: 'Tourist Information', description: 'Information for tourists visiting Nohkalikai Falls.', image_url: 'https://www.meghalayatourism.gov.in/nohkalikai-tourists.jpg', links: [{ title: 'Tourist Guide', url: 'https://www.meghalayatourism.gov.in/tourist-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Travel Guide', description: 'How to reach Nohkalikai Falls.', image_url: 'https://www.meghalayatourism.gov.in/nohkalikai-travel.jpg', links: [{ title: 'Travel Information', url: 'https://www.meghalayatourism.gov.in/travel-info' }] }] }
  }
};

export const sevenSistersData: KarnatakaPOI = {
  id: 'seven_sisters_meghalaya',
  name: 'Seven Sisters',
  category: 'waterfall',
  coordinates: { lat: 25.3000, lng: 91.7000 },
  description: 'Beautiful waterfall in Meghalaya.',
  icon_color: '#3498DB',
  tabs: {
    size: { title: 'Size', content: [{ title: 'Waterfall Size', description: 'Information about the size of Seven Sisters Falls.', image_url: 'https://www.meghalayatourism.gov.in/seven-sisters-size.jpg', links: [{ title: 'Size Information', url: 'https://www.meghalayatourism.gov.in/size-info' }] }] },
    rivers_associated: { title: 'Rivers Associated', content: [{ title: 'Associated Rivers', description: 'Rivers associated with Seven Sisters Falls.', image_url: 'https://www.meghalayatourism.gov.in/seven-sisters-rivers.jpg', links: [{ title: 'River Information', url: 'https://www.meghalayatourism.gov.in/river-info' }] }] },
    facts: { title: 'Facts', content: [{ title: 'Waterfall Facts', description: 'Important facts about Seven Sisters Falls.', image_url: 'https://www.meghalayatourism.gov.in/seven-sisters-facts.jpg', links: [{ title: 'Facts Information', url: 'https://www.meghalayatourism.gov.in/facts-info' }] }] },
    tourists: { title: 'Tourists', content: [{ title: 'Tourist Information', description: 'Information for tourists visiting Seven Sisters Falls.', image_url: 'https://www.meghalayatourism.gov.in/seven-sisters-tourists.jpg', links: [{ title: 'Tourist Guide', url: 'https://www.meghalayatourism.gov.in/tourist-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Travel Guide', description: 'How to reach Seven Sisters Falls.', image_url: 'https://www.meghalayatourism.gov.in/seven-sisters-travel.jpg', links: [{ title: 'Travel Information', url: 'https://www.meghalayatourism.gov.in/travel-info' }] }] }
  }
};

export default [nohkalikaiData, sevenSistersData];
