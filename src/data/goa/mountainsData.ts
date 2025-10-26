// Goa Mountains Data
// Comprehensive data for major mountains in Goa with 3 tabs each

import { KarnatakaPOI, MountainTabs, ImageReference } from '../../types/database';

// Western Ghats Goa
export const westernGhatsGoaData: KarnatakaPOI = {
  id: 'western_ghats_goa',
  name: 'Western Ghats Goa',
  category: 'mountain',
  description: 'Mountain range running through Goa, known for its biodiversity and scenic beauty',
  coordinates: { lat: 15.5000, lng: 74.0000 },
  banner_image: {
    storage_path: 'goa/mountains/western_ghats/banner.jpg',
    download_url: '',
    caption: 'Western Ghats in Goa',
    credit: 'Goa Tourism',
    alt_text: 'Western Ghats mountain range in Goa',
    uploaded_at: new Date()
  },
  icon_type: 'mountain',
  created_at: new Date(),
  tabs: {
    facts: 'The Western Ghats in Goa is a mountain range that runs through the state, covering about 1,600 km. It is known for its rich biodiversity and is home to several endemic species. The range acts as a natural barrier between the coastal plains and the Deccan Plateau. The Western Ghats is a UNESCO World Heritage Site and is considered one of the world\'s eight "hottest hotspots" of biological diversity.',
    trekking: 'The Western Ghats in Goa offers numerous trekking opportunities across its length. Popular trekking destinations include Dudhsagar Falls, Mollem National Park, and Bhagwan Mahavir Wildlife Sanctuary. The trekking trails vary in difficulty from easy to challenging. The range offers scenic views of the surrounding landscape and is home to diverse flora and fauna. Trekking is best done during the winter months (October to March) when the weather is pleasant.',
    how_to_reach: 'The Western Ghats in Goa can be accessed from various points across the state. Major cities near the range include Panaji, Margao, and Ponda. The range is well-connected by road networks. From Panaji, you can reach various parts of the Western Ghats by road (50-100 km depending on the destination). The nearest railway station is Margao, and the nearest airport is Dabolim Airport.'
  } as MountainTabs
};

// Export all mountains data
export const goaMountainsData: KarnatakaPOI[] = [
  westernGhatsGoaData
];

export default goaMountainsData;

