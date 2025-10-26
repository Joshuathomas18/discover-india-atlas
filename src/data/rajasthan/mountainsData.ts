// Rajasthan Mountains Data
// Comprehensive data for major mountains in Rajasthan with 3 tabs each

import { KarnatakaPOI, MountainTabs, ImageReference } from '../../types/database';

// Mount Abu
export const mountAbuData: KarnatakaPOI = {
  id: 'mount_abu',
  name: 'Mount Abu',
  category: 'mountain',
  description: 'Only hill station in Rajasthan, famous for its cool climate and Dilwara Temples',
  coordinates: { lat: 24.5925, lng: 72.7156 },
  banner_image: {
    storage_path: 'rajasthan/mountains/mount_abu/banner.jpg',
    download_url: '',
    caption: 'Mount Abu Hill Station',
    credit: 'Rajasthan Tourism',
    alt_text: 'Mount Abu hill station with temples',
    uploaded_at: new Date()
  },
  icon_type: 'mountain',
  created_at: new Date(),
  tabs: {
    facts: 'Mount Abu is the only hill station in Rajasthan, located in the Aravalli Range at an elevation of 1,220 meters above sea level. It covers an area of about 22 square kilometers and is known for its pleasant climate throughout the year. The hill station is famous for its Dilwara Temples, which are exquisite examples of Jain architecture. Mount Abu is also home to Guru Shikhar, the highest peak in the Aravalli Range at 1,722 meters. The area is rich in biodiversity and is a popular destination for nature lovers and spiritual seekers.',
    trekking: 'Mount Abu offers several trekking opportunities for adventure enthusiasts. The most popular trek is to Guru Shikhar, the highest peak, which takes about 2-3 hours to complete. Other trekking routes include Sunset Point, Honeymoon Point, and Nakki Lake area. The trekking trails are well-marked and suitable for beginners. The best time for trekking is from October to March when the weather is pleasant. Trekking equipment like good hiking shoes, water bottles, and light snacks are recommended. Local guides are available for hire.',
    how_to_reach: 'Mount Abu is well-connected by road, rail, and air. By road, it is about 185 km from Udaipur, 160 km from Ahmedabad, and 480 km from Jaipur. Regular bus services are available from major cities in Rajasthan and Gujarat. The nearest railway station is Abu Road, which is about 28 km from Mount Abu. From Abu Road, you can take a taxi or bus to reach Mount Abu. The nearest airport is Udaipur Airport (about 185 km away). Private taxis and shared cabs are available from nearby cities.'
  } as MountainTabs
};

// Aravalli Range
export const aravalliRangeData: KarnatakaPOI = {
  id: 'aravalli_range',
  name: 'Aravalli Range',
  category: 'mountain',
  description: 'Oldest mountain range in India, stretching across Rajasthan and providing natural beauty',
  coordinates: { lat: 25.0000, lng: 74.0000 },
  banner_image: {
    storage_path: 'rajasthan/mountains/aravalli/banner.jpg',
    download_url: '',
    caption: 'Aravalli Range in Rajasthan',
    credit: 'Rajasthan Tourism',
    alt_text: 'Aravalli mountain range landscape',
    uploaded_at: new Date()
  },
  icon_type: 'mountain',
  created_at: new Date(),
  tabs: {
    facts: 'The Aravalli Range is one of the oldest mountain ranges in the world, formed about 1.8 billion years ago. It stretches for about 692 km from Gujarat through Rajasthan to Haryana. The range acts as a natural barrier between the Thar Desert and the fertile plains of northern India. The highest peak is Guru Shikhar at 1,722 meters in Mount Abu. The Aravalli Range is rich in minerals and is home to several wildlife sanctuaries and national parks. It plays a crucial role in maintaining the ecological balance of the region.',
    trekking: 'The Aravalli Range offers numerous trekking opportunities across its length. Popular trekking destinations include Mount Abu, Kumbhalgarh, Ranthambore, and Sariska. The trekking trails vary in difficulty from easy to moderate. The range offers scenic views of the surrounding landscape and is home to diverse flora and fauna. Trekking is best done during the winter months (October to March) when the weather is pleasant. Equipment like hiking boots, water bottles, and first aid kits are essential. Local trekking groups and guides are available in major cities.',
    how_to_reach: 'The Aravalli Range can be accessed from various points across Rajasthan. Major cities near the range include Jaipur, Udaipur, Ajmer, and Mount Abu. The range is well-connected by road networks. From Jaipur, you can reach various parts of the Aravalli Range by road (50-200 km depending on the destination). The nearest railway stations are Jaipur, Ajmer, and Udaipur. The nearest airports are Jaipur Airport, Udaipur Airport, and Jodhpur Airport. Local transport including buses, taxis, and private vehicles are available.'
  } as MountainTabs
};

// Export all mountains data
export const rajasthanMountainsData: KarnatakaPOI[] = [
  mountAbuData,
  aravalliRangeData
];

export default rajasthanMountainsData;

