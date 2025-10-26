// Manipur Forests Data
import { KarnatakaPOI } from '../../types/database';

export const keibulLamjaoForestData: KarnatakaPOI = {
  id: 'keibul_lamjao_forest_manipur',
  name: 'Keibul Lamjao Forest',
  category: 'forest',
  coordinates: { lat: 24.5000, lng: 93.7667 },
  description: 'Forest area with diverse flora and fauna.',
  icon_color: '#27AE60',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Forest Facts', description: 'Important facts about Keibul Lamjao forest.', image_url: 'https://www.manipurtourism.gov.in/keibul-lamjao-forest-facts.jpg', links: [{ title: 'Forest Information', url: 'https://www.manipurtourism.gov.in/forest-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Visiting Information', description: 'Information about visiting Keibul Lamjao forest.', image_url: 'https://www.manipurtourism.gov.in/keibul-lamjao-forest-visiting.jpg', links: [{ title: 'Visiting Guide', url: 'https://www.manipurtourism.gov.in/visiting-guide' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'Animal Species', description: 'Various animal species found in Keibul Lamjao forest.', image_url: 'https://www.manipurtourism.gov.in/keibul-lamjao-forest-animals.jpg', links: [{ title: 'Animal Guide', url: 'https://www.manipurtourism.gov.in/animal-guide' }] }] }
  }
};

export const yangoupokpiForestData: KarnatakaPOI = {
  id: 'yangoupokpi_forest_manipur',
  name: 'Yangoupokpi Forest',
  category: 'forest',
  coordinates: { lat: 24.3167, lng: 94.0167 },
  description: 'Forest area with diverse flora and fauna.',
  icon_color: '#27AE60',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Forest Facts', description: 'Important facts about Yangoupokpi forest.', image_url: 'https://www.manipurtourism.gov.in/yangoupokpi-forest-facts.jpg', links: [{ title: 'Forest Information', url: 'https://www.manipurtourism.gov.in/forest-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Visiting Information', description: 'Information about visiting Yangoupokpi forest.', image_url: 'https://www.manipurtourism.gov.in/yangoupokpi-forest-visiting.jpg', links: [{ title: 'Visiting Guide', url: 'https://www.manipurtourism.gov.in/visiting-guide' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'Animal Species', description: 'Various animal species found in Yangoupokpi forest.', image_url: 'https://www.manipurtourism.gov.in/yangoupokpi-forest-animals.jpg', links: [{ title: 'Animal Guide', url: 'https://www.manipurtourism.gov.in/animal-guide' }] }] }
  }
};

export const siroiForestData: KarnatakaPOI = {
  id: 'siroi_forest_manipur',
  name: 'Siroi Forest',
  category: 'forest',
  coordinates: { lat: 25.1167, lng: 94.3667 },
  description: 'Forest area with diverse flora and fauna.',
  icon_color: '#27AE60',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Forest Facts', description: 'Important facts about Siroi forest.', image_url: 'https://www.manipurtourism.gov.in/siroi-forest-facts.jpg', links: [{ title: 'Forest Information', url: 'https://www.manipurtourism.gov.in/forest-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Visiting Information', description: 'Information about visiting Siroi forest.', image_url: 'https://www.manipurtourism.gov.in/siroi-forest-visiting.jpg', links: [{ title: 'Visiting Guide', url: 'https://www.manipurtourism.gov.in/visiting-guide' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'Animal Species', description: 'Various animal species found in Siroi forest.', image_url: 'https://www.manipurtourism.gov.in/siroi-forest-animals.jpg', links: [{ title: 'Animal Guide', url: 'https://www.manipurtourism.gov.in/animal-guide' }] }] }
  }
};

export default [keibulLamjaoForestData, yangoupokpiForestData, siroiForestData];
