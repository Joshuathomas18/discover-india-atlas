// Lakshadweep Dams Data
import { KarnatakaPOI } from '../../types/database';

export const freshwaterDamData: KarnatakaPOI = {
  id: 'freshwater_dam_lakshadweep',
  name: 'Freshwater Dam',
  category: 'dam',
  coordinates: { lat: 10.5667, lng: 72.6167 },
  description: 'Freshwater collection dam on Lakshadweep islands.',
  banner_image: {
    storage_path: 'lakshadweep/dams/freshwater/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Freshwater Dam',
    credit: 'Unsplash',
    alt_text: 'Freshwater collection dam',
    uploaded_at: new Date()
  },
  icon_type: 'dam',
  created_at: new Date(),
  tabs: {
    size: 'Small freshwater collection dam on islands',
    rivers_associated: ['Rainwater collection'],
    facts_tourists: 'Important for freshwater supply on islands',
    how_to_reach: 'Accessible by boat from various islands'
  }
};

export const rainwaterDamData: KarnatakaPOI = {
  id: 'rainwater_dam_lakshadweep',
  name: 'Rainwater Dam',
  category: 'dam',
  coordinates: { lat: 10.8333, lng: 72.1833 },
  description: 'Rainwater collection dam on Lakshadweep islands.',
  banner_image: {
    storage_path: 'lakshadweep/dams/rainwater/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Rainwater Dam',
    credit: 'Unsplash',
    alt_text: 'Rainwater collection dam',
    uploaded_at: new Date()
  },
  icon_type: 'dam',
  created_at: new Date(),
  tabs: {
    size: 'Small rainwater collection dam on islands',
    rivers_associated: ['Rainwater collection'],
    facts_tourists: 'Essential for water management on islands',
    how_to_reach: 'Accessible by boat from various islands'
  }
};

export default [freshwaterDamData, rainwaterDamData];

