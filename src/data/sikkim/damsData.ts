// Sikkim Dams Data
import { KarnatakaPOI } from '../../types/database';

export const teestaDamData: KarnatakaPOI = {
  id: 'teesta_dam_sikkim',
  name: 'Teesta Dam',
  category: 'dam',
  coordinates: { lat: 27.3333, lng: 88.6167 },
  description: 'Major dam on Teesta river.',
  icon_color: '#8E44AD',
  tabs: {
    size: { title: 'Size', content: [{ title: 'Dam Size', description: 'Information about the size of Teesta Dam.', image_url: 'https://www.sikkimtourism.gov.in/teesta-dam-size.jpg', links: [{ title: 'Size Information', url: 'https://www.sikkimtourism.gov.in/size-info' }] }] },
    rivers_associated: { title: 'Rivers Associated', content: [{ title: 'Associated Rivers', description: 'Rivers associated with Teesta Dam.', image_url: 'https://www.sikkimtourism.gov.in/teesta-dam-rivers.jpg', links: [{ title: 'River Information', url: 'https://www.sikkimtourism.gov.in/river-info' }] }] },
    facts: { title: 'Facts', content: [{ title: 'Dam Facts', description: 'Important facts about Teesta Dam.', image_url: 'https://www.sikkimtourism.gov.in/teesta-dam-facts.jpg', links: [{ title: 'Facts Information', url: 'https://www.sikkimtourism.gov.in/facts-info' }] }] },
    tourists: { title: 'Tourists', content: [{ title: 'Tourist Information', description: 'Information for tourists visiting Teesta Dam.', image_url: 'https://www.sikkimtourism.gov.in/teesta-dam-tourists.jpg', links: [{ title: 'Tourist Guide', url: 'https://www.sikkimtourism.gov.in/tourist-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Travel Guide', description: 'How to reach Teesta Dam.', image_url: 'https://www.sikkimtourism.gov.in/teesta-dam-travel.jpg', links: [{ title: 'Travel Information', url: 'https://www.sikkimtourism.gov.in/travel-info' }] }] }
  }
};

export const rangitDamData: KarnatakaPOI = {
  id: 'rangit_dam_sikkim',
  name: 'Rangit Dam',
  category: 'dam',
  coordinates: { lat: 27.2167, lng: 88.4000 },
  description: 'Major dam on Rangit river.',
  icon_color: '#8E44AD',
  tabs: {
    size: { title: 'Size', content: [{ title: 'Dam Size', description: 'Information about the size of Rangit Dam.', image_url: 'https://www.sikkimtourism.gov.in/rangit-dam-size.jpg', links: [{ title: 'Size Information', url: 'https://www.sikkimtourism.gov.in/size-info' }] }] },
    rivers_associated: { title: 'Rivers Associated', content: [{ title: 'Associated Rivers', description: 'Rivers associated with Rangit Dam.', image_url: 'https://www.sikkimtourism.gov.in/rangit-dam-rivers.jpg', links: [{ title: 'River Information', url: 'https://www.sikkimtourism.gov.in/river-info' }] }] },
    facts: { title: 'Facts', content: [{ title: 'Dam Facts', description: 'Important facts about Rangit Dam.', image_url: 'https://www.sikkimtourism.gov.in/rangit-dam-facts.jpg', links: [{ title: 'Facts Information', url: 'https://www.sikkimtourism.gov.in/facts-info' }] }] },
    tourists: { title: 'Tourists', content: [{ title: 'Tourist Information', description: 'Information for tourists visiting Rangit Dam.', image_url: 'https://www.sikkimtourism.gov.in/rangit-dam-tourists.jpg', links: [{ title: 'Tourist Guide', url: 'https://www.sikkimtourism.gov.in/tourist-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Travel Guide', description: 'How to reach Rangit Dam.', image_url: 'https://www.sikkimtourism.gov.in/rangit-dam-travel.jpg', links: [{ title: 'Travel Information', url: 'https://www.sikkimtourism.gov.in/travel-info' }] }] }
  }
};

export default [teestaDamData, rangitDamData];
