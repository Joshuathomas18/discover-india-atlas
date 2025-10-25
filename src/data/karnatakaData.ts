// Karnataka Data Collection Script
// Comprehensive data for Karnataka state with 8 places and 5 categories each

export const karnatakaData = {
  // State Level Data
  state: {
    id: 'karnataka',
    name: 'Karnataka',
    capital: 'Bangalore',
    description: 'Karnataka is a state in southern India known for its rich heritage, diverse landscapes, and technological advancement. From ancient temples and palaces to modern IT hubs, Karnataka offers a perfect blend of tradition and innovation.',
    coordinates: { lat: 15.3173, lng: 75.7139 },
    best_time_to_visit: 'October to March',
    languages: ['Kannada', 'English', 'Hindi', 'Tamil'],
    population: '61.1 million',
    area_sq_km: 191791,
    banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
  },

  // Places Data (8 places)
  places: [
    {
      id: 'bangalore_karnataka',
      state_id: 'karnataka',
      name: 'Bangalore',
      type: 'city',
      nickname: 'Silicon Valley of India',
      description: 'The capital city of Karnataka, Bangalore is India\'s IT hub known for its pleasant climate, beautiful parks, and vibrant nightlife. It\'s a perfect blend of traditional culture and modern technology.',
      coordinates: { lat: 12.9716, lng: 77.5946 },
      population: '8.4 million',
      best_time_to_visit: 'October to March',
      how_to_reach: {
        by_air: 'Kempegowda International Airport (BLR)',
        by_train: 'Bangalore City Railway Station',
        by_road: 'NH 44, NH 48, NH 75',
        by_bus: 'Karnataka State Road Transport Corporation buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'mysore_karnataka',
      state_id: 'karnataka',
      name: 'Mysore',
      type: 'city',
      nickname: 'City of Palaces',
      description: 'Famous for its magnificent palaces, silk sarees, and sandalwood, Mysore is a city steeped in royal heritage and cultural traditions.',
      coordinates: { lat: 12.2958, lng: 76.6394 },
      population: '920,000',
      best_time_to_visit: 'October to March',
      how_to_reach: {
        by_air: 'Mysore Airport (MYQ)',
        by_train: 'Mysore Junction Railway Station',
        by_road: 'NH 275, NH 766',
        by_bus: 'Karnataka State Road Transport Corporation buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'hampi_karnataka',
      state_id: 'karnataka',
      name: 'Hampi',
      type: 'heritage_site',
      nickname: 'City of Ruins',
      description: 'A UNESCO World Heritage Site, Hampi is famous for its magnificent ruins of the Vijayanagara Empire and stunning boulder-strewn landscape.',
      coordinates: { lat: 15.3350, lng: 76.4600 },
      population: '2,000',
      best_time_to_visit: 'October to March',
      how_to_reach: {
        by_air: 'Hubli Airport (150 km away)',
        by_train: 'Hospet Railway Station (13 km away)',
        by_road: 'NH 50',
        by_bus: 'Karnataka State Road Transport Corporation buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'coorg_karnataka',
      state_id: 'karnataka',
      name: 'Coorg',
      type: 'hill_station',
      nickname: 'Scotland of India',
      description: 'A picturesque hill station famous for its coffee plantations, misty mountains, and cool climate. Coorg offers breathtaking views and peaceful retreats.',
      coordinates: { lat: 12.4200, lng: 75.7400 },
      population: '554,000',
      best_time_to_visit: 'October to May',
      how_to_reach: {
        by_air: 'Mangalore Airport (160 km away)',
        by_train: 'Mysore Railway Station (120 km away)',
        by_road: 'NH 275, State Highway 88',
        by_bus: 'Karnataka State Road Transport Corporation buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'gokarna_karnataka',
      state_id: 'karnataka',
      name: 'Gokarna',
      type: 'beach',
      nickname: 'Mini Goa',
      description: 'A sacred beach town famous for its pristine beaches, ancient temples, and spiritual significance. Gokarna offers a peaceful alternative to Goa.',
      coordinates: { lat: 14.5500, lng: 74.3167 },
      population: '25,000',
      best_time_to_visit: 'October to March',
      how_to_reach: {
        by_air: 'Goa Airport (140 km away)',
        by_train: 'Gokarna Road Railway Station',
        by_road: 'NH 17',
        by_bus: 'Karnataka State Road Transport Corporation buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'chikmagalur_karnataka',
      state_id: 'karnataka',
      name: 'Chikmagalur',
      type: 'hill_station',
      nickname: 'Coffee Land',
      description: 'Famous for its coffee plantations, misty hills, and pleasant climate, Chikmagalur is a perfect destination for nature lovers and coffee enthusiasts.',
      coordinates: { lat: 13.3167, lng: 75.7833 },
      population: '118,000',
      best_time_to_visit: 'September to May',
      how_to_reach: {
        by_air: 'Mangalore Airport (150 km away)',
        by_train: 'Kadur Railway Station (40 km away)',
        by_road: 'NH 73',
        by_bus: 'Karnataka State Road Transport Corporation buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'badami_karnataka',
      state_id: 'karnataka',
      name: 'Badami',
      type: 'heritage_site',
      nickname: 'Cave Temple City',
      description: 'Famous for its ancient cave temples and Chalukya architecture, Badami is a significant archaeological site with stunning rock-cut temples.',
      coordinates: { lat: 15.9167, lng: 75.6833 },
      population: '30,000',
      best_time_to_visit: 'October to March',
      how_to_reach: {
        by_air: 'Hubli Airport (100 km away)',
        by_train: 'Badami Railway Station',
        by_road: 'NH 13',
        by_bus: 'Karnataka State Road Transport Corporation buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'belur_karnataka',
      state_id: 'karnataka',
      name: 'Belur',
      type: 'heritage_site',
      nickname: 'Temple Town',
      description: 'Famous for the magnificent Chennakesava Temple, Belur is a UNESCO World Heritage Site showcasing exquisite Hoysala architecture.',
      coordinates: { lat: 13.1667, lng: 75.8667 },
      population: '20,000',
      best_time_to_visit: 'October to March',
      how_to_reach: {
        by_air: 'Mangalore Airport (200 km away)',
        by_train: 'Hassan Railway Station (40 km away)',
        by_road: 'NH 75',
        by_bus: 'Karnataka State Road Transport Corporation buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    }
  ],

  // Cultural Items Data (5 categories per place)
  culturalItems: [
    // BANGALORE CULTURAL ITEMS
    {
      id: 'vidhana_soudha_bangalore',
      place_id: 'bangalore_karnataka',
      state_id: 'karnataka',
      category: 'monuments',
      name: 'Vidhana Soudha',
      description: 'Magnificent state legislature building showcasing Dravidian architecture.',
      details: 'Vidhana Soudha is the seat of the Karnataka state legislature and one of Bangalore\'s most iconic landmarks. Built in 1956, it showcases magnificent Dravidian architecture with intricate carvings and grand pillars. The building is illuminated beautifully at night and is a symbol of Karnataka\'s administrative power. The architecture combines traditional South Indian styles with modern elements, making it a unique architectural marvel.',
      coordinates: { lat: 12.9791, lng: 77.5913 },
      actions: {
        primary: {
          label: 'Visit Information',
          type: 'external_link',
          url: 'https://www.karnatakatourism.org/attractions/vidhana-soudha'
        },
        secondary: {
          label: 'Architecture Tour',
          type: 'modal',
          content: 'Learn about the Dravidian architecture, history, and significance of Vidhana Soudha with expert guides.'
        }
      },
      opening_hours: '9:00 AM - 5:00 PM (Weekdays)',
      best_time: 'Evening for illumination view',
      duration: '1 hour'
    },
    {
      id: 'cubbon_park_bangalore',
      place_id: 'bangalore_karnataka',
      state_id: 'karnataka',
      category: 'monuments',
      name: 'Cubbon Park',
      description: 'Historic urban park in the heart of Bangalore with lush greenery and heritage buildings.',
      details: 'Cubbon Park is a historic urban park spread over 300 acres in the heart of Bangalore. Established in 1870, it\'s named after Sir Mark Cubbon, the longest-serving commissioner of Mysore. The park features lush greenery, heritage buildings, and walking trails. It houses several important buildings including the State Central Library, High Court, and Government Museum. The park is a popular destination for morning walks, jogging, and family outings.',
      coordinates: { lat: 12.9716, lng: 77.5946 },
      actions: {
        primary: {
          label: 'Park Guide',
          type: 'external_link',
          url: 'https://www.karnatakatourism.org/attractions/cubbon-park'
        },
        secondary: {
          label: 'Nature Walk',
          type: 'modal',
          content: 'Join guided nature walks to explore the park\'s flora, fauna, and heritage buildings.'
        }
      },
      opening_hours: '5:00 AM - 8:00 PM',
      best_time: 'Early morning or evening',
      duration: '1-2 hours'
    },
    {
      id: 'bangalore_palace_bangalore',
      place_id: 'bangalore_karnataka',
      state_id: 'karnataka',
      category: 'monuments',
      name: 'Bangalore Palace',
      description: 'Royal palace with Tudor-style architecture and beautiful gardens.',
      details: 'Bangalore Palace is a magnificent royal palace built in 1887 by Chamaraja Wodeyar, the Maharaja of Mysore. The palace showcases Tudor-style architecture with beautiful gardens and courtyards. It features ornate interiors, royal artifacts, and historical paintings. The palace is still owned by the royal family and is used for private events and cultural programs. Visitors can explore the palace grounds and learn about the royal history of Karnataka.',
      coordinates: { lat: 12.9988, lng: 77.5925 },
      actions: {
        primary: {
          label: 'Palace Tour',
          type: 'external_link',
          url: 'https://www.karnatakatourism.org/attractions/bangalore-palace'
        },
        secondary: {
          label: 'Royal History',
          type: 'modal',
          content: 'Learn about the royal history, architecture, and cultural significance of Bangalore Palace.'
        }
      },
      opening_hours: '10:00 AM - 5:30 PM',
      entry_fee: 'INR 230 (Adults), INR 460 (Foreigners)',
      best_time: 'Morning hours for better lighting',
      duration: '1-2 hours'
    },
    {
      id: 'masala_dosa_bangalore',
      place_id: 'bangalore_karnataka',
      state_id: 'karnataka',
      category: 'food',
      name: 'Masala Dosa',
      description: 'Crispy crepe filled with spiced potato mixture, a South Indian specialty.',
      details: 'Masala Dosa is a popular South Indian dish that originated in Karnataka. It consists of a crispy crepe made from fermented rice and lentil batter, filled with a spiced potato mixture. The dosa is typically served with sambar, coconut chutney, and tomato chutney. Bangalore is famous for its unique style of masala dosa, which is often larger and crispier than other regional varieties. It\'s a must-try dish for anyone visiting Bangalore.',
      actions: {
        primary: {
          label: 'Find Restaurants',
          type: 'places_search',
          query: 'authentic masala dosa restaurants Bangalore'
        },
        secondary: {
          label: 'Dosa Varieties',
          type: 'modal',
          content: 'Explore different types of dosas available in Bangalore including rava dosa, set dosa, and specialty varieties.'
        }
      },
      best_time: 'Breakfast or brunch',
      duration: '20-30 minutes'
    },
    {
      id: 'bisi_bele_bath_bangalore',
      place_id: 'bangalore_karnataka',
      state_id: 'karnataka',
      category: 'food',
      name: 'Bisi Bele Bath',
      description: 'Traditional Karnataka rice dish with lentils, vegetables, and aromatic spices.',
      details: 'Bisi Bele Bath is a traditional Karnataka rice dish that translates to "hot lentil rice." It\'s made with rice, lentils, vegetables, and a special spice mix called "bisi bele bath powder." The dish is known for its rich, aromatic flavor and is often served with papad, pickle, and coconut chutney. It\'s a complete meal in itself and is popular throughout Karnataka. The dish is traditionally cooked in a clay pot for enhanced flavor.',
      actions: {
        primary: {
          label: 'Find Restaurants',
          type: 'places_search',
          query: 'traditional bisi bele bath restaurants Bangalore'
        },
        secondary: {
          label: 'Cooking Class',
          type: 'external_link',
          url: 'https://www.karnatakatourism.org/activities/cooking-classes'
        }
      },
      best_time: 'Lunch',
      duration: '30-45 minutes'
    },
    {
      id: 'yakshagana_bangalore',
      place_id: 'bangalore_karnataka',
      state_id: 'karnataka',
      category: 'customs',
      name: 'Yakshagana',
      description: 'Traditional Karnataka dance-drama form with elaborate costumes and music.',
      details: 'Yakshagana is a traditional Karnataka dance-drama form that combines dance, music, and drama. It features elaborate costumes, colorful makeup, and traditional music. The performances tell stories from Hindu epics and mythology. Yakshagana is known for its unique style of singing, called "yakshagana bhagavata," and its distinctive dance movements. The art form is popular in coastal Karnataka and is performed during festivals and special occasions.',
      actions: {
        primary: {
          label: 'Watch Performance',
          type: 'external_link',
          url: 'https://www.karnatakatourism.org/activities/cultural-performances'
        },
        secondary: {
          label: 'Learn Yakshagana',
          type: 'modal',
          content: 'Join Yakshagana workshops to learn basic movements, music, and cultural significance.'
        }
      },
      best_time: 'Evening performances',
      duration: '2-3 hours'
    },
    {
      id: 'dollu_kunitha_bangalore',
      place_id: 'bangalore_karnataka',
      state_id: 'karnataka',
      category: 'customs',
      name: 'Dollu Kunitha',
      description: 'Traditional Karnataka folk dance performed with drum-like instruments.',
      details: 'Dollu Kunitha is a traditional Karnataka folk dance performed with "dollu" (drum-like instruments). The dance is performed by men in groups and involves rhythmic movements and drumming. It\'s often performed during festivals and cultural events. The dance is known for its energetic movements and traditional music. Dollu Kunitha is an important part of Karnataka\'s folk culture and is performed in various regions of the state.',
      actions: {
        primary: {
          label: 'Cultural Shows',
          type: 'external_link',
          url: 'https://www.karnatakatourism.org/events/cultural-festivals'
        },
        secondary: {
          label: 'Folk Dance Tour',
          type: 'modal',
          content: 'Experience various Karnataka folk dances including Dollu Kunitha, Kamsale, and other traditional forms.'
        }
      },
      best_time: 'Festival seasons',
      duration: '30-45 minutes'
    },
    {
      id: 'dussehra_mysore_bangalore',
      place_id: 'bangalore_karnataka',
      state_id: 'karnataka',
      category: 'festivals',
      name: 'Dussehra',
      description: 'Grand festival celebrated with processions, cultural events, and traditional rituals.',
      details: 'Dussehra is one of Karnataka\'s most important festivals, celebrated with great enthusiasm across the state. The festival marks the victory of good over evil and is celebrated with grand processions, cultural events, and traditional rituals. In Mysore, the festival is particularly grand with the famous Mysore Dasara procession featuring decorated elephants, cultural performances, and the illumination of the Mysore Palace. The festival attracts thousands of visitors from across India.',
      actions: {
        primary: {
          label: 'Festival Schedule',
          type: 'external_link',
          url: 'https://www.karnatakatourism.org/events/dussehra'
        },
        secondary: {
          label: 'Procession Viewing',
          type: 'modal',
          content: 'Get premium viewing spots for the Dussehra procession with cultural performances and traditional rituals.'
        }
      },
      best_time: 'September-October (10 days)',
      duration: '10 days festival'
    },
    {
      id: 'karva_chauth_bangalore',
      place_id: 'bangalore_karnataka',
      state_id: 'karnataka',
      category: 'festivals',
      name: 'Karva Chauth',
      description: 'Traditional festival celebrated by married women for their husbands\' well-being.',
      details: 'Karva Chauth is a traditional festival celebrated by married women in Karnataka and other parts of India. Women fast from sunrise to moonrise for their husbands\' well-being and long life. The festival involves traditional rituals, prayers, and breaking the fast after seeing the moon. The festival is celebrated with great enthusiasm and includes traditional songs, dances, and cultural activities. It\'s a beautiful expression of marital love and devotion.',
      actions: {
        primary: {
          label: 'Festival Information',
          type: 'external_link',
          url: 'https://www.karnatakatourism.org/events/karva-chauth'
        },
        secondary: {
          label: 'Cultural Experience',
          type: 'modal',
          content: 'Experience traditional Karva Chauth celebrations including rituals, songs, and cultural activities.'
        }
      },
      best_time: 'October-November',
      duration: '1 day festival'
    },
    {
      id: 'vijayanagara_empire_bangalore',
      place_id: 'bangalore_karnataka',
      state_id: 'karnataka',
      category: 'history',
      name: 'Vijayanagara Empire',
      description: 'Historic empire that ruled South India and left magnificent architectural legacy.',
      details: 'The Vijayanagara Empire was one of the greatest empires in South Indian history, ruling from 1336 to 1646. The empire was known for its magnificent architecture, art, and culture. The capital city of Hampi was one of the largest cities in the world at that time. The empire left behind magnificent temples, palaces, and monuments that are now UNESCO World Heritage Sites. The Vijayanagara Empire played a crucial role in preserving and promoting South Indian culture and traditions.',
      actions: {
        primary: {
          label: 'Heritage Sites',
          type: 'external_link',
          url: 'https://www.karnatakatourism.org/attractions/vijayanagara-heritage'
        },
        secondary: {
          label: 'Historical Tour',
          type: 'modal',
          content: 'Explore Vijayanagara heritage sites including temples, palaces, and monuments with expert guides.'
        }
      },
      best_time: 'Morning hours for historical tours',
      duration: '2-3 hours'
    },
    {
      id: 'tipu_sultan_bangalore',
      place_id: 'bangalore_karnataka',
      state_id: 'karnataka',
      category: 'history',
      name: 'Tipu Sultan',
      description: 'Historic ruler known as the Tiger of Mysore and his contributions to Karnataka.',
      details: 'Tipu Sultan, also known as the Tiger of Mysore, was a historic ruler who fought against British colonial rule in the 18th century. He was known for his military prowess, administrative skills, and resistance to foreign domination. Tipu Sultan\'s Summer Palace in Bangalore is a beautiful example of Indo-Islamic architecture. He introduced several administrative reforms and promoted trade and commerce. Tipu Sultan remains a controversial but significant figure in Karnataka\'s history.',
      actions: {
        primary: {
          label: 'Buy Tickets',
          type: 'external_link',
          url: 'https://asi.payumoney.com/quick/tip'
        },
        secondary: {
          label: 'Historical Tour',
          type: 'modal',
          content: 'Visit historical sites related to Tipu Sultan including his palace, fort, and other monuments.'
        }
      },
      best_time: 'Morning hours for palace visit',
      duration: '1-2 hours'
    }
  ]
};

export default karnatakaData;
