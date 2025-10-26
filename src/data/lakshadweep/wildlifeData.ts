// Lakshadweep Wildlife Data
import { KarnatakaPOI } from '../../types/database';

export const marineWildlifeData: KarnatakaPOI = {
  id: 'marine_wildlife_lakshadweep',
  name: 'Marine Wildlife',
  category: 'wildlife',
  coordinates: { lat: 10.5667, lng: 72.6167 },
  description: 'Marine wildlife sanctuary around Lakshadweep.',
  banner_image: {
    storage_path: 'lakshadweep/wildlife/marine/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Marine Wildlife',
    credit: 'Unsplash',
    alt_text: 'Marine wildlife sanctuary',
    uploaded_at: new Date()
  },
  icon_type: 'fish',
  created_at: new Date(),
  tabs: {
    facts: 'Marine wildlife sanctuary around Lakshadweep, important ecological zone',
    visiting_info: 'Open for visitors, snorkeling and diving available',
    animals_found: ['Coral fish', 'Marine turtles', 'Dolphins', 'Whales']
  }
};

export const coralWildlifeData: KarnatakaPOI = {
  id: 'coral_wildlife_lakshadweep',
  name: 'Coral Wildlife',
  category: 'wildlife',
  coordinates: { lat: 10.8333, lng: 72.1833 },
  description: 'Coral reef wildlife sanctuary.',
  banner_image: {
    storage_path: 'lakshadweep/wildlife/coral/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Coral Wildlife',
    credit: 'Unsplash',
    alt_text: 'Coral reef wildlife',
    uploaded_at: new Date()
  },
  icon_type: 'fish',
  created_at: new Date(),
  tabs: {
    facts: 'Coral reef wildlife sanctuary, important marine ecosystem',
    visiting_info: 'Open for visitors, coral reef exploration available',
    animals_found: ['Coral fish', 'Reef species', 'Marine invertebrates']
  }
};

export const birdSanctuaryData: KarnatakaPOI = {
  id: 'bird_sanctuary_lakshadweep',
  name: 'Bird Sanctuary',
  category: 'wildlife',
  coordinates: { lat: 10.9333, lng: 72.2833 },
  description: 'Bird sanctuary on Lakshadweep islands.',
  banner_image: {
    storage_path: 'lakshadweep/wildlife/bird/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Bird Sanctuary',
    credit: 'Unsplash',
    alt_text: 'Bird sanctuary on islands',
    uploaded_at: new Date()
  },
  icon_type: 'bird',
  created_at: new Date(),
  tabs: {
    facts: 'Bird sanctuary on Lakshadweep islands, important for migratory birds',
    visiting_info: 'Open for visitors, bird watching available',
    animals_found: ['Seabirds', 'Migratory birds', 'Local bird species']
  }
};

export const turtleSanctuaryData: KarnatakaPOI = {
  id: 'turtle_sanctuary_lakshadweep',
  name: 'Turtle Sanctuary',
  category: 'wildlife',
  coordinates: { lat: 8.2833, lng: 73.0500 },
  description: 'Turtle sanctuary on Lakshadweep islands.',
  banner_image: {
    storage_path: 'lakshadweep/wildlife/turtle/banner.jpg',
    download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
    caption: 'Turtle Sanctuary',
    credit: 'Unsplash',
    alt_text: 'Turtle sanctuary on islands',
    uploaded_at: new Date()
  },
  icon_type: 'turtle',
  created_at: new Date(),
  tabs: {
    facts: 'Turtle sanctuary on Lakshadweep islands, important for marine turtles',
    visiting_info: 'Open for visitors, turtle watching available',
    animals_found: ['Green turtles', 'Hawksbill turtles', 'Loggerhead turtles']
  }
};

export default [marineWildlifeData, coralWildlifeData, birdSanctuaryData, turtleSanctuaryData];

