// West Bengal Places Data
import { KarnatakaPOI } from '../../types/database';

export const kolkataData: KarnatakaPOI = {
  id: 'kolkata_west_bengal',
  name: 'Kolkata',
  category: 'place',
  coordinates: { lat: 22.5726, lng: 88.3639 },
  description: 'Cultural capital of India, known for its rich heritage, literature, and arts.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Victoria Memorial', description: 'Magnificent marble building dedicated to Queen Victoria.', image_url: 'https://www.wbtourism.gov.in/victoria-memorial.jpg', links: [{ title: 'Memorial History', url: 'https://www.wbtourism.gov.in/memorial-history' }] }] },
    food: { title: 'Food', content: [{ title: 'Bengali Cuisine', description: 'Rich Bengali cuisine with fish, rice, and sweets.', image_url: 'https://www.wbtourism.gov.in/bengali-cuisine.jpg', links: [{ title: 'Traditional Dishes', url: 'https://www.wbtourism.gov.in/traditional-dishes' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Cultural Heritage', description: 'Rich cultural heritage in literature, arts, and music.', image_url: 'https://www.wbtourism.gov.in/cultural-heritage.jpg', links: [{ title: 'Cultural Centers', url: 'https://www.wbtourism.gov.in/cultural-centers' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Durga Puja', description: 'Grand celebration of Goddess Durga.', image_url: 'https://www.wbtourism.gov.in/durga-puja.jpg', links: [{ title: 'Puja Celebrations', url: 'https://www.wbtourism.gov.in/puja-celebrations' }] }] },
    history: { title: 'History', content: [{ title: 'Colonial Heritage', description: 'Rich colonial heritage as the capital of British India.', image_url: 'https://www.wbtourism.gov.in/colonial-heritage.jpg', links: [{ title: 'Historical Significance', url: 'https://www.wbtourism.gov.in/historical-significance' }] }] }
  }
};

export const darjeelingData: KarnatakaPOI = {
  id: 'darjeeling_west_bengal',
  name: 'Darjeeling',
  category: 'place',
  coordinates: { lat: 27.0360, lng: 88.2627 },
  description: 'Queen of Hills, famous for its tea gardens and scenic beauty.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Darjeeling Himalayan Railway', description: 'UNESCO World Heritage toy train.', image_url: 'https://www.wbtourism.gov.in/toy-train.jpg', links: [{ title: 'Railway History', url: 'https://www.wbtourism.gov.in/railway-history' }] }] },
    food: { title: 'Food', content: [{ title: 'Tea Culture', description: 'Famous for tea gardens and tea tasting.', image_url: 'https://www.wbtourism.gov.in/tea-culture.jpg', links: [{ title: 'Tea Gardens', url: 'https://www.wbtourism.gov.in/tea-gardens' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Hill Station Culture', description: 'Relaxed hill station culture and lifestyle.', image_url: 'https://www.wbtourism.gov.in/hill-station-culture.jpg', links: [{ title: 'Lifestyle', url: 'https://www.wbtourism.gov.in/lifestyle' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Local Festivals', description: 'Traditional festivals celebrating local culture.', image_url: 'https://www.wbtourism.gov.in/local-festivals.jpg', links: [{ title: 'Festival Calendar', url: 'https://www.wbtourism.gov.in/festival-calendar' }] }] },
    history: { title: 'History', content: [{ title: 'Tea Heritage', description: 'Rich heritage of tea cultivation and industry.', image_url: 'https://www.wbtourism.gov.in/tea-heritage.jpg', links: [{ title: 'Tea History', url: 'https://www.wbtourism.gov.in/tea-history' }] }] }
  }
};

export const siliguriData: KarnatakaPOI = {
  id: 'siliguri_west_bengal',
  name: 'Siliguri',
  category: 'place',
  coordinates: { lat: 26.7271, lng: 88.3953 },
  description: 'Gateway to Northeast India, known for its strategic location.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: { title: 'Monuments', content: [{ title: 'Local Temples', description: 'Various temples showcasing local religious architecture.', image_url: 'https://www.wbtourism.gov.in/local-temples.jpg', links: [{ title: 'Temple Guide', url: 'https://www.wbtourism.gov.in/temple-guide' }] }] },
    food: { title: 'Food', content: [{ title: 'Local Cuisine', description: 'Traditional Bengali cuisine with local specialties.', image_url: 'https://www.wbtourism.gov.in/local-cuisine.jpg', links: [{ title: 'Traditional Dishes', url: 'https://www.wbtourism.gov.in/traditional-dishes' }] }] },
    customs: { title: 'Customs', content: [{ title: 'Gateway Culture', description: 'Cultural mix due to its strategic location.', image_url: 'https://www.wbtourism.gov.in/gateway-culture.jpg', links: [{ title: 'Cultural Diversity', url: 'https://www.wbtourism.gov.in/cultural-diversity' }] }] },
    festivals: { title: 'Festivals', content: [{ title: 'Local Festivals', description: 'Traditional festivals celebrating local culture.', image_url: 'https://www.wbtourism.gov.in/local-festivals.jpg', links: [{ title: 'Festival Calendar', url: 'https://www.wbtourism.gov.in/festival-calendar' }] }] },
    history: { title: 'History', content: [{ title: 'Strategic Importance', description: 'Strategic importance as gateway to Northeast.', image_url: 'https://www.wbtourism.gov.in/strategic-importance.jpg', links: [{ title: 'Historical Significance', url: 'https://www.wbtourism.gov.in/historical-significance' }] }] }
  }
};

export default [kolkataData, darjeelingData, siliguriData];
