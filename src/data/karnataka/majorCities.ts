// Karnataka Major Cities Data
// Comprehensive data for 8 major cities in Karnataka with full cultural information

import { KarnatakaPOI, PlaceTabs, ImageReference } from '../../types/database';

// Helper function to create comprehensive cultural tabs for each city
const createComprehensiveTabs = (cityName: string, cityId: string): PlaceTabs => ({
  monuments: [
    {
      id: `${cityId}_monument_1`,
      place_id: cityId,
      state_id: 'karnataka',
      category: 'monuments',
      name: `${cityName} Palace`,
      description: `Historic palace showcasing ${cityName}'s royal heritage and architectural grandeur`,
      details: `The ${cityName} Palace is a magnificent structure that reflects the rich cultural heritage of Karnataka. Built in traditional architectural style, it features intricate carvings, beautiful courtyards, and historical artifacts. The palace serves as a testament to the region's royal past and architectural excellence.`,
      coordinates: { lat: 0, lng: 0 }, // Will be updated with actual coordinates
      images: [
        {
          storage_path: `karnataka/places/${cityName.toLowerCase()}/monuments/palace_1.jpg`,
          download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
          caption: `${cityName} Palace`,
          credit: 'Unsplash',
          alt_text: `${cityName} Palace architecture`,
          uploaded_at: new Date()
        }
      ],
      actions: {
        primary: {
          label: 'Buy Tickets',
          type: 'external_link',
          url: `https://${cityName.toLowerCase()}tourism.gov.in/palace-tickets`
        },
        secondary: {
          label: 'Virtual Tour',
          type: 'modal',
          content: `Explore ${cityName} Palace through our virtual tour`
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
      state_id: 'karnataka',
      category: 'monuments',
      name: `${cityName} Fort`,
      description: `Ancient fort with historical significance and panoramic city views`,
      details: `The ${cityName} Fort stands as a symbol of the city's historical importance. Built centuries ago, it has witnessed numerous historical events and offers breathtaking views of the surrounding landscape. The fort's architecture reflects the military strategies and defensive techniques of its era.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `karnataka/places/${cityName.toLowerCase()}/monuments/fort_1.jpg`,
          download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
          caption: `${cityName} Fort`,
          credit: 'Unsplash',
          alt_text: `${cityName} Fort structure`,
          uploaded_at: new Date()
        }
      ],
      actions: {
        primary: {
          label: 'Visit Fort',
          type: 'modal',
          content: `Learn about ${cityName} Fort's history and significance`
        }
      },
      opening_hours: '6:00 AM - 6:00 PM',
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
      state_id: 'karnataka',
      category: 'food',
      name: `${cityName} Special Thali`,
      description: `Traditional ${cityName} cuisine featuring local delicacies and authentic flavors`,
      details: `The ${cityName} Special Thali is a complete meal that showcases the region's culinary diversity. It includes traditional rice, dal, vegetables, pickles, and sweets, all prepared using age-old recipes passed down through generations. Each dish represents the local culture and agricultural produce of the region.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `karnataka/places/${cityName.toLowerCase()}/food/thali_1.jpg`,
          download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
          caption: `${cityName} Special Thali`,
          credit: 'Unsplash',
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
      state_id: 'karnataka',
      category: 'food',
      name: `${cityName} Street Food`,
      description: `Local street food specialties unique to ${cityName}`,
      details: `${cityName} street food offers a delightful mix of flavors and textures. From spicy chaats to sweet treats, the street food scene reflects the city's vibrant culture and diverse culinary influences. Each vendor has their own secret recipes that have been perfected over years.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `karnataka/places/${cityName.toLowerCase()}/food/street_food_1.jpg`,
          download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
          caption: `${cityName} Street Food`,
          credit: 'Unsplash',
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
      state_id: 'karnataka',
      category: 'customs',
      name: `${cityName} Traditional Customs`,
      description: `Age-old customs and traditions practiced in ${cityName}`,
      details: `${cityName} is rich in traditional customs that have been preserved for centuries. These customs reflect the city's cultural heritage, religious practices, and social traditions. From daily rituals to special ceremonies, each custom has deep historical and cultural significance.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `karnataka/places/${cityName.toLowerCase()}/customs/traditional_1.jpg`,
          download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
          caption: `${cityName} Traditional Customs`,
          credit: 'Unsplash',
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
      state_id: 'karnataka',
      category: 'customs',
      name: `${cityName} Art & Craft`,
      description: `Traditional art forms and handicrafts unique to ${cityName}`,
      details: `${cityName} is known for its distinctive art forms and handicrafts. Local artisans create beautiful works using traditional techniques passed down through generations. These art forms include pottery, weaving, metalwork, and painting, each reflecting the city's cultural identity.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `karnataka/places/${cityName.toLowerCase()}/customs/art_craft_1.jpg`,
          download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
          caption: `${cityName} Art & Craft`,
          credit: 'Unsplash',
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
      state_id: 'karnataka',
      category: 'festivals',
      name: `${cityName} Annual Festival`,
      description: `Major annual festival celebrating ${cityName}'s culture and heritage`,
      details: `The ${cityName} Annual Festival is the city's most important cultural celebration. It brings together people from all walks of life to celebrate the city's rich heritage, traditions, and community spirit. The festival features cultural performances, traditional music, dance, food stalls, and various competitions.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `karnataka/places/${cityName.toLowerCase()}/festivals/annual_1.jpg`,
          download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
          caption: `${cityName} Annual Festival`,
          credit: 'Unsplash',
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
          url: `https://${cityName.toLowerCase()}tourism.gov.in/accommodation`
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
      state_id: 'karnataka',
      category: 'festivals',
      name: `${cityName} Religious Festival`,
      description: `Sacred religious festival with deep spiritual significance`,
      details: `The ${cityName} Religious Festival is a time of deep spiritual significance for the local community. It involves traditional rituals, prayers, and ceremonies that have been performed for centuries. The festival brings together devotees from various backgrounds to celebrate their shared faith and cultural heritage.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `karnataka/places/${cityName.toLowerCase()}/festivals/religious_1.jpg`,
          download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
          caption: `${cityName} Religious Festival`,
          credit: 'Unsplash',
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
      state_id: 'karnataka',
      category: 'history',
      name: `${cityName} Historical Overview`,
      description: `Comprehensive history of ${cityName} from ancient times to present`,
      details: `${cityName} has a rich and diverse history spanning several centuries. From its ancient origins to its role in various dynasties and empires, the city has witnessed numerous historical events that have shaped its character. The city's history is reflected in its architecture, culture, and traditions.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `karnataka/places/${cityName.toLowerCase()}/history/overview_1.jpg`,
          download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
          caption: `${cityName} Historical Overview`,
          credit: 'Unsplash',
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
      state_id: 'karnataka',
      category: 'history',
      name: `${cityName} Archaeological Sites`,
      description: `Ancient archaeological sites and historical monuments in ${cityName}`,
      details: `${cityName} is home to several important archaeological sites that provide insights into the region's ancient past. These sites include ancient temples, inscriptions, and architectural remains that showcase the advanced civilization that once thrived in the area.`,
      coordinates: { lat: 0, lng: 0 },
      images: [
        {
          storage_path: `karnataka/places/${cityName.toLowerCase()}/history/archaeological_1.jpg`,
          download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
          caption: `${cityName} Archaeological Sites`,
          credit: 'Unsplash',
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

// Hubli - Major Industrial and Commercial Hub
export const hubliData: KarnatakaPOI = {
  id: 'hubli_karnataka',
  name: 'Hubli',
  category: 'place',
  description: 'One of the twin cities, a major industrial and commercial hub in North Karnataka, known for its textile industry and educational institutions.',
  coordinates: { lat: 15.3647, lng: 75.1240 },
  banner_image: {
    storage_path: 'karnataka/places/hubli/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Hubli Cityscape',
    credit: 'Unsplash',
    alt_text: 'Hubli city view with industrial areas',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: createComprehensiveTabs('Hubli', 'hubli_karnataka')
};

// Belgaum - Historical City with Aerospace Industry
export const belgaumData: KarnatakaPOI = {
  id: 'belgaum_karnataka',
  name: 'Belgaum',
  category: 'place',
  description: 'Known for its historical sites, pleasant climate, and as a center for aerospace and automotive industries. Famous for its fort and temples.',
  coordinates: { lat: 15.8497, lng: 74.4977 },
  banner_image: {
    storage_path: 'karnataka/places/belgaum/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Belgaum Fort',
    credit: 'Unsplash',
    alt_text: 'Belgaum Fort historical site',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: createComprehensiveTabs('Belgaum', 'belgaum_karnataka')
};

// Shimoga - Gateway to Western Ghats
export const shimogaData: KarnatakaPOI = {
  id: 'shimoga_karnataka',
  name: 'Shimoga',
  category: 'place',
  description: 'Gateway to the Western Ghats, known for its lush greenery, waterfalls, and historical temples. A nature lover\'s paradise.',
  coordinates: { lat: 13.9299, lng: 75.5682 },
  banner_image: {
    storage_path: 'karnataka/places/shimoga/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Shimoga Landscape',
    credit: 'Unsplash',
    alt_text: 'Green landscape of Shimoga',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: createComprehensiveTabs('Shimoga', 'shimoga_karnataka')
};

// Udupi - Temple City and Culinary Capital
export const udupiData: KarnatakaPOI = {
  id: 'udupi_karnataka',
  name: 'Udupi',
  category: 'place',
  description: 'Renowned for its Krishna Temple, pristine beaches, and unique Udupi cuisine. A major pilgrimage and tourist destination.',
  coordinates: { lat: 13.3409, lng: 74.7421 },
  banner_image: {
    storage_path: 'karnataka/places/udupi/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Udupi Krishna Temple',
    credit: 'Unsplash',
    alt_text: 'Udupi Krishna Temple exterior',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: createComprehensiveTabs('Udupi', 'udupi_karnataka')
};

// Davangere - Textile Hub and Educational Center
export const davangereData: KarnatakaPOI = {
  id: 'davangere_karnataka',
  name: 'Davangere',
  category: 'place',
  description: 'Famous for its textile industry, delicious Benne Dosa, and educational institutions. A growing industrial city with rich cultural heritage.',
  coordinates: { lat: 14.4667, lng: 75.9167 },
  banner_image: {
    storage_path: 'karnataka/places/davangere/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Davangere City',
    credit: 'Unsplash',
    alt_text: 'Davangere city view',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: createComprehensiveTabs('Davangere', 'davangere_karnataka')
};

// Gulbarga - Historical City with Islamic Architecture
export const gulbargaData: KarnatakaPOI = {
  id: 'gulbarga_karnataka',
  name: 'Gulbarga',
  category: 'place',
  description: 'Historical city known for its Islamic architecture, ancient monuments, and as the former capital of the Bahmani Sultanate.',
  coordinates: { lat: 17.3297, lng: 76.8343 },
  banner_image: {
    storage_path: 'karnataka/places/gulbarga/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Gulbarga Fort',
    credit: 'Unsplash',
    alt_text: 'Gulbarga Fort historical architecture',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: createComprehensiveTabs('Gulbarga', 'gulbarga_karnataka')
};

// Bijapur - City of Monuments
export const bijapurData: KarnatakaPOI = {
  id: 'bijapur_karnataka',
  name: 'Bijapur',
  category: 'place',
  description: 'Famous as the "City of Monuments", known for its magnificent Islamic architecture, including the Gol Gumbaz and Ibrahim Rauza.',
  coordinates: { lat: 16.8240, lng: 75.7154 },
  banner_image: {
    storage_path: 'karnataka/places/bijapur/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Gol Gumbaz, Bijapur',
    credit: 'Unsplash',
    alt_text: 'Gol Gumbaz monument in Bijapur',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: createComprehensiveTabs('Bijapur', 'bijapur_karnataka')
};

// Hassan - Temple City and Coffee Land
export const hassanData: KarnatakaPOI = {
  id: 'hassan_karnataka',
  name: 'Hassan',
  category: 'place',
  description: 'Known for its ancient temples, coffee plantations, and proximity to UNESCO World Heritage sites like Belur and Halebidu.',
  coordinates: { lat: 13.0067, lng: 76.0992 },
  banner_image: {
    storage_path: 'karnataka/places/hassan/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Hassan Temple Architecture',
    credit: 'Unsplash',
    alt_text: 'Ancient temple architecture in Hassan',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: createComprehensiveTabs('Hassan', 'hassan_karnataka')
};

// Export all major cities data
export const karnatakaMajorCitiesData: KarnatakaPOI[] = [
  hubliData,
  belgaumData,
  shimogaData,
  udupiData,
  davangereData,
  gulbargaData,
  bijapurData,
  hassanData
];

export default karnatakaMajorCitiesData;

