// Bihar Places Data
import { KarnatakaPOI } from '../../types/database';

export const patnaData: KarnatakaPOI = {
  id: 'patna_bihar',
  name: 'Patna',
  category: 'place',
  coordinates: { lat: 25.5941, lng: 85.1376 },
  description: 'Capital city known for its rich history and cultural heritage.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Patna Sahib', description: 'Sacred Sikh temple with historical significance.', image_url: 'https://www.bihartourism.gov.in/patna-sahib.jpg', links: [{ title: 'Temple History', url: 'https://www.bihartourism.gov.in/temple-history' }] }] },
    food: { title: 'Food', content: [{ title: 'Bihar Cuisine', description: 'Traditional Bihar cuisine with local specialties.', image_url: 'https://www.bihartourism.gov.in/bihar-cuisine.jpg', links: [{ title: 'Traditional Dishes', url: 'https://www.bihartourism.gov.in/traditional-dishes' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Historical Culture', description: 'Rich historical culture and traditions.', image_url: 'https://www.bihartourism.gov.in/historical-culture.jpg', links: [{ title: 'Cultural Practices', url: 'https://www.bihartourism.gov.in/cultural-practices' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Local Festivals', description: 'Traditional festivals celebrating local culture.', image_url: 'https://www.bihartourism.gov.in/local-festivals.jpg', links: [{ title: 'Festival Calendar', url: 'https://www.bihartourism.gov.in/festival-calendar' }] }] },
    history: { title: 'History', content: [{ title: 'Historical Heritage', description: 'Rich historical heritage and cultural significance.', image_url: 'https://www.bihartourism.gov.in/historical-heritage.jpg', links: [{ title: 'Historical Significance', url: 'https://www.bihartourism.gov.in/historical-significance' }] }] }
  }
};

export const gayaData: KarnatakaPOI = {
  id: 'gaya_bihar',
  name: 'Gaya',
  category: 'place',
  coordinates: { lat: 24.7833, lng: 85.0000 },
  description: 'Sacred city known for the Mahabodhi Temple and Buddhist pilgrimage.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Mahabodhi Temple', description: 'UNESCO World Heritage Site, sacred Buddhist temple.', image_url: 'https://www.bihartourism.gov.in/mahabodhi-temple.jpg', links: [{ title: 'Temple History', url: 'https://www.bihartourism.gov.in/temple-history' }] }] },
    food: { title: 'Food', content: [{ title: 'Prasad', description: 'Sacred food offerings and traditional meals.', image_url: 'https://www.bihartourism.gov.in/prasad.jpg', links: [{ title: 'Traditional Meals', url: 'https://www.bihartourism.gov.in/traditional-meals' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Buddhist Traditions', description: 'Rich Buddhist traditions and religious practices.', image_url: 'https://www.bihartourism.gov.in/buddhist-traditions.jpg', links: [{ title: 'Religious Practices', url: 'https://www.bihartourism.gov.in/religious-practices' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Buddhist Festivals', description: 'Sacred Buddhist festivals and religious celebrations.', image_url: 'https://www.bihartourism.gov.in/buddhist-festivals.jpg', links: [{ title: 'Festival Schedule', url: 'https://www.bihartourism.gov.in/festival-schedule' }] }] },
    history: { title: 'History', content: [{ title: 'Buddhist Heritage', description: 'Rich Buddhist heritage and religious significance.', image_url: 'https://www.bihartourism.gov.in/buddhist-heritage.jpg', links: [{ title: 'Religious History', url: 'https://www.bihartourism.gov.in/religious-history' }] }] }
  }
};

export const muzaffarpurData: KarnatakaPOI = {
  id: 'muzaffarpur_bihar',
  name: 'Muzaffarpur',
  category: 'place',
  coordinates: { lat: 26.1167, lng: 85.3833 },
  description: 'Known for its litchi production and cultural heritage.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Local Monuments', description: 'Various monuments showcasing local architecture.', image_url: 'https://www.bihartourism.gov.in/local-monuments.jpg', links: [{ title: 'Monument Guide', url: 'https://www.bihartourism.gov.in/monument-guide' }] }] },
    food: { title: 'Food', content: [{ title: 'Litchi Culture', description: 'Famous for litchi production and fruit culture.', image_url: 'https://www.bihartourism.gov.in/litchi-culture.jpg', links: [{ title: 'Fruit Varieties', url: 'https://www.bihartourism.gov.in/fruit-varieties' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Agricultural Traditions', description: 'Rich agricultural traditions and farming practices.', image_url: 'https://www.bihartourism.gov.in/agricultural-traditions.jpg', links: [{ title: 'Farming Practices', url: 'https://www.bihartourism.gov.in/farming-practices' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Harvest Festivals', description: 'Festivals celebrating agricultural harvests.', image_url: 'https://www.bihartourism.gov.in/harvest-festivals.jpg', links: [{ title: 'Festival Calendar', url: 'https://www.bihartourism.gov.in/festival-calendar' }] }] },
    history: { title: 'History', content: [{ title: 'Agricultural Heritage', description: 'Rich agricultural heritage and development.', image_url: 'https://www.bihartourism.gov.in/agricultural-heritage.jpg', links: [{ title: 'Agricultural History', url: 'https://www.bihartourism.gov.in/agricultural-history' }] }] }
  }
};

export default [patnaData, gayaData, muzaffarpurData];
