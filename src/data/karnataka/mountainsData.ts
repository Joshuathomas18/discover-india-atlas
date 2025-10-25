// Karnataka Mountains Data
// Comprehensive data for major mountain peaks in Karnataka with 3 tabs each

import { KarnatakaPOI, MountainTabs, ImageReference } from '../../types/database';

export const mullayanagiriData: KarnatakaPOI = {
  id: 'mullayanagiri_mountain',
  name: 'Mullayanagiri',
  category: 'mountain',
  description: 'Highest peak in Karnataka, located in the Western Ghats',
  coordinates: { lat: 13.3833, lng: 75.7167 },
  banner_image: {
    storage_path: 'karnataka/mountains/mullayanagiri/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Mullayanagiri Peak - Highest in Karnataka',
    credit: 'Unsplash',
    alt_text: 'Mullayanagiri mountain peak with scenic views',
    uploaded_at: new Date()
  },
  icon_type: 'mountain',
  created_at: new Date(),
  tabs: {
    facts: 'Mullayanagiri is the highest peak in Karnataka, standing at an elevation of 1,930 meters (6,330 feet) above sea level. It is located in the Chikmagalur district of Karnataka, in the Western Ghats mountain range. The peak is part of the Baba Budangiri range and offers breathtaking panoramic views of the surrounding hills and valleys. The mountain is known for its cool climate, dense forests, and rich biodiversity.',
    trekking: 'Mullayanagiri offers excellent trekking opportunities for both beginners and experienced trekkers. The trek starts from Sarpadhari, about 15 km from Chikmagalur town. The trail is approximately 3 km long and takes about 2-3 hours to reach the summit. The trek passes through dense forests, grasslands, and rocky terrain. Best time for trekking is from October to March when the weather is pleasant. Trekkers should carry water, snacks, and proper trekking gear. The summit offers spectacular sunrise and sunset views.',
    how_to_reach: 'Mullayanagiri is accessible from Chikmagalur town, which is well connected by road and rail. From Chikmagalur: 1) Take a bus or taxi to Sarpadhari (15 km) - the starting point of the trek. 2) Private vehicles can go up to a certain point, from where trekking begins. 3) Local guides are available for trekking. Chikmagalur is 250 km from Bengaluru, 150 km from Mangaluru, and 100 km from Hassan. The nearest railway station is Chikmagalur, and the nearest airport is Mangaluru (150 km).'
  } as MountainTabs
};

export const kudremukhData: KarnatakaPOI = {
  id: 'kudremukh_mountain',
  name: 'Kudremukh',
  category: 'mountain',
  description: 'Horse-face shaped peak in the Western Ghats, famous for trekking',
  coordinates: { lat: 13.1333, lng: 75.2500 },
  banner_image: {
    storage_path: 'karnataka/mountains/kudremukh/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Kudremukh Peak - Horse Face Mountain',
    credit: 'Unsplash',
    alt_text: 'Kudremukh mountain peak with horse-face shape',
    uploaded_at: new Date()
  },
  icon_type: 'mountain',
  created_at: new Date(),
  tabs: {
    facts: 'Kudremukh, meaning "horse-face" in Kannada, is a mountain peak in the Western Ghats of Karnataka. It stands at an elevation of 1,894 meters (6,214 feet) above sea level. The peak is located in the Kudremukh National Park, which is part of the Western Ghats UNESCO World Heritage Site. The mountain is known for its unique horse-face shape when viewed from certain angles. It is surrounded by dense forests, grasslands, and numerous streams.',
    trekking: 'Kudremukh offers one of the most popular trekking routes in Karnataka. The trek starts from Mullodi village, about 20 km from Kalasa town. The trail is approximately 10 km long and takes about 6-8 hours to complete (round trip). The trek passes through dense forests, grasslands, and rocky terrain. Trekkers can spot various wildlife including deer, wild boar, and various bird species. The best time for trekking is from October to March. Permits are required and can be obtained from the forest department.',
    how_to_reach: 'Kudremukh is accessible from Kalasa town in Chikmagalur district. From Kalasa: 1) Take a bus or taxi to Mullodi village (20 km) - the starting point of the trek. 2) Private vehicles can go up to a certain point. 3) Local guides are available for trekking. Kalasa is 350 km from Bengaluru, 200 km from Mangaluru, and 120 km from Chikmagalur. The nearest railway station is Kadur (80 km), and the nearest airport is Mangaluru (200 km).'
  } as MountainTabs
};

export const karnatakaMountainsData = [
  mullayanagiriData,
  kudremukhData,
  // Additional mountains will be added here
];

export default karnatakaMountainsData;
