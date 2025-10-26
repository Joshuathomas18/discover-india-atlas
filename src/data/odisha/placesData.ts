// Odisha Places Data
import { KarnatakaPOI } from '../../types/database';

export const bhubaneswarData: KarnatakaPOI = {
  id: 'bhubaneswar_odisha',
  name: 'Bhubaneswar',
  category: 'place',
  coordinates: { lat: 20.2961, lng: 85.8245 },
  description: 'Capital city known as "Temple City of India" for its ancient temples.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Lingaraj Temple', description: 'Ancient temple dedicated to Lord Shiva.', image_url: 'https://example.com/lingaraj-temple.jpg', links: [{ title: 'Temple History', url: 'https://example.com/temple-history' }] }] },
    food: { title: 'Food', content: [{ title: 'Odisha Cuisine', description: 'Traditional Odisha cuisine with local specialties.', image_url: 'https://example.com/odisha-cuisine.jpg', links: [{ title: 'Traditional Dishes', url: 'https://example.com/traditional-dishes' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Temple Culture', description: 'Rich temple culture and religious traditions.', image_url: 'https://example.com/temple-culture.jpg', links: [{ title: 'Religious Practices', url: 'https://example.com/religious-practices' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Rath Yatra', description: 'Grand chariot festival of Lord Jagannath.', image_url: 'https://example.com/rath-yatra.jpg', links: [{ title: 'Festival Celebrations', url: 'https://example.com/festival-celebrations' }] }] },
    history: { title: 'History', content: [{ title: 'Temple Heritage', description: 'Rich heritage of ancient temples and architecture.', image_url: 'https://example.com/temple-heritage.jpg', links: [{ title: 'Architectural History', url: 'https://example.com/architectural-history' }] }] }
  }
};

export const puriData: KarnatakaPOI = {
  id: 'puri_odisha',
  name: 'Puri',
  category: 'place',
  coordinates: { lat: 19.8135, lng: 85.8312 },
  description: 'Sacred city known for the famous Jagannath Temple.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Jagannath Temple', description: 'Famous temple dedicated to Lord Jagannath.', image_url: 'https://example.com/jagannath-temple.jpg', links: [{ title: 'Temple History', url: 'https://example.com/temple-history' }] }] },
    food: { title: 'Food', content: [{ title: 'Prasad', description: 'Sacred food offerings and traditional meals.', image_url: 'https://example.com/prasad.jpg', links: [{ title: 'Traditional Meals', url: 'https://example.com/traditional-meals' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Pilgrimage Traditions', description: 'Rich pilgrimage traditions and religious practices.', image_url: 'https://example.com/pilgrimage-traditions.jpg', links: [{ title: 'Religious Practices', url: 'https://example.com/religious-practices' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Rath Yatra', description: 'Grand chariot festival celebrated annually.', image_url: 'https://example.com/rath-yatra.jpg', links: [{ title: 'Festival Schedule', url: 'https://example.com/festival-schedule' }] }] },
    history: { title: 'History', content: [{ title: 'Religious Heritage', description: 'Rich religious heritage and mythological significance.', image_url: 'https://example.com/religious-heritage.jpg', links: [{ title: 'Mythological References', url: 'https://example.com/mythological-references' }] }] }
  }
};

export const cuttackData: KarnatakaPOI = {
  id: 'cuttack_odisha',
  name: 'Cuttack',
  category: 'place',
  coordinates: { lat: 20.4625, lng: 85.8825 },
  description: 'Historic city known as the "Silver City" for its silver filigree work.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Barabati Fort', description: 'Historic fort with architectural significance.', image_url: 'https://example.com/barabati-fort.jpg', links: [{ title: 'Fort History', url: 'https://example.com/fort-history' }] }] },
    food: { title: 'Food', content: [{ title: 'Local Cuisine', description: 'Traditional Odisha cuisine with local specialties.', image_url: 'https://example.com/local-cuisine.jpg', links: [{ title: 'Traditional Dishes', url: 'https://example.com/traditional-dishes' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Silver Craft Traditions', description: 'Rich tradition of silver filigree work.', image_url: 'https://example.com/silver-craft-traditions.jpg', links: [{ title: 'Craft Workshops', url: 'https://example.com/craft-workshops' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Local Festivals', description: 'Traditional festivals celebrating local culture.', image_url: 'https://example.com/local-festivals.jpg', links: [{ title: 'Festival Calendar', url: 'https://example.com/festival-calendar' }] }] },
    history: { title: 'History', content: [{ title: 'Silver Heritage', description: 'Rich heritage of silver craftsmanship.', image_url: 'https://example.com/silver-heritage.jpg', links: [{ title: 'Craft History', url: 'https://example.com/craft-history' }] }] }
  }
};

export default [bhubaneswarData, puriData, cuttackData];

