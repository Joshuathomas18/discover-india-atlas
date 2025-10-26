// Lakshadweep Rivers Data
import { KarnatakaPOI } from '../../types/database';

export const lagoonData: KarnatakaPOI = {
  id: 'lagoon_lakshadweep',
  name: 'Lagoon',
  category: 'river',
  coordinates: { lat: 10.5667, lng: 72.6167 },
  description: 'Lagoon waters around Lakshadweep islands.',
  banner_image: {
    storage_path: 'lakshadweep/rivers/lagoon/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Lagoon Waters',
    credit: 'Unsplash',
    alt_text: 'Lagoon waters around islands',
    uploaded_at: new Date()
  },
  icon_type: 'river',
  created_at: new Date(),
  tabs: {
    facts: 'Lagoon waters around Lakshadweep islands, important for marine life',
    fishes_found: ['Coral fish', 'Marine species', 'Aquatic life'],
    how_to_reach: 'Accessible by boat from various islands'
  }
};

export const coralReefData: KarnatakaPOI = {
  id: 'coral_reef_lakshadweep',
  name: 'Coral Reef',
  category: 'river',
  coordinates: { lat: 10.8333, lng: 72.1833 },
  description: 'Coral reef waters around Lakshadweep.',
  banner_image: {
    storage_path: 'lakshadweep/rivers/coral-reef/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Coral Reef Waters',
    credit: 'Unsplash',
    alt_text: 'Coral reef waters',
    uploaded_at: new Date()
  },
  icon_type: 'river',
  created_at: new Date(),
  tabs: {
    facts: 'Coral reef waters around Lakshadweep, important marine ecosystem',
    fishes_found: ['Coral fish', 'Reef species', 'Marine life'],
    how_to_reach: 'Accessible by boat, snorkeling and diving available'
  }
};

export const openSeaData: KarnatakaPOI = {
  id: 'open_sea_lakshadweep',
  name: 'Open Sea',
  category: 'river',
  coordinates: { lat: 10.9333, lng: 72.2833 },
  description: 'Open sea waters around Lakshadweep.',
  banner_image: {
    storage_path: 'lakshadweep/rivers/open-sea/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Open Sea Waters',
    credit: 'Unsplash',
    alt_text: 'Open sea waters',
    uploaded_at: new Date()
  },
  icon_type: 'river',
  created_at: new Date(),
  tabs: {
    facts: 'Open sea waters around Lakshadweep, important for fishing',
    fishes_found: ['Deep sea fish', 'Marine species', 'Oceanic life'],
    how_to_reach: 'Accessible by boat, fishing expeditions available'
  }
};

export default [lagoonData, coralReefData, openSeaData];

