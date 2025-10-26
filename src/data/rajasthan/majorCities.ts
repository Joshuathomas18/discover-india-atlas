// Rajasthan Major Cities Data
// Comprehensive data for 8 major cities in Rajasthan with full cultural information

import { KarnatakaPOI, PlaceTabs, ImageReference } from '../../types/database';

// Helper function to create comprehensive cultural tabs for each city
const createComprehensiveTabs = (cityName: string, cityId: string): PlaceTabs => ({
  monuments: [
    {
      id: `${cityId}_monument_1`,
      place_id: cityId,
      state_id: 'rajasthan',
      category: 'monuments',
      name: `${cityName} Fort`,
      description: `Historic fort showcasing ${cityName}'s royal heritage and architectural grandeur`,
      details: `The ${cityName} Fort is a magnificent structure that reflects the rich cultural heritage of Rajasthan. Built in traditional Rajput architectural style, it features intricate carvings, beautiful courtyards, and historical artifacts. The fort serves as a testament to the region's royal past and architectural excellence.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `rajasthan/places/${cityName.toLowerCase()}/monuments/fort_1.jpg`,
          download_url: '',
          caption: `${cityName} Fort`,
          credit: 'Rajasthan Tourism',
          alt_text: `${cityName} Fort architecture`,
          uploaded_at: new Date()
        }
      ],
      actions: {
        primary: {
          label: 'Buy Tickets',
          type: 'external_link',
          url: `https://${cityName.toLowerCase()}tourism.gov.in/fort-tickets`
        },
        secondary: {
          label: 'Virtual Tour',
          type: 'modal',
          content: `Explore ${cityName} Fort through our virtual tour`
        }
      },
      opening_hours: '9:00 AM - 5:30 PM',
      entry_fee: 'INR 50 (adults), INR 25 (children)',
      best_time: 'Morning hours for better lighting',
      duration: '2-3 hours',
      accessibility_info: 'Wheelchair accessible',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: `${cityId}_monument_2`,
      place_id: cityId,
      state_id: 'rajasthan',
      category: 'monuments',
      name: `${cityName} Palace`,
      description: `Royal palace with historical significance and beautiful architecture`,
      details: `The ${cityName} Palace stands as a symbol of the city's historical importance. Built centuries ago, it has witnessed numerous historical events and offers breathtaking views of the surrounding landscape. The palace's architecture reflects the royal taste and defensive techniques of its era.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `rajasthan/places/${cityName.toLowerCase()}/monuments/palace_1.jpg`,
          download_url: '',
          caption: `${cityName} Palace`,
          credit: 'Rajasthan Tourism',
          alt_text: `${cityName} Palace structure`,
          uploaded_at: new Date()
        }
      ],
      actions: {
        primary: {
          label: 'Visit Palace',
          type: 'modal',
          content: `Learn about ${cityName} Palace's history and significance`
        }
      },
      opening_hours: '9:00 AM - 6:00 PM',
      entry_fee: 'INR 30 (adults), INR 15 (children)',
      best_time: 'Evening for sunset views',
      duration: '1-2 hours',
      accessibility_info: 'Partial wheelchair access',
      created_at: new Date(),
      updated_at: new Date()
    }
  ],
  food: [
    {
      id: `${cityId}_food_1`,
      place_id: cityId,
      state_id: 'rajasthan',
      category: 'food',
      name: `${cityName} Special Thali`,
      description: `Traditional ${cityName} cuisine featuring local delicacies and authentic flavors`,
      details: `The ${cityName} Special Thali is a complete meal that showcases the region's culinary diversity. It includes traditional dal, baati, vegetables, pickles, and sweets, all prepared using age-old recipes passed down through generations. Each dish represents the local culture and agricultural produce of the region.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `rajasthan/places/${cityName.toLowerCase()}/food/thali_1.jpg`,
          download_url: '',
          caption: `${cityName} Special Thali`,
          credit: 'Rajasthan Tourism',
          alt_text: `Traditional ${cityName} thali`,
          uploaded_at: new Date()
        }
      ],
      actions: {
        primary: {
          label: 'Find Restaurants',
          type: 'places_search',
          query: `${cityName} traditional restaurants`
        },
        secondary: {
          label: 'Recipe Guide',
          type: 'modal',
          content: `Learn to cook authentic ${cityName} dishes`
        }
      },
      opening_hours: '11:00 AM - 3:00 PM, 7:00 PM - 10:00 PM',
      entry_fee: 'INR 200-500 per person',
      best_time: 'Lunch time for authentic experience',
      duration: '1-2 hours',
      accessibility_info: 'Ground floor restaurants available',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: `${cityId}_food_2`,
      place_id: cityId,
      state_id: 'rajasthan',
      category: 'food',
      name: `${cityName} Street Food`,
      description: `Local street food specialties unique to ${cityName}`,
      details: `${cityName} street food offers a delightful mix of flavors and textures. From spicy snacks to sweet treats, the street food scene reflects the city's vibrant culture and diverse culinary influences. Each vendor has their own secret recipes that have been perfected over years.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `rajasthan/places/${cityName.toLowerCase()}/food/street_food_1.jpg`,
          download_url: '',
          caption: `${cityName} Street Food`,
          credit: 'Rajasthan Tourism',
          alt_text: `${cityName} street food vendors`,
          uploaded_at: new Date()
        }
      ],
      actions: {
        primary: {
          label: 'Food Tour',
          type: 'modal',
          content: `Join our guided street food tour of ${cityName}`
        }
      },
      opening_hours: 'Evening 5:00 PM - 11:00 PM',
      entry_fee: 'INR 50-200 per item',
      best_time: 'Evening for fresh preparation',
      duration: '30 minutes - 1 hour',
      accessibility_info: 'Street level access',
      created_at: new Date(),
      updated_at: new Date()
    }
  ],
  customs: [
    {
      id: `${cityId}_custom_1`,
      place_id: cityId,
      state_id: 'rajasthan',
      category: 'customs',
      name: `${cityName} Traditional Customs`,
      description: `Age-old customs and traditions practiced in ${cityName}`,
      details: `${cityName} is rich in traditional customs that have been preserved for centuries. These customs reflect the city's cultural heritage, religious practices, and social traditions. From daily rituals to special ceremonies, each custom has deep historical and cultural significance.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `rajasthan/places/${cityName.toLowerCase()}/customs/traditional_1.jpg`,
          download_url: '',
          caption: `${cityName} Traditional Customs`,
          credit: 'Rajasthan Tourism',
          alt_text: `${cityName} traditional customs`,
          uploaded_at: new Date()
        }
      ],
      actions: {
        primary: {
          label: 'Cultural Experience',
          type: 'modal',
          content: `Experience ${cityName}'s traditional customs firsthand`
        }
      },
      opening_hours: 'Various timings',
      entry_fee: 'Free to observe',
      best_time: 'During festivals and special occasions',
      duration: 'Varies by custom',
      accessibility_info: 'Public ceremonies',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: `${cityId}_custom_2`,
      place_id: cityId,
      state_id: 'rajasthan',
      category: 'customs',
      name: `${cityName} Art & Craft`,
      description: `Traditional art forms and handicrafts unique to ${cityName}`,
      details: `${cityName} is known for its distinctive art forms and handicrafts. Local artisans create beautiful works using traditional techniques passed down through generations. These art forms include pottery, weaving, metalwork, and painting, each reflecting the city's cultural identity.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `rajasthan/places/${cityName.toLowerCase()}/customs/art_craft_1.jpg`,
          download_url: '',
          caption: `${cityName} Art & Craft`,
          credit: 'Rajasthan Tourism',
          alt_text: `${cityName} traditional art and craft`,
          uploaded_at: new Date()
        }
      ],
      actions: {
        primary: {
          label: 'Artisan Workshop',
          type: 'modal',
          content: `Learn traditional art forms from local artisans`
        }
      },
      opening_hours: '10:00 AM - 6:00 PM',
      entry_fee: 'Workshop fees vary',
      best_time: 'Morning for fresh materials',
      duration: '2-4 hours',
      accessibility_info: 'Workshop dependent',
      created_at: new Date(),
      updated_at: new Date()
    }
  ],
  festivals: [
    {
      id: `${cityId}_festival_1`,
      place_id: cityId,
      state_id: 'rajasthan',
      category: 'festivals',
      name: `${cityName} Annual Festival`,
      description: `Major annual festival celebrating ${cityName}'s culture and heritage`,
      details: `The ${cityName} Annual Festival is the city's most important cultural celebration. It brings together people from all walks of life to celebrate the city's rich heritage, traditions, and community spirit. The festival features cultural performances, traditional music, dance, food stalls, and various competitions.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `rajasthan/places/${cityName.toLowerCase()}/festivals/annual_1.jpg`,
          download_url: '',
          caption: `${cityName} Annual Festival`,
          credit: 'Rajasthan Tourism',
          alt_text: `${cityName} annual festival celebrations`,
          uploaded_at: new Date()
        }
      ],
      actions: {
        primary: {
          label: 'Festival Info',
          type: 'modal',
          content: `Get detailed information about ${cityName} Annual Festival`
        },
        secondary: {
          label: 'Book Accommodation',
          type: 'external_link',
          url: 'https://rajasthantourism.gov.in/accommodation'
        }
      },
      opening_hours: 'All day during festival',
      entry_fee: 'Free entry',
      best_time: 'Evening celebrations',
      duration: '3-5 days',
      accessibility_info: 'Public celebration',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: `${cityId}_festival_2`,
      place_id: cityId,
      state_id: 'rajasthan',
      category: 'festivals',
      name: `${cityName} Religious Festival`,
      description: `Sacred religious festival with deep spiritual significance`,
      details: `The ${cityName} Religious Festival is a time of deep spiritual significance for the local community. It involves traditional rituals, prayers, and ceremonies that have been performed for centuries. The festival brings together devotees from various backgrounds to celebrate their shared faith and cultural heritage.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `rajasthan/places/${cityName.toLowerCase()}/festivals/religious_1.jpg`,
          download_url: '',
          caption: `${cityName} Religious Festival`,
          credit: 'Rajasthan Tourism',
          alt_text: `${cityName} religious festival`,
          uploaded_at: new Date()
        }
      ],
      actions: {
        primary: {
          label: 'Festival Schedule',
          type: 'modal',
          content: `View the complete schedule of ${cityName} Religious Festival`
        }
      },
      opening_hours: 'Early morning to late evening',
      entry_fee: 'Free for devotees',
      best_time: 'Morning prayers',
      duration: '1-3 days',
      accessibility_info: 'Temple dependent',
      created_at: new Date(),
      updated_at: new Date()
    }
  ],
  history: [
    {
      id: `${cityId}_history_1`,
      place_id: cityId,
      state_id: 'rajasthan',
      category: 'history',
      name: `${cityName} Historical Overview`,
      description: `Comprehensive history of ${cityName} from ancient times to present`,
      details: `${cityName} has a rich and diverse history spanning several centuries. From its ancient origins to its role in various dynasties and empires, the city has witnessed numerous historical events that have shaped its character. The city's history is reflected in its architecture, culture, and traditions.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `rajasthan/places/${cityName.toLowerCase()}/history/overview_1.jpg`,
          download_url: '',
          caption: `${cityName} Historical Overview`,
          credit: 'Rajasthan Tourism',
          alt_text: `${cityName} historical monuments`,
          uploaded_at: new Date()
        }
      ],
      actions: {
        primary: {
          label: 'Historical Tour',
          type: 'modal',
          content: `Join our guided historical tour of ${cityName}`
        },
        secondary: {
          label: 'Museum Visit',
          type: 'external_link',
          url: `https://${cityName.toLowerCase()}museum.gov.in`
        }
      },
      opening_hours: 'All day',
      entry_fee: 'Tour fees vary',
      best_time: 'Morning for guided tours',
      duration: '2-3 hours',
      accessibility_info: 'Museum and tour dependent',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: `${cityId}_history_2`,
      place_id: cityId,
      state_id: 'rajasthan',
      category: 'history',
      name: `${cityName} Archaeological Sites`,
      description: `Ancient archaeological sites and historical monuments in ${cityName}`,
      details: `${cityName} is home to several important archaeological sites that provide insights into the region's ancient past. These sites include ancient temples, inscriptions, and architectural remains that showcase the advanced civilization that once thrived in the area.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `rajasthan/places/${cityName.toLowerCase()}/history/archaeological_1.jpg`,
          download_url: '',
          caption: `${cityName} Archaeological Sites`,
          credit: 'Rajasthan Tourism',
          alt_text: `${cityName} archaeological remains`,
          uploaded_at: new Date()
        }
      ],
      actions: {
        primary: {
          label: 'Site Information',
          type: 'modal',
          content: `Learn about ${cityName}'s archaeological significance`
        }
      },
      opening_hours: '9:00 AM - 5:00 PM',
      entry_fee: 'INR 25 (adults), INR 10 (children)',
      best_time: 'Morning for better visibility',
      duration: '1-2 hours',
      accessibility_info: 'Site dependent',
      created_at: new Date(),
      updated_at: new Date()
    }
  ]
});

// Jaisalmer - Golden City
export const jaisalmerData: KarnatakaPOI = {
  id: 'jaisalmer_rajasthan',
  name: 'Jaisalmer',
  category: 'place',
  description: 'The Golden City, famous for its sandstone architecture, desert safaris, and magnificent fort',
  coordinates: { lat: 26.9157, lng: 70.9083 },
  banner_image: {
    storage_path: 'rajasthan/places/jaisalmer/banner.jpg',
    download_url: '',
    caption: 'Jaisalmer Golden City',
    credit: 'Rajasthan Tourism',
    alt_text: 'Jaisalmer Golden City with sandstone architecture',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: createComprehensiveTabs('Jaisalmer', 'jaisalmer_rajasthan')
};

// Bikaner - Camel City
export const bikanerData: KarnatakaPOI = {
  id: 'bikaner_rajasthan',
  name: 'Bikaner',
  category: 'place',
  description: 'Known for its camel breeding farm, magnificent palaces, and delicious Bikaneri snacks',
  coordinates: { lat: 28.0229, lng: 73.3119 },
  banner_image: {
    storage_path: 'rajasthan/places/bikaner/banner.jpg',
    download_url: '',
    caption: 'Bikaner Junagarh Fort',
    credit: 'Rajasthan Tourism',
    alt_text: 'Bikaner Junagarh Fort architecture',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: createComprehensiveTabs('Bikaner', 'bikaner_rajasthan')
};

// Ajmer - Pilgrimage City
export const ajmerData: KarnatakaPOI = {
  id: 'ajmer_rajasthan',
  name: 'Ajmer',
  category: 'place',
  description: 'Famous for the Dargah Sharif of Khwaja Moinuddin Chishti, a major pilgrimage destination',
  coordinates: { lat: 26.4499, lng: 74.6399 },
  banner_image: {
    storage_path: 'rajasthan/places/ajmer/banner.jpg',
    download_url: '',
    caption: 'Ajmer Dargah Sharif',
    credit: 'Rajasthan Tourism',
    alt_text: 'Ajmer Dargah Sharif shrine',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: createComprehensiveTabs('Ajmer', 'ajmer_rajasthan')
};

// Pushkar - Sacred City
export const pushkarData: KarnatakaPOI = {
  id: 'pushkar_rajasthan',
  name: 'Pushkar',
  category: 'place',
  description: 'Sacred city with the only Brahma temple in India and famous camel fair',
  coordinates: { lat: 26.4897, lng: 74.5514 },
  banner_image: {
    storage_path: 'rajasthan/places/pushkar/banner.jpg',
    download_url: '',
    caption: 'Pushkar Lake and Temples',
    credit: 'Rajasthan Tourism',
    alt_text: 'Pushkar sacred lake with temples',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: createComprehensiveTabs('Pushkar', 'pushkar_rajasthan')
};

// Kota - Education Hub
export const kotaData: KarnatakaPOI = {
  id: 'kota_rajasthan',
  name: 'Kota',
  category: 'place',
  description: 'Known as the education hub of Rajasthan, famous for its coaching institutes and historical monuments',
  coordinates: { lat: 25.2138, lng: 75.8648 },
  banner_image: {
    storage_path: 'rajasthan/places/kota/banner.jpg',
    download_url: '',
    caption: 'Kota City Palace',
    credit: 'Rajasthan Tourism',
    alt_text: 'Kota City Palace and monuments',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: createComprehensiveTabs('Kota', 'kota_rajasthan')
};

// Alwar - Gateway to Rajasthan
export const alwarData: KarnatakaPOI = {
  id: 'alwar_rajasthan',
  name: 'Alwar',
  category: 'place',
  description: 'Gateway to Rajasthan, known for its wildlife sanctuary, palaces, and historical monuments',
  coordinates: { lat: 27.5665, lng: 76.6108 },
  banner_image: {
    storage_path: 'rajasthan/places/alwar/banner.jpg',
    download_url: '',
    caption: 'Alwar City Palace',
    credit: 'Rajasthan Tourism',
    alt_text: 'Alwar City Palace architecture',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: createComprehensiveTabs('Alwar', 'alwar_rajasthan')
};

// Bharatpur - Bird City
export const bharatpurData: KarnatakaPOI = {
  id: 'bharatpur_rajasthan',
  name: 'Bharatpur',
  category: 'place',
  description: 'Famous for Keoladeo National Park, a UNESCO World Heritage Site and bird sanctuary',
  coordinates: { lat: 27.2156, lng: 77.4906 },
  banner_image: {
    storage_path: 'rajasthan/places/bharatpur/banner.jpg',
    download_url: '',
    caption: 'Bharatpur Bird Sanctuary',
    credit: 'Rajasthan Tourism',
    alt_text: 'Bharatpur Keoladeo National Park',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: createComprehensiveTabs('Bharatpur', 'bharatpur_rajasthan')
};

// Export all major cities data
export const rajasthanMajorCitiesData: KarnatakaPOI[] = [
  jaisalmerData,
  bikanerData,
  ajmerData,
  pushkarData,
  kotaData,
  alwarData,
  bharatpurData
];

export default rajasthanMajorCitiesData;

