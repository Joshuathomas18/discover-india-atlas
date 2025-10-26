// Uttar Pradesh Rivers Data
// Major rivers with detailed information

import { KarnatakaPOI } from '../../types/database';

// Ganges River
export const gangesData: KarnatakaPOI = {
  id: 'ganges_uttar_pradesh',
  name: 'Ganges River',
  category: 'river',
  coordinates: { lat: 25.3176, lng: 82.9739 },
  description: 'Sacred river of India, flowing through Uttar Pradesh and considered the holiest river by Hindus.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'River Length',
          description: 'The Ganges River is approximately 2,525 km long, flowing through India and Bangladesh.',
          image_url: 'https://www.uptourism.gov.in/ganges-length.jpg',
          links: [
            { title: 'River Course Map', url: 'https://www.uptourism.gov.in/river-course' },
            { title: 'Geographic Details', url: 'https://www.uptourism.gov.in/geographic-details' }
          ]
        },
        {
          title: 'Religious Significance',
          description: 'Considered the most sacred river by Hindus, worshipped as Goddess Ganga.',
          image_url: 'https://www.uptourism.gov.in/religious-significance.jpg',
          links: [
            { title: 'Religious Ceremonies', url: 'https://www.uptourism.gov.in/religious-ceremonies' },
            { title: 'Pilgrimage Sites', url: 'https://www.uptourism.gov.in/pilgrimage-sites' }
          ]
        },
        {
          title: 'Water Resources',
          description: 'Important source of water for irrigation, drinking, and industrial purposes.',
          image_url: 'https://www.uptourism.gov.in/water-resources.jpg',
          links: [
            { title: 'Irrigation Projects', url: 'https://www.uptourism.gov.in/irrigation-projects' },
            { title: 'Water Management', url: 'https://www.uptourism.gov.in/water-management' }
          ]
        }
      ]
    },
    fishes_found: {
      title: 'Fishes Found',
      content: [
        {
          title: 'Fish Species',
          description: 'The Ganges River supports various fish species including the endangered Ganges dolphin.',
          image_url: 'https://www.uptourism.gov.in/fish-species.jpg',
          links: [
            { title: 'Species List', url: 'https://www.uptourism.gov.in/species-list' },
            { title: 'Conservation Efforts', url: 'https://www.uptourism.gov.in/conservation-efforts' }
          ]
        },
        {
          title: 'Ganges Dolphin',
          description: 'Endangered freshwater dolphin found in the Ganges River.',
          image_url: 'https://www.uptourism.gov.in/ganges-dolphin.jpg',
          links: [
            { title: 'Dolphin Conservation', url: 'https://www.uptourism.gov.in/dolphin-conservation' },
            { title: 'Wildlife Protection', url: 'https://www.uptourism.gov.in/wildlife-protection' }
          ]
        },
        {
          title: 'Fishing Communities',
          description: 'Traditional fishing communities depend on the Ganges for their livelihood.',
          image_url: 'https://www.uptourism.gov.in/fishing-communities.jpg',
          links: [
            { title: 'Community Profiles', url: 'https://www.uptourism.gov.in/community-profiles' },
            { title: 'Traditional Methods', url: 'https://www.uptourism.gov.in/traditional-methods' }
          ]
        }
      ]
    },
    how_to_get_there: {
      title: 'How to Get There',
      content: [
        {
          title: 'By Road',
          description: 'The Ganges River can be accessed via multiple road routes from major cities in Uttar Pradesh.',
          image_url: 'https://www.uptourism.gov.in/road-access.jpg',
          links: [
            { title: 'Route Maps', url: 'https://www.uptourism.gov.in/route-maps' },
            { title: 'Travel Time', url: 'https://www.uptourism.gov.in/travel-time' }
          ]
        },
        {
          title: 'By Train',
          description: 'Several railway stations are located near the Ganges River for easy access.',
          image_url: 'https://www.uptourism.gov.in/train-access.jpg',
          links: [
            { title: 'Train Schedules', url: 'https://www.uptourism.gov.in/train-schedules' },
            { title: 'Station Information', url: 'https://www.uptourism.gov.in/station-info' }
          ]
        },
        {
          title: 'River Cruises',
          description: 'Boat cruises are available on certain stretches of the Ganges River.',
          image_url: 'https://www.uptourism.gov.in/river-cruises.jpg',
          links: [
            { title: 'Cruise Booking', url: 'https://www.uptourism.gov.in/cruise-booking' },
            { title: 'Cruise Routes', url: 'https://www.uptourism.gov.in/cruise-routes' }
          ]
        }
      ]
    }
  }
};

// Yamuna River
export const yamunaData: KarnatakaPOI = {
  id: 'yamuna_uttar_pradesh',
  name: 'Yamuna River',
  category: 'river',
  coordinates: { lat: 27.1767, lng: 78.0081 },
  description: 'Major tributary of the Ganges, flowing through Uttar Pradesh and Delhi.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'River Course',
          description: 'The Yamuna River flows through Delhi, Uttar Pradesh, and merges with the Ganges.',
          image_url: 'https://www.uptourism.gov.in/yamuna-course.jpg',
          links: [
            { title: 'River Basin Map', url: 'https://www.uptourism.gov.in/river-basin' },
            { title: 'Tributaries', url: 'https://www.uptourism.gov.in/tributaries' }
          ]
        },
        {
          title: 'Religious Importance',
          description: 'The river has great religious significance in Hindu mythology.',
          image_url: 'https://www.uptourism.gov.in/religious-importance.jpg',
          links: [
            { title: 'Mythological References', url: 'https://www.uptourism.gov.in/mythological-references' },
            { title: 'Religious Practices', url: 'https://www.uptourism.gov.in/religious-practices' }
          ]
        },
        {
          title: 'Water Resources',
          description: 'Important source of water for irrigation and drinking purposes.',
          image_url: 'https://www.uptourism.gov.in/water-resources.jpg',
          links: [
            { title: 'Irrigation Projects', url: 'https://www.uptourism.gov.in/irrigation-projects' },
            { title: 'Water Management', url: 'https://www.uptourism.gov.in/water-management' }
          ]
        }
      ]
    },
    fishes_found: {
      title: 'Fishes Found',
      content: [
        {
          title: 'Local Fish Species',
          description: 'The Yamuna River supports various local fish species adapted to its conditions.',
          image_url: 'https://www.uptourism.gov.in/local-fish.jpg',
          links: [
            { title: 'Fish Species Guide', url: 'https://www.uptourism.gov.in/fish-guide' },
            { title: 'Fishing Regulations', url: 'https://www.uptourism.gov.in/fishing-regulations' }
          ]
        },
        {
          title: 'Fishing Communities',
          description: 'Traditional fishing communities depend on the Yamuna River for their livelihood.',
          image_url: 'https://www.uptourism.gov.in/fishing-communities.jpg',
          links: [
            { title: 'Community Profiles', url: 'https://www.uptourism.gov.in/community-profiles' },
            { title: 'Traditional Methods', url: 'https://www.uptourism.gov.in/traditional-methods' }
          ]
        }
      ]
    },
    how_to_get_there: {
      title: 'How to Get There',
      content: [
        {
          title: 'From Major Cities',
          description: 'The Yamuna River can be accessed from various cities in Uttar Pradesh.',
          image_url: 'https://www.uptourism.gov.in/city-access.jpg',
          links: [
            { title: 'Access Points', url: 'https://www.uptourism.gov.in/access-points' },
            { title: 'Transportation', url: 'https://www.uptourism.gov.in/transportation' }
          ]
        },
        {
          title: 'River Banks',
          description: 'Several accessible points along the river banks for visitors and tourists.',
          image_url: 'https://www.uptourism.gov.in/river-banks.jpg',
          links: [
            { title: 'Viewing Points', url: 'https://www.uptourism.gov.in/viewing-points' },
            { title: 'Safety Guidelines', url: 'https://www.uptourism.gov.in/safety-guidelines' }
          ]
        }
      ]
    }
  }
};

// Gomti River
export const gomtiData: KarnatakaPOI = {
  id: 'gomti_uttar_pradesh',
  name: 'Gomti River',
  category: 'river',
  coordinates: { lat: 26.8467, lng: 80.9462 },
  description: 'Sacred river flowing through Lucknow, known for its religious significance.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'River Characteristics',
          description: 'The Gomti River flows through Lucknow and is considered sacred by Hindus.',
          image_url: 'https://www.uptourism.gov.in/gomti-characteristics.jpg',
          links: [
            { title: 'River Profile', url: 'https://www.uptourism.gov.in/river-profile' },
            { title: 'Religious Significance', url: 'https://www.uptourism.gov.in/religious-significance' }
          ]
        },
        {
          title: 'Cultural Significance',
          description: 'The river holds cultural and religious significance in local traditions.',
          image_url: 'https://www.uptourism.gov.in/cultural-significance.jpg',
          links: [
            { title: 'Religious Festivals', url: 'https://www.uptourism.gov.in/religious-festivals' },
            { title: 'Cultural Practices', url: 'https://www.uptourism.gov.in/cultural-practices' }
          ]
        }
      ]
    },
    fishes_found: {
      title: 'Fishes Found',
      content: [
        {
          title: 'Freshwater Fish',
          description: 'The Gomti River supports various freshwater fish species.',
          image_url: 'https://www.uptourism.gov.in/freshwater-fish.jpg',
          links: [
            { title: 'Fish Diversity', url: 'https://www.uptourism.gov.in/fish-diversity' },
            { title: 'Conservation Status', url: 'https://www.uptourism.gov.in/conservation-status' }
          ]
        }
      ]
    },
    how_to_get_there: {
      title: 'How to Get There',
      content: [
        {
          title: 'From Lucknow',
          description: 'The Gomti River flows through Lucknow city, easily accessible from the city center.',
          image_url: 'https://www.uptourism.gov.in/lucknow-access.jpg',
          links: [
            { title: 'City Routes', url: 'https://www.uptourism.gov.in/city-routes' },
            { title: 'Local Transport', url: 'https://www.uptourism.gov.in/local-transport' }
          ]
        },
        {
          title: 'River Ghats',
          description: 'Several ghats and bathing points along the river for visitors.',
          image_url: 'https://www.uptourism.gov.in/river-ghats.jpg',
          links: [
            { title: 'Ghat Locations', url: 'https://www.uptourism.gov.in/ghat-locations' },
            { title: 'Visitor Facilities', url: 'https://www.uptourism.gov.in/visitor-facilities' }
          ]
        }
      ]
    }
  }
};

export default [gangesData, yamunaData, gomtiData];
