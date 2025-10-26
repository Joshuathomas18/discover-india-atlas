// Madhya Pradesh Places Data
import { KarnatakaPOI } from '../../types/database';

export const bhopalData: KarnatakaPOI = {
  id: 'bhopal_madhya_pradesh',
  name: 'Bhopal',
  category: 'place',
  coordinates: { lat: 23.2599, lng: 77.4126 },
  description: 'Capital city known as "City of Lakes" for its beautiful lakes.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Taj-ul-Masajid', description: 'Largest mosque in India with beautiful architecture.', image_url: 'https://example.com/taj-ul-masajid.jpg', links: [{ title: 'Mosque History', url: 'https://example.com/mosque-history' }] }] },
    food: { title: 'Food', content: [{ title: 'MP Cuisine', description: 'Traditional Madhya Pradesh cuisine with local specialties.', image_url: 'https://example.com/mp-cuisine.jpg', links: [{ title: 'Traditional Dishes', url: 'https://example.com/traditional-dishes' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Lake Culture', description: 'Rich culture centered around lakes and water bodies.', image_url: 'https://example.com/lake-culture.jpg', links: [{ title: 'Cultural Practices', url: 'https://example.com/cultural-practices' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Local Festivals', description: 'Traditional festivals celebrating local culture.', image_url: 'https://example.com/local-festivals.jpg', links: [{ title: 'Festival Calendar', url: 'https://example.com/festival-calendar' }] }] },
    history: { title: 'History', content: [{ title: 'Lake Heritage', description: 'Rich heritage of lakes and water management.', image_url: 'https://example.com/lake-heritage.jpg', links: [{ title: 'Water Heritage', url: 'https://example.com/water-heritage' }] }] }
  }
};

export const indoreData: KarnatakaPOI = {
  id: 'indore_madhya_pradesh',
  name: 'Indore',
  category: 'place',
  coordinates: { lat: 22.7196, lng: 75.8577 },
  description: 'Commercial capital known for its food culture and business hub.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Rajwada Palace', description: 'Historic palace showcasing Maratha architecture.', image_url: 'https://example.com/rajwada-palace.jpg', links: [{ title: 'Palace History', url: 'https://example.com/palace-history' }] }] },
    food: { title: 'Food', content: [{ title: 'Indore Food Culture', description: 'Famous for street food and culinary delights.', image_url: 'https://example.com/indore-food.jpg', links: [{ title: 'Food Guide', url: 'https://example.com/food-guide' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Business Culture', description: 'Rich business culture and commercial traditions.', image_url: 'https://example.com/business-culture.jpg', links: [{ title: 'Business Heritage', url: 'https://example.com/business-heritage' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Food Festivals', description: 'Festivals celebrating food culture.', image_url: 'https://example.com/food-festivals.jpg', links: [{ title: 'Food Events', url: 'https://example.com/food-events' }] }] },
    history: { title: 'History', content: [{ title: 'Commercial Heritage', description: 'Rich heritage of commerce and trade.', image_url: 'https://example.com/commercial-heritage.jpg', links: [{ title: 'Trade History', url: 'https://example.com/trade-history' }] }] }
  }
};

export const gwaliorData: KarnatakaPOI = {
  id: 'gwalior_madhya_pradesh',
  name: 'Gwalior',
  category: 'place',
  coordinates: { lat: 26.2183, lng: 78.1828 },
  description: 'Historic city known for its magnificent fort and royal heritage.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Gwalior Fort', description: 'Magnificent fort with rich historical significance.', image_url: 'https://example.com/gwalior-fort.jpg', links: [{ title: 'Fort History', url: 'https://example.com/fort-history' }] }] },
    food: { title: 'Food', content: [{ title: 'Local Cuisine', description: 'Traditional MP cuisine with local specialties.', image_url: 'https://example.com/local-cuisine.jpg', links: [{ title: 'Traditional Dishes', url: 'https://example.com/traditional-dishes' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Royal Heritage', description: 'Rich royal heritage and cultural traditions.', image_url: 'https://example.com/royal-heritage.jpg', links: [{ title: 'Royal Traditions', url: 'https://example.com/royal-traditions' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Royal Festivals', description: 'Traditional festivals celebrating royal culture.', image_url: 'https://example.com/royal-festivals.jpg', links: [{ title: 'Royal Events', url: 'https://example.com/royal-events' }] }] },
    history: { title: 'History', content: [{ title: 'Royal Heritage', description: 'Rich heritage of royal dynasties and kingdoms.', image_url: 'https://example.com/royal-heritage.jpg', links: [{ title: 'Dynasty History', url: 'https://example.com/dynasty-history' }] }] }
  }
};

export default [bhopalData, indoreData, gwaliorData];

