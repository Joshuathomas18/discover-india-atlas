// Telangana Places Data
import { KarnatakaPOI } from '../../types/database';

export const hyderabadData: KarnatakaPOI = {
  id: 'hyderabad_telangana',
  name: 'Hyderabad',
  category: 'place',
  coordinates: { lat: 17.3850, lng: 78.4867 },
  description: 'Capital city known as "City of Pearls" and "Cyberabad" for its IT industry.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Charminar', description: 'Iconic monument and mosque built in 1591.', image_url: 'https://example.com/charminar.jpg', links: [{ title: 'Monument History', url: 'https://example.com/monument-history' }] }] },
    food: { title: 'Food', content: [{ title: 'Hyderabadi Biryani', description: 'Famous aromatic biryani with royal recipes.', image_url: 'https://example.com/hyderabadi-biryani.jpg', links: [{ title: 'Biryani Varieties', url: 'https://example.com/biryani-varieties' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Nizami Culture', description: 'Rich Nizami culture and royal heritage.', image_url: 'https://example.com/nizami-culture.jpg', links: [{ title: 'Royal Heritage', url: 'https://example.com/royal-heritage' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Bonalu Festival', description: 'Traditional festival celebrating local goddess.', image_url: 'https://example.com/bonalu-festival.jpg', links: [{ title: 'Festival Celebrations', url: 'https://example.com/festival-celebrations' }] }] },
    history: { title: 'History', content: [{ title: 'Nizam Heritage', description: 'Rich heritage of the Nizam dynasty.', image_url: 'https://example.com/nizam-heritage.jpg', links: [{ title: 'Dynasty History', url: 'https://example.com/dynasty-history' }] }] }
  }
};

export const warangalData: KarnatakaPOI = {
  id: 'warangal_telangana',
  name: 'Warangal',
  category: 'place',
  coordinates: { lat: 17.9689, lng: 79.5941 },
  description: 'Historic city known for its Kakatiya dynasty heritage and temples.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Warangal Fort', description: 'Historic fort built by the Kakatiya dynasty.', image_url: 'https://example.com/warangal-fort.jpg', links: [{ title: 'Fort History', url: 'https://example.com/fort-history' }] }] },
    food: { title: 'Food', content: [{ title: 'Local Cuisine', description: 'Traditional Telangana cuisine with local specialties.', image_url: 'https://example.com/local-cuisine.jpg', links: [{ title: 'Traditional Dishes', url: 'https://example.com/traditional-dishes' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Kakatiya Heritage', description: 'Rich heritage from the Kakatiya dynasty.', image_url: 'https://example.com/kakatiya-heritage.jpg', links: [{ title: 'Dynasty Heritage', url: 'https://example.com/dynasty-heritage' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Local Festivals', description: 'Traditional festivals celebrating local culture.', image_url: 'https://example.com/local-festivals.jpg', links: [{ title: 'Festival Calendar', url: 'https://example.com/festival-calendar' }] }] },
    history: { title: 'History', content: [{ title: 'Kakatiya Dynasty', description: 'Rich history of the Kakatiya dynasty.', image_url: 'https://example.com/kakatiya-dynasty.jpg', links: [{ title: 'Dynasty History', url: 'https://example.com/dynasty-history' }] }] }
  }
};

export const nizamabadData: KarnatakaPOI = {
  id: 'nizamabad_telangana',
  name: 'Nizamabad',
  category: 'place',
  coordinates: { lat: 18.6715, lng: 78.0938 },
  description: 'Historic city known for its agricultural produce and cultural heritage.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Local Monuments', description: 'Various monuments showcasing local architecture.', image_url: 'https://example.com/local-monuments.jpg', links: [{ title: 'Monument Guide', url: 'https://example.com/monument-guide' }] }] },
    food: { title: 'Food', content: [{ title: 'Local Cuisine', description: 'Traditional Telangana cuisine with local specialties.', image_url: 'https://example.com/local-cuisine.jpg', links: [{ title: 'Traditional Dishes', url: 'https://example.com/traditional-dishes' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Agricultural Traditions', description: 'Rich agricultural traditions and farming practices.', image_url: 'https://example.com/agricultural-traditions.jpg', links: [{ title: 'Farming Practices', url: 'https://example.com/farming-practices' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Harvest Festivals', description: 'Festivals celebrating agricultural harvests.', image_url: 'https://example.com/harvest-festivals.jpg', links: [{ title: 'Festival Calendar', url: 'https://example.com/festival-calendar' }] }] },
    history: { title: 'History', content: [{ title: 'Agricultural Heritage', description: 'Rich agricultural heritage and development.', image_url: 'https://example.com/agricultural-heritage.jpg', links: [{ title: 'Agricultural History', url: 'https://example.com/agricultural-history' }] }] }
  }
};

export default [hyderabadData, warangalData, nizamabadData];

