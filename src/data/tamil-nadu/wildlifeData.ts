// Tamil Nadu Wildlife Data
// Wildlife sanctuaries and national parks

import { KarnatakaPOI } from '../../types/database';

// Mudumalai National Park
export const mudumalaiData: KarnatakaPOI = {
  id: 'mudumalai_tamil_nadu',
  name: 'Mudumalai National Park',
  category: 'wildlife',
  coordinates: { lat: 11.6000, lng: 76.5000 },
  description: 'Famous wildlife sanctuary known for its tiger population and diverse wildlife.',
  icon_color: '#FF8C00',
  tabs: {
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'Tiger Reserve',
          description: 'Mudumalai is part of the Nilgiri Biosphere Reserve and is a Project Tiger reserve.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/tiger-reserve.jpg',
          links: [
            { title: 'Tiger Population', url: 'https://www.tamilnadutourism.tn.gov.in/tiger-population' },
            { title: 'Conservation Programs', url: 'https://www.tamilnadutourism.tn.gov.in/conservation-programs' }
          ]
        },
        {
          title: 'Biodiversity',
          description: 'Rich biodiversity with over 200 species of birds and numerous mammal species.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/biodiversity.jpg',
          links: [
            { title: 'Species List', url: 'https://www.tamilnadutourism.tn.gov.in/species-list' },
            { title: 'Research Studies', url: 'https://www.tamilnadutourism.tn.gov.in/research-studies' }
          ]
        },
        {
          title: 'Ecosystem',
          description: 'Diverse ecosystem including tropical dry forests and grasslands.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/ecosystem.jpg',
          links: [
            { title: 'Ecosystem Types', url: 'https://www.tamilnadutourism.tn.gov.in/ecosystem-types' },
            { title: 'Ecological Studies', url: 'https://www.tamilnadutourism.tn.gov.in/ecological-studies' }
          ]
        }
      ]
    },
    visiting: {
      title: 'Visiting',
      content: [
        {
          title: 'Safari Options',
          description: 'Various safari options including jeep safaris and elephant rides.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/safari-options.jpg',
          links: [
            { title: 'Safari Booking', url: 'https://www.tamilnadutourism.tn.gov.in/safari-booking' },
            { title: 'Safari Timings', url: 'https://www.tamilnadutourism.tn.gov.in/safari-timings' }
          ]
        },
        {
          title: 'Best Time to Visit',
          description: 'Best time to visit is from October to May when wildlife is most active.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/best-time.jpg',
          links: [
            { title: 'Seasonal Guide', url: 'https://www.tamilnadutourism.tn.gov.in/seasonal-guide' },
            { title: 'Weather Information', url: 'https://www.tamilnadutourism.tn.gov.in/weather-information' }
          ]
        },
        {
          title: 'Accommodation',
          description: 'Various accommodation options from forest lodges to luxury resorts.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/accommodation.jpg',
          links: [
            { title: 'Lodge Booking', url: 'https://www.tamilnadutourism.tn.gov.in/lodge-booking' },
            { title: 'Resort Options', url: 'https://www.tamilnadutourism.tn.gov.in/resort-options' }
          ]
        }
      ]
    },
    animals_found: {
      title: 'Animals Found',
      content: [
        {
          title: 'Big Cats',
          description: 'Home to tigers, leopards, and other big cat species.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/big-cats.jpg',
          links: [
            { title: 'Tiger Spotting', url: 'https://www.tamilnadutourism.tn.gov.in/tiger-spotting' },
            { title: 'Leopard Sightings', url: 'https://www.tamilnadutourism.tn.gov.in/leopard-sightings' }
          ]
        },
        {
          title: 'Herbivores',
          description: 'Large population of elephants, deer, and other herbivorous animals.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/herbivores.jpg',
          links: [
            { title: 'Elephant Herds', url: 'https://www.tamilnadutourism.tn.gov.in/elephant-herds' },
            { title: 'Deer Species', url: 'https://www.tamilnadutourism.tn.gov.in/deer-species' }
          ]
        },
        {
          title: 'Bird Species',
          description: 'Over 200 species of birds including migratory and resident species.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/bird-species.jpg',
          links: [
            { title: 'Bird Watching', url: 'https://www.tamilnadutourism.tn.gov.in/bird-watching' },
            { title: 'Bird Checklist', url: 'https://www.tamilnadutourism.tn.gov.in/bird-checklist' }
          ]
        }
      ]
    }
  }
};

// Anamalai Tiger Reserve
export const anamalaiData: KarnatakaPOI = {
  id: 'anamalai_tamil_nadu',
  name: 'Anamalai Tiger Reserve',
  category: 'wildlife',
  coordinates: { lat: 10.3000, lng: 77.1000 },
  description: 'Important tiger reserve in the Western Ghats, known for its conservation efforts.',
  icon_color: '#FF8C00',
  tabs: {
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'Tiger Conservation',
          description: 'Anamalai Tiger Reserve is dedicated to tiger conservation and habitat protection.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/tiger-conservation.jpg',
          links: [
            { title: 'Conservation Programs', url: 'https://www.tamilnadutourism.tn.gov.in/conservation-programs' },
            { title: 'Tiger Monitoring', url: 'https://www.tamilnadutourism.tn.gov.in/tiger-monitoring' }
          ]
        },
        {
          title: 'Forest Types',
          description: 'Diverse forest types including tropical evergreen and semi-evergreen forests.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/forest-types.jpg',
          links: [
            { title: 'Forest Classification', url: 'https://www.tamilnadutourism.tn.gov.in/forest-classification' },
            { title: 'Vegetation Study', url: 'https://www.tamilnadutourism.tn.gov.in/vegetation-study' }
          ]
        }
      ]
    },
    visiting: {
      title: 'Visiting',
      content: [
        {
          title: 'Entry Permits',
          description: 'Entry permits required for visiting the tiger reserve.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/entry-permits.jpg',
          links: [
            { title: 'Permit Booking', url: 'https://www.tamilnadutourism.tn.gov.in/permit-booking' },
            { title: 'Entry Rules', url: 'https://www.tamilnadutourism.tn.gov.in/entry-rules' }
          ]
        },
        {
          title: 'Safari Experience',
          description: 'Guided safari experiences to explore the wildlife and natural beauty.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/safari-experience.jpg',
          links: [
            { title: 'Safari Packages', url: 'https://www.tamilnadutourism.tn.gov.in/safari-packages' },
            { title: 'Wildlife Photography', url: 'https://www.tamilnadutourism.tn.gov.in/wildlife-photography' }
          ]
        }
      ]
    },
    animals_found: {
      title: 'Animals Found',
      content: [
        {
          title: 'Tiger Population',
          description: 'Significant tiger population with regular sightings reported.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/tiger-population.jpg',
          links: [
            { title: 'Tiger Census', url: 'https://www.tamilnadutourism.tn.gov.in/tiger-census' },
            { title: 'Sighting Reports', url: 'https://www.tamilnadutourism.tn.gov.in/sighting-reports' }
          ]
        },
        {
          title: 'Other Wildlife',
          description: 'Diverse wildlife including elephants, gaur, and various bird species.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/other-wildlife.jpg',
          links: [
            { title: 'Wildlife List', url: 'https://www.tamilnadutourism.tn.gov.in/wildlife-list' },
            { title: 'Endangered Species', url: 'https://www.tamilnadutourism.tn.gov.in/endangered-species' }
          ]
        }
      ]
    }
  }
};

// Kalakkad Mundanthurai Tiger Reserve
export const kalakkadData: KarnatakaPOI = {
  id: 'kalakkad_tamil_nadu',
  name: 'Kalakkad Mundanthurai Tiger Reserve',
  category: 'wildlife',
  coordinates: { lat: 8.5000, lng: 77.3000 },
  description: 'Tiger reserve in the southern Western Ghats, known for its unique ecosystem.',
  icon_color: '#FF8C00',
  tabs: {
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'Unique Ecosystem',
          description: 'The reserve protects a unique ecosystem with high endemism.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/unique-ecosystem.jpg',
          links: [
            { title: 'Ecosystem Study', url: 'https://www.tamilnadutourism.tn.gov.in/ecosystem-study' },
            { title: 'Endemic Species', url: 'https://www.tamilnadutourism.tn.gov.in/endemic-species' }
          ]
        },
        {
          title: 'Conservation Status',
          description: 'Important conservation area for several endangered species.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/conservation-status.jpg',
          links: [
            { title: 'Conservation Projects', url: 'https://www.tamilnadutourism.tn.gov.in/conservation-projects' },
            { title: 'Research Programs', url: 'https://www.tamilnadutourism.tn.gov.in/research-programs' }
          ]
        }
      ]
    },
    visiting: {
      title: 'Visiting',
      content: [
        {
          title: 'Visitor Guidelines',
          description: 'Strict visitor guidelines to ensure wildlife protection.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/visitor-guidelines.jpg',
          links: [
            { title: 'Guidelines', url: 'https://www.tamilnadutourism.tn.gov.in/guidelines' },
            { title: 'Safety Measures', url: 'https://www.tamilnadutourism.tn.gov.in/safety-measures' }
          ]
        }
      ]
    },
    animals_found: {
      title: 'Animals Found',
      content: [
        {
          title: 'Tiger Conservation',
          description: 'Important tiger habitat with conservation programs in place.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/tiger-conservation.jpg',
          links: [
            { title: 'Tiger Protection', url: 'https://www.tamilnadutourism.tn.gov.in/tiger-protection' },
            { title: 'Habitat Management', url: 'https://www.tamilnadutourism.tn.gov.in/habitat-management' }
          ]
        }
      ]
    }
  }
};

// Sathyamangalam Wildlife Sanctuary
export const sathyamangalamData: KarnatakaPOI = {
  id: 'sathyamangalam_tamil_nadu',
  name: 'Sathyamangalam Wildlife Sanctuary',
  category: 'wildlife',
  coordinates: { lat: 11.5167, lng: 77.2500 },
  description: 'Wildlife sanctuary known for its elephant population and tiger conservation.',
  icon_color: '#FF8C00',
  tabs: {
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'Elephant Corridor',
          description: 'Important elephant corridor connecting various forest areas.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/elephant-corridor.jpg',
          links: [
            { title: 'Corridor Map', url: 'https://www.tamilnadutourism.tn.gov.in/corridor-map' },
            { title: 'Elephant Movement', url: 'https://www.tamilnadutourism.tn.gov.in/elephant-movement' }
          ]
        },
        {
          title: 'Tiger Reserve Status',
          description: 'Recently declared as a tiger reserve for better conservation.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/tiger-reserve-status.jpg',
          links: [
            { title: 'Reserve Declaration', url: 'https://www.tamilnadutourism.tn.gov.in/reserve-declaration' },
            { title: 'Conservation Plans', url: 'https://www.tamilnadutourism.tn.gov.in/conservation-plans' }
          ]
        }
      ]
    },
    visiting: {
      title: 'Visiting',
      content: [
        {
          title: 'Safari Tours',
          description: 'Guided safari tours to explore the wildlife and natural beauty.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/safari-tours.jpg',
          links: [
            { title: 'Tour Booking', url: 'https://www.tamilnadutourism.tn.gov.in/tour-booking' },
            { title: 'Tour Packages', url: 'https://www.tamilnadutourism.tn.gov.in/tour-packages' }
          ]
        }
      ]
    },
    animals_found: {
      title: 'Animals Found',
      content: [
        {
          title: 'Elephant Population',
          description: 'Large population of Asian elephants in the sanctuary.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/elephant-population.jpg',
          links: [
            { title: 'Elephant Census', url: 'https://www.tamilnadutourism.tn.gov.in/elephant-census' },
            { title: 'Elephant Behavior', url: 'https://www.tamilnadutourism.tn.gov.in/elephant-behavior' }
          ]
        },
        {
          title: 'Tiger Sightings',
          description: 'Regular tiger sightings reported in the sanctuary.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/tiger-sightings.jpg',
          links: [
            { title: 'Sighting Records', url: 'https://www.tamilnadutourism.tn.gov.in/sighting-records' },
            { title: 'Tiger Tracking', url: 'https://www.tamilnadutourism.tn.gov.in/tiger-tracking' }
          ]
        }
      ]
    }
  }
};

export default [mudumalaiData, anamalaiData, kalakkadData, sathyamangalamData];
