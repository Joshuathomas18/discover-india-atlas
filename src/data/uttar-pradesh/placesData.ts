// Uttar Pradesh Places Data
// Major cities with cultural information

import { KarnatakaPOI } from '../../types/database';

// Lucknow - City of Nawabs
export const lucknowData: KarnatakaPOI = {
  id: 'lucknow_uttar_pradesh',
  name: 'Lucknow',
  category: 'place',
  coordinates: { lat: 26.8467, lng: 80.9462 },
  description: 'The capital city of Uttar Pradesh, known as the "City of Nawabs" for its rich Mughal heritage and culture.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: {
      title: 'Monuments',
      content: [
        {
          title: 'Bara Imambara',
          description: 'Historic monument built by Nawab Asaf-ud-Daula, known for its unique architecture without pillars.',
          image_url: 'https://www.uptourism.gov.in/bara-imambara.jpg',
          links: [
            { title: 'Architecture Details', url: 'https://www.uptourism.gov.in/architecture-details' },
            { title: 'Historical Significance', url: 'https://www.uptourism.gov.in/historical-significance' }
          ]
        },
        {
          title: 'Chota Imambara',
          description: 'Beautiful monument known as the "Palace of Lights" for its elaborate decorations.',
          image_url: 'https://www.uptourism.gov.in/chota-imambara.jpg',
          links: [
            { title: 'Monument Guide', url: 'https://www.uptourism.gov.in/monument-guide' },
            { title: 'Light Display', url: 'https://www.uptourism.gov.in/light-display' }
          ]
        },
        {
          title: 'Rumi Darwaza',
          description: 'Magnificent gateway built in the style of Constantinople\'s architecture.',
          image_url: 'https://www.uptourism.gov.in/rumi-darwaza.jpg',
          links: [
            { title: 'Gateway History', url: 'https://www.uptourism.gov.in/gateway-history' },
            { title: 'Architectural Style', url: 'https://www.uptourism.gov.in/architectural-style' }
          ]
        }
      ]
    },
    food: {
      title: 'Food',
      content: [
        {
          title: 'Lucknowi Biryani',
          description: 'Famous Awadhi biryani with aromatic spices and tender meat.',
          image_url: 'https://www.uptourism.gov.in/lucknowi-biryani.jpg',
          links: [
            { title: 'Best Biryani Places', url: 'https://www.uptourism.gov.in/biryani-places' },
            { title: 'Biryani Recipe', url: 'https://www.uptourism.gov.in/biryani-recipe' }
          ]
        },
        {
          title: 'Kebabs',
          description: 'Famous Lucknowi kebabs including galouti, shami, and seekh kebabs.',
          image_url: 'https://www.uptourism.gov.in/kebabs.jpg',
          links: [
            { title: 'Kebab Varieties', url: 'https://www.uptourism.gov.in/kebab-varieties' },
            { title: 'Traditional Recipes', url: 'https://www.uptourism.gov.in/traditional-recipes' }
          ]
        },
        {
          title: 'Nawabi Cuisine',
          description: 'Rich Awadhi cuisine with royal recipes and elaborate preparations.',
          image_url: 'https://www.uptourism.gov.in/nawabi-cuisine.jpg',
          links: [
            { title: 'Royal Recipes', url: 'https://www.uptourism.gov.in/royal-recipes' },
            { title: 'Cooking Classes', url: 'https://www.uptourism.gov.in/cooking-classes' }
          ]
        }
      ]
    },
    customs: {
      title: 'Customs',
      content: [
        {
          title: 'Nawabi Culture',
          description: 'Rich Nawabi culture with refined manners, poetry, and arts.',
          image_url: 'https://www.uptourism.gov.in/nawabi-culture.jpg',
          links: [
            { title: 'Cultural Heritage', url: 'https://www.uptourism.gov.in/cultural-heritage' },
            { title: 'Traditional Arts', url: 'https://www.uptourism.gov.in/traditional-arts' }
          ]
        },
        {
          title: 'Urdu Poetry',
          description: 'Lucknow is famous for its Urdu poetry and literary traditions.',
          image_url: 'https://www.uptourism.gov.in/urdu-poetry.jpg',
          links: [
            { title: 'Poetry Sessions', url: 'https://www.uptourism.gov.in/poetry-sessions' },
            { title: 'Literary Events', url: 'https://www.uptourism.gov.in/literary-events' }
          ]
        },
        {
          title: 'Chikankari Embroidery',
          description: 'Traditional hand embroidery technique unique to Lucknow.',
          image_url: 'https://www.uptourism.gov.in/chikankari.jpg',
          links: [
            { title: 'Embroidery Workshops', url: 'https://www.uptourism.gov.in/embroidery-workshops' },
            { title: 'Chikankari Shopping', url: 'https://www.uptourism.gov.in/chikankari-shopping' }
          ]
        }
      ]
    },
    festivals: {
      title: 'Festivals',
      content: [
        {
          title: 'Muharram',
          description: 'Sacred festival commemorating the martyrdom of Imam Hussain.',
          image_url: 'https://www.uptourism.gov.in/muharram.jpg',
          links: [
            { title: 'Religious Processions', url: 'https://www.uptourism.gov.in/religious-processions' },
            { title: 'Community Events', url: 'https://www.uptourism.gov.in/community-events' }
          ]
        },
        {
          title: 'Lucknow Festival',
          description: 'Annual cultural festival celebrating the city\'s heritage and arts.',
          image_url: 'https://www.uptourism.gov.in/lucknow-festival.jpg',
          links: [
            { title: 'Festival Schedule', url: 'https://www.uptourism.gov.in/festival-schedule' },
            { title: 'Cultural Programs', url: 'https://www.uptourism.gov.in/cultural-programs' }
          ]
        },
        {
          title: 'Eid Celebrations',
          description: 'Grand celebrations of Eid with traditional feasts and community gatherings.',
          image_url: 'https://www.uptourism.gov.in/eid-celebrations.jpg',
          links: [
            { title: 'Eid Traditions', url: 'https://www.uptourism.gov.in/eid-traditions' },
            { title: 'Community Feasts', url: 'https://www.uptourism.gov.in/community-feasts' }
          ]
        }
      ]
    },
    history: {
      title: 'History',
      content: [
        {
          title: 'Nawabi Era',
          description: 'Rich history of the Nawabs of Awadh and their cultural contributions.',
          image_url: 'https://www.uptourism.gov.in/nawabi-era.jpg',
          links: [
            { title: 'Nawab History', url: 'https://www.uptourism.gov.in/nawab-history' },
            { title: 'Awadh Kingdom', url: 'https://www.uptourism.gov.in/awadh-kingdom' }
          ]
        },
        {
          title: 'Independence Movement',
          description: 'Lucknow played a significant role in India\'s freedom struggle.',
          image_url: 'https://www.uptourism.gov.in/independence-movement.jpg',
          links: [
            { title: 'Freedom Fighters', url: 'https://www.uptourism.gov.in/freedom-fighters' },
            { title: 'Historical Sites', url: 'https://www.uptourism.gov.in/historical-sites' }
          ]
        },
        {
          title: 'Cultural Renaissance',
          description: 'Lucknow was a center of cultural renaissance during the Mughal period.',
          image_url: 'https://www.uptourism.gov.in/cultural-renaissance.jpg',
          links: [
            { title: 'Cultural Centers', url: 'https://www.uptourism.gov.in/cultural-centers' },
            { title: 'Artistic Heritage', url: 'https://www.uptourism.gov.in/artistic-heritage' }
          ]
        }
      ]
    }
  }
};

// Agra - City of Taj Mahal
export const agraData: KarnatakaPOI = {
  id: 'agra_uttar_pradesh',
  name: 'Agra',
  category: 'place',
  coordinates: { lat: 27.1767, lng: 78.0081 },
  description: 'Famous for the iconic Taj Mahal, one of the Seven Wonders of the World.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: {
      title: 'Monuments',
      content: [
        {
          title: 'Taj Mahal',
          description: 'UNESCO World Heritage Site, a magnificent white marble mausoleum built by Shah Jahan.',
          image_url: 'https://www.uptourism.gov.in/taj-mahal.jpg',
          links: [
            { title: 'UNESCO Information', url: 'https://www.uptourism.gov.in/unesco-info' },
            { title: 'Architecture Details', url: 'https://www.uptourism.gov.in/architecture-details' }
          ]
        },
        {
          title: 'Agra Fort',
          description: 'UNESCO World Heritage Site, a massive red sandstone fort built by Akbar.',
          image_url: 'https://www.uptourism.gov.in/agra-fort.jpg',
          links: [
            { title: 'Fort History', url: 'https://www.uptourism.gov.in/fort-history' },
            { title: 'Palace Complex', url: 'https://www.uptourism.gov.in/palace-complex' }
          ]
        },
        {
          title: 'Fatehpur Sikri',
          description: 'UNESCO World Heritage Site, the abandoned Mughal capital city.',
          image_url: 'https://www.uptourism.gov.in/fatehpur-sikri.jpg',
          links: [
            { title: 'City History', url: 'https://www.uptourism.gov.in/city-history' },
            { title: 'Architectural Marvels', url: 'https://www.uptourism.gov.in/architectural-marvels' }
          ]
        }
      ]
    },
    food: {
      title: 'Food',
      content: [
        {
          title: 'Petha',
          description: 'Famous Agra sweet made from ash gourd, available in various flavors.',
          image_url: 'https://www.uptourism.gov.in/petha.jpg',
          links: [
            { title: 'Petha Varieties', url: 'https://www.uptourism.gov.in/petha-varieties' },
            { title: 'Best Petha Shops', url: 'https://www.uptourism.gov.in/petha-shops' }
          ]
        },
        {
          title: 'Mughlai Cuisine',
          description: 'Rich Mughlai cuisine with aromatic spices and royal recipes.',
          image_url: 'https://www.uptourism.gov.in/mughlai-cuisine.jpg',
          links: [
            { title: 'Mughlai Restaurants', url: 'https://www.uptourism.gov.in/mughlai-restaurants' },
            { title: 'Royal Recipes', url: 'https://www.uptourism.gov.in/royal-recipes' }
          ]
        },
        {
          title: 'Bedai and Jalebi',
          description: 'Traditional breakfast combination of spicy bedai with sweet jalebi.',
          image_url: 'https://www.uptourism.gov.in/bedai-jalebi.jpg',
          links: [
            { title: 'Traditional Breakfast', url: 'https://www.uptourism.gov.in/traditional-breakfast' },
            { title: 'Street Food Tours', url: 'https://www.uptourism.gov.in/street-food-tours' }
          ]
        }
      ]
    },
    customs: {
      title: 'Customs',
      content: [
        {
          title: 'Mughal Heritage',
          description: 'Rich Mughal heritage reflected in architecture, arts, and culture.',
          image_url: 'https://www.uptourism.gov.in/mughal-heritage.jpg',
          links: [
            { title: 'Heritage Tours', url: 'https://www.uptourism.gov.in/heritage-tours' },
            { title: 'Cultural Practices', url: 'https://www.uptourism.gov.in/cultural-practices' }
          ]
        },
        {
          title: 'Marble Inlay Work',
          description: 'Traditional craft of marble inlay work, famous in Agra.',
          image_url: 'https://www.uptourism.gov.in/marble-inlay.jpg',
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
          title: 'Taj Mahotsav',
          description: 'Annual cultural festival celebrating the heritage of Agra and Taj Mahal.',
          image_url: 'https://www.uptourism.gov.in/taj-mahotsav.jpg',
          links: [
            { title: 'Festival Events', url: 'https://www.uptourism.gov.in/festival-events' },
            { title: 'Cultural Performances', url: 'https://www.uptourism.gov.in/cultural-performances' }
          ]
        },
        {
          title: 'Urs Festival',
          description: 'Religious festival commemorating Sufi saints with music and prayers.',
          image_url: 'https://www.uptourism.gov.in/urs-festival.jpg',
          links: [
            { title: 'Sufi Music', url: 'https://www.uptourism.gov.in/sufi-music' },
            { title: 'Religious Ceremonies', url: 'https://www.uptourism.gov.in/religious-ceremonies' }
          ]
        }
      ]
    },
    history: {
      title: 'History',
      content: [
        {
          title: 'Mughal Capital',
          description: 'Agra served as the capital of the Mughal Empire during the reign of Akbar.',
          image_url: 'https://www.uptourism.gov.in/mughal-capital.jpg',
          links: [
            { title: 'Mughal History', url: 'https://www.uptourism.gov.in/mughal-history' },
            { title: 'Empire Timeline', url: 'https://www.uptourism.gov.in/empire-timeline' }
          ]
        },
        {
          title: 'Love Story of Taj',
          description: 'The romantic story behind the construction of Taj Mahal.',
          image_url: 'https://www.uptourism.gov.in/taj-love-story.jpg',
          links: [
            { title: 'Shah Jahan & Mumtaz', url: 'https://www.uptourism.gov.in/shah-jahan-mumtaz' },
            { title: 'Romantic Legends', url: 'https://www.uptourism.gov.in/romantic-legends' }
          ]
        }
      ]
    }
  }
};

// Varanasi - Spiritual Capital
export const varanasiData: KarnatakaPOI = {
  id: 'varanasi_uttar_pradesh',
  name: 'Varanasi',
  category: 'place',
  coordinates: { lat: 25.3176, lng: 82.9739 },
  description: 'The spiritual capital of India, one of the oldest continuously inhabited cities in the world.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: {
      title: 'Monuments',
      content: [
        {
          title: 'Kashi Vishwanath Temple',
          description: 'One of the most sacred Hindu temples dedicated to Lord Shiva.',
          image_url: 'https://www.uptourism.gov.in/kashi-vishwanath.jpg',
          links: [
            { title: 'Temple History', url: 'https://www.uptourism.gov.in/temple-history' },
            { title: 'Religious Significance', url: 'https://www.uptourism.gov.in/religious-significance' }
          ]
        },
        {
          title: 'Ghats of Varanasi',
          description: 'Famous riverfront steps along the Ganges, used for religious ceremonies.',
          image_url: 'https://www.uptourism.gov.in/ghats-varanasi.jpg',
          links: [
            { title: 'Ghat Guide', url: 'https://www.uptourism.gov.in/ghat-guide' },
            { title: 'Religious Ceremonies', url: 'https://www.uptourism.gov.in/religious-ceremonies' }
          ]
        },
        {
          title: 'Sarnath',
          description: 'Buddhist pilgrimage site where Buddha gave his first sermon.',
          image_url: 'https://www.uptourism.gov.in/sarnath.jpg',
          links: [
            { title: 'Buddhist Heritage', url: 'https://www.uptourism.gov.in/buddhist-heritage' },
            { title: 'Archaeological Sites', url: 'https://www.uptourism.gov.in/archaeological-sites' }
          ]
        }
      ]
    },
    food: {
      title: 'Food',
      content: [
        {
          title: 'Banarasi Paan',
          description: 'Famous betel leaf preparation, a traditional after-meal digestive.',
          image_url: 'https://www.uptourism.gov.in/banarasi-paan.jpg',
          links: [
            { title: 'Paan Varieties', url: 'https://www.uptourism.gov.in/paan-varieties' },
            { title: 'Traditional Preparation', url: 'https://www.uptourism.gov.in/traditional-preparation' }
          ]
        },
        {
          title: 'Kachori Sabzi',
          description: 'Traditional breakfast of spicy kachoris served with potato curry.',
          image_url: 'https://www.uptourism.gov.in/kachori-sabzi.jpg',
          links: [
            { title: 'Best Kachori Shops', url: 'https://www.uptourism.gov.in/kachori-shops' },
            { title: 'Traditional Recipe', url: 'https://www.uptourism.gov.in/traditional-recipe' }
          ]
        },
        {
          title: 'Malaiyo',
          description: 'Seasonal dessert made from milk foam, available only in winters.',
          image_url: 'https://www.uptourism.gov.in/malaiyo.jpg',
          links: [
            { title: 'Seasonal Delicacy', url: 'https://www.uptourism.gov.in/seasonal-delicacy' },
            { title: 'Local Specialties', url: 'https://www.uptourism.gov.in/local-specialties' }
          ]
        }
      ]
    },
    customs: {
      title: 'Customs',
      content: [
        {
          title: 'Spiritual Practices',
          description: 'Ancient spiritual practices and rituals performed on the ghats.',
          image_url: 'https://www.uptourism.gov.in/spiritual-practices.jpg',
          links: [
            { title: 'Religious Rituals', url: 'https://www.uptourism.gov.in/religious-rituals' },
            { title: 'Spiritual Guidance', url: 'https://www.uptourism.gov.in/spiritual-guidance' }
          ]
        },
        {
          title: 'Ganga Aarti',
          description: 'Sacred fire ceremony performed every evening on the ghats.',
          image_url: 'https://www.uptourism.gov.in/ganga-aarti.jpg',
          links: [
            { title: 'Aarti Schedule', url: 'https://www.uptourism.gov.in/aarti-schedule' },
            { title: 'Ceremony Details', url: 'https://www.uptourism.gov.in/ceremony-details' }
          ]
        },
        {
          title: 'Silk Weaving',
          description: 'Traditional Banarasi silk weaving, famous for intricate designs.',
          image_url: 'https://www.uptourism.gov.in/silk-weaving.jpg',
          links: [
            { title: 'Weaving Workshops', url: 'https://www.uptourism.gov.in/weaving-workshops' },
            { title: 'Silk Shopping', url: 'https://www.uptourism.gov.in/silk-shopping' }
          ]
        }
      ]
    },
    festivals: {
      title: 'Festivals',
      content: [
        {
          title: 'Dev Deepawali',
          description: 'Festival of lights celebrated on the ghats with thousands of lamps.',
          image_url: 'https://www.uptourism.gov.in/dev-deepawali.jpg',
          links: [
            { title: 'Festival Celebrations', url: 'https://www.uptourism.gov.in/festival-celebrations' },
            { title: 'Light Display', url: 'https://www.uptourism.gov.in/light-display' }
          ]
        },
        {
          title: 'Maha Shivratri',
          description: 'Grand celebration of Lord Shiva with elaborate rituals.',
          image_url: 'https://www.uptourism.gov.in/maha-shivratri.jpg',
          links: [
            { title: 'Religious Ceremonies', url: 'https://www.uptourism.gov.in/religious-ceremonies' },
            { title: 'Temple Festivities', url: 'https://www.uptourism.gov.in/temple-festivities' }
          ]
        }
      ]
    },
    history: {
      title: 'History',
      content: [
        {
          title: 'Ancient City',
          description: 'One of the oldest continuously inhabited cities in the world.',
          image_url: 'https://www.uptourism.gov.in/ancient-city.jpg',
          links: [
            { title: 'Historical Timeline', url: 'https://www.uptourism.gov.in/historical-timeline' },
            { title: 'Archaeological Discoveries', url: 'https://www.uptourism.gov.in/archaeological-discoveries' }
          ]
        },
        {
          title: 'Spiritual Center',
          description: 'Center of Hindu spirituality and learning for thousands of years.',
          image_url: 'https://www.uptourism.gov.in/spiritual-center.jpg',
          links: [
            { title: 'Spiritual Heritage', url: 'https://www.uptourism.gov.in/spiritual-heritage' },
            { title: 'Religious Significance', url: 'https://www.uptourism.gov.in/religious-significance' }
          ]
        }
      ]
    }
  }
};

export default [lucknowData, agraData, varanasiData];
