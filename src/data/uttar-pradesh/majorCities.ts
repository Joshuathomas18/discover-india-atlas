// Uttar Pradesh Major Cities Data
// Additional major cities with comprehensive cultural information

import { KarnatakaPOI } from '../../types/database';

// Kanpur - Industrial Hub
export const kanpurData: KarnatakaPOI = {
  id: 'kanpur_uttar_pradesh',
  name: 'Kanpur',
  category: 'place',
  coordinates: { lat: 26.4499, lng: 80.3319 },
  description: 'Major industrial city known for its leather industry and historical significance.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: {
      title: 'Monuments',
      content: [
        {
          title: 'JK Temple',
          description: 'Beautiful temple dedicated to Lord Shiva, known for its architectural beauty.',
          image_url: 'https://www.uptourism.gov.in/jk-temple.jpg',
          links: [
            { title: 'Temple Architecture', url: 'https://www.uptourism.gov.in/temple-architecture' },
            { title: 'Religious Significance', url: 'https://www.uptourism.gov.in/religious-significance' }
          ]
        },
        {
          title: 'Kanpur Memorial Church',
          description: 'Historic church built in memory of the British who died in the 1857 uprising.',
          image_url: 'https://www.uptourism.gov.in/memorial-church.jpg',
          links: [
            { title: 'Church History', url: 'https://www.uptourism.gov.in/church-history' },
            { title: 'Historical Significance', url: 'https://www.uptourism.gov.in/historical-significance' }
          ]
        }
      ]
    },
    food: {
      title: 'Food',
      content: [
        {
          title: 'Kanpur Cuisine',
          description: 'Local cuisine with traditional North Indian flavors and specialties.',
          image_url: 'https://www.uptourism.gov.in/kanpur-cuisine.jpg',
          links: [
            { title: 'Local Dishes', url: 'https://www.uptourism.gov.in/local-dishes' },
            { title: 'Traditional Recipes', url: 'https://www.uptourism.gov.in/traditional-recipes' }
          ]
        }
      ]
    },
    customs: {
      title: 'Customs',
      content: [
        {
          title: 'Industrial Culture',
          description: 'Blend of traditional culture with modern industrial development.',
          image_url: 'https://www.uptourism.gov.in/industrial-culture.jpg',
          links: [
            { title: 'Industrial Heritage', url: 'https://www.uptourism.gov.in/industrial-heritage' },
            { title: 'Cultural Practices', url: 'https://www.uptourism.gov.in/cultural-practices' }
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
          image_url: 'https://www.uptourism.gov.in/local-festivals.jpg',
          links: [
            { title: 'Festival Schedule', url: 'https://www.uptourism.gov.in/festival-schedule' },
            { title: 'Cultural Celebrations', url: 'https://www.uptourism.gov.in/cultural-celebrations' }
          ]
        }
      ]
    },
    history: {
      title: 'History',
      content: [
        {
          title: 'Industrial Heritage',
          description: 'History of industrial development and leather industry.',
          image_url: 'https://www.uptourism.gov.in/industrial-heritage.jpg',
          links: [
            { title: 'Industry History', url: 'https://www.uptourism.gov.in/industry-history' },
            { title: 'Economic Development', url: 'https://www.uptourism.gov.in/economic-development' }
          ]
        }
      ]
    }
  }
};

// Allahabad (Prayagraj) - Sangam City
export const allahabadData: KarnatakaPOI = {
  id: 'allahabad_uttar_pradesh',
  name: 'Allahabad',
  category: 'place',
  coordinates: { lat: 25.4358, lng: 81.8463 },
  description: 'Sacred city where three rivers meet (Sangam), known for Kumbh Mela.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: {
      title: 'Monuments',
      content: [
        {
          title: 'Triveni Sangam',
          description: 'Sacred confluence of Ganges, Yamuna, and Saraswati rivers.',
          image_url: 'https://www.uptourism.gov.in/triveni-sangam.jpg',
          links: [
            { title: 'Sangam Significance', url: 'https://www.uptourism.gov.in/sangam-significance' },
            { title: 'Religious Importance', url: 'https://www.uptourism.gov.in/religious-importance' }
          ]
        },
        {
          title: 'Allahabad Fort',
          description: 'Historic fort built by Akbar on the banks of the Yamuna.',
          image_url: 'https://www.uptourism.gov.in/allahabad-fort.jpg',
          links: [
            { title: 'Fort History', url: 'https://www.uptourism.gov.in/fort-history' },
            { title: 'Architectural Details', url: 'https://www.uptourism.gov.in/architectural-details' }
          ]
        }
      ]
    },
    food: {
      title: 'Food',
      content: [
        {
          title: 'Allahabadi Cuisine',
          description: 'Traditional cuisine with local specialties and flavors.',
          image_url: 'https://www.uptourism.gov.in/allahabadi-cuisine.jpg',
          links: [
            { title: 'Local Specialties', url: 'https://www.uptourism.gov.in/local-specialties' },
            { title: 'Traditional Recipes', url: 'https://www.uptourism.gov.in/traditional-recipes' }
          ]
        }
      ]
    },
    customs: {
      title: 'Customs',
      content: [
        {
          title: 'Religious Traditions',
          description: 'Rich religious traditions centered around the Sangam.',
          image_url: 'https://www.uptourism.gov.in/religious-traditions.jpg',
          links: [
            { title: 'Religious Practices', url: 'https://www.uptourism.gov.in/religious-practices' },
            { title: 'Spiritual Significance', url: 'https://www.uptourism.gov.in/spiritual-significance' }
          ]
        }
      ]
    },
    festivals: {
      title: 'Festivals',
      content: [
        {
          title: 'Kumbh Mela',
          description: 'Largest religious gathering in the world, held every 12 years.',
          image_url: 'https://www.uptourism.gov.in/kumbh-mela.jpg',
          links: [
            { title: 'Kumbh Schedule', url: 'https://www.uptourism.gov.in/kumbh-schedule' },
            { title: 'Pilgrimage Guide', url: 'https://www.uptourism.gov.in/pilgrimage-guide' }
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
          image_url: 'https://www.uptourism.gov.in/ancient-heritage.jpg',
          links: [
            { title: 'Mythological References', url: 'https://www.uptourism.gov.in/mythological-references' },
            { title: 'Historical Sites', url: 'https://www.uptourism.gov.in/historical-sites' }
          ]
        }
      ]
    }
  }
};

// Meerut - Historical City
export const meerutData: KarnatakaPOI = {
  id: 'meerut_uttar_pradesh',
  name: 'Meerut',
  category: 'place',
  coordinates: { lat: 28.9845, lng: 77.7064 },
  description: 'Historic city known for the 1857 uprising and sports goods industry.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: {
      title: 'Monuments',
      content: [
        {
          title: 'St. John\'s Church',
          description: 'Historic church built during the British period.',
          image_url: 'https://www.uptourism.gov.in/st-johns-church.jpg',
          links: [
            { title: 'Church History', url: 'https://www.uptourism.gov.in/church-history' },
            { title: 'Architectural Style', url: 'https://www.uptourism.gov.in/architectural-style' }
          ]
        }
      ]
    },
    food: {
      title: 'Food',
      content: [
        {
          title: 'Meerut Cuisine',
          description: 'Local cuisine with traditional North Indian flavors.',
          image_url: 'https://www.uptourism.gov.in/meerut-cuisine.jpg',
          links: [
            { title: 'Local Dishes', url: 'https://www.uptourism.gov.in/local-dishes' },
            { title: 'Traditional Recipes', url: 'https://www.uptourism.gov.in/traditional-recipes' }
          ]
        }
      ]
    },
    customs: {
      title: 'Customs',
      content: [
        {
          title: 'Historical Culture',
          description: 'Rich historical culture with significance in India\'s freedom struggle.',
          image_url: 'https://www.uptourism.gov.in/historical-culture.jpg',
          links: [
            { title: 'Historical Significance', url: 'https://www.uptourism.gov.in/historical-significance' },
            { title: 'Cultural Heritage', url: 'https://www.uptourism.gov.in/cultural-heritage' }
          ]
        }
      ]
    },
    festivals: {
      title: 'Festivals',
      content: [
        {
          title: 'Local Festivals',
          description: 'Traditional festivals celebrating local culture.',
          image_url: 'https://www.uptourism.gov.in/local-festivals.jpg',
          links: [
            { title: 'Festival Calendar', url: 'https://www.uptourism.gov.in/festival-calendar' },
            { title: 'Cultural Events', url: 'https://www.uptourism.gov.in/cultural-events' }
          ]
        }
      ]
    },
    history: {
      title: 'History',
      content: [
        {
          title: '1857 Uprising',
          description: 'Meerut played a crucial role in the 1857 Indian uprising.',
          image_url: 'https://www.uptourism.gov.in/1857-uprising.jpg',
          links: [
            { title: 'Uprising History', url: 'https://www.uptourism.gov.in/uprising-history' },
            { title: 'Historical Sites', url: 'https://www.uptourism.gov.in/historical-sites' }
          ]
        }
      ]
    }
  }
};

// Ghaziabad - Industrial City
export const ghaziabadData: KarnatakaPOI = {
  id: 'ghaziabad_uttar_pradesh',
  name: 'Ghaziabad',
  category: 'place',
  coordinates: { lat: 28.6692, lng: 77.4538 },
  description: 'Industrial city in the National Capital Region, known for manufacturing.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: {
      title: 'Monuments',
      content: [
        {
          title: 'Local Temples',
          description: 'Various temples showcasing local religious architecture.',
          image_url: 'https://www.uptourism.gov.in/local-temples.jpg',
          links: [
            { title: 'Temple Information', url: 'https://www.uptourism.gov.in/temple-information' },
            { title: 'Religious Significance', url: 'https://www.uptourism.gov.in/religious-significance' }
          ]
        }
      ]
    },
    food: {
      title: 'Food',
      content: [
        {
          title: 'Local Cuisine',
          description: 'Traditional cuisine with local specialties.',
          image_url: 'https://www.uptourism.gov.in/local-cuisine.jpg',
          links: [
            { title: 'Traditional Dishes', url: 'https://www.uptourism.gov.in/traditional-dishes' },
            { title: 'Local Restaurants', url: 'https://www.uptourism.gov.in/local-restaurants' }
          ]
        }
      ]
    },
    customs: {
      title: 'Customs',
      content: [
        {
          title: 'Industrial Culture',
          description: 'Modern industrial culture with traditional values.',
          image_url: 'https://www.uptourism.gov.in/industrial-culture.jpg',
          links: [
            { title: 'Cultural Practices', url: 'https://www.uptourism.gov.in/cultural-practices' },
            { title: 'Community Traditions', url: 'https://www.uptourism.gov.in/community-traditions' }
          ]
        }
      ]
    },
    festivals: {
      title: 'Festivals',
      content: [
        {
          title: 'Local Festivals',
          description: 'Traditional festivals celebrating local culture.',
          image_url: 'https://www.uptourism.gov.in/local-festivals.jpg',
          links: [
            { title: 'Festival Schedule', url: 'https://www.uptourism.gov.in/festival-schedule' },
            { title: 'Cultural Celebrations', url: 'https://www.uptourism.gov.in/cultural-celebrations' }
          ]
        }
      ]
    },
    history: {
      title: 'History',
      content: [
        {
          title: 'Industrial Development',
          description: 'History of industrial development and urbanization.',
          image_url: 'https://www.uptourism.gov.in/industrial-development.jpg',
          links: [
            { title: 'Development History', url: 'https://www.uptourism.gov.in/development-history' },
            { title: 'Economic Growth', url: 'https://www.uptourism.gov.in/economic-growth' }
          ]
        }
      ]
    }
  }
};

// Bareilly - Industrial Hub
export const bareillyData: KarnatakaPOI = {
  id: 'bareilly_uttar_pradesh',
  name: 'Bareilly',
  category: 'place',
  coordinates: { lat: 28.3670, lng: 79.4304 },
  description: 'Industrial city known for its manufacturing and agricultural trade.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: {
      title: 'Monuments',
      content: [
        {
          title: 'Local Temples',
          description: 'Various temples showcasing local religious architecture.',
          image_url: 'https://www.uptourism.gov.in/local-temples.jpg',
          links: [
            { title: 'Temple Guide', url: 'https://www.uptourism.gov.in/temple-guide' },
            { title: 'Religious Significance', url: 'https://www.uptourism.gov.in/religious-significance' }
          ]
        }
      ]
    },
    food: {
      title: 'Food',
      content: [
        {
          title: 'Bareilly Cuisine',
          description: 'Local cuisine with traditional North Indian flavors.',
          image_url: 'https://www.uptourism.gov.in/bareilly-cuisine.jpg',
          links: [
            { title: 'Local Specialties', url: 'https://www.uptourism.gov.in/local-specialties' },
            { title: 'Traditional Recipes', url: 'https://www.uptourism.gov.in/traditional-recipes' }
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
          image_url: 'https://www.uptourism.gov.in/agricultural-traditions.jpg',
          links: [
            { title: 'Farming Practices', url: 'https://www.uptourism.gov.in/farming-practices' },
            { title: 'Agricultural Heritage', url: 'https://www.uptourism.gov.in/agricultural-heritage' }
          ]
        }
      ]
    },
    festivals: {
      title: 'Festivals',
      content: [
        {
          title: 'Harvest Festivals',
          description: 'Festivals celebrating agricultural harvests.',
          image_url: 'https://www.uptourism.gov.in/harvest-festivals.jpg',
          links: [
            { title: 'Festival Calendar', url: 'https://www.uptourism.gov.in/festival-calendar' },
            { title: 'Harvest Celebrations', url: 'https://www.uptourism.gov.in/harvest-celebrations' }
          ]
        }
      ]
    },
    history: {
      title: 'History',
      content: [
        {
          title: 'Industrial Heritage',
          description: 'History of industrial development and manufacturing.',
          image_url: 'https://www.uptourism.gov.in/industrial-heritage.jpg',
          links: [
            { title: 'Industry History', url: 'https://www.uptourism.gov.in/industry-history' },
            { title: 'Manufacturing Heritage', url: 'https://www.uptourism.gov.in/manufacturing-heritage' }
          ]
        }
      ]
    }
  }
};

// Moradabad - Brass City
export const moradabadData: KarnatakaPOI = {
  id: 'moradabad_uttar_pradesh',
  name: 'Moradabad',
  category: 'place',
  coordinates: { lat: 28.8381, lng: 78.7733 },
  description: 'Known as the "Brass City" for its brass and metal handicrafts industry.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: {
      title: 'Monuments',
      content: [
        {
          title: 'Local Monuments',
          description: 'Various monuments showcasing local architecture and history.',
          image_url: 'https://www.uptourism.gov.in/local-monuments.jpg',
          links: [
            { title: 'Monument Guide', url: 'https://www.uptourism.gov.in/monument-guide' },
            { title: 'Historical Significance', url: 'https://www.uptourism.gov.in/historical-significance' }
          ]
        }
      ]
    },
    food: {
      title: 'Food',
      content: [
        {
          title: 'Moradabadi Cuisine',
          description: 'Local cuisine with traditional flavors and specialties.',
          image_url: 'https://www.uptourism.gov.in/moradabadi-cuisine.jpg',
          links: [
            { title: 'Local Dishes', url: 'https://www.uptourism.gov.in/local-dishes' },
            { title: 'Traditional Recipes', url: 'https://www.uptourism.gov.in/traditional-recipes' }
          ]
        }
      ]
    },
    customs: {
      title: 'Customs',
      content: [
        {
          title: 'Craft Traditions',
          description: 'Rich tradition of brass and metal handicrafts.',
          image_url: 'https://www.uptourism.gov.in/craft-traditions.jpg',
          links: [
            { title: 'Craft Workshops', url: 'https://www.uptourism.gov.in/craft-workshops' },
            { title: 'Artisan Visits', url: 'https://www.uptourism.gov.in/artisan-visits' }
          ]
        }
      ]
    },
    festivals: {
      title: 'Festivals',
      content: [
        {
          title: 'Local Festivals',
          description: 'Traditional festivals celebrating local culture.',
          image_url: 'https://www.uptourism.gov.in/local-festivals.jpg',
          links: [
            { title: 'Festival Schedule', url: 'https://www.uptourism.gov.in/festival-schedule' },
            { title: 'Cultural Events', url: 'https://www.uptourism.gov.in/cultural-events' }
          ]
        }
      ]
    },
    history: {
      title: 'History',
      content: [
        {
          title: 'Craft Heritage',
          description: 'Rich history of brass and metal handicrafts.',
          image_url: 'https://www.uptourism.gov.in/craft-heritage.jpg',
          links: [
            { title: 'Craft History', url: 'https://www.uptourism.gov.in/craft-history' },
            { title: 'Artisan Traditions', url: 'https://www.uptourism.gov.in/artisan-traditions' }
          ]
        }
      ]
    }
  }
};

// Aligarh - Educational Hub
export const aligarhData: KarnatakaPOI = {
  id: 'aligarh_uttar_pradesh',
  name: 'Aligarh',
  category: 'place',
  coordinates: { lat: 27.8974, lng: 78.0880 },
  description: 'Educational hub known for Aligarh Muslim University and lock industry.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: {
      title: 'Monuments',
      content: [
        {
          title: 'AMU Campus',
          description: 'Historic campus of Aligarh Muslim University with beautiful architecture.',
          image_url: 'https://www.uptourism.gov.in/amu-campus.jpg',
          links: [
            { title: 'Campus History', url: 'https://www.uptourism.gov.in/campus-history' },
            { title: 'Architectural Heritage', url: 'https://www.uptourism.gov.in/architectural-heritage' }
          ]
        }
      ]
    },
    food: {
      title: 'Food',
      content: [
        {
          title: 'Aligarh Cuisine',
          description: 'Local cuisine with traditional flavors and specialties.',
          image_url: 'https://www.uptourism.gov.in/aligarh-cuisine.jpg',
          links: [
            { title: 'Local Specialties', url: 'https://www.uptourism.gov.in/local-specialties' },
            { title: 'Traditional Recipes', url: 'https://www.uptourism.gov.in/traditional-recipes' }
          ]
        }
      ]
    },
    customs: {
      title: 'Customs',
      content: [
        {
          title: 'Educational Culture',
          description: 'Rich educational culture and academic traditions.',
          image_url: 'https://www.uptourism.gov.in/educational-culture.jpg',
          links: [
            { title: 'Academic Heritage', url: 'https://www.uptourism.gov.in/academic-heritage' },
            { title: 'Educational Traditions', url: 'https://www.uptourism.gov.in/educational-traditions' }
          ]
        }
      ]
    },
    festivals: {
      title: 'Festivals',
      content: [
        {
          title: 'Academic Festivals',
          description: 'Festivals celebrating academic achievements and culture.',
          image_url: 'https://www.uptourism.gov.in/academic-festivals.jpg',
          links: [
            { title: 'Festival Schedule', url: 'https://www.uptourism.gov.in/festival-schedule' },
            { title: 'Academic Events', url: 'https://www.uptourism.gov.in/academic-events' }
          ]
        }
      ]
    },
    history: {
      title: 'History',
      content: [
        {
          title: 'Educational Heritage',
          description: 'Rich history of educational development and academic excellence.',
          image_url: 'https://www.uptourism.gov.in/educational-heritage.jpg',
          links: [
            { title: 'University History', url: 'https://www.uptourism.gov.in/university-history' },
            { title: 'Academic Achievements', url: 'https://www.uptourism.gov.in/academic-achievements' }
          ]
        }
      ]
    }
  }
};

export default [
  kanpurData,
  allahabadData,
  meerutData,
  ghaziabadData,
  bareillyData,
  moradabadData,
  aligarhData
];
