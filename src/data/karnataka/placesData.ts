// Bengaluru (Bangalore) - Karnataka Places Data
// Comprehensive data for Bengaluru with 5 cultural categories

import { KarnatakaPOI, PlaceTabs, ImageReference } from '../../types/database';

export const bengaluruData: KarnatakaPOI = {
  id: 'bengaluru_karnataka',
  name: 'Bengaluru',
  category: 'place',
  description: 'Silicon Valley of India, known for IT industry, pleasant climate, and rich cultural heritage',
  coordinates: { lat: 12.9716, lng: 77.5946 },
  banner_image: {
    storage_path: 'karnataka/places/bengaluru/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Bengaluru City Skyline',
    credit: 'Unsplash',
    alt_text: 'Bengaluru city skyline with modern buildings',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: {
    monuments: [
      {
        id: 'bangalore_palace',
        place_id: 'bengaluru_karnataka',
        state_id: 'karnataka',
        category: 'monuments',
        name: 'Bangalore Palace',
        description: 'A magnificent palace built in Tudor-style architecture',
        details: 'Built in 1887 by Chamaraja Wodeyar, this palace is inspired by Windsor Castle in England. It features beautiful architecture, vintage furniture, and lush gardens. The palace is a perfect blend of Indian and European architectural styles.',
        coordinates: { lat: 12.9988, lng: 77.5925 },
        images: [
          {
            storage_path: 'karnataka/places/bengaluru/monuments/bangalore_palace_1.jpg',
            download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
            caption: 'Bangalore Palace Main Building',
            credit: 'Unsplash',
            alt_text: 'Bangalore Palace main building facade',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Buy Tickets',
            type: 'external_link',
            url: 'https://bangalorepalace.org/tickets'
          },
          secondary: {
            label: 'Virtual Tour',
            type: 'modal',
            content: 'Take a virtual tour of Bangalore Palace'
          }
        },
        opening_hours: '10:00 AM - 5:30 PM',
        entry_fee: 'INR 230 (adults), INR 460 (foreigners)',
        best_time: 'Morning hours for better lighting',
        duration: '2-3 hours',
        accessibility_info: 'Wheelchair accessible',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'vidhana_soudha',
        place_id: 'bengaluru_karnataka',
        state_id: 'karnataka',
        category: 'monuments',
        name: 'Vidhana Soudha',
        description: 'The seat of Karnataka state legislature',
        details: 'Built in 1956, Vidhana Soudha is an imposing building that houses the state legislature and secretariat. It is a perfect example of neo-Dravidian architecture with elements of Indo-Saracenic style. The building is beautifully illuminated at night.',
        coordinates: { lat: 12.9791, lng: 77.5913 },
        images: [
          {
            storage_path: 'karnataka/places/bengaluru/monuments/vidhana_soudha_1.jpg',
            download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
            caption: 'Vidhana Soudha Building',
            credit: 'Unsplash',
            alt_text: 'Vidhana Soudha building facade',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Learn More',
            type: 'modal',
            content: 'Learn about Karnataka state legislature'
          }
        },
        opening_hours: '9:00 AM - 5:00 PM (Weekdays)',
        entry_fee: 'Free (External view only)',
        best_time: 'Evening for illumination',
        duration: '30 minutes',
        accessibility_info: 'External viewing only',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'tipu_sultan_summer_palace',
        place_id: 'bengaluru_karnataka',
        state_id: 'karnataka',
        category: 'monuments',
        name: 'Tipu Sultan\'s Summer Palace',
        description: 'Historic palace of the Tiger of Mysore',
        details: 'Built in 1791, this palace was the summer residence of Tipu Sultan. It showcases Indo-Islamic architecture with beautiful teak wood carvings and intricate designs. The palace houses a museum with artifacts from Tipu Sultan\'s era.',
        coordinates: { lat: 12.9619, lng: 77.5847 },
        images: [
          {
            storage_path: 'karnataka/places/bengaluru/monuments/tipu_palace_1.jpg',
            download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
            caption: 'Tipu Sultan Summer Palace',
            credit: 'Unsplash',
            alt_text: 'Tipu Sultan Summer Palace building',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Buy Tickets',
            type: 'external_link',
            url: 'https://asi.nic.in/tickets'
          },
          secondary: {
            label: 'Audio Guide',
            type: 'modal',
            content: 'Get audio guide for detailed information'
          }
        },
        opening_hours: '8:30 AM - 5:30 PM',
        entry_fee: 'INR 15 (Indians), INR 200 (foreigners)',
        best_time: 'Morning hours',
        duration: '1-2 hours',
        accessibility_info: 'Wheelchair accessible',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    food: [
      {
        id: 'mtr_restaurant',
        place_id: 'bengaluru_karnataka',
        state_id: 'karnataka',
        category: 'food',
        name: 'MTR (Mavalli Tiffin Room)',
        description: 'Iconic South Indian restaurant since 1924',
        details: 'MTR is legendary for its authentic South Indian cuisine, especially its rava idli, masala dosa, and filter coffee. The restaurant has been serving traditional Karnataka food for nearly a century and is a must-visit for food lovers.',
        coordinates: { lat: 12.9716, lng: 77.5946 },
        images: [
          {
            storage_path: 'karnataka/places/bengaluru/food/mtr_1.jpg',
            download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
            caption: 'MTR Restaurant Interior',
            credit: 'Unsplash',
            alt_text: 'MTR restaurant interior with traditional South Indian food',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Find Location',
            type: 'places_search',
            query: 'MTR Restaurant Bangalore'
          },
          secondary: {
            label: 'Menu',
            type: 'modal',
            content: 'View MTR menu and specialties'
          }
        },
        opening_hours: '6:30 AM - 11:00 PM',
        entry_fee: 'Budget-friendly',
        best_time: 'Breakfast and lunch hours',
        duration: '1 hour',
        accessibility_info: 'Ground floor accessible',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'vidyarthi_bhavan',
        place_id: 'bengaluru_karnataka',
        state_id: 'karnataka',
        category: 'food',
        name: 'Vidyarthi Bhavan',
        description: 'Famous for the best masala dosa in Bangalore',
        details: 'Established in 1943, Vidyarthi Bhavan is famous for its crispy masala dosa and filter coffee. The restaurant has maintained its traditional taste and is a favorite among locals and tourists alike.',
        coordinates: { lat: 12.9716, lng: 77.5946 },
        images: [
          {
            storage_path: 'karnataka/places/bengaluru/food/vidyarthi_bhavan_1.jpg',
            download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
            caption: 'Vidyarthi Bhavan Masala Dosa',
            credit: 'Unsplash',
            alt_text: 'Famous masala dosa from Vidyarthi Bhavan',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Find Location',
            type: 'places_search',
            query: 'Vidyarthi Bhavan Bangalore'
          }
        },
        opening_hours: '6:00 AM - 11:00 PM',
        entry_fee: 'Budget-friendly',
        best_time: 'Breakfast hours',
        duration: '45 minutes',
        accessibility_info: 'Ground floor accessible',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    customs: [
      {
        id: 'kannada_culture',
        place_id: 'bengaluru_karnataka',
        state_id: 'karnataka',
        category: 'customs',
        name: 'Kannada Culture & Traditions',
        description: 'Rich cultural heritage of Karnataka',
        details: 'Bengaluru is the cultural capital of Karnataka, showcasing traditional Kannada customs, classical music, dance forms like Bharatanatyam and Kuchipudi, and traditional arts and crafts.',
        coordinates: { lat: 12.9716, lng: 77.5946 },
        images: [
          {
            storage_path: 'karnataka/places/bengaluru/customs/kannada_culture_1.jpg',
            download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
            caption: 'Traditional Kannada Dance Performance',
            credit: 'Unsplash',
            alt_text: 'Traditional Kannada dance performance',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Cultural Events',
            type: 'modal',
            content: 'Find upcoming cultural events in Bengaluru'
          }
        },
        opening_hours: 'Various timings',
        entry_fee: 'Varies by event',
        best_time: 'Evening cultural programs',
        duration: '2-3 hours',
        accessibility_info: 'Venue dependent',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    festivals: [
      {
        id: 'karva_chauth',
        place_id: 'bengaluru_karnataka',
        state_id: 'karnataka',
        category: 'festivals',
        name: 'Karva Chauth',
        description: 'Traditional festival celebrated by married women',
        details: 'Karva Chauth is celebrated with great enthusiasm in Bengaluru. Married women observe fast for the long life of their husbands. The city comes alive with traditional rituals, beautiful decorations, and festive atmosphere.',
        coordinates: { lat: 12.9716, lng: 77.5946 },
        images: [
          {
            storage_path: 'karnataka/places/bengaluru/festivals/karva_chauth_1.jpg',
            download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
            caption: 'Karva Chauth Celebrations',
            credit: 'Unsplash',
            alt_text: 'Karva Chauth festival celebrations',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Festival Info',
            type: 'modal',
            content: 'Learn about Karva Chauth traditions'
          }
        },
        opening_hours: 'All day',
        entry_fee: 'Free',
        best_time: 'Evening celebrations',
        duration: 'All day',
        accessibility_info: 'Public celebration',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'dussehra',
        place_id: 'bengaluru_karnataka',
        state_id: 'karnataka',
        category: 'festivals',
        name: 'Dussehra',
        description: 'Victory of good over evil',
        details: 'Dussehra is celebrated with great pomp and show in Bengaluru. The festival marks the victory of Lord Rama over Ravana. The city witnesses grand processions, cultural performances, and the burning of effigies.',
        coordinates: { lat: 12.9716, lng: 77.5946 },
        images: [
          {
            storage_path: 'karnataka/places/bengaluru/festivals/dussehra_1.jpg',
            download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
            caption: 'Dussehra Celebrations',
            credit: 'Unsplash',
            alt_text: 'Dussehra festival celebrations with effigies',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Festival Info',
            type: 'modal',
            content: 'Learn about Dussehra celebrations'
          }
        },
        opening_hours: 'All day',
        entry_fee: 'Free',
        best_time: 'Evening celebrations',
        duration: 'All day',
        accessibility_info: 'Public celebration',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    history: [
      {
        id: 'kempegowda_founder',
        place_id: 'bengaluru_karnataka',
        state_id: 'karnataka',
        category: 'history',
        name: 'Kempegowda - Founder of Bengaluru',
        description: 'The visionary who founded Bengaluru',
        details: 'Kempegowda I, a chieftain under the Vijayanagara Empire, founded Bengaluru in 1537. He built the city with a fort and several temples. The Kempegowda Tower in Lalbagh Botanical Garden stands as a testament to his vision.',
        coordinates: { lat: 12.9716, lng: 77.5946 },
        images: [
          {
            storage_path: 'karnataka/places/bengaluru/history/kempegowda_1.jpg',
            download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
            caption: 'Kempegowda Tower',
            credit: 'Unsplash',
            alt_text: 'Kempegowda Tower in Lalbagh',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Learn More',
            type: 'modal',
            content: 'Learn about Kempegowda and Bengaluru history'
          }
        },
        opening_hours: 'All day',
        entry_fee: 'Free',
        best_time: 'Any time',
        duration: '30 minutes',
        accessibility_info: 'Public monument',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'british_rule',
        place_id: 'bengaluru_karnataka',
        state_id: 'karnataka',
        category: 'history',
        name: 'British Rule & Cantonment',
        description: 'Bengaluru under British administration',
        details: 'During British rule, Bengaluru became a major cantonment town. The British developed the city with wide roads, parks, and administrative buildings. The Cantonment area still retains its colonial charm with heritage buildings.',
        coordinates: { lat: 12.9716, lng: 77.5946 },
        images: [
          {
            storage_path: 'karnataka/places/bengaluru/history/british_rule_1.jpg',
            download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
            caption: 'British Era Buildings',
            credit: 'Unsplash',
            alt_text: 'British era buildings in Bengaluru',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Heritage Walk',
            type: 'modal',
            content: 'Take a heritage walk through colonial Bengaluru'
          }
        },
        opening_hours: 'All day',
        entry_fee: 'Free',
        best_time: 'Morning hours',
        duration: '2-3 hours',
        accessibility_info: 'Walking tour',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]
  } as PlaceTabs
};

// Additional Cities
export const mysoreData: KarnatakaPOI = {
  id: 'mysore_karnataka',
  name: 'Mysore',
  category: 'place',
  description: 'City of Palaces, famous for Dasara festival and royal heritage',
  coordinates: { lat: 12.2958, lng: 76.6394 },
  banner_image: {
    storage_path: 'karnataka/places/mysore/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Mysore Palace',
    credit: 'Unsplash',
    alt_text: 'Mysore Palace with beautiful architecture',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: {
    monuments: [
      {
        id: 'mysore_palace',
        place_id: 'mysore_karnataka',
        state_id: 'karnataka',
        category: 'monuments',
        name: 'Mysore Palace',
        description: 'Magnificent royal palace of the Wodeyar dynasty',
        details: 'The Mysore Palace is one of the most magnificent palaces in India, built in Indo-Saracenic style. It features beautiful architecture, intricate carvings, and is illuminated with thousands of lights during Dasara festival.',
        coordinates: { lat: 12.3051, lng: 76.6552 },
        images: [
          {
            storage_path: 'karnataka/places/mysore/monuments/mysore_palace_1.jpg',
            download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
            caption: 'Mysore Palace Main Building',
            credit: 'Unsplash',
            alt_text: 'Mysore Palace main building facade',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Buy Tickets',
            type: 'external_link',
            url: 'https://mysorepalace.org/tickets'
          }
        },
        opening_hours: '10:00 AM - 5:30 PM',
        entry_fee: 'INR 70 (adults), INR 200 (foreigners)',
        best_time: 'Evening for illumination',
        duration: '2-3 hours',
        accessibility_info: 'Wheelchair accessible',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    food: [
      {
        id: 'mysore_pak',
        place_id: 'mysore_karnataka',
        state_id: 'karnataka',
        category: 'food',
        name: 'Mysore Pak',
        description: 'Famous sweet from Mysore',
        details: 'Mysore Pak is a traditional sweet made from gram flour, sugar, and ghee. It was invented in the Mysore Palace kitchen and is now famous worldwide.',
        coordinates: { lat: 12.2958, lng: 76.6394 },
        images: [
          {
            storage_path: 'karnataka/places/mysore/food/mysore_pak_1.jpg',
            download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
            caption: 'Mysore Pak Sweet',
            credit: 'Unsplash',
            alt_text: 'Traditional Mysore Pak sweet',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Find Shops',
            type: 'places_search',
            query: 'Mysore Pak shops Mysore'
          }
        },
        opening_hours: 'All day',
        entry_fee: 'Varies',
        best_time: 'Any time',
        duration: '30 minutes',
        accessibility_info: 'Ground floor accessible',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    customs: [
      {
        id: 'dasara_festival',
        place_id: 'mysore_karnataka',
        state_id: 'karnataka',
        category: 'customs',
        name: 'Dasara Festival',
        description: 'Grand 10-day festival celebrating victory of good over evil',
        details: 'Dasara is the most important festival in Mysore, celebrated with great pomp and show. The palace is illuminated with thousands of lights, and there are cultural performances, processions, and exhibitions.',
        coordinates: { lat: 12.2958, lng: 76.6394 },
        images: [
          {
            storage_path: 'karnataka/places/mysore/customs/dasara_1.jpg',
            download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
            caption: 'Dasara Festival Celebrations',
            credit: 'Unsplash',
            alt_text: 'Dasara festival celebrations in Mysore',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Festival Info',
            type: 'modal',
            content: 'Learn about Dasara festival traditions'
          }
        },
        opening_hours: 'All day during festival',
        entry_fee: 'Free',
        best_time: 'Evening celebrations',
        duration: '10 days',
        accessibility_info: 'Public celebration',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    festivals: [
      {
        id: 'dasara',
        place_id: 'mysore_karnataka',
        state_id: 'karnataka',
        category: 'festivals',
        name: 'Dasara',
        description: 'Royal festival of Mysore',
        details: 'Dasara is celebrated with great grandeur in Mysore. The palace is illuminated, and there are cultural performances, processions, and exhibitions throughout the city.',
        coordinates: { lat: 12.2958, lng: 76.6394 },
        images: [
          {
            storage_path: 'karnataka/places/mysore/festivals/dasara_1.jpg',
            download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
            caption: 'Dasara Festival',
            credit: 'Unsplash',
            alt_text: 'Dasara festival in Mysore',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Festival Info',
            type: 'modal',
            content: 'Learn about Dasara festival'
          }
        },
        opening_hours: 'All day',
        entry_fee: 'Free',
        best_time: 'Evening',
        duration: '10 days',
        accessibility_info: 'Public celebration',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    history: [
      {
        id: 'wodeyar_dynasty',
        place_id: 'mysore_karnataka',
        state_id: 'karnataka',
        category: 'history',
        name: 'Wodeyar Dynasty',
        description: 'Royal dynasty that ruled Mysore for centuries',
        details: 'The Wodeyar dynasty ruled Mysore from 1399 to 1950. They were great patrons of art, culture, and architecture. The Mysore Palace and many other monuments were built during their reign.',
        coordinates: { lat: 12.2958, lng: 76.6394 },
        images: [
          {
            storage_path: 'karnataka/places/mysore/history/wodeyar_1.jpg',
            download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
            caption: 'Wodeyar Dynasty Heritage',
            credit: 'Unsplash',
            alt_text: 'Wodeyar dynasty heritage in Mysore',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Learn More',
            type: 'modal',
            content: 'Learn about Wodeyar dynasty history'
          }
        },
        opening_hours: 'All day',
        entry_fee: 'Free',
        best_time: 'Any time',
        duration: '1 hour',
        accessibility_info: 'Public monument',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]
  } as PlaceTabs
};

export const mangaloreData: KarnatakaPOI = {
  id: 'mangalore_karnataka',
  name: 'Mangalore',
  category: 'place',
  description: 'Major port city with beautiful beaches and rich cultural heritage',
  coordinates: { lat: 12.9141, lng: 74.8560 },
  banner_image: {
    storage_path: 'karnataka/places/mangalore/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Mangalore City',
    credit: 'Unsplash',
    alt_text: 'Mangalore city with beaches',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: {
    monuments: [
      {
        id: 'kadri_manjunath_temple',
        place_id: 'mangalore_karnataka',
        state_id: 'karnataka',
        category: 'monuments',
        name: 'Kadri Manjunath Temple',
        description: 'Ancient temple dedicated to Lord Manjunatha',
        details: 'The Kadri Manjunath Temple is an ancient temple dedicated to Lord Manjunatha (Shiva). It features beautiful architecture and is known for its bronze statue of Lokeshwara.',
        coordinates: { lat: 12.9141, lng: 74.8560 },
        images: [
          {
            storage_path: 'karnataka/places/mangalore/monuments/kadri_temple_1.jpg',
            download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
            caption: 'Kadri Manjunath Temple',
            credit: 'Unsplash',
            alt_text: 'Kadri Manjunath Temple architecture',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Visit Temple',
            type: 'modal',
            content: 'Learn about temple timings and rituals'
          }
        },
        opening_hours: '6:00 AM - 8:00 PM',
        entry_fee: 'Free',
        best_time: 'Morning hours',
        duration: '1 hour',
        accessibility_info: 'Temple accessible',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    food: [
      {
        id: 'mangalorean_cuisine',
        place_id: 'mangalore_karnataka',
        state_id: 'karnataka',
        category: 'food',
        name: 'Mangalorean Cuisine',
        description: 'Famous coastal cuisine with seafood specialties',
        details: 'Mangalorean cuisine is known for its seafood dishes, coconut-based curries, and unique spices. Popular dishes include fish curry, prawn gassi, and neer dosa.',
        coordinates: { lat: 12.9141, lng: 74.8560 },
        images: [
          {
            storage_path: 'karnataka/places/mangalore/food/mangalorean_cuisine_1.jpg',
            download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
            caption: 'Mangalorean Fish Curry',
            credit: 'Unsplash',
            alt_text: 'Traditional Mangalorean fish curry',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Find Restaurants',
            type: 'places_search',
            query: 'Mangalorean restaurants Mangalore'
          }
        },
        opening_hours: 'All day',
        entry_fee: 'Varies',
        best_time: 'Lunch and dinner',
        duration: '1-2 hours',
        accessibility_info: 'Restaurant dependent',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    customs: [
      {
        id: 'tulu_culture',
        place_id: 'mangalore_karnataka',
        state_id: 'karnataka',
        category: 'customs',
        name: 'Tulu Culture',
        description: 'Rich Tulu culture and traditions',
        details: 'Mangalore is the cultural center of Tulu Nadu. The city celebrates various Tulu festivals and traditions, including Yakshagana, a traditional dance-drama form.',
        coordinates: { lat: 12.9141, lng: 74.8560 },
        images: [
          {
            storage_path: 'karnataka/places/mangalore/customs/tulu_culture_1.jpg',
            download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
            caption: 'Tulu Culture Performance',
            credit: 'Unsplash',
            alt_text: 'Tulu culture performance',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Cultural Events',
            type: 'modal',
            content: 'Find Tulu cultural events in Mangalore'
          }
        },
        opening_hours: 'Various timings',
        entry_fee: 'Varies by event',
        best_time: 'Evening programs',
        duration: '2-3 hours',
        accessibility_info: 'Venue dependent',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    festivals: [
      {
        id: 'karavali_utsav',
        place_id: 'mangalore_karnataka',
        state_id: 'karnataka',
        category: 'festivals',
        name: 'Karavali Utsav',
        description: 'Annual cultural festival of coastal Karnataka',
        details: 'Karavali Utsav is an annual cultural festival that showcases the rich heritage of coastal Karnataka. It features traditional music, dance, and cultural performances.',
        coordinates: { lat: 12.9141, lng: 74.8560 },
        images: [
          {
            storage_path: 'karnataka/places/mangalore/festivals/karavali_utsav_1.jpg',
            download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
            caption: 'Karavali Utsav Festival',
            credit: 'Unsplash',
            alt_text: 'Karavali Utsav festival celebrations',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Festival Info',
            type: 'modal',
            content: 'Learn about Karavali Utsav festival'
          }
        },
        opening_hours: 'All day during festival',
        entry_fee: 'Free',
        best_time: 'Evening celebrations',
        duration: '3 days',
        accessibility_info: 'Public celebration',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    history: [
      {
        id: 'port_history',
        place_id: 'mangalore_karnataka',
        state_id: 'karnataka',
        category: 'history',
        name: 'Port City History',
        description: 'Historical significance as a major port city',
        details: 'Mangalore has been an important port city for centuries, serving as a gateway for trade between India and the Middle East. The city has a rich maritime history and cultural diversity.',
        coordinates: { lat: 12.9141, lng: 74.8560 },
        images: [
          {
            storage_path: 'karnataka/places/mangalore/history/port_history_1.jpg',
            download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
            caption: 'Mangalore Port',
            credit: 'Unsplash',
            alt_text: 'Mangalore port historical significance',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Learn More',
            type: 'modal',
            content: 'Learn about Mangalore port history'
          }
        },
        opening_hours: 'All day',
        entry_fee: 'Free',
        best_time: 'Any time',
        duration: '1 hour',
        accessibility_info: 'Public monument',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]
  } as PlaceTabs
};

export default bengaluruData;
