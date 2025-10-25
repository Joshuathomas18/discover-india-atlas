// Kerala Data Collection Script
// Comprehensive data for Kerala state with 8 places and 5 categories each

export const keralaData = {
  // State Level Data
  state: {
    id: 'kerala',
    name: 'Kerala',
    capital: 'Thiruvananthapuram',
    description: 'Kerala, known as "God\'s Own Country," is a tropical paradise in southern India famous for its backwaters, beaches, hill stations, and rich cultural heritage. The state is renowned for its Ayurvedic treatments, traditional Kathakali dance, and unique cuisine featuring coconut and spices.',
    coordinates: { lat: 10.8505, lng: 76.2711 },
    best_time_to_visit: 'October to March (winter season)',
    languages: ['Malayalam', 'English', 'Tamil'],
    population: '33.4 million',
    area_sq_km: 38863,
    banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
  },

  // Places Data (8 places)
  places: [
    {
      id: 'kochi_kerala',
      state_id: 'kerala',
      name: 'Kochi',
      type: 'city',
      nickname: 'Queen of the Arabian Sea',
      description: 'Kochi is a vibrant port city blending colonial heritage with modern development. Known for its Chinese fishing nets, spice markets, and diverse cultural influences from Portuguese, Dutch, and British colonial periods.',
      coordinates: { lat: 9.9312, lng: 76.2673 },
      population: '2.1 million',
      best_time_to_visit: 'October to March',
      how_to_reach: {
        by_air: 'Cochin International Airport (COK)',
        by_train: 'Ernakulam Junction Railway Station',
        by_road: 'NH 66, NH 544',
        by_bus: 'KSRTC buses from major cities'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'thiruvananthapuram_kerala',
      state_id: 'kerala',
      name: 'Thiruvananthapuram',
      type: 'city',
      nickname: 'Evergreen City of India',
      description: 'The capital city of Kerala, Thiruvananthapuram is known for its rich cultural heritage, beautiful beaches, and the famous Padmanabhaswamy Temple. It\'s a perfect blend of tradition and modernity.',
      coordinates: { lat: 8.5241, lng: 76.9366 },
      population: '957,730',
      best_time_to_visit: 'October to March',
      how_to_reach: {
        by_air: 'Trivandrum International Airport (TRV)',
        by_train: 'Thiruvananthapuram Central Railway Station',
        by_road: 'NH 66, NH 544',
        by_bus: 'KSRTC buses from all major cities'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'munnar_kerala',
      state_id: 'kerala',
      name: 'Munnar',
      type: 'hill_station',
      nickname: 'Kashmir of South India',
      description: 'A picturesque hill station famous for its tea plantations, misty mountains, and cool climate. Munnar offers breathtaking views of rolling hills covered in emerald green tea gardens.',
      coordinates: { lat: 10.0889, lng: 77.0595 },
      population: '68,000',
      best_time_to_visit: 'September to May',
      how_to_reach: {
        by_air: 'Cochin International Airport (120 km away)',
        by_train: 'Aluva Railway Station (110 km away)',
        by_road: 'NH 85, State Highway 17',
        by_bus: 'KSRTC buses from Kochi and Coimbatore'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'alleppey_kerala',
      state_id: 'kerala',
      name: 'Alleppey',
      type: 'city',
      nickname: 'Venice of the East',
      description: 'Famous for its backwaters, houseboats, and serene waterways. Alleppey is the gateway to Kerala\'s backwater tourism and offers unique experiences of traditional village life.',
      coordinates: { lat: 9.4981, lng: 76.3388 },
      population: '174,000',
      best_time_to_visit: 'October to March',
      how_to_reach: {
        by_air: 'Cochin International Airport (85 km away)',
        by_train: 'Alappuzha Railway Station',
        by_road: 'NH 66, NH 544',
        by_bus: 'KSRTC buses from Kochi and Thiruvananthapuram'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'wayanad_kerala',
      state_id: 'kerala',
      name: 'Wayanad',
      type: 'hill_station',
      nickname: 'Green Paradise',
      description: 'A pristine hill district known for its wildlife sanctuaries, spice plantations, and tribal culture. Wayanad offers a perfect escape into nature with its dense forests and misty mountains.',
      coordinates: { lat: 11.6850, lng: 76.1319 },
      population: '817,420',
      best_time_to_visit: 'October to May',
      how_to_reach: {
        by_air: 'Calicut International Airport (95 km away)',
        by_train: 'Kozhikode Railway Station (100 km away)',
        by_road: 'NH 766, State Highway 29',
        by_bus: 'KSRTC buses from Kozhikode and Bangalore'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'kovalam_kerala',
      state_id: 'kerala',
      name: 'Kovalam',
      type: 'beach',
      nickname: 'Paradise Beach',
      description: 'A world-famous beach destination known for its crescent-shaped beaches, lighthouse, and Ayurvedic treatments. Kovalam attracts tourists seeking relaxation and wellness.',
      coordinates: { lat: 8.4004, lng: 77.0063 },
      population: '12,000',
      best_time_to_visit: 'October to March',
      how_to_reach: {
        by_air: 'Trivandrum International Airport (16 km away)',
        by_train: 'Thiruvananthapuram Central (16 km away)',
        by_road: 'NH 66',
        by_bus: 'KSRTC buses from Thiruvananthapuram'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'thekkady_kerala',
      state_id: 'kerala',
      name: 'Thekkady',
      type: 'heritage_site',
      nickname: 'Wildlife Paradise',
      description: 'Home to Periyar National Park and Tiger Reserve, Thekkady is famous for wildlife safaris, spice plantations, and adventure activities. It\'s a haven for nature lovers and wildlife enthusiasts.',
      coordinates: { lat: 9.6100, lng: 77.1600 },
      population: '45,000',
      best_time_to_visit: 'October to May',
      how_to_reach: {
        by_air: 'Cochin International Airport (190 km away)',
        by_train: 'Kottayam Railway Station (114 km away)',
        by_road: 'NH 85, State Highway 19',
        by_bus: 'KSRTC buses from Kottayam and Kochi'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'varkala_kerala',
      state_id: 'kerala',
      name: 'Varkala',
      type: 'beach',
      nickname: 'Spiritual Beach Town',
      description: 'A unique beach destination known for its cliff-top beaches, mineral springs, and spiritual significance. Varkala offers a perfect blend of beach relaxation and cultural exploration.',
      coordinates: { lat: 8.7333, lng: 76.7167 },
      population: '42,000',
      best_time_to_visit: 'October to March',
      how_to_reach: {
        by_air: 'Trivandrum International Airport (50 km away)',
        by_train: 'Varkala Railway Station',
        by_road: 'NH 66',
        by_bus: 'KSRTC buses from Thiruvananthapuram'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    }
  ],

  // Cultural Items Data (5 categories per place)
  culturalItems: [
    // KOCHI CULTURAL ITEMS
    {
      id: 'fort_kochi_kochi',
      place_id: 'kochi_kerala',
      state_id: 'kerala',
      category: 'monuments',
      name: 'Fort Kochi',
      description: 'Historic colonial fort area with Portuguese, Dutch, and British architectural influences.',
      details: 'Fort Kochi is a historic area that showcases the colonial heritage of Kerala. Built by the Portuguese in 1503, it features charming colonial architecture, narrow streets, and historic churches. The area is famous for its Chinese fishing nets, St. Francis Church (where Vasco da Gama was initially buried), and the Dutch Palace. Walking through Fort Kochi feels like stepping back in time, with its colonial bungalows, art galleries, and spice warehouses.',
      coordinates: { lat: 9.9688, lng: 76.2450 },
      actions: {
        primary: {
          label: 'Plan Visit',
          type: 'external_link',
          url: 'https://www.keralatourism.org/destination/fort-kochi/1'
        },
        secondary: {
          label: 'Walking Tour',
          type: 'modal',
          content: 'Explore Fort Kochi with guided walking tours covering colonial history, architecture, and local culture. Tours include visits to St. Francis Church, Chinese fishing nets, and spice markets.'
        }
      },
      opening_hours: '24/7 (outdoor area)',
      best_time: 'Early morning or evening for photography',
      duration: '2-3 hours'
    },
    {
      id: 'chinese_fishing_nets_kochi',
      place_id: 'kochi_kerala',
      state_id: 'kerala',
      category: 'monuments',
      name: 'Chinese Fishing Nets',
      description: 'Iconic cantilevered fishing nets that have become a symbol of Kochi.',
      details: 'The Chinese fishing nets are one of Kochi\'s most recognizable landmarks. These massive cantilevered nets were introduced by Chinese traders in the 14th century. Each net is operated by a team of fishermen using a system of weights and pulleys. The nets are lowered into the water and raised after a few minutes to catch fish. This traditional fishing method is still practiced today and offers a unique photo opportunity, especially during sunset when the nets are silhouetted against the orange sky.',
      coordinates: { lat: 9.9688, lng: 76.2450 },
      actions: {
        primary: {
          label: 'Photography Guide',
          type: 'modal',
          content: 'Best photography spots and timing for capturing the Chinese fishing nets. Includes tips for sunrise, sunset, and golden hour photography.'
        },
        secondary: {
          label: 'Fishing Experience',
          type: 'external_link',
          url: 'https://www.keralatourism.org/activities/chinese-fishing-nets/1'
        }
      },
      opening_hours: 'Early morning to evening',
      best_time: 'Sunrise and sunset for photography',
      duration: '30 minutes to 1 hour'
    },
    {
      id: 'mattancherry_palace_kochi',
      place_id: 'kochi_kerala',
      state_id: 'kerala',
      category: 'monuments',
      name: 'Mattancherry Palace',
      description: '16th-century Portuguese palace known for its beautiful murals and Kerala architecture.',
      details: 'Also known as the Dutch Palace, Mattancherry Palace was built by the Portuguese in 1555 and later renovated by the Dutch. The palace is famous for its exquisite murals depicting scenes from the Ramayana, Mahabharata, and Puranas. The architecture is a perfect blend of Portuguese and Kerala styles, featuring a traditional Kerala courtyard surrounded by rooms with wooden ceilings and intricate carvings. The palace houses a museum with royal artifacts, portraits, and historical documents.',
      coordinates: { lat: 9.9581, lng: 76.2589 },
      actions: {
        primary: {
          label: 'Buy Tickets',
          type: 'external_link',
          url: 'https://www.keralatourism.org/destination/mattancherry-palace/1'
        },
        secondary: {
          label: 'Audio Guide',
          type: 'modal',
          content: 'Get detailed information about the palace history, murals, and royal artifacts with our comprehensive audio guide.'
        }
      },
      opening_hours: '10:00 AM - 5:00 PM (Closed on Fridays)',
      entry_fee: 'INR 5 (Indians), INR 100 (Foreigners)',
      best_time: 'Morning hours for better lighting',
      duration: '1-2 hours'
    },
    {
      id: 'kerala_fish_curry_kochi',
      place_id: 'kochi_kerala',
      state_id: 'kerala',
      category: 'food',
      name: 'Kerala Fish Curry',
      description: 'Traditional coconut-based fish curry, a staple of Kerala cuisine.',
      details: 'Kerala Fish Curry is the quintessential dish of Kerala, made with fresh fish cooked in a coconut milk and tamarind-based gravy. The curry is flavored with traditional spices like turmeric, red chilies, curry leaves, and mustard seeds. The tangy and spicy flavors perfectly complement the tender fish. This dish is typically served with steamed rice and is a must-try for seafood lovers visiting Kerala.',
      actions: {
        primary: {
          label: 'Find Restaurants',
          type: 'places_search',
          query: 'traditional Kerala fish curry restaurants Kochi'
        },
        secondary: {
          label: 'Recipe Guide',
          type: 'modal',
          content: 'Learn to make authentic Kerala Fish Curry at home with traditional cooking methods and authentic spices.'
        }
      },
      best_time: 'Lunch or dinner',
      duration: '30-45 minutes'
    },
    {
      id: 'appam_kochi',
      place_id: 'kochi_kerala',
      state_id: 'kerala',
      category: 'food',
      name: 'Appam',
      description: 'Soft, lacy rice pancakes, a traditional breakfast dish of Kerala.',
      details: 'Appam is a traditional Kerala breakfast dish made from fermented rice batter and coconut milk. These soft, lacy pancakes have a crispy edge and a soft center. They are typically served with coconut milk, vegetable stew, or egg curry. The fermentation process gives appam its unique taste and texture. This dish is popular throughout Kerala and is often prepared during festivals and special occasions.',
      actions: {
        primary: {
          label: 'Find Restaurants',
          type: 'places_search',
          query: 'traditional appam breakfast restaurants Kochi'
        },
        secondary: {
          label: 'Cooking Class',
          type: 'external_link',
          url: 'https://www.keralatourism.org/activities/cooking-classes/1'
        }
      },
      best_time: 'Breakfast or brunch',
      duration: '20-30 minutes'
    },
    {
      id: 'kathakali_kochi',
      place_id: 'kochi_kerala',
      state_id: 'kerala',
      category: 'customs',
      name: 'Kathakali Dance',
      description: 'Classical dance-drama form of Kerala with elaborate costumes and makeup.',
      details: 'Kathakali is a classical dance-drama form that originated in Kerala. It combines elements of dance, music, and acting to tell stories from Hindu epics. Performers wear elaborate costumes, colorful makeup, and masks to portray different characters. The art form is known for its intricate hand gestures (mudras), facial expressions, and eye movements. Kathakali performances are usually held in temples and cultural centers, lasting several hours and telling epic stories through dance.',
      actions: {
        primary: {
          label: 'Watch Performance',
          type: 'external_link',
          url: 'https://www.keralatourism.org/activities/kathakali/1'
        },
        secondary: {
          label: 'Learn Kathakali',
          type: 'modal',
          content: 'Join Kathakali workshops to learn basic mudras, expressions, and movements. Suitable for beginners and cultural enthusiasts.'
        }
      },
      best_time: 'Evening performances (6:00 PM onwards)',
      duration: '2-3 hours'
    },
    {
      id: 'theyyam_kochi',
      place_id: 'kochi_kerala',
      state_id: 'kerala',
      category: 'customs',
      name: 'Theyyam Ritual',
      description: 'Sacred ritual dance form performed in temples and sacred groves.',
      details: 'Theyyam is a sacred ritual dance form performed in temples and sacred groves of Kerala. It is believed to be a form of worship where the performer becomes a deity. The ritual involves elaborate costumes, makeup, and dance movements. Theyyam performances are usually held during festivals and special occasions. The art form is deeply rooted in local traditions and beliefs, making it a unique cultural experience for visitors.',
      actions: {
        primary: {
          label: 'Find Performances',
          type: 'places_search',
          query: 'Theyyam ritual performances Kochi temples'
        },
        secondary: {
          label: 'Cultural Tour',
          type: 'modal',
          content: 'Join guided cultural tours to witness Theyyam performances and learn about the spiritual significance and traditions.'
        }
      },
      best_time: 'Festival seasons and special occasions',
      duration: '1-2 hours'
    },
    {
      id: 'onam_festival_kochi',
      place_id: 'kochi_kerala',
      state_id: 'kerala',
      category: 'festivals',
      name: 'Onam Festival',
      description: 'Kerala\'s biggest harvest festival celebrated with grand feasts and cultural events.',
      details: 'Onam is Kerala\'s most important festival, celebrated to welcome the mythical King Mahabali. The festival lasts for 10 days and includes grand feasts (Onasadya), cultural performances, boat races, and flower decorations (Pookalam). The highlight is the traditional vegetarian feast served on banana leaves with over 20 dishes. Onam brings together people from all communities and is celebrated with great enthusiasm throughout Kerala.',
      actions: {
        primary: {
          label: 'Festival Calendar',
          type: 'external_link',
          url: 'https://www.keralatourism.org/festivals/onam/1'
        },
        secondary: {
          label: 'Onasadya Experience',
          type: 'modal',
          content: 'Experience the traditional Onasadya feast with authentic Kerala dishes served on banana leaves during Onam celebrations.'
        }
      },
      best_time: 'August-September (10 days)',
      duration: '10 days festival'
    },
    {
      id: 'boat_race_kochi',
      place_id: 'kochi_kerala',
      state_id: 'kerala',
      category: 'festivals',
      name: 'Kochi Boat Race',
      description: 'Thrilling snake boat races held during Onam and other festivals.',
      details: 'Kochi Boat Race is a spectacular event featuring traditional snake boats (chundan vallam) racing through the backwaters. The boats are long and narrow, accommodating 100-150 rowers. The races are held during Onam and other festivals, attracting thousands of spectators. The event showcases Kerala\'s maritime heritage and traditional boat-making skills. The races are accompanied by traditional music and celebrations.',
      actions: {
        primary: {
          label: 'Race Schedule',
          type: 'external_link',
          url: 'https://www.keralatourism.org/events/boat-races/1'
        },
        secondary: {
          label: 'VIP Seating',
          type: 'modal',
          content: 'Book premium seating for the best views of the boat races with refreshments and cultural performances.'
        }
      },
      best_time: 'Onam season and festival periods',
      duration: '2-3 hours'
    },
    {
      id: 'vasco_da_gama_kochi',
      place_id: 'kochi_kerala',
      state_id: 'kerala',
      category: 'history',
      name: 'Vasco da Gama\'s Arrival',
      description: 'Historical significance of Portuguese explorer\'s arrival in Kerala.',
      details: 'Vasco da Gama\'s arrival in Kerala in 1498 marked the beginning of European colonial influence in India. He landed in Kappad, near Kozhikode, and later established trade relations with the local rulers. His arrival opened new sea routes between Europe and India, leading to the spice trade that made Kerala famous. The Portuguese later built Fort Kochi and introduced Christianity to the region. This historical event shaped Kerala\'s colonial heritage and cultural diversity.',
      actions: {
        primary: {
          label: 'Historical Sites',
          type: 'external_link',
          url: 'https://www.keralatourism.org/destination/kappad-beach/1'
        },
        secondary: {
          label: 'Heritage Walk',
          type: 'modal',
          content: 'Join guided heritage walks covering Portuguese colonial sites, churches, and historical landmarks related to Vasco da Gama\'s legacy.'
        }
      },
      best_time: 'Morning hours for historical tours',
      duration: '2-3 hours'
    },
    {
      id: 'spice_trade_kochi',
      place_id: 'kochi_kerala',
      state_id: 'kerala',
      category: 'history',
      name: 'Spice Trade Heritage',
      description: 'Kochi\'s role as a major spice trading center for centuries.',
      details: 'Kochi has been a major spice trading center for over 2000 years, attracting traders from Arabia, China, and Europe. The city\'s strategic location made it a gateway for spices like pepper, cardamom, cinnamon, and cloves. The spice trade brought wealth and cultural diversity to Kerala. Today, visitors can explore spice markets, warehouses, and learn about the history of spice trading that shaped Kerala\'s economy and culture.',
      actions: {
        primary: {
          label: 'Spice Market Tour',
          type: 'external_link',
          url: 'https://www.keralatourism.org/activities/spice-tours/1'
        },
        secondary: {
          label: 'Spice Plantation Visit',
          type: 'modal',
          content: 'Visit spice plantations to see how spices are grown, harvested, and processed. Includes tasting sessions and spice buying opportunities.'
        }
      },
      best_time: 'Morning hours for market visits',
      duration: '2-3 hours'
    }
  ]
};

export default keralaData;
