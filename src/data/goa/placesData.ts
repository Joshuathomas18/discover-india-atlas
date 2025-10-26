// Goa Places Data
// Comprehensive data for major cities in Goa with full cultural information

import { KarnatakaPOI, PlaceTabs, ImageReference } from '../../types/database';

// Panaji - Capital City
export const panajiData: KarnatakaPOI = {
  id: 'panaji_goa',
  name: 'Panaji',
  category: 'place',
  description: 'Capital city of Goa, known for its Portuguese architecture, churches, and vibrant culture',
  coordinates: { lat: 15.4909, lng: 73.8278 },
  banner_image: {
    storage_path: 'goa/places/panaji/banner.jpg',
    download_url: '',
    caption: 'Panaji City with Portuguese Architecture',
    credit: 'Goa Tourism',
    alt_text: 'Panaji city with Portuguese colonial buildings',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: {
    monuments: [
      {
        id: 'basilica_of_bom_jesus',
        place_id: 'panaji_goa',
        state_id: 'goa',
        category: 'monuments',
        name: 'Basilica of Bom Jesus',
        description: 'UNESCO World Heritage Site, famous for housing the mortal remains of St. Francis Xavier',
        details: 'The Basilica of Bom Jesus is a 16th-century church and UNESCO World Heritage Site. It is famous for housing the mortal remains of St. Francis Xavier, the patron saint of Goa. The church is built in Baroque style and features intricate carvings and beautiful architecture. It is one of the most visited religious sites in Goa.',
        coordinates: { lat: 15.5008, lng: 73.9116 },
        images: [
          {
            storage_path: 'goa/places/panaji/monuments/basilica_1.jpg',
            download_url: '',
            caption: 'Basilica of Bom Jesus',
            credit: 'Goa Tourism',
            alt_text: 'Basilica of Bom Jesus church',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Visit Church',
            type: 'modal',
            content: 'Learn about the history and significance of Basilica of Bom Jesus'
          }
        },
        opening_hours: '9:00 AM - 6:30 PM',
        entry_fee: 'Free entry',
        best_time: 'Morning for peaceful visit',
        duration: '1-2 hours',
        accessibility_info: 'Wheelchair accessible',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'se_cathedral',
        place_id: 'panaji_goa',
        state_id: 'goa',
        category: 'monuments',
        name: 'Se Cathedral',
        description: 'Largest church in Asia, built in Portuguese-Gothic style',
        details: 'Se Cathedral is the largest church in Asia and is dedicated to St. Catherine. Built in Portuguese-Gothic style, it features beautiful architecture and houses several chapels. The church is known for its Golden Bell, which is one of the largest bells in the world. It is a UNESCO World Heritage Site and a major tourist attraction.',
        coordinates: { lat: 15.5008, lng: 73.9116 },
        images: [
          {
            storage_path: 'goa/places/panaji/monuments/se_cathedral_1.jpg',
            download_url: '',
            caption: 'Se Cathedral',
            credit: 'Goa Tourism',
            alt_text: 'Se Cathedral church architecture',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Visit Cathedral',
            type: 'modal',
            content: 'Explore the magnificent Se Cathedral'
          }
        },
        opening_hours: '7:30 AM - 6:30 PM',
        entry_fee: 'Free entry',
        best_time: 'Morning for peaceful visit',
        duration: '1-2 hours',
        accessibility_info: 'Wheelchair accessible',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    food: [
      {
        id: 'goan_fish_curry',
        place_id: 'panaji_goa',
        state_id: 'goa',
        category: 'food',
        name: 'Goan Fish Curry',
        description: 'Traditional Goan fish curry made with coconut milk and spices',
        details: 'Goan Fish Curry is a signature dish made with fresh fish, coconut milk, tamarind, and a blend of traditional Goan spices. The curry is known for its rich, creamy texture and spicy flavor. It is typically served with rice and is a staple in Goan cuisine, reflecting the coastal state\'s love for seafood.',
        coordinates: { lat: 15.4909, lng: 73.8278 },
        images: [
          {
            storage_path: 'goa/places/panaji/food/fish_curry_1.jpg',
            download_url: '',
            caption: 'Traditional Goan Fish Curry',
            credit: 'Goa Tourism',
            alt_text: 'Goan fish curry with rice',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Seafood Restaurants',
            type: 'places_search',
            query: 'Goan fish curry restaurants Panaji'
          }
        },
        opening_hours: '11:00 AM - 3:00 PM, 7:00 PM - 10:00 PM',
        entry_fee: 'INR 300-600 per person',
        best_time: 'Lunch or dinner',
        duration: '1 hour',
        accessibility_info: 'Restaurant dependent',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'bebinca_dessert',
        place_id: 'panaji_goa',
        state_id: 'goa',
        category: 'food',
        name: 'Bebinca',
        description: 'Traditional Goan layered dessert made with coconut milk and eggs',
        details: 'Bebinca is a traditional Goan dessert made with coconut milk, eggs, sugar, and ghee. It is a layered cake that is baked slowly to create multiple thin layers. The dessert is known for its rich taste and is often served during festivals and special occasions. It is a must-try for anyone visiting Goa.',
        coordinates: { lat: 15.4909, lng: 73.8278 },
        images: [
          {
            storage_path: 'goa/places/panaji/food/bebinca_1.jpg',
            download_url: '',
            caption: 'Traditional Goan Bebinca',
            credit: 'Goa Tourism',
            alt_text: 'Goan bebinca dessert',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Sweet Shops',
            type: 'places_search',
            query: 'Bebinca sweet shops Panaji'
          }
        },
        opening_hours: '9:00 AM - 9:00 PM',
        entry_fee: 'INR 100-300 per piece',
        best_time: 'Morning for fresh preparation',
        duration: '30 minutes',
        accessibility_info: 'Shop dependent',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    customs: [
      {
        id: 'portuguese_heritage',
        place_id: 'panaji_goa',
        state_id: 'goa',
        category: 'customs',
        name: 'Portuguese Heritage',
        description: 'Rich Portuguese colonial heritage and cultural traditions',
        details: 'Goa has a rich Portuguese heritage that is evident in its architecture, culture, and traditions. The Portuguese ruled Goa for over 450 years, leaving behind a unique blend of Indian and European cultures. This heritage is visible in the city\'s churches, houses, and cultural practices.',
        coordinates: { lat: 15.4909, lng: 73.8278 },
        images: [
          {
            storage_path: 'goa/places/panaji/customs/portuguese_1.jpg',
            download_url: '',
            caption: 'Portuguese Heritage in Goa',
            credit: 'Goa Tourism',
            alt_text: 'Portuguese colonial architecture in Goa',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Heritage Tour',
            type: 'modal',
            content: 'Explore Portuguese heritage through guided tours'
          }
        },
        opening_hours: 'All day',
        entry_fee: 'Tour fees vary',
        best_time: 'Morning for guided tours',
        duration: '2-3 hours',
        accessibility_info: 'Tour dependent',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'goan_festivals',
        place_id: 'panaji_goa',
        state_id: 'goa',
        category: 'customs',
        name: 'Goan Festivals',
        description: 'Traditional festivals and celebrations unique to Goa',
        details: 'Goa celebrates a unique blend of Indian and Portuguese festivals. Popular festivals include Christmas, Easter, Ganesh Chaturthi, and Diwali. The festivals are celebrated with great enthusiasm and showcase the state\'s multicultural heritage. Each festival has its own traditions and customs.',
        coordinates: { lat: 15.4909, lng: 73.8278 },
        images: [
          {
            storage_path: 'goa/places/panaji/customs/festivals_1.jpg',
            download_url: '',
            caption: 'Goan Festival Celebrations',
            credit: 'Goa Tourism',
            alt_text: 'Goan festival celebrations',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Festival Info',
            type: 'modal',
            content: 'Get information about Goan festivals and celebrations'
          }
        },
        opening_hours: 'Various timings',
        entry_fee: 'Free to observe',
        best_time: 'During festival seasons',
        duration: 'Varies by festival',
        accessibility_info: 'Public celebrations',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    festivals: [
      {
        id: 'carnival_goa',
        place_id: 'panaji_goa',
        state_id: 'goa',
        category: 'festivals',
        name: 'Goa Carnival',
        description: 'Annual carnival celebrating the pre-Lenten season with parades and festivities',
        details: 'The Goa Carnival is an annual event held before Lent, featuring colorful parades, music, dance, and various entertainment activities. The carnival brings together people from all walks of life to celebrate the state\'s multicultural heritage. It is one of the most popular festivals in Goa.',
        coordinates: { lat: 15.4909, lng: 73.8278 },
        images: [
          {
            storage_path: 'goa/places/panaji/festivals/carnival_1.jpg',
            download_url: '',
            caption: 'Goa Carnival Celebrations',
            credit: 'Goa Tourism',
            alt_text: 'Goa Carnival with colorful parades',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Carnival Info',
            type: 'modal',
            content: 'Get detailed information about Goa Carnival'
          }
        },
        opening_hours: 'All day during carnival',
        entry_fee: 'Free entry',
        best_time: 'Evening celebrations',
        duration: '3 days',
        accessibility_info: 'Public celebration',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'feast_of_st_francis_xavier',
        place_id: 'panaji_goa',
        state_id: 'goa',
        category: 'festivals',
        name: 'Feast of St. Francis Xavier',
        description: 'Religious festival honoring the patron saint of Goa',
        details: 'The Feast of St. Francis Xavier is a major religious festival in Goa, honoring the patron saint of the state. The festival involves religious ceremonies, processions, and various cultural activities. It attracts devotees from across the country and is a significant event in Goa\'s religious calendar.',
        coordinates: { lat: 15.4909, lng: 73.8278 },
        images: [
          {
            storage_path: 'goa/places/panaji/festivals/st_francis_1.jpg',
            download_url: '',
            caption: 'Feast of St. Francis Xavier',
            credit: 'Goa Tourism',
            alt_text: 'Feast of St. Francis Xavier procession',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Festival Schedule',
            type: 'modal',
            content: 'View the complete schedule of St. Francis Xavier Feast'
          }
        },
        opening_hours: 'Early morning to late evening',
        entry_fee: 'Free for devotees',
        best_time: 'Morning prayers',
        duration: '1 day',
        accessibility_info: 'Church dependent',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    history: [
      {
        id: 'portuguese_rule',
        place_id: 'panaji_goa',
        state_id: 'goa',
        category: 'history',
        name: 'Portuguese Rule',
        description: 'History of Portuguese colonial rule in Goa',
        details: 'Goa was under Portuguese rule for over 450 years, from 1510 to 1961. The Portuguese established their capital in Old Goa and later moved it to Panaji. The colonial period brought significant changes to Goa\'s culture, architecture, and society. The Portuguese influence is still visible in the state\'s churches, houses, and cultural practices.',
        coordinates: { lat: 15.4909, lng: 73.8278 },
        images: [
          {
            storage_path: 'goa/places/panaji/history/portuguese_1.jpg',
            download_url: '',
            caption: 'Portuguese Rule in Goa',
            credit: 'Goa Tourism',
            alt_text: 'Portuguese colonial period in Goa',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Historical Tour',
            type: 'modal',
            content: 'Join our guided historical tour of Portuguese Goa'
          }
        },
        opening_hours: 'All day',
        entry_fee: 'Tour fees vary',
        best_time: 'Morning for guided tours',
        duration: '2-3 hours',
        accessibility_info: 'Tour dependent',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'liberation_of_goa',
        place_id: 'panaji_goa',
        state_id: 'goa',
        category: 'history',
        name: 'Liberation of Goa',
        description: 'History of Goa\'s liberation from Portuguese rule',
        details: 'Goa was liberated from Portuguese rule on December 19, 1961, through a military operation by the Indian Army. The liberation marked the end of Portuguese colonial rule in India and the integration of Goa into the Indian Union. The event is celebrated annually as Goa Liberation Day.',
        coordinates: { lat: 15.4909, lng: 73.8278 },
        images: [
          {
            storage_path: 'goa/places/panaji/history/liberation_1.jpg',
            download_url: '',
            caption: 'Liberation of Goa',
            credit: 'Goa Tourism',
            alt_text: 'Goa Liberation Day celebrations',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Liberation Day Info',
            type: 'modal',
            content: 'Learn about Goa\'s liberation and its significance'
          }
        },
        opening_hours: 'All day',
        entry_fee: 'Free entry',
        best_time: 'During Liberation Day celebrations',
        duration: '1 day',
        accessibility_info: 'Public celebration',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]
  } as PlaceTabs
};

// Margao - Commercial Hub
export const margaoData: KarnatakaPOI = {
  id: 'margao_goa',
  name: 'Margao',
  category: 'place',
  description: 'Commercial hub of Goa, known for its markets, churches, and Portuguese architecture',
  coordinates: { lat: 15.2733, lng: 73.9579 },
  banner_image: {
    storage_path: 'goa/places/margao/banner.jpg',
    download_url: '',
    caption: 'Margao Commercial Hub',
    credit: 'Goa Tourism',
    alt_text: 'Margao city with Portuguese architecture',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: {
    monuments: [
      {
        id: 'margao_church',
        place_id: 'margao_goa',
        state_id: 'goa',
        category: 'monuments',
        name: 'Margao Church',
        description: 'Historic church with beautiful Portuguese architecture',
        details: 'The Margao Church is a historic church built in Portuguese style, featuring beautiful architecture and religious significance. The church is known for its intricate carvings and peaceful atmosphere. It serves as a center of worship and cultural activities for the local community.',
        coordinates: { lat: 15.2733, lng: 73.9579 },
        images: [
          {
            storage_path: 'goa/places/margao/monuments/church_1.jpg',
            download_url: '',
            caption: 'Margao Church',
            credit: 'Goa Tourism',
            alt_text: 'Margao Church architecture',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Visit Church',
            type: 'modal',
            content: 'Learn about Margao Church\'s history and significance'
          }
        },
        opening_hours: '7:00 AM - 6:00 PM',
        entry_fee: 'Free entry',
        best_time: 'Morning for peaceful visit',
        duration: '1 hour',
        accessibility_info: 'Wheelchair accessible',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'margao_market',
        place_id: 'margao_goa',
        state_id: 'goa',
        category: 'monuments',
        name: 'Margao Market',
        description: 'Historic market known for its traditional Goan products',
        details: 'The Margao Market is a historic market known for its traditional Goan products, including spices, seafood, and handicrafts. The market has been operating for centuries and is a major commercial hub in Goa. It offers a unique shopping experience and insights into local culture.',
        coordinates: { lat: 15.2733, lng: 73.9579 },
        images: [
          {
            storage_path: 'goa/places/margao/monuments/market_1.jpg',
            download_url: '',
            caption: 'Margao Market',
            credit: 'Goa Tourism',
            alt_text: 'Margao Market with traditional products',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Market Tour',
            type: 'modal',
            content: 'Explore Margao Market and its traditional products'
          }
        },
        opening_hours: '6:00 AM - 8:00 PM',
        entry_fee: 'Free entry',
        best_time: 'Morning for fresh products',
        duration: '1-2 hours',
        accessibility_info: 'Market dependent',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    food: [
      {
        id: 'margao_seafood',
        place_id: 'margao_goa',
        state_id: 'goa',
        category: 'food',
        name: 'Margao Seafood',
        description: 'Fresh seafood dishes prepared with traditional Goan spices',
        details: 'Margao is famous for its fresh seafood, including prawns, crabs, and various fish varieties. The seafood is prepared using traditional Goan spices and coconut-based gravies. Popular dishes include Goan prawn curry, fish moilee, and crab masala. The city\'s coastal location ensures the freshest catch.',
        coordinates: { lat: 15.2733, lng: 73.9579 },
        images: [
          {
            storage_path: 'goa/places/margao/food/seafood_1.jpg',
            download_url: '',
            caption: 'Margao Seafood Delicacies',
            credit: 'Goa Tourism',
            alt_text: 'Traditional Margao seafood dishes',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Seafood Restaurants',
            type: 'places_search',
            query: 'Fresh seafood restaurants Margao'
          }
        },
        opening_hours: '11:00 AM - 3:00 PM, 7:00 PM - 10:00 PM',
        entry_fee: 'INR 400-800 per person',
        best_time: 'Lunch or dinner',
        duration: '1-2 hours',
        accessibility_info: 'Restaurant dependent',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'margao_spices',
        place_id: 'margao_goa',
        state_id: 'goa',
        category: 'food',
        name: 'Margao Spices',
        description: 'Traditional spice markets and authentic spice-based cuisine',
        details: 'Margao has a rich history as a major spice trading center. The city\'s cuisine reflects this heritage with extensive use of spices like cardamom, pepper, cinnamon, and cloves. Traditional spice markets offer authentic spices, and local restaurants serve dishes that showcase the region\'s spice heritage.',
        coordinates: { lat: 15.2733, lng: 73.9579 },
        images: [
          {
            storage_path: 'goa/places/margao/food/spices_1.jpg',
            download_url: '',
            caption: 'Margao Spice Market',
            credit: 'Goa Tourism',
            alt_text: 'Traditional spice market in Margao',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Spice Markets',
            type: 'places_search',
            query: 'Traditional spice markets Margao'
          }
        },
        opening_hours: '9:00 AM - 6:00 PM',
        entry_fee: 'Free entry',
        best_time: 'Morning for fresh spices',
        duration: '1 hour',
        accessibility_info: 'Market dependent',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    customs: [
      {
        id: 'margao_culture',
        place_id: 'margao_goa',
        state_id: 'goa',
        category: 'customs',
        name: 'Margao Culture',
        description: 'Rich cultural traditions and customs unique to Margao',
        details: 'Margao has a rich cultural heritage that reflects the city\'s history and traditions. The city is known for its traditional festivals, music, and dance forms. The cultural practices are deeply rooted in the local community and are passed down through generations.',
        coordinates: { lat: 15.2733, lng: 73.9579 },
        images: [
          {
            storage_path: 'goa/places/margao/customs/culture_1.jpg',
            download_url: '',
            caption: 'Margao Cultural Traditions',
            credit: 'Goa Tourism',
            alt_text: 'Margao cultural traditions and customs',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Cultural Experience',
            type: 'modal',
            content: 'Experience Margao\'s cultural traditions firsthand'
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
        id: 'margao_handicrafts',
        place_id: 'margao_goa',
        state_id: 'goa',
        category: 'customs',
        name: 'Margao Handicrafts',
        description: 'Traditional handicrafts and art forms unique to Margao',
        details: 'Margao is known for its traditional handicrafts, including pottery, weaving, and metalwork. Local artisans create beautiful works using traditional techniques passed down through generations. These handicrafts reflect the city\'s cultural heritage and are popular among tourists.',
        coordinates: { lat: 15.2733, lng: 73.9579 },
        images: [
          {
            storage_path: 'goa/places/margao/customs/handicrafts_1.jpg',
            download_url: '',
            caption: 'Margao Traditional Handicrafts',
            credit: 'Goa Tourism',
            alt_text: 'Traditional handicrafts in Margao',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Handicraft Workshops',
            type: 'modal',
            content: 'Learn traditional handicrafts from local artisans'
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
        id: 'margao_festival',
        place_id: 'margao_goa',
        state_id: 'goa',
        category: 'festivals',
        name: 'Margao Festival',
        description: 'Annual cultural festival showcasing local arts and traditions',
        details: 'The Margao Festival is an annual cultural event that showcases local arts, traditions, and heritage. The festival features traditional music, dance, and cultural programs. It brings together artists and performers from across the region to celebrate the city\'s cultural richness.',
        coordinates: { lat: 15.2733, lng: 73.9579 },
        images: [
          {
            storage_path: 'goa/places/margao/festivals/festival_1.jpg',
            download_url: '',
            caption: 'Margao Festival Celebrations',
            credit: 'Goa Tourism',
            alt_text: 'Margao festival celebrations',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Festival Info',
            type: 'modal',
            content: 'Get information about Margao Festival'
          }
        },
        opening_hours: 'All day during festival',
        entry_fee: 'Free entry',
        best_time: 'Evening celebrations',
        duration: '3 days',
        accessibility_info: 'Public celebration',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'margao_religious_festival',
        place_id: 'margao_goa',
        state_id: 'goa',
        category: 'festivals',
        name: 'Margao Religious Festival',
        description: 'Sacred religious festival with deep spiritual significance',
        details: 'The Margao Religious Festival is a time of deep spiritual significance for the local community. It involves traditional rituals, prayers, and ceremonies that have been performed for centuries. The festival brings together devotees from various backgrounds to celebrate their shared faith and cultural heritage.',
        coordinates: { lat: 15.2733, lng: 73.9579 },
        images: [
          {
            storage_path: 'goa/places/margao/festivals/religious_1.jpg',
            download_url: '',
            caption: 'Margao Religious Festival',
            credit: 'Goa Tourism',
            alt_text: 'Margao religious festival',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Festival Schedule',
            type: 'modal',
            content: 'View the complete schedule of Margao Religious Festival'
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
        id: 'margao_history',
        place_id: 'margao_goa',
        state_id: 'goa',
        category: 'history',
        name: 'Margao History',
        description: 'Comprehensive history of Margao from ancient times to present',
        details: 'Margao has a rich and diverse history spanning several centuries. From its ancient origins to its role in various dynasties and empires, the city has witnessed numerous historical events that have shaped its character. The city\'s history is reflected in its architecture, culture, and traditions.',
        coordinates: { lat: 15.2733, lng: 73.9579 },
        images: [
          {
            storage_path: 'goa/places/margao/history/history_1.jpg',
            download_url: '',
            caption: 'Margao Historical Overview',
            credit: 'Goa Tourism',
            alt_text: 'Margao historical monuments',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Historical Tour',
            type: 'modal',
            content: 'Join our guided historical tour of Margao'
          }
        },
        opening_hours: 'All day',
        entry_fee: 'Tour fees vary',
        best_time: 'Morning for guided tours',
        duration: '2-3 hours',
        accessibility_info: 'Tour dependent',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'margao_archaeological_sites',
        place_id: 'margao_goa',
        state_id: 'goa',
        category: 'history',
        name: 'Margao Archaeological Sites',
        description: 'Ancient archaeological sites and historical monuments in Margao',
        details: 'Margao is home to several important archaeological sites that provide insights into the region\'s ancient past. These sites include ancient temples, inscriptions, and architectural remains that showcase the advanced civilization that once thrived in the area.',
        coordinates: { lat: 15.2733, lng: 73.9579 },
        images: [
          {
            storage_path: 'goa/places/margao/history/archaeological_1.jpg',
            download_url: '',
            caption: 'Margao Archaeological Sites',
            credit: 'Goa Tourism',
            alt_text: 'Margao archaeological remains',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Site Information',
            type: 'modal',
            content: 'Learn about Margao\'s archaeological significance'
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
  } as PlaceTabs
};

// Vasco da Gama - Port City
export const vascoDaGamaData: KarnatakaPOI = {
  id: 'vasco_da_gama_goa',
  name: 'Vasco da Gama',
  category: 'place',
  description: 'Port city named after the Portuguese explorer, known for its beaches and maritime heritage',
  coordinates: { lat: 15.3800, lng: 73.8300 },
  banner_image: {
    storage_path: 'goa/places/vasco_da_gama/banner.jpg',
    download_url: '',
    caption: 'Vasco da Gama Port City',
    credit: 'Goa Tourism',
    alt_text: 'Vasco da Gama port city with beaches',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: {
    monuments: [
      {
        id: 'vasco_port',
        place_id: 'vasco_da_gama_goa',
        state_id: 'goa',
        category: 'monuments',
        name: 'Vasco Port',
        description: 'Historic port with maritime heritage and scenic views',
        details: 'Vasco Port is a historic port that has been operating for centuries, serving as a major maritime hub in Goa. The port is known for its scenic views and maritime heritage. It offers insights into Goa\'s trading history and maritime culture.',
        coordinates: { lat: 15.3800, lng: 73.8300 },
        images: [
          {
            storage_path: 'goa/places/vasco_da_gama/monuments/port_1.jpg',
            download_url: '',
            caption: 'Vasco Port',
            credit: 'Goa Tourism',
            alt_text: 'Vasco Port with maritime heritage',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Port Tour',
            type: 'modal',
            content: 'Explore Vasco Port\'s maritime heritage'
          }
        },
        opening_hours: 'All day',
        entry_fee: 'Free entry',
        best_time: 'Morning or evening',
        duration: '1-2 hours',
        accessibility_info: 'Port dependent',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'vasco_beach',
        place_id: 'vasco_da_gama_goa',
        state_id: 'goa',
        category: 'monuments',
        name: 'Vasco Beach',
        description: 'Beautiful beach known for its scenic beauty and water sports',
        details: 'Vasco Beach is a beautiful beach known for its scenic beauty and water sports activities. The beach offers a peaceful atmosphere and is perfect for relaxation and recreation. It is a popular destination for both locals and tourists.',
        coordinates: { lat: 15.3800, lng: 73.8300 },
        images: [
          {
            storage_path: 'goa/places/vasco_da_gama/monuments/beach_1.jpg',
            download_url: '',
            caption: 'Vasco Beach',
            credit: 'Goa Tourism',
            alt_text: 'Vasco Beach with scenic views',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Beach Activities',
            type: 'modal',
            content: 'Enjoy beach activities and water sports'
          }
        },
        opening_hours: 'All day',
        entry_fee: 'Free entry',
        best_time: 'Morning or evening',
        duration: '1-2 hours',
        accessibility_info: 'Beach dependent',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    food: [
      {
        id: 'vasco_seafood',
        place_id: 'vasco_da_gama_goa',
        state_id: 'goa',
        category: 'food',
        name: 'Vasco Seafood',
        description: 'Fresh seafood dishes prepared with traditional Goan spices',
        details: 'Vasco is famous for its fresh seafood, including prawns, crabs, and various fish varieties. The seafood is prepared using traditional Goan spices and coconut-based gravies. Popular dishes include Goan prawn curry, fish moilee, and crab masala. The city\'s coastal location ensures the freshest catch.',
        coordinates: { lat: 15.3800, lng: 73.8300 },
        images: [
          {
            storage_path: 'goa/places/vasco_da_gama/food/seafood_1.jpg',
            download_url: '',
            caption: 'Vasco Seafood Delicacies',
            credit: 'Goa Tourism',
            alt_text: 'Traditional Vasco seafood dishes',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Seafood Restaurants',
            type: 'places_search',
            query: 'Fresh seafood restaurants Vasco da Gama'
          }
        },
        opening_hours: '11:00 AM - 3:00 PM, 7:00 PM - 10:00 PM',
        entry_fee: 'INR 400-800 per person',
        best_time: 'Lunch or dinner',
        duration: '1-2 hours',
        accessibility_info: 'Restaurant dependent',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'vasco_spices',
        place_id: 'vasco_da_gama_goa',
        state_id: 'goa',
        category: 'food',
        name: 'Vasco Spices',
        description: 'Traditional spice markets and authentic spice-based cuisine',
        details: 'Vasco has a rich history as a major spice trading center. The city\'s cuisine reflects this heritage with extensive use of spices like cardamom, pepper, cinnamon, and cloves. Traditional spice markets offer authentic spices, and local restaurants serve dishes that showcase the region\'s spice heritage.',
        coordinates: { lat: 15.3800, lng: 73.8300 },
        images: [
          {
            storage_path: 'goa/places/vasco_da_gama/food/spices_1.jpg',
            download_url: '',
            caption: 'Vasco Spice Market',
            credit: 'Goa Tourism',
            alt_text: 'Traditional spice market in Vasco',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Spice Markets',
            type: 'places_search',
            query: 'Traditional spice markets Vasco da Gama'
          }
        },
        opening_hours: '9:00 AM - 6:00 PM',
        entry_fee: 'Free entry',
        best_time: 'Morning for fresh spices',
        duration: '1 hour',
        accessibility_info: 'Market dependent',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    customs: [
      {
        id: 'vasco_culture',
        place_id: 'vasco_da_gama_goa',
        state_id: 'goa',
        category: 'customs',
        name: 'Vasco Culture',
        description: 'Rich cultural traditions and customs unique to Vasco',
        details: 'Vasco has a rich cultural heritage that reflects the city\'s history and traditions. The city is known for its traditional festivals, music, and dance forms. The cultural practices are deeply rooted in the local community and are passed down through generations.',
        coordinates: { lat: 15.3800, lng: 73.8300 },
        images: [
          {
            storage_path: 'goa/places/vasco_da_gama/customs/culture_1.jpg',
            download_url: '',
            caption: 'Vasco Cultural Traditions',
            credit: 'Goa Tourism',
            alt_text: 'Vasco cultural traditions and customs',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Cultural Experience',
            type: 'modal',
            content: 'Experience Vasco\'s cultural traditions firsthand'
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
        id: 'vasco_handicrafts',
        place_id: 'vasco_da_gama_goa',
        state_id: 'goa',
        category: 'customs',
        name: 'Vasco Handicrafts',
        description: 'Traditional handicrafts and art forms unique to Vasco',
        details: 'Vasco is known for its traditional handicrafts, including pottery, weaving, and metalwork. Local artisans create beautiful works using traditional techniques passed down through generations. These handicrafts reflect the city\'s cultural heritage and are popular among tourists.',
        coordinates: { lat: 15.3800, lng: 73.8300 },
        images: [
          {
            storage_path: 'goa/places/vasco_da_gama/customs/handicrafts_1.jpg',
            download_url: '',
            caption: 'Vasco Traditional Handicrafts',
            credit: 'Goa Tourism',
            alt_text: 'Traditional handicrafts in Vasco',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Handicraft Workshops',
            type: 'modal',
            content: 'Learn traditional handicrafts from local artisans'
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
        id: 'vasco_festival',
        place_id: 'vasco_da_gama_goa',
        state_id: 'goa',
        category: 'festivals',
        name: 'Vasco Festival',
        description: 'Annual cultural festival showcasing local arts and traditions',
        details: 'The Vasco Festival is an annual cultural event that showcases local arts, traditions, and heritage. The festival features traditional music, dance, and cultural programs. It brings together artists and performers from across the region to celebrate the city\'s cultural richness.',
        coordinates: { lat: 15.3800, lng: 73.8300 },
        images: [
          {
            storage_path: 'goa/places/vasco_da_gama/festivals/festival_1.jpg',
            download_url: '',
            caption: 'Vasco Festival Celebrations',
            credit: 'Goa Tourism',
            alt_text: 'Vasco festival celebrations',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Festival Info',
            type: 'modal',
            content: 'Get information about Vasco Festival'
          }
        },
        opening_hours: 'All day during festival',
        entry_fee: 'Free entry',
        best_time: 'Evening celebrations',
        duration: '3 days',
        accessibility_info: 'Public celebration',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'vasco_religious_festival',
        place_id: 'vasco_da_gama_goa',
        state_id: 'goa',
        category: 'festivals',
        name: 'Vasco Religious Festival',
        description: 'Sacred religious festival with deep spiritual significance',
        details: 'The Vasco Religious Festival is a time of deep spiritual significance for the local community. It involves traditional rituals, prayers, and ceremonies that have been performed for centuries. The festival brings together devotees from various backgrounds to celebrate their shared faith and cultural heritage.',
        coordinates: { lat: 15.3800, lng: 73.8300 },
        images: [
          {
            storage_path: 'goa/places/vasco_da_gama/festivals/religious_1.jpg',
            download_url: '',
            caption: 'Vasco Religious Festival',
            credit: 'Goa Tourism',
            alt_text: 'Vasco religious festival',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Festival Schedule',
            type: 'modal',
            content: 'View the complete schedule of Vasco Religious Festival'
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
        id: 'vasco_history',
        place_id: 'vasco_da_gama_goa',
        state_id: 'goa',
        category: 'history',
        name: 'Vasco History',
        description: 'Comprehensive history of Vasco from ancient times to present',
        details: 'Vasco has a rich and diverse history spanning several centuries. From its ancient origins to its role in various dynasties and empires, the city has witnessed numerous historical events that have shaped its character. The city\'s history is reflected in its architecture, culture, and traditions.',
        coordinates: { lat: 15.3800, lng: 73.8300 },
        images: [
          {
            storage_path: 'goa/places/vasco_da_gama/history/history_1.jpg',
            download_url: '',
            caption: 'Vasco Historical Overview',
            credit: 'Goa Tourism',
            alt_text: 'Vasco historical monuments',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Historical Tour',
            type: 'modal',
            content: 'Join our guided historical tour of Vasco'
          }
        },
        opening_hours: 'All day',
        entry_fee: 'Tour fees vary',
        best_time: 'Morning for guided tours',
        duration: '2-3 hours',
        accessibility_info: 'Tour dependent',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'vasco_archaeological_sites',
        place_id: 'vasco_da_gama_goa',
        state_id: 'goa',
        category: 'history',
        name: 'Vasco Archaeological Sites',
        description: 'Ancient archaeological sites and historical monuments in Vasco',
        details: 'Vasco is home to several important archaeological sites that provide insights into the region\'s ancient past. These sites include ancient temples, inscriptions, and architectural remains that showcase the advanced civilization that once thrived in the area.',
        coordinates: { lat: 15.3800, lng: 73.8300 },
        images: [
          {
            storage_path: 'goa/places/vasco_da_gama/history/archaeological_1.jpg',
            download_url: '',
            caption: 'Vasco Archaeological Sites',
            credit: 'Goa Tourism',
            alt_text: 'Vasco archaeological remains',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Site Information',
            type: 'modal',
            content: 'Learn about Vasco\'s archaeological significance'
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
  } as PlaceTabs
};

export default panajiData;

