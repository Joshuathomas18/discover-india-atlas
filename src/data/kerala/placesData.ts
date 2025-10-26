// Kerala Places Data
// Comprehensive data for major cities in Kerala with full cultural information

import { KarnatakaPOI, PlaceTabs, ImageReference } from '../../types/database';

// Thiruvananthapuram - Capital City
export const thiruvananthapuramData: KarnatakaPOI = {
  id: 'thiruvananthapuram_kerala',
  name: 'Thiruvananthapuram',
  category: 'place',
  description: 'Capital city of Kerala, known for its beaches, temples, and rich cultural heritage',
  coordinates: { lat: 8.5241, lng: 76.9366 },
  banner_image: {
    storage_path: 'kerala/places/thiruvananthapuram/banner.jpg',
    download_url: '',
    caption: 'Thiruvananthapuram City',
    credit: 'Kerala Tourism',
    alt_text: 'Thiruvananthapuram cityscape with beaches',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: {
    monuments: [
      {
        id: 'padmanabhaswamy_temple',
        place_id: 'thiruvananthapuram_kerala',
        state_id: 'kerala',
        category: 'monuments',
        name: 'Padmanabhaswamy Temple',
        description: 'Famous Hindu temple dedicated to Lord Vishnu, known for its architectural grandeur',
        details: 'The Padmanabhaswamy Temple is one of the most famous temples in India, dedicated to Lord Vishnu in his Anantha Shayana posture. Built in the Dravidian style of architecture, the temple is renowned for its intricate stone carvings and gold-plated gopuram. The temple has been a center of worship for centuries and is considered one of the wealthiest temples in the world.',
        coordinates: { lat: 8.4829, lng: 76.9447 },
        images: [
          {
            storage_path: 'kerala/places/thiruvananthapuram/monuments/padmanabhaswamy_1.jpg',
            download_url: '',
            caption: 'Padmanabhaswamy Temple',
            credit: 'Kerala Tourism',
            alt_text: 'Padmanabhaswamy Temple architecture',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Visit Temple',
            type: 'modal',
            content: 'Learn about temple timings and dress code'
          }
        },
        opening_hours: '3:30 AM - 12:00 PM, 5:00 PM - 8:00 PM',
        entry_fee: 'Free entry',
        best_time: 'Early morning for darshan',
        duration: '1-2 hours',
        accessibility_info: 'Traditional dress required',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'napier_museum',
        place_id: 'thiruvananthapuram_kerala',
        state_id: 'kerala',
        category: 'monuments',
        name: 'Napier Museum',
        description: 'Historic museum showcasing Kerala\'s art, culture, and natural history',
        details: 'The Napier Museum is a 19th-century museum built in the Indo-Saracenic architectural style. It houses a rich collection of archaeological artifacts, bronze idols, ancient coins, and traditional Kerala art forms. The museum is named after Lord Napier, the Governor of Madras Presidency, and is surrounded by beautiful gardens.',
        coordinates: { lat: 8.5089, lng: 76.9567 },
        images: [
          {
            storage_path: 'kerala/places/thiruvananthapuram/monuments/napier_museum_1.jpg',
            download_url: '',
            caption: 'Napier Museum',
            credit: 'Kerala Tourism',
            alt_text: 'Napier Museum building',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Buy Tickets',
            type: 'external_link',
            url: 'https://keralamuseum.gov.in/tickets'
          }
        },
        opening_hours: '10:00 AM - 5:00 PM (Closed Mondays)',
        entry_fee: 'INR 10 (adults), INR 5 (children)',
        best_time: 'Morning hours',
        duration: '1-2 hours',
        accessibility_info: 'Wheelchair accessible',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    food: [
      {
        id: 'kerala_sadya',
        place_id: 'thiruvananthapuram_kerala',
        state_id: 'kerala',
        category: 'food',
        name: 'Kerala Sadya',
        description: 'Traditional vegetarian feast served on banana leaves with multiple dishes',
        details: 'Kerala Sadya is a traditional vegetarian feast that includes rice, sambar, rasam, various vegetable curries, pickles, and desserts. It is typically served on banana leaves during festivals and special occasions. The meal represents the rich culinary heritage of Kerala and is known for its balanced flavors and nutritional value.',
        coordinates: { lat: 8.5241, lng: 76.9366 },
        images: [
          {
            storage_path: 'kerala/places/thiruvananthapuram/food/sadya_1.jpg',
            download_url: '',
            caption: 'Traditional Kerala Sadya',
            credit: 'Kerala Tourism',
            alt_text: 'Kerala Sadya on banana leaf',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Find Restaurants',
            type: 'places_search',
            query: 'Traditional Kerala Sadya restaurants Thiruvananthapuram'
          }
        },
        opening_hours: '11:00 AM - 3:00 PM',
        entry_fee: 'INR 200-500 per person',
        best_time: 'Lunch time',
        duration: '1-2 hours',
        accessibility_info: 'Ground floor restaurants available',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'kerala_fish_curry',
        place_id: 'thiruvananthapuram_kerala',
        state_id: 'kerala',
        category: 'food',
        name: 'Kerala Fish Curry',
        description: 'Spicy fish curry made with coconut milk and traditional Kerala spices',
        details: 'Kerala Fish Curry is a signature dish made with fresh fish, coconut milk, tamarind, and a blend of traditional spices. The curry is known for its rich, creamy texture and spicy flavor. It is typically served with rice and is a staple in Kerala cuisine, reflecting the coastal state\'s love for seafood.',
        coordinates: { lat: 8.5241, lng: 76.9366 },
        images: [
          {
            storage_path: 'kerala/places/thiruvananthapuram/food/fish_curry_1.jpg',
            download_url: '',
            caption: 'Traditional Kerala Fish Curry',
            credit: 'Kerala Tourism',
            alt_text: 'Kerala fish curry with rice',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Seafood Restaurants',
            type: 'places_search',
            query: 'Kerala fish curry restaurants Thiruvananthapuram'
          }
        },
        opening_hours: '11:00 AM - 3:00 PM, 7:00 PM - 10:00 PM',
        entry_fee: 'INR 300-600 per person',
        best_time: 'Lunch or dinner',
        duration: '1 hour',
        accessibility_info: 'Restaurant dependent',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    customs: [
      {
        id: 'kathakali_performance',
        place_id: 'thiruvananthapuram_kerala',
        state_id: 'kerala',
        category: 'customs',
        name: 'Kathakali Performance',
        description: 'Classical dance-drama form unique to Kerala, known for elaborate costumes and makeup',
        details: 'Kathakali is a classical Indian dance-drama that originated in Kerala. It is known for its elaborate costumes, colorful makeup, and expressive gestures. The performances typically depict stories from Hindu epics and are accompanied by traditional music. Kathakali is considered one of the most sophisticated art forms in India.',
        coordinates: { lat: 8.5241, lng: 76.9366 },
        images: [
          {
            storage_path: 'kerala/places/thiruvananthapuram/customs/kathakali_1.jpg',
            download_url: '',
            caption: 'Kathakali Performance',
            credit: 'Kerala Tourism',
            alt_text: 'Kathakali dancer in traditional costume',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Cultural Shows',
            type: 'modal',
            content: 'Book traditional Kathakali performances'
          }
        },
        opening_hours: 'Evening shows 6:00 PM - 8:00 PM',
        entry_fee: 'INR 200-500 per person',
        best_time: 'Evening performances',
        duration: '1-2 hours',
        accessibility_info: 'Theater dependent',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'traditional_ayurveda',
        place_id: 'thiruvananthapuram_kerala',
        state_id: 'kerala',
        category: 'customs',
        name: 'Traditional Ayurveda',
        description: 'Ancient system of medicine and wellness practices native to Kerala',
        details: 'Ayurveda is an ancient system of medicine that originated in India and is particularly popular in Kerala. It focuses on holistic healing using natural herbs, oils, and therapeutic treatments. Kerala is known for its authentic Ayurvedic treatments and wellness centers that offer traditional therapies for various health conditions.',
        coordinates: { lat: 8.5241, lng: 76.9366 },
        images: [
          {
            storage_path: 'kerala/places/thiruvananthapuram/customs/ayurveda_1.jpg',
            download_url: '',
            caption: 'Traditional Ayurvedic Treatment',
            credit: 'Kerala Tourism',
            alt_text: 'Traditional Ayurvedic therapy session',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Ayurvedic Centers',
            type: 'modal',
            content: 'Find authentic Ayurvedic treatment centers'
          }
        },
        opening_hours: '8:00 AM - 6:00 PM',
        entry_fee: 'Treatment fees vary',
        best_time: 'Morning for treatments',
        duration: '1-3 hours',
        accessibility_info: 'Center dependent',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    festivals: [
      {
        id: 'onam_festival',
        place_id: 'thiruvananthapuram_kerala',
        state_id: 'kerala',
        category: 'festivals',
        name: 'Onam Festival',
        description: 'Harvest festival celebrating the homecoming of King Mahabali',
        details: 'Onam is the most important festival in Kerala, celebrated during the Malayalam month of Chingam (August-September). It marks the homecoming of the legendary King Mahabali and is celebrated with great enthusiasm. The festival includes traditional dances, boat races, and the famous Onam Sadya feast.',
        coordinates: { lat: 8.5241, lng: 76.9366 },
        images: [
          {
            storage_path: 'kerala/places/thiruvananthapuram/festivals/onam_1.jpg',
            download_url: '',
            caption: 'Onam Festival Celebrations',
            credit: 'Kerala Tourism',
            alt_text: 'Onam festival with traditional decorations',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Festival Info',
            type: 'modal',
            content: 'Get detailed information about Onam Festival'
          }
        },
        opening_hours: 'All day during festival',
        entry_fee: 'Free entry',
        best_time: 'Morning celebrations',
        duration: '10 days',
        accessibility_info: 'Public celebration',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'thrissur_pooram',
        place_id: 'thiruvananthapuram_kerala',
        state_id: 'kerala',
        category: 'festivals',
        name: 'Thrissur Pooram',
        description: 'Spectacular temple festival featuring elephant processions and fireworks',
        details: 'Thrissur Pooram is a famous temple festival held in Thrissur, known for its grand elephant processions and spectacular fireworks. The festival brings together various temples and is celebrated with great pomp and show. It is considered one of the most spectacular festivals in Kerala.',
        coordinates: { lat: 8.5241, lng: 76.9366 },
        images: [
          {
            storage_path: 'kerala/places/thiruvananthapuram/festivals/thrissur_pooram_1.jpg',
            download_url: '',
            caption: 'Thrissur Pooram Festival',
            credit: 'Kerala Tourism',
            alt_text: 'Thrissur Pooram with elephant procession',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Festival Schedule',
            type: 'modal',
            content: 'View Thrissur Pooram festival schedule'
          }
        },
        opening_hours: 'All day during festival',
        entry_fee: 'Free entry',
        best_time: 'Evening processions',
        duration: '1 day',
        accessibility_info: 'Public celebration',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    history: [
      {
        id: 'travancore_kingdom',
        place_id: 'thiruvananthapuram_kerala',
        state_id: 'kerala',
        category: 'history',
        name: 'Travancore Kingdom',
        description: 'Historic kingdom that ruled over southern Kerala for centuries',
        details: 'The Travancore Kingdom was a powerful kingdom that ruled over southern Kerala from the 18th century until India\'s independence. The kingdom was known for its progressive policies, including the abolition of slavery and the introduction of free education. Thiruvananthapuram served as the capital of this kingdom.',
        coordinates: { lat: 8.5241, lng: 76.9366 },
        images: [
          {
            storage_path: 'kerala/places/thiruvananthapuram/history/travancore_1.jpg',
            download_url: '',
            caption: 'Travancore Kingdom Heritage',
            credit: 'Kerala Tourism',
            alt_text: 'Travancore kingdom historical monuments',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Historical Tour',
            type: 'modal',
            content: 'Join our guided historical tour of Travancore'
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
        id: 'colonial_heritage',
        place_id: 'thiruvananthapuram_kerala',
        state_id: 'kerala',
        category: 'history',
        name: 'Colonial Heritage',
        description: 'British colonial influence on Kerala\'s architecture and culture',
        details: 'Kerala has a rich colonial heritage, with British, Dutch, and Portuguese influences visible in its architecture and culture. Thiruvananthapuram has several colonial-era buildings, including the Napier Museum and various government buildings. The colonial period brought significant changes to Kerala\'s social and cultural landscape.',
        coordinates: { lat: 8.5241, lng: 76.9366 },
        images: [
          {
            storage_path: 'kerala/places/thiruvananthapuram/history/colonial_1.jpg',
            download_url: '',
            caption: 'Colonial Architecture',
            credit: 'Kerala Tourism',
            alt_text: 'Colonial era buildings in Thiruvananthapuram',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Heritage Walk',
            type: 'modal',
            content: 'Explore colonial heritage through guided walks'
          }
        },
        opening_hours: '9:00 AM - 5:00 PM',
        entry_fee: 'INR 100 (adults), INR 50 (children)',
        best_time: 'Morning for better visibility',
        duration: '1-2 hours',
        accessibility_info: 'Heritage walk dependent',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]
  } as PlaceTabs
};

// Kochi - Queen of Arabian Sea
export const kochiData: KarnatakaPOI = {
  id: 'kochi_kerala',
  name: 'Kochi',
  category: 'place',
  description: 'Historic port city known for its Chinese fishing nets, colonial architecture, and spice trade heritage',
  coordinates: { lat: 9.9312, lng: 76.2673 },
  banner_image: {
    storage_path: 'kerala/places/kochi/banner.jpg',
    download_url: '',
    caption: 'Kochi Chinese Fishing Nets',
    credit: 'Kerala Tourism',
    alt_text: 'Kochi with Chinese fishing nets',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: {
    monuments: [
      {
        id: 'fort_kochi',
        place_id: 'kochi_kerala',
        state_id: 'kerala',
        category: 'monuments',
        name: 'Fort Kochi',
        description: 'Historic area with colonial architecture and Chinese fishing nets',
        details: 'Fort Kochi is a historic area known for its colonial architecture, Chinese fishing nets, and rich cultural heritage. The area was a major trading port and has influences from Portuguese, Dutch, and British colonial periods. It is home to several historic churches, synagogues, and colonial buildings.',
        coordinates: { lat: 9.9685, lng: 76.2450 },
        images: [
          {
            storage_path: 'kerala/places/kochi/monuments/fort_kochi_1.jpg',
            download_url: '',
            caption: 'Fort Kochi Heritage',
            credit: 'Kerala Tourism',
            alt_text: 'Fort Kochi colonial architecture',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Heritage Tour',
            type: 'modal',
            content: 'Join our guided heritage tour of Fort Kochi'
          }
        },
        opening_hours: 'All day',
        entry_fee: 'Free entry',
        best_time: 'Morning or evening',
        duration: '2-3 hours',
        accessibility_info: 'Walking tour dependent',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'mattancherry_palace',
        place_id: 'kochi_kerala',
        state_id: 'kerala',
        category: 'monuments',
        name: 'Mattancherry Palace',
        description: 'Historic palace built by Portuguese, known for its Kerala murals',
        details: 'Mattancherry Palace, also known as the Dutch Palace, was built by the Portuguese in 1555 and later renovated by the Dutch. The palace is famous for its beautiful Kerala murals depicting scenes from the Ramayana and Mahabharata. It showcases the traditional Kerala architectural style and royal lifestyle.',
        coordinates: { lat: 9.9581, lng: 76.2589 },
        images: [
          {
            storage_path: 'kerala/places/kochi/monuments/mattancherry_1.jpg',
            download_url: '',
            caption: 'Mattancherry Palace',
            credit: 'Kerala Tourism',
            alt_text: 'Mattancherry Palace with murals',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Buy Tickets',
            type: 'external_link',
            url: 'https://keralamuseum.gov.in/mattancherry-tickets'
          }
        },
        opening_hours: '10:00 AM - 5:00 PM (Closed Fridays)',
        entry_fee: 'INR 5 (adults), INR 2 (children)',
        best_time: 'Morning hours',
        duration: '1-2 hours',
        accessibility_info: 'Wheelchair accessible',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    food: [
      {
        id: 'kochi_seafood',
        place_id: 'kochi_kerala',
        state_id: 'kerala',
        category: 'food',
        name: 'Kochi Seafood',
        description: 'Fresh seafood dishes prepared with traditional Kerala spices',
        details: 'Kochi is famous for its fresh seafood, including prawns, crabs, and various fish varieties. The seafood is prepared using traditional Kerala spices and coconut-based gravies. Popular dishes include Kerala prawn curry, fish moilee, and crab masala. The city\'s coastal location ensures the freshest catch.',
        coordinates: { lat: 9.9312, lng: 76.2673 },
        images: [
          {
            storage_path: 'kerala/places/kochi/food/seafood_1.jpg',
            download_url: '',
            caption: 'Kochi Seafood Delicacies',
            credit: 'Kerala Tourism',
            alt_text: 'Traditional Kochi seafood dishes',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Seafood Restaurants',
            type: 'places_search',
            query: 'Fresh seafood restaurants Kochi'
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
        id: 'kochi_spice_trade',
        place_id: 'kochi_kerala',
        state_id: 'kerala',
        category: 'food',
        name: 'Spice Trade Heritage',
        description: 'Traditional spice markets and authentic spice-based cuisine',
        details: 'Kochi has a rich history as a major spice trading center. The city\'s cuisine reflects this heritage with extensive use of spices like cardamom, pepper, cinnamon, and cloves. Traditional spice markets offer authentic spices, and local restaurants serve dishes that showcase the region\'s spice heritage.',
        coordinates: { lat: 9.9312, lng: 76.2673 },
        images: [
          {
            storage_path: 'kerala/places/kochi/food/spices_1.jpg',
            download_url: '',
            caption: 'Kochi Spice Market',
            credit: 'Kerala Tourism',
            alt_text: 'Traditional spice market in Kochi',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Spice Markets',
            type: 'places_search',
            query: 'Traditional spice markets Kochi'
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
        id: 'jewish_heritage',
        place_id: 'kochi_kerala',
        state_id: 'kerala',
        category: 'customs',
        name: 'Jewish Heritage',
        description: 'Rich Jewish heritage and traditions preserved in Kochi',
        details: 'Kochi has a rich Jewish heritage, with the Paradesi Synagogue being one of the oldest synagogues in India. The Jewish community has contributed significantly to the city\'s culture and economy. The area around Jew Town showcases this heritage with traditional Jewish architecture and artifacts.',
        coordinates: { lat: 9.9312, lng: 76.2673 },
        images: [
          {
            storage_path: 'kerala/places/kochi/customs/jewish_1.jpg',
            download_url: '',
            caption: 'Jewish Heritage in Kochi',
            credit: 'Kerala Tourism',
            alt_text: 'Paradesi Synagogue in Kochi',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Heritage Tour',
            type: 'modal',
            content: 'Explore Jewish heritage through guided tours'
          }
        },
        opening_hours: '10:00 AM - 5:00 PM',
        entry_fee: 'INR 10 (adults), INR 5 (children)',
        best_time: 'Morning hours',
        duration: '1-2 hours',
        accessibility_info: 'Heritage tour dependent',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'traditional_arts',
        place_id: 'kochi_kerala',
        state_id: 'kerala',
        category: 'customs',
        name: 'Traditional Arts',
        description: 'Traditional Kerala art forms including Kathakali, Mohiniyattam, and Theyyam',
        details: 'Kochi is a center for traditional Kerala art forms, including Kathakali, Mohiniyattam, and Theyyam. The city has several cultural centers and theaters where these art forms are performed regularly. These traditional arts reflect the rich cultural heritage of Kerala and are an integral part of the state\'s identity.',
        coordinates: { lat: 9.9312, lng: 76.2673 },
        images: [
          {
            storage_path: 'kerala/places/kochi/customs/arts_1.jpg',
            download_url: '',
            caption: 'Traditional Kerala Arts',
            credit: 'Kerala Tourism',
            alt_text: 'Traditional Kerala art performance',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Cultural Shows',
            type: 'modal',
            content: 'Book traditional art performances'
          }
        },
        opening_hours: 'Evening shows 6:00 PM - 8:00 PM',
        entry_fee: 'INR 200-500 per person',
        best_time: 'Evening performances',
        duration: '1-2 hours',
        accessibility_info: 'Theater dependent',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    festivals: [
      {
        id: 'kochi_muziris_biennale',
        place_id: 'kochi_kerala',
        state_id: 'kerala',
        category: 'festivals',
        name: 'Kochi-Muziris Biennale',
        description: 'International contemporary art exhibition held every two years',
        details: 'The Kochi-Muziris Biennale is an international contemporary art exhibition held every two years in Kochi. It showcases works by artists from around the world and has become a major cultural event. The biennale attracts art enthusiasts and tourists from across the globe.',
        coordinates: { lat: 9.9312, lng: 76.2673 },
        images: [
          {
            storage_path: 'kerala/places/kochi/festivals/biennale_1.jpg',
            download_url: '',
            caption: 'Kochi-Muziris Biennale',
            credit: 'Kerala Tourism',
            alt_text: 'Contemporary art exhibition in Kochi',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Biennale Info',
            type: 'modal',
            content: 'Get information about Kochi-Muziris Biennale'
          }
        },
        opening_hours: '10:00 AM - 6:00 PM',
        entry_fee: 'INR 100 (adults), INR 50 (children)',
        best_time: 'Morning hours',
        duration: '3 months',
        accessibility_info: 'Exhibition dependent',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'cochin_carnival',
        place_id: 'kochi_kerala',
        state_id: 'kerala',
        category: 'festivals',
        name: 'Cochin Carnival',
        description: 'Annual carnival celebrating the New Year with cultural programs',
        details: 'The Cochin Carnival is an annual event held in December-January to celebrate the New Year. It features cultural programs, parades, and various entertainment activities. The carnival brings together people from different communities and showcases the multicultural heritage of Kochi.',
        coordinates: { lat: 9.9312, lng: 76.2673 },
        images: [
          {
            storage_path: 'kerala/places/kochi/festivals/carnival_1.jpg',
            download_url: '',
            caption: 'Cochin Carnival',
            credit: 'Kerala Tourism',
            alt_text: 'Cochin Carnival celebrations',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Carnival Schedule',
            type: 'modal',
            content: 'View Cochin Carnival event schedule'
          }
        },
        opening_hours: 'All day during carnival',
        entry_fee: 'Free entry',
        best_time: 'Evening celebrations',
        duration: '10 days',
        accessibility_info: 'Public celebration',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    history: [
      {
        id: 'port_city_heritage',
        place_id: 'kochi_kerala',
        state_id: 'kerala',
        category: 'history',
        name: 'Port City Heritage',
        description: 'Rich maritime history and trading heritage of Kochi',
        details: 'Kochi has a rich maritime history as a major trading port. The city was a center of spice trade and attracted traders from around the world. The port city heritage is evident in its architecture, culture, and traditions. The Chinese fishing nets are a symbol of this maritime heritage.',
        coordinates: { lat: 9.9312, lng: 76.2673 },
        images: [
          {
            storage_path: 'kerala/places/kochi/history/port_1.jpg',
            download_url: '',
            caption: 'Kochi Port Heritage',
            credit: 'Kerala Tourism',
            alt_text: 'Historic port area in Kochi',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Maritime Tour',
            type: 'modal',
            content: 'Explore Kochi\'s maritime heritage'
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
        id: 'colonial_influence',
        place_id: 'kochi_kerala',
        state_id: 'kerala',
        category: 'history',
        name: 'Colonial Influence',
        description: 'Portuguese, Dutch, and British colonial influence on Kochi',
        details: 'Kochi has been influenced by various colonial powers, including Portuguese, Dutch, and British. Each colonial period left its mark on the city\'s architecture, culture, and traditions. The colonial influence is visible in the city\'s churches, forts, and administrative buildings.',
        coordinates: { lat: 9.9312, lng: 76.2673 },
        images: [
          {
            storage_path: 'kerala/places/kochi/history/colonial_1.jpg',
            download_url: '',
            caption: 'Colonial Architecture',
            credit: 'Kerala Tourism',
            alt_text: 'Colonial era buildings in Kochi',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Colonial Tour',
            type: 'modal',
            content: 'Explore colonial heritage through guided tours'
          }
        },
        opening_hours: '9:00 AM - 5:00 PM',
        entry_fee: 'INR 100 (adults), INR 50 (children)',
        best_time: 'Morning for better visibility',
        duration: '1-2 hours',
        accessibility_info: 'Tour dependent',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]
  } as PlaceTabs
};

// Kozhikode - City of Spices
export const kozhikodeData: KarnatakaPOI = {
  id: 'kozhikode_kerala',
  name: 'Kozhikode',
  category: 'place',
  description: 'Historic city known for its spice trade, beaches, and cultural heritage',
  coordinates: { lat: 11.2588, lng: 75.7804 },
  banner_image: {
    storage_path: 'kerala/places/kozhikode/banner.jpg',
    download_url: '',
    caption: 'Kozhikode Beach',
    credit: 'Kerala Tourism',
    alt_text: 'Kozhikode beach with sunset',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: {
    monuments: [
      {
        id: 'kozhikode_beach',
        place_id: 'kozhikode_kerala',
        state_id: 'kerala',
        category: 'monuments',
        name: 'Kozhikode Beach',
        description: 'Famous beach known for its sunset views and lighthouse',
        details: 'Kozhikode Beach is a popular destination known for its beautiful sunset views and historic lighthouse. The beach offers a peaceful atmosphere and is perfect for evening walks. The lighthouse provides panoramic views of the Arabian Sea and the city.',
        coordinates: { lat: 11.2588, lng: 75.7804 },
        images: [
          {
            storage_path: 'kerala/places/kozhikode/monuments/beach_1.jpg',
            download_url: '',
            caption: 'Kozhikode Beach',
            credit: 'Kerala Tourism',
            alt_text: 'Kozhikode beach with lighthouse',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Beach Activities',
            type: 'modal',
            content: 'Enjoy beach activities and sunset views'
          }
        },
        opening_hours: 'All day',
        entry_fee: 'Free entry',
        best_time: 'Evening for sunset',
        duration: '1-2 hours',
        accessibility_info: 'Beach dependent',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'mananchira_square',
        place_id: 'kozhikode_kerala',
        state_id: 'kerala',
        category: 'monuments',
        name: 'Mananchira Square',
        description: 'Historic square with traditional Kerala architecture',
        details: 'Mananchira Square is a historic square in the heart of Kozhikode, surrounded by traditional Kerala architecture. The square features a beautiful pond and is a popular gathering place for locals and tourists. It represents the city\'s cultural heritage and architectural beauty.',
        coordinates: { lat: 11.2588, lng: 75.7804 },
        images: [
          {
            storage_path: 'kerala/places/kozhikode/monuments/mananchira_1.jpg',
            download_url: '',
            caption: 'Mananchira Square',
            credit: 'Kerala Tourism',
            alt_text: 'Mananchira Square with traditional architecture',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Visit Square',
            type: 'modal',
            content: 'Explore Mananchira Square and its heritage'
          }
        },
        opening_hours: 'All day',
        entry_fee: 'Free entry',
        best_time: 'Morning or evening',
        duration: '1 hour',
        accessibility_info: 'Public square',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    food: [
      {
        id: 'kozhikode_biryani',
        place_id: 'kozhikode_kerala',
        state_id: 'kerala',
        category: 'food',
        name: 'Kozhikode Biryani',
        description: 'Famous biryani dish unique to Kozhikode, known for its distinct flavor',
        details: 'Kozhikode Biryani is a famous dish unique to the city, known for its distinct flavor and preparation method. It is made with basmati rice, meat, and a blend of spices that give it a unique taste. The biryani is often served with raita and is a must-try for food enthusiasts.',
        coordinates: { lat: 11.2588, lng: 75.7804 },
        images: [
          {
            storage_path: 'kerala/places/kozhikode/food/biryani_1.jpg',
            download_url: '',
            caption: 'Kozhikode Biryani',
            credit: 'Kerala Tourism',
            alt_text: 'Traditional Kozhikode biryani',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Biryani Restaurants',
            type: 'places_search',
            query: 'Kozhikode biryani restaurants'
          }
        },
        opening_hours: '11:00 AM - 3:00 PM, 7:00 PM - 10:00 PM',
        entry_fee: 'INR 200-400 per person',
        best_time: 'Lunch or dinner',
        duration: '1 hour',
        accessibility_info: 'Restaurant dependent',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'kozhikode_halwa',
        place_id: 'kozhikode_kerala',
        state_id: 'kerala',
        category: 'food',
        name: 'Kozhikode Halwa',
        description: 'Traditional sweet made with wheat, sugar, and ghee',
        details: 'Kozhikode Halwa is a traditional sweet made with wheat, sugar, and ghee. It is known for its rich taste and texture. The halwa is often flavored with cardamom and is a popular dessert in the region. It is available in various flavors and is a must-try for sweet lovers.',
        coordinates: { lat: 11.2588, lng: 75.7804 },
        images: [
          {
            storage_path: 'kerala/places/kozhikode/food/halwa_1.jpg',
            download_url: '',
            caption: 'Kozhikode Halwa',
            credit: 'Kerala Tourism',
            alt_text: 'Traditional Kozhikode halwa',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Sweet Shops',
            type: 'places_search',
            query: 'Kozhikode halwa sweet shops'
          }
        },
        opening_hours: '9:00 AM - 9:00 PM',
        entry_fee: 'INR 50-200 per piece',
        best_time: 'Morning for fresh preparation',
        duration: '30 minutes',
        accessibility_info: 'Shop dependent',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    customs: [
      {
        id: 'spice_trade_heritage',
        place_id: 'kozhikode_kerala',
        state_id: 'kerala',
        category: 'customs',
        name: 'Spice Trade Heritage',
        description: 'Rich heritage of spice trading and traditional practices',
        details: 'Kozhikode has a rich heritage of spice trading, with the city being a major center for spice commerce. The traditional spice markets and trading practices reflect this heritage. The city\'s culture and traditions are deeply influenced by its spice trade history.',
        coordinates: { lat: 11.2588, lng: 75.7804 },
        images: [
          {
            storage_path: 'kerala/places/kozhikode/customs/spice_trade_1.jpg',
            download_url: '',
            caption: 'Spice Trade Heritage',
            credit: 'Kerala Tourism',
            alt_text: 'Traditional spice trading in Kozhikode',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Spice Markets',
            type: 'places_search',
            query: 'Traditional spice markets Kozhikode'
          }
        },
        opening_hours: '9:00 AM - 6:00 PM',
        entry_fee: 'Free entry',
        best_time: 'Morning for fresh spices',
        duration: '1 hour',
        accessibility_info: 'Market dependent',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'traditional_crafts',
        place_id: 'kozhikode_kerala',
        state_id: 'kerala',
        category: 'customs',
        name: 'Traditional Crafts',
        description: 'Traditional handicrafts and art forms unique to Kozhikode',
        details: 'Kozhikode is known for its traditional handicrafts, including wood carving, metal work, and textile weaving. These crafts reflect the city\'s cultural heritage and artistic traditions. Local artisans create beautiful works using traditional techniques passed down through generations.',
        coordinates: { lat: 11.2588, lng: 75.7804 },
        images: [
          {
            storage_path: 'kerala/places/kozhikode/customs/crafts_1.jpg',
            download_url: '',
            caption: 'Traditional Crafts',
            credit: 'Kerala Tourism',
            alt_text: 'Traditional handicrafts in Kozhikode',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Craft Workshops',
            type: 'modal',
            content: 'Learn traditional crafts from local artisans'
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
        id: 'kozhikode_festival',
        place_id: 'kozhikode_kerala',
        state_id: 'kerala',
        category: 'festivals',
        name: 'Kozhikode Festival',
        description: 'Annual cultural festival showcasing local arts and traditions',
        details: 'The Kozhikode Festival is an annual cultural event that showcases local arts, traditions, and heritage. The festival features traditional music, dance, and cultural programs. It brings together artists and performers from across the region to celebrate the city\'s cultural richness.',
        coordinates: { lat: 11.2588, lng: 75.7804 },
        images: [
          {
            storage_path: 'kerala/places/kozhikode/festivals/festival_1.jpg',
            download_url: '',
            caption: 'Kozhikode Festival',
            credit: 'Kerala Tourism',
            alt_text: 'Kozhikode festival celebrations',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Festival Info',
            type: 'modal',
            content: 'Get information about Kozhikode Festival'
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
        id: 'beach_festival',
        place_id: 'kozhikode_kerala',
        state_id: 'kerala',
        category: 'festivals',
        name: 'Beach Festival',
        description: 'Annual beach festival with cultural programs and activities',
        details: 'The Beach Festival is an annual event held at Kozhikode Beach, featuring cultural programs, beach activities, and entertainment. The festival celebrates the city\'s coastal heritage and provides a platform for local artists and performers to showcase their talents.',
        coordinates: { lat: 11.2588, lng: 75.7804 },
        images: [
          {
            storage_path: 'kerala/places/kozhikode/festivals/beach_festival_1.jpg',
            download_url: '',
            caption: 'Beach Festival',
            credit: 'Kerala Tourism',
            alt_text: 'Beach festival celebrations in Kozhikode',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Festival Schedule',
            type: 'modal',
            content: 'View Beach Festival event schedule'
          }
        },
        opening_hours: 'All day during festival',
        entry_fee: 'Free entry',
        best_time: 'Evening celebrations',
        duration: '3 days',
        accessibility_info: 'Beach dependent',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    history: [
      {
        id: 'zamorin_heritage',
        place_id: 'kozhikode_kerala',
        state_id: 'kerala',
        category: 'history',
        name: 'Zamorin Heritage',
        description: 'Historic heritage of the Zamorin rulers who ruled Kozhikode',
        details: 'Kozhikode was ruled by the Zamorin dynasty for several centuries. The Zamorin rulers were known for their patronage of arts, culture, and trade. The city\'s heritage reflects this royal legacy, with several historic monuments and cultural traditions dating back to the Zamorin period.',
        coordinates: { lat: 11.2588, lng: 75.7804 },
        images: [
          {
            storage_path: 'kerala/places/kozhikode/history/zamorin_1.jpg',
            download_url: '',
            caption: 'Zamorin Heritage',
            credit: 'Kerala Tourism',
            alt_text: 'Zamorin heritage monuments in Kozhikode',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Heritage Tour',
            type: 'modal',
            content: 'Explore Zamorin heritage through guided tours'
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
        id: 'colonial_period',
        place_id: 'kozhikode_kerala',
        state_id: 'kerala',
        category: 'history',
        name: 'Colonial Period',
        description: 'British colonial influence on Kozhikode\'s development',
        details: 'Kozhikode came under British rule in the 18th century, and the colonial period brought significant changes to the city. The British influence is visible in the city\'s architecture, administration, and culture. Several colonial-era buildings and institutions still exist in the city.',
        coordinates: { lat: 11.2588, lng: 75.7804 },
        images: [
          {
            storage_path: 'kerala/places/kozhikode/history/colonial_1.jpg',
            download_url: '',
            caption: 'Colonial Architecture',
            credit: 'Kerala Tourism',
            alt_text: 'Colonial era buildings in Kozhikode',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Colonial Tour',
            type: 'modal',
            content: 'Explore colonial heritage through guided tours'
          }
        },
        opening_hours: '9:00 AM - 5:00 PM',
        entry_fee: 'INR 100 (adults), INR 50 (children)',
        best_time: 'Morning for better visibility',
        duration: '1-2 hours',
        accessibility_info: 'Tour dependent',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]
  } as PlaceTabs
};

export default thiruvananthapuramData;

