// Andhra Pradesh Places Data
import { KarnatakaPOI } from '../../types/database';

export const visakhapatnamData: KarnatakaPOI = {
  id: 'visakhapatnam_andhra_pradesh',
  name: 'Visakhapatnam',
  category: 'place',
  coordinates: { lat: 17.6868, lng: 83.2185 },
  description: 'Port city known as the "City of Destiny", famous for its beaches and shipbuilding industry.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Araku Valley', description: 'Scenic hill station with coffee plantations.', image_url: 'https://example.com/araku-valley.jpg', links: [{ title: 'Valley Information', url: 'https://example.com/valley-info' }] }] },
    food: { title: 'Food', content: [{ title: 'Andhra Cuisine', description: 'Spicy Andhra cuisine with local specialties.', image_url: 'https://example.com/andhra-cuisine.jpg', links: [{ title: 'Traditional Dishes', url: 'https://example.com/traditional-dishes' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Port Culture', description: 'Rich port culture and maritime traditions.', image_url: 'https://example.com/port-culture.jpg', links: [{ title: 'Maritime Heritage', url: 'https://example.com/maritime-heritage' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Local Festivals', description: 'Traditional festivals celebrating local culture.', image_url: 'https://example.com/local-festivals.jpg', links: [{ title: 'Festival Calendar', url: 'https://example.com/festival-calendar' }] }] },
    history: { title: 'History', content: [{ title: 'Port Heritage', description: 'Rich heritage as a major port city.', image_url: 'https://example.com/port-heritage.jpg', links: [{ title: 'Historical Significance', url: 'https://example.com/historical-significance' }] }] }
  }
};

export const vijayawadaData: KarnatakaPOI = {
  id: 'vijayawada_andhra_pradesh',
  name: 'Vijayawada',
  category: 'place',
  coordinates: { lat: 16.5062, lng: 80.6480 },
  description: 'Business hub known as the "Commercial Capital of Andhra Pradesh".',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Kanaka Durga Temple', description: 'Famous temple dedicated to Goddess Durga.', image_url: 'https://example.com/kanaka-durga-temple.jpg', links: [{ title: 'Temple History', url: 'https://example.com/temple-history' }] }] },
    food: { title: 'Food', content: [{ title: 'Local Cuisine', description: 'Traditional Andhra cuisine with local specialties.', image_url: 'https://example.com/local-cuisine.jpg', links: [{ title: 'Traditional Dishes', url: 'https://example.com/traditional-dishes' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Commercial Culture', description: 'Rich commercial culture and business traditions.', image_url: 'https://example.com/commercial-culture.jpg', links: [{ title: 'Business Heritage', url: 'https://example.com/business-heritage' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Durga Puja', description: 'Grand celebration of Goddess Durga.', image_url: 'https://example.com/durga-puja.jpg', links: [{ title: 'Puja Celebrations', url: 'https://example.com/puja-celebrations' }] }] },
    history: { title: 'History', content: [{ title: 'Commercial Heritage', description: 'Rich heritage as a commercial center.', image_url: 'https://example.com/commercial-heritage.jpg', links: [{ title: 'Business History', url: 'https://example.com/business-history' }] }] }
  }
};

export const tirupatiData: KarnatakaPOI = {
  id: 'tirupati_andhra_pradesh',
  name: 'Tirupati',
  category: 'place',
  coordinates: { lat: 13.6288, lng: 79.4192 },
  description: 'Sacred city known for the famous Venkateswara Temple.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Venkateswara Temple', description: 'Famous temple dedicated to Lord Venkateswara.', image_url: 'https://example.com/venkateswara-temple.jpg', links: [{ title: 'Temple History', url: 'https://example.com/temple-history' }] }] },
    food: { title: 'Food', content: [{ title: 'Prasad', description: 'Sacred food offerings and traditional meals.', image_url: 'https://example.com/prasad.jpg', links: [{ title: 'Traditional Meals', url: 'https://example.com/traditional-meals' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Religious Traditions', description: 'Rich religious traditions and pilgrimage culture.', image_url: 'https://example.com/religious-traditions.jpg', links: [{ title: 'Religious Practices', url: 'https://example.com/religious-practices' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Religious Festivals', description: 'Sacred festivals and religious celebrations.', image_url: 'https://example.com/religious-festivals.jpg', links: [{ title: 'Festival Schedule', url: 'https://example.com/festival-schedule' }] }] },
    history: { title: 'History', content: [{ title: 'Religious Heritage', description: 'Rich religious heritage and mythological significance.', image_url: 'https://example.com/religious-heritage.jpg', links: [{ title: 'Mythological References', url: 'https://example.com/mythological-references' }] }] }
  }
};

export default [visakhapatnamData, vijayawadaData, tirupatiData];

