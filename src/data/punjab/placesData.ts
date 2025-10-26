// Punjab Places Data
import { KarnatakaPOI } from '../../types/database';

export const chandigarhData: KarnatakaPOI = {
  id: 'chandigarh_punjab',
  name: 'Chandigarh',
  category: 'place',
  coordinates: { lat: 30.7333, lng: 76.7794 },
  description: 'Union Territory and capital of Punjab, known for its planned architecture.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Rock Garden', description: 'Unique garden made from industrial waste and urban debris.', image_url: 'https://example.com/rock-garden.jpg', links: [{ title: 'Garden History', url: 'https://example.com/garden-history' }] }] },
    food: { title: 'Food', content: [{ title: 'Punjabi Cuisine', description: 'Rich Punjabi cuisine with butter chicken and naan.', image_url: 'https://example.com/punjabi-cuisine.jpg', links: [{ title: 'Traditional Dishes', url: 'https://example.com/traditional-dishes' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Modern Culture', description: 'Modern planned city culture with traditional influences.', image_url: 'https://example.com/modern-culture.jpg', links: [{ title: 'City Planning', url: 'https://example.com/city-planning' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Local Festivals', description: 'Traditional festivals celebrating local culture.', image_url: 'https://example.com/local-festivals.jpg', links: [{ title: 'Festival Calendar', url: 'https://example.com/festival-calendar' }] }] },
    history: { title: 'History', content: [{ title: 'Planned City', description: 'History of planned city development by Le Corbusier.', image_url: 'https://example.com/planned-city.jpg', links: [{ title: 'Development History', url: 'https://example.com/development-history' }] }] }
  }
};

export const ludhianaData: KarnatakaPOI = {
  id: 'ludhiana_punjab',
  name: 'Ludhiana',
  category: 'place',
  coordinates: { lat: 30.9000, lng: 75.8500 },
  description: 'Industrial city known as the "Manchester of India" for its textile industry.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Local Monuments', description: 'Various monuments showcasing local architecture.', image_url: 'https://example.com/local-monuments.jpg', links: [{ title: 'Monument Guide', url: 'https://example.com/monument-guide' }] }] },
    food: { title: 'Food', content: [{ title: 'Local Cuisine', description: 'Traditional Punjabi cuisine with local specialties.', image_url: 'https://example.com/local-cuisine.jpg', links: [{ title: 'Traditional Dishes', url: 'https://example.com/traditional-dishes' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Industrial Culture', description: 'Rich industrial culture centered around textile manufacturing.', image_url: 'https://example.com/industrial-culture.jpg', links: [{ title: 'Industrial Heritage', url: 'https://example.com/industrial-heritage' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Local Festivals', description: 'Traditional festivals celebrating local culture.', image_url: 'https://example.com/local-festivals.jpg', links: [{ title: 'Festival Calendar', url: 'https://example.com/festival-calendar' }] }] },
    history: { title: 'History', content: [{ title: 'Industrial Heritage', description: 'Rich heritage of textile industry and manufacturing.', image_url: 'https://example.com/industrial-heritage.jpg', links: [{ title: 'Manufacturing History', url: 'https://example.com/manufacturing-history' }] }] }
  }
};

export const amritsarData: KarnatakaPOI = {
  id: 'amritsar_punjab',
  name: 'Amritsar',
  category: 'place',
  coordinates: { lat: 31.6330, lng: 74.8656 },
  description: 'Sacred city known for the Golden Temple and Sikh heritage.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Golden Temple', description: 'Sacred Sikh temple covered in gold.', image_url: 'https://example.com/golden-temple.jpg', links: [{ title: 'Temple History', url: 'https://example.com/temple-history' }] }] },
    food: { title: 'Food', content: [{ title: 'Langar', description: 'Community kitchen serving free meals to all visitors.', image_url: 'https://example.com/langar.jpg', links: [{ title: 'Langar Tradition', url: 'https://example.com/langar-tradition' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Sikh Traditions', description: 'Rich Sikh traditions and religious practices.', image_url: 'https://example.com/sikh-traditions.jpg', links: [{ title: 'Religious Practices', url: 'https://example.com/religious-practices' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Sikh Festivals', description: 'Sacred Sikh festivals and religious celebrations.', image_url: 'https://example.com/sikh-festivals.jpg', links: [{ title: 'Festival Schedule', url: 'https://example.com/festival-schedule' }] }] },
    history: { title: 'History', content: [{ title: 'Sikh Heritage', description: 'Rich Sikh heritage and religious significance.', image_url: 'https://example.com/sikh-heritage.jpg', links: [{ title: 'Religious History', url: 'https://example.com/religious-history' }] }] }
  }
};

export default [chandigarhData, ludhianaData, amritsarData];

