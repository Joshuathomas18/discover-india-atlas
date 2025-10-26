// Dadra and Nagar Haveli and Daman and Diu Dams Data
import { KarnatakaPOI } from '../../types/database';

export const damangangaDamData: KarnatakaPOI = {
  id: 'damanganga_dam_dnh_dd',
  name: 'Damanganga Dam',
  category: 'dam',
  coordinates: { lat: 20.2737, lng: 73.0135 },
  description: 'Dam on Damanganga river.',
  banner_image: {
    storage_path: 'dadra-nagar-haveli-daman-diu/dams/damanganga/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Damanganga Dam',
    credit: 'Unsplash',
    alt_text: 'Damanganga Dam',
    uploaded_at: new Date()
  },
  icon_type: 'dam',
  created_at: new Date(),
  tabs: {
    size: 'Medium-sized dam on Damanganga river',
    rivers_associated: ['Damanganga River'],
    facts_tourists: 'Water management and irrigation structure',
    how_to_reach: 'Accessible by road from Silvassa'
  }
};

export const madhubanDamData: KarnatakaPOI = {
  id: 'madhuban_dam_dnh_dd',
  name: 'Madhuban Dam',
  category: 'dam',
  coordinates: { lat: 20.2737, lng: 73.0135 },
  description: 'Dam near Silvassa.',
  banner_image: {
    storage_path: 'dadra-nagar-haveli-daman-diu/dams/madhuban/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Madhuban Dam',
    credit: 'Unsplash',
    alt_text: 'Madhuban Dam',
    uploaded_at: new Date()
  },
  icon_type: 'dam',
  created_at: new Date(),
  tabs: {
    size: 'Small dam near Silvassa',
    rivers_associated: ['Local streams'],
    facts_tourists: 'Water supply structure for local area',
    how_to_reach: 'Accessible by road from Silvassa'
  }
};

export default [damangangaDamData, madhubanDamData];

