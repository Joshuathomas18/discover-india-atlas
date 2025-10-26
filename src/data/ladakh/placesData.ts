// Ladakh Places Data
import { KarnatakaPOI, PlaceTabs, CulturalItem } from '../../types/database';

export const lehData: KarnatakaPOI = {
  id: 'leh_ladakh',
  name: 'Leh',
  category: 'place',
  coordinates: { lat: 34.1526, lng: 77.5771 },
  description: 'Capital of Ladakh, known for Buddhist monasteries and high-altitude landscapes.',
  banner_image: {
    storage_path: 'ladakh/places/leh/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Leh - Capital of Ladakh',
    credit: 'Unsplash',
    alt_text: 'Leh city with monasteries',
    uploaded_at: new Date()
  },
  icon_type: 'city',
  created_at: new Date(),
  tabs: {
    monuments: [
      {
        id: 'leh_palace',
        place_id: 'leh_ladakh',
        state_id: 'ladakh',
        category: 'monuments',
        name: 'Leh Palace',
        description: 'Historic royal palace offering panoramic views of Leh city and surrounding mountains.',
        details: 'Leh Palace is a former royal palace overlooking the town of Leh. Built in the 17th century by King Sengge Namgyal, it was modeled on the Potala Palace in Lhasa, Tibet. The palace offers stunning views of the Indus Valley and surrounding mountains.',
        images: [{
          storage_path: 'ladakh/places/leh/leh-palace.jpg',
          download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
          caption: 'Leh Palace',
          credit: 'Unsplash',
          alt_text: 'Leh Palace exterior',
          uploaded_at: new Date()
        }],
        actions: {
          primary: {
            label: 'Visit Info',
            type: 'external_link',
            url: 'https://example.com/leh-palace'
          }
        },
        opening_hours: '9:00 AM - 5:00 PM',
        entry_fee: 'INR 100 (Indians), INR 300 (Foreigners)',
        best_time: 'Early morning or late afternoon',
        duration: '2-3 hours',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    food: [
      {
        id: 'thukpa',
        place_id: 'leh_ladakh',
        state_id: 'ladakh',
        category: 'food',
        name: 'Thukpa',
        description: 'Traditional Tibetan noodle soup, perfect for cold mountain weather.',
        details: 'Thukpa is a hearty noodle soup that originated in Tibet and is popular throughout Ladakh. It typically contains vegetables, meat, and noodles in a flavorful broth, making it perfect for the cold mountain climate.',
        images: [{
          storage_path: 'ladakh/places/leh/thukpa.jpg',
          download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
          caption: 'Thukpa Soup',
          credit: 'Unsplash',
          alt_text: 'Traditional thukpa soup',
          uploaded_at: new Date()
        }],
        actions: {
          primary: {
            label: 'Find Restaurants',
            type: 'external_link',
            url: 'https://example.com/thukpa-restaurants'
          }
        },
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    customs: [
      {
        id: 'buddhist_culture',
        place_id: 'leh_ladakh',
        state_id: 'ladakh',
        category: 'customs',
        name: 'Buddhist Culture',
        description: 'Deep-rooted Buddhist traditions and monastic life in Ladakh.',
        details: 'Ladakh is deeply influenced by Tibetan Buddhism, with numerous monasteries, prayer flags, and traditional Buddhist practices. The culture emphasizes compassion, meditation, and respect for nature.',
        images: [{
          storage_path: 'ladakh/places/leh/buddhist-culture.jpg',
          download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
          caption: 'Buddhist Monastery',
          credit: 'Unsplash',
          alt_text: 'Buddhist monastery in Ladakh',
          uploaded_at: new Date()
        }],
        actions: {
          primary: {
            label: 'Learn More',
            type: 'external_link',
            url: 'https://example.com/buddhist-culture'
          }
        },
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    festivals: [
      {
        id: 'hemis_festival',
        place_id: 'leh_ladakh',
        state_id: 'ladakh',
        category: 'festivals',
        name: 'Hemis Festival',
        description: 'Annual Buddhist festival featuring masked dances and cultural performances.',
        details: 'The Hemis Festival is one of the most important Buddhist festivals in Ladakh, celebrated at Hemis Monastery. It features colorful masked dances, traditional music, and religious ceremonies.',
        images: [{
          storage_path: 'ladakh/places/leh/hemis-festival.jpg',
          download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
          caption: 'Hemis Festival',
          credit: 'Unsplash',
          alt_text: 'Hemis Festival masked dance',
          uploaded_at: new Date()
        }],
        actions: {
          primary: {
            label: 'Event Details',
            type: 'external_link',
            url: 'https://example.com/hemis-festival'
          }
        },
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    history: [
      {
        id: 'silk_road_trade',
        place_id: 'leh_ladakh',
        state_id: 'ladakh',
        category: 'history',
        name: 'Silk Road Trade',
        description: 'Leh was an important stop on the ancient Silk Road trading route.',
        details: 'Leh served as a crucial trading post on the Silk Road, connecting India with Central Asia and Tibet. The city was a hub for trade in silk, spices, and other valuable commodities.',
        images: [{
          storage_path: 'ladakh/places/leh/silk-road.jpg',
          download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
          caption: 'Silk Road Trade Route',
          credit: 'Unsplash',
          alt_text: 'Ancient Silk Road trade route',
          uploaded_at: new Date()
        }],
        actions: {
          primary: {
            label: 'Learn More',
            type: 'external_link',
            url: 'https://example.com/silk-road'
          }
        },
        created_at: new Date(),
        updated_at: new Date()
      }
    ]
  } as PlaceTabs
};

export const kargilData: KarnatakaPOI = {
  id: 'kargil_ladakh',
  name: 'Kargil',
  category: 'place',
  coordinates: { lat: 34.5539, lng: 76.1313 },
  description: 'Second-largest town in Ladakh, known for war memorial.',
  banner_image: {
    storage_path: 'ladakh/places/kargil/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Kargil - War Memorial',
    credit: 'Unsplash',
    alt_text: 'Kargil war memorial',
    uploaded_at: new Date()
  },
  icon_type: 'city',
  created_at: new Date(),
  tabs: {
    monuments: [
      {
        id: 'kargil_war_memorial',
        place_id: 'kargil_ladakh',
        state_id: 'ladakh',
        category: 'monuments',
        name: 'Kargil War Memorial',
        description: 'Memorial dedicated to soldiers who lost their lives in the Kargil War.',
        details: 'The Kargil War Memorial commemorates the brave soldiers who fought and sacrificed their lives during the 1999 Kargil War. It serves as a reminder of their courage and dedication to the nation.',
        images: [{
          storage_path: 'ladakh/places/kargil/war-memorial.jpg',
          download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
          caption: 'Kargil War Memorial',
          credit: 'Unsplash',
          alt_text: 'Kargil War Memorial monument',
          uploaded_at: new Date()
        }],
        actions: {
          primary: {
            label: 'Visit Info',
            type: 'external_link',
            url: 'https://example.com/kargil-war-memorial'
          }
        },
        opening_hours: '9:00 AM - 5:00 PM',
        entry_fee: 'Free',
        best_time: 'Morning hours',
        duration: '1-2 hours',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    food: [
      {
        id: 'ladakhi_cuisine',
        place_id: 'kargil_ladakh',
        state_id: 'ladakh',
        category: 'food',
        name: 'Ladakhi Cuisine',
        description: 'Traditional high-altitude cuisine adapted to mountain conditions.',
        details: 'Ladakhi cuisine reflects the harsh mountain environment, featuring hearty dishes made with local ingredients like barley, wheat, and yak products.',
        images: [{
          storage_path: 'ladakh/places/kargil/ladakhi-cuisine.jpg',
          download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
          caption: 'Ladakhi Cuisine',
          credit: 'Unsplash',
          alt_text: 'Traditional Ladakhi food',
          uploaded_at: new Date()
        }],
        actions: {
          primary: {
            label: 'Find Restaurants',
            type: 'external_link',
            url: 'https://example.com/ladakhi-cuisine'
          }
        },
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    customs: [
      {
        id: 'mixed_culture',
        place_id: 'kargil_ladakh',
        state_id: 'ladakh',
        category: 'customs',
        name: 'Mixed Culture',
        description: 'Blend of Buddhist and Muslim traditions in Kargil.',
        details: 'Kargil represents a unique blend of Buddhist and Muslim cultures, creating a diverse and harmonious community with rich traditions.',
        images: [{
          storage_path: 'ladakh/places/kargil/mixed-culture.jpg',
          download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
          caption: 'Mixed Culture',
          credit: 'Unsplash',
          alt_text: 'Cultural diversity in Kargil',
          uploaded_at: new Date()
        }],
        actions: {
          primary: {
            label: 'Learn More',
            type: 'external_link',
            url: 'https://example.com/mixed-culture'
          }
        },
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    festivals: [
      {
        id: 'local_festivals',
        place_id: 'kargil_ladakh',
        state_id: 'ladakh',
        category: 'festivals',
        name: 'Local Festivals',
        description: 'Traditional celebrations reflecting the cultural diversity of Kargil.',
        details: 'Kargil celebrates various festivals that reflect its diverse cultural heritage, including both Buddhist and Muslim traditions.',
        images: [{
          storage_path: 'ladakh/places/kargil/local-festivals.jpg',
          download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
          caption: 'Local Festivals',
          credit: 'Unsplash',
          alt_text: 'Traditional festival in Kargil',
          uploaded_at: new Date()
        }],
        actions: {
          primary: {
            label: 'Event Details',
            type: 'external_link',
            url: 'https://example.com/local-festivals'
          }
        },
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    history: [
      {
        id: 'kargil_war',
        place_id: 'kargil_ladakh',
        state_id: 'ladakh',
        category: 'history',
        name: 'Kargil War',
        description: 'Historical significance of the 1999 Kargil War and its impact.',
        details: 'The 1999 Kargil War was a significant conflict between India and Pakistan, fought in the Kargil district. It resulted in India\'s victory and had lasting impacts on the region.',
        images: [{
          storage_path: 'ladakh/places/kargil/kargil-war.jpg',
          download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
          caption: 'Kargil War',
          credit: 'Unsplash',
          alt_text: 'Kargil War historical significance',
          uploaded_at: new Date()
        }],
        actions: {
          primary: {
            label: 'Learn More',
            type: 'external_link',
            url: 'https://example.com/kargil-war'
          }
        },
        created_at: new Date(),
        updated_at: new Date()
      }
    ]
  } as PlaceTabs
};

export const nubraValleyData: KarnatakaPOI = {
  id: 'nubra_valley_ladakh',
  name: 'Nubra Valley',
  category: 'place',
  coordinates: { lat: 34.5539, lng: 77.5771 },
  description: 'High-altitude valley known for sand dunes and Bactrian camels.',
  banner_image: {
    storage_path: 'ladakh/places/nubra-valley/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Nubra Valley - Sand Dunes',
    credit: 'Unsplash',
    alt_text: 'Nubra Valley sand dunes',
    uploaded_at: new Date()
  },
  icon_type: 'city',
  created_at: new Date(),
  tabs: {
    monuments: [
      {
        id: 'diskit_monastery',
        place_id: 'nubra_valley_ladakh',
        state_id: 'ladakh',
        category: 'monuments',
        name: 'Diskit Monastery',
        description: 'Ancient Buddhist monastery with stunning views of the valley.',
        details: 'Diskit Monastery is the oldest and largest Buddhist monastery in Nubra Valley, dating back to the 14th century. It offers breathtaking views of the valley and houses ancient Buddhist artifacts.',
        images: [{
          storage_path: 'ladakh/places/nubra-valley/diskit-monastery.jpg',
          download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
          caption: 'Diskit Monastery',
          credit: 'Unsplash',
          alt_text: 'Diskit Monastery exterior',
          uploaded_at: new Date()
        }],
        actions: {
          primary: {
            label: 'Visit Info',
            type: 'external_link',
            url: 'https://example.com/diskit-monastery'
          }
        },
        opening_hours: '6:00 AM - 6:00 PM',
        entry_fee: 'INR 50',
        best_time: 'Morning hours',
        duration: '1-2 hours',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    food: [
      {
        id: 'mountain_cuisine',
        place_id: 'nubra_valley_ladakh',
        state_id: 'ladakh',
        category: 'food',
        name: 'Mountain Cuisine',
        description: 'Traditional mountain cuisine with Tibetan influences.',
        details: 'Nubra Valley offers traditional mountain cuisine adapted to high-altitude conditions, featuring hearty dishes made with local ingredients.',
        images: [{
          storage_path: 'ladakh/places/nubra-valley/mountain-cuisine.jpg',
          download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
          caption: 'Mountain Cuisine',
          credit: 'Unsplash',
          alt_text: 'Traditional mountain food',
          uploaded_at: new Date()
        }],
        actions: {
          primary: {
            label: 'Find Restaurants',
            type: 'external_link',
            url: 'https://example.com/mountain-cuisine'
          }
        },
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    customs: [
      {
        id: 'buddhist_traditions',
        place_id: 'nubra_valley_ladakh',
        state_id: 'ladakh',
        category: 'customs',
        name: 'Buddhist Traditions',
        description: 'Deep-rooted Buddhist traditions and monastic life in Nubra Valley.',
        details: 'Nubra Valley maintains strong Buddhist traditions with active monasteries, prayer wheels, and traditional ceremonies that have been preserved for centuries.',
        images: [{
          storage_path: 'ladakh/places/nubra-valley/buddhist-traditions.jpg',
          download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
          caption: 'Buddhist Traditions',
          credit: 'Unsplash',
          alt_text: 'Buddhist prayer wheels',
          uploaded_at: new Date()
        }],
        actions: {
          primary: {
            label: 'Learn More',
            type: 'external_link',
            url: 'https://example.com/buddhist-traditions'
          }
        },
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    festivals: [
      {
        id: 'buddhist_festivals',
        place_id: 'nubra_valley_ladakh',
        state_id: 'ladakh',
        category: 'festivals',
        name: 'Buddhist Festivals',
        description: 'Traditional Buddhist celebrations and religious ceremonies.',
        details: 'Nubra Valley celebrates various Buddhist festivals throughout the year, featuring colorful ceremonies, masked dances, and traditional music.',
        images: [{
          storage_path: 'ladakh/places/nubra-valley/buddhist-festivals.jpg',
          download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
          caption: 'Buddhist Festivals',
          credit: 'Unsplash',
          alt_text: 'Buddhist festival ceremony',
          uploaded_at: new Date()
        }],
        actions: {
          primary: {
            label: 'Event Details',
            type: 'external_link',
            url: 'https://example.com/buddhist-festivals'
          }
        },
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    history: [
      {
        id: 'silk_road_heritage',
        place_id: 'nubra_valley_ladakh',
        state_id: 'ladakh',
        category: 'history',
        name: 'Silk Road Heritage',
        description: 'Nubra Valley was an important stop on the ancient Silk Road trading route.',
        details: 'Nubra Valley served as a crucial trading post on the Silk Road, connecting India with Central Asia and Tibet, leaving behind a rich cultural and historical legacy.',
        images: [{
          storage_path: 'ladakh/places/nubra-valley/silk-road-heritage.jpg',
          download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
          caption: 'Silk Road Heritage',
          credit: 'Unsplash',
          alt_text: 'Ancient Silk Road trading route',
          uploaded_at: new Date()
        }],
        actions: {
          primary: {
            label: 'Learn More',
            type: 'external_link',
            url: 'https://example.com/silk-road-heritage'
          }
        },
        created_at: new Date(),
        updated_at: new Date()
      }
    ]
  } as PlaceTabs
};

export default [lehData, kargilData, nubraValleyData];