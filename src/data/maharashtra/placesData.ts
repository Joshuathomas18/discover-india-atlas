// Maharashtra Places Data
// Major cities with cultural information

import { KarnatakaPOI } from '../../types/database';

// Mumbai - Financial Capital
export const mumbaiData: KarnatakaPOI = {
  id: 'mumbai_maharashtra',
  name: 'Mumbai',
  category: 'place',
  coordinates: { lat: 19.0760, lng: 72.8777 },
  description: 'The financial capital of India, known for Bollywood, Gateway of India, and vibrant street life.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: {
      title: 'Monuments',
      content: [
        {
          title: 'Gateway of India',
          description: 'Iconic arch monument built to commemorate the visit of King George V and Queen Mary.',
          image_url: 'https://www.maharashtratourism.gov.in/gateway-of-india.jpg',
          links: [
            { title: 'Historical Significance', url: 'https://www.maharashtratourism.gov.in/historical-significance' },
            { title: 'Architecture Details', url: 'https://www.maharashtratourism.gov.in/architecture-details' }
          ]
        },
        {
          title: 'Chhatrapati Shivaji Terminus',
          description: 'UNESCO World Heritage Site, a magnificent example of Victorian Gothic architecture.',
          image_url: 'https://www.maharashtratourism.gov.in/cst-station.jpg',
          links: [
            { title: 'UNESCO Information', url: 'https://www.maharashtratourism.gov.in/unesco-info' },
            { title: 'Architectural Tour', url: 'https://www.maharashtratourism.gov.in/architectural-tour' }
          ]
        },
        {
          title: 'Elephanta Caves',
          description: 'Ancient rock-cut caves dedicated to Lord Shiva, accessible by ferry from Mumbai.',
          image_url: 'https://www.maharashtratourism.gov.in/elephanta-caves.jpg',
          links: [
            { title: 'Cave Complex Map', url: 'https://www.maharashtratourism.gov.in/cave-map' },
            { title: 'Ferry Schedule', url: 'https://www.maharashtratourism.gov.in/ferry-schedule' }
          ]
        }
      ]
    },
    food: {
      title: 'Food',
      content: [
        {
          title: 'Vada Pav',
          description: 'Mumbai\'s signature street food - spicy potato fritter in a bun.',
          image_url: 'https://www.maharashtratourism.gov.in/vada-pav.jpg',
          links: [
            { title: 'Best Vada Pav Stalls', url: 'https://www.maharashtratourism.gov.in/vada-pav-stalls' },
            { title: 'Recipe Guide', url: 'https://www.maharashtratourism.gov.in/vada-pav-recipe' }
          ]
        },
        {
          title: 'Pav Bhaji',
          description: 'Spicy vegetable curry served with buttered bread rolls.',
          image_url: 'https://www.maharashtratourism.gov.in/pav-bhaji.jpg',
          links: [
            { title: 'Famous Pav Bhaji Joints', url: 'https://www.maharashtratourism.gov.in/pav-bhaji-joints' },
            { title: 'Cooking Classes', url: 'https://www.maharashtratourism.gov.in/cooking-classes' }
          ]
        },
        {
          title: 'Mumbai Street Food',
          description: 'Diverse street food culture including bhel puri, pani puri, and chaat.',
          image_url: 'https://www.maharashtratourism.gov.in/street-food.jpg',
          links: [
            { title: 'Street Food Tours', url: 'https://www.maharashtratourism.gov.in/street-food-tours' },
            { title: 'Food Markets', url: 'https://www.maharashtratourism.gov.in/food-markets' }
          ]
        }
      ]
    },
    customs: {
      title: 'Customs',
      content: [
        {
          title: 'Bollywood Culture',
          description: 'Mumbai is the heart of Indian cinema, home to Bollywood film industry.',
          image_url: 'https://www.maharashtratourism.gov.in/bollywood-culture.jpg',
          links: [
            { title: 'Film City Tours', url: 'https://www.maharashtratourism.gov.in/film-city-tours' },
            { title: 'Bollywood Studios', url: 'https://www.maharashtratourism.gov.in/bollywood-studios' }
          ]
        },
        {
          title: 'Ganesh Chaturthi',
          description: 'Grand festival celebrating Lord Ganesha with elaborate processions.',
          image_url: 'https://www.maharashtratourism.gov.in/ganesh-chaturthi.jpg',
          links: [
            { title: 'Festival Schedule', url: 'https://www.maharashtratourism.gov.in/festival-schedule' },
            { title: 'Procession Routes', url: 'https://www.maharashtratourism.gov.in/procession-routes' }
          ]
        },
        {
          title: 'Marathi Culture',
          description: 'Rich Marathi traditions, language, and cultural practices.',
          image_url: 'https://www.maharashtratourism.gov.in/marathi-culture.jpg',
          links: [
            { title: 'Cultural Centers', url: 'https://www.maharashtratourism.gov.in/cultural-centers' },
            { title: 'Traditional Arts', url: 'https://www.maharashtratourism.gov.in/traditional-arts' }
          ]
        }
      ]
    },
    festivals: {
      title: 'Festivals',
      content: [
        {
          title: 'Ganesh Chaturthi',
          description: 'Most important festival in Mumbai, celebrated with great enthusiasm.',
          image_url: 'https://www.maharashtratourism.gov.in/ganesh-chaturthi-festival.jpg',
          links: [
            { title: 'Festival Celebrations', url: 'https://www.maharashtratourism.gov.in/festival-celebrations' },
            { title: 'Immersion Ceremony', url: 'https://www.maharashtratourism.gov.in/immersion-ceremony' }
          ]
        },
        {
          title: 'Diwali',
          description: 'Festival of lights celebrated with fireworks and traditional sweets.',
          image_url: 'https://www.maharashtratourism.gov.in/diwali-mumbai.jpg',
          links: [
            { title: 'Diwali Markets', url: 'https://www.maharashtratourism.gov.in/diwali-markets' },
            { title: 'Fireworks Display', url: 'https://www.maharashtratourism.gov.in/fireworks-display' }
          ]
        },
        {
          title: 'Mumbai Film Festival',
          description: 'Annual international film festival showcasing global cinema.',
          image_url: 'https://www.maharashtratourism.gov.in/mumbai-film-festival.jpg',
          links: [
            { title: 'Festival Program', url: 'https://www.maharashtratourism.gov.in/festival-program' },
            { title: 'Film Screenings', url: 'https://www.maharashtratourism.gov.in/film-screenings' }
          ]
        }
      ]
    },
    history: {
      title: 'History',
      content: [
        {
          title: 'British Colonial Period',
          description: 'Mumbai was the capital of British India and a major trading port.',
          image_url: 'https://www.maharashtratourism.gov.in/british-colonial.jpg',
          links: [
            { title: 'Colonial Architecture', url: 'https://www.maharashtratourism.gov.in/colonial-architecture' },
            { title: 'Historical Walking Tours', url: 'https://www.maharashtratourism.gov.in/historical-tours' }
          ]
        },
        {
          title: 'Freedom Struggle',
          description: 'Mumbai played a crucial role in India\'s independence movement.',
          image_url: 'https://www.maharashtratourism.gov.in/freedom-struggle.jpg',
          links: [
            { title: 'Freedom Fighters', url: 'https://www.maharashtratourism.gov.in/freedom-fighters' },
            { title: 'Historical Sites', url: 'https://www.maharashtratourism.gov.in/historical-sites' }
          ]
        },
        {
          title: 'Economic Development',
          description: 'Transformation from fishing village to financial capital of India.',
          image_url: 'https://www.maharashtratourism.gov.in/economic-development.jpg',
          links: [
            { title: 'Economic History', url: 'https://www.maharashtratourism.gov.in/economic-history' },
            { title: 'Financial District', url: 'https://www.maharashtratourism.gov.in/financial-district' }
          ]
        }
      ]
    }
  }
};

// Pune - Cultural Capital
export const puneData: KarnatakaPOI = {
  id: 'pune_maharashtra',
  name: 'Pune',
  category: 'place',
  coordinates: { lat: 18.5204, lng: 73.8567 },
  description: 'Cultural capital of Maharashtra, known for its educational institutions and historical significance.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: {
      title: 'Monuments',
      content: [
        {
          title: 'Shaniwar Wada',
          description: 'Historic fortification built by the Peshwas, symbol of Maratha power.',
          image_url: 'https://www.maharashtratourism.gov.in/shaniwar-wada.jpg',
          links: [
            { title: 'Fort History', url: 'https://www.maharashtratourism.gov.in/fort-history' },
            { title: 'Light & Sound Show', url: 'https://www.maharashtratourism.gov.in/light-sound-show' }
          ]
        },
        {
          title: 'Aga Khan Palace',
          description: 'Historic palace where Mahatma Gandhi was imprisoned during Quit India Movement.',
          image_url: 'https://www.maharashtratourism.gov.in/aga-khan-palace.jpg',
          links: [
            { title: 'Gandhi Memorial', url: 'https://www.maharashtratourism.gov.in/gandhi-memorial' },
            { title: 'Palace Museum', url: 'https://www.maharashtratourism.gov.in/palace-museum' }
          ]
        }
      ]
    },
    food: {
      title: 'Food',
      content: [
        {
          title: 'Misal Pav',
          description: 'Spicy curry made from sprouted lentils, served with bread.',
          image_url: 'https://www.maharashtratourism.gov.in/misal-pav.jpg',
          links: [
            { title: 'Best Misal Joints', url: 'https://www.maharashtratourism.gov.in/misal-joints' },
            { title: 'Misal Recipe', url: 'https://www.maharashtratourism.gov.in/misal-recipe' }
          ]
        },
        {
          title: 'Pune Street Food',
          description: 'Diverse street food including bhel puri, pani puri, and traditional snacks.',
          image_url: 'https://www.maharashtratourism.gov.in/pune-street-food.jpg',
          links: [
            { title: 'Street Food Tours', url: 'https://www.maharashtratourism.gov.in/street-food-tours' },
            { title: 'Local Delicacies', url: 'https://www.maharashtratourism.gov.in/local-delicacies' }
          ]
        }
      ]
    },
    customs: {
      title: 'Customs',
      content: [
        {
          title: 'Educational Hub',
          description: 'Pune is known as the "Oxford of the East" for its educational institutions.',
          image_url: 'https://www.maharashtratourism.gov.in/educational-hub.jpg',
          links: [
            { title: 'Universities', url: 'https://www.maharashtratourism.gov.in/universities' },
            { title: 'Research Centers', url: 'https://www.maharashtratourism.gov.in/research-centers' }
          ]
        }
      ]
    },
    festivals: {
      title: 'Festivals',
      content: [
        {
          title: 'Ganesh Chaturthi',
          description: 'Celebrated with great fervor, especially at Dagdusheth Halwai Ganpati Temple.',
          image_url: 'https://www.maharashtratourism.gov.in/ganesh-chaturthi-pune.jpg',
          links: [
            { title: 'Temple Celebrations', url: 'https://www.maharashtratourism.gov.in/temple-celebrations' },
            { title: 'Festival Processions', url: 'https://www.maharashtratourism.gov.in/festival-processions' }
          ]
        }
      ]
    },
    history: {
      title: 'History',
      content: [
        {
          title: 'Peshwa Rule',
          description: 'Pune was the seat of the Peshwa dynasty and Maratha Empire.',
          image_url: 'https://www.maharashtratourism.gov.in/peshwa-rule.jpg',
          links: [
            { title: 'Peshwa History', url: 'https://www.maharashtratourism.gov.in/peshwa-history' },
            { title: 'Maratha Empire', url: 'https://www.maharashtratourism.gov.in/maratha-empire' }
          ]
        }
      ]
    }
  }
};

// Nagpur - Orange City
export const nagpurData: KarnatakaPOI = {
  id: 'nagpur_maharashtra',
  name: 'Nagpur',
  category: 'place',
  coordinates: { lat: 21.1458, lng: 79.0882 },
  description: 'Known as the "Orange City" for its orange cultivation and as the geographical center of India.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: {
      title: 'Monuments',
      content: [
        {
          title: 'Deekshabhoomi',
          description: 'Sacred monument where Dr. B.R. Ambedkar converted to Buddhism.',
          image_url: 'https://www.maharashtratourism.gov.in/deekshabhoomi.jpg',
          links: [
            { title: 'Historical Significance', url: 'https://www.maharashtratourism.gov.in/historical-significance' },
            { title: 'Buddhist Pilgrimage', url: 'https://www.maharashtratourism.gov.in/buddhist-pilgrimage' }
          ]
        },
        {
          title: 'Sitabuldi Fort',
          description: 'Historic fort built by the Bhonsle dynasty, now a military area.',
          image_url: 'https://www.maharashtratourism.gov.in/sitabuldi-fort.jpg',
          links: [
            { title: 'Fort History', url: 'https://www.maharashtratourism.gov.in/fort-history' },
            { title: 'Military Heritage', url: 'https://www.maharashtratourism.gov.in/military-heritage' }
          ]
        }
      ]
    },
    food: {
      title: 'Food',
      content: [
        {
          title: 'Saoji Cuisine',
          description: 'Spicy cuisine unique to Nagpur, known for its bold flavors.',
          image_url: 'https://www.maharashtratourism.gov.in/saoji-cuisine.jpg',
          links: [
            { title: 'Saoji Restaurants', url: 'https://www.maharashtratourism.gov.in/saoji-restaurants' },
            { title: 'Saoji Recipe', url: 'https://www.maharashtratourism.gov.in/saoji-recipe' }
          ]
        },
        {
          title: 'Orange Products',
          description: 'Nagpur oranges and various orange-based products.',
          image_url: 'https://www.maharashtratourism.gov.in/orange-products.jpg',
          links: [
            { title: 'Orange Orchards', url: 'https://www.maharashtratourism.gov.in/orange-orchards' },
            { title: 'Orange Festival', url: 'https://www.maharashtratourism.gov.in/orange-festival' }
          ]
        }
      ]
    },
    customs: {
      title: 'Customs',
      content: [
        {
          title: 'Buddhist Culture',
          description: 'Strong Buddhist influence due to Dr. Ambedkar\'s conversion.',
          image_url: 'https://www.maharashtratourism.gov.in/buddhist-culture.jpg',
          links: [
            { title: 'Buddhist Centers', url: 'https://www.maharashtratourism.gov.in/buddhist-centers' },
            { title: 'Religious Practices', url: 'https://www.maharashtratourism.gov.in/religious-practices' }
          ]
        }
      ]
    },
    festivals: {
      title: 'Festivals',
      content: [
        {
          title: 'Orange Festival',
          description: 'Annual festival celebrating Nagpur\'s famous orange cultivation.',
          image_url: 'https://www.maharashtratourism.gov.in/orange-festival.jpg',
          links: [
            { title: 'Festival Events', url: 'https://www.maharashtratourism.gov.in/festival-events' },
            { title: 'Orange Competitions', url: 'https://www.maharashtratourism.gov.in/orange-competitions' }
          ]
        }
      ]
    },
    history: {
      title: 'History',
      content: [
        {
          title: 'Bhonsle Dynasty',
          description: 'Nagpur was the capital of the Bhonsle dynasty.',
          image_url: 'https://www.maharashtratourism.gov.in/bhonsle-dynasty.jpg',
          links: [
            { title: 'Dynasty History', url: 'https://www.maharashtratourism.gov.in/dynasty-history' },
            { title: 'Historical Sites', url: 'https://www.maharashtratourism.gov.in/historical-sites' }
          ]
        }
      ]
    }
  }
};

export default [mumbaiData, puneData, nagpurData];
