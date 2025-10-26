// Tamil Nadu Places Data
// Major cities with cultural information

import { KarnatakaPOI } from '../../types/database';

// Chennai - Capital of Tamil Nadu
export const chennaiData: KarnatakaPOI = {
  id: 'chennai_tamil_nadu',
  name: 'Chennai',
  category: 'place',
  coordinates: { lat: 13.0827, lng: 80.2707 },
  description: 'The capital city of Tamil Nadu, known for its rich cultural heritage, beautiful beaches, and vibrant arts scene.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: {
      title: 'Monuments',
      content: [
        {
          title: 'Kapaleeshwarar Temple',
          description: 'A magnificent Dravidian temple dedicated to Lord Shiva, known for its beautiful architecture and religious significance.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/kapaleeshwarar-temple.jpg',
          links: [
            { title: 'Temple Timings', url: 'https://www.tamilnadutourism.tn.gov.in/timings' },
            { title: 'Virtual Tour', url: 'https://www.tamilnadutourism.tn.gov.in/virtual-tour' }
          ]
        },
        {
          title: 'Fort St. George',
          description: 'The first English fortress in India, built in 1644, now houses the Tamil Nadu Legislative Assembly.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/fort-st-george.jpg',
          links: [
            { title: 'Museum Visit', url: 'https://www.tamilnadutourism.tn.gov.in/museum' },
            { title: 'Historical Guide', url: 'https://www.tamilnadutourism.tn.gov.in/guide' }
          ]
        },
        {
          title: 'Marina Beach',
          description: 'The second longest beach in the world, stretching 13 km along the Bay of Bengal.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/marina-beach.jpg',
          links: [
            { title: 'Beach Activities', url: 'https://www.tamilnadutourism.tn.gov.in/activities' },
            { title: 'Sunset Viewing', url: 'https://www.tamilnadutourism.tn.gov.in/sunset' }
          ]
        }
      ]
    },
    food: {
      title: 'Food',
      content: [
        {
          title: 'Idli & Sambar',
          description: 'Soft rice cakes served with spicy lentil soup, a staple breakfast dish.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/idli-sambar.jpg',
          links: [
            { title: 'Best Restaurants', url: 'https://www.tamilnadutourism.tn.gov.in/restaurants' },
            { title: 'Cooking Classes', url: 'https://www.tamilnadutourism.tn.gov.in/cooking' }
          ]
        },
        {
          title: 'Dosa',
          description: 'Crispy crepes made from fermented rice and lentil batter, served with chutneys.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/dosa.jpg',
          links: [
            { title: 'Dosa Varieties', url: 'https://www.tamilnadutourism.tn.gov.in/varieties' },
            { title: 'Street Food Tours', url: 'https://www.tamilnadutourism.tn.gov.in/street-food' }
          ]
        },
        {
          title: 'Filter Coffee',
          description: 'Traditional South Indian coffee brewed using a metal filter, known for its strong aroma.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/filter-coffee.jpg',
          links: [
            { title: 'Coffee Culture', url: 'https://www.tamilnadutourism.tn.gov.in/coffee-culture' },
            { title: 'Best Cafes', url: 'https://www.tamilnadutourism.tn.gov.in/cafes' }
          ]
        }
      ]
    },
    customs: {
      title: 'Customs',
      content: [
        {
          title: 'Kolam',
          description: 'Traditional floor art made with rice flour, drawn daily at doorsteps for prosperity.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/kolam.jpg',
          links: [
            { title: 'Learn Kolam Art', url: 'https://www.tamilnadutourism.tn.gov.in/kolam-art' },
            { title: 'Kolam Competitions', url: 'https://www.tamilnadutourism.tn.gov.in/competitions' }
          ]
        },
        {
          title: 'Bharatanatyam',
          description: 'Classical dance form originating from Tamil Nadu, known for its grace and expressions.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/bharatanatyam.jpg',
          links: [
            { title: 'Dance Classes', url: 'https://www.tamilnadutourism.tn.gov.in/dance-classes' },
            { title: 'Performances', url: 'https://www.tamilnadutourism.tn.gov.in/performances' }
          ]
        },
        {
          title: 'Tamil Language',
          description: 'One of the oldest languages in the world, with rich literary traditions.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/tamil-language.jpg',
          links: [
            { title: 'Language Learning', url: 'https://www.tamilnadutourism.tn.gov.in/learn-tamil' },
            { title: 'Tamil Literature', url: 'https://www.tamilnadutourism.tn.gov.in/literature' }
          ]
        }
      ]
    },
    festivals: {
      title: 'Festivals',
      content: [
        {
          title: 'Pongal',
          description: 'Harvest festival celebrated for four days, marking the end of winter solstice.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/pongal.jpg',
          links: [
            { title: 'Pongal Celebrations', url: 'https://www.tamilnadutourism.tn.gov.in/pongal-celebrations' },
            { title: 'Traditional Recipes', url: 'https://www.tamilnadutourism.tn.gov.in/pongal-recipes' }
          ]
        },
        {
          title: 'Tamil New Year',
          description: 'Celebrated in mid-April, marking the beginning of the Tamil calendar year.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/tamil-new-year.jpg',
          links: [
            { title: 'New Year Traditions', url: 'https://www.tamilnadutourism.tn.gov.in/traditions' },
            { title: 'Cultural Programs', url: 'https://www.tamilnadutourism.tn.gov.in/cultural-programs' }
          ]
        },
        {
          title: 'Karthigai Deepam',
          description: 'Festival of lights celebrated in November-December, lighting thousands of lamps.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/karthigai-deepam.jpg',
          links: [
            { title: 'Light Festival', url: 'https://www.tamilnadutourism.tn.gov.in/light-festival' },
            { title: 'Temple Visits', url: 'https://www.tamilnadutourism.tn.gov.in/temple-visits' }
          ]
        }
      ]
    },
    history: {
      title: 'History',
      content: [
        {
          title: 'Chola Dynasty',
          description: 'One of the longest-ruling dynasties in world history, known for maritime trade and temple architecture.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/chola-dynasty.jpg',
          links: [
            { title: 'Chola Temples', url: 'https://www.tamilnadutourism.tn.gov.in/chola-temples' },
            { title: 'Maritime History', url: 'https://www.tamilnadutourism.tn.gov.in/maritime-history' }
          ]
        },
        {
          title: 'British Colonial Period',
          description: 'Chennai was the first British settlement in India, established as Madras in 1639.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/british-colonial.jpg',
          links: [
            { title: 'Colonial Architecture', url: 'https://www.tamilnadutourism.tn.gov.in/colonial-architecture' },
            { title: 'Historical Walking Tours', url: 'https://www.tamilnadutourism.tn.gov.in/walking-tours' }
          ]
        },
        {
          title: 'Independence Movement',
          description: 'Tamil Nadu played a significant role in India\'s freedom struggle with leaders like Subramania Bharati.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/independence-movement.jpg',
          links: [
            { title: 'Freedom Fighters', url: 'https://www.tamilnadutourism.tn.gov.in/freedom-fighters' },
            { title: 'Historical Museums', url: 'https://www.tamilnadutourism.tn.gov.in/museums' }
          ]
        }
      ]
    }
  }
};

// Madurai - Temple City
export const maduraiData: KarnatakaPOI = {
  id: 'madurai_tamil_nadu',
  name: 'Madurai',
  category: 'place',
  coordinates: { lat: 9.9252, lng: 78.1198 },
  description: 'Ancient city known as the "Athens of the East" and home to the magnificent Meenakshi Amman Temple.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: {
      title: 'Monuments',
      content: [
        {
          title: 'Meenakshi Amman Temple',
          description: 'A historic Hindu temple dedicated to Goddess Meenakshi and Lord Sundareswarar.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/meenakshi-temple.jpg',
          links: [
            { title: 'Temple Guide', url: 'https://www.tamilnadutourism.tn.gov.in/temple-guide' },
            { title: 'Virtual Tour', url: 'https://www.tamilnadutourism.tn.gov.in/virtual-tour' }
          ]
        },
        {
          title: 'Thirumalai Nayakkar Palace',
          description: '17th-century palace showcasing Indo-Saracenic architecture.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/thirumalai-palace.jpg',
          links: [
            { title: 'Palace History', url: 'https://www.tamilnadutourism.tn.gov.in/palace-history' },
            { title: 'Light & Sound Show', url: 'https://www.tamilnadutourism.tn.gov.in/light-sound' }
          ]
        }
      ]
    },
    food: {
      title: 'Food',
      content: [
        {
          title: 'Madurai Jigarthanda',
          description: 'A refreshing cold drink made with milk, almond gum, and rose syrup.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/jigarthanda.jpg',
          links: [
            { title: 'Best Jigarthanda Shops', url: 'https://www.tamilnadutourism.tn.gov.in/jigarthanda-shops' },
            { title: 'Recipe Guide', url: 'https://www.tamilnadutourism.tn.gov.in/recipe' }
          ]
        },
        {
          title: 'Parotta & Kurma',
          description: 'Layered flatbread served with spicy curry, a popular street food.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/parotta-kurma.jpg',
          links: [
            { title: 'Street Food Tours', url: 'https://www.tamilnadutourism.tn.gov.in/street-food' },
            { title: 'Cooking Classes', url: 'https://www.tamilnadutourism.tn.gov.in/cooking' }
          ]
        }
      ]
    },
    customs: {
      title: 'Customs',
      content: [
        {
          title: 'Temple Rituals',
          description: 'Daily temple rituals and ceremonies that have been performed for centuries.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/temple-rituals.jpg',
          links: [
            { title: 'Ritual Schedule', url: 'https://www.tamilnadutourism.tn.gov.in/ritual-schedule' },
            { title: 'Participate in Rituals', url: 'https://www.tamilnadutourism.tn.gov.in/participate' }
          ]
        }
      ]
    },
    festivals: {
      title: 'Festivals',
      content: [
        {
          title: 'Meenakshi Thirukalyanam',
          description: 'Annual festival celebrating the divine wedding of Meenakshi and Sundareswarar.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/meenakshi-wedding.jpg',
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
          description: 'Madurai was the capital of the ancient Pandya kingdom, known for its trade and culture.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/pandya-kingdom.jpg',
          links: [
            { title: 'Pandya History', url: 'https://www.tamilnadutourism.tn.gov.in/pandya-history' },
            { title: 'Archaeological Sites', url: 'https://www.tamilnadutourism.tn.gov.in/archaeological-sites' }
          ]
        }
      ]
    }
  }
};

// Coimbatore - Manchester of South India
export const coimbatoreData: KarnatakaPOI = {
  id: 'coimbatore_tamil_nadu',
  name: 'Coimbatore',
  category: 'place',
  coordinates: { lat: 11.0168, lng: 76.9558 },
  description: 'Industrial city known as the "Manchester of South India" for its textile industry.',
  icon_color: '#FF6B6B',
  tabs: {
    monuments: {
      title: 'Monuments',
      content: [
        {
          title: 'Perur Pateeswarar Temple',
          description: 'Ancient temple dedicated to Lord Shiva, known for its musical pillars.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/perur-temple.jpg',
          links: [
            { title: 'Temple History', url: 'https://www.tamilnadutourism.tn.gov.in/temple-history' },
            { title: 'Musical Pillars', url: 'https://www.tamilnadutourism.tn.gov.in/musical-pillars' }
          ]
        }
      ]
    },
    food: {
      title: 'Food',
      content: [
        {
          title: 'Kongunadu Cuisine',
          description: 'Traditional cuisine of the Kongu region, known for its unique flavors.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/kongunadu-cuisine.jpg',
          links: [
            { title: 'Traditional Recipes', url: 'https://www.tamilnadutourism.tn.gov.in/recipes' },
            { title: 'Food Tours', url: 'https://www.tamilnadutourism.tn.gov.in/food-tours' }
          ]
        }
      ]
    },
    customs: {
      title: 'Customs',
      content: [
        {
          title: 'Textile Traditions',
          description: 'Rich heritage of handloom weaving and textile craftsmanship.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/textile-traditions.jpg',
          links: [
            { title: 'Handloom Tours', url: 'https://www.tamilnadutourism.tn.gov.in/handloom-tours' },
            { title: 'Weaving Workshops', url: 'https://www.tamilnadutourism.tn.gov.in/weaving-workshops' }
          ]
        }
      ]
    },
    festivals: {
      title: 'Festivals',
      content: [
        {
          title: 'Kongu Nadu Festival',
          description: 'Cultural festival celebrating the traditions of the Kongu region.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/kongu-festival.jpg',
          links: [
            { title: 'Festival Events', url: 'https://www.tamilnadutourism.tn.gov.in/festival-events' },
            { title: 'Cultural Performances', url: 'https://www.tamilnadutourism.tn.gov.in/performances' }
          ]
        }
      ]
    },
    history: {
      title: 'History',
      content: [
        {
          title: 'Industrial Heritage',
          description: 'History of textile industry and industrial development in Coimbatore.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/industrial-heritage.jpg',
          links: [
            { title: 'Industrial Tours', url: 'https://www.tamilnadutourism.tn.gov.in/industrial-tours' },
            { title: 'Textile Museums', url: 'https://www.tamilnadutourism.tn.gov.in/textile-museums' }
          ]
        }
      ]
    }
  }
};

export default [chennaiData, maduraiData, coimbatoreData];
