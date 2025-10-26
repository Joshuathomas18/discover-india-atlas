// Sikkim Forests Data
import { KarnatakaPOI } from '../../types/database';

export const barseyData: KarnatakaPOI = {
  id: 'barsey_sikkim',
  name: 'Barsey',
  category: 'forest',
  coordinates: { lat: 27.0833, lng: 88.0833 },
  description: 'Forest area with diverse flora and fauna.',
  icon_color: '#27AE60',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Forest Facts', description: 'Important facts about Barsey forest.', image_url: 'https://www.sikkimtourism.gov.in/barsey-facts.jpg', links: [{ title: 'Forest Information', url: 'https://www.sikkimtourism.gov.in/forest-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Visiting Information', description: 'Information about visiting Barsey forest.', image_url: 'https://www.sikkimtourism.gov.in/barsey-visiting.jpg', links: [{ title: 'Visiting Guide', url: 'https://www.sikkimtourism.gov.in/visiting-guide' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'Animal Species', description: 'Various animal species found in Barsey forest.', image_url: 'https://www.sikkimtourism.gov.in/barsey-animals.jpg', links: [{ title: 'Animal Guide', url: 'https://www.sikkimtourism.gov.in/animal-guide' }] }] }
  }
};

export const maenamData: KarnatakaPOI = {
  id: 'maenam_sikkim',
  name: 'Maenam',
  category: 'forest',
  coordinates: { lat: 27.3167, lng: 88.3500 },
  description: 'Forest area with diverse flora and fauna.',
  icon_color: '#27AE60',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Forest Facts', description: 'Important facts about Maenam forest.', image_url: 'https://www.sikkimtourism.gov.in/maenam-facts.jpg', links: [{ title: 'Forest Information', url: 'https://www.sikkimtourism.gov.in/forest-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Visiting Information', description: 'Information about visiting Maenam forest.', image_url: 'https://www.sikkimtourism.gov.in/maenam-visiting.jpg', links: [{ title: 'Visiting Guide', url: 'https://www.sikkimtourism.gov.in/visiting-guide' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'Animal Species', description: 'Various animal species found in Maenam forest.', image_url: 'https://www.sikkimtourism.gov.in/maenam-animals.jpg', links: [{ title: 'Animal Guide', url: 'https://www.sikkimtourism.gov.in/animal-guide' }] }] }
  }
};

export const shingbaData: KarnatakaPOI = {
  id: 'shingba_sikkim',
  name: 'Shingba',
  category: 'forest',
  coordinates: { lat: 27.6833, lng: 88.6333 },
  description: 'Forest area with diverse flora and fauna.',
  icon_color: '#27AE60',
  tabs: {
    facts: { title: 'Facts', content: [{ title: 'Forest Facts', description: 'Important facts about Shingba forest.', image_url: 'https://www.sikkimtourism.gov.in/shingba-facts.jpg', links: [{ title: 'Forest Information', url: 'https://www.sikkimtourism.gov.in/forest-info' }] }] },
    visiting: { title: 'Visiting', content: [{ title: 'Visiting Information', description: 'Information about visiting Shingba forest.', image_url: 'https://www.sikkimtourism.gov.in/shingba-visiting.jpg', links: [{ title: 'Visiting Guide', url: 'https://www.sikkimtourism.gov.in/visiting-guide' }] }] },
    animals_found: { title: 'Animals Found', content: [{ title: 'Animal Species', description: 'Various animal species found in Shingba forest.', image_url: 'https://www.sikkimtourism.gov.in/shingba-animals.jpg', links: [{ title: 'Animal Guide', url: 'https://www.sikkimtourism.gov.in/animal-guide' }] }] }
  }
};

export default [barseyData, maenamData, shingbaData];
