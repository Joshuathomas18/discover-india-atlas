// Goa Major Cities Data
// Comprehensive data for 8 major cities in Goa with full cultural information

import { KarnatakaPOI, PlaceTabs, ImageReference } from '../../types/database';

// Helper function to create comprehensive cultural tabs for each city
const createComprehensiveTabs = (cityName: string, cityId: string): PlaceTabs => ({
  monuments: [
    {
      id: `${cityId}_monument_1`,
      place_id: cityId,
      state_id: 'goa',
      category: 'monuments',
      name: `${cityName} Church`,
      description: `Historic church showcasing ${cityName}'s religious heritage and Portuguese architecture`,
      details: `The ${cityName} Church is a magnificent structure that reflects the rich religious heritage of Goa. Built in Portuguese architectural style, it features intricate carvings, beautiful courtyards, and spiritual significance. The church serves as a center of worship and cultural activities.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `goa/places/${cityName.toLowerCase()}/monuments/church_1.jpg`,
          download_url: '',
          caption: `${cityName} Church`,
          credit: 'Goa Tourism',
          alt_text: `${cityName} Church architecture`,
          uploaded_at: new Date()
        }
      ],
      actions: {
        primary: {
          label: 'Visit Church',
          type: 'modal',
          content: `Learn about ${cityName} Church's history and significance`
        }
      },
      opening_hours: '7:00 AM - 6:00 PM',
      entry_fee: 'Free entry',
      best_time: 'Morning for peaceful visit',
      duration: '1-2 hours',
      accessibility_info: 'Wheelchair accessible',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: `${cityId}_monument_2`,
      place_id: cityId,
      state_id: 'goa',
      category: 'monuments',
      name: `${cityName} Heritage Site`,
      description: `Historic site with cultural and architectural significance`,
      details: `The ${cityName} Heritage Site stands as a symbol of the city's historical importance. Built centuries ago, it has witnessed numerous historical events and offers insights into the region's past. The site's architecture reflects the traditional Goan style and cultural heritage.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `goa/places/${cityName.toLowerCase()}/monuments/heritage_1.jpg`,
          download_url: '',
          caption: `${cityName} Heritage Site`,
          credit: 'Goa Tourism',
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
      state_id: 'goa',
      category: 'food',
      name: `${cityName} Special Cuisine`,
      description: `Traditional ${cityName} cuisine featuring local delicacies and authentic flavors`,
      details: `The ${cityName} Special Cuisine showcases the region's culinary diversity. It includes traditional Goan dishes prepared using local ingredients and age-old recipes. Each dish represents the local culture and agricultural produce of the region, offering a unique taste experience.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `goa/places/${cityName.toLowerCase()}/food/cuisine_1.jpg`,
          download_url: '',
          caption: `${cityName} Special Cuisine`,
          credit: 'Goa Tourism',
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
      state_id: 'goa',
      category: 'food',
      name: `${cityName} Street Food`,
      description: `Local street food specialties unique to ${cityName}`,
      details: `${cityName} street food offers a delightful mix of flavors and textures. From spicy snacks to sweet treats, the street food scene reflects the city's vibrant culture and diverse culinary influences. Each vendor has their own secret recipes that have been perfected over years.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `goa/places/${cityName.toLowerCase()}/food/street_food_1.jpg`,
          download_url: '',
          caption: `${cityName} Street Food`,
          credit: 'Goa Tourism',
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
      state_id: 'goa',
      category: 'customs',
      name: `${cityName} Traditional Customs`,
      description: `Age-old customs and traditions practiced in ${cityName}`,
      details: `${cityName} is rich in traditional customs that have been preserved for centuries. These customs reflect the city's cultural heritage, religious practices, and social traditions. From daily rituals to special ceremonies, each custom has deep historical and cultural significance.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `goa/places/${cityName.toLowerCase()}/customs/traditional_1.jpg`,
          download_url: '',
          caption: `${cityName} Traditional Customs`,
          credit: 'Goa Tourism',
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
      state_id: 'goa',
      category: 'customs',
      name: `${cityName} Art & Craft`,
      description: `Traditional art forms and handicrafts unique to ${cityName}`,
      details: `${cityName} is known for its distinctive art forms and handicrafts. Local artisans create beautiful works using traditional techniques passed down through generations. These art forms include pottery, weaving, metalwork, and painting, each reflecting the city's cultural identity.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `goa/places/${cityName.toLowerCase()}/customs/art_craft_1.jpg`,
          download_url: '',
          caption: `${cityName} Art & Craft`,
          credit: 'Goa Tourism',
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
      state_id: 'goa',
      category: 'festivals',
      name: `${cityName} Annual Festival`,
      description: `Major annual festival celebrating ${cityName}'s culture and heritage`,
      details: `The ${cityName} Annual Festival is the city's most important cultural celebration. It brings together people from all walks of life to celebrate the city's rich heritage, traditions, and community spirit. The festival features cultural performances, traditional music, dance, food stalls, and various competitions.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `goa/places/${cityName.toLowerCase()}/festivals/annual_1.jpg`,
          download_url: '',
          caption: `${cityName} Annual Festival`,
          credit: 'Goa Tourism',
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
          url: 'https://goatourism.gov.in/accommodation'
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
      state_id: 'goa',
      category: 'festivals',
      name: `${cityName} Religious Festival`,
      description: `Sacred religious festival with deep spiritual significance`,
      details: `The ${cityName} Religious Festival is a time of deep spiritual significance for the local community. It involves traditional rituals, prayers, and ceremonies that have been performed for centuries. The festival brings together devotees from various backgrounds to celebrate their shared faith and cultural heritage.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `goa/places/${cityName.toLowerCase()}/festivals/religious_1.jpg`,
          download_url: '',
          caption: `${cityName} Religious Festival`,
          credit: 'Goa Tourism',
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
      accessibility_info: 'Church dependent',
      created_at: new Date(),
      updated_at: new Date()
    }
  ],
  history: [
    {
      id: `${cityId}_history_1`,
      place_id: cityId,
      state_id: 'goa',
      category: 'history',
      name: `${cityName} Historical Overview`,
      description: `Comprehensive history of ${cityName} from ancient times to present`,
      details: `${cityName} has a rich and diverse history spanning several centuries. From its ancient origins to its role in various dynasties and empires, the city has witnessed numerous historical events that have shaped its character. The city's history is reflected in its architecture, culture, and traditions.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `goa/places/${cityName.toLowerCase()}/history/overview_1.jpg`,
          download_url: '',
          caption: `${cityName} Historical Overview`,
          credit: 'Goa Tourism',
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
      state_id: 'goa',
      category: 'history',
      name: `${cityName} Archaeological Sites`,
      description: `Ancient archaeological sites and historical monuments in ${cityName}`,
      details: `${cityName} is home to several important archaeological sites that provide insights into the region's ancient past. These sites include ancient temples, inscriptions, and architectural remains that showcase the advanced civilization that once thrived in the area.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `goa/places/${cityName.toLowerCase()}/history/archaeological_1.jpg`,
          download_url: '',
          caption: `${cityName} Archaeological Sites`,
          credit: 'Goa Tourism',
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

// Mapusa - Market Town
export const mapusaData: KarnatakaPOI = {
  id: 'mapusa_goa',
  name: 'Mapusa',
  category: 'place',
  description: 'Market town known for its traditional markets, churches, and Portuguese architecture',
  coordinates: { lat: 15.6000, lng: 73.8000 },
  banner_image: {
    storage_path: 'goa/places/mapusa/banner.jpg',
    download_url: '',
    caption: 'Mapusa Market Town',
    credit: 'Goa Tourism',
    alt_text: 'Mapusa market town with Portuguese architecture',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: createComprehensiveTabs('Mapusa', 'mapusa_goa')
};

// Ponda - Temple Town
export const pondaData: KarnatakaPOI = {
  id: 'ponda_goa',
  name: 'Ponda',
  category: 'place',
  description: 'Temple town known for its ancient temples, spice plantations, and cultural heritage',
  coordinates: { lat: 15.4000, lng: 74.0167 },
  banner_image: {
    storage_path: 'goa/places/ponda/banner.jpg',
    download_url: '',
    caption: 'Ponda Temple Town',
    credit: 'Goa Tourism',
    alt_text: 'Ponda temple town with ancient temples',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: createComprehensiveTabs('Ponda', 'ponda_goa')
};

// Calangute - Beach Town
export const calanguteData: KarnatakaPOI = {
  id: 'calangute_goa',
  name: 'Calangute',
  category: 'place',
  description: 'Famous beach town known for its beaches, water sports, and vibrant nightlife',
  coordinates: { lat: 15.5333, lng: 73.7500 },
  banner_image: {
    storage_path: 'goa/places/calangute/banner.jpg',
    download_url: '',
    caption: 'Calangute Beach Town',
    credit: 'Goa Tourism',
    alt_text: 'Calangute beach town with scenic beaches',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: createComprehensiveTabs('Calangute', 'calangute_goa')
};

// Baga - Beach Destination
export const bagaData: KarnatakaPOI = {
  id: 'baga_goa',
  name: 'Baga',
  category: 'place',
  description: 'Popular beach destination known for its beaches, water sports, and nightlife',
  coordinates: { lat: 15.5500, lng: 73.7500 },
  banner_image: {
    storage_path: 'goa/places/baga/banner.jpg',
    download_url: '',
    caption: 'Baga Beach Destination',
    credit: 'Goa Tourism',
    alt_text: 'Baga beach destination with scenic views',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: createComprehensiveTabs('Baga', 'baga_goa')
};

// Anjuna - Hippie Beach
export const anjunaData: KarnatakaPOI = {
  id: 'anjuna_goa',
  name: 'Anjuna',
  category: 'place',
  description: 'Famous hippie beach known for its flea market, beaches, and bohemian culture',
  coordinates: { lat: 15.5667, lng: 73.7333 },
  banner_image: {
    storage_path: 'goa/places/anjuna/banner.jpg',
    download_url: '',
    caption: 'Anjuna Hippie Beach',
    credit: 'Goa Tourism',
    alt_text: 'Anjuna hippie beach with bohemian culture',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: createComprehensiveTabs('Anjuna', 'anjuna_goa')
};

// Candolim - Beach Resort
export const candolimData: KarnatakaPOI = {
  id: 'candolim_goa',
  name: 'Candolim',
  category: 'place',
  description: 'Beach resort town known for its beaches, water sports, and luxury accommodations',
  coordinates: { lat: 15.5167, lng: 73.7667 },
  banner_image: {
    storage_path: 'goa/places/candolim/banner.jpg',
    download_url: '',
    caption: 'Candolim Beach Resort',
    credit: 'Goa Tourism',
    alt_text: 'Candolim beach resort with luxury accommodations',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: createComprehensiveTabs('Candolim', 'candolim_goa')
};

// Arambol - Alternative Beach
export const arambolData: KarnatakaPOI = {
  id: 'arambol_goa',
  name: 'Arambol',
  category: 'place',
  description: 'Alternative beach destination known for its beaches, yoga, and alternative culture',
  coordinates: { lat: 15.6833, lng: 73.7000 },
  banner_image: {
    storage_path: 'goa/places/arambol/banner.jpg',
    download_url: '',
    caption: 'Arambol Alternative Beach',
    credit: 'Goa Tourism',
    alt_text: 'Arambol alternative beach with yoga culture',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: createComprehensiveTabs('Arambol', 'arambol_goa')
};

// Export all major cities data
export const goaMajorCitiesData: KarnatakaPOI[] = [
  mapusaData,
  pondaData,
  calanguteData,
  bagaData,
  anjunaData,
  candolimData,
  arambolData
];

export default goaMajorCitiesData;

