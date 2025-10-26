// Telangana Dams Data
import { KarnatakaPOI } from '../../types/database';

export const nagarjunaSagarTelanganaData: KarnatakaPOI = {
  id: 'nagarjuna_sagar_telangana',
  name: 'Nagarjuna Sagar Dam',
  category: 'dam',
  coordinates: { lat: 16.5833, lng: 79.3167 },
  description: 'Large dam on the Krishna River, important for irrigation and power generation.',
  icon_color: '#4682B4',
  tabs: {
    size: { title: 'Size', content: [{ title: 'Dam Size', description: 'Dam dimensions and capacity.', image_url: 'https://example.com/dam-size.jpg', links: [{ title: 'Size Information', url: 'https://example.com/size-info' }] }] },
    rivers_associated: { title: 'Rivers Associated', content: [{ title: 'Krishna River', description: 'Built across the Krishna River.', image_url: 'https://example.com/krishna-river.jpg', links: [{ title: 'River Information', url: 'https://example.com/river-info' }] }] },
    facts: { title: 'Facts', content: [{ title: 'Dam Facts', description: 'Interesting facts about the dam.', image_url: 'https://example.com/dam-facts.jpg', links: [{ title: 'Facts Information', url: 'https://example.com/facts-info' }] }] },
    tourists: { title: 'Tourists', content: [{ title: 'Tourist Information', description: 'Information for tourists visiting the dam.', image_url: 'https://example.com/tourist-info.jpg', links: [{ title: 'Tourist Guide', url: 'https://example.com/tourist-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'How to reach the dam.', image_url: 'https://example.com/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://example.com/route-guide' }] }] }
  }
};

export default [nagarjunaSagarTelanganaData];

