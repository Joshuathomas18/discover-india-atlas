// Uttarakhand Dams Data
import { KarnatakaPOI } from '../../types/database';

export const tehriDamData: KarnatakaPOI = {
  id: 'tehri_dam_uttarakhand',
  name: 'Tehri Dam',
  category: 'dam',
  coordinates: { lat: 30.3833, lng: 78.4833 },
  description: 'Large dam on the Bhagirathi River, important for hydroelectric power generation.',
  icon_color: '#4682B4',
  tabs: {
    size: { title: 'Size', content: [{ title: 'Dam Size', description: 'Dam dimensions and capacity.', image_url: 'https://www.uttarakhandtourism.gov.in/dam-size.jpg', links: [{ title: 'Size Information', url: 'https://www.uttarakhandtourism.gov.in/size-info' }] }] },
    rivers_associated: { title: 'Rivers Associated', content: [{ title: 'Bhagirathi River', description: 'Built across the Bhagirathi River.', image_url: 'https://www.uttarakhandtourism.gov.in/bhagirathi-river.jpg', links: [{ title: 'River Information', url: 'https://www.uttarakhandtourism.gov.in/river-info' }] }] },
    facts: { title: 'Facts', content: [{ title: 'Dam Facts', description: 'Interesting facts about the dam.', image_url: 'https://www.uttarakhandtourism.gov.in/dam-facts.jpg', links: [{ title: 'Facts Information', url: 'https://www.uttarakhandtourism.gov.in/facts-info' }] }] },
    tourists: { title: 'Tourists', content: [{ title: 'Tourist Information', description: 'Information for tourists visiting the dam.', image_url: 'https://www.uttarakhandtourism.gov.in/tourist-info.jpg', links: [{ title: 'Tourist Guide', url: 'https://www.uttarakhandtourism.gov.in/tourist-guide' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'How to reach the dam.', image_url: 'https://www.uttarakhandtourism.gov.in/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://www.uttarakhandtourism.gov.in/route-guide' }] }] }
  }
};

export default [tehriDamData];
