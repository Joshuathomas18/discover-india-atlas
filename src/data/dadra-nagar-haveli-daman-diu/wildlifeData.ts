// Dadra and Nagar Haveli and Daman and Diu Wildlife Data
import { KarnatakaPOI } from '../../types/database';

export const vasonaLionSafariData: KarnatakaPOI = {
  id: 'vasona_lion_safari_dnh_dd',
  name: 'Vasona Lion Safari',
  category: 'wildlife',
  coordinates: { lat: 20.2737, lng: 73.0135 },
  description: 'Lion safari park in Silvassa.',
  banner_image: {
    storage_path: 'dadra-nagar-haveli-daman-diu/wildlife/vasona/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Vasona Lion Safari',
    credit: 'Unsplash',
    alt_text: 'Vasona Lion Safari',
    uploaded_at: new Date()
  },
  icon_type: 'lion',
  created_at: new Date(),
  tabs: {
    facts: 'Lion safari park in Silvassa, important for wildlife conservation',
    visiting_info: 'Open for visitors, safari tours available',
    animals_found: ['Lions', 'Various animals', 'Birds']
  }
};

export const hirwaVanData: KarnatakaPOI = {
  id: 'hirwa_van_dnh_dd',
  name: 'Hirwa Van Gardens',
  category: 'wildlife',
  coordinates: { lat: 20.2737, lng: 73.0135 },
  description: 'Garden and wildlife area in Silvassa.',
  banner_image: {
    storage_path: 'dadra-nagar-haveli-daman-diu/wildlife/hirwa-van/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Hirwa Van Gardens',
    credit: 'Unsplash',
    alt_text: 'Hirwa Van Gardens',
    uploaded_at: new Date()
  },
  icon_type: 'bird',
  created_at: new Date(),
  tabs: {
    facts: 'Garden and wildlife area in Silvassa, important for local ecosystem',
    visiting_info: 'Open for visitors, nature walks available',
    animals_found: ['Various bird species', 'Small mammals', 'Butterflies']
  }
};

export const coastalWildlifeData: KarnatakaPOI = {
  id: 'coastal_wildlife_dnh_dd',
  name: 'Coastal Wildlife',
  category: 'wildlife',
  coordinates: { lat: 20.4140, lng: 72.8397 },
  description: 'Coastal wildlife area in Daman and Diu.',
  banner_image: {
    storage_path: 'dadra-nagar-haveli-daman-diu/wildlife/coastal/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Coastal Wildlife',
    credit: 'Unsplash',
    alt_text: 'Coastal Wildlife',
    uploaded_at: new Date()
  },
  icon_type: 'bird',
  created_at: new Date(),
  tabs: {
    facts: 'Coastal wildlife area in Daman and Diu, important for marine life',
    visiting_info: 'Open for visitors, coastal walks available',
    animals_found: ['Coastal birds', 'Marine life', 'Aquatic species']
  }
};

export const tribalWildlifeData: KarnatakaPOI = {
  id: 'tribal_wildlife_dnh_dd',
  name: 'Tribal Wildlife',
  category: 'wildlife',
  coordinates: { lat: 20.2737, lng: 73.0135 },
  description: 'Tribal wildlife area in Dadra and Nagar Haveli.',
  banner_image: {
    storage_path: 'dadra-nagar-haveli-daman-diu/wildlife/tribal/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Tribal Wildlife',
    credit: 'Unsplash',
    alt_text: 'Tribal Wildlife',
    uploaded_at: new Date()
  },
  icon_type: 'bird',
  created_at: new Date(),
  tabs: {
    facts: 'Tribal wildlife area in Dadra and Nagar Haveli, important for tribal ecosystem',
    visiting_info: 'Open for visitors, tribal nature walks available',
    animals_found: ['Various bird species', 'Small mammals', 'Reptiles']
  }
};

export default [vasonaLionSafariData, hirwaVanData, coastalWildlifeData, tribalWildlifeData];
