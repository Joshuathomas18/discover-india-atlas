// Gujarat Places Data
import { KarnatakaPOI } from '../../types/database';

export const ahmedabadData: KarnatakaPOI = {
  id: 'ahmedabad_gujarat',
  name: 'Ahmedabad',
  category: 'place',
  coordinates: { lat: 23.0225, lng: 72.5714 },
  description: 'Largest city in Gujarat, known for its textile industry and UNESCO World Heritage sites.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Sabarmati Ashram', description: 'Historic ashram where Mahatma Gandhi lived.', image_url: 'https://www.gujarattourism.com/sabarmati-ashram.jpg', links: [{ title: 'Ashram History', url: 'https://www.gujarattourism.com/ashram-history' }] }] },
    food: { title: 'Food', content: [{ title: 'Gujarati Thali', description: 'Traditional Gujarati thali with various dishes.', image_url: 'https://www.gujarattourism.com/gujarati-thali.jpg', links: [{ title: 'Thali Varieties', url: 'https://www.gujarattourism.com/thali-varieties' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Textile Traditions', description: 'Rich tradition of textile manufacturing and handicrafts.', image_url: 'https://www.gujarattourism.com/textile-traditions.jpg', links: [{ title: 'Textile Heritage', url: 'https://www.gujarattourism.com/textile-heritage' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Navratri', description: 'Grand celebration of Navratri with Garba dance.', image_url: 'https://www.gujarattourism.com/navratri.jpg', links: [{ title: 'Garba Events', url: 'https://www.gujarattourism.com/garba-events' }] }] },
    history: { title: 'History', content: [{ title: 'Independence Movement', description: 'Important role in India\'s independence movement.', image_url: 'https://www.gujarattourism.com/independence-movement.jpg', links: [{ title: 'Historical Significance', url: 'https://www.gujarattourism.com/historical-significance' }] }] }
  }
};

export const vadodaraData: KarnatakaPOI = {
  id: 'vadodara_gujarat',
  name: 'Vadodara',
  category: 'place',
  coordinates: { lat: 22.3072, lng: 73.1812 },
  description: 'Cultural capital of Gujarat, known for its palaces and educational institutions.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Laxmi Vilas Palace', description: 'Magnificent palace of the Gaekwad dynasty.', image_url: 'https://www.gujarattourism.com/laxmi-vilas-palace.jpg', links: [{ title: 'Palace History', url: 'https://www.gujarattourism.com/palace-history' }] }] },
    food: { title: 'Food', content: [{ title: 'Local Cuisine', description: 'Traditional Gujarati cuisine with local specialties.', image_url: 'https://www.gujarattourism.com/local-cuisine.jpg', links: [{ title: 'Traditional Dishes', url: 'https://www.gujarattourism.com/traditional-dishes' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Royal Heritage', description: 'Rich royal heritage from the Gaekwad dynasty.', image_url: 'https://www.gujarattourism.com/royal-heritage.jpg', links: [{ title: 'Royal History', url: 'https://www.gujarattourism.com/royal-history' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Local Festivals', description: 'Traditional festivals celebrating local culture.', image_url: 'https://www.gujarattourism.com/local-festivals.jpg', links: [{ title: 'Festival Calendar', url: 'https://www.gujarattourism.com/festival-calendar' }] }] },
    history: { title: 'History', content: [{ title: 'Gaekwad Dynasty', description: 'Rich history of the Gaekwad dynasty.', image_url: 'https://www.gujarattourism.com/gaekwad-dynasty.jpg', links: [{ title: 'Dynasty History', url: 'https://www.gujarattourism.com/dynasty-history' }] }] }
  }
};

export const suratData: KarnatakaPOI = {
  id: 'surat_gujarat',
  name: 'Surat',
  category: 'place',
  coordinates: { lat: 21.1702, lng: 72.8311 },
  description: 'Diamond city of India, known for its diamond and textile industries.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Surat Castle', description: 'Historic castle built by the Mughals.', image_url: 'https://www.gujarattourism.com/surat-castle.jpg', links: [{ title: 'Castle History', url: 'https://www.gujarattourism.com/castle-history' }] }] },
    food: { title: 'Food', content: [{ title: 'Surati Cuisine', description: 'Unique Surati cuisine with local specialties.', image_url: 'https://www.gujarattourism.com/surati-cuisine.jpg', links: [{ title: 'Local Delicacies', url: 'https://www.gujarattourism.com/local-delicacies' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Diamond Industry', description: 'Rich tradition of diamond cutting and polishing.', image_url: 'https://www.gujarattourism.com/diamond-industry.jpg', links: [{ title: 'Industry Heritage', url: 'https://www.gujarattourism.com/industry-heritage' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Local Festivals', description: 'Traditional festivals celebrating local culture.', image_url: 'https://www.gujarattourism.com/local-festivals.jpg', links: [{ title: 'Festival Calendar', url: 'https://www.gujarattourism.com/festival-calendar' }] }] },
    history: { title: 'History', content: [{ title: 'Trading Heritage', description: 'Rich trading heritage and commercial history.', image_url: 'https://www.gujarattourism.com/trading-heritage.jpg', links: [{ title: 'Commercial History', url: 'https://www.gujarattourism.com/commercial-history' }] }] }
  }
};

export default [ahmedabadData, vadodaraData, suratData];
