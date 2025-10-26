// Assam Places Data
import { KarnatakaPOI } from '../../types/database';

export const guwahatiData: KarnatakaPOI = {
  id: 'guwahati_assam',
  name: 'Guwahati',
  category: 'place',
  coordinates: { lat: 26.1445, lng: 91.7362 },
  description: 'Largest city in Assam, known as the "Gateway to Northeast India".',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Kamakhya Temple', description: 'Famous temple dedicated to Goddess Kamakhya.', image_url: 'https://example.com/kamakhya-temple.jpg', links: [{ title: 'Temple History', url: 'https://example.com/temple-history' }] }] },
    food: { title: 'Food', content: [{ title: 'Assamese Cuisine', description: 'Traditional Assamese cuisine with local specialties.', image_url: 'https://example.com/assamese-cuisine.jpg', links: [{ title: 'Traditional Dishes', url: 'https://example.com/traditional-dishes' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Gateway Culture', description: 'Cultural mix due to its strategic location.', image_url: 'https://example.com/gateway-culture.jpg', links: [{ title: 'Cultural Diversity', url: 'https://example.com/cultural-diversity' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Bihu Festival', description: 'Traditional festival celebrating Assamese culture.', image_url: 'https://example.com/bihu-festival.jpg', links: [{ title: 'Festival Celebrations', url: 'https://example.com/festival-celebrations' }] }] },
    history: { title: 'History', content: [{ title: 'Gateway Heritage', description: 'Rich heritage as gateway to Northeast India.', image_url: 'https://example.com/gateway-heritage.jpg', links: [{ title: 'Historical Significance', url: 'https://example.com/historical-significance' }] }] }
  }
};

export const dibrugarhData: KarnatakaPOI = {
  id: 'dibrugarh_assam',
  name: 'Dibrugarh',
  category: 'place',
  coordinates: { lat: 27.4833, lng: 94.9000 },
  description: 'Known as the "Tea City of India" for its tea plantations.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Tea Gardens', description: 'Historic tea gardens with colonial heritage.', image_url: 'https://example.com/tea-gardens.jpg', links: [{ title: 'Garden History', url: 'https://example.com/garden-history' }] }] },
    food: { title: 'Food', content: [{ title: 'Tea Culture', description: 'Famous for tea production and tea tasting.', image_url: 'https://example.com/tea-culture.jpg', links: [{ title: 'Tea Varieties', url: 'https://example.com/tea-varieties' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Tea Plantation Culture', description: 'Rich culture centered around tea cultivation.', image_url: 'https://example.com/tea-plantation-culture.jpg', links: [{ title: 'Plantation Heritage', url: 'https://example.com/plantation-heritage' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Tea Festivals', description: 'Festivals celebrating tea harvest and culture.', image_url: 'https://example.com/tea-festivals.jpg', links: [{ title: 'Festival Events', url: 'https://example.com/festival-events' }] }] },
    history: { title: 'History', content: [{ title: 'Tea Heritage', description: 'Rich heritage of tea cultivation and industry.', image_url: 'https://example.com/tea-heritage.jpg', links: [{ title: 'Tea History', url: 'https://example.com/tea-history' }] }] }
  }
};

export const jorhatData: KarnatakaPOI = {
  id: 'jorhat_assam',
  name: 'Jorhat',
  category: 'place',
  coordinates: { lat: 26.7500, lng: 94.2167 },
  description: 'Known as the "Cultural Capital of Assam" for its rich heritage.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Local Monuments', description: 'Various monuments showcasing local architecture.', image_url: 'https://example.com/local-monuments.jpg', links: [{ title: 'Monument Guide', url: 'https://example.com/monument-guide' }] }] },
    food: { title: 'Food', content: [{ title: 'Local Cuisine', description: 'Traditional Assamese cuisine with local specialties.', image_url: 'https://example.com/local-cuisine.jpg', links: [{ title: 'Traditional Dishes', url: 'https://example.com/traditional-dishes' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Cultural Heritage', description: 'Rich cultural heritage and traditions.', image_url: 'https://example.com/cultural-heritage.jpg', links: [{ title: 'Cultural Practices', url: 'https://example.com/cultural-practices' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Local Festivals', description: 'Traditional festivals celebrating local culture.', image_url: 'https://example.com/local-festivals.jpg', links: [{ title: 'Festival Calendar', url: 'https://example.com/festival-calendar' }] }] },
    history: { title: 'History', content: [{ title: 'Cultural Heritage', description: 'Rich cultural heritage and historical significance.', image_url: 'https://example.com/cultural-heritage.jpg', links: [{ title: 'Historical Significance', url: 'https://example.com/historical-significance' }] }] }
  }
};

export default [guwahatiData, dibrugarhData, jorhatData];

