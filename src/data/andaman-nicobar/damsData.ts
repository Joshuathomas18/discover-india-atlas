// Andaman and Nicobar Islands Dams Data
import { KarnatakaPOI } from '../../types/database';

export const diglipurDamData: KarnatakaPOI = {
  id: 'diglipur_dam_andaman',
  name: 'Diglipur Dam',
  category: 'dam',
  coordinates: { lat: 13.2500, lng: 93.0000 },
  description: 'Dam near Diglipur for water management.',
  banner_image: {
    storage_path: 'andaman-nicobar/dams/diglipur/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Diglipur Dam',
    credit: 'Unsplash',
    alt_text: 'Diglipur Dam',
    uploaded_at: new Date()
  },
  icon_type: 'dam',
  created_at: new Date(),
  tabs: {
    size: 'Small dam near Diglipur',
    rivers_associated: ['Local streams'],
    facts_tourists: 'Water management structure for local area',
    how_to_reach: 'Accessible by road from Diglipur'
  }
};

export const portBlairDamData: KarnatakaPOI = {
  id: 'port_blair_dam_andaman',
  name: 'Port Blair Dam',
  category: 'dam',
  coordinates: { lat: 11.6667, lng: 92.7500 },
  description: 'Dam near Port Blair for water supply.',
  banner_image: {
    storage_path: 'andaman-nicobar/dams/port-blair/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Port Blair Dam',
    credit: 'Unsplash',
    alt_text: 'Port Blair Dam',
    uploaded_at: new Date()
  },
  icon_type: 'dam',
  created_at: new Date(),
  tabs: {
    size: 'Medium-sized dam near Port Blair',
    rivers_associated: ['Local streams'],
    facts_tourists: 'Water supply structure for capital city',
    how_to_reach: 'Accessible by road from Port Blair'
  }
};

export default [diglipurDamData, portBlairDamData];

