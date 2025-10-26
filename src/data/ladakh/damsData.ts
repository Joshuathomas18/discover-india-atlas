// Ladakh Dams Data
import { KarnatakaPOI } from '../../types/database';

export const indusDamData: KarnatakaPOI = {
  id: 'indus_dam_ladakh',
  name: 'Indus Dam',
  category: 'dam',
  coordinates: { lat: 34.1526, lng: 77.5771 },
  description: 'Dam on Indus river.',
  banner_image: {
    storage_path: 'ladakh/dams/indus/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Indus Dam',
    credit: 'Unsplash',
    alt_text: 'Indus Dam',
    uploaded_at: new Date()
  },
  icon_type: 'dam',
  created_at: new Date(),
  tabs: {
    size: 'Medium-sized dam on Indus river',
    rivers_associated: ['Indus River'],
    facts_tourists: 'Water management and irrigation structure',
    how_to_reach: 'Accessible by road from Leh'
  }
};

export const zangskarDamData: KarnatakaPOI = {
  id: 'zanskar_dam_ladakh',
  name: 'Zanskar Dam',
  category: 'dam',
  coordinates: { lat: 33.5000, lng: 76.9000 },
  description: 'Dam on Zanskar river.',
  banner_image: {
    storage_path: 'ladakh/dams/zanskar/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Zanskar Dam',
    credit: 'Unsplash',
    alt_text: 'Zanskar Dam',
    uploaded_at: new Date()
  },
  icon_type: 'dam',
  created_at: new Date(),
  tabs: {
    size: 'Small dam on Zanskar river',
    rivers_associated: ['Zanskar River'],
    facts_tourists: 'Water management structure for local area',
    how_to_reach: 'Accessible by road from Zanskar Valley'
  }
};

export default [indusDamData, zangskarDamData];

