// Chhattisgarh Places Data
import { KarnatakaPOI } from '../../types/database';

export const raipurData: KarnatakaPOI = {
  id: 'raipur_chhattisgarh',
  name: 'Raipur',
  category: 'place',
  coordinates: { lat: 21.2514, lng: 81.6296 },
  description: 'Capital city known for its steel industry and cultural heritage.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Local Monuments', description: 'Various monuments showcasing local architecture.', image_url: 'https://example.com/local-monuments.jpg', links: [{ title: 'Monument Guide', url: 'https://example.com/monument-guide' }] }] },
    food: { title: 'Food', content: [{ title: 'Chhattisgarh Cuisine', description: 'Traditional Chhattisgarh cuisine with local specialties.', image_url: 'https://example.com/chhattisgarh-cuisine.jpg', links: [{ title: 'Traditional Dishes', url: 'https://example.com/traditional-dishes' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Steel Industry Culture', description: 'Rich culture centered around steel manufacturing.', image_url: 'https://example.com/steel-industry-culture.jpg', links: [{ title: 'Industrial Heritage', url: 'https://example.com/industrial-heritage' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Local Festivals', description: 'Traditional festivals celebrating local culture.', image_url: 'https://example.com/local-festivals.jpg', links: [{ title: 'Festival Calendar', url: 'https://example.com/festival-calendar' }] }] },
    history: { title: 'History', content: [{ title: 'Steel Heritage', description: 'Rich heritage of steel industry and manufacturing.', image_url: 'https://example.com/steel-heritage.jpg', links: [{ title: 'Manufacturing History', url: 'https://example.com/manufacturing-history' }] }] }
  }
};

export const bilaspurData: KarnatakaPOI = {
  id: 'bilaspur_chhattisgarh',
  name: 'Bilaspur',
  category: 'place',
  coordinates: { lat: 22.0833, lng: 82.1500 },
  description: 'Known for its rice production and cultural heritage.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Local Monuments', description: 'Various monuments showcasing local architecture.', image_url: 'https://example.com/local-monuments.jpg', links: [{ title: 'Monument Guide', url: 'https://example.com/monument-guide' }] }] },
    food: { title: 'Food', content: [{ title: 'Local Cuisine', description: 'Traditional Chhattisgarh cuisine with local specialties.', image_url: 'https://example.com/local-cuisine.jpg', links: [{ title: 'Traditional Dishes', url: 'https://example.com/traditional-dishes' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Rice Culture', description: 'Rich culture centered around rice production.', image_url: 'https://example.com/rice-culture.jpg', links: [{ title: 'Agricultural Heritage', url: 'https://example.com/agricultural-heritage' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Harvest Festivals', description: 'Festivals celebrating rice harvest.', image_url: 'https://example.com/harvest-festivals.jpg', links: [{ title: 'Festival Calendar', url: 'https://example.com/festival-calendar' }] }] },
    history: { title: 'History', content: [{ title: 'Rice Heritage', description: 'Rich heritage of rice production and agriculture.', image_url: 'https://example.com/rice-heritage.jpg', links: [{ title: 'Agricultural History', url: 'https://example.com/agricultural-history' }] }] }
  }
};

export const durgData: KarnatakaPOI = {
  id: 'durg_chhattisgarh',
  name: 'Durg',
  category: 'place',
  coordinates: { lat: 21.1833, lng: 81.2833 },
  description: 'Known for its steel industry and cultural heritage.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Local Monuments', description: 'Various monuments showcasing local architecture.', image_url: 'https://example.com/local-monuments.jpg', links: [{ title: 'Monument Guide', url: 'https://example.com/monument-guide' }] }] },
    food: { title: 'Food', content: [{ title: 'Local Cuisine', description: 'Traditional Chhattisgarh cuisine with local specialties.', image_url: 'https://example.com/local-cuisine.jpg', links: [{ title: 'Traditional Dishes', url: 'https://example.com/traditional-dishes' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Steel Industry Culture', description: 'Rich culture centered around steel manufacturing.', image_url: 'https://example.com/steel-industry-culture.jpg', links: [{ title: 'Industrial Heritage', url: 'https://example.com/industrial-heritage' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Local Festivals', description: 'Traditional festivals celebrating local culture.', image_url: 'https://example.com/local-festivals.jpg', links: [{ title: 'Festival Calendar', url: 'https://example.com/festival-calendar' }] }] },
    history: { title: 'History', content: [{ title: 'Steel Heritage', description: 'Rich heritage of steel industry and manufacturing.', image_url: 'https://example.com/steel-heritage.jpg', links: [{ title: 'Manufacturing History', url: 'https://example.com/manufacturing-history' }] }] }
  }
};

export default [raipurData, bilaspurData, durgData];

