// Manipur Waterfalls Data
import { KarnatakaPOI } from '../../types/database';

export const khonghampatData: KarnatakaPOI = {
  id: 'khonghampat_manipur',
  name: 'Khonghampat',
  category: 'waterfall',
  coordinates: { lat: 25.1333, lng: 93.9833 },
  description: 'Beautiful waterfall in Manipur.',
  icon_color: '#3498DB',
  tabs: {
    size: { title: 'Size', content: [{ title: 'Waterfall Size', description: 'Information about the size of Khonghampat Falls.', image_url: 'https://www.manipurtourism.gov.in/khonghampat-size.jpg', links: [{ title: 'Size Information', url: 'https://www.manipurtourism.gov.in/size-info' }] }] },
    rivers_associated: { title: 'Rivers Associated', content: [{ title: 'Associated Rivers', description: 'Rivers associated with Khonghampat Falls.', image_url: 'https://www.manipurtourism.gov.in/khonghampat-rivers.jpg', links: [{ title: 'River Information', url: 'https://www.manipurtourism.gov.in/river-info' }] }] },
    facts: { title: 'Facts', content: [{ title: 'Waterfall Facts', description: 'Important facts about Khonghampat Falls.', image_url: 'https://www.manipurtourism.gov.in/khonghampat-facts.jpg', links: [{ title: 'Facts Information', url: 'https://www.manipurtourism.gov.in/facts-info' }] }] },
    tourists: { title: 'Tourists', content: [{ title: 'Tourist Information', description: 'Information for tourists visiting Khonghampat Falls.', image_url: 'https://www.manipurtourism.gov.in/khonghampat-tourists.jpg', links: [{ title: 'Tourist Guide', url: 'https://www.manipurtourism.gov.in/tourist-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Travel Guide', description: 'How to reach Khonghampat Falls.', image_url: 'https://www.manipurtourism.gov.in/khonghampat-travel.jpg', links: [{ title: 'Travel Information', url: 'https://www.manipurtourism.gov.in/travel-info' }] }] }
  }
};

export const saduChiruData: KarnatakaPOI = {
  id: 'sadu_chiru_manipur',
  name: 'Sadu Chiru',
  category: 'waterfall',
  coordinates: { lat: 24.6333, lng: 93.7667 },
  description: 'Beautiful waterfall in Manipur.',
  icon_color: '#3498DB',
  tabs: {
    size: { title: 'Size', content: [{ title: 'Waterfall Size', description: 'Information about the size of Sadu Chiru Falls.', image_url: 'https://www.manipurtourism.gov.in/sadu-chiru-size.jpg', links: [{ title: 'Size Information', url: 'https://www.manipurtourism.gov.in/size-info' }] }] },
    rivers_associated: { title: 'Rivers Associated', content: [{ title: 'Associated Rivers', description: 'Rivers associated with Sadu Chiru Falls.', image_url: 'https://www.manipurtourism.gov.in/sadu-chiru-rivers.jpg', links: [{ title: 'River Information', url: 'https://www.manipurtourism.gov.in/river-info' }] }] },
    facts: { title: 'Facts', content: [{ title: 'Waterfall Facts', description: 'Important facts about Sadu Chiru Falls.', image_url: 'https://www.manipurtourism.gov.in/sadu-chiru-facts.jpg', links: [{ title: 'Facts Information', url: 'https://www.manipurtourism.gov.in/facts-info' }] }] },
    tourists: { title: 'Tourists', content: [{ title: 'Tourist Information', description: 'Information for tourists visiting Sadu Chiru Falls.', image_url: 'https://www.manipurtourism.gov.in/sadu-chiru-tourists.jpg', links: [{ title: 'Tourist Guide', url: 'https://www.manipurtourism.gov.in/tourist-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Travel Guide', description: 'How to reach Sadu Chiru Falls.', image_url: 'https://www.manipurtourism.gov.in/sadu-chiru-travel.jpg', links: [{ title: 'Travel Information', url: 'https://www.manipurtourism.gov.in/travel-info' }] }] }
  }
};

export default [khonghampatData, saduChiruData];
