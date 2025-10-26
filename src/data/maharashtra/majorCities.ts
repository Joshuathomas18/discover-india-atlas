// Maharashtra Major Cities Data
// Additional major cities with comprehensive cultural information

import { KarnatakaPOI } from '../../types/database';

// Nashik - Wine Capital
export const nashikData: KarnatakaPOI = {
  id: 'nashik_maharashtra',
  name: 'Nashik',
  category: 'place',
  coordinates: { lat: 19.9975, lng: 73.7898 },
  description: 'Sacred city known for Kumbh Mela and emerging wine capital of India.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: {
      title: 'Monuments',
      content: [
        {
          title: 'Trimbakeshwar Temple',
          description: 'One of the 12 Jyotirlingas, sacred Shiva temple with religious significance.',
          image_url: 'https://www.maharashtratourism.gov.in/trimbakeshwar-temple.jpg',
          links: [
            { title: 'Temple History', url: 'https://www.maharashtratourism.gov.in/temple-history' },
            { title: 'Religious Significance', url: 'https://www.maharashtratourism.gov.in/religious-significance' }
          ]
        },
        {
          title: 'Pandavleni Caves',
          description: 'Ancient Buddhist caves dating back to 1st century BCE.',
          image_url: 'https://www.maharashtratourism.gov.in/pandavleni-caves.jpg',
          links: [
            { title: 'Cave Complex', url: 'https://www.maharashtratourism.gov.in/cave-complex' },
            { title: 'Buddhist Heritage', url: 'https://www.maharashtratourism.gov.in/buddhist-heritage' }
          ]
        }
      ]
    },
    food: {
      title: 'Food',
      content: [
        {
          title: 'Nashik Wine',
          description: 'Famous for wine production and vineyards.',
          image_url: 'https://www.maharashtratourism.gov.in/nashik-wine.jpg',
          links: [
            { title: 'Wine Tours', url: 'https://www.maharashtratourism.gov.in/wine-tours' },
            { title: 'Vineyard Visits', url: 'https://www.maharashtratourism.gov.in/vineyard-visits' }
          ]
        },
        {
          title: 'Local Cuisine',
          description: 'Traditional Maharashtrian cuisine with local specialties.',
          image_url: 'https://www.maharashtratourism.gov.in/local-cuisine.jpg',
          links: [
            { title: 'Traditional Recipes', url: 'https://www.maharashtratourism.gov.in/traditional-recipes' },
            { title: 'Local Restaurants', url: 'https://www.maharashtratourism.gov.in/local-restaurants' }
          ]
        }
      ]
    },
    customs: {
      title: 'Customs',
      content: [
        {
          title: 'Religious Traditions',
          description: 'Rich religious traditions and pilgrimage culture.',
          image_url: 'https://www.maharashtratourism.gov.in/religious-traditions.jpg',
          links: [
            { title: 'Pilgrimage Sites', url: 'https://www.maharashtratourism.gov.in/pilgrimage-sites' },
            { title: 'Religious Practices', url: 'https://www.maharashtratourism.gov.in/religious-practices' }
          ]
        }
      ]
    },
    festivals: {
      title: 'Festivals',
      content: [
        {
          title: 'Kumbh Mela',
          description: 'Sacred festival held every 12 years, attracting millions of pilgrims.',
          image_url: 'https://www.maharashtratourism.gov.in/kumbh-mela.jpg',
          links: [
            { title: 'Kumbh Schedule', url: 'https://www.maharashtratourism.gov.in/kumbh-schedule' },
            { title: 'Pilgrimage Guide', url: 'https://www.maharashtratourism.gov.in/pilgrimage-guide' }
          ]
        }
      ]
    },
    history: {
      title: 'History',
      content: [
        {
          title: 'Ancient Heritage',
          description: 'Rich ancient heritage with references in Hindu mythology.',
          image_url: 'https://www.maharashtratourism.gov.in/ancient-heritage.jpg',
          links: [
            { title: 'Mythological References', url: 'https://www.maharashtratourism.gov.in/mythological-references' },
            { title: 'Historical Sites', url: 'https://www.maharashtratourism.gov.in/historical-sites' }
          ]
        }
      ]
    }
  }
};

// Aurangabad - Gateway to Ajanta & Ellora
export const aurangabadData: KarnatakaPOI = {
  id: 'aurangabad_maharashtra',
  name: 'Aurangabad',
  category: 'place',
  coordinates: { lat: 19.8762, lng: 75.3433 },
  description: 'Historic city known as the gateway to UNESCO World Heritage Sites of Ajanta and Ellora caves.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: {
      title: 'Monuments',
      content: [
        {
          title: 'Bibi Ka Maqbara',
          description: 'Tomb of Aurangzeb\'s wife, often called the "Taj of the Deccan".',
          image_url: 'https://www.maharashtratourism.gov.in/bibi-ka-maqbara.jpg',
          links: [
            { title: 'Architecture Details', url: 'https://www.maharashtratourism.gov.in/architecture-details' },
            { title: 'Historical Significance', url: 'https://www.maharashtratourism.gov.in/historical-significance' }
          ]
        },
        {
          title: 'Ajanta Caves',
          description: 'UNESCO World Heritage Site with ancient Buddhist cave paintings.',
          image_url: 'https://www.maharashtratourism.gov.in/ajanta-caves.jpg',
          links: [
            { title: 'Cave Paintings', url: 'https://www.maharashtratourism.gov.in/cave-paintings' },
            { title: 'UNESCO Information', url: 'https://www.maharashtratourism.gov.in/unesco-info' }
          ]
        },
        {
          title: 'Ellora Caves',
          description: 'UNESCO World Heritage Site with rock-cut temples of three religions.',
          image_url: 'https://www.maharashtratourism.gov.in/ellora-caves.jpg',
          links: [
            { title: 'Cave Complex', url: 'https://www.maharashtratourism.gov.in/cave-complex' },
            { title: 'Religious Significance', url: 'https://www.maharashtratourism.gov.in/religious-significance' }
          ]
        }
      ]
    },
    food: {
      title: 'Food',
      content: [
        {
          title: 'Aurangabad Cuisine',
          description: 'Unique blend of Mughlai and Marathi cuisine.',
          image_url: 'https://www.maharashtratourism.gov.in/aurangabad-cuisine.jpg',
          links: [
            { title: 'Local Specialties', url: 'https://www.maharashtratourism.gov.in/local-specialties' },
            { title: 'Restaurant Guide', url: 'https://www.maharashtratourism.gov.in/restaurant-guide' }
          ]
        }
      ]
    },
    customs: {
      title: 'Customs',
      content: [
        {
          title: 'Cultural Heritage',
          description: 'Rich cultural heritage influenced by various dynasties.',
          image_url: 'https://www.maharashtratourism.gov.in/cultural-heritage.jpg',
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
          title: 'Cultural Festivals',
          description: 'Various cultural festivals celebrating local traditions.',
          image_url: 'https://www.maharashtratourism.gov.in/cultural-festivals.jpg',
          links: [
            { title: 'Festival Calendar', url: 'https://www.maharashtratourism.gov.in/festival-calendar' },
            { title: 'Cultural Events', url: 'https://www.maharashtratourism.gov.in/cultural-events' }
          ]
        }
      ]
    },
    history: {
      title: 'History',
      content: [
        {
          title: 'Mughal Period',
          description: 'Founded by Aurangzeb, served as capital of the Mughal Empire in Deccan.',
          image_url: 'https://www.maharashtratourism.gov.in/mughal-period.jpg',
          links: [
            { title: 'Mughal History', url: 'https://www.maharashtratourism.gov.in/mughal-history' },
            { title: 'Historical Monuments', url: 'https://www.maharashtratourism.gov.in/historical-monuments' }
          ]
        }
      ]
    }
  }
};

// Solapur - Textile City
export const solapurData: KarnatakaPOI = {
  id: 'solapur_maharashtra',
  name: 'Solapur',
  category: 'place',
  coordinates: { lat: 17.6599, lng: 75.9064 },
  description: 'Industrial city known for its textile industry and handloom products.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: {
      title: 'Monuments',
      content: [
        {
          title: 'Siddheshwar Temple',
          description: 'Ancient temple dedicated to Lord Shiva, known for its architectural beauty.',
          image_url: 'https://www.maharashtratourism.gov.in/siddheshwar-temple.jpg',
          links: [
            { title: 'Temple Architecture', url: 'https://www.maharashtratourism.gov.in/temple-architecture' },
            { title: 'Religious Significance', url: 'https://www.maharashtratourism.gov.in/religious-significance' }
          ]
        }
      ]
    },
    food: {
      title: 'Food',
      content: [
        {
          title: 'Solapur Cuisine',
          description: 'Local cuisine with traditional Maharashtrian flavors.',
          image_url: 'https://www.maharashtratourism.gov.in/solapur-cuisine.jpg',
          links: [
            { title: 'Local Dishes', url: 'https://www.maharashtratourism.gov.in/local-dishes' },
            { title: 'Traditional Recipes', url: 'https://www.maharashtratourism.gov.in/traditional-recipes' }
          ]
        }
      ]
    },
    customs: {
      title: 'Customs',
      content: [
        {
          title: 'Textile Traditions',
          description: 'Rich tradition of handloom weaving and textile production.',
          image_url: 'https://www.maharashtratourism.gov.in/textile-traditions.jpg',
          links: [
            { title: 'Handloom Tours', url: 'https://www.maharashtratourism.gov.in/handloom-tours' },
            { title: 'Weaving Techniques', url: 'https://www.maharashtratourism.gov.in/weaving-techniques' }
          ]
        }
      ]
    },
    festivals: {
      title: 'Festivals',
      content: [
        {
          title: 'Local Festivals',
          description: 'Traditional festivals celebrating local culture and traditions.',
          image_url: 'https://www.maharashtratourism.gov.in/local-festivals.jpg',
          links: [
            { title: 'Festival Schedule', url: 'https://www.maharashtratourism.gov.in/festival-schedule' },
            { title: 'Cultural Celebrations', url: 'https://www.maharashtratourism.gov.in/cultural-celebrations' }
          ]
        }
      ]
    },
    history: {
      title: 'History',
      content: [
        {
          title: 'Industrial Heritage',
          description: 'History of textile industry and industrial development.',
          image_url: 'https://www.maharashtratourism.gov.in/industrial-heritage.jpg',
          links: [
            { title: 'Industry History', url: 'https://www.maharashtratourism.gov.in/industry-history' },
            { title: 'Textile Museums', url: 'https://www.maharashtratourism.gov.in/textile-museums' }
          ]
        }
      ]
    }
  }
};

// Amravati - Cotton City
export const amravatiData: KarnatakaPOI = {
  id: 'amravati_maharashtra',
  name: 'Amravati',
  category: 'place',
  coordinates: { lat: 20.9374, lng: 77.7796 },
  description: 'Known as the "Cotton City" for its cotton industry and agricultural importance.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: {
      title: 'Monuments',
      content: [
        {
          title: 'Amba Devi Temple',
          description: 'Ancient temple dedicated to Goddess Amba, a major pilgrimage site.',
          image_url: 'https://www.maharashtratourism.gov.in/amba-devi-temple.jpg',
          links: [
            { title: 'Temple History', url: 'https://www.maharashtratourism.gov.in/temple-history' },
            { title: 'Pilgrimage Information', url: 'https://www.maharashtratourism.gov.in/pilgrimage-information' }
          ]
        }
      ]
    },
    food: {
      title: 'Food',
      content: [
        {
          title: 'Local Cuisine',
          description: 'Traditional Maharashtrian cuisine with local specialties.',
          image_url: 'https://www.maharashtratourism.gov.in/local-cuisine.jpg',
          links: [
            { title: 'Traditional Dishes', url: 'https://www.maharashtratourism.gov.in/traditional-dishes' },
            { title: 'Local Restaurants', url: 'https://www.maharashtratourism.gov.in/local-restaurants' }
          ]
        }
      ]
    },
    customs: {
      title: 'Customs',
      content: [
        {
          title: 'Agricultural Traditions',
          description: 'Rich agricultural traditions and farming practices.',
          image_url: 'https://www.maharashtratourism.gov.in/agricultural-traditions.jpg',
          links: [
            { title: 'Farming Practices', url: 'https://www.maharashtratourism.gov.in/farming-practices' },
            { title: 'Agricultural Tours', url: 'https://www.maharashtratourism.gov.in/agricultural-tours' }
          ]
        }
      ]
    },
    festivals: {
      title: 'Festivals',
      content: [
        {
          title: 'Harvest Festivals',
          description: 'Festivals celebrating agricultural harvests and local traditions.',
          image_url: 'https://www.maharashtratourism.gov.in/harvest-festivals.jpg',
          links: [
            { title: 'Festival Calendar', url: 'https://www.maharashtratourism.gov.in/festival-calendar' },
            { title: 'Harvest Celebrations', url: 'https://www.maharashtratourism.gov.in/harvest-celebrations' }
          ]
        }
      ]
    },
    history: {
      title: 'History',
      content: [
        {
          title: 'Agricultural Heritage',
          description: 'Rich history of agriculture and cotton cultivation.',
          image_url: 'https://www.maharashtratourism.gov.in/agricultural-heritage.jpg',
          links: [
            { title: 'Cotton History', url: 'https://www.maharashtratourism.gov.in/cotton-history' },
            { title: 'Agricultural Development', url: 'https://www.maharashtratourism.gov.in/agricultural-development' }
          ]
        }
      ]
    }
  }
};

// Kolhapur - Cultural Hub
export const kolhapurData: KarnatakaPOI = {
  id: 'kolhapur_maharashtra',
  name: 'Kolhapur',
  category: 'place',
  coordinates: { lat: 16.7050, lng: 74.2433 },
  description: 'Cultural hub known for its royal heritage, Mahalaxmi Temple, and Kolhapuri chappals.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: {
      title: 'Monuments',
      content: [
        {
          title: 'Mahalaxmi Temple',
          description: 'Ancient temple dedicated to Goddess Mahalaxmi, one of the Shakti Peethas.',
          image_url: 'https://www.maharashtratourism.gov.in/mahalaxmi-temple.jpg',
          links: [
            { title: 'Temple Significance', url: 'https://www.maharashtratourism.gov.in/temple-significance' },
            { title: 'Pilgrimage Guide', url: 'https://www.maharashtratourism.gov.in/pilgrimage-guide' }
          ]
        },
        {
          title: 'New Palace',
          description: 'Royal palace of the Kolhapur kings, now a museum.',
          image_url: 'https://www.maharashtratourism.gov.in/new-palace.jpg',
          links: [
            { title: 'Palace Museum', url: 'https://www.maharashtratourism.gov.in/palace-museum' },
            { title: 'Royal History', url: 'https://www.maharashtratourism.gov.in/royal-history' }
          ]
        }
      ]
    },
    food: {
      title: 'Food',
      content: [
        {
          title: 'Kolhapuri Cuisine',
          description: 'Famous for its spicy and flavorful cuisine, especially Kolhapuri mutton.',
          image_url: 'https://www.maharashtratourism.gov.in/kolhapuri-cuisine.jpg',
          links: [
            { title: 'Kolhapuri Mutton', url: 'https://www.maharashtratourism.gov.in/kolhapuri-mutton' },
            { title: 'Spice Recipes', url: 'https://www.maharashtratourism.gov.in/spice-recipes' }
          ]
        },
        {
          title: 'Kolhapuri Chappals',
          description: 'Famous handcrafted leather footwear known worldwide.',
          image_url: 'https://www.maharashtratourism.gov.in/kolhapuri-chappals.jpg',
          links: [
            { title: 'Chappal Making', url: 'https://www.maharashtratourism.gov.in/chappal-making' },
            { title: 'Leather Crafts', url: 'https://www.maharashtratourism.gov.in/leather-crafts' }
          ]
        }
      ]
    },
    customs: {
      title: 'Customs',
      content: [
        {
          title: 'Royal Traditions',
          description: 'Rich royal traditions and cultural heritage of the Kolhapur kingdom.',
          image_url: 'https://www.maharashtratourism.gov.in/royal-traditions.jpg',
          links: [
            { title: 'Royal Heritage', url: 'https://www.maharashtratourism.gov.in/royal-heritage' },
            { title: 'Cultural Practices', url: 'https://www.maharashtratourism.gov.in/cultural-practices' }
          ]
        }
      ]
    },
    festivals: {
      title: 'Festivals',
      content: [
        {
          title: 'Mahalaxmi Festival',
          description: 'Grand festival celebrating Goddess Mahalaxmi with elaborate rituals.',
          image_url: 'https://www.maharashtratourism.gov.in/mahalaxmi-festival.jpg',
          links: [
            { title: 'Festival Schedule', url: 'https://www.maharashtratourism.gov.in/festival-schedule' },
            { title: 'Religious Ceremonies', url: 'https://www.maharashtratourism.gov.in/religious-ceremonies' }
          ]
        }
      ]
    },
    history: {
      title: 'History',
      content: [
        {
          title: 'Kolhapur Kingdom',
          description: 'Rich history of the Kolhapur kingdom and its rulers.',
          image_url: 'https://www.maharashtratourism.gov.in/kolhapur-kingdom.jpg',
          links: [
            { title: 'Kingdom History', url: 'https://www.maharashtratourism.gov.in/kingdom-history' },
            { title: 'Royal Dynasties', url: 'https://www.maharashtratourism.gov.in/royal-dynasties' }
          ]
        }
      ]
    }
  }
};

// Jalgaon - Banana City
export const jalgaonData: KarnatakaPOI = {
  id: 'jalgaon_maharashtra',
  name: 'Jalgaon',
  category: 'place',
  coordinates: { lat: 21.0077, lng: 75.5626 },
  description: 'Known as the "Banana City" for its extensive banana cultivation and agricultural importance.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: {
      title: 'Monuments',
      content: [
        {
          title: 'Jalgaon Temples',
          description: 'Various ancient temples showcasing local architecture and religious significance.',
          image_url: 'https://www.maharashtratourism.gov.in/jalgaon-temples.jpg',
          links: [
            { title: 'Temple Guide', url: 'https://www.maharashtratourism.gov.in/temple-guide' },
            { title: 'Religious Sites', url: 'https://www.maharashtratourism.gov.in/religious-sites' }
          ]
        }
      ]
    },
    food: {
      title: 'Food',
      content: [
        {
          title: 'Banana Products',
          description: 'Various products made from bananas, a local specialty.',
          image_url: 'https://www.maharashtratourism.gov.in/banana-products.jpg',
          links: [
            { title: 'Banana Processing', url: 'https://www.maharashtratourism.gov.in/banana-processing' },
            { title: 'Local Delicacies', url: 'https://www.maharashtratourism.gov.in/local-delicacies' }
          ]
        }
      ]
    },
    customs: {
      title: 'Customs',
      content: [
        {
          title: 'Agricultural Culture',
          description: 'Strong agricultural culture centered around banana cultivation.',
          image_url: 'https://www.maharashtratourism.gov.in/agricultural-culture.jpg',
          links: [
            { title: 'Farming Techniques', url: 'https://www.maharashtratourism.gov.in/farming-techniques' },
            { title: 'Agricultural Tours', url: 'https://www.maharashtratourism.gov.in/agricultural-tours' }
          ]
        }
      ]
    },
    festivals: {
      title: 'Festivals',
      content: [
        {
          title: 'Agricultural Festivals',
          description: 'Festivals celebrating agricultural harvests and local traditions.',
          image_url: 'https://www.maharashtratourism.gov.in/agricultural-festivals.jpg',
          links: [
            { title: 'Harvest Celebrations', url: 'https://www.maharashtratourism.gov.in/harvest-celebrations' },
            { title: 'Festival Events', url: 'https://www.maharashtratourism.gov.in/festival-events' }
          ]
        }
      ]
    },
    history: {
      title: 'History',
      content: [
        {
          title: 'Agricultural Development',
          description: 'History of agricultural development and banana cultivation.',
          image_url: 'https://www.maharashtratourism.gov.in/agricultural-development.jpg',
          links: [
            { title: 'Crop History', url: 'https://www.maharashtratourism.gov.in/crop-history' },
            { title: 'Agricultural Innovation', url: 'https://www.maharashtratourism.gov.in/agricultural-innovation' }
          ]
        }
      ]
    }
  }
};

// Sangli - Turmeric City
export const sangliData: KarnatakaPOI = {
  id: 'sangli_maharashtra',
  name: 'Sangli',
  category: 'place',
  coordinates: { lat: 16.8524, lng: 74.5815 },
  description: 'Known as the "Turmeric City" for its turmeric production and agricultural trade.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: {
      title: 'Monuments',
      content: [
        {
          title: 'Sangli Temples',
          description: 'Various temples showcasing local religious architecture.',
          image_url: 'https://www.maharashtratourism.gov.in/sangli-temples.jpg',
          links: [
            { title: 'Temple Information', url: 'https://www.maharashtratourism.gov.in/temple-information' },
            { title: 'Religious Significance', url: 'https://www.maharashtratourism.gov.in/religious-significance' }
          ]
        }
      ]
    },
    food: {
      title: 'Food',
      content: [
        {
          title: 'Local Cuisine',
          description: 'Traditional cuisine with emphasis on turmeric-based dishes.',
          image_url: 'https://www.maharashtratourism.gov.in/local-cuisine.jpg',
          links: [
            { title: 'Turmeric Recipes', url: 'https://www.maharashtratourism.gov.in/turmeric-recipes' },
            { title: 'Traditional Dishes', url: 'https://www.maharashtratourism.gov.in/traditional-dishes' }
          ]
        }
      ]
    },
    customs: {
      title: 'Customs',
      content: [
        {
          title: 'Trade Traditions',
          description: 'Rich traditions of agricultural trade and commerce.',
          image_url: 'https://www.maharashtratourism.gov.in/trade-traditions.jpg',
          links: [
            { title: 'Trade Practices', url: 'https://www.maharashtratourism.gov.in/trade-practices' },
            { title: 'Commercial Heritage', url: 'https://www.maharashtratourism.gov.in/commercial-heritage' }
          ]
        }
      ]
    },
    festivals: {
      title: 'Festivals',
      content: [
        {
          title: 'Trade Festivals',
          description: 'Festivals celebrating trade and agricultural commerce.',
          image_url: 'https://www.maharashtratourism.gov.in/trade-festivals.jpg',
          links: [
            { title: 'Festival Schedule', url: 'https://www.maharashtratourism.gov.in/festival-schedule' },
            { title: 'Trade Events', url: 'https://www.maharashtratourism.gov.in/trade-events' }
          ]
        }
      ]
    },
    history: {
      title: 'History',
      content: [
        {
          title: 'Commercial Heritage',
          description: 'History of commercial development and trade in the region.',
          image_url: 'https://www.maharashtratourism.gov.in/commercial-heritage.jpg',
          links: [
            { title: 'Trade History', url: 'https://www.maharashtratourism.gov.in/trade-history' },
            { title: 'Economic Development', url: 'https://www.maharashtratourism.gov.in/economic-development' }
          ]
        }
      ]
    }
  }
};

export default [
  nashikData,
  aurangabadData,
  solapurData,
  amravatiData,
  kolhapurData,
  jalgaonData,
  sangliData
];
