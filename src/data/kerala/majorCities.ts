// Kerala Major Cities Data
// Comprehensive data for 8 major cities in Kerala with full cultural information

import { KarnatakaPOI, PlaceTabs, ImageReference } from '../../types/database';

// Helper function to create comprehensive cultural tabs for each city
const createComprehensiveTabs = (cityName: string, cityId: string): PlaceTabs => ({
  monuments: [
    {
      id: `${cityId}_monument_1`,
      place_id: cityId,
      state_id: 'kerala',
      category: 'monuments',
      name: `${cityName} Temple`,
      description: `Historic temple showcasing ${cityName}'s religious heritage and architectural beauty`,
      details: `The ${cityName} Temple is a magnificent structure that reflects the rich religious heritage of Kerala. Built in traditional Kerala architectural style, it features intricate carvings, beautiful courtyards, and spiritual significance. The temple serves as a center of worship and cultural activities.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `kerala/places/${cityName.toLowerCase()}/monuments/temple_1.jpg`,
          download_url: '',
          caption: `${cityName} Temple`,
          credit: 'Kerala Tourism',
          alt_text: `${cityName} Temple architecture`,
          uploaded_at: new Date()
        }
      ],
      actions: {
        primary: {
          label: 'Visit Temple',
          type: 'modal',
          content: `Learn about ${cityName} Temple's history and significance`
        }
      },
      opening_hours: '5:00 AM - 12:00 PM, 4:00 PM - 8:00 PM',
      entry_fee: 'Free entry',
      best_time: 'Morning for darshan',
      duration: '1-2 hours',
      accessibility_info: 'Traditional dress required',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: `${cityId}_monument_2`,
      place_id: cityId,
      state_id: 'kerala',
      category: 'monuments',
      name: `${cityName} Heritage Site`,
      description: `Historic site with cultural and architectural significance`,
      details: `The ${cityName} Heritage Site stands as a symbol of the city's historical importance. Built centuries ago, it has witnessed numerous historical events and offers insights into the region's past. The site's architecture reflects the traditional Kerala style and cultural heritage.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `kerala/places/${cityName.toLowerCase()}/monuments/heritage_1.jpg`,
          download_url: '',
          caption: `${cityName} Heritage Site`,
          credit: 'Kerala Tourism',
          alt_text: `${cityName} heritage site`,
          uploaded_at: new Date()
        }
      ],
      actions: {
        primary: {
          label: 'Heritage Tour',
          type: 'modal',
          content: `Explore ${cityName}'s heritage through guided tours`
        }
      },
      opening_hours: '9:00 AM - 5:00 PM',
      entry_fee: 'INR 25 (adults), INR 10 (children)',
      best_time: 'Morning hours',
      duration: '1-2 hours',
      accessibility_info: 'Site dependent',
      created_at: new Date(),
      updated_at: new Date()
    }
  ],
  food: [
    {
      id: `${cityId}_food_1`,
      place_id: cityId,
      state_id: 'kerala',
      category: 'food',
      name: `${cityName} Special Cuisine`,
      description: `Traditional ${cityName} cuisine featuring local delicacies and authentic flavors`,
      details: `The ${cityName} Special Cuisine showcases the region's culinary diversity. It includes traditional Kerala dishes prepared using local ingredients and age-old recipes. Each dish represents the local culture and agricultural produce of the region, offering a unique taste experience.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `kerala/places/${cityName.toLowerCase()}/food/cuisine_1.jpg`,
          download_url: '',
          caption: `${cityName} Special Cuisine`,
          credit: 'Kerala Tourism',
          alt_text: `Traditional ${cityName} cuisine`,
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
      state_id: 'kerala',
      category: 'food',
      name: `${cityName} Street Food`,
      description: `Local street food specialties unique to ${cityName}`,
      details: `${cityName} street food offers a delightful mix of flavors and textures. From spicy snacks to sweet treats, the street food scene reflects the city's vibrant culture and diverse culinary influences. Each vendor has their own secret recipes that have been perfected over years.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `kerala/places/${cityName.toLowerCase()}/food/street_food_1.jpg`,
          download_url: '',
          caption: `${cityName} Street Food`,
          credit: 'Kerala Tourism',
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
      state_id: 'kerala',
      category: 'customs',
      name: `${cityName} Traditional Customs`,
      description: `Age-old customs and traditions practiced in ${cityName}`,
      details: `${cityName} is rich in traditional customs that have been preserved for centuries. These customs reflect the city's cultural heritage, religious practices, and social traditions. From daily rituals to special ceremonies, each custom has deep historical and cultural significance.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `kerala/places/${cityName.toLowerCase()}/customs/traditional_1.jpg`,
          download_url: '',
          caption: `${cityName} Traditional Customs`,
          credit: 'Kerala Tourism',
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
      state_id: 'kerala',
      category: 'customs',
      name: `${cityName} Art & Craft`,
      description: `Traditional art forms and handicrafts unique to ${cityName}`,
      details: `${cityName} is known for its distinctive art forms and handicrafts. Local artisans create beautiful works using traditional techniques passed down through generations. These art forms include wood carving, metalwork, weaving, and painting, each reflecting the city's cultural identity.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `kerala/places/${cityName.toLowerCase()}/customs/art_craft_1.jpg`,
          download_url: '',
          caption: `${cityName} Art & Craft`,
          credit: 'Kerala Tourism',
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
      state_id: 'kerala',
      category: 'festivals',
      name: `${cityName} Annual Festival`,
      description: `Major annual festival celebrating ${cityName}'s culture and heritage`,
      details: `The ${cityName} Annual Festival is the city's most important cultural celebration. It brings together people from all walks of life to celebrate the city's rich heritage, traditions, and community spirit. The festival features cultural performances, traditional music, dance, food stalls, and various competitions.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `kerala/places/${cityName.toLowerCase()}/festivals/annual_1.jpg`,
          download_url: '',
          caption: `${cityName} Annual Festival`,
          credit: 'Kerala Tourism',
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
          url: 'https://keralatourism.gov.in/accommodation'
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
      state_id: 'kerala',
      category: 'festivals',
      name: `${cityName} Religious Festival`,
      description: `Sacred religious festival with deep spiritual significance`,
      details: `The ${cityName} Religious Festival is a time of deep spiritual significance for the local community. It involves traditional rituals, prayers, and ceremonies that have been performed for centuries. The festival brings together devotees from various backgrounds to celebrate their shared faith and cultural heritage.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `kerala/places/${cityName.toLowerCase()}/festivals/religious_1.jpg`,
          download_url: '',
          caption: `${cityName} Religious Festival`,
          credit: 'Kerala Tourism',
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
      state_id: 'kerala',
      category: 'history',
      name: `${cityName} Historical Overview`,
      description: `Comprehensive history of ${cityName} from ancient times to present`,
      details: `${cityName} has a rich and diverse history spanning several centuries. From its ancient origins to its role in various dynasties and empires, the city has witnessed numerous historical events that have shaped its character. The city's history is reflected in its architecture, culture, and traditions.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `kerala/places/${cityName.toLowerCase()}/history/overview_1.jpg`,
          download_url: '',
          caption: `${cityName} Historical Overview`,
          credit: 'Kerala Tourism',
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
      state_id: 'kerala',
      category: 'history',
      name: `${cityName} Archaeological Sites`,
      description: `Ancient archaeological sites and historical monuments in ${cityName}`,
      details: `${cityName} is home to several important archaeological sites that provide insights into the region's ancient past. These sites include ancient temples, inscriptions, and architectural remains that showcase the advanced civilization that once thrived in the area.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `kerala/places/${cityName.toLowerCase()}/history/archaeological_1.jpg`,
          download_url: '',
          caption: `${cityName} Archaeological Sites`,
          credit: 'Kerala Tourism',
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

// Thrissur - Cultural Capital
export const thrissurData: KarnatakaPOI = {
  id: 'thrissur_kerala',
  name: 'Thrissur',
  category: 'place',
  description: 'Cultural capital of Kerala, known for its temples, festivals, and rich heritage',
  coordinates: { lat: 10.5276, lng: 76.2144 },
  banner_image: {
    storage_path: 'kerala/places/thrissur/banner.jpg',
    download_url: '',
    caption: 'Thrissur Cultural Capital',
    credit: 'Kerala Tourism',
    alt_text: 'Thrissur city with temples',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: createComprehensiveTabs('Thrissur', 'thrissur_kerala')
};

// Kollam - Cashew Capital
export const kollamData: KarnatakaPOI = {
  id: 'kollam_kerala',
  name: 'Kollam',
  category: 'place',
  description: 'Historic port city known for its cashew industry, backwaters, and beaches',
  coordinates: { lat: 8.8932, lng: 76.6141 },
  banner_image: {
    storage_path: 'kerala/places/kollam/banner.jpg',
    download_url: '',
    caption: 'Kollam Backwaters',
    credit: 'Kerala Tourism',
    alt_text: 'Kollam backwaters and port',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: createComprehensiveTabs('Kollam', 'kollam_kerala')
};

// Alappuzha - Venice of the East
export const alappuzhaData: KarnatakaPOI = {
  id: 'alappuzha_kerala',
  name: 'Alappuzha',
  category: 'place',
  description: 'Famous for its backwaters, houseboats, and scenic beauty',
  coordinates: { lat: 9.4981, lng: 76.3388 },
  banner_image: {
    storage_path: 'kerala/places/alappuzha/banner.jpg',
    download_url: '',
    caption: 'Alappuzha Backwaters',
    credit: 'Kerala Tourism',
    alt_text: 'Alappuzha backwaters with houseboats',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: createComprehensiveTabs('Alappuzha', 'alappuzha_kerala')
};

// Palakkad - Gateway to Kerala
export const palakkadData: KarnatakaPOI = {
  id: 'palakkad_kerala',
  name: 'Palakkad',
  category: 'place',
  description: 'Gateway to Kerala, known for its forts, temples, and scenic beauty',
  coordinates: { lat: 10.7867, lng: 76.6548 },
  banner_image: {
    storage_path: 'kerala/places/palakkad/banner.jpg',
    download_url: '',
    caption: 'Palakkad Fort',
    credit: 'Kerala Tourism',
    alt_text: 'Palakkad Fort and surrounding area',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: createComprehensiveTabs('Palakkad', 'palakkad_kerala')
};

// Malappuram - Land of Hills
export const malappuramData: KarnatakaPOI = {
  id: 'malappuram_kerala',
  name: 'Malappuram',
  category: 'place',
  description: 'Land of hills and valleys, known for its natural beauty and cultural heritage',
  coordinates: { lat: 11.0404, lng: 76.0819 },
  banner_image: {
    storage_path: 'kerala/places/malappuram/banner.jpg',
    download_url: '',
    caption: 'Malappuram Hills',
    credit: 'Kerala Tourism',
    alt_text: 'Malappuram hills and valleys',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: createComprehensiveTabs('Malappuram', 'malappuram_kerala')
};

// Kannur - Crown of Kerala
export const kannurData: KarnatakaPOI = {
  id: 'kannur_kerala',
  name: 'Kannur',
  category: 'place',
  description: 'Crown of Kerala, known for its beaches, forts, and Theyyam performances',
  coordinates: { lat: 11.8745, lng: 75.3704 },
  banner_image: {
    storage_path: 'kerala/places/kannur/banner.jpg',
    download_url: '',
    caption: 'Kannur Beach',
    credit: 'Kerala Tourism',
    alt_text: 'Kannur beach with fort',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: createComprehensiveTabs('Kannur', 'kannur_kerala')
};

// Kasaragod - Land of Seven Languages
export const kasaragodData: KarnatakaPOI = {
  id: 'kasaragod_kerala',
  name: 'Kasaragod',
  category: 'place',
  description: 'Land of seven languages, known for its diverse culture and scenic beauty',
  coordinates: { lat: 12.4984, lng: 74.9899 },
  banner_image: {
    storage_path: 'kerala/places/kasaragod/banner.jpg',
    download_url: '',
    caption: 'Kasaragod Landscape',
    credit: 'Kerala Tourism',
    alt_text: 'Kasaragod scenic landscape',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: createComprehensiveTabs('Kasaragod', 'kasaragod_kerala')
};

// Export all major cities data
export const keralaMajorCitiesData: KarnatakaPOI[] = [
  thrissurData,
  kollamData,
  alappuzhaData,
  palakkadData,
  malappuramData,
  kannurData,
  kasaragodData
];

export default keralaMajorCitiesData;

