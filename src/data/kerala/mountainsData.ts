// Kerala Mountains Data
// Comprehensive data for major mountains in Kerala with 3 tabs each

import { KarnatakaPOI, MountainTabs, ImageReference } from '../../types/database';

// Anamudi Peak
export const anamudiPeakData: KarnatakaPOI = {
  id: 'anamudi_peak',
  name: 'Anamudi Peak',
  category: 'mountain',
  description: 'Highest peak in South India, located in the Western Ghats',
  coordinates: { lat: 10.1699, lng: 77.0603 },
  banner_image: {
    storage_path: 'kerala/mountains/anamudi/banner.jpg',
    download_url: '',
    caption: 'Anamudi Peak - Highest in South India',
    credit: 'Kerala Tourism',
    alt_text: 'Anamudi Peak with scenic views',
    uploaded_at: new Date()
  },
  icon_type: 'mountain',
  created_at: new Date(),
  tabs: {
    facts: 'Anamudi Peak is the highest peak in South India, standing at 2,695 meters above sea level. It is located in the Eravikulam National Park in the Western Ghats. The peak is known for its rich biodiversity and is home to several endangered species. The name "Anamudi" means "elephant\'s forehead" in Malayalam, referring to the peak\'s shape.',
    trekking: 'Anamudi Peak offers challenging trekking opportunities for experienced trekkers. The trek to the peak takes about 6-8 hours and requires proper equipment and guides. The trekking trail passes through dense forests and offers breathtaking views of the surrounding landscape. The best time for trekking is from October to March when the weather is pleasant. Trekking equipment like good hiking shoes, water bottles, and first aid kits are essential.',
    how_to_reach: 'Anamudi Peak is located in the Eravikulam National Park, about 15 km from Munnar. By road, you can reach Munnar from Kochi (about 130 km) or from Coimbatore (about 160 km). From Munnar, you can take a taxi or bus to reach the national park. The nearest railway station is Aluva, and the nearest airport is Cochin International Airport. Entry to the national park requires permits, which can be obtained from the park office.'
  } as MountainTabs
};

// Western Ghats
export const westernGhatsData: KarnatakaPOI = {
  id: 'western_ghats',
  name: 'Western Ghats',
  category: 'mountain',
  description: 'Mountain range running along the western coast of India, known for its biodiversity',
  coordinates: { lat: 10.0000, lng: 76.5000 },
  banner_image: {
    storage_path: 'kerala/mountains/western_ghats/banner.jpg',
    download_url: '',
    caption: 'Western Ghats Mountain Range',
    credit: 'Kerala Tourism',
    alt_text: 'Western Ghats mountain range landscape',
    uploaded_at: new Date()
  },
  icon_type: 'mountain',
  created_at: new Date(),
  tabs: {
    facts: 'The Western Ghats is a mountain range that runs along the western coast of India, covering about 1,600 km. It is known for its rich biodiversity and is home to several endemic species. The range acts as a natural barrier between the coastal plains and the Deccan Plateau. The Western Ghats is a UNESCO World Heritage Site and is considered one of the world\'s eight "hottest hotspots" of biological diversity.',
    trekking: 'The Western Ghats offers numerous trekking opportunities across its length. Popular trekking destinations include Munnar, Wayanad, and Thekkady. The trekking trails vary in difficulty from easy to challenging. The range offers scenic views of the surrounding landscape and is home to diverse flora and fauna. Trekking is best done during the winter months (October to March) when the weather is pleasant.',
    how_to_reach: 'The Western Ghats can be accessed from various points across Kerala. Major cities near the range include Kochi, Thrissur, and Kozhikode. The range is well-connected by road networks. From Kochi, you can reach various parts of the Western Ghats by road (50-200 km depending on the destination). The nearest railway stations are Kochi, Thrissur, and Kozhikode. The nearest airports are Cochin International Airport, Calicut Airport, and Kannur Airport.'
  } as MountainTabs
};

// Export all mountains data
export const keralaMountainsData: KarnatakaPOI[] = [
  anamudiPeakData,
  westernGhatsData
];

export default keralaMountainsData;

