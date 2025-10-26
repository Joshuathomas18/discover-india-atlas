// Rajasthan Places Data
// Comprehensive data for major cities in Rajasthan with full cultural information

import { KarnatakaPOI, PlaceTabs, ImageReference } from '../../types/database';

// Jaipur - Pink City and Capital
export const jaipurData: KarnatakaPOI = {
  id: 'jaipur_rajasthan',
  name: 'Jaipur',
  category: 'place',
  description: 'The Pink City, capital of Rajasthan, known for its magnificent palaces, forts, and rich cultural heritage',
  coordinates: { lat: 26.9124, lng: 75.7873 },
  banner_image: {
    storage_path: 'rajasthan/places/jaipur/banner.jpg',
    download_url: '',
    caption: 'Jaipur City Palace',
    credit: 'Rajasthan Tourism',
    alt_text: 'Jaipur City Palace with pink architecture',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: {
    monuments: [
      {
        id: 'city_palace_jaipur',
        place_id: 'jaipur_rajasthan',
        state_id: 'rajasthan',
        category: 'monuments',
        name: 'City Palace',
        description: 'Magnificent royal palace complex showcasing Rajput and Mughal architecture',
        details: 'The City Palace in Jaipur is a stunning complex of courtyards, gardens, and buildings that served as the seat of the Maharaja of Jaipur. Built by Maharaja Sawai Jai Singh II, it combines Rajput, Mughal, and European architectural styles. The palace houses museums, royal apartments, and the famous Chandra Mahal.',
        coordinates: { lat: 26.9258, lng: 75.8236 },
        images: [
          {
            storage_path: 'rajasthan/places/jaipur/monuments/city_palace_1.jpg',
            download_url: '',
            caption: 'City Palace Main Courtyard',
            credit: 'Rajasthan Tourism',
            alt_text: 'City Palace courtyard with pink architecture',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Buy Tickets',
            type: 'external_link',
            url: 'https://citypalacejaipur.in/tickets'
          },
          secondary: {
            label: 'Virtual Tour',
            type: 'modal',
            content: 'Explore City Palace through our virtual tour'
          }
        },
        opening_hours: '9:30 AM - 5:00 PM',
        entry_fee: 'INR 200 (adults), INR 100 (children)',
        best_time: 'Morning hours for better lighting',
        duration: '2-3 hours',
        accessibility_info: 'Wheelchair accessible',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'amber_fort_jaipur',
        place_id: 'jaipur_rajasthan',
        state_id: 'rajasthan',
        category: 'monuments',
        name: 'Amber Fort',
        description: 'Majestic hilltop fort with stunning architecture and panoramic views',
        details: 'Amber Fort, also known as Amer Fort, is a magnificent fortress built by Raja Man Singh I. The fort is famous for its artistic Hindu style elements, including large ramparts, gates, and cobbled paths. The fort overlooks Maota Lake and features the famous Sheesh Mahal (Mirror Palace) with thousands of mirror tiles.',
        coordinates: { lat: 26.9859, lng: 75.8513 },
        images: [
          {
            storage_path: 'rajasthan/places/jaipur/monuments/amber_fort_1.jpg',
            download_url: '',
            caption: 'Amber Fort Exterior',
            credit: 'Rajasthan Tourism',
            alt_text: 'Amber Fort with elephant ride entrance',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Elephant Ride',
            type: 'external_link',
            url: 'https://amberfort.org/elephant-rides'
          },
          secondary: {
            label: 'Light Show',
            type: 'modal',
            content: 'Book evening light and sound show'
          }
        },
        opening_hours: '8:00 AM - 6:00 PM',
        entry_fee: 'INR 100 (adults), INR 50 (children)',
        best_time: 'Early morning or evening',
        duration: '2-3 hours',
        accessibility_info: 'Partial wheelchair access',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    food: [
      {
        id: 'dal_baati_churma',
        place_id: 'jaipur_rajasthan',
        state_id: 'rajasthan',
        category: 'food',
        name: 'Dal Baati Churma',
        description: 'Traditional Rajasthani thali with lentil curry, baked bread, and sweet crumble',
        details: 'Dal Baati Churma is the signature dish of Rajasthan. It consists of dal (lentil curry), baati (hard wheat bread rolls), and churma (sweet crumble). The baati is traditionally baked in cow dung cakes, giving it a unique smoky flavor. This hearty meal represents the royal cuisine of Rajasthan.',
        coordinates: { lat: 26.9124, lng: 75.7873 },
        images: [
          {
            storage_path: 'rajasthan/places/jaipur/food/dal_baati_churma_1.jpg',
            download_url: '',
            caption: 'Traditional Dal Baati Churma',
            credit: 'Rajasthan Tourism',
            alt_text: 'Traditional Rajasthani dal baati churma thali',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Find Restaurants',
            type: 'places_search',
            query: 'Traditional Rajasthani restaurants Jaipur'
          },
          secondary: {
            label: 'Recipe Guide',
            type: 'modal',
            content: 'Learn to cook authentic Dal Baati Churma'
          }
        },
        opening_hours: '11:00 AM - 3:00 PM, 7:00 PM - 10:00 PM',
        entry_fee: 'INR 300-600 per person',
        best_time: 'Lunch time for authentic experience',
        duration: '1-2 hours',
        accessibility_info: 'Ground floor restaurants available',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'ghewar_sweets',
        place_id: 'jaipur_rajasthan',
        state_id: 'rajasthan',
        category: 'food',
        name: 'Ghewar',
        description: 'Traditional Rajasthani sweet made during festivals and special occasions',
        details: 'Ghewar is a popular Rajasthani sweet made from flour, ghee, and sugar syrup. It has a honeycomb-like texture and is often topped with rabri (sweetened condensed milk) and dry fruits. This delicacy is especially popular during Teej festival and is available in various flavors including plain, malai, and mawa.',
        coordinates: { lat: 26.9124, lng: 75.7873 },
        images: [
          {
            storage_path: 'rajasthan/places/jaipur/food/ghewar_1.jpg',
            download_url: '',
            caption: 'Traditional Ghewar Sweet',
            credit: 'Rajasthan Tourism',
            alt_text: 'Traditional Rajasthani ghewar sweet',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Sweet Shops',
            type: 'places_search',
            query: 'Ghewar sweet shops Jaipur'
          }
        },
        opening_hours: '9:00 AM - 9:00 PM',
        entry_fee: 'INR 50-200 per piece',
        best_time: 'Morning for fresh preparation',
        duration: '30 minutes',
        accessibility_info: 'Street level access',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    customs: [
      {
        id: 'rajasthani_folk_music',
        place_id: 'jaipur_rajasthan',
        state_id: 'rajasthan',
        category: 'customs',
        name: 'Rajasthani Folk Music',
        description: 'Traditional folk music and dance forms unique to Rajasthan',
        details: 'Rajasthani folk music is characterized by its vibrant rhythms, traditional instruments like dholak, sarangi, and harmonium, and soulful lyrics. Popular forms include Ghoomar dance, Kalbeliya dance, and Bhavai folk theater. These art forms reflect the rich cultural heritage and storytelling traditions of Rajasthan.',
        coordinates: { lat: 26.9124, lng: 75.7873 },
        images: [
          {
            storage_path: 'rajasthan/places/jaipur/customs/folk_music_1.jpg',
            download_url: '',
            caption: 'Rajasthani Folk Music Performance',
            credit: 'Rajasthan Tourism',
            alt_text: 'Traditional Rajasthani folk music and dance',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Cultural Shows',
            type: 'modal',
            content: 'Book traditional folk music and dance shows'
          }
        },
        opening_hours: 'Evening shows 7:00 PM - 9:00 PM',
        entry_fee: 'INR 200-500 per person',
        best_time: 'Evening performances',
        duration: '1-2 hours',
        accessibility_info: 'Theater dependent',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'traditional_crafts',
        place_id: 'jaipur_rajasthan',
        state_id: 'rajasthan',
        category: 'customs',
        name: 'Traditional Crafts',
        description: 'Handicrafts including block printing, pottery, and jewelry making',
        details: 'Jaipur is famous for its traditional handicrafts including blue pottery, block printing, gemstone cutting, and lac bangle making. The city is home to skilled artisans who have preserved these crafts for generations. Visitors can witness live demonstrations and purchase authentic handmade products.',
        coordinates: { lat: 26.9124, lng: 75.7873 },
        images: [
          {
            storage_path: 'rajasthan/places/jaipur/customs/crafts_1.jpg',
            download_url: '',
            caption: 'Traditional Block Printing',
            credit: 'Rajasthan Tourism',
            alt_text: 'Traditional block printing demonstration',
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
        id: 'teej_festival',
        place_id: 'jaipur_rajasthan',
        state_id: 'rajasthan',
        category: 'festivals',
        name: 'Teej Festival',
        description: 'Colorful monsoon festival celebrating the union of Lord Shiva and Goddess Parvati',
        details: 'Teej is one of the most important festivals in Rajasthan, celebrated with great enthusiasm. Women dress in traditional attire, apply henna, and participate in folk dances. The festival marks the arrival of monsoon and is celebrated with processions, cultural programs, and traditional sweets like ghewar.',
        coordinates: { lat: 26.9124, lng: 75.7873 },
        images: [
          {
            storage_path: 'rajasthan/places/jaipur/festivals/teej_1.jpg',
            download_url: '',
            caption: 'Teej Festival Celebrations',
            credit: 'Rajasthan Tourism',
            alt_text: 'Teej festival with women in traditional attire',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Festival Info',
            type: 'modal',
            content: 'Get detailed information about Teej Festival celebrations'
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
        duration: '3 days',
        accessibility_info: 'Public celebration',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'gangaur_festival',
        place_id: 'jaipur_rajasthan',
        state_id: 'rajasthan',
        category: 'festivals',
        name: 'Gangaur Festival',
        description: 'Spring festival dedicated to Goddess Gauri, celebrating marital bliss',
        details: 'Gangaur is a significant festival for married women in Rajasthan, dedicated to Goddess Gauri (Parvati). Women create clay idols of Gauri and Shiva, decorate them, and carry them in processions. The festival celebrates marital happiness and is marked by traditional songs, dances, and rituals.',
        coordinates: { lat: 26.9124, lng: 75.7873 },
        images: [
          {
            storage_path: 'rajasthan/places/jaipur/festivals/gangaur_1.jpg',
            download_url: '',
            caption: 'Gangaur Festival Procession',
            credit: 'Rajasthan Tourism',
            alt_text: 'Gangaur festival procession with decorated idols',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Festival Schedule',
            type: 'modal',
            content: 'View the complete schedule of Gangaur Festival events'
          }
        },
        opening_hours: 'Early morning to late evening',
        entry_fee: 'Free for devotees',
        best_time: 'Morning processions',
        duration: '18 days',
        accessibility_info: 'Public celebration',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    history: [
      {
        id: 'jaipur_founding',
        place_id: 'jaipur_rajasthan',
        state_id: 'rajasthan',
        category: 'history',
        name: 'Founding of Jaipur',
        description: 'The planned city founded by Maharaja Sawai Jai Singh II in 1727',
        details: 'Jaipur was founded in 1727 by Maharaja Sawai Jai Singh II, who was a great astronomer and mathematician. The city was planned according to Vastu Shastra principles and designed by architect Vidyadhar Bhattacharya. It was the first planned city of India and was painted pink in 1876 to welcome the Prince of Wales.',
        coordinates: { lat: 26.9124, lng: 75.7873 },
        images: [
          {
            storage_path: 'rajasthan/places/jaipur/history/founding_1.jpg',
            download_url: '',
            caption: 'Maharaja Sawai Jai Singh II',
            credit: 'Rajasthan Tourism',
            alt_text: 'Portrait of Maharaja Sawai Jai Singh II',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Historical Tour',
            type: 'modal',
            content: 'Join our guided historical tour of Jaipur'
          },
          secondary: {
            label: 'Museum Visit',
            type: 'external_link',
            url: 'https://citypalacejaipur.in/museum'
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
        id: 'rajput_heritage',
        place_id: 'jaipur_rajasthan',
        state_id: 'rajasthan',
        category: 'history',
        name: 'Rajput Heritage',
        description: 'Rich history of Rajput kingdoms and their architectural legacy',
        details: 'Jaipur is deeply rooted in Rajput history and culture. The city showcases the architectural brilliance of Rajput rulers who built magnificent forts, palaces, and temples. The Rajput heritage is evident in the city\'s layout, monuments, and cultural traditions that have been preserved for centuries.',
        coordinates: { lat: 26.9124, lng: 75.7873 },
        images: [
          {
            storage_path: 'rajasthan/places/jaipur/history/rajput_1.jpg',
            download_url: '',
            caption: 'Rajput Architecture',
            credit: 'Rajasthan Tourism',
            alt_text: 'Traditional Rajput architecture in Jaipur',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Heritage Walk',
            type: 'modal',
            content: 'Explore Rajput heritage through guided heritage walks'
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

// Udaipur - City of Lakes
export const udaipurData: KarnatakaPOI = {
  id: 'udaipur_rajasthan',
  name: 'Udaipur',
  category: 'place',
  description: 'The City of Lakes, famous for its beautiful palaces, romantic ambiance, and scenic lakes',
  coordinates: { lat: 24.5854, lng: 73.7125 },
  banner_image: {
    storage_path: 'rajasthan/places/udaipur/banner.jpg',
    download_url: '',
    caption: 'Udaipur Lake Palace',
    credit: 'Rajasthan Tourism',
    alt_text: 'Udaipur Lake Palace on Pichola Lake',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: {
    monuments: [
      {
        id: 'lake_palace_udaipur',
        place_id: 'udaipur_rajasthan',
        state_id: 'rajasthan',
        category: 'monuments',
        name: 'Lake Palace',
        description: 'Floating palace on Pichola Lake, now a luxury hotel',
        details: 'The Lake Palace, also known as Jag Niwas, is a stunning white marble palace built on Jag Niwas Island in Pichola Lake. Built by Maharana Jagat Singh II, it served as a summer palace and is now a luxury hotel. The palace offers breathtaking views of the lake and surrounding hills.',
        coordinates: { lat: 24.5764, lng: 73.6833 },
        images: [
          {
            storage_path: 'rajasthan/places/udaipur/monuments/lake_palace_1.jpg',
            download_url: '',
            caption: 'Lake Palace on Pichola Lake',
            credit: 'Rajasthan Tourism',
            alt_text: 'Lake Palace floating on Pichola Lake',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Hotel Booking',
            type: 'external_link',
            url: 'https://tajhotels.com/lake-palace-udaipur'
          },
          secondary: {
            label: 'Boat Ride',
            type: 'modal',
            content: 'Book boat ride to Lake Palace'
          }
        },
        opening_hours: '24/7 (Hotel)',
        entry_fee: 'Hotel rates vary',
        best_time: 'Evening for sunset views',
        duration: '2-3 hours',
        accessibility_info: 'Hotel dependent',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'city_palace_udaipur',
        place_id: 'udaipur_rajasthan',
        state_id: 'rajasthan',
        category: 'monuments',
        name: 'City Palace',
        description: 'Magnificent palace complex overlooking Pichola Lake',
        details: 'The City Palace of Udaipur is a massive palace complex built by Maharana Udai Singh II. It combines Rajasthani and Mughal architectural styles and houses museums, royal apartments, and beautiful courtyards. The palace offers panoramic views of the city and Pichola Lake.',
        coordinates: { lat: 24.5764, lng: 73.6833 },
        images: [
          {
            storage_path: 'rajasthan/places/udaipur/monuments/city_palace_1.jpg',
            download_url: '',
            caption: 'City Palace Udaipur',
            credit: 'Rajasthan Tourism',
            alt_text: 'City Palace Udaipur with lake view',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Buy Tickets',
            type: 'external_link',
            url: 'https://citypalaceudaipur.in/tickets'
          }
        },
        opening_hours: '9:30 AM - 5:30 PM',
        entry_fee: 'INR 300 (adults), INR 100 (children)',
        best_time: 'Morning hours',
        duration: '2-3 hours',
        accessibility_info: 'Wheelchair accessible',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    food: [
      {
        id: 'laal_maas',
        place_id: 'udaipur_rajasthan',
        state_id: 'rajasthan',
        category: 'food',
        name: 'Laal Maas',
        description: 'Spicy red mutton curry, signature dish of Rajasthan',
        details: 'Laal Maas is a fiery red mutton curry that originated in the royal kitchens of Rajasthan. Made with red chilies, yogurt, and traditional spices, this dish was originally prepared for the Maharajas. The intense red color comes from Mathania chilies, and it\'s served with bajra roti or rice.',
        coordinates: { lat: 24.5854, lng: 73.7125 },
        images: [
          {
            storage_path: 'rajasthan/places/udaipur/food/laal_maas_1.jpg',
            download_url: '',
            caption: 'Traditional Laal Maas',
            credit: 'Rajasthan Tourism',
            alt_text: 'Traditional Rajasthani laal maas curry',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Find Restaurants',
            type: 'places_search',
            query: 'Laal Maas restaurants Udaipur'
          }
        },
        opening_hours: '11:00 AM - 3:00 PM, 7:00 PM - 10:00 PM',
        entry_fee: 'INR 400-800 per person',
        best_time: 'Dinner time',
        duration: '1-2 hours',
        accessibility_info: 'Restaurant dependent',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'ker_sangri',
        place_id: 'udaipur_rajasthan',
        state_id: 'rajasthan',
        category: 'food',
        name: 'Ker Sangri',
        description: 'Traditional Rajasthani vegetable dish made from desert plants',
        details: 'Ker Sangri is a unique Rajasthani dish made from ker (desert beans) and sangri (desert beans). These are traditional desert vegetables that are dried and cooked with spices. This dish represents the ingenuity of Rajasthani cuisine in using local desert ingredients.',
        coordinates: { lat: 24.5854, lng: 73.7125 },
        images: [
          {
            storage_path: 'rajasthan/places/udaipur/food/ker_sangri_1.jpg',
            download_url: '',
            caption: 'Traditional Ker Sangri',
            credit: 'Rajasthan Tourism',
            alt_text: 'Traditional Rajasthani ker sangri dish',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Traditional Restaurants',
            type: 'places_search',
            query: 'Traditional Rajasthani restaurants Udaipur'
          }
        },
        opening_hours: '11:00 AM - 3:00 PM, 7:00 PM - 10:00 PM',
        entry_fee: 'INR 200-400 per person',
        best_time: 'Lunch time',
        duration: '1 hour',
        accessibility_info: 'Restaurant dependent',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    customs: [
      {
        id: 'mewar_culture',
        place_id: 'udaipur_rajasthan',
        state_id: 'rajasthan',
        category: 'customs',
        name: 'Mewar Culture',
        description: 'Rich cultural traditions of the Mewar region',
        details: 'Udaipur is the heart of Mewar culture, known for its royal traditions, folk arts, and cultural heritage. The Mewar region has preserved its unique customs, including traditional music, dance forms like Ghoomar, and royal ceremonies. The culture reflects the valor and chivalry of the Rajput rulers.',
        coordinates: { lat: 24.5854, lng: 73.7125 },
        images: [
          {
            storage_path: 'rajasthan/places/udaipur/customs/mewar_culture_1.jpg',
            download_url: '',
            caption: 'Mewar Cultural Performance',
            credit: 'Rajasthan Tourism',
            alt_text: 'Traditional Mewar cultural performance',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Cultural Shows',
            type: 'modal',
            content: 'Book traditional Mewar cultural shows'
          }
        },
        opening_hours: 'Evening shows 7:00 PM - 9:00 PM',
        entry_fee: 'INR 300-600 per person',
        best_time: 'Evening performances',
        duration: '1-2 hours',
        accessibility_info: 'Theater dependent',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'traditional_jewelry',
        place_id: 'udaipur_rajasthan',
        state_id: 'rajasthan',
        category: 'customs',
        name: 'Traditional Jewelry',
        description: 'Exquisite jewelry making traditions of Udaipur',
        details: 'Udaipur is famous for its traditional jewelry making, including Kundan, Meenakari, and Thewa work. These intricate techniques have been passed down through generations of artisans. The jewelry reflects the royal taste and is characterized by elaborate designs and precious stones.',
        coordinates: { lat: 24.5854, lng: 73.7125 },
        images: [
          {
            storage_path: 'rajasthan/places/udaipur/customs/jewelry_1.jpg',
            download_url: '',
            caption: 'Traditional Rajasthani Jewelry',
            credit: 'Rajasthan Tourism',
            alt_text: 'Traditional Rajasthani jewelry making',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Jewelry Workshops',
            type: 'modal',
            content: 'Learn traditional jewelry making techniques'
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
        id: 'mewar_festival',
        place_id: 'udaipur_rajasthan',
        state_id: 'rajasthan',
        category: 'festivals',
        name: 'Mewar Festival',
        description: 'Spring festival celebrating the arrival of spring and harvest season',
        details: 'The Mewar Festival is celebrated with great enthusiasm in Udaipur, marking the arrival of spring. The festival features traditional music, dance performances, cultural programs, and a grand procession. It showcases the rich cultural heritage of the Mewar region.',
        coordinates: { lat: 24.5854, lng: 73.7125 },
        images: [
          {
            storage_path: 'rajasthan/places/udaipur/festivals/mewar_1.jpg',
            download_url: '',
            caption: 'Mewar Festival Celebrations',
            credit: 'Rajasthan Tourism',
            alt_text: 'Mewar festival with traditional performances',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Festival Info',
            type: 'modal',
            content: 'Get detailed information about Mewar Festival'
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
        id: 'shilpgram_festival',
        place_id: 'udaipur_rajasthan',
        state_id: 'rajasthan',
        category: 'festivals',
        name: 'Shilpgram Festival',
        description: 'Annual crafts fair showcasing traditional arts and crafts',
        details: 'The Shilpgram Festival is an annual crafts fair that brings together artisans from across Rajasthan and other states. It showcases traditional handicrafts, folk performances, and cultural activities. The festival provides a platform for artisans to display and sell their products.',
        coordinates: { lat: 24.5854, lng: 73.7125 },
        images: [
          {
            storage_path: 'rajasthan/places/udaipur/festivals/shilpgram_1.jpg',
            download_url: '',
            caption: 'Shilpgram Crafts Festival',
            credit: 'Rajasthan Tourism',
            alt_text: 'Shilpgram crafts festival with artisans',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Crafts Fair',
            type: 'modal',
            content: 'Visit the Shilpgram crafts fair'
          }
        },
        opening_hours: '10:00 AM - 8:00 PM',
        entry_fee: 'INR 50 (adults), INR 25 (children)',
        best_time: 'Morning for fresh crafts',
        duration: '10 days',
        accessibility_info: 'Fairground dependent',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    history: [
      {
        id: 'mewar_dynasty',
        place_id: 'udaipur_rajasthan',
        state_id: 'rajasthan',
        category: 'history',
        name: 'Mewar Dynasty',
        description: 'Rich history of the Mewar dynasty and their rule',
        details: 'The Mewar dynasty, founded by Bappa Rawal, ruled over the region for centuries. Known for their valor and resistance against foreign invasions, the Mewar rulers built magnificent palaces and forts. The dynasty is famous for rulers like Rana Pratap, who fought against Mughal emperor Akbar.',
        coordinates: { lat: 24.5854, lng: 73.7125 },
        images: [
          {
            storage_path: 'rajasthan/places/udaipur/history/mewar_1.jpg',
            download_url: '',
            caption: 'Mewar Dynasty Heritage',
            credit: 'Rajasthan Tourism',
            alt_text: 'Mewar dynasty historical monuments',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Historical Tour',
            type: 'modal',
            content: 'Join our guided historical tour of Mewar'
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
        id: 'lake_city_development',
        place_id: 'udaipur_rajasthan',
        state_id: 'rajasthan',
        category: 'history',
        name: 'Lake City Development',
        description: 'Development of Udaipur as the City of Lakes',
        details: 'Udaipur was founded by Maharana Udai Singh II in 1559 as the new capital of Mewar. The city was strategically built around lakes to provide water security. The development of artificial lakes like Pichola, Fateh Sagar, and Udai Sagar transformed Udaipur into the beautiful City of Lakes.',
        coordinates: { lat: 24.5854, lng: 73.7125 },
        images: [
          {
            storage_path: 'rajasthan/places/udaipur/history/lakes_1.jpg',
            download_url: '',
            caption: 'Udaipur Lakes Development',
            credit: 'Rajasthan Tourism',
            alt_text: 'Development of lakes in Udaipur',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Lake Tour',
            type: 'modal',
            content: 'Take a boat tour of Udaipur lakes'
          }
        },
        opening_hours: '6:00 AM - 6:00 PM',
        entry_fee: 'INR 200-400 per person',
        best_time: 'Evening for sunset views',
        duration: '1-2 hours',
        accessibility_info: 'Boat dependent',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]
  } as PlaceTabs
};

// Jodhpur - Blue City
export const jodhpurData: KarnatakaPOI = {
  id: 'jodhpur_rajasthan',
  name: 'Jodhpur',
  category: 'place',
  description: 'The Blue City, known for its magnificent Mehrangarh Fort and blue-painted houses',
  coordinates: { lat: 26.2389, lng: 73.0243 },
  banner_image: {
    storage_path: 'rajasthan/places/jodhpur/banner.jpg',
    download_url: '',
    caption: 'Jodhpur Blue City',
    credit: 'Rajasthan Tourism',
    alt_text: 'Jodhpur blue city with Mehrangarh Fort',
    uploaded_at: new Date()
  },
  icon_type: 'pin',
  created_at: new Date(),
  tabs: {
    monuments: [
      {
        id: 'mehrangarh_fort',
        place_id: 'jodhpur_rajasthan',
        state_id: 'rajasthan',
        category: 'monuments',
        name: 'Mehrangarh Fort',
        description: 'Massive hilltop fort offering panoramic views of the Blue City',
        details: 'Mehrangarh Fort is one of the largest forts in India, built by Rao Jodha in 1459. The fort stands 400 feet above the city and houses palaces, courtyards, and museums. It offers breathtaking views of Jodhpur\'s blue houses and the surrounding landscape.',
        coordinates: { lat: 26.2979, lng: 73.0225 },
        images: [
          {
            storage_path: 'rajasthan/places/jodhpur/monuments/mehrangarh_1.jpg',
            download_url: '',
            caption: 'Mehrangarh Fort',
            credit: 'Rajasthan Tourism',
            alt_text: 'Mehrangarh Fort overlooking Jodhpur',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Buy Tickets',
            type: 'external_link',
            url: 'https://mehrangarh.org/tickets'
          },
          secondary: {
            label: 'Audio Guide',
            type: 'modal',
            content: 'Rent audio guide for detailed information'
          }
        },
        opening_hours: '9:00 AM - 5:00 PM',
        entry_fee: 'INR 100 (adults), INR 50 (children)',
        best_time: 'Morning for better views',
        duration: '2-3 hours',
        accessibility_info: 'Partial wheelchair access',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'jaswant_thada',
        place_id: 'jodhpur_rajasthan',
        state_id: 'rajasthan',
        category: 'monuments',
        name: 'Jaswant Thada',
        description: 'White marble memorial built in memory of Maharaja Jaswant Singh II',
        details: 'Jaswant Thada is a beautiful white marble memorial built in 1899 in memory of Maharaja Jaswant Singh II. The cenotaph features intricate marble lattice work and houses portraits of Jodhpur rulers. It\'s surrounded by a peaceful garden and offers views of Mehrangarh Fort.',
        coordinates: { lat: 26.2979, lng: 73.0225 },
        images: [
          {
            storage_path: 'rajasthan/places/jodhpur/monuments/jaswant_thada_1.jpg',
            download_url: '',
            caption: 'Jaswant Thada Memorial',
            credit: 'Rajasthan Tourism',
            alt_text: 'White marble Jaswant Thada memorial',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Visit Memorial',
            type: 'modal',
            content: 'Learn about the history of Jaswant Thada'
          }
        },
        opening_hours: '9:00 AM - 5:00 PM',
        entry_fee: 'INR 30 (adults), INR 15 (children)',
        best_time: 'Morning hours',
        duration: '1 hour',
        accessibility_info: 'Wheelchair accessible',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    food: [
      {
        id: 'mirchi_bada',
        place_id: 'jodhpur_rajasthan',
        state_id: 'rajasthan',
        category: 'food',
        name: 'Mirchi Bada',
        description: 'Spicy stuffed chili fritters, popular street food of Jodhpur',
        details: 'Mirchi Bada is a popular street food in Jodhpur, made by stuffing large green chilies with spiced potato mixture, coating them in gram flour batter, and deep-frying. This spicy snack is often served with tamarind chutney and is a favorite among locals and tourists alike.',
        coordinates: { lat: 26.2389, lng: 73.0243 },
        images: [
          {
            storage_path: 'rajasthan/places/jodhpur/food/mirchi_bada_1.jpg',
            download_url: '',
            caption: 'Traditional Mirchi Bada',
            credit: 'Rajasthan Tourism',
            alt_text: 'Traditional Jodhpur mirchi bada',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Street Food Tour',
            type: 'modal',
            content: 'Join our street food tour of Jodhpur'
          }
        },
        opening_hours: 'Evening 5:00 PM - 10:00 PM',
        entry_fee: 'INR 20-50 per piece',
        best_time: 'Evening for fresh preparation',
        duration: '30 minutes',
        accessibility_info: 'Street level access',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'mawa_kachori',
        place_id: 'jodhpur_rajasthan',
        state_id: 'rajasthan',
        category: 'food',
        name: 'Mawa Kachori',
        description: 'Sweet kachori filled with mawa (milk solids), specialty of Jodhpur',
        details: 'Mawa Kachori is a sweet delicacy unique to Jodhpur, made by stuffing kachori with mawa (reduced milk solids), dry fruits, and sugar. This sweet treat is deep-fried and often served with rabri. It\'s a must-try dessert for anyone visiting Jodhpur.',
        coordinates: { lat: 26.2389, lng: 73.0243 },
        images: [
          {
            storage_path: 'rajasthan/places/jodhpur/food/mawa_kachori_1.jpg',
            download_url: '',
            caption: 'Sweet Mawa Kachori',
            credit: 'Rajasthan Tourism',
            alt_text: 'Traditional Jodhpur mawa kachori',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Sweet Shops',
            type: 'places_search',
            query: 'Mawa Kachori sweet shops Jodhpur'
          }
        },
        opening_hours: '9:00 AM - 9:00 PM',
        entry_fee: 'INR 30-80 per piece',
        best_time: 'Morning for fresh preparation',
        duration: '30 minutes',
        accessibility_info: 'Shop dependent',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    customs: [
      {
        id: 'marwar_culture',
        place_id: 'jodhpur_rajasthan',
        state_id: 'rajasthan',
        category: 'customs',
        name: 'Marwar Culture',
        description: 'Rich cultural traditions of the Marwar region',
        details: 'Jodhpur is the cultural capital of Marwar, known for its folk music, dance, and traditions. The Marwar culture is characterized by its vibrant folk arts, including Kalbeliya dance, folk songs, and traditional instruments. The culture reflects the desert lifestyle and royal heritage.',
        coordinates: { lat: 26.2389, lng: 73.0243 },
        images: [
          {
            storage_path: 'rajasthan/places/jodhpur/customs/marwar_1.jpg',
            download_url: '',
            caption: 'Marwar Cultural Performance',
            credit: 'Rajasthan Tourism',
            alt_text: 'Traditional Marwar cultural performance',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Cultural Shows',
            type: 'modal',
            content: 'Book traditional Marwar cultural shows'
          }
        },
        opening_hours: 'Evening shows 7:00 PM - 9:00 PM',
        entry_fee: 'INR 300-600 per person',
        best_time: 'Evening performances',
        duration: '1-2 hours',
        accessibility_info: 'Theater dependent',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'traditional_turbans',
        place_id: 'jodhpur_rajasthan',
        state_id: 'rajasthan',
        category: 'customs',
        name: 'Traditional Turbans',
        description: 'Art of traditional turban tying and its cultural significance',
        details: 'Turbans hold great cultural significance in Rajasthan, especially in Jodhpur. Different styles and colors represent different communities and occasions. The art of turban tying is passed down through generations, and each style has its own meaning and significance.',
        coordinates: { lat: 26.2389, lng: 73.0243 },
        images: [
          {
            storage_path: 'rajasthan/places/jodhpur/customs/turbans_1.jpg',
            download_url: '',
            caption: 'Traditional Turban Styles',
            credit: 'Rajasthan Tourism',
            alt_text: 'Traditional Rajasthani turban styles',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Turban Workshop',
            type: 'modal',
            content: 'Learn traditional turban tying techniques'
          }
        },
        opening_hours: '10:00 AM - 6:00 PM',
        entry_fee: 'Workshop fees vary',
        best_time: 'Morning for fresh materials',
        duration: '1-2 hours',
        accessibility_info: 'Workshop dependent',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    festivals: [
      {
        id: 'marwar_festival',
        place_id: 'jodhpur_rajasthan',
        state_id: 'rajasthan',
        category: 'festivals',
        name: 'Marwar Festival',
        description: 'Annual festival celebrating the culture and heritage of Marwar',
        details: 'The Marwar Festival is celebrated annually in Jodhpur, showcasing the rich culture and heritage of the Marwar region. The festival features folk music, dance performances, cultural programs, and traditional sports. It attracts artists and performers from across Rajasthan.',
        coordinates: { lat: 26.2389, lng: 73.0243 },
        images: [
          {
            storage_path: 'rajasthan/places/jodhpur/festivals/marwar_1.jpg',
            download_url: '',
            caption: 'Marwar Festival Celebrations',
            credit: 'Rajasthan Tourism',
            alt_text: 'Marwar festival with folk performances',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Festival Info',
            type: 'modal',
            content: 'Get detailed information about Marwar Festival'
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
        id: 'desert_festival',
        place_id: 'jodhpur_rajasthan',
        state_id: 'rajasthan',
        category: 'festivals',
        name: 'Desert Festival',
        description: 'Annual desert festival showcasing traditional sports and culture',
        details: 'The Desert Festival in Jodhpur celebrates the desert culture and traditions. It features traditional sports like camel races, turban tying competitions, and folk performances. The festival showcases the resilience and spirit of the desert people.',
        coordinates: { lat: 26.2389, lng: 73.0243 },
        images: [
          {
            storage_path: 'rajasthan/places/jodhpur/festivals/desert_1.jpg',
            download_url: '',
            caption: 'Desert Festival Activities',
            credit: 'Rajasthan Tourism',
            alt_text: 'Desert festival with camel races',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Festival Schedule',
            type: 'modal',
            content: 'View the complete schedule of Desert Festival events'
          }
        },
        opening_hours: 'All day during festival',
        entry_fee: 'Free entry',
        best_time: 'Morning for sports events',
        duration: '3 days',
        accessibility_info: 'Desert venue dependent',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    history: [
      {
        id: 'marwar_kingdom',
        place_id: 'jodhpur_rajasthan',
        state_id: 'rajasthan',
        category: 'history',
        name: 'Marwar Kingdom',
        description: 'Rich history of the Marwar kingdom and its rulers',
        details: 'The Marwar kingdom was founded by Rao Siha in the 13th century. The kingdom flourished under rulers like Rao Jodha, who founded Jodhpur, and Maharaja Jaswant Singh. The Marwar rulers were known for their valor, administrative skills, and patronage of arts and culture.',
        coordinates: { lat: 26.2389, lng: 73.0243 },
        images: [
          {
            storage_path: 'rajasthan/places/jodhpur/history/marwar_1.jpg',
            download_url: '',
            caption: 'Marwar Kingdom Heritage',
            credit: 'Rajasthan Tourism',
            alt_text: 'Marwar kingdom historical monuments',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'Historical Tour',
            type: 'modal',
            content: 'Join our guided historical tour of Marwar'
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
        id: 'blue_city_origin',
        place_id: 'jodhpur_rajasthan',
        state_id: 'rajasthan',
        category: 'history',
        name: 'Blue City Origin',
        description: 'History behind Jodhpur\'s distinctive blue houses',
        details: 'Jodhpur is known as the Blue City because of the blue-painted houses in the old city. The blue color was traditionally used by the Brahmin community to distinguish their houses. The color also helps keep the houses cool during the hot desert summers and acts as a natural insect repellent.',
        coordinates: { lat: 26.2389, lng: 73.0243 },
        images: [
          {
            storage_path: 'rajasthan/places/jodhpur/history/blue_city_1.jpg',
            download_url: '',
            caption: 'Blue City Jodhpur',
            credit: 'Rajasthan Tourism',
            alt_text: 'Blue painted houses in Jodhpur',
            uploaded_at: new Date()
          }
        ],
        actions: {
          primary: {
            label: 'City Walk',
            type: 'modal',
            content: 'Take a guided walk through the Blue City'
          }
        },
        opening_hours: '6:00 AM - 6:00 PM',
        entry_fee: 'INR 200-400 per person',
        best_time: 'Morning for better lighting',
        duration: '1-2 hours',
        accessibility_info: 'Walking tour dependent',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]
  } as PlaceTabs
};

export default jaipurData;

