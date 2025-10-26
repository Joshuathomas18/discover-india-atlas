// Manipur Dams Data
import { KarnatakaPOI } from '../../types/database';

export const loktakData: KarnatakaPOI = {
  id: 'loktak_manipur',
  name: 'Loktak',
  category: 'dam',
  coordinates: { lat: 24.5000, lng: 93.7667 },
  description: 'Major dam in Manipur.',
  icon_color: '#8E44AD',
  tabs: {
    size: { title: 'Size', content: [{ title: 'Dam Size', description: 'Information about the size of Loktak Dam.', image_url: 'https://www.manipurtourism.gov.in/loktak-size.jpg', links: [{ title: 'Size Information', url: 'https://www.manipurtourism.gov.in/size-info' }] }] },
    rivers_associated: { title: 'Rivers Associated', content: [{ title: 'Associated Rivers', description: 'Rivers associated with Loktak Dam.', image_url: 'https://www.manipurtourism.gov.in/loktak-rivers.jpg', links: [{ title: 'River Information', url: 'https://www.manipurtourism.gov.in/river-info' }] }] },
    facts: { title: 'Facts', content: [{ title: 'Dam Facts', description: 'Important facts about Loktak Dam.', image_url: 'https://www.manipurtourism.gov.in/loktak-facts.jpg', links: [{ title: 'Facts Information', url: 'https://www.manipurtourism.gov.in/facts-info' }] }] },
    tourists: { title: 'Tourists', content: [{ title: 'Tourist Information', description: 'Information for tourists visiting Loktak Dam.', image_url: 'https://www.manipurtourism.gov.in/loktak-tourists.jpg', links: [{ title: 'Tourist Guide', url: 'https://www.manipurtourism.gov.in/tourist-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Travel Guide', description: 'How to reach Loktak Dam.', image_url: 'https://www.manipurtourism.gov.in/loktak-travel.jpg', links: [{ title: 'Travel Information', url: 'https://www.manipurtourism.gov.in/travel-info' }] }] }
  }
};

export const thoubalData: KarnatakaPOI = {
  id: 'thoubal_dam_manipur',
  name: 'Thoubal',
  category: 'dam',
  coordinates: { lat: 24.6333, lng: 93.9833 },
  description: 'Major dam in Manipur.',
  icon_color: '#8E44AD',
  tabs: {
    size: { title: 'Size', content: [{ title: 'Dam Size', description: 'Information about the size of Thoubal Dam.', image_url: 'https://www.manipurtourism.gov.in/thoubal-dam-size.jpg', links: [{ title: 'Size Information', url: 'https://www.manipurtourism.gov.in/size-info' }] }] },
    rivers_associated: { title: 'Rivers Associated', content: [{ title: 'Associated Rivers', description: 'Rivers associated with Thoubal Dam.', image_url: 'https://www.manipurtourism.gov.in/thoubal-dam-rivers.jpg', links: [{ title: 'River Information', url: 'https://www.manipurtourism.gov.in/river-info' }] }] },
    facts: { title: 'Facts', content: [{ title: 'Dam Facts', description: 'Important facts about Thoubal Dam.', image_url: 'https://www.manipurtourism.gov.in/thoubal-dam-facts.jpg', links: [{ title: 'Facts Information', url: 'https://www.manipurtourism.gov.in/facts-info' }] }] },
    tourists: { title: 'Tourists', content: [{ title: 'Tourist Information', description: 'Information for tourists visiting Thoubal Dam.', image_url: 'https://www.manipurtourism.gov.in/thoubal-dam-tourists.jpg', links: [{ title: 'Tourist Guide', url: 'https://www.manipurtourism.gov.in/tourist-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Travel Guide', description: 'How to reach Thoubal Dam.', image_url: 'https://www.manipurtourism.gov.in/thoubal-dam-travel.jpg', links: [{ title: 'Travel Information', url: 'https://www.manipurtourism.gov.in/travel-info' }] }] }
  }
};

export default [loktakData, thoubalData];
