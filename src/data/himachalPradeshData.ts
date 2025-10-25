// Himachal Pradesh Data Collection Script
// Comprehensive data for Himachal Pradesh state with 8 places and 5 categories each

export const himachalPradeshData = {
  // State Level Data
  state: {
    id: 'himachal_pradesh',
    name: 'Himachal Pradesh',
    capital: 'Shimla',
    description: 'Himachal Pradesh, known as the "Land of Snow," is a state in northern India famous for its scenic beauty, hill stations, and adventure tourism. It offers breathtaking mountain views, ancient temples, and a peaceful way of life.',
    coordinates: { lat: 31.1048, lng: 77.1734 },
    best_time_to_visit: 'March to June, September to November',
    languages: ['Hindi', 'Pahari', 'English'],
    population: '6.9 million',
    area_sq_km: 55673,
    banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
  },

  // Places Data (8 places)
  places: [
    {
      id: 'shimla_himachal_pradesh',
      state_id: 'himachal_pradesh',
      name: 'Shimla',
      type: 'city',
      nickname: 'Queen of Hills',
      description: 'The capital city of Himachal Pradesh, Shimla is a charming hill station known for its colonial architecture, pleasant climate, and scenic beauty. It was the summer capital of British India.',
      coordinates: { lat: 31.1048, lng: 77.1734 },
      population: '170,000',
      best_time_to_visit: 'March to June, September to November',
      how_to_reach: {
        by_air: 'Shimla Airport (SLV)',
        by_train: 'Kalka Railway Station (90 km away)',
        by_road: 'NH 5, NH 22',
        by_bus: 'Himachal Pradesh State Transport buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'manali_himachal_pradesh',
      state_id: 'himachal_pradesh',
      name: 'Manali',
      type: 'hill_station',
      nickname: 'Valley of the Gods',
      description: 'A popular hill station famous for its snow-capped mountains, adventure sports, and romantic atmosphere. Manali is a perfect destination for honeymooners and adventure enthusiasts.',
      coordinates: { lat: 32.2396, lng: 77.1887 },
      population: '8,000',
      best_time_to_visit: 'April to June, October to February',
      how_to_reach: {
        by_air: 'Kullu Airport (50 km away)',
        by_train: 'Chandigarh Railway Station (300 km away)',
        by_road: 'NH 3, NH 21',
        by_bus: 'Himachal Pradesh State Transport buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'dharamshala_himachal_pradesh',
      state_id: 'himachal_pradesh',
      name: 'Dharamshala',
      type: 'city',
      nickname: 'Little Lhasa',
      description: 'Famous as the residence of the Dalai Lama, Dharamshala is a spiritual center with Tibetan culture, monasteries, and beautiful mountain views.',
      coordinates: { lat: 32.2190, lng: 76.3234 },
      population: '22,000',
      best_time_to_visit: 'March to June, September to November',
      how_to_reach: {
        by_air: 'Gaggal Airport (15 km away)',
        by_train: 'Pathankot Railway Station (85 km away)',
        by_road: 'NH 154',
        by_bus: 'Himachal Pradesh State Transport buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'dalhousie_himachal_pradesh',
      state_id: 'himachal_pradesh',
      name: 'Dalhousie',
      type: 'hill_station',
      nickname: 'Switzerland of India',
      description: 'A charming hill station with colonial architecture, pine forests, and panoramic views. Dalhousie offers a peaceful retreat in the lap of nature.',
      coordinates: { lat: 32.5333, lng: 75.9833 },
      population: '7,000',
      best_time_to_visit: 'March to June, September to November',
      how_to_reach: {
        by_air: 'Pathankot Airport (80 km away)',
        by_train: 'Pathankot Railway Station (80 km away)',
        by_road: 'NH 154',
        by_bus: 'Himachal Pradesh State Transport buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'kasauli_himachal_pradesh',
      state_id: 'himachal_pradesh',
      name: 'Kasauli',
      type: 'hill_station',
      nickname: 'Quiet Hill Station',
      description: 'A peaceful hill station known for its colonial charm, walking trails, and serene atmosphere. Kasauli offers a perfect escape from city life.',
      coordinates: { lat: 30.9000, lng: 76.9667 },
      population: '5,000',
      best_time_to_visit: 'March to June, September to November',
      how_to_reach: {
        by_air: 'Chandigarh Airport (70 km away)',
        by_train: 'Kalka Railway Station (50 km away)',
        by_road: 'NH 22',
        by_bus: 'Himachal Pradesh State Transport buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'spiti_valley_himachal_pradesh',
      state_id: 'himachal_pradesh',
      name: 'Spiti Valley',
      type: 'heritage_site',
      nickname: 'Little Tibet',
      description: 'A remote valley famous for its ancient monasteries, stunning landscapes, and Tibetan culture. Spiti Valley offers an authentic Himalayan experience.',
      coordinates: { lat: 32.2500, lng: 78.0000 },
      population: '10,000',
      best_time_to_visit: 'May to October',
      how_to_reach: {
        by_air: 'Kullu Airport (200 km away)',
        by_train: 'Chandigarh Railway Station (400 km away)',
        by_road: 'NH 22, State Highway 30',
        by_bus: 'Himachal Pradesh State Transport buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'kullu_himachal_pradesh',
      state_id: 'himachal_pradesh',
      name: 'Kullu',
      type: 'city',
      nickname: 'Valley of Gods',
      description: 'Famous for its apple orchards, temples, and adventure sports, Kullu is a beautiful valley town with rich cultural heritage.',
      coordinates: { lat: 31.9578, lng: 77.1094 },
      population: '18,000',
      best_time_to_visit: 'April to June, September to November',
      how_to_reach: {
        by_air: 'Kullu Airport (10 km away)',
        by_train: 'Chandigarh Railway Station (250 km away)',
        by_road: 'NH 3, NH 21',
        by_bus: 'Himachal Pradesh State Transport buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'chamba_himachal_pradesh',
      state_id: 'himachal_pradesh',
      name: 'Chamba',
      type: 'city',
      nickname: 'Temple Town',
      description: 'An ancient town famous for its temples, handicrafts, and cultural heritage. Chamba offers a glimpse into Himachal\'s rich history and traditions.',
      coordinates: { lat: 32.5667, lng: 76.1333 },
      population: '20,000',
      best_time_to_visit: 'March to June, September to November',
      how_to_reach: {
        by_air: 'Pathankot Airport (120 km away)',
        by_train: 'Pathankot Railway Station (120 km away)',
        by_road: 'NH 154',
        by_bus: 'Himachal Pradesh State Transport buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    }
  ],

  // Cultural Items Data (5 categories per place)
  culturalItems: [
    // SHIMLA CULTURAL ITEMS
    {
      id: 'christ_church_shimla',
      place_id: 'shimla_himachal_pradesh',
      state_id: 'himachal_pradesh',
      category: 'monuments',
      name: 'Christ Church',
      description: 'Historic Anglican church with beautiful stained glass windows and colonial architecture.',
      details: 'Christ Church is Shimla\'s most famous landmark and one of the oldest churches in North India. Built in 1857, it showcases beautiful neo-Gothic architecture with stunning stained glass windows. The church is known for its peaceful atmosphere and historical significance. It\'s a popular spot for photography and offers a glimpse into Shimla\'s colonial past. The church is still active and holds regular services.',
      coordinates: { lat: 31.1048, lng: 77.1734 },
      actions: {
        primary: {
          label: 'Visit Information',
          type: 'external_link',
          url: 'https://www.himachaltourism.gov.in/attractions/christ-church'
        },
        secondary: {
          label: 'Historical Tour',
          type: 'modal',
          content: 'Learn about the colonial history, architecture, and cultural significance of Christ Church.'
        }
      },
      opening_hours: '8:00 AM - 6:00 PM',
      best_time: 'Morning hours for peaceful visit',
      duration: '30 minutes'
    },
    {
      id: 'ridge_shimla',
      place_id: 'shimla_himachal_pradesh',
      state_id: 'himachal_pradesh',
      category: 'monuments',
      name: 'The Ridge',
      description: 'Famous open space in Shimla with colonial buildings and panoramic mountain views.',
      details: 'The Ridge is Shimla\'s most famous open space, located in the heart of the city. It\'s surrounded by colonial buildings including Christ Church, Town Hall, and the Gaiety Theatre. The Ridge offers stunning panoramic views of the surrounding mountains and valleys. It\'s a popular gathering spot for locals and tourists, especially during festivals and cultural events. The Ridge is also famous for its annual Summer Festival.',
      coordinates: { lat: 31.1048, lng: 77.1734 },
      actions: {
        primary: {
          label: 'Ridge Guide',
          type: 'external_link',
          url: 'https://www.himachaltourism.gov.in/attractions/the-ridge'
        },
        secondary: {
          label: 'Cultural Events',
          type: 'modal',
          content: 'Experience cultural events and festivals held at The Ridge throughout the year.'
        }
      },
      opening_hours: '24/7',
      best_time: 'Evening for sunset views',
      duration: '1 hour'
    },
    {
      id: 'mall_road_shimla',
      place_id: 'shimla_himachal_pradesh',
      state_id: 'himachal_pradesh',
      category: 'monuments',
      name: 'Mall Road',
      description: 'Famous shopping street with colonial architecture, shops, and restaurants.',
      details: 'Mall Road is Shimla\'s main shopping street, known for its colonial architecture and vibrant atmosphere. The road is lined with shops, restaurants, cafes, and colonial buildings. It\'s a pedestrian-only street, making it perfect for leisurely walks and shopping. Mall Road offers a mix of traditional Himachali handicrafts and modern products. It\'s a must-visit for anyone exploring Shimla\'s colonial heritage.',
      coordinates: { lat: 31.1048, lng: 77.1734 },
      actions: {
        primary: {
          label: 'Shopping Guide',
          type: 'external_link',
          url: 'https://www.himachaltourism.gov.in/attractions/mall-road'
        },
        secondary: {
          label: 'Walking Tour',
          type: 'modal',
          content: 'Join guided walking tours of Mall Road to explore shops, restaurants, and colonial architecture.'
        }
      },
      opening_hours: '9:00 AM - 9:00 PM',
      best_time: 'Evening for shopping and dining',
      duration: '2-3 hours'
    },
    {
      id: 'siddu_shimla',
      place_id: 'shimla_himachal_pradesh',
      state_id: 'himachal_pradesh',
      category: 'food',
      name: 'Siddu',
      description: 'Traditional Himachali bread made with wheat flour and stuffed with local ingredients.',
      details: 'Siddu is a traditional Himachali bread that\'s popular throughout the state. Made with wheat flour and stuffed with local ingredients like walnuts, poppy seeds, and spices, it\'s a delicious and nutritious dish. Siddu is typically served with ghee and local chutneys. It\'s a staple food in Himachal Pradesh and is often prepared during festivals and special occasions. The bread has a unique taste and texture that reflects the local culinary traditions.',
      actions: {
        primary: {
          label: 'Find Restaurants',
          type: 'places_search',
          query: 'authentic Siddu restaurants Shimla'
        },
        secondary: {
          label: 'Cooking Class',
          type: 'external_link',
          url: 'https://www.himachaltourism.gov.in/activities/cooking-classes'
        }
      },
      best_time: 'Breakfast or dinner',
      duration: '20-30 minutes'
    },
    {
      id: 'chana_madra_shimla',
      place_id: 'shimla_himachal_pradesh',
      state_id: 'himachal_pradesh',
      category: 'food',
      name: 'Chana Madra',
      description: 'Traditional Himachali curry made with chickpeas and yogurt, a local delicacy.',
      details: 'Chana Madra is a traditional Himachali curry made with chickpeas and yogurt. The dish is known for its rich, creamy texture and aromatic spices. It\'s a popular dish in Himachal Pradesh and is often served during festivals and special occasions. Chana Madra is typically served with rice or traditional bread. The dish reflects the local culinary traditions and is a must-try for anyone visiting Himachal Pradesh.',
      actions: {
        primary: {
          label: 'Find Restaurants',
          type: 'places_search',
          query: 'traditional Chana Madra restaurants Shimla'
        },
        secondary: {
          label: 'Recipe Guide',
          type: 'modal',
          content: 'Learn to make authentic Chana Madra with traditional Himachali cooking methods.'
        }
      },
      best_time: 'Lunch or dinner',
      duration: '30-45 minutes'
    },
    {
      id: 'nati_dance_shimla',
      place_id: 'shimla_himachal_pradesh',
      state_id: 'himachal_pradesh',
      category: 'customs',
      name: 'Nati Dance',
      description: 'Traditional Himachali folk dance performed in groups with rhythmic movements.',
      details: 'Nati is a traditional Himachali folk dance that\'s popular throughout the state. The dance is performed in groups with rhythmic movements and traditional music. It\'s often performed during festivals, weddings, and cultural events. Nati dance reflects the local culture and traditions of Himachal Pradesh. The dance is known for its energetic movements and colorful costumes. It\'s an important part of Himachal\'s cultural heritage.',
      actions: {
        primary: {
          label: 'Watch Performance',
          type: 'external_link',
          url: 'https://www.himachaltourism.gov.in/activities/cultural-performances'
        },
        secondary: {
          label: 'Learn Nati',
          type: 'modal',
          content: 'Join Nati dance workshops to learn basic movements and cultural significance.'
        }
      },
      best_time: 'Festival seasons and cultural events',
      duration: '30-45 minutes'
    },
    {
      id: 'kullu_dussehra_shimla',
      place_id: 'shimla_himachal_pradesh',
      state_id: 'himachal_pradesh',
      category: 'festivals',
      name: 'Kullu Dussehra',
      description: 'Grand festival celebrated with processions, cultural events, and traditional rituals.',
      details: 'Kullu Dussehra is one of Himachal Pradesh\'s most important festivals, celebrated with great enthusiasm in the Kullu valley. The festival lasts for seven days and includes grand processions, cultural performances, and traditional rituals. The highlight is the procession of local deities from various temples. The festival attracts thousands of visitors from across India and showcases the rich cultural heritage of Himachal Pradesh.',
      actions: {
        primary: {
          label: 'Festival Schedule',
          type: 'external_link',
          url: 'https://www.himachaltourism.gov.in/events/kullu-dussehra'
        },
        secondary: {
          label: 'Procession Viewing',
          type: 'modal',
          content: 'Get premium viewing spots for the Kullu Dussehra procession with cultural performances.'
        }
      },
      best_time: 'October (7 days festival)',
      duration: '7 days festival'
    },
    {
      id: 'british_colonial_shimla',
      place_id: 'shimla_himachal_pradesh',
      state_id: 'himachal_pradesh',
      category: 'history',
      name: 'British Colonial Period',
      description: 'Shimla\'s history as the summer capital of British India and its colonial legacy.',
      details: 'Shimla served as the summer capital of British India from 1864 to 1939, making it an important center of colonial administration. The British built numerous colonial buildings, churches, and infrastructure that still exist today. Shimla\'s colonial architecture reflects the British influence on the city\'s development. The city was a popular retreat for British officials and their families during the hot summer months. This colonial legacy has shaped Shimla\'s unique character and cultural heritage.',
      actions: {
        primary: {
          label: 'Colonial Heritage',
          type: 'external_link',
          url: 'https://www.himachaltourism.gov.in/attractions/colonial-heritage'
        },
        secondary: {
          label: 'Heritage Walk',
          type: 'modal',
          content: 'Join guided heritage walks to explore Shimla\'s colonial buildings and learn about British history.'
        }
      },
      best_time: 'Morning hours for heritage tours',
      duration: '2-3 hours'
    }
  ]
};

export default himachalPradeshData;
