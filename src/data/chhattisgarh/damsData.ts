// Chhattisgarh Dams Data
import { KarnatakaPOI } from '../../types/database';

export const hasdeoBangoData: KarnatakaPOI = {
  id: 'hasdeo_bango_chhattisgarh',
  name: 'Hasdeo Bango Dam',
  category: 'dam',
  coordinates: { lat: 22.3500, lng: 82.6833 },
  description: 'Dam on the Hasdeo River, important for irrigation and power generation.',
  icon_color: '#4682B4',
  tabs: {
    size: { title: 'Size', content: [{ title: 'Dam Size', description: 'Dam dimensions and capacity.', image_url: 'https://example.com/dam-size.jpg', links: [{ title: 'Size Information', url: 'https://example.com/size-info' }] }] },
    rivers_associated: { title: 'Rivers Associated', content: [{ title: 'Hasdeo River', description: 'Built across the Hasdeo River.', image_url: 'https://example.com/hasdeo-river.jpg', links: [{ title: 'River Information', url: 'https://example.com/river-info' }] }] },
    facts: { title: 'Facts', content: [{ title: 'Dam Facts', description: 'Interesting facts about the dam.', image_url: 'https://example.com/dam-facts.jpg', links: [{ title: 'Facts Information', url: 'https://example.com/facts-info' }] }] },
    tourists: { title: 'Tourists', content: [{ title: 'Tourist Information', description: 'Information for tourists visiting the dam.', image_url: 'https://example.com/tourist-info.jpg', links: [{ title: 'Tourist Guide', url: 'https://example.com/tourist-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'How to reach the dam.', image_url: 'https://example.com/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://example.com/route-guide' }] }] }
  }
};

export default [hasdeoBangoData];

