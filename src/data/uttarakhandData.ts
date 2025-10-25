// Uttarakhand Data Collection Script
// Comprehensive data for Uttarakhand state with 8 places and 5 categories each

export const uttarakhandData = {
  // State Level Data
  state: {
    id: 'uttarakhand',
    name: 'Uttarakhand',
    capital: 'Dehradun',
    description: 'Uttarakhand, known as the "Land of Gods," is a state in northern India famous for its spiritual significance, Himalayan peaks, and adventure tourism. It\'s home to the Char Dham pilgrimage sites and offers breathtaking natural beauty.',
    coordinates: { lat: 30.0668, lng: 79.0193 },
    best_time_to_visit: 'April to June, September to November',
    languages: ['Hindi', 'Garhwali', 'Kumaoni', 'English'],
    population: '10.1 million',
    area_sq_km: 53483,
    banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
  },

  // Places Data (8 places)
  places: [
    {
      id: 'rishikesh_uttarakhand',
      state_id: 'uttarakhand',
      name: 'Rishikesh',
      type: 'city',
      nickname: 'Yoga Capital of the World',
      description: 'A spiritual city on the banks of the Ganges, Rishikesh is famous for yoga, meditation, and adventure sports. It\'s a gateway to the Himalayas and a center of spiritual learning.',
      coordinates: { lat: 30.0869, lng: 78.2676 },
      population: '102,000',
      best_time_to_visit: 'October to April',
      how_to_reach: {
        by_air: 'Jolly Grant Airport (35 km away)',
        by_train: 'Haridwar Railway Station (25 km away)',
        by_road: 'NH 58',
        by_bus: 'Uttarakhand State Transport buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'haridwar_uttarakhand',
      state_id: 'uttarakhand',
      name: 'Haridwar',
      type: 'city',
      nickname: 'Gateway to God',
      description: 'One of the seven holiest places in Hinduism, Haridwar is famous for the Ganga Aarti and Kumbh Mela. It\'s a sacred city where the Ganges enters the plains.',
      coordinates: { lat: 29.9457, lng: 78.1642 },
      population: '228,000',
      best_time_to_visit: 'October to March',
      how_to_reach: {
        by_air: 'Jolly Grant Airport (40 km away)',
        by_train: 'Haridwar Railway Station',
        by_road: 'NH 58',
        by_bus: 'Uttarakhand State Transport buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'nainital_uttarakhand',
      state_id: 'uttarakhand',
      name: 'Nainital',
      type: 'hill_station',
      nickname: 'Lake District of India',
      description: 'A beautiful hill station famous for its pristine lake, colonial architecture, and pleasant climate. Nainital offers stunning views and peaceful retreats.',
      coordinates: { lat: 29.3919, lng: 79.4542 },
      population: '41,000',
      best_time_to_visit: 'March to June, September to November',
      how_to_reach: {
        by_air: 'Pantnagar Airport (70 km away)',
        by_train: 'Kathgodam Railway Station (35 km away)',
        by_road: 'NH 87',
        by_bus: 'Uttarakhand State Transport buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'mussoorie_uttarakhand',
      state_id: 'uttarakhand',
      name: 'Mussoorie',
      type: 'hill_station',
      nickname: 'Queen of Hills',
      description: 'A charming hill station known for its colonial charm, scenic views, and pleasant weather. Mussoorie offers breathtaking views of the Himalayas.',
      coordinates: { lat: 30.4598, lng: 78.0644 },
      population: '30,000',
      best_time_to_visit: 'April to June, September to November',
      how_to_reach: {
        by_air: 'Jolly Grant Airport (60 km away)',
        by_train: 'Dehradun Railway Station (35 km away)',
        by_road: 'NH 7',
        by_bus: 'Uttarakhand State Transport buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'kedarnath_uttarakhand',
      state_id: 'uttarakhand',
      name: 'Kedarnath',
      type: 'heritage_site',
      nickname: 'Abode of Lord Shiva',
      description: 'One of the Char Dham pilgrimage sites, Kedarnath is a sacred temple town located in the Himalayas. It\'s one of the most important Hindu pilgrimage destinations.',
      coordinates: { lat: 30.7346, lng: 79.0669 },
      population: '612',
      best_time_to_visit: 'May to October',
      how_to_reach: {
        by_air: 'Jolly Grant Airport (250 km away)',
        by_train: 'Rishikesh Railway Station (200 km away)',
        by_road: 'NH 58, State Highway 1',
        by_bus: 'Uttarakhand State Transport buses to Gaurikund'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'badrinath_uttarakhand',
      state_id: 'uttarakhand',
      name: 'Badrinath',
      type: 'heritage_site',
      nickname: 'Abode of Lord Vishnu',
      description: 'Another Char Dham pilgrimage site, Badrinath is a sacred temple town dedicated to Lord Vishnu. It\'s located in the Chamoli district of Uttarakhand.',
      coordinates: { lat: 30.7448, lng: 79.4937 },
      population: '841',
      best_time_to_visit: 'May to October',
      how_to_reach: {
        by_air: 'Jolly Grant Airport (300 km away)',
        by_train: 'Rishikesh Railway Station (300 km away)',
        by_road: 'NH 58, State Highway 1',
        by_bus: 'Uttarakhand State Transport buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'auli_uttarakhand',
      state_id: 'uttarakhand',
      name: 'Auli',
      type: 'hill_station',
      nickname: 'Skiing Capital of India',
      description: 'A popular skiing destination with stunning views of the Himalayas. Auli offers world-class skiing facilities and breathtaking mountain scenery.',
      coordinates: { lat: 30.5000, lng: 79.5500 },
      population: '500',
      best_time_to_visit: 'December to March (skiing), April to November (trekking)',
      how_to_reach: {
        by_air: 'Jolly Grant Airport (280 km away)',
        by_train: 'Rishikesh Railway Station (250 km away)',
        by_road: 'NH 58, State Highway 1',
        by_bus: 'Uttarakhand State Transport buses to Joshimath'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    },
    {
      id: 'jim_corbett_uttarakhand',
      state_id: 'uttarakhand',
      name: 'Jim Corbett National Park',
      type: 'heritage_site',
      nickname: 'Tiger Reserve',
      description: 'India\'s first national park and tiger reserve, famous for its wildlife safaris and conservation efforts. It\'s named after the famous hunter-turned-conservationist Jim Corbett.',
      coordinates: { lat: 29.5000, lng: 78.7500 },
      population: '500',
      best_time_to_visit: 'November to June',
      how_to_reach: {
        by_air: 'Pantnagar Airport (50 km away)',
        by_train: 'Ramnagar Railway Station (12 km away)',
        by_road: 'NH 121',
        by_bus: 'Uttarakhand State Transport buses'
      },
      banner_image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920'
    }
  ],

  // Cultural Items Data (5 categories per place)
  culturalItems: [
    // RISHIKESH CULTURAL ITEMS
    {
      id: 'lakshman_jhula_rishikesh',
      place_id: 'rishikesh_uttarakhand',
      state_id: 'uttarakhand',
      category: 'monuments',
      name: 'Lakshman Jhula',
      description: 'Iconic suspension bridge over the Ganges, named after Lord Lakshman.',
      details: 'Lakshman Jhula is a famous suspension bridge over the Ganges River in Rishikesh. Built in 1929, it\'s named after Lord Lakshman, who is believed to have crossed the river at this spot using a jute rope. The bridge connects the two banks of Rishikesh and offers beautiful views of the river and surrounding hills. It\'s a popular spot for photography and is considered a symbol of Rishikesh\'s spiritual significance.',
      coordinates: { lat: 30.0869, lng: 78.2676 },
      actions: {
        primary: {
          label: 'Visit Information',
          type: 'external_link',
          url: 'https://www.uttarakhandtourism.gov.in/attractions/lakshman-jhula'
        },
        secondary: {
          label: 'Bridge Walk',
          type: 'modal',
          content: 'Take a guided walk across Lakshman Jhula to learn about its history and enjoy the scenic views.'
        }
      },
      opening_hours: '24/7',
      best_time: 'Early morning or evening for photography',
      duration: '30 minutes'
    },
    {
      id: 'triveni_ghat_rishikesh',
      place_id: 'rishikesh_uttarakhand',
      state_id: 'uttarakhand',
      category: 'monuments',
      name: 'Triveni Ghat',
      description: 'Sacred bathing ghat where three rivers meet, famous for Ganga Aarti.',
      details: 'Triveni Ghat is a sacred bathing ghat in Rishikesh where three rivers - Ganges, Yamuna, and Saraswati - are believed to meet. It\'s one of the most important ghats in Rishikesh and is famous for its evening Ganga Aarti ceremony. The ghat is a popular spot for pilgrims to take holy dips and perform religious rituals. The evening aarti is a beautiful spiritual experience with lamps, prayers, and devotional songs.',
      coordinates: { lat: 30.0869, lng: 78.2676 },
      actions: {
        primary: {
          label: 'Ganga Aarti',
          type: 'external_link',
          url: 'https://www.uttarakhandtourism.gov.in/attractions/triveni-ghat'
        },
        secondary: {
          label: 'Spiritual Tour',
          type: 'modal',
          content: 'Join guided spiritual tours to experience the Ganga Aarti and learn about the religious significance.'
        }
      },
      opening_hours: '5:00 AM - 9:00 PM',
      best_time: 'Evening for Ganga Aarti (6:00 PM)',
      duration: '1 hour'
    },
    {
      id: 'neelkanth_mahadev_rishikesh',
      place_id: 'rishikesh_uttarakhand',
      state_id: 'uttarakhand',
      category: 'monuments',
      name: 'Neelkanth Mahadev Temple',
      description: 'Ancient temple dedicated to Lord Shiva, located in the mountains.',
      details: 'Neelkanth Mahadev Temple is an ancient temple dedicated to Lord Shiva, located at an altitude of 1330 meters in the mountains near Rishikesh. The temple is named after Lord Shiva\'s blue throat (Neelkanth) from the churning of the ocean. The temple offers stunning views of the surrounding mountains and valleys. It\'s a popular pilgrimage destination and requires a trek through beautiful forest trails to reach the temple.',
      coordinates: { lat: 30.0869, lng: 78.2676 },
      actions: {
        primary: {
          label: 'Temple Visit',
          type: 'external_link',
          url: 'https://www.uttarakhandtourism.gov.in/attractions/neelkanth-mahadev'
        },
        secondary: {
          label: 'Trekking Tour',
          type: 'modal',
          content: 'Join guided trekking tours to Neelkanth Mahadev Temple through scenic forest trails.'
        }
      },
      opening_hours: '6:00 AM - 7:00 PM',
      best_time: 'Early morning for peaceful visit',
      duration: '2-3 hours (including trek)'
    },
    {
      id: 'garhwali_thali_rishikesh',
      place_id: 'rishikesh_uttarakhand',
      state_id: 'uttarakhand',
      category: 'food',
      name: 'Garhwali Thali',
      description: 'Traditional Uttarakhand meal with local delicacies and mountain flavors.',
      details: 'Garhwali Thali is a traditional Uttarakhand meal that showcases the local cuisine of the Garhwal region. The thali includes dishes like mandua ki roti (finger millet bread), gahat dal (horse gram dal), chainsoo (black gram curry), and local vegetables. The cuisine is known for its simple yet nutritious ingredients and mountain flavors. It\'s a must-try for anyone visiting Uttarakhand to experience the authentic local food culture.',
      actions: {
        primary: {
          label: 'Find Restaurants',
          type: 'places_search',
          query: 'authentic Garhwali thali restaurants Rishikesh'
        },
        secondary: {
          label: 'Cooking Class',
          type: 'external_link',
          url: 'https://www.uttarakhandtourism.gov.in/activities/cooking-classes'
        }
      },
      best_time: 'Lunch or dinner',
      duration: '45 minutes to 1 hour'
    },
    {
      id: 'bal_mithai_rishikesh',
      place_id: 'rishikesh_uttarakhand',
      state_id: 'uttarakhand',
      category: 'food',
      name: 'Bal Mithai',
      description: 'Traditional Uttarakhand sweet made with khoya and sugar, a local delicacy.',
      details: 'Bal Mithai is a traditional Uttarakhand sweet that\'s popular throughout the state. Made with khoya (reduced milk) and sugar, it has a unique brown color and is often coated with white sugar balls. The sweet is known for its rich taste and is a favorite among locals and tourists. It\'s often served during festivals and special occasions. Bal Mithai is a must-try dessert for anyone visiting Uttarakhand.',
      actions: {
        primary: {
          label: 'Find Sweet Shops',
          type: 'places_search',
          query: 'traditional Bal Mithai sweet shops Rishikesh'
        },
        secondary: {
          label: 'Sweet Making',
          type: 'modal',
          content: 'Learn to make authentic Bal Mithai with traditional Uttarakhand methods.'
        }
      },
      best_time: 'After meals or tea time',
      duration: '15-20 minutes'
    },
    {
      id: 'yoga_practice_rishikesh',
      place_id: 'rishikesh_uttarakhand',
      state_id: 'uttarakhand',
      category: 'customs',
      name: 'Yoga Practice',
      description: 'Traditional yoga practice and meditation, Rishikesh\'s spiritual heritage.',
      details: 'Yoga practice is deeply rooted in Rishikesh\'s spiritual heritage, making it the "Yoga Capital of the World." The city is home to numerous yoga schools, ashrams, and meditation centers where people from around the world come to learn and practice yoga. Traditional yoga practices include asanas (postures), pranayama (breathing exercises), and meditation. Rishikesh offers authentic yoga experiences in serene settings along the Ganges.',
      actions: {
        primary: {
          label: 'Yoga Classes',
          type: 'external_link',
          url: 'https://www.uttarakhandtourism.gov.in/activities/yoga-classes'
        },
        secondary: {
          label: 'Yoga Retreat',
          type: 'modal',
          content: 'Join yoga retreats for intensive practice, meditation, and spiritual learning.'
        }
      },
      best_time: 'Early morning (5:00 AM - 7:00 AM)',
      duration: '1-2 hours'
    },
    {
      id: 'kumbh_mela_haridwar',
      place_id: 'haridwar_uttarakhand',
      state_id: 'uttarakhand',
      category: 'festivals',
      name: 'Kumbh Mela',
      description: 'World\'s largest religious gathering, held every 12 years in Haridwar.',
      details: 'Kumbh Mela is the world\'s largest religious gathering, held every 12 years in Haridwar. The festival attracts millions of pilgrims from across India and the world. The main ritual involves taking a holy dip in the Ganges River at Har Ki Pauri. The festival includes religious ceremonies, cultural performances, and spiritual discourses. It\'s a unique opportunity to experience India\'s spiritual heritage and witness the largest human gathering on Earth.',
      actions: {
        primary: {
          label: 'Festival Information',
          type: 'external_link',
          url: 'https://www.uttarakhandtourism.gov.in/events/kumbh-mela'
        },
        secondary: {
          label: 'Pilgrimage Tour',
          type: 'modal',
          content: 'Join guided pilgrimage tours during Kumbh Mela to experience the spiritual significance and cultural activities.'
        }
      },
      best_time: 'Every 12 years (next in 2030)',
      duration: '1 month festival'
    },
    {
      id: 'char_dham_yatra_uttarakhand',
      place_id: 'rishikesh_uttarakhand',
      state_id: 'uttarakhand',
      category: 'history',
      name: 'Char Dham Yatra',
      description: 'Sacred pilgrimage circuit covering four holy sites in Uttarakhand.',
      details: 'Char Dham Yatra is a sacred pilgrimage circuit covering four holy sites in Uttarakhand: Yamunotri, Gangotri, Kedarnath, and Badrinath. The yatra is considered one of the most important pilgrimages in Hinduism and is believed to wash away sins and bring spiritual liberation. The journey takes pilgrims through beautiful mountain landscapes and challenging terrains. The yatra is typically undertaken during the summer months when the temples are accessible.',
      actions: {
        primary: {
          label: 'Yatra Information',
          type: 'external_link',
          url: 'https://www.uttarakhandtourism.gov.in/attractions/char-dham-yatra'
        },
        secondary: {
          label: 'Guided Yatra',
          type: 'modal',
          content: 'Join guided Char Dham Yatra with expert guides, accommodation, and transportation arrangements.'
        }
      },
      best_time: 'May to October',
      duration: '10-12 days'
    }
  ]
};

export default uttarakhandData;
