// Puducherry Dams Data
import { KarnatakaPOI } from '../../types/database';

export const gingeeDamData: KarnatakaPOI = {
  id: 'gingee_dam_puducherry',
  name: 'Gingee Dam',
  category: 'dam',
  coordinates: { lat: 12.2500, lng: 79.4167 },
  description: 'Dam near Gingee.',
  banner_image: {
    storage_path: 'puducherry/dams/gingee/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Gingee Dam',
    credit: 'Unsplash',
    alt_text: 'Gingee Dam',
    uploaded_at: new Date()
  },
  icon_type: 'dam',
  created_at: new Date(),
  tabs: {
    size: 'Medium-sized dam near Gingee',
    rivers_associated: ['Local streams'],
    facts_tourists: 'Water management and irrigation structure',
    how_to_reach: 'Accessible by road from Gingee'
  }
};

export const pennaiyarDamData: KarnatakaPOI = {
  id: 'pennaiyar_dam_puducherry',
  name: 'Pennaiyar Dam',
  category: 'dam',
  coordinates: { lat: 11.9416, lng: 79.8083 },
  description: 'Dam on Pennaiyar river.',
  banner_image: {
    storage_path: 'puducherry/dams/pennaiyar/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Pennaiyar Dam',
    credit: 'Unsplash',
    alt_text: 'Pennaiyar Dam',
    uploaded_at: new Date()
  },
  icon_type: 'dam',
  created_at: new Date(),
  tabs: {
    size: 'Medium-sized dam on Pennaiyar river',
    rivers_associated: ['Pennaiyar River'],
    facts_tourists: 'Water management and irrigation structure',
    how_to_reach: 'Accessible by road from Puducherry region'
  }
};

export default [gingeeDamData, pennaiyarDamData];

