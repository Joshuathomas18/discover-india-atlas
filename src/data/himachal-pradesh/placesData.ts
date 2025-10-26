// Himachal Pradesh Places Data
// Major cities with cultural information

import { KarnatakaPOI } from '../../types/database';

// Shimla - Queen of Hills
export const shimlaData: KarnatakaPOI = {
  id: 'shimla_himachal_pradesh',
  name: 'Shimla',
  category: 'place',
  coordinates: { lat: 31.1048, lng: 77.1734 },
  description: 'The capital city of Himachal Pradesh, known as the "Queen of Hills" for its scenic beauty and colonial architecture.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: {
      title: 'Monuments',
      content: [
        {
          title: 'Viceregal Lodge',
          description: 'Historic building that served as the summer residence of the British Viceroy.',
          image_url: 'https://www.himachaltourism.gov.in/viceregal-lodge.jpg',
          links: [
            { title: 'Historical Significance', url: 'https://www.himachaltourism.gov.in/historical-significance' },
            { title: 'Architecture Details', url: 'https://www.himachaltourism.gov.in/architecture-details' }
          ]
        },
        {
          title: 'Christ Church',
          description: 'Second oldest church in North India, built in neo-Gothic style.',
          image_url: 'https://www.himachaltourism.gov.in/christ-church.jpg',
          links: [
            { title: 'Church History', url: 'https://www.himachaltourism.gov.in/church-history' },
            { title: 'Architectural Style', url: 'https://www.himachaltourism.gov.in/architectural-style' }
          ]
        },
        {
          title: 'The Ridge',
          description: 'Famous open space in the heart of Shimla with colonial buildings.',
          image_url: 'https://www.himachaltourism.gov.in/the-ridge.jpg',
          links: [
            { title: 'Ridge Walk', url: 'https://www.himachaltourism.gov.in/ridge-walk' },
            { title: 'Colonial Heritage', url: 'https://www.himachaltourism.gov.in/colonial-heritage' }
          ]
        }
      ]
    },
    food: {
      title: 'Food',
      content: [
        {
          title: 'Himachali Cuisine',
          description: 'Traditional cuisine with local specialties like siddu, babru, and chana madra.',
          image_url: 'https://www.himachaltourism.gov.in/himachali-cuisine.jpg',
          links: [
            { title: 'Traditional Recipes', url: 'https://www.himachaltourism.gov.in/traditional-recipes' },
            { title: 'Local Restaurants', url: 'https://www.himachaltourism.gov.in/local-restaurants' }
          ]
        },
        {
          title: 'Street Food',
          description: 'Popular street food including momos, thukpa, and local snacks.',
          image_url: 'https://www.himachaltourism.gov.in/street-food.jpg',
          links: [
            { title: 'Street Food Tours', url: 'https://www.himachaltourism.gov.in/street-food-tours' },
            { title: 'Local Delicacies', url: 'https://www.himachaltourism.gov.in/local-delicacies' }
          ]
        },
        {
          title: 'Apple Products',
          description: 'Famous for apples and various apple-based products.',
          image_url: 'https://www.himachaltourism.gov.in/apple-products.jpg',
          links: [
            { title: 'Apple Orchards', url: 'https://www.himachaltourism.gov.in/apple-orchards' },
            { title: 'Apple Festival', url: 'https://www.himachaltourism.gov.in/apple-festival' }
          ]
        }
      ]
    },
    customs: {
      title: 'Customs',
      content: [
        {
          title: 'Himachali Culture',
          description: 'Rich cultural heritage with traditional music, dance, and festivals.',
          image_url: 'https://www.himachaltourism.gov.in/himachali-culture.jpg',
          links: [
            { title: 'Cultural Heritage', url: 'https://www.himachaltourism.gov.in/cultural-heritage' },
            { title: 'Traditional Arts', url: 'https://www.himachaltourism.gov.in/traditional-arts' }
          ]
        },
        {
          title: 'Colonial Heritage',
          description: 'Strong influence of British colonial architecture and culture.',
          image_url: 'https://www.himachaltourism.gov.in/colonial-heritage.jpg',
          links: [
            { title: 'Colonial Architecture', url: 'https://www.himachaltourism.gov.in/colonial-architecture' },
            { title: 'Historical Walking Tours', url: 'https://www.himachaltourism.gov.in/historical-tours' }
          ]
        },
        {
          title: 'Hill Station Culture',
          description: 'Unique hill station culture with relaxed lifestyle and scenic beauty.',
          image_url: 'https://www.himachaltourism.gov.in/hill-station-culture.jpg',
          links: [
            { title: 'Lifestyle', url: 'https://www.himachaltourism.gov.in/lifestyle' },
            { title: 'Scenic Beauty', url: 'https://www.himachaltourism.gov.in/scenic-beauty' }
          ]
        }
      ]
    },
    festivals: {
      title: 'Festivals',
      content: [
        {
          title: 'Shimla Summer Festival',
          description: 'Annual cultural festival celebrating local traditions and arts.',
          image_url: 'https://www.himachaltourism.gov.in/summer-festival.jpg',
          links: [
            { title: 'Festival Schedule', url: 'https://www.himachaltourism.gov.in/festival-schedule' },
            { title: 'Cultural Programs', url: 'https://www.himachaltourism.gov.in/cultural-programs' }
          ]
        },
        {
          title: 'Ice Skating Carnival',
          description: 'Unique winter festival featuring ice skating competitions.',
          image_url: 'https://www.himachaltourism.gov.in/ice-skating-carnival.jpg',
          links: [
            { title: 'Carnival Events', url: 'https://www.himachaltourism.gov.in/carnival-events' },
            { title: 'Ice Skating', url: 'https://www.himachaltourism.gov.in/ice-skating' }
          ]
        },
        {
          title: 'Local Festivals',
          description: 'Traditional festivals celebrating local culture and traditions.',
          image_url: 'https://www.himachaltourism.gov.in/local-festivals.jpg',
          links: [
            { title: 'Festival Calendar', url: 'https://www.himachaltourism.gov.in/festival-calendar' },
            { title: 'Cultural Celebrations', url: 'https://www.himachaltourism.gov.in/cultural-celebrations' }
          ]
        }
      ]
    },
    history: {
      title: 'History',
      content: [
        {
          title: 'British Summer Capital',
          description: 'Shimla served as the summer capital of British India.',
          image_url: 'https://www.himachaltourism.gov.in/british-summer-capital.jpg',
          links: [
            { title: 'Colonial History', url: 'https://www.himachaltourism.gov.in/colonial-history' },
            { title: 'British Legacy', url: 'https://www.himachaltourism.gov.in/british-legacy' }
          ]
        },
        {
          title: 'Hill Station Development',
          description: 'Development of Shimla as a major hill station destination.',
          image_url: 'https://www.himachaltourism.gov.in/hill-station-development.jpg',
          links: [
            { title: 'Development History', url: 'https://www.himachaltourism.gov.in/development-history' },
            { title: 'Tourism Growth', url: 'https://www.himachaltourism.gov.in/tourism-growth' }
          ]
        },
        {
          title: 'Independence Era',
          description: 'Shimla\'s role during India\'s independence movement.',
          image_url: 'https://www.himachaltourism.gov.in/independence-era.jpg',
          links: [
            { title: 'Freedom Struggle', url: 'https://www.himachaltourism.gov.in/freedom-struggle' },
            { title: 'Historical Significance', url: 'https://www.himachaltourism.gov.in/historical-significance' }
          ]
        }
      ]
    }
  }
};

// Manali - Adventure Capital
export const manaliData: KarnatakaPOI = {
  id: 'manali_himachal_pradesh',
  name: 'Manali',
  category: 'place',
  coordinates: { lat: 32.2396, lng: 77.1887 },
  description: 'Popular hill station known for adventure sports, scenic beauty, and as a gateway to Ladakh.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: {
      title: 'Monuments',
      content: [
        {
          title: 'Hadimba Temple',
          description: 'Ancient temple dedicated to Goddess Hadimba, built in pagoda style.',
          image_url: 'https://www.himachaltourism.gov.in/hadimba-temple.jpg',
          links: [
            { title: 'Temple History', url: 'https://www.himachaltourism.gov.in/temple-history' },
            { title: 'Religious Significance', url: 'https://www.himachaltourism.gov.in/religious-significance' }
          ]
        },
        {
          title: 'Manu Temple',
          description: 'Temple dedicated to Sage Manu, believed to be the creator of mankind.',
          image_url: 'https://www.himachaltourism.gov.in/manu-temple.jpg',
          links: [
            { title: 'Mythological Significance', url: 'https://www.himachaltourism.gov.in/mythological-significance' },
            { title: 'Temple Architecture', url: 'https://www.himachaltourism.gov.in/temple-architecture' }
          ]
        },
        {
          title: 'Old Manali',
          description: 'Historic part of Manali with traditional houses and narrow lanes.',
          image_url: 'https://www.himachaltourism.gov.in/old-manali.jpg',
          links: [
            { title: 'Heritage Walk', url: 'https://www.himachaltourism.gov.in/heritage-walk' },
            { title: 'Traditional Architecture', url: 'https://www.himachaltourism.gov.in/traditional-architecture' }
          ]
        }
      ]
    },
    food: {
      title: 'Food',
      content: [
        {
          title: 'Local Cuisine',
          description: 'Traditional Himachali cuisine with local specialties.',
          image_url: 'https://www.himachaltourism.gov.in/local-cuisine.jpg',
          links: [
            { title: 'Traditional Dishes', url: 'https://www.himachaltourism.gov.in/traditional-dishes' },
            { title: 'Local Restaurants', url: 'https://www.himachaltourism.gov.in/local-restaurants' }
          ]
        },
        {
          title: 'Tibetan Food',
          description: 'Influence of Tibetan cuisine with momos, thukpa, and butter tea.',
          image_url: 'https://www.himachaltourism.gov.in/tibetan-food.jpg',
          links: [
            { title: 'Tibetan Restaurants', url: 'https://www.himachaltourism.gov.in/tibetan-restaurants' },
            { title: 'Tibetan Culture', url: 'https://www.himachaltourism.gov.in/tibetan-culture' }
          ]
        },
        {
          title: 'Cafes and Bakeries',
          description: 'Popular cafes and bakeries offering continental and local food.',
          image_url: 'https://www.himachaltourism.gov.in/cafes-bakeries.jpg',
          links: [
            { title: 'Cafe Culture', url: 'https://www.himachaltourism.gov.in/cafe-culture' },
            { title: 'Best Cafes', url: 'https://www.himachaltourism.gov.in/best-cafes' }
          ]
        }
      ]
    },
    customs: {
      title: 'Customs',
      content: [
        {
          title: 'Adventure Culture',
          description: 'Strong culture of adventure sports and outdoor activities.',
          image_url: 'https://www.himachaltourism.gov.in/adventure-culture.jpg',
          links: [
            { title: 'Adventure Sports', url: 'https://www.himachaltourism.gov.in/adventure-sports' },
            { title: 'Outdoor Activities', url: 'https://www.himachaltourism.gov.in/outdoor-activities' }
          ]
        },
        {
          title: 'Tibetan Influence',
          description: 'Strong influence of Tibetan culture and traditions.',
          image_url: 'https://www.himachaltourism.gov.in/tibetan-influence.jpg',
          links: [
            { title: 'Tibetan Community', url: 'https://www.himachaltourism.gov.in/tibetan-community' },
            { title: 'Cultural Practices', url: 'https://www.himachaltourism.gov.in/cultural-practices' }
          ]
        },
        {
          title: 'Hippie Culture',
          description: 'Legacy of hippie culture with relaxed and alternative lifestyle.',
          image_url: 'https://www.himachaltourism.gov.in/hippie-culture.jpg',
          links: [
            { title: 'Alternative Lifestyle', url: 'https://www.himachaltourism.gov.in/alternative-lifestyle' },
            { title: 'Cultural Heritage', url: 'https://www.himachaltourism.gov.in/cultural-heritage' }
          ]
        }
      ]
    },
    festivals: {
      title: 'Festivals',
      content: [
        {
          title: 'Manali Winter Carnival',
          description: 'Annual winter festival celebrating local culture and traditions.',
          image_url: 'https://www.himachaltourism.gov.in/winter-carnival.jpg',
          links: [
            { title: 'Carnival Events', url: 'https://www.himachaltourism.gov.in/carnival-events' },
            { title: 'Winter Activities', url: 'https://www.himachaltourism.gov.in/winter-activities' }
          ]
        },
        {
          title: 'Local Festivals',
          description: 'Traditional festivals celebrating local culture and religious traditions.',
          image_url: 'https://www.himachaltourism.gov.in/local-festivals.jpg',
          links: [
            { title: 'Festival Calendar', url: 'https://www.himachaltourism.gov.in/festival-calendar' },
            { title: 'Religious Celebrations', url: 'https://www.himachaltourism.gov.in/religious-celebrations' }
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
          image_url: 'https://www.himachaltourism.gov.in/ancient-heritage.jpg',
          links: [
            { title: 'Mythological References', url: 'https://www.himachaltourism.gov.in/mythological-references' },
            { title: 'Historical Sites', url: 'https://www.himachaltourism.gov.in/historical-sites' }
          ]
        },
        {
          title: 'Tourism Development',
          description: 'Development of Manali as a major tourist destination.',
          image_url: 'https://www.himachaltourism.gov.in/tourism-development.jpg',
          links: [
            { title: 'Tourism History', url: 'https://www.himachaltourism.gov.in/tourism-history' },
            { title: 'Destination Development', url: 'https://www.himachaltourism.gov.in/destination-development' }
          ]
        }
      ]
    }
  }
};

// Dharamshala - Little Lhasa
export const dharamshalaData: KarnatakaPOI = {
  id: 'dharamshala_himachal_pradesh',
  name: 'Dharamshala',
  category: 'place',
  coordinates: { lat: 32.2190, lng: 76.3234 },
  description: 'Known as "Little Lhasa" for its large Tibetan community and as the residence of the Dalai Lama.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: {
      title: 'Monuments',
      content: [
        {
          title: 'Namgyal Monastery',
          description: 'Personal monastery of the Dalai Lama, center of Tibetan Buddhism.',
          image_url: 'https://www.himachaltourism.gov.in/namgyal-monastery.jpg',
          links: [
            { title: 'Monastery History', url: 'https://www.himachaltourism.gov.in/monastery-history' },
            { title: 'Religious Significance', url: 'https://www.himachaltourism.gov.in/religious-significance' }
          ]
        },
        {
          title: 'Tibetan Museum',
          description: 'Museum showcasing Tibetan culture, history, and the Dalai Lama\'s life.',
          image_url: 'https://www.himachaltourism.gov.in/tibetan-museum.jpg',
          links: [
            { title: 'Museum Collections', url: 'https://www.himachaltourism.gov.in/museum-collections' },
            { title: 'Cultural Exhibits', url: 'https://www.himachaltourism.gov.in/cultural-exhibits' }
          ]
        },
        {
          title: 'St. John Church',
          description: 'Historic church built during the British period.',
          image_url: 'https://www.himachaltourism.gov.in/st-john-church.jpg',
          links: [
            { title: 'Church History', url: 'https://www.himachaltourism.gov.in/church-history' },
            { title: 'Architectural Style', url: 'https://www.himachaltourism.gov.in/architectural-style' }
          ]
        }
      ]
    },
    food: {
      title: 'Food',
      content: [
        {
          title: 'Tibetan Cuisine',
          description: 'Authentic Tibetan cuisine including momos, thukpa, and butter tea.',
          image_url: 'https://www.himachaltourism.gov.in/tibetan-cuisine.jpg',
          links: [
            { title: 'Tibetan Restaurants', url: 'https://www.himachaltourism.gov.in/tibetan-restaurants' },
            { title: 'Traditional Recipes', url: 'https://www.himachaltourism.gov.in/traditional-recipes' }
          ]
        },
        {
          title: 'Local Cuisine',
          description: 'Traditional Himachali cuisine with local specialties.',
          image_url: 'https://www.himachaltourism.gov.in/local-cuisine.jpg',
          links: [
            { title: 'Local Dishes', url: 'https://www.himachaltourism.gov.in/local-dishes' },
            { title: 'Traditional Cooking', url: 'https://www.himachaltourism.gov.in/traditional-cooking' }
          ]
        },
        {
          title: 'International Food',
          description: 'Diverse international cuisine influenced by the multicultural community.',
          image_url: 'https://www.himachaltourism.gov.in/international-food.jpg',
          links: [
            { title: 'International Restaurants', url: 'https://www.himachaltourism.gov.in/international-restaurants' },
            { title: 'Multicultural Cuisine', url: 'https://www.himachaltourism.gov.in/multicultural-cuisine' }
          ]
        }
      ]
    },
    customs: {
      title: 'Customs',
      content: [
        {
          title: 'Tibetan Culture',
          description: 'Strong Tibetan cultural influence with monasteries, prayer flags, and traditions.',
          image_url: 'https://www.himachaltourism.gov.in/tibetan-culture.jpg',
          links: [
            { title: 'Tibetan Traditions', url: 'https://www.himachaltourism.gov.in/tibetan-traditions' },
            { title: 'Cultural Practices', url: 'https://www.himachaltourism.gov.in/cultural-practices' }
          ]
        },
        {
          title: 'Buddhist Practices',
          description: 'Rich Buddhist practices and spiritual traditions.',
          image_url: 'https://www.himachaltourism.gov.in/buddhist-practices.jpg',
          links: [
            { title: 'Buddhist Centers', url: 'https://www.himachaltourism.gov.in/buddhist-centers' },
            { title: 'Spiritual Practices', url: 'https://www.himachaltourism.gov.in/spiritual-practices' }
          ]
        },
        {
          title: 'Multicultural Community',
          description: 'Diverse community with Tibetan, Indian, and international influences.',
          image_url: 'https://www.himachaltourism.gov.in/multicultural-community.jpg',
          links: [
            { title: 'Community Diversity', url: 'https://www.himachaltourism.gov.in/community-diversity' },
            { title: 'Cultural Exchange', url: 'https://www.himachaltourism.gov.in/cultural-exchange' }
          ]
        }
      ]
    },
    festivals: {
      title: 'Festivals',
      content: [
        {
          title: 'Tibetan Festivals',
          description: 'Traditional Tibetan festivals including Losar and other celebrations.',
          image_url: 'https://www.himachaltourism.gov.in/tibetan-festivals.jpg',
          links: [
            { title: 'Losar Festival', url: 'https://www.himachaltourism.gov.in/losar-festival' },
            { title: 'Festival Calendar', url: 'https://www.himachaltourism.gov.in/festival-calendar' }
          ]
        },
        {
          title: 'Cultural Festivals',
          description: 'Various cultural festivals celebrating local and Tibetan traditions.',
          image_url: 'https://www.himachaltourism.gov.in/cultural-festivals.jpg',
          links: [
            { title: 'Festival Events', url: 'https://www.himachaltourism.gov.in/festival-events' },
            { title: 'Cultural Programs', url: 'https://www.himachaltourism.gov.in/cultural-programs' }
          ]
        }
      ]
    },
    history: {
      title: 'History',
      content: [
        {
          title: 'Tibetan Settlement',
          description: 'History of Tibetan settlement and the establishment of the Tibetan government-in-exile.',
          image_url: 'https://www.himachaltourism.gov.in/tibetan-settlement.jpg',
          links: [
            { title: 'Settlement History', url: 'https://www.himachaltourism.gov.in/settlement-history' },
            { title: 'Tibetan Government', url: 'https://www.himachaltourism.gov.in/tibetan-government' }
          ]
        },
        {
          title: 'Dalai Lama\'s Residence',
          description: 'Dharamshala as the residence of the Dalai Lama and center of Tibetan Buddhism.',
          image_url: 'https://www.himachaltourism.gov.in/dalai-lama-residence.jpg',
          links: [
            { title: 'Dalai Lama\'s Life', url: 'https://www.himachaltourism.gov.in/dalai-lama-life' },
            { title: 'Spiritual Center', url: 'https://www.himachaltourism.gov.in/spiritual-center' }
          ]
        }
      ]
    }
  }
};

export default [shimlaData, manaliData, dharamshalaData];
