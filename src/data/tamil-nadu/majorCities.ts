// Tamil Nadu Major Cities Data
// Additional major cities with comprehensive cultural information

import { KarnatakaPOI } from '../../types/database';

// Trichy (Tiruchirappalli)
export const trichyData: KarnatakaPOI = {
  id: 'trichy_tamil_nadu',
  name: 'Trichy',
  category: 'place',
  coordinates: { lat: 10.7905, lng: 78.7047 },
  description: 'Historic city known for the Rock Fort Temple and Srirangam Temple complex.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: {
      title: 'Monuments',
      content: [
        {
          title: 'Rock Fort Temple',
          description: 'Ancient temple complex built on a massive rock, offering panoramic city views.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/rock-fort-temple.jpg',
          links: [
            { title: 'Temple Guide', url: 'https://www.tamilnadutourism.tn.gov.in/temple-guide' },
            { title: 'Climbing Tips', url: 'https://www.tamilnadutourism.tn.gov.in/climbing-tips' }
          ]
        },
        {
          title: 'Srirangam Temple',
          description: 'Largest functioning Hindu temple in the world, dedicated to Lord Ranganatha.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/srirangam-temple.jpg',
          links: [
            { title: 'Temple Complex Map', url: 'https://www.tamilnadutourism.tn.gov.in/temple-map' },
            { title: 'Religious Significance', url: 'https://www.tamilnadutourism.tn.gov.in/religious-significance' }
          ]
        }
      ]
    },
    food: {
      title: 'Food',
      content: [
        {
          title: 'Trichy Biryani',
          description: 'Fragrant rice dish cooked with spices and meat, a local specialty.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/trichy-biryani.jpg',
          links: [
            { title: 'Best Biryani Places', url: 'https://www.tamilnadutourism.tn.gov.in/biryani-places' },
            { title: 'Biryani Recipe', url: 'https://www.tamilnadutourism.tn.gov.in/biryani-recipe' }
          ]
        },
        {
          title: 'Kongu Nadu Thali',
          description: 'Traditional meal platter featuring local delicacies and flavors.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/kongu-thali.jpg',
          links: [
            { title: 'Thali Restaurants', url: 'https://www.tamilnadutourism.tn.gov.in/thali-restaurants' },
            { title: 'Traditional Cooking', url: 'https://www.tamilnadutourism.tn.gov.in/traditional-cooking' }
          ]
        }
      ]
    },
    customs: {
      title: 'Customs',
      content: [
        {
          title: 'Temple Architecture',
          description: 'Rich tradition of Dravidian temple architecture and construction techniques.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/temple-architecture.jpg',
          links: [
            { title: 'Architecture Tours', url: 'https://www.tamilnadutourism.tn.gov.in/architecture-tours' },
            { title: 'Construction Techniques', url: 'https://www.tamilnadutourism.tn.gov.in/construction-techniques' }
          ]
        }
      ]
    },
    festivals: {
      title: 'Festivals',
      content: [
        {
          title: 'Vaikunta Ekadasi',
          description: 'Sacred festival celebrated with great devotion at Srirangam Temple.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/vaikunta-ekadasi.jpg',
          links: [
            { title: 'Festival Schedule', url: 'https://www.tamilnadutourism.tn.gov.in/festival-schedule' },
            { title: 'Religious Significance', url: 'https://www.tamilnadutourism.tn.gov.in/religious-significance' }
          ]
        }
      ]
    },
    history: {
      title: 'History',
      content: [
        {
          title: 'Chola Heritage',
          description: 'Rich history dating back to the Chola dynasty with numerous archaeological sites.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/chola-heritage.jpg',
          links: [
            { title: 'Historical Sites', url: 'https://www.tamilnadutourism.tn.gov.in/historical-sites' },
            { title: 'Archaeological Tours', url: 'https://www.tamilnadutourism.tn.gov.in/archaeological-tours' }
          ]
        }
      ]
    }
  }
};

// Salem - Steel City
export const salemData: KarnatakaPOI = {
  id: 'salem_tamil_nadu',
  name: 'Salem',
  category: 'place',
  coordinates: { lat: 11.6643, lng: 78.1460 },
  description: 'Industrial city known for steel production and rich cultural heritage.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: {
      title: 'Monuments',
      content: [
        {
          title: 'Kottai Mariamman Temple',
          description: 'Ancient temple dedicated to Goddess Mariamman, known for its healing powers.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/kottai-mariamman.jpg',
          links: [
            { title: 'Temple History', url: 'https://www.tamilnadutourism.tn.gov.in/temple-history' },
            { title: 'Healing Rituals', url: 'https://www.tamilnadutourism.tn.gov.in/healing-rituals' }
          ]
        }
      ]
    },
    food: {
      title: 'Food',
      content: [
        {
          title: 'Salem Special Biryani',
          description: 'Unique biryani preparation with local spices and cooking methods.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/salem-biryani.jpg',
          links: [
            { title: 'Best Biryani Shops', url: 'https://www.tamilnadutourism.tn.gov.in/biryani-shops' },
            { title: 'Cooking Methods', url: 'https://www.tamilnadutourism.tn.gov.in/cooking-methods' }
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
          image_url: 'https://www.tamilnadutourism.tn.gov.in/industrial-culture.jpg',
          links: [
            { title: 'Industrial Tours', url: 'https://www.tamilnadutourism.tn.gov.in/industrial-tours' },
            { title: 'Cultural Heritage', url: 'https://www.tamilnadutourism.tn.gov.in/cultural-heritage' }
          ]
        }
      ]
    },
    festivals: {
      title: 'Festivals',
      content: [
        {
          title: 'Mariamman Festival',
          description: 'Annual festival celebrating Goddess Mariamman with grand processions.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/mariamman-festival.jpg',
          links: [
            { title: 'Festival Events', url: 'https://www.tamilnadutourism.tn.gov.in/festival-events' },
            { title: 'Procession Routes', url: 'https://www.tamilnadutourism.tn.gov.in/procession-routes' }
          ]
        }
      ]
    },
    history: {
      title: 'History',
      content: [
        {
          title: 'Steel Industry Heritage',
          description: 'History of steel production and industrial development in Salem.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/steel-heritage.jpg',
          links: [
            { title: 'Steel Plant Tours', url: 'https://www.tamilnadutourism.tn.gov.in/steel-tours' },
            { title: 'Industrial Museums', url: 'https://www.tamilnadutourism.tn.gov.in/industrial-museums' }
          ]
        }
      ]
    }
  }
};

// Tirunelveli - Halwa City
export const tirunelveliData: KarnatakaPOI = {
  id: 'tirunelveli_tamil_nadu',
  name: 'Tirunelveli',
  category: 'place',
  coordinates: { lat: 8.7139, lng: 77.7567 },
  description: 'Historic city famous for its unique halwa and ancient temples.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: {
      title: 'Monuments',
      content: [
        {
          title: 'Nellaiappar Temple',
          description: 'Ancient temple dedicated to Lord Shiva, known for its musical pillars.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/nellaiappar-temple.jpg',
          links: [
            { title: 'Temple Architecture', url: 'https://www.tamilnadutourism.tn.gov.in/temple-architecture' },
            { title: 'Musical Pillars', url: 'https://www.tamilnadutourism.tn.gov.in/musical-pillars' }
          ]
        }
      ]
    },
    food: {
      title: 'Food',
      content: [
        {
          title: 'Tirunelveli Halwa',
          description: 'Famous sweet made from wheat, sugar, and ghee, known for its unique taste.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/tirunelveli-halwa.jpg',
          links: [
            { title: 'Best Halwa Shops', url: 'https://www.tamilnadutourism.tn.gov.in/halwa-shops' },
            { title: 'Halwa Making Process', url: 'https://www.tamilnadutourism.tn.gov.in/halwa-process' }
          ]
        }
      ]
    },
    customs: {
      title: 'Customs',
      content: [
        {
          title: 'Sweet Making Traditions',
          description: 'Traditional methods of making sweets and confectionery.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/sweet-traditions.jpg',
          links: [
            { title: 'Sweet Making Workshops', url: 'https://www.tamilnadutourism.tn.gov.in/sweet-workshops' },
            { title: 'Traditional Recipes', url: 'https://www.tamilnadutourism.tn.gov.in/traditional-recipes' }
          ]
        }
      ]
    },
    festivals: {
      title: 'Festivals',
      content: [
        {
          title: 'Tirunelveli Festival',
          description: 'Annual cultural festival celebrating local traditions and arts.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/tirunelveli-festival.jpg',
          links: [
            { title: 'Festival Schedule', url: 'https://www.tamilnadutourism.tn.gov.in/festival-schedule' },
            { title: 'Cultural Programs', url: 'https://www.tamilnadutourism.tn.gov.in/cultural-programs' }
          ]
        }
      ]
    },
    history: {
      title: 'History',
      content: [
        {
          title: 'Ancient Pandya Kingdom',
          description: 'Rich history dating back to the ancient Pandya dynasty.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/pandya-history.jpg',
          links: [
            { title: 'Historical Sites', url: 'https://www.tamilnadutourism.tn.gov.in/historical-sites' },
            { title: 'Archaeological Discoveries', url: 'https://www.tamilnadutourism.tn.gov.in/archaeological-discoveries' }
          ]
        }
      ]
    }
  }
};

// Vellore - Fort City
export const velloreData: KarnatakaPOI = {
  id: 'vellore_tamil_nadu',
  name: 'Vellore',
  category: 'place',
  coordinates: { lat: 12.9202, lng: 79.1500 },
  description: 'Historic city known for its massive fort and medical institutions.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: {
      title: 'Monuments',
      content: [
        {
          title: 'Vellore Fort',
          description: 'Massive 16th-century fort with impressive architecture and historical significance.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/vellore-fort.jpg',
          links: [
            { title: 'Fort History', url: 'https://www.tamilnadutourism.tn.gov.in/fort-history' },
            { title: 'Architecture Tour', url: 'https://www.tamilnadutourism.tn.gov.in/architecture-tour' }
          ]
        }
      ]
    },
    food: {
      title: 'Food',
      content: [
        {
          title: 'Vellore Special Cuisine',
          description: 'Local cuisine influenced by various cultures and traditions.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/vellore-cuisine.jpg',
          links: [
            { title: 'Local Restaurants', url: 'https://www.tamilnadutourism.tn.gov.in/local-restaurants' },
            { title: 'Traditional Recipes', url: 'https://www.tamilnadutourism.tn.gov.in/traditional-recipes' }
          ]
        }
      ]
    },
    customs: {
      title: 'Customs',
      content: [
        {
          title: 'Fort Culture',
          description: 'Rich cultural heritage centered around the historic fort.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/fort-culture.jpg',
          links: [
            { title: 'Cultural Tours', url: 'https://www.tamilnadutourism.tn.gov.in/cultural-tours' },
            { title: 'Historical Walks', url: 'https://www.tamilnadutourism.tn.gov.in/historical-walks' }
          ]
        }
      ]
    },
    festivals: {
      title: 'Festivals',
      content: [
        {
          title: 'Vellore Festival',
          description: 'Annual festival celebrating the city\'s rich heritage and culture.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/vellore-festival.jpg',
          links: [
            { title: 'Festival Events', url: 'https://www.tamilnadutourism.tn.gov.in/festival-events' },
            { title: 'Cultural Performances', url: 'https://www.tamilnadutourism.tn.gov.in/cultural-performances' }
          ]
        }
      ]
    },
    history: {
      title: 'History',
      content: [
        {
          title: 'Fort History',
          description: 'Rich history of the Vellore Fort and its role in various dynasties.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/fort-history.jpg',
          links: [
            { title: 'Historical Timeline', url: 'https://www.tamilnadutourism.tn.gov.in/historical-timeline' },
            { title: 'Fort Museums', url: 'https://www.tamilnadutourism.tn.gov.in/fort-museums' }
          ]
        }
      ]
    }
  }
};

// Erode - Turmeric City
export const erodeData: KarnatakaPOI = {
  id: 'erode_tamil_nadu',
  name: 'Erode',
  category: 'place',
  coordinates: { lat: 11.3410, lng: 77.7172 },
  description: 'Commercial city known as the "Turmeric City" for its spice trade.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: {
      title: 'Monuments',
      content: [
        {
          title: 'Periyar Temple',
          description: 'Ancient temple dedicated to Lord Shiva, known for its architectural beauty.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/periyar-temple.jpg',
          links: [
            { title: 'Temple Guide', url: 'https://www.tamilnadutourism.tn.gov.in/temple-guide' },
            { title: 'Religious Significance', url: 'https://www.tamilnadutourism.tn.gov.in/religious-significance' }
          ]
        }
      ]
    },
    food: {
      title: 'Food',
      content: [
        {
          title: 'Spice-based Cuisine',
          description: 'Local cuisine featuring turmeric and other spices grown in the region.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/spice-cuisine.jpg',
          links: [
            { title: 'Spice Tours', url: 'https://www.tamilnadutourism.tn.gov.in/spice-tours' },
            { title: 'Cooking with Spices', url: 'https://www.tamilnadutourism.tn.gov.in/cooking-spices' }
          ]
        }
      ]
    },
    customs: {
      title: 'Customs',
      content: [
        {
          title: 'Spice Trading Traditions',
          description: 'Traditional methods of spice cultivation and trading.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/spice-trading.jpg',
          links: [
            { title: 'Spice Markets', url: 'https://www.tamilnadutourism.tn.gov.in/spice-markets' },
            { title: 'Trading History', url: 'https://www.tamilnadutourism.tn.gov.in/trading-history' }
          ]
        }
      ]
    },
    festivals: {
      title: 'Festivals',
      content: [
        {
          title: 'Spice Festival',
          description: 'Annual festival celebrating the region\'s spice heritage.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/spice-festival.jpg',
          links: [
            { title: 'Festival Activities', url: 'https://www.tamilnadutourism.tn.gov.in/festival-activities' },
            { title: 'Spice Competitions', url: 'https://www.tamilnadutourism.tn.gov.in/spice-competitions' }
          ]
        }
      ]
    },
    history: {
      title: 'History',
      content: [
        {
          title: 'Spice Trade History',
          description: 'Rich history of spice cultivation and trade in the region.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/spice-trade-history.jpg',
          links: [
            { title: 'Trade Routes', url: 'https://www.tamilnadutourism.tn.gov.in/trade-routes' },
            { title: 'Historical Spice Markets', url: 'https://www.tamilnadutourism.tn.gov.in/historical-markets' }
          ]
        }
      ]
    }
  }
};

// Thanjavur - Rice Bowl
export const thanjavurData: KarnatakaPOI = {
  id: 'thanjavur_tamil_nadu',
  name: 'Thanjavur',
  category: 'place',
  coordinates: { lat: 10.7869, lng: 79.1378 },
  description: 'Historic city known as the "Rice Bowl of Tamil Nadu" and home to the Brihadeeswarar Temple.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: {
      title: 'Monuments',
      content: [
        {
          title: 'Brihadeeswarar Temple',
          description: 'UNESCO World Heritage Site, a masterpiece of Chola architecture.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/brihadeeswarar-temple.jpg',
          links: [
            { title: 'UNESCO Information', url: 'https://www.tamilnadutourism.tn.gov.in/unesco-info' },
            { title: 'Architecture Details', url: 'https://www.tamilnadutourism.tn.gov.in/architecture-details' }
          ]
        }
      ]
    },
    food: {
      title: 'Food',
      content: [
        {
          title: 'Thanjavur Cuisine',
          description: 'Traditional cuisine featuring rice-based dishes and local specialties.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/thanjavur-cuisine.jpg',
          links: [
            { title: 'Rice Dishes', url: 'https://www.tamilnadutourism.tn.gov.in/rice-dishes' },
            { title: 'Traditional Cooking', url: 'https://www.tamilnadutourism.tn.gov.in/traditional-cooking' }
          ]
        }
      ]
    },
    customs: {
      title: 'Customs',
      content: [
        {
          title: 'Temple Art Traditions',
          description: 'Rich traditions of temple art, music, and dance.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/temple-art.jpg',
          links: [
            { title: 'Art Workshops', url: 'https://www.tamilnadutourism.tn.gov.in/art-workshops' },
            { title: 'Cultural Performances', url: 'https://www.tamilnadutourism.tn.gov.in/cultural-performances' }
          ]
        }
      ]
    },
    festivals: {
      title: 'Festivals',
      content: [
        {
          title: 'Thanjavur Festival',
          description: 'Annual cultural festival celebrating the city\'s rich heritage.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/thanjavur-festival.jpg',
          links: [
            { title: 'Festival Schedule', url: 'https://www.tamilnadutourism.tn.gov.in/festival-schedule' },
            { title: 'Cultural Events', url: 'https://www.tamilnadutourism.tn.gov.in/cultural-events' }
          ]
        }
      ]
    },
    history: {
      title: 'History',
      content: [
        {
          title: 'Chola Capital',
          description: 'Thanjavur was the capital of the great Chola Empire.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/chola-capital.jpg',
          links: [
            { title: 'Chola History', url: 'https://www.tamilnadutourism.tn.gov.in/chola-history' },
            { title: 'Historical Sites', url: 'https://www.tamilnadutourism.tn.gov.in/historical-sites' }
          ]
        }
      ]
    }
  }
};

// Kumbakonam - Temple City
export const kumbakonamData: KarnatakaPOI = {
  id: 'kumbakonam_tamil_nadu',
  name: 'Kumbakonam',
  category: 'place',
  coordinates: { lat: 10.9577, lng: 79.3833 },
  description: 'Sacred city known for its numerous temples and religious significance.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: {
      title: 'Monuments',
      content: [
        {
          title: 'Sarangapani Temple',
          description: 'Ancient temple dedicated to Lord Vishnu, known for its architectural beauty.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/sarangapani-temple.jpg',
          links: [
            { title: 'Temple History', url: 'https://www.tamilnadutourism.tn.gov.in/temple-history' },
            { title: 'Religious Significance', url: 'https://www.tamilnadutourism.tn.gov.in/religious-significance' }
          ]
        }
      ]
    },
    food: {
      title: 'Food',
      content: [
        {
          title: 'Kumbakonam Cuisine',
          description: 'Traditional cuisine with emphasis on temple food and local specialties.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/kumbakonam-cuisine.jpg',
          links: [
            { title: 'Temple Food', url: 'https://www.tamilnadutourism.tn.gov.in/temple-food' },
            { title: 'Local Specialties', url: 'https://www.tamilnadutourism.tn.gov.in/local-specialties' }
          ]
        }
      ]
    },
    customs: {
      title: 'Customs',
      content: [
        {
          title: 'Religious Traditions',
          description: 'Rich religious traditions and temple rituals.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/religious-traditions.jpg',
          links: [
            { title: 'Temple Rituals', url: 'https://www.tamilnadutourism.tn.gov.in/temple-rituals' },
            { title: 'Religious Practices', url: 'https://www.tamilnadutourism.tn.gov.in/religious-practices' }
          ]
        }
      ]
    },
    festivals: {
      title: 'Festivals',
      content: [
        {
          title: 'Mahamaham Festival',
          description: 'Sacred festival celebrated once every 12 years with great devotion.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/mahamaham-festival.jpg',
          links: [
            { title: 'Festival Significance', url: 'https://www.tamilnadutourism.tn.gov.in/festival-significance' },
            { title: 'Religious Ceremonies', url: 'https://www.tamilnadutourism.tn.gov.in/religious-ceremonies' }
          ]
        }
      ]
    },
    history: {
      title: 'History',
      content: [
        {
          title: 'Temple City History',
          description: 'Rich history of temple construction and religious development.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/temple-city-history.jpg',
          links: [
            { title: 'Temple Architecture', url: 'https://www.tamilnadutourism.tn.gov.in/temple-architecture' },
            { title: 'Religious History', url: 'https://www.tamilnadutourism.tn.gov.in/religious-history' }
          ]
        }
      ]
    }
  }
};

export default [
  trichyData,
  salemData,
  tirunelveliData,
  velloreData,
  erodeData,
  thanjavurData,
  kumbakonamData
];
