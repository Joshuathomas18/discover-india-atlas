// Jharkhand Places Data
import { KarnatakaPOI } from '../../types/database';

export const ranchiData: KarnatakaPOI = {
  id: 'ranchi_jharkhand',
  name: 'Ranchi',
  category: 'place',
  coordinates: { lat: 23.3441, lng: 85.3096 },
  description: 'Capital city known as "City of Waterfalls" for its beautiful waterfalls.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Local Monuments', description: 'Various monuments showcasing local architecture.', image_url: 'https://example.com/local-monuments.jpg', links: [{ title: 'Monument Guide', url: 'https://example.com/monument-guide' }] }] },
    food: { title: 'Food', content: [{ title: 'Jharkhand Cuisine', description: 'Traditional Jharkhand cuisine with local specialties.', image_url: 'https://example.com/jharkhand-cuisine.jpg', links: [{ title: 'Traditional Dishes', url: 'https://example.com/traditional-dishes' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Waterfall Culture', description: 'Rich culture centered around waterfalls and natural beauty.', image_url: 'https://example.com/waterfall-culture.jpg', links: [{ title: 'Natural Heritage', url: 'https://example.com/natural-heritage' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Local Festivals', description: 'Traditional festivals celebrating local culture.', image_url: 'https://example.com/local-festivals.jpg', links: [{ title: 'Festival Calendar', url: 'https://example.com/festival-calendar' }] }] },
    history: { title: 'History', content: [{ title: 'Waterfall Heritage', description: 'Rich heritage of waterfalls and natural formations.', image_url: 'https://example.com/waterfall-heritage.jpg', links: [{ title: 'Natural History', url: 'https://example.com/natural-history' }] }] }
  }
};

export const jamshedpurData: KarnatakaPOI = {
  id: 'jamshedpur_jharkhand',
  name: 'Jamshedpur',
  category: 'place',
  coordinates: { lat: 22.8046, lng: 86.2029 },
  description: 'Known as "Steel City" for its Tata Steel plant and industrial development.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Tata Steel Plant', description: 'Historic steel plant showcasing industrial architecture.', image_url: 'https://example.com/tata-steel-plant.jpg', links: [{ title: 'Plant History', url: 'https://example.com/plant-history' }] }] },
    food: { title: 'Food', content: [{ title: 'Local Cuisine', description: 'Traditional Jharkhand cuisine with local specialties.', image_url: 'https://example.com/local-cuisine.jpg', links: [{ title: 'Traditional Dishes', url: 'https://example.com/traditional-dishes' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Steel Industry Culture', description: 'Rich culture centered around steel manufacturing.', image_url: 'https://example.com/steel-industry-culture.jpg', links: [{ title: 'Industrial Heritage', url: 'https://example.com/industrial-heritage' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Industrial Festivals', description: 'Festivals celebrating industrial achievements.', image_url: 'https://example.com/industrial-festivals.jpg', links: [{ title: 'Industrial Events', url: 'https://example.com/industrial-events' }] }] },
    history: { title: 'History', content: [{ title: 'Steel Heritage', description: 'Rich heritage of steel industry and manufacturing.', image_url: 'https://example.com/steel-heritage.jpg', links: [{ title: 'Manufacturing History', url: 'https://example.com/manufacturing-history' }] }] }
  }
};

export const dhanbadData: KarnatakaPOI = {
  id: 'dhanbad_jharkhand',
  name: 'Dhanbad',
  category: 'place',
  coordinates: { lat: 23.7957, lng: 86.4304 },
  description: 'Known as "Coal Capital of India" for its coal mines and mining industry.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Local Monuments', description: 'Various monuments showcasing local architecture.', image_url: 'https://example.com/local-monuments.jpg', links: [{ title: 'Monument Guide', url: 'https://example.com/monument-guide' }] }] },
    food: { title: 'Food', content: [{ title: 'Local Cuisine', description: 'Traditional Jharkhand cuisine with local specialties.', image_url: 'https://example.com/local-cuisine.jpg', links: [{ title: 'Traditional Dishes', url: 'https://example.com/traditional-dishes' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Mining Culture', description: 'Rich culture centered around coal mining.', image_url: 'https://example.com/mining-culture.jpg', links: [{ title: 'Mining Heritage', url: 'https://example.com/mining-heritage' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Mining Festivals', description: 'Festivals celebrating mining industry.', image_url: 'https://example.com/mining-festivals.jpg', links: [{ title: 'Mining Events', url: 'https://example.com/mining-events' }] }] },
    history: { title: 'History', content: [{ title: 'Mining Heritage', description: 'Rich heritage of coal mining and industrial development.', image_url: 'https://example.com/mining-heritage.jpg', links: [{ title: 'Mining History', url: 'https://example.com/mining-history' }] }] }
  }
};

export default [ranchiData, jamshedpurData, dhanbadData];

