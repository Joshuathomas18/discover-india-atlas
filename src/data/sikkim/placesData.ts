// Sikkim Places Data
import { KarnatakaPOI } from '../../types/database';

export const gangtokData: KarnatakaPOI = {
  id: 'gangtok_sikkim',
  name: 'Gangtok',
  category: 'place',
  coordinates: { lat: 27.3314, lng: 88.6138 },
  description: 'Capital city known for its scenic beauty and Buddhist culture.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Rumtek Monastery', description: 'Famous Buddhist monastery with beautiful architecture.', image_url: 'https://www.sikkimtourism.gov.in/rumtek-monastery.jpg', links: [{ title: 'Monastery History', url: 'https://www.sikkimtourism.gov.in/monastery-history' }] }] },
    food: { title: 'Food', content: [{ title: 'Sikkim Cuisine', description: 'Traditional Sikkim cuisine with local specialties.', image_url: 'https://www.sikkimtourism.gov.in/sikkim-cuisine.jpg', links: [{ title: 'Traditional Dishes', url: 'https://www.sikkimtourism.gov.in/traditional-dishes' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Buddhist Culture', description: 'Rich Buddhist culture and traditions.', image_url: 'https://www.sikkimtourism.gov.in/buddhist-culture.jpg', links: [{ title: 'Cultural Practices', url: 'https://www.sikkimtourism.gov.in/cultural-practices' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Buddhist Festivals', description: 'Traditional Buddhist festivals and celebrations.', image_url: 'https://www.sikkimtourism.gov.in/buddhist-festivals.jpg', links: [{ title: 'Festival Calendar', url: 'https://www.sikkimtourism.gov.in/festival-calendar' }] }] },
    history: { title: 'History', content: [{ title: 'Buddhist Heritage', description: 'Rich Buddhist heritage and cultural significance.', image_url: 'https://www.sikkimtourism.gov.in/buddhist-heritage.jpg', links: [{ title: 'Religious History', url: 'https://www.sikkimtourism.gov.in/religious-history' }] }] }
  }
};

export const namchiData: KarnatakaPOI = {
  id: 'namchi_sikkim',
  name: 'Namchi',
  category: 'place',
  coordinates: { lat: 27.1667, lng: 88.3500 },
  description: 'Known for its scenic beauty and cultural heritage.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Local Monuments', description: 'Various monuments showcasing local architecture.', image_url: 'https://www.sikkimtourism.gov.in/local-monuments.jpg', links: [{ title: 'Monument Guide', url: 'https://www.sikkimtourism.gov.in/monument-guide' }] }] },
    food: { title: 'Food', content: [{ title: 'Local Cuisine', description: 'Traditional Sikkim cuisine with local specialties.', image_url: 'https://www.sikkimtourism.gov.in/local-cuisine.jpg', links: [{ title: 'Traditional Dishes', url: 'https://www.sikkimtourism.gov.in/traditional-dishes' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Cultural Heritage', description: 'Rich cultural heritage and traditions.', image_url: 'https://www.sikkimtourism.gov.in/cultural-heritage.jpg', links: [{ title: 'Cultural Practices', url: 'https://www.sikkimtourism.gov.in/cultural-practices' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Local Festivals', description: 'Traditional festivals celebrating local culture.', image_url: 'https://www.sikkimtourism.gov.in/local-festivals.jpg', links: [{ title: 'Festival Calendar', url: 'https://www.sikkimtourism.gov.in/festival-calendar' }] }] },
    history: { title: 'History', content: [{ title: 'Cultural Heritage', description: 'Rich cultural heritage and historical significance.', image_url: 'https://www.sikkimtourism.gov.in/cultural-heritage.jpg', links: [{ title: 'Historical Significance', url: 'https://www.sikkimtourism.gov.in/historical-significance' }] }] }
  }
};

export const pellingData: KarnatakaPOI = {
  id: 'pelling_sikkim',
  name: 'Pelling',
  category: 'place',
  coordinates: { lat: 27.3167, lng: 88.2333 },
  description: 'Known for its scenic beauty and mountain views.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Local Monuments', description: 'Various monuments showcasing local architecture.', image_url: 'https://www.sikkimtourism.gov.in/local-monuments.jpg', links: [{ title: 'Monument Guide', url: 'https://www.sikkimtourism.gov.in/monument-guide' }] }] },
    food: { title: 'Food', content: [{ title: 'Local Cuisine', description: 'Traditional Sikkim cuisine with local specialties.', image_url: 'https://www.sikkimtourism.gov.in/local-cuisine.jpg', links: [{ title: 'Traditional Dishes', url: 'https://www.sikkimtourism.gov.in/traditional-dishes' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Mountain Culture', description: 'Rich culture centered around mountain life.', image_url: 'https://www.sikkimtourism.gov.in/mountain-culture.jpg', links: [{ title: 'Mountain Heritage', url: 'https://www.sikkimtourism.gov.in/mountain-heritage' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Mountain Festivals', description: 'Festivals celebrating mountain culture.', image_url: 'https://www.sikkimtourism.gov.in/mountain-festivals.jpg', links: [{ title: 'Mountain Events', url: 'https://www.sikkimtourism.gov.in/mountain-events' }] }] },
    history: { title: 'History', content: [{ title: 'Mountain Heritage', description: 'Rich heritage of mountain life and culture.', image_url: 'https://www.sikkimtourism.gov.in/mountain-heritage.jpg', links: [{ title: 'Mountain History', url: 'https://www.sikkimtourism.gov.in/mountain-history' }] }] }
  }
};

export default [gangtokData, namchiData, pellingData];
