// Uttarakhand Rivers Data
import { KarnatakaPOI } from '../../types/database';

export const gangesUttarakhandData: KarnatakaPOI = {
  id: 'ganges_uttarakhand',
  name: 'Ganges River',
  category: 'river',
  coordinates: { lat: 30.9944, lng: 78.9403 },
  description: 'Sacred river originating from Gangotri, considered the holiest river by Hindus.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'River Origin', description: 'Originates from Gangotri glacier in the Himalayas.', image_url: 'https://www.uttarakhandtourism.gov.in/river-origin.jpg', links: [{ title: 'Origin Information', url: 'https://www.uttarakhandtourism.gov.in/origin-info' }] }] },
    fishes_found: { title: 'Fishes Found', content: [{ title: 'Fish Species', description: 'Various fish species found in the upper reaches.', image_url: 'https://www.uttarakhandtourism.gov.in/fish-species.jpg', links: [{ title: 'Species List', url: 'https://www.uttarakhandtourism.gov.in/species-list' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'Accessible from Gangotri and other pilgrimage sites.', image_url: 'https://www.uttarakhandtourism.gov.in/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://www.uttarakhandtourism.gov.in/route-guide' }] }] }
  }
};

export const yamunaUttarakhandData: KarnatakaPOI = {
  id: 'yamuna_uttarakhand',
  name: 'Yamuna River',
  category: 'river',
  coordinates: { lat: 31.0131, lng: 78.4603 },
  description: 'Sacred river originating from Yamunotri, major tributary of the Ganges.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'River Origin', description: 'Originates from Yamunotri glacier in the Himalayas.', image_url: 'https://www.uttarakhandtourism.gov.in/river-origin.jpg', links: [{ title: 'Origin Information', url: 'https://www.uttarakhandtourism.gov.in/origin-info' }] }] },
    fishes_found: { title: 'Fishes Found', content: [{ title: 'Fish Species', description: 'Various fish species found in the upper reaches.', image_url: 'https://www.uttarakhandtourism.gov.in/fish-species.jpg', links: [{ title: 'Species List', url: 'https://www.uttarakhandtourism.gov.in/species-list' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'Accessible from Yamunotri and other pilgrimage sites.', image_url: 'https://www.uttarakhandtourism.gov.in/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://www.uttarakhandtourism.gov.in/route-guide' }] }] }
  }
};

export const alaknandaData: KarnatakaPOI = {
  id: 'alaknanda_uttarakhand',
  name: 'Alaknanda River',
  category: 'river',
  coordinates: { lat: 30.7356, lng: 79.0669 },
  description: 'Sacred river flowing through Badrinath, merges with Bhagirathi to form Ganges.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'River Course', description: 'Flows through Badrinath and merges with Bhagirathi.', image_url: 'https://www.uttarakhandtourism.gov.in/river-course.jpg', links: [{ title: 'Course Information', url: 'https://www.uttarakhandtourism.gov.in/course-info' }] }] },
    fishes_found: { title: 'Fishes Found', content: [{ title: 'Fish Species', description: 'Various fish species found in the river.', image_url: 'https://www.uttarakhandtourism.gov.in/fish-species.jpg', links: [{ title: 'Species List', url: 'https://www.uttarakhandtourism.gov.in/species-list' }] }] },
    how_to_get_there: { title: 'How to Get There', content: [{ title: 'Access Routes', description: 'Accessible from Badrinath and surrounding areas.', image_url: 'https://www.uttarakhandtourism.gov.in/access-routes.jpg', links: [{ title: 'Route Guide', url: 'https://www.uttarakhandtourism.gov.in/route-guide' }] }] }
  }
};

export default [gangesUttarakhandData, yamunaUttarakhandData, alaknandaData];
