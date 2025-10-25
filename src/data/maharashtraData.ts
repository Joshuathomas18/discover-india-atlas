// Maharashtra Data Collection Script
// Comprehensive data for Maharashtra state with 8 places and 5 categories each

export const maharashtraData = {
  // State Level Data
  state: {
    id: 'maharashtra',
    name: 'Maharashtra',
    capital: 'Mumbai',
    description: 'Maharashtra is India\'s second-most populous state, known for its vibrant culture, Bollywood industry, colonial architecture, and diverse landscapes. From the bustling streets of Mumbai to the serene hill stations, Maharashtra offers a rich cultural experience.',
    coordinates: { lat: 19.7515, lng: 75.7139 },
    best_time_to_visit: 'October to March',
    languages: ['Marathi', 'Hindi', 'English'],
    population: '112.4 million',
    area_sq_km: 307713,
    banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
  },

  // Places Data (8 places)
  places: [
    {
      id: 'mumbai_maharashtra',
      state_id: 'maharashtra',
      name: 'Mumbai',
      type: 'city',
      nickname: 'City of Dreams',
      description: 'The financial capital of India, Mumbai is known for Bollywood, colonial architecture, and vibrant street life. It\'s a city that never sleeps and offers endless opportunities.',
      coordinates: { lat: 19.0760, lng: 72.8777 },
      population: '12.5 million',
      best_time_to_visit: 'November to February',
      how_to_reach: {
        by_air: 'Chhatrapati Shivaji Maharaj International Airport (BOM)',
        by_train: 'Mumbai Central Railway Station',
        by_road: 'NH 3, NH 8, NH 48',
        by_bus: 'Maharashtra State Road Transport Corporation buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'pune_maharashtra',
      state_id: 'maharashtra',
      name: 'Pune',
      type: 'city',
      nickname: 'Oxford of the East',
      description: 'Known for its educational institutions, IT industry, and pleasant climate, Pune is a perfect blend of tradition and modernity with rich Maratha heritage.',
      coordinates: { lat: 18.5204, lng: 73.8567 },
      population: '3.1 million',
      best_time_to_visit: 'October to March',
      how_to_reach: {
        by_air: 'Pune Airport (PNQ)',
        by_train: 'Pune Junction Railway Station',
        by_road: 'NH 48, NH 65',
        by_bus: 'Maharashtra State Road Transport Corporation buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'aurangabad_maharashtra',
      state_id: 'maharashtra',
      name: 'Aurangabad',
      type: 'city',
      nickname: 'City of Gates',
      description: 'Famous for the UNESCO World Heritage Site of Ajanta and Ellora caves, Aurangabad is a treasure trove of ancient Buddhist, Hindu, and Jain art.',
      coordinates: { lat: 19.8762, lng: 75.3433 },
      population: '1.2 million',
      best_time_to_visit: 'October to March',
      how_to_reach: {
        by_air: 'Aurangabad Airport (IXU)',
        by_train: 'Aurangabad Railway Station',
        by_road: 'NH 52, NH 61',
        by_bus: 'Maharashtra State Road Transport Corporation buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'nashik_maharashtra',
      state_id: 'maharashtra',
      name: 'Nashik',
      type: 'city',
      nickname: 'Wine Capital of India',
      description: 'Famous for its vineyards, temples, and Kumbh Mela, Nashik is a sacred city with a growing wine industry and rich cultural heritage.',
      coordinates: { lat: 19.9975, lng: 73.7898 },
      population: '1.5 million',
      best_time_to_visit: 'October to March',
      how_to_reach: {
        by_air: 'Nashik Airport (ISK)',
        by_train: 'Nashik Road Railway Station',
        by_road: 'NH 3, NH 50',
        by_bus: 'Maharashtra State Road Transport Corporation buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'lonavala_maharashtra',
      state_id: 'maharashtra',
      name: 'Lonavala',
      type: 'hill_station',
      nickname: 'Chikki Capital',
      description: 'A popular hill station famous for its scenic beauty, waterfalls, and chikki (sweet snacks). Lonavala is a perfect weekend getaway from Mumbai and Pune.',
      coordinates: { lat: 18.7500, lng: 73.4167 },
      population: '57,000',
      best_time_to_visit: 'June to September, December to February',
      how_to_reach: {
        by_air: 'Pune Airport (65 km away)',
        by_train: 'Lonavala Railway Station',
        by_road: 'NH 48',
        by_bus: 'Maharashtra State Road Transport Corporation buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'mahabaleshwar_maharashtra',
      state_id: 'maharashtra',
      name: 'Mahabaleshwar',
      type: 'hill_station',
      nickname: 'Strawberry Capital',
      description: 'A beautiful hill station famous for its strawberry farms, scenic viewpoints, and pleasant climate. Mahabaleshwar is a popular honeymoon destination.',
      coordinates: { lat: 17.9249, lng: 73.6668 },
      population: '12,000',
      best_time_to_visit: 'October to June',
      how_to_reach: {
        by_air: 'Pune Airport (120 km away)',
        by_train: 'Wathar Railway Station (60 km away)',
        by_road: 'NH 48, State Highway 4',
        by_bus: 'Maharashtra State Road Transport Corporation buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'kolhapur_maharashtra',
      state_id: 'maharashtra',
      name: 'Kolhapur',
      type: 'city',
      nickname: 'City of Temples',
      description: 'Famous for its ancient temples, Kolhapur chappals, and spicy cuisine, Kolhapur is a city steeped in tradition and religious significance.',
      coordinates: { lat: 16.7050, lng: 74.2433 },
      population: '550,000',
      best_time_to_visit: 'October to March',
      how_to_reach: {
        by_air: 'Kolhapur Airport (KLH)',
        by_train: 'Kolhapur Railway Station',
        by_road: 'NH 48, NH 166',
        by_bus: 'Maharashtra State Road Transport Corporation buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'alibaug_maharashtra',
      state_id: 'maharashtra',
      name: 'Alibaug',
      type: 'beach',
      nickname: 'Mumbai\'s Beach Destination',
      description: 'A coastal town famous for its beaches, forts, and proximity to Mumbai. Alibaug is a popular weekend destination for Mumbaikars.',
      coordinates: { lat: 18.6414, lng: 72.8722 },
      population: '20,000',
      best_time_to_visit: 'October to March',
      how_to_reach: {
        by_air: 'Mumbai Airport (100 km away)',
        by_train: 'Pen Railway Station (20 km away)',
        by_road: 'NH 66',
        by_bus: 'Maharashtra State Road Transport Corporation buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    }
  ],

  // Cultural Items Data (5 categories per place)
  culturalItems: [
    // MUMBAI CULTURAL ITEMS
    {
      id: 'gateway_of_india_mumbai',
      place_id: 'mumbai_maharashtra',
      state_id: 'maharashtra',
      category: 'monuments',
      name: 'Gateway of India',
      description: 'Iconic arch monument overlooking the Arabian Sea, symbol of Mumbai.',
      details: 'The Gateway of India is Mumbai\'s most iconic landmark, built to commemorate the visit of King George V and Queen Mary in 1911. This magnificent arch monument stands at the waterfront overlooking the Arabian Sea. The architecture combines Indo-Saracenic and Muslim styles, making it a unique blend of cultures. The Gateway is a popular gathering spot for locals and tourists, especially during sunset. It\'s also the starting point for boat rides to Elephanta Island.',
      coordinates: { lat: 18.9220, lng: 72.8347 },
      actions: {
        primary: {
          label: 'Visit Information',
          type: 'external_link',
          url: 'https://www.maharashtratourism.gov.in/attractions/gateway-of-india'
        },
        secondary: {
          label: 'Boat Ride',
          type: 'modal',
          content: 'Take a boat ride from Gateway of India to Elephanta Island for a complete Mumbai experience.'
        }
      },
      opening_hours: '24/7',
      best_time: 'Evening for sunset views',
      duration: '30 minutes to 1 hour'
    },
    {
      id: 'chhatrapati_shivaji_terminal_mumbai',
      place_id: 'mumbai_maharashtra',
      state_id: 'maharashtra',
      category: 'monuments',
      name: 'Chhatrapati Shivaji Terminus',
      description: 'UNESCO World Heritage Site, magnificent Victorian Gothic railway station.',
      details: 'Chhatrapati Shivaji Terminus (CST) is a UNESCO World Heritage Site and one of Mumbai\'s most magnificent buildings. Built in 1887, it showcases Victorian Gothic architecture with Indian influences. The station is a bustling hub of activity with thousands of commuters passing through daily. The architecture features intricate carvings, stained glass windows, and a beautiful dome. CST is not just a railway station but a symbol of Mumbai\'s colonial heritage and modern connectivity.',
      coordinates: { lat: 18.9400, lng: 72.8355 },
      actions: {
        primary: {
          label: 'Station Tour',
          type: 'external_link',
          url: 'https://www.maharashtratourism.gov.in/attractions/cst'
        },
        secondary: {
          label: 'Architecture Guide',
          type: 'modal',
          content: 'Learn about the Victorian Gothic architecture, history, and cultural significance of CST.'
        }
      },
      opening_hours: '24/7',
      best_time: 'Morning hours for photography',
      duration: '30 minutes'
    },
    {
      id: 'marine_drive_mumbai',
      place_id: 'mumbai_maharashtra',
      state_id: 'maharashtra',
      category: 'monuments',
      name: 'Marine Drive',
      description: 'Famous curved boulevard along the Arabian Sea, known as the Queen\'s Necklace.',
      details: 'Marine Drive is Mumbai\'s most famous boulevard, a 3.6 km long curved road along the Arabian Sea. It\'s called the "Queen\'s Necklace" because of the beautiful street lights that create a necklace-like appearance when viewed from above. The drive offers stunning views of the sea and is a popular spot for evening walks, jogging, and romantic moments. It\'s lined with Art Deco buildings and is a perfect place to experience Mumbai\'s vibrant street life.',
      coordinates: { lat: 18.9400, lng: 72.8200 },
      actions: {
        primary: {
          label: 'Drive Guide',
          type: 'external_link',
          url: 'https://www.maharashtratourism.gov.in/attractions/marine-drive'
        },
        secondary: {
          label: 'Sunset Walk',
          type: 'modal',
          content: 'Join guided sunset walks along Marine Drive to experience Mumbai\'s vibrant street life and beautiful views.'
        }
      },
      opening_hours: '24/7',
      best_time: 'Evening for sunset views',
      duration: '1-2 hours'
    },
    {
      id: 'vada_pav_mumbai',
      place_id: 'mumbai_maharashtra',
      state_id: 'maharashtra',
      category: 'food',
      name: 'Vada Pav',
      description: 'Mumbai\'s signature street food - spiced potato fritter in a bread bun.',
      details: 'Vada Pav is Mumbai\'s most iconic street food, often called the "poor man\'s burger." It consists of a spiced potato fritter (vada) served in a bread bun (pav) with chutneys and green chilies. This simple yet delicious snack is available at every street corner in Mumbai and is loved by people from all walks of life. Vada Pav represents Mumbai\'s fast-paced lifestyle and is a must-try for anyone visiting the city.',
      actions: {
        primary: {
          label: 'Find Stalls',
          type: 'places_search',
          query: 'famous vada pav stalls Mumbai'
        },
        secondary: {
          label: 'Street Food Tour',
          type: 'external_link',
          url: 'https://www.maharashtratourism.gov.in/activities/street-food-tours'
        }
      },
      best_time: 'Any time of day',
      duration: '10-15 minutes'
    },
    {
      id: 'misal_pav_mumbai',
      place_id: 'mumbai_maharashtra',
      state_id: 'maharashtra',
      category: 'food',
      name: 'Misal Pav',
      description: 'Spicy curry with sprouts served with bread, a popular Maharashtra breakfast.',
      details: 'Misal Pav is a popular Maharashtra breakfast dish consisting of a spicy curry made with sprouted lentils, served with bread (pav) and topped with onions, coriander, and lemon. The dish is known for its spicy flavor and is often served with yogurt to balance the heat. Misal Pav is a hearty and nutritious meal that\'s popular throughout Maharashtra. It\'s often enjoyed with a side of buttermilk or tea.',
      actions: {
        primary: {
          label: 'Find Restaurants',
          type: 'places_search',
          query: 'authentic misal pav restaurants Mumbai'
        },
        secondary: {
          label: 'Cooking Class',
          type: 'modal',
          content: 'Learn to make authentic Misal Pav with traditional Maharashtra cooking methods.'
        }
      },
      best_time: 'Breakfast or brunch',
      duration: '20-30 minutes'
    },
    {
      id: 'lavani_dance_mumbai',
      place_id: 'mumbai_maharashtra',
      state_id: 'maharashtra',
      category: 'customs',
      name: 'Lavani Dance',
      description: 'Traditional Maharashtra folk dance known for its energetic movements and music.',
      details: 'Lavani is a traditional Maharashtra folk dance known for its energetic movements, rhythmic music, and colorful costumes. The dance form originated in the 18th century and was performed by women to entertain soldiers. Lavani combines music, dance, and drama to tell stories of love, war, and social issues. The dance is characterized by fast-paced movements, traditional songs, and vibrant costumes. It\'s an important part of Maharashtra\'s cultural heritage.',
      actions: {
        primary: {
          label: 'Watch Performance',
          type: 'external_link',
          url: 'https://www.maharashtratourism.gov.in/activities/cultural-performances'
        },
        secondary: {
          label: 'Learn Lavani',
          type: 'modal',
          content: 'Join Lavani dance workshops to learn basic movements, music, and cultural significance.'
        }
      },
      best_time: 'Evening performances',
      duration: '1-2 hours'
    },
    {
      id: 'ganesh_chaturthi_mumbai',
      place_id: 'mumbai_maharashtra',
      state_id: 'maharashtra',
      category: 'festivals',
      name: 'Ganesh Chaturthi',
      description: 'Grand festival celebrating Lord Ganesha with processions and cultural events.',
      details: 'Ganesh Chaturthi is Maharashtra\'s most important festival, celebrated with great enthusiasm across the state. The festival marks the birth of Lord Ganesha and lasts for 10 days. Mumbai is famous for its grand Ganesh processions, especially the Lalbaugcha Raja procession. The festival involves traditional rituals, cultural performances, and community celebrations. It\'s a time when the entire city comes together to celebrate and seek blessings from Lord Ganesha.',
      actions: {
        primary: {
          label: 'Festival Schedule',
          type: 'external_link',
          url: 'https://www.maharashtratourism.gov.in/events/ganesh-chaturthi'
        },
        secondary: {
          label: 'Procession Viewing',
          type: 'modal',
          content: 'Get premium viewing spots for the grand Ganesh processions with cultural performances.'
        }
      },
      best_time: 'August-September (10 days)',
      duration: '10 days festival'
    },
    {
      id: 'bollywood_mumbai',
      place_id: 'mumbai_maharashtra',
      state_id: 'maharashtra',
      category: 'history',
      name: 'Bollywood Industry',
      description: 'Mumbai\'s film industry, the largest in the world, shaping Indian cinema.',
      details: 'Bollywood, Mumbai\'s film industry, is the largest film industry in the world, producing over 1000 films annually. The industry has shaped Indian cinema and culture for over a century. Bollywood films are known for their music, dance, drama, and colorful storytelling. The industry has produced legendary actors, directors, and musicians who have achieved international fame. Bollywood tours offer visitors a chance to see film studios, sets, and learn about the filmmaking process.',
      actions: {
        primary: {
          label: 'Bollywood Tour',
          type: 'external_link',
          url: 'https://www.maharashtratourism.gov.in/activities/bollywood-tours'
        },
        secondary: {
          label: 'Studio Visit',
          type: 'modal',
          content: 'Visit famous Bollywood studios, meet industry professionals, and learn about filmmaking.'
        }
      },
      best_time: 'Morning hours for studio visits',
      duration: '2-3 hours'
    }
  ]
};

export default maharashtraData;
