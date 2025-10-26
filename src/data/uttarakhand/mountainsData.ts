// Uttarakhand Mountains Data
import { KarnatakaPOI } from '../../types/database';

export const nandaDeviData: KarnatakaPOI = {
  id: 'nanda_devi_uttarakhand',
  name: 'Nanda Devi',
  category: 'mountain',
  coordinates: { lat: 30.3751, lng: 79.9709 },
  description: 'Second highest mountain in India, sacred peak in Hindu mythology.',
  icon_color: '#8B4513',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Mountain Facts', description: 'Second highest peak in India at 7,816 meters.', image_url: 'https://www.uttarakhandtourism.gov.in/mountain-facts.jpg', links: [{ title: 'Peak Information', url: 'https://www.uttarakhandtourism.gov.in/peak-info' }] }] },
    trekking: { title: 'Trekking', content: [{ title: 'Trekking Routes', description: 'Challenging trekking routes for experienced climbers.', image_url: 'https://www.uttarakhandtourism.gov.in/trekking-routes.jpg', links: [{ title: 'Trekking Guide', url: 'https://www.uttarakhandtourism.gov.in/trekking-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'Accessible from Joshimath and surrounding areas.', image_url: 'https://www.uttarakhandtourism.gov.in/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://www.uttarakhandtourism.gov.in/route-guide' }] }] }
  }
};

export const trishulData: KarnatakaPOI = {
  id: 'trishul_uttarakhand',
  name: 'Trishul',
  category: 'mountain',
  coordinates: { lat: 30.3108, lng: 79.7756 },
  description: 'Sacred mountain peak representing Lord Shiva\'s trident.',
  icon_color: '#8B4513',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Mountain Facts', description: 'Sacred peak representing Lord Shiva\'s trident.', image_url: 'https://www.uttarakhandtourism.gov.in/mountain-facts.jpg', links: [{ title: 'Peak Information', url: 'https://www.uttarakhandtourism.gov.in/peak-info' }] }] },
    trekking: { title: 'Trekking', content: [{ title: 'Trekking Routes', description: 'Trekking routes with religious significance.', image_url: 'https://www.uttarakhandtourism.gov.in/trekking-routes.jpg', links: [{ title: 'Trekking Guide', url: 'https://www.uttarakhandtourism.gov.in/trekking-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'Accessible from Joshimath and surrounding areas.', image_url: 'https://www.uttarakhandtourism.gov.in/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://www.uttarakhandtourism.gov.in/route-guide' }] }] }
  }
};

export default [nandaDeviData, trishulData];
