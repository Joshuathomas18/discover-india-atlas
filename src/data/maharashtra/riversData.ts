// Maharashtra Rivers Data
// Major rivers with detailed information

import { KarnatakaPOI } from '../../types/database';

// Godavari River
export const godavariData: KarnatakaPOI = {
  id: 'godavari_maharashtra',
  name: 'Godavari River',
  category: 'river',
  coordinates: { lat: 19.9252, lng: 73.7898 },
  description: 'Second longest river in India, flowing through Maharashtra and known as the "Ganga of the South".',
  icon_color: '#4ECDC4',
  tabs: {
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'River Length',
          description: 'The Godavari River is approximately 1,465 km long, making it the second longest river in India.',
          image_url: 'https://www.maharashtratourism.gov.in/godavari-length.jpg',
          links: [
            { title: 'River Course Map', url: 'https://www.maharashtratourism.gov.in/river-course' },
            { title: 'Geographic Details', url: 'https://www.maharashtratourism.gov.in/geographic-details' }
          ]
        },
        {
          title: 'Religious Significance',
          description: 'Considered sacred by Hindus, the river is worshipped as Goddess Godavari.',
          image_url: 'https://www.maharashtratourism.gov.in/religious-significance.jpg',
          links: [
            { title: 'Religious Ceremonies', url: 'https://www.maharashtratourism.gov.in/religious-ceremonies' },
            { title: 'Pilgrimage Sites', url: 'https://www.maharashtratourism.gov.in/pilgrimage-sites' }
          ]
        },
        {
          title: 'Water Resources',
          description: 'Important source of water for irrigation, drinking, and industrial purposes.',
          image_url: 'https://www.maharashtratourism.gov.in/water-resources.jpg',
          links: [
            { title: 'Irrigation Projects', url: 'https://www.maharashtratourism.gov.in/irrigation-projects' },
            { title: 'Water Management', url: 'https://www.maharashtratourism.gov.in/water-management' }
          ]
        }
      ]
    },
    fishes_found: {
      title: 'Fishes Found',
      content: [
        {
          title: 'Fish Species',
          description: 'The Godavari River supports various fish species including carp, catfish, and prawns.',
          image_url: 'https://www.maharashtratourism.gov.in/fish-species.jpg',
          links: [
            { title: 'Species List', url: 'https://www.maharashtratourism.gov.in/species-list' },
            { title: 'Conservation Efforts', url: 'https://www.maharashtratourism.gov.in/conservation-efforts' }
          ]
        },
        {
          title: 'Fishing Communities',
          description: 'Traditional fishing communities depend on the Godavari for their livelihood.',
          image_url: 'https://www.maharashtratourism.gov.in/fishing-communities.jpg',
          links: [
            { title: 'Community Profiles', url: 'https://www.maharashtratourism.gov.in/community-profiles' },
            { title: 'Traditional Methods', url: 'https://www.maharashtratourism.gov.in/traditional-methods' }
          ]
        },
        {
          title: 'Aquatic Biodiversity',
          description: 'Rich aquatic biodiversity including fish, crustaceans, and aquatic plants.',
          image_url: 'https://www.maharashtratourism.gov.in/aquatic-biodiversity.jpg',
          links: [
            { title: 'Biodiversity Survey', url: 'https://www.maharashtratourism.gov.in/biodiversity-survey' },
            { title: 'Ecological Studies', url: 'https://www.maharashtratourism.gov.in/ecological-studies' }
          ]
        }
      ]
    },
    how_to_get_there: {
      title: 'How to Get There',
      content: [
        {
          title: 'By Road',
          description: 'The Godavari River can be accessed via multiple road routes from major cities in Maharashtra.',
          image_url: 'https://www.maharashtratourism.gov.in/road-access.jpg',
          links: [
            { title: 'Route Maps', url: 'https://www.maharashtratourism.gov.in/route-maps' },
            { title: 'Travel Time', url: 'https://www.maharashtratourism.gov.in/travel-time' }
          ]
        },
        {
          title: 'By Train',
          description: 'Several railway stations are located near the Godavari River for easy access.',
          image_url: 'https://www.maharashtratourism.gov.in/train-access.jpg',
          links: [
            { title: 'Train Schedules', url: 'https://www.maharashtratourism.gov.in/train-schedules' },
            { title: 'Station Information', url: 'https://www.maharashtratourism.gov.in/station-info' }
          ]
        },
        {
          title: 'River Cruises',
          description: 'Boat cruises are available on certain stretches of the Godavari River.',
          image_url: 'https://www.maharashtratourism.gov.in/river-cruises.jpg',
          links: [
            { title: 'Cruise Booking', url: 'https://www.maharashtratourism.gov.in/cruise-booking' },
            { title: 'Cruise Routes', url: 'https://www.maharashtratourism.gov.in/cruise-routes' }
          ]
        }
      ]
    }
  }
};

// Krishna River
export const krishnaData: KarnatakaPOI = {
  id: 'krishna_maharashtra',
  name: 'Krishna River',
  category: 'river',
  coordinates: { lat: 17.6599, lng: 75.9064 },
  description: 'Major river flowing through Maharashtra, known for its cultural and religious significance.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'River Course',
          description: 'The Krishna River flows through Maharashtra, Karnataka, and Andhra Pradesh.',
          image_url: 'https://www.maharashtratourism.gov.in/krishna-course.jpg',
          links: [
            { title: 'River Basin Map', url: 'https://www.maharashtratourism.gov.in/river-basin' },
            { title: 'Tributaries', url: 'https://www.maharashtratourism.gov.in/tributaries' }
          ]
        },
        {
          title: 'Cultural Importance',
          description: 'The river has great cultural significance in Hindu mythology and traditions.',
          image_url: 'https://www.maharashtratourism.gov.in/cultural-importance.jpg',
          links: [
            { title: 'Mythological References', url: 'https://www.maharashtratourism.gov.in/mythological-references' },
            { title: 'Cultural Practices', url: 'https://www.maharashtratourism.gov.in/cultural-practices' }
          ]
        },
        {
          title: 'Water Resources',
          description: 'Important source of water for irrigation and hydroelectric power generation.',
          image_url: 'https://www.maharashtratourism.gov.in/water-resources.jpg',
          links: [
            { title: 'Irrigation Projects', url: 'https://www.maharashtratourism.gov.in/irrigation-projects' },
            { title: 'Hydroelectric Projects', url: 'https://www.maharashtratourism.gov.in/hydroelectric-projects' }
          ]
        }
      ]
    },
    fishes_found: {
      title: 'Fishes Found',
      content: [
        {
          title: 'Local Fish Species',
          description: 'The Krishna River supports various local fish species adapted to its conditions.',
          image_url: 'https://www.maharashtratourism.gov.in/local-fish.jpg',
          links: [
            { title: 'Fish Species Guide', url: 'https://www.maharashtratourism.gov.in/fish-guide' },
            { title: 'Fishing Regulations', url: 'https://www.maharashtratourism.gov.in/fishing-regulations' }
          ]
        },
        {
          title: 'Fishing Communities',
          description: 'Traditional fishing communities depend on the Krishna River for their livelihood.',
          image_url: 'https://www.maharashtratourism.gov.in/fishing-communities.jpg',
          links: [
            { title: 'Community Profiles', url: 'https://www.maharashtratourism.gov.in/community-profiles' },
            { title: 'Traditional Methods', url: 'https://www.maharashtratourism.gov.in/traditional-methods' }
          ]
        }
      ]
    },
    how_to_get_there: {
      title: 'How to Get There',
      content: [
        {
          title: 'From Major Cities',
          description: 'The Krishna River can be accessed from various cities in Maharashtra.',
          image_url: 'https://www.maharashtratourism.gov.in/city-access.jpg',
          links: [
            { title: 'Access Points', url: 'https://www.maharashtratourism.gov.in/access-points' },
            { title: 'Transportation', url: 'https://www.maharashtratourism.gov.in/transportation' }
          ]
        },
        {
          title: 'River Banks',
          description: 'Several accessible points along the river banks for visitors and tourists.',
          image_url: 'https://www.maharashtratourism.gov.in/river-banks.jpg',
          links: [
            { title: 'Viewing Points', url: 'https://www.maharashtratourism.gov.in/viewing-points' },
            { title: 'Safety Guidelines', url: 'https://www.maharashtratourism.gov.in/safety-guidelines' }
          ]
        }
      ]
    }
  }
};

// Tapi River
export const tapiData: KarnatakaPOI = {
  id: 'tapi_maharashtra',
  name: 'Tapi River',
  category: 'river',
  coordinates: { lat: 21.0077, lng: 75.5626 },
  description: 'Important river flowing through Maharashtra, known for its scenic beauty and cultural significance.',
  icon_color: '#4ECDC4',
  tabs: {
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'River Characteristics',
          description: 'The Tapi River flows through Maharashtra and Gujarat, known for its seasonal flow.',
          image_url: 'https://www.maharashtratourism.gov.in/tapi-characteristics.jpg',
          links: [
            { title: 'River Profile', url: 'https://www.maharashtratourism.gov.in/river-profile' },
            { title: 'Seasonal Variations', url: 'https://www.maharashtratourism.gov.in/seasonal-variations' }
          ]
        },
        {
          title: 'Cultural Significance',
          description: 'The river holds cultural and religious significance in local traditions.',
          image_url: 'https://www.maharashtratourism.gov.in/cultural-significance.jpg',
          links: [
            { title: 'Religious Festivals', url: 'https://www.maharashtratourism.gov.in/religious-festivals' },
            { title: 'Cultural Practices', url: 'https://www.maharashtratourism.gov.in/cultural-practices' }
          ]
        }
      ]
    },
    fishes_found: {
      title: 'Fishes Found',
      content: [
        {
          title: 'Freshwater Fish',
          description: 'The Tapi River supports various freshwater fish species.',
          image_url: 'https://www.maharashtratourism.gov.in/freshwater-fish.jpg',
          links: [
            { title: 'Fish Diversity', url: 'https://www.maharashtratourism.gov.in/fish-diversity' },
            { title: 'Conservation Status', url: 'https://www.maharashtratourism.gov.in/conservation-status' }
          ]
        }
      ]
    },
    how_to_get_there: {
      title: 'How to Get There',
      content: [
        {
          title: 'Access Routes',
          description: 'The Tapi River can be accessed from various cities in Maharashtra.',
          image_url: 'https://www.maharashtratourism.gov.in/access-routes.jpg',
          links: [
            { title: 'Route Information', url: 'https://www.maharashtratourism.gov.in/route-information' },
            { title: 'Transportation Options', url: 'https://www.maharashtratourism.gov.in/transportation-options' }
          ]
        }
      ]
    }
  }
};

export default [godavariData, krishnaData, tapiData];
