// Jammu and Kashmir Dams Data
import { KarnatakaPOI } from '../../types/database';

export const bagliharData: KarnatakaPOI = {
  id: 'baglihar_jk',
  name: 'Baglihar Dam',
  category: 'dam',
  coordinates: { lat: 33.2500, lng: 75.3500 },
  description: 'Hydroelectric dam on Chenab river.',
  banner_image: {
    storage_path: 'jammu-kashmir/dams/baglihar/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Baglihar Dam',
    credit: 'Unsplash',
    alt_text: 'Baglihar Dam on Chenab',
    uploaded_at: new Date()
  },
  icon_type: 'dam',
  created_at: new Date(),
  tabs: {
    size: 'Large hydroelectric dam on Chenab river',
    rivers_associated: ['Chenab River'],
    facts_tourists: 'Major hydropower project, important for electricity generation',
    how_to_reach: 'Accessible by road from Jammu region'
  }
};

export const uriData: KarnatakaPOI = {
  id: 'uri_jk',
  name: 'Uri Dam',
  category: 'dam',
  coordinates: { lat: 34.0837, lng: 74.7973 },
  description: 'Hydroelectric dam in Kashmir Valley.',
  banner_image: {
    storage_path: 'jammu-kashmir/dams/uri/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Uri Dam',
    credit: 'Unsplash',
    alt_text: 'Uri Dam',
    uploaded_at: new Date()
  },
  icon_type: 'dam',
  created_at: new Date(),
  tabs: {
    size: 'Medium-sized hydroelectric dam in Kashmir Valley',
    rivers_associated: ['Jhelum River'],
    facts_tourists: 'Hydropower project, important for electricity generation',
    how_to_reach: 'Accessible by road from Srinagar'
  }
};

export default [bagliharData, uriData];

