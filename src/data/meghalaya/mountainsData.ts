// Meghalaya Mountains Data
import { KarnatakaPOI } from '../../types/database';

export const shillongPeakData: KarnatakaPOI = {
  id: 'shillong_peak_meghalaya',
  name: 'Shillong Peak',
  category: 'mountain',
  coordinates: { lat: 25.5689, lng: 91.8831 },
  description: 'Highest point in Meghalaya.',
  icon_color: '#95A5A6',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Mountain Facts', description: 'Important facts about Shillong Peak.', image_url: 'https://www.meghalayatourism.gov.in/shillong-peak-facts.jpg', links: [{ title: 'Mountain Information', url: 'https://www.meghalayatourism.gov.in/mountain-info' }] }] },
    trekking: { title: 'Trekking', content: [{ title: 'Trekking Routes', description: 'Popular trekking routes in Shillong Peak.', image_url: 'https://www.meghalayatourism.gov.in/shillong-peak-trekking.jpg', links: [{ title: 'Trekking Guide', url: 'https://www.meghalayatourism.gov.in/trekking-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Travel Guide', description: 'How to reach Shillong Peak.', image_url: 'https://www.meghalayatourism.gov.in/shillong-peak-travel.jpg', links: [{ title: 'Travel Information', url: 'https://www.meghalayatourism.gov.in/travel-info' }] }] }
  }
};

export const nokrekData: KarnatakaPOI = {
  id: 'nokrek_meghalaya',
  name: 'Nokrek',
  category: 'mountain',
  coordinates: { lat: 25.5167, lng: 90.2167 },
  description: 'Mountain range in Meghalaya.',
  icon_color: '#95A5A6',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Mountain Facts', description: 'Important facts about Nokrek.', image_url: 'https://www.meghalayatourism.gov.in/nokrek-facts.jpg', links: [{ title: 'Mountain Information', url: 'https://www.meghalayatourism.gov.in/mountain-info' }] }] },
    trekking: { title: 'Trekking', content: [{ title: 'Trekking Routes', description: 'Popular trekking routes in Nokrek.', image_url: 'https://www.meghalayatourism.gov.in/nokrek-trekking.jpg', links: [{ title: 'Trekking Guide', url: 'https://www.meghalayatourism.gov.in/trekking-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Travel Guide', description: 'How to reach Nokrek.', image_url: 'https://www.meghalayatourism.gov.in/nokrek-travel.jpg', links: [{ title: 'Travel Information', url: 'https://www.meghalayatourism.gov.in/travel-info' }] }] }
  }
};

export default [shillongPeakData, nokrekData];
