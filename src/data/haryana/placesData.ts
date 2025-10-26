// Haryana Places Data
import { KarnatakaPOI } from '../../types/database';

export const gurgaonData: KarnatakaPOI = {
  id: 'gurgaon_haryana',
  name: 'Gurgaon',
  category: 'place',
  coordinates: { lat: 28.4595, lng: 77.0266 },
  description: 'IT hub known as "Cyber City" for its modern development and corporate offices.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Modern Architecture', description: 'Modern corporate buildings and IT parks.', image_url: 'https://example.com/modern-architecture.jpg', links: [{ title: 'Architecture Guide', url: 'https://example.com/architecture-guide' }] }] },
    food: { title: 'Food', content: [{ title: 'Local Cuisine', description: 'Traditional Haryanvi cuisine with local specialties.', image_url: 'https://example.com/local-cuisine.jpg', links: [{ title: 'Traditional Dishes', url: 'https://example.com/traditional-dishes' }] }] },
    customs: { title: 'Customs', content: [{ title: 'IT Culture', description: 'Modern IT culture with corporate lifestyle.', image_url: 'https://example.com/it-culture.jpg', links: [{ title: 'Corporate Culture', url: 'https://example.com/corporate-culture' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Local Festivals', description: 'Traditional festivals celebrating local culture.', image_url: 'https://example.com/local-festivals.jpg', links: [{ title: 'Festival Calendar', url: 'https://example.com/festival-calendar' }] }] },
    history: { title: 'History', content: [{ title: 'IT Development', description: 'History of IT development and modern growth.', image_url: 'https://example.com/it-development.jpg', links: [{ title: 'Development History', url: 'https://example.com/development-history' }] }] }
  }
};

export const faridabadData: KarnatakaPOI = {
  id: 'faridabad_haryana',
  name: 'Faridabad',
  category: 'place',
  coordinates: { lat: 28.4089, lng: 77.3178 },
  description: 'Industrial city known for its manufacturing and engineering industries.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Local Monuments', description: 'Various monuments showcasing local architecture.', image_url: 'https://example.com/local-monuments.jpg', links: [{ title: 'Monument Guide', url: 'https://example.com/monument-guide' }] }] },
    food: { title: 'Food', content: [{ title: 'Local Cuisine', description: 'Traditional Haryanvi cuisine with local specialties.', image_url: 'https://example.com/local-cuisine.jpg', links: [{ title: 'Traditional Dishes', url: 'https://example.com/traditional-dishes' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Industrial Culture', description: 'Rich industrial culture and manufacturing traditions.', image_url: 'https://example.com/industrial-culture.jpg', links: [{ title: 'Industrial Heritage', url: 'https://example.com/industrial-heritage' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Local Festivals', description: 'Traditional festivals celebrating local culture.', image_url: 'https://example.com/local-festivals.jpg', links: [{ title: 'Festival Calendar', url: 'https://example.com/festival-calendar' }] }] },
    history: { title: 'History', content: [{ title: 'Industrial Heritage', description: 'Rich heritage of manufacturing and industrial development.', image_url: 'https://example.com/industrial-heritage.jpg', links: [{ title: 'Manufacturing History', url: 'https://example.com/manufacturing-history' }] }] }
  }
};

export const panipatData: KarnatakaPOI = {
  id: 'panipat_haryana',
  name: 'Panipat',
  category: 'place',
  coordinates: { lat: 29.3909, lng: 76.9635 },
  description: 'Historic city known for its three famous battles and textile industry.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Battle Monuments', description: 'Monuments commemorating the three famous battles.', image_url: 'https://example.com/battle-monuments.jpg', links: [{ title: 'Battle History', url: 'https://example.com/battle-history' }] }] },
    food: { title: 'Food', content: [{ title: 'Local Cuisine', description: 'Traditional Haryanvi cuisine with local specialties.', image_url: 'https://example.com/local-cuisine.jpg', links: [{ title: 'Traditional Dishes', url: 'https://example.com/traditional-dishes' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Textile Traditions', description: 'Rich tradition of textile manufacturing.', image_url: 'https://example.com/textile-traditions.jpg', links: [{ title: 'Textile Heritage', url: 'https://example.com/textile-heritage' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Local Festivals', description: 'Traditional festivals celebrating local culture.', image_url: 'https://example.com/local-festivals.jpg', links: [{ title: 'Festival Calendar', url: 'https://example.com/festival-calendar' }] }] },
    history: { title: 'History', content: [{ title: 'Battle Heritage', description: 'Rich heritage of historic battles and textile industry.', image_url: 'https://example.com/battle-heritage.jpg', links: [{ title: 'Historical Significance', url: 'https://example.com/historical-significance' }] }] }
  }
};

export default [gurgaonData, faridabadData, panipatData];

