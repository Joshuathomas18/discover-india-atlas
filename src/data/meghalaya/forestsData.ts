// Meghalaya Forests Data
import { KarnatakaPOI } from '../../types/database';

export const balphakramForestData: KarnatakaPOI = {
  id: 'balphakram_forest_meghalaya',
  name: 'Balphakram Forest',
  category: 'forest',
  coordinates: { lat: 25.2167, lng: 90.6167 },
  description: 'Forest area with diverse flora and fauna.',
  icon_color: '#27AE60',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Forest Facts', description: 'Important facts about Balphakram forest.', image_url: 'https://www.meghalayatourism.gov.in/balphakram-forest-facts.jpg', links: [{ title: 'Forest Information', url: 'https://www.meghalayatourism.gov.in/forest-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Visiting Information', description: 'Information about visiting Balphakram forest.', image_url: 'https://www.meghalayatourism.gov.in/balphakram-forest-visiting.jpg', links: [{ title: 'Visiting Guide', url: 'https://www.meghalayatourism.gov.in/visiting-guide' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'Animal Species', description: 'Various animal species found in Balphakram forest.', image_url: 'https://www.meghalayatourism.gov.in/balphakram-forest-animals.jpg', links: [{ title: 'Animal Guide', url: 'https://www.meghalayatourism.gov.in/animal-guide' }] }] }
  }
};

export const nokrekForestData: KarnatakaPOI = {
  id: 'nokrek_forest_meghalaya',
  name: 'Nokrek Forest',
  category: 'forest',
  coordinates: { lat: 25.5167, lng: 90.2167 },
  description: 'Forest area with diverse flora and fauna.',
  icon_color: '#27AE60',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Forest Facts', description: 'Important facts about Nokrek forest.', image_url: 'https://www.meghalayatourism.gov.in/nokrek-forest-facts.jpg', links: [{ title: 'Forest Information', url: 'https://www.meghalayatourism.gov.in/forest-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Visiting Information', description: 'Information about visiting Nokrek forest.', image_url: 'https://www.meghalayatourism.gov.in/nokrek-forest-visiting.jpg', links: [{ title: 'Visiting Guide', url: 'https://www.meghalayatourism.gov.in/visiting-guide' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'Animal Species', description: 'Various animal species found in Nokrek forest.', image_url: 'https://www.meghalayatourism.gov.in/nokrek-forest-animals.jpg', links: [{ title: 'Animal Guide', url: 'https://www.meghalayatourism.gov.in/animal-guide' }] }] }
  }
};

export const sijuForestData: KarnatakaPOI = {
  id: 'siju_forest_meghalaya',
  name: 'Siju Forest',
  category: 'forest',
  coordinates: { lat: 25.4500, lng: 90.6167 },
  description: 'Forest area with diverse flora and fauna.',
  icon_color: '#27AE60',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Forest Facts', description: 'Important facts about Siju forest.', image_url: 'https://www.meghalayatourism.gov.in/siju-forest-facts.jpg', links: [{ title: 'Forest Information', url: 'https://www.meghalayatourism.gov.in/forest-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Visiting Information', description: 'Information about visiting Siju forest.', image_url: 'https://www.meghalayatourism.gov.in/siju-forest-visiting.jpg', links: [{ title: 'Visiting Guide', url: 'https://www.meghalayatourism.gov.in/visiting-guide' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'Animal Species', description: 'Various animal species found in Siju forest.', image_url: 'https://www.meghalayatourism.gov.in/siju-forest-animals.jpg', links: [{ title: 'Animal Guide', url: 'https://www.meghalayatourism.gov.in/animal-guide' }] }] }
  }
};

export default [balphakramForestData, nokrekForestData, sijuForestData];
