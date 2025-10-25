// Karnataka Dams Data
// Comprehensive data for major dams in Karnataka with 4 tabs each

import { KarnatakaPOI, DamTabs, ImageReference } from '../../types/database';

export const krsDamData: KarnatakaPOI = {
  id: 'krishna_raja_sagara_dam',
  name: 'Krishna Raja Sagara Dam',
  category: 'dam',
  description: 'Famous dam built across Kaveri River, also known as KRS Dam',
  coordinates: { lat: 12.4167, lng: 76.5667 },
  banner_image: {
    storage_path: 'karnataka/dams/krs_dam/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Krishna Raja Sagara Dam - KRS Dam',
    credit: 'Unsplash',
    alt_text: 'KRS Dam with Kaveri River and Brindavan Gardens',
    uploaded_at: new Date()
  },
  icon_type: 'dam',
  created_at: new Date(),
  tabs: {
    size: 'Krishna Raja Sagara Dam (KRS Dam) is a major dam built across the Kaveri River. The dam has a height of 39.8 meters (130 feet) and a length of 2,621 meters (8,600 feet). The reservoir has a capacity of 49.45 million cubic meters (MCM) and covers an area of about 130 sq km. The dam was built between 1911 and 1932 and is named after Krishnaraja Wodeyar IV, the Maharaja of Mysore.',
    rivers_associated: [
      'Kaveri River - Primary river',
      'Hemavati River - Tributary',
      'Lakshmana Tirtha River - Tributary'
    ],
    facts_tourists: 'KRS Dam is a popular tourist destination, famous for its Brindavan Gardens located below the dam. The gardens feature musical fountains, colorful flower beds, and beautiful landscaping. The dam offers spectacular views of the Kaveri River and surrounding hills. The best time to visit is during monsoon season (June-September) when the dam is in full flow. The area around the dam offers several viewpoints and walking trails. Entry fee is INR 15 for Indians and INR 50 for foreigners.',
    how_to_reach: 'KRS Dam is located in Mandya district, about 20 km from Mysore city. From Mysore: 1) Take a bus or taxi to KRS Dam (20 km) - journey takes about 30-45 minutes. 2) Private vehicles can reach the dam directly. 3) The nearest railway station is Mysore (20 km). 4) The nearest airport is Bengaluru (150 km). The dam is accessible by road throughout the year, but the best time to visit is during monsoon season when the dam is in full flow.'
  } as DamTabs
};

export const tungabhadraDamData: KarnatakaPOI = {
  id: 'tungabhadra_dam',
  name: 'Tungabhadra Dam',
  category: 'dam',
  description: 'Major dam on Tungabhadra River, important for irrigation and hydroelectric power',
  coordinates: { lat: 15.3500, lng: 76.2000 },
  banner_image: {
    storage_path: 'karnataka/dams/tungabhadra_dam/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Tungabhadra Dam - Major Irrigation Project',
    credit: 'Unsplash',
    alt_text: 'Tungabhadra Dam with reservoir and surrounding hills',
    uploaded_at: new Date()
  },
  icon_type: 'dam',
  created_at: new Date(),
  tabs: {
    size: 'Tungabhadra Dam is a major dam built across the Tungabhadra River. The dam has a height of 49.5 meters (162 feet) and a length of 2,441 meters (8,000 feet). The reservoir has a capacity of 135.5 million cubic meters (MCM) and covers an area of about 378 sq km. The dam was built between 1945 and 1953 and is one of the largest irrigation projects in Karnataka.',
    rivers_associated: [
      'Tungabhadra River - Primary river',
      'Krishna River - Downstream',
      'Local streams and tributaries'
    ],
    facts_tourists: 'Tungabhadra Dam is a popular tourist destination, known for its scenic beauty and engineering marvel. The dam offers spectacular views of the Tungabhadra River and surrounding hills. The area around the dam is perfect for photography and nature walks. The best time to visit is during monsoon season (June-September) when the dam is in full flow. The dam is also important for irrigation and hydroelectric power generation. Entry fee is INR 10 for Indians and INR 50 for foreigners.',
    how_to_reach: 'Tungabhadra Dam is located in Bellary district, about 15 km from Hospet town. From Hospet: 1) Take a bus or taxi to Tungabhadra Dam (15 km) - journey takes about 20-30 minutes. 2) Private vehicles can reach the dam directly. 3) The nearest railway station is Hospet (15 km). 4) The nearest airport is Bengaluru (300 km). The dam is accessible by road throughout the year, but the best time to visit is during monsoon season when the dam is in full flow.'
  } as DamTabs
};

export const karnatakaDamsData = [
  krsDamData,
  tungabhadraDamData,
  // Additional dams will be added here
];

export default karnatakaDamsData;
