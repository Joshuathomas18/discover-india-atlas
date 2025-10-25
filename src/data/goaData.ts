// Goa Data Collection Script
// Comprehensive data for Goa state with 8 places and 5 categories each

export const goaData = {
  // State Level Data
  state: {
    id: 'goa',
    name: 'Goa',
    capital: 'Panaji',
    description: 'Goa, India\'s smallest state, is famous for its pristine beaches, Portuguese colonial architecture, vibrant nightlife, and unique blend of Indian and Western cultures. Known as the "Pearl of the Orient," Goa offers a perfect mix of relaxation, adventure, and cultural exploration.',
    coordinates: { lat: 15.2993, lng: 74.1240 },
    best_time_to_visit: 'November to March',
    languages: ['Konkani', 'English', 'Hindi', 'Portuguese'],
    population: '1.5 million',
    area_sq_km: 3702,
    banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
  },

  // Places Data (8 places)
  places: [
    {
      id: 'panaji_goa',
      state_id: 'goa',
      name: 'Panaji',
      type: 'city',
      nickname: 'Panjim',
      description: 'The capital city of Goa, Panaji is known for its Portuguese colonial architecture, colorful houses, and vibrant markets. The city offers a perfect blend of old-world charm and modern amenities.',
      coordinates: { lat: 15.4909, lng: 73.8278 },
      population: '114,000',
      best_time_to_visit: 'November to March',
      how_to_reach: {
        by_air: 'Dabolim Airport (30 km away)',
        by_train: 'Thivim Railway Station (25 km away)',
        by_road: 'NH 66, NH 748',
        by_bus: 'Kadamba Transport Corporation buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'margao_goa',
      state_id: 'goa',
      name: 'Margao',
      type: 'city',
      nickname: 'Commercial Capital',
      description: 'The commercial capital of Goa, Margao is known for its bustling markets, Portuguese architecture, and cultural heritage. It\'s a great place to experience authentic Goan culture.',
      coordinates: { lat: 15.2730, lng: 73.9583 },
      population: '87,000',
      best_time_to_visit: 'November to March',
      how_to_reach: {
        by_air: 'Dabolim Airport (20 km away)',
        by_train: 'Margao Railway Station',
        by_road: 'NH 66',
        by_bus: 'Kadamba Transport Corporation buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'old_goa_goa',
      state_id: 'goa',
      name: 'Old Goa',
      type: 'heritage_site',
      nickname: 'Rome of the East',
      description: 'A UNESCO World Heritage Site, Old Goa is famous for its magnificent churches and convents built during the Portuguese colonial period. It was once the capital of Portuguese India.',
      coordinates: { lat: 15.5000, lng: 73.9167 },
      population: '5,000',
      best_time_to_visit: 'November to March',
      how_to_reach: {
        by_air: 'Dabolim Airport (25 km away)',
        by_train: 'Karmali Railway Station (3 km away)',
        by_road: 'NH 66',
        by_bus: 'Kadamba Transport Corporation buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'anjuna_goa',
      state_id: 'goa',
      name: 'Anjuna',
      type: 'beach',
      nickname: 'Hippie Paradise',
      description: 'Famous for its Wednesday flea market, trance parties, and bohemian culture, Anjuna is a popular destination for backpackers and party enthusiasts.',
      coordinates: { lat: 15.5833, lng: 73.7500 },
      population: '12,000',
      best_time_to_visit: 'November to March',
      how_to_reach: {
        by_air: 'Dabolim Airport (40 km away)',
        by_train: 'Thivim Railway Station (20 km away)',
        by_road: 'NH 66, State Highway 1',
        by_bus: 'Kadamba Transport Corporation buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'palolem_goa',
      state_id: 'goa',
      name: 'Palolem',
      type: 'beach',
      nickname: 'Paradise Beach',
      description: 'A pristine crescent-shaped beach known for its calm waters, beach shacks, and dolphin spotting tours. Palolem offers a peaceful retreat away from the crowds.',
      coordinates: { lat: 15.0167, lng: 74.0167 },
      population: '8,000',
      best_time_to_visit: 'November to March',
      how_to_reach: {
        by_air: 'Dabolim Airport (60 km away)',
        by_train: 'Canacona Railway Station (5 km away)',
        by_road: 'NH 66, State Highway 1',
        by_bus: 'Kadamba Transport Corporation buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'dudhsagar_goa',
      state_id: 'goa',
      name: 'Dudhsagar Falls',
      type: 'heritage_site',
      nickname: 'Sea of Milk',
      description: 'A magnificent four-tiered waterfall located on the Mandovi River, Dudhsagar Falls is one of India\'s tallest waterfalls and a popular tourist attraction.',
      coordinates: { lat: 15.3167, lng: 74.2500 },
      population: '500',
      best_time_to_visit: 'June to September (monsoon season)',
      how_to_reach: {
        by_air: 'Dabolim Airport (80 km away)',
        by_train: 'Castle Rock Railway Station (15 km away)',
        by_road: 'NH 4A, State Highway 1',
        by_bus: 'Kadamba Transport Corporation buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'chapora_goa',
      state_id: 'goa',
      name: 'Chapora',
      type: 'beach',
      nickname: 'Dil Chahta Hai Beach',
      description: 'Famous for Chapora Fort and its appearance in Bollywood movies, Chapora offers stunning sunset views and a peaceful beach experience.',
      coordinates: { lat: 15.6000, lng: 73.7500 },
      population: '3,000',
      best_time_to_visit: 'November to March',
      how_to_reach: {
        by_air: 'Dabolim Airport (45 km away)',
        by_train: 'Thivim Railway Station (15 km away)',
        by_road: 'NH 66, State Highway 1',
        by_bus: 'Kadamba Transport Corporation buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'arambol_goa',
      state_id: 'goa',
      name: 'Arambol',
      type: 'beach',
      nickname: 'Hippie Beach',
      description: 'A laid-back beach destination popular with backpackers, Arambol offers a bohemian atmosphere, beach yoga, and a freshwater lake.',
      coordinates: { lat: 15.7000, lng: 73.7000 },
      population: '2,000',
      best_time_to_visit: 'November to March',
      how_to_reach: {
        by_air: 'Dabolim Airport (50 km away)',
        by_train: 'Thivim Railway Station (25 km away)',
        by_road: 'NH 66, State Highway 1',
        by_bus: 'Kadamba Transport Corporation buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    }
  ],

  // Cultural Items Data (5 categories per place)
  culturalItems: [
    // PANAJI CULTURAL ITEMS
    {
      id: 'basilica_bom_jesus_panaji',
      place_id: 'panaji_goa',
      state_id: 'goa',
      category: 'monuments',
      name: 'Basilica of Bom Jesus',
      description: 'UNESCO World Heritage Site housing the mortal remains of St. Francis Xavier.',
      details: 'The Basilica of Bom Jesus is a UNESCO World Heritage Site and one of Goa\'s most famous churches. Built in 1605, it houses the mortal remains of St. Francis Xavier, the patron saint of Goa. The church is renowned for its Baroque architecture and the silver casket containing the saint\'s body. Every 10 years, the body is displayed to the public during the Exposition of St. Francis Xavier, attracting thousands of pilgrims from around the world.',
      coordinates: { lat: 15.5000, lng: 73.9167 },
      actions: {
        primary: {
          label: 'Visit Information',
          type: 'external_link',
          url: 'https://www.goatourism.gov.in/attractions/basilica-bom-jesus'
        },
        secondary: {
          label: 'Guided Tour',
          type: 'modal',
          content: 'Join guided tours to learn about the history, architecture, and religious significance of the Basilica of Bom Jesus.'
        }
      },
      opening_hours: '9:00 AM - 6:30 PM',
      best_time: 'Morning hours for peaceful visit',
      duration: '1-2 hours'
    },
    {
      id: 'se_cathedral_panaji',
      place_id: 'panaji_goa',
      state_id: 'goa',
      category: 'monuments',
      name: 'Se Cathedral',
      description: 'One of the largest churches in Asia, built in Portuguese Gothic style.',
      details: 'Se Cathedral is one of the largest churches in Asia and a magnificent example of Portuguese Gothic architecture. Built between 1562 and 1619, it was dedicated to St. Catherine of Alexandria. The cathedral features a massive bell tower with a golden bell that can be heard from miles away. The interior is adorned with beautiful altars, paintings, and the famous Golden Bell. The church is part of the UNESCO World Heritage Site of Old Goa.',
      coordinates: { lat: 15.5000, lng: 73.9167 },
      actions: {
        primary: {
          label: 'Visit Information',
          type: 'external_link',
          url: 'https://www.goatourism.gov.in/attractions/se-cathedral'
        },
        secondary: {
          label: 'Mass Schedule',
          type: 'modal',
          content: 'Check mass timings and special services at Se Cathedral. Includes information about religious ceremonies and festivals.'
        }
      },
      opening_hours: '7:30 AM - 6:30 PM',
      best_time: 'Morning mass or evening hours',
      duration: '1 hour'
    },
    {
      id: 'church_of_st_francis_panaji',
      place_id: 'panaji_goa',
      state_id: 'goa',
      category: 'monuments',
      name: 'Church of St. Francis of Assisi',
      description: 'Historic church with beautiful Portuguese architecture and museum.',
      details: 'The Church of St. Francis of Assisi is a historic church built in 1661, featuring beautiful Portuguese architecture. The church is known for its intricate carvings, beautiful altars, and the attached Archaeological Museum. The museum houses artifacts from the Portuguese period, including paintings, sculptures, and historical documents. The church\'s architecture reflects the Manueline style with Gothic influences, making it a must-visit for history and architecture enthusiasts.',
      coordinates: { lat: 15.5000, lng: 73.9167 },
      actions: {
        primary: {
          label: 'Museum Visit',
          type: 'external_link',
          url: 'https://www.goatourism.gov.in/attractions/church-st-francis-assisi'
        },
        secondary: {
          label: 'Archaeological Tour',
          type: 'modal',
          content: 'Explore the Archaeological Museum with guided tours covering Portuguese colonial artifacts and historical significance.'
        }
      },
      opening_hours: '9:00 AM - 5:00 PM',
      entry_fee: 'INR 10 (Indians), INR 100 (Foreigners)',
      best_time: 'Morning hours for museum visit',
      duration: '1-2 hours'
    },
    {
      id: 'fish_curry_goa_panaji',
      place_id: 'panaji_goa',
      state_id: 'goa',
      category: 'food',
      name: 'Goan Fish Curry',
      description: 'Traditional coconut-based fish curry with tangy and spicy flavors.',
      details: 'Goan Fish Curry is the signature dish of Goa, made with fresh fish cooked in a coconut milk and tamarind-based gravy. The curry is flavored with traditional Goan spices like kokum, red chilies, and curry leaves. The tangy and spicy flavors perfectly complement the tender fish. This dish is typically served with steamed rice and is a must-try for seafood lovers visiting Goa.',
      actions: {
        primary: {
          label: 'Find Restaurants',
          type: 'places_search',
          query: 'traditional Goan fish curry restaurants Panaji'
        },
        secondary: {
          label: 'Cooking Class',
          type: 'external_link',
          url: 'https://www.goatourism.gov.in/activities/cooking-classes'
        }
      },
      best_time: 'Lunch or dinner',
      duration: '30-45 minutes'
    },
    {
      id: 'bebinca_panaji',
      place_id: 'panaji_goa',
      state_id: 'goa',
      category: 'food',
      name: 'Bebinca',
      description: 'Traditional Goan layered dessert made with coconut milk and eggs.',
      details: 'Bebinca is a traditional Goan dessert consisting of multiple layers of cake made with coconut milk, eggs, sugar, and flour. This labor-intensive dessert is typically prepared during Christmas and special occasions. Each layer is baked separately, creating a beautiful layered effect. The dessert has a rich, creamy texture and is often served with ice cream or fresh fruit.',
      actions: {
        primary: {
          label: 'Find Sweet Shops',
          type: 'places_search',
          query: 'traditional Goan sweets bebinca Panaji'
        },
        secondary: {
          label: 'Recipe Guide',
          type: 'modal',
          content: 'Learn to make authentic Bebinca at home with traditional Goan cooking methods and ingredients.'
        }
      },
      best_time: 'After meals or tea time',
      duration: '15-20 minutes'
    },
    {
      id: 'fugdi_dance_panaji',
      place_id: 'panaji_goa',
      state_id: 'goa',
      category: 'customs',
      name: 'Fugdi Dance',
      description: 'Traditional Goan folk dance performed by women during festivals.',
      details: 'Fugdi is a traditional Goan folk dance performed by women during festivals and celebrations. The dance involves rhythmic movements and clapping, creating a lively and energetic performance. Dancers form circles and move in synchronized patterns while singing traditional songs. The dance is often performed during Ganesh Chaturthi and other local festivals, showcasing Goan cultural heritage.',
      actions: {
        primary: {
          label: 'Watch Performance',
          type: 'external_link',
          url: 'https://www.goatourism.gov.in/activities/cultural-performances'
        },
        secondary: {
          label: 'Learn Dance',
          type: 'modal',
          content: 'Join Fugdi dance workshops to learn traditional movements, songs, and cultural significance.'
        }
      },
      best_time: 'Festival seasons and cultural events',
      duration: '30-45 minutes'
    },
    {
      id: 'dhalo_dance_panaji',
      place_id: 'panaji_goa',
      state_id: 'goa',
      category: 'customs',
      name: 'Dhalo Dance',
      description: 'Traditional Goan dance performed during harvest festivals.',
      details: 'Dhalo is a traditional Goan dance performed during harvest festivals and special occasions. The dance involves women forming lines and performing synchronized movements while singing traditional songs. The dance celebrates the harvest season and expresses gratitude to nature. Dhalo is an important part of Goan cultural heritage and is often performed in villages during festivals.',
      actions: {
        primary: {
          label: 'Cultural Shows',
          type: 'external_link',
          url: 'https://www.goatourism.gov.in/events/cultural-festivals'
        },
        secondary: {
          label: 'Village Tour',
          type: 'modal',
          content: 'Join village tours to witness authentic Dhalo performances and experience traditional Goan village life.'
        }
      },
      best_time: 'Harvest season and festivals',
      duration: '30-45 minutes'
    },
    {
      id: 'carnival_goa_panaji',
      place_id: 'panaji_goa',
      state_id: 'goa',
      category: 'festivals',
      name: 'Goa Carnival',
      description: 'Colorful pre-Lenten festival with parades, music, and celebrations.',
      details: 'Goa Carnival is a vibrant pre-Lenten festival celebrated with great enthusiasm across Goa. The festival features colorful parades, music, dance, and street performances. People dress in costumes and masks, creating a festive atmosphere. The carnival includes float parades, traditional music, and local delicacies. It\'s a unique blend of Portuguese and Goan cultures, making it a must-experience event for visitors.',
      actions: {
        primary: {
          label: 'Festival Schedule',
          type: 'external_link',
          url: 'https://www.goatourism.gov.in/events/goa-carnival'
        },
        secondary: {
          label: 'Parade Viewing',
          type: 'modal',
          content: 'Get premium viewing spots for the carnival parade with refreshments and cultural performances.'
        }
      },
      best_time: 'February-March (pre-Lenten period)',
      duration: '3 days festival'
    },
    {
      id: 'feast_st_francis_panaji',
      place_id: 'panaji_goa',
      state_id: 'goa',
      category: 'festivals',
      name: 'Feast of St. Francis Xavier',
      description: 'Religious festival celebrating the patron saint of Goa.',
      details: 'The Feast of St. Francis Xavier is one of Goa\'s most important religious festivals, celebrated every year on December 3rd. The festival attracts thousands of pilgrims from around the world. Special masses are held at the Basilica of Bom Jesus, and the saint\'s body is displayed for public veneration. The festival includes religious processions, cultural performances, and traditional Goan food stalls.',
      actions: {
        primary: {
          label: 'Festival Information',
          type: 'external_link',
          url: 'https://www.goatourism.gov.in/events/feast-st-francis-xavier'
        },
        secondary: {
          label: 'Pilgrimage Tour',
          type: 'modal',
          content: 'Join guided pilgrimage tours covering religious sites, masses, and cultural significance of the feast.'
        }
      },
      best_time: 'December 3rd annually',
      duration: '1 day festival'
    },
    {
      id: 'portuguese_colonial_panaji',
      place_id: 'panaji_goa',
      state_id: 'goa',
      category: 'history',
      name: 'Portuguese Colonial Period',
      description: 'Goa\'s 450-year Portuguese colonial history and its cultural impact.',
      details: 'Goa was under Portuguese rule for 450 years (1510-1961), making it the longest European colonial presence in India. The Portuguese left a lasting impact on Goan culture, architecture, cuisine, and religion. They introduced Christianity, built magnificent churches, and created a unique Indo-Portuguese culture. The colonial period shaped Goa\'s identity and made it distinct from the rest of India.',
      actions: {
        primary: {
          label: 'Heritage Walk',
          type: 'external_link',
          url: 'https://www.goatourism.gov.in/activities/heritage-walks'
        },
        secondary: {
          label: 'Colonial Architecture Tour',
          type: 'modal',
          content: 'Explore Portuguese colonial architecture, churches, and historical sites with expert guides.'
        }
      },
      best_time: 'Morning hours for historical tours',
      duration: '2-3 hours'
    },
    {
      id: 'liberation_goa_panaji',
      place_id: 'panaji_goa',
      state_id: 'goa',
      category: 'history',
      name: 'Goa Liberation',
      description: 'Historical significance of Goa\'s liberation from Portuguese rule in 1961.',
      details: 'Goa was liberated from Portuguese rule on December 19, 1961, through a military operation by the Indian Army. The liberation marked the end of 450 years of Portuguese colonial rule and Goa\'s integration into India. The event is celebrated annually as Goa Liberation Day, commemorating the sacrifices made for freedom. The liberation brought about significant changes in Goan society and politics.',
      actions: {
        primary: {
          label: 'Liberation Memorial',
          type: 'external_link',
          url: 'https://www.goatourism.gov.in/attractions/goa-liberation-memorial'
        },
        secondary: {
          label: 'Historical Tour',
          type: 'modal',
          content: 'Visit historical sites related to Goa\'s liberation and learn about the freedom struggle.'
        }
      },
      best_time: 'December 19th (Liberation Day)',
      duration: '1-2 hours'
    }
  ]
};

export default goaData;
