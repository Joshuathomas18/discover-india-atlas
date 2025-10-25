// Tamil Nadu Data Collection Script
// Comprehensive data for Tamil Nadu state with 8 places and 5 categories each

export const tamilNaduData = {
  // State Level Data
  state: {
    id: 'tamil_nadu',
    name: 'Tamil Nadu',
    capital: 'Chennai',
    description: 'Tamil Nadu is a state in southern India known for its rich Dravidian culture, magnificent temples, classical arts, and beautiful coastline. The state is home to UNESCO World Heritage Sites, traditional Bharatanatyam dance, and delicious South Indian cuisine.',
    coordinates: { lat: 11.1271, lng: 78.6569 },
    best_time_to_visit: 'October to March',
    languages: ['Tamil', 'English', 'Telugu'],
    population: '72.1 million',
    area_sq_km: 130058,
    banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
  },

  // Places Data (8 places)
  places: [
    {
      id: 'chennai_tamil_nadu',
      state_id: 'tamil_nadu',
      name: 'Chennai',
      type: 'city',
      nickname: 'Gateway of South India',
      description: 'The capital city of Tamil Nadu, Chennai is a bustling metropolis known for its beaches, temples, classical music, and vibrant culture. It\'s a perfect blend of tradition and modernity.',
      coordinates: { lat: 13.0827, lng: 80.2707 },
      population: '7.1 million',
      best_time_to_visit: 'November to February',
      how_to_reach: {
        by_air: 'Chennai International Airport (MAA)',
        by_train: 'Chennai Central Railway Station',
        by_road: 'NH 16, NH 48, NH 45',
        by_bus: 'Tamil Nadu State Transport Corporation buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'madurai_tamil_nadu',
      state_id: 'tamil_nadu',
      name: 'Madurai',
      type: 'city',
      nickname: 'Temple City',
      description: 'One of the oldest cities in India, Madurai is famous for its magnificent Meenakshi Amman Temple and rich cultural heritage. It\'s a center of Tamil literature and classical arts.',
      coordinates: { lat: 9.9252, lng: 78.1198 },
      population: '1.5 million',
      best_time_to_visit: 'October to March',
      how_to_reach: {
        by_air: 'Madurai Airport (IXM)',
        by_train: 'Madurai Junction Railway Station',
        by_road: 'NH 44, NH 85',
        by_bus: 'Tamil Nadu State Transport Corporation buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'kanyakumari_tamil_nadu',
      state_id: 'tamil_nadu',
      name: 'Kanyakumari',
      type: 'city',
      nickname: 'Land\'s End',
      description: 'The southernmost tip of India, Kanyakumari is famous for its unique sunrise and sunset views, where three seas meet. It\'s a place of great spiritual significance.',
      coordinates: { lat: 8.0883, lng: 77.5385 },
      population: '22,000',
      best_time_to_visit: 'October to March',
      how_to_reach: {
        by_air: 'Thiruvananthapuram Airport (100 km away)',
        by_train: 'Kanyakumari Railway Station',
        by_road: 'NH 44',
        by_bus: 'Tamil Nadu State Transport Corporation buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'mahabalipuram_tamil_nadu',
      state_id: 'tamil_nadu',
      name: 'Mahabalipuram',
      type: 'heritage_site',
      nickname: 'Shore Temple City',
      description: 'A UNESCO World Heritage Site famous for its ancient rock-cut temples and sculptures. Mahabalipuram showcases the architectural brilliance of the Pallava dynasty.',
      coordinates: { lat: 12.6200, lng: 80.1940 },
      population: '12,000',
      best_time_to_visit: 'October to March',
      how_to_reach: {
        by_air: 'Chennai Airport (60 km away)',
        by_train: 'Chengalpattu Railway Station (30 km away)',
        by_road: 'NH 32',
        by_bus: 'Tamil Nadu State Transport Corporation buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'thanjavur_tamil_nadu',
      state_id: 'tamil_nadu',
      name: 'Thanjavur',
      type: 'city',
      nickname: 'Rice Bowl of Tamil Nadu',
      description: 'Famous for the magnificent Brihadeeswarar Temple and rich cultural heritage, Thanjavur is a center of classical arts, music, and traditional crafts.',
      coordinates: { lat: 10.7870, lng: 79.1378 },
      population: '290,000',
      best_time_to_visit: 'October to March',
      how_to_reach: {
        by_air: 'Tiruchirapalli Airport (55 km away)',
        by_train: 'Thanjavur Railway Station',
        by_road: 'NH 83, NH 136',
        by_bus: 'Tamil Nadu State Transport Corporation buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'rameswaram_tamil_nadu',
      state_id: 'tamil_nadu',
      name: 'Rameswaram',
      type: 'city',
      nickname: 'Holy Island',
      description: 'A sacred pilgrimage destination famous for the Ramanathaswamy Temple and its connection to the Ramayana. It\'s one of the four Char Dham pilgrimage sites.',
      coordinates: { lat: 9.2880, lng: 79.3130 },
      population: '44,000',
      best_time_to_visit: 'October to March',
      how_to_reach: {
        by_air: 'Madurai Airport (170 km away)',
        by_train: 'Rameswaram Railway Station',
        by_road: 'NH 87',
        by_bus: 'Tamil Nadu State Transport Corporation buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'ooty_tamil_nadu',
      state_id: 'tamil_nadu',
      name: 'Ooty',
      type: 'hill_station',
      nickname: 'Queen of Hill Stations',
      description: 'A picturesque hill station in the Nilgiri Hills, Ooty is famous for its tea plantations, botanical gardens, and cool climate. It\'s a popular summer retreat.',
      coordinates: { lat: 11.4102, lng: 76.6950 },
      population: '88,000',
      best_time_to_visit: 'April to June, September to November',
      how_to_reach: {
        by_air: 'Coimbatore Airport (88 km away)',
        by_train: 'Mettupalayam Railway Station (47 km away)',
        by_road: 'NH 181',
        by_bus: 'Tamil Nadu State Transport Corporation buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'pondicherry_tamil_nadu',
      state_id: 'tamil_nadu',
      name: 'Pondicherry',
      type: 'city',
      nickname: 'French Riviera of the East',
      description: 'A former French colony, Pondicherry is known for its French colonial architecture, beaches, spiritual centers, and unique blend of Indian and French cultures.',
      coordinates: { lat: 11.9416, lng: 79.8083 },
      population: '244,000',
      best_time_to_visit: 'October to March',
      how_to_reach: {
        by_air: 'Chennai Airport (135 km away)',
        by_train: 'Pondicherry Railway Station',
        by_road: 'NH 45A',
        by_bus: 'Tamil Nadu State Transport Corporation buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    }
  ],

  // Cultural Items Data (5 categories per place)
  culturalItems: [
    // CHENNAI CULTURAL ITEMS
    {
      id: 'kapaleeshwarar_temple_chennai',
      place_id: 'chennai_tamil_nadu',
      state_id: 'tamil_nadu',
      category: 'monuments',
      name: 'Kapaleeshwarar Temple',
      description: 'Ancient Shiva temple with magnificent Dravidian architecture and colorful gopuram.',
      details: 'Kapaleeshwarar Temple is one of Chennai\'s most famous temples, dedicated to Lord Shiva. Built in the 7th century, it showcases magnificent Dravidian architecture with a colorful gopuram (tower) adorned with intricate sculptures. The temple is known for its annual Panguni Uthiram festival and the beautiful tank (temple pond) in front of it. The temple complex includes shrines dedicated to various deities and is a center of religious and cultural activities.',
      coordinates: { lat: 13.0339, lng: 80.2620 },
      actions: {
        primary: {
          label: 'Visit Information',
          type: 'external_link',
          url: 'https://www.tamilnadutourism.tn.gov.in/attractions/kapaleeshwarar-temple'
        },
        secondary: {
          label: 'Temple Guide',
          type: 'modal',
          content: 'Learn about the temple\'s history, architecture, festivals, and religious significance with our comprehensive guide.'
        }
      },
      opening_hours: '5:30 AM - 12:00 PM, 4:00 PM - 9:00 PM',
      best_time: 'Early morning or evening for peaceful darshan',
      duration: '1-2 hours'
    },
    {
      id: 'fort_st_george_chennai',
      place_id: 'chennai_tamil_nadu',
      state_id: 'tamil_nadu',
      category: 'monuments',
      name: 'Fort St. George',
      description: 'Historic British fort and museum showcasing colonial architecture and artifacts.',
      details: 'Fort St. George is the first English fortress in India, built in 1644 by the British East India Company. The fort houses the Tamil Nadu Legislative Assembly and Secretariat, along with a museum displaying colonial artifacts, paintings, and historical documents. The fort\'s architecture reflects British colonial style and includes St. Mary\'s Church, the oldest Anglican church in India. It\'s a significant landmark in Chennai\'s colonial history.',
      coordinates: { lat: 13.0807, lng: 80.2880 },
      actions: {
        primary: {
          label: 'Museum Visit',
          type: 'external_link',
          url: 'https://www.tamilnadutourism.tn.gov.in/attractions/fort-st-george'
        },
        secondary: {
          label: 'Historical Tour',
          type: 'modal',
          content: 'Join guided tours to explore the fort\'s colonial history, architecture, and museum collections.'
        }
      },
      opening_hours: '9:00 AM - 5:00 PM (Closed on Fridays)',
      entry_fee: 'INR 5 (Indians), INR 100 (Foreigners)',
      best_time: 'Morning hours for museum visit',
      duration: '2-3 hours'
    },
    {
      id: 'marina_beach_chennai',
      place_id: 'chennai_tamil_nadu',
      state_id: 'tamil_nadu',
      category: 'monuments',
      name: 'Marina Beach',
      description: 'Second longest urban beach in the world, famous for its sunrise views and monuments.',
      details: 'Marina Beach is Chennai\'s most iconic landmark, stretching 13 kilometers along the Bay of Bengal. It\'s the second longest urban beach in the world and a popular destination for locals and tourists. The beach is lined with monuments including the Victory of Labor statue, Mahatma Gandhi statue, and various memorials. It\'s famous for its beautiful sunrise views, evening walks, and street food stalls. The beach is also a venue for cultural events and festivals.',
      coordinates: { lat: 13.0418, lng: 80.2862 },
      actions: {
        primary: {
          label: 'Beach Guide',
          type: 'external_link',
          url: 'https://www.tamilnadutourism.tn.gov.in/attractions/marina-beach'
        },
        secondary: {
          label: 'Sunrise Tour',
          type: 'modal',
          content: 'Experience the beautiful sunrise at Marina Beach with guided tours covering monuments and local culture.'
        }
      },
      opening_hours: '24/7',
      best_time: 'Early morning for sunrise or evening for sunset',
      duration: '1-2 hours'
    },
    {
      id: 'idli_sambar_chennai',
      place_id: 'chennai_tamil_nadu',
      state_id: 'tamil_nadu',
      category: 'food',
      name: 'Idli Sambar',
      description: 'Traditional South Indian breakfast dish with steamed rice cakes and lentil curry.',
      details: 'Idli Sambar is the quintessential South Indian breakfast dish, consisting of soft steamed rice cakes (idli) served with spicy lentil curry (sambar). The idli is made from fermented rice and urad dal batter, while sambar is a tangy curry made with lentils, vegetables, and tamarind. This healthy and nutritious dish is popular throughout South India and is often served with coconut chutney and ghee. It\'s a must-try for anyone visiting Chennai.',
      actions: {
        primary: {
          label: 'Find Restaurants',
          type: 'places_search',
          query: 'traditional idli sambar restaurants Chennai'
        },
        secondary: {
          label: 'Cooking Class',
          type: 'external_link',
          url: 'https://www.tamilnadutourism.tn.gov.in/activities/cooking-classes'
        }
      },
      best_time: 'Breakfast or brunch',
      duration: '20-30 minutes'
    },
    {
      id: 'dosa_chennai',
      place_id: 'chennai_tamil_nadu',
      state_id: 'tamil_nadu',
      category: 'food',
      name: 'Dosa',
      description: 'Crispy crepe made from fermented rice and lentil batter, a South Indian specialty.',
      details: 'Dosa is a popular South Indian dish made from fermented rice and urad dal batter, cooked into thin, crispy crepes. It comes in various types including plain dosa, masala dosa (with potato filling), and rava dosa (made with semolina). Dosa is typically served with sambar, coconut chutney, and tomato chutney. This versatile dish can be enjoyed for breakfast, lunch, or dinner and is loved by people of all ages.',
      actions: {
        primary: {
          label: 'Find Restaurants',
          type: 'places_search',
          query: 'authentic dosa restaurants Chennai'
        },
        secondary: {
          label: 'Dosa Varieties',
          type: 'modal',
          content: 'Explore different types of dosas including masala dosa, rava dosa, and specialty varieties available in Chennai.'
        }
      },
      best_time: 'Any time of day',
      duration: '15-20 minutes'
    },
    {
      id: 'bharatanatyam_chennai',
      place_id: 'chennai_tamil_nadu',
      state_id: 'tamil_nadu',
      category: 'customs',
      name: 'Bharatanatyam Dance',
      description: 'Classical Indian dance form originating from Tamil Nadu, known for its grace and expressions.',
      details: 'Bharatanatyam is one of the oldest classical dance forms of India, originating from Tamil Nadu. It combines elements of dance, music, and drama to tell stories from Hindu mythology. The dance is characterized by intricate footwork, hand gestures (mudras), facial expressions, and body movements. Bharatanatyam performances are usually accompanied by classical Carnatic music and are performed in temples and cultural centers. It\'s a significant part of Tamil culture and heritage.',
      actions: {
        primary: {
          label: 'Watch Performance',
          type: 'external_link',
          url: 'https://www.tamilnadutourism.tn.gov.in/activities/cultural-performances'
        },
        secondary: {
          label: 'Learn Bharatanatyam',
          type: 'modal',
          content: 'Join Bharatanatyam classes to learn basic mudras, expressions, and movements. Suitable for beginners and cultural enthusiasts.'
        }
      },
      best_time: 'Evening performances (6:00 PM onwards)',
      duration: '1-2 hours'
    },
    {
      id: 'kolam_chennai',
      place_id: 'chennai_tamil_nadu',
      state_id: 'tamil_nadu',
      category: 'customs',
      name: 'Kolam Art',
      description: 'Traditional Tamil art of drawing geometric patterns with rice flour at doorsteps.',
      details: 'Kolam is a traditional Tamil art form where intricate geometric patterns are drawn using rice flour at doorsteps and courtyards. This daily ritual is performed by women as a form of prayer and decoration. Kolam designs are passed down through generations and vary according to festivals and occasions. The art form is considered auspicious and is believed to bring prosperity and ward off evil spirits. It\'s a beautiful expression of Tamil culture and tradition.',
      actions: {
        primary: {
          label: 'Kolam Workshop',
          type: 'external_link',
          url: 'https://www.tamilnadutourism.tn.gov.in/activities/cultural-workshops'
        },
        secondary: {
          label: 'Learn Kolam',
          type: 'modal',
          content: 'Learn traditional Kolam patterns and techniques from local artists. Includes basic designs and festival-specific patterns.'
        }
      },
      best_time: 'Early morning (traditional time)',
      duration: '30-45 minutes'
    },
    {
      id: 'pongal_festival_chennai',
      place_id: 'chennai_tamil_nadu',
      state_id: 'tamil_nadu',
      category: 'festivals',
      name: 'Pongal Festival',
      description: 'Tamil harvest festival celebrated with great enthusiasm and traditional rituals.',
      details: 'Pongal is Tamil Nadu\'s most important harvest festival, celebrated over four days in January. The festival marks the end of the winter solstice and the beginning of the harvest season. The main ritual involves cooking rice with milk and jaggery in clay pots until it overflows, symbolizing abundance and prosperity. Pongal is celebrated with traditional music, dance, bull-taming events (Jallikattu), and feasting. It\'s a time for family gatherings and expressing gratitude to nature.',
      actions: {
        primary: {
          label: 'Festival Calendar',
          type: 'external_link',
          url: 'https://www.tamilnadutourism.tn.gov.in/events/pongal-festival'
        },
        secondary: {
          label: 'Pongal Experience',
          type: 'modal',
          content: 'Experience traditional Pongal celebrations including cooking rituals, cultural performances, and local festivities.'
        }
      },
      best_time: 'January (4 days festival)',
      duration: '4 days festival'
    },
    {
      id: 'music_season_chennai',
      place_id: 'chennai_tamil_nadu',
      state_id: 'tamil_nadu',
      category: 'festivals',
      name: 'Chennai Music Season',
      description: 'World\'s largest cultural event featuring classical music and dance performances.',
      details: 'Chennai Music Season is the world\'s largest cultural event, held annually from mid-December to mid-January. The festival features hundreds of classical music and dance performances by renowned artists from across India. Venues include temples, auditoriums, and cultural centers throughout Chennai. The festival attracts music lovers from around the world and is a celebration of South Indian classical arts. It\'s a must-experience event for classical music enthusiasts.',
      actions: {
        primary: {
          label: 'Concert Schedule',
          type: 'external_link',
          url: 'https://www.tamilnadutourism.tn.gov.in/events/music-season'
        },
        secondary: {
          label: 'VIP Passes',
          type: 'modal',
          content: 'Get premium passes for the best concerts and performances during Chennai Music Season.'
        }
      },
      best_time: 'December-January (month-long festival)',
      duration: '1 month festival'
    },
    {
      id: 'pallava_dynasty_chennai',
      place_id: 'chennai_tamil_nadu',
      state_id: 'tamil_nadu',
      category: 'history',
      name: 'Pallava Dynasty',
      description: 'Ancient Tamil dynasty known for magnificent rock-cut temples and architectural marvels.',
      details: 'The Pallava dynasty ruled parts of South India from the 3rd to 9th centuries CE and is known for its magnificent rock-cut temples and architectural innovations. The Pallavas were great patrons of art and architecture, creating masterpieces like the Shore Temple at Mahabalipuram and various cave temples. They played a crucial role in the development of Dravidian architecture and Tamil literature. The dynasty\'s influence extended to Southeast Asia, where Pallava art and architecture can still be seen.',
      actions: {
        primary: {
          label: 'Heritage Sites',
          type: 'external_link',
          url: 'https://www.tamilnadutourism.tn.gov.in/attractions/pallava-heritage'
        },
        secondary: {
          label: 'Historical Tour',
          type: 'modal',
          content: 'Explore Pallava heritage sites including rock-cut temples, cave temples, and architectural marvels with expert guides.'
        }
      },
      best_time: 'Morning hours for historical tours',
      duration: '2-3 hours'
    },
    {
      id: 'tamil_literature_chennai',
      place_id: 'chennai_tamil_nadu',
      state_id: 'tamil_nadu',
      category: 'history',
      name: 'Tamil Literature',
      description: 'Rich literary tradition spanning over 2000 years with classical and modern works.',
      details: 'Tamil literature has a rich history spanning over 2000 years, making it one of the oldest literary traditions in the world. The Sangam literature (300 BCE - 300 CE) represents the golden age of Tamil literature, featuring poetry, epics, and philosophical works. Classical works like Thirukkural, Silappadikaram, and Manimekalai are considered masterpieces. Modern Tamil literature continues to flourish with contemporary writers contributing to various genres. Chennai has been a center of Tamil literary activity for centuries.',
      actions: {
        primary: {
          label: 'Literary Sites',
          type: 'external_link',
          url: 'https://www.tamilnadutourism.tn.gov.in/attractions/literary-heritage'
        },
        secondary: {
          label: 'Literature Tour',
          type: 'modal',
          content: 'Visit important literary sites, libraries, and cultural centers that showcase Tamil literature and its evolution.'
        }
      },
      best_time: 'Morning hours for library visits',
      duration: '2-3 hours'
    }
  ]
};

export default tamilNaduData;
