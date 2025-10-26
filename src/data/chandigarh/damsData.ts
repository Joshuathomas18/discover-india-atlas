// Chandigarh Dams Data
import { KarnatakaPOI } from '../../types/database';

export const sukhnaDamData: KarnatakaPOI = {
  id: 'sukhna_dam_chandigarh',
  name: 'Sukhna Dam',
  category: 'dam',
  coordinates: { lat: 30.7333, lng: 76.7794 },
  description: 'Dam creating Sukhna Lake in Chandigarh.',
  banner_image: {
    storage_path: 'chandigarh/dams/sukhna/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Sukhna Dam',
    credit: 'Unsplash',
    alt_text: 'Sukhna Dam',
    uploaded_at: new Date()
  },
  icon_type: 'dam',
  created_at: new Date(),
  tabs: {
    size: 'Medium-sized dam creating Sukhna Lake',
    rivers_associated: ['Local streams'],
    facts_tourists: 'Popular tourist spot, water management',
    how_to_reach: 'Located in Chandigarh, easily accessible'
  }
};

export const ghaggarDamData: KarnatakaPOI = {
  id: 'ghaggar_dam_chandigarh',
  name: 'Ghaggar Dam',
  category: 'dam',
  coordinates: { lat: 30.7333, lng: 76.7794 },
  description: 'Dam on Ghaggar river.',
  banner_image: {
    storage_path: 'chandigarh/dams/ghaggar/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Ghaggar Dam',
    credit: 'Unsplash',
    alt_text: 'Ghaggar Dam',
    uploaded_at: new Date()
  },
  icon_type: 'dam',
  created_at: new Date(),
  tabs: {
    size: 'Medium-sized dam on Ghaggar river',
    rivers_associated: ['Ghaggar River'],
    facts_tourists: 'Water management and irrigation structure',
    how_to_reach: 'Accessible by road from Chandigarh region'
  }
};

export default [sukhnaDamData, ghaggarDamData];

