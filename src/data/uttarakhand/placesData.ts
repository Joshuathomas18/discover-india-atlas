// Uttarakhand Places Data
import { KarnatakaPOI } from '../../types/database';

export const dehradunData: KarnatakaPOI = {
  id: 'dehradun_uttarakhand',
  name: 'Dehradun',
  category: 'place',
  coordinates: { lat: 30.3165, lng: 78.0322 },
  description: 'Capital city of Uttarakhand, known for its educational institutions and scenic beauty.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Forest Research Institute', description: 'Historic institute with colonial architecture.', image_url: 'https://www.uttarakhandtourism.gov.in/fri.jpg', links: [{ title: 'Institute History', url: 'https://www.uttarakhandtourism.gov.in/institute-history' }] }] },
    food: { title: 'Food', content: [{ title: 'Local Cuisine', description: 'Traditional Garhwali cuisine with local specialties.', image_url: 'https://www.uttarakhandtourism.gov.in/local-cuisine.jpg', links: [{ title: 'Traditional Dishes', url: 'https://www.uttarakhandtourism.gov.in/traditional-dishes' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Educational Culture', description: 'Rich educational culture with numerous institutions.', image_url: 'https://www.uttarakhandtourism.gov.in/educational-culture.jpg', links: [{ title: 'Educational Heritage', url: 'https://www.uttarakhandtourism.gov.in/educational-heritage' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Local Festivals', description: 'Traditional festivals celebrating local culture.', image_url: 'https://www.uttarakhandtourism.gov.in/local-festivals.jpg', links: [{ title: 'Festival Calendar', url: 'https://www.uttarakhandtourism.gov.in/festival-calendar' }] }] },
    history: { title: 'History', content: [{ title: 'Colonial Heritage', description: 'Rich colonial heritage and educational development.', image_url: 'https://www.uttarakhandtourism.gov.in/colonial-heritage.jpg', links: [{ title: 'Historical Significance', url: 'https://www.uttarakhandtourism.gov.in/historical-significance' }] }] }
  }
};

export const haridwarData: KarnatakaPOI = {
  id: 'haridwar_uttarakhand',
  name: 'Haridwar',
  category: 'place',
  coordinates: { lat: 29.9457, lng: 78.1642 },
  description: 'Sacred city on the banks of the Ganges, known for the Kumbh Mela.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Har Ki Pauri', description: 'Sacred ghat where the Ganges enters the plains.', image_url: 'https://www.uttarakhandtourism.gov.in/har-ki-pauri.jpg', links: [{ title: 'Religious Significance', url: 'https://www.uttarakhandtourism.gov.in/religious-significance' }] }] },
    food: { title: 'Food', content: [{ title: 'Prasad', description: 'Sacred food offerings and traditional sweets.', image_url: 'https://www.uttarakhandtourism.gov.in/prasad.jpg', links: [{ title: 'Traditional Sweets', url: 'https://www.uttarakhandtourism.gov.in/traditional-sweets' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Religious Traditions', description: 'Rich religious traditions and pilgrimage culture.', image_url: 'https://www.uttarakhandtourism.gov.in/religious-traditions.jpg', links: [{ title: 'Religious Practices', url: 'https://www.uttarakhandtourism.gov.in/religious-practices' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Kumbh Mela', description: 'Largest religious gathering in the world.', image_url: 'https://www.uttarakhandtourism.gov.in/kumbh-mela.jpg', links: [{ title: 'Kumbh Schedule', url: 'https://www.uttarakhandtourism.gov.in/kumbh-schedule' }] }] },
    history: { title: 'History', content: [{ title: 'Ancient Heritage', description: 'Rich ancient heritage with mythological significance.', image_url: 'https://www.uttarakhandtourism.gov.in/ancient-heritage.jpg', links: [{ title: 'Mythological References', url: 'https://www.uttarakhandtourism.gov.in/mythological-references' }] }] }
  }
};

export const rishikeshData: KarnatakaPOI = {
  id: 'rishikesh_uttarakhand',
  name: 'Rishikesh',
  category: 'place',
  coordinates: { lat: 30.0869, lng: 78.2676 },
  description: 'Yoga capital of the world, known for spiritual retreats and adventure sports.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Laxman Jhula', description: 'Famous suspension bridge over the Ganges.', image_url: 'https://www.uttarakhandtourism.gov.in/laxman-jhula.jpg', links: [{ title: 'Bridge History', url: 'https://www.uttarakhandtourism.gov.in/bridge-history' }] }] },
    food: { title: 'Food', content: [{ title: 'Vegetarian Cuisine', description: 'Pure vegetarian cuisine with healthy options.', image_url: 'https://www.uttarakhandtourism.gov.in/vegetarian-cuisine.jpg', links: [{ title: 'Healthy Food', url: 'https://www.uttarakhandtourism.gov.in/healthy-food' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Yoga Culture', description: 'Rich yoga culture and spiritual practices.', image_url: 'https://www.uttarakhandtourism.gov.in/yoga-culture.jpg', links: [{ title: 'Yoga Centers', url: 'https://www.uttarakhandtourism.gov.in/yoga-centers' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'International Yoga Day', description: 'Celebration of yoga and spiritual practices.', image_url: 'https://www.uttarakhandtourism.gov.in/yoga-day.jpg', links: [{ title: 'Yoga Events', url: 'https://www.uttarakhandtourism.gov.in/yoga-events' }] }] },
    history: { title: 'History', content: [{ title: 'Spiritual Heritage', description: 'Rich spiritual heritage and yoga traditions.', image_url: 'https://www.uttarakhandtourism.gov.in/spiritual-heritage.jpg', links: [{ title: 'Spiritual Significance', url: 'https://www.uttarakhandtourism.gov.in/spiritual-significance' }] }] }
  }
};

export default [dehradunData, haridwarData, rishikeshData];
