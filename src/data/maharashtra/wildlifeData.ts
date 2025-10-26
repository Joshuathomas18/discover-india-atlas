// Maharashtra Wildlife Data
// Wildlife sanctuaries and national parks

import { KarnatakaPOI } from '../../types/database';

// Tadoba Andhari Tiger Reserve
export const tadobaData: KarnatakaPOI = {
  id: 'tadoba_maharashtra',
  name: 'Tadoba Andhari Tiger Reserve',
  category: 'wildlife',
  coordinates: { lat: 20.1667, lng: 79.4000 },
  description: 'Maharashtra\'s oldest and largest national park, known for its tiger population.',
  icon_color: '#FF8C00',
  tabs: {
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'Tiger Reserve',
          description: 'Tadoba Andhari Tiger Reserve is Maharashtra\'s oldest and largest national park.',
          image_url: 'https://www.maharashtratourism.gov.in/tiger-reserve.jpg',
          links: [
            { title: 'Tiger Population', url: 'https://www.maharashtratourism.gov.in/tiger-population' },
            { title: 'Conservation Programs', url: 'https://www.maharashtratourism.gov.in/conservation-programs' }
          ]
        },
        {
          title: 'Biodiversity',
          description: 'Rich biodiversity with over 200 species of birds and numerous mammal species.',
          image_url: 'https://www.maharashtratourism.gov.in/biodiversity.jpg',
          links: [
            { title: 'Species List', url: 'https://www.maharashtratourism.gov.in/species-list' },
            { title: 'Research Studies', url: 'https://www.maharashtratourism.gov.in/research-studies' }
          ]
        },
        {
          title: 'Ecosystem',
          description: 'Diverse ecosystem including tropical dry forests and grasslands.',
          image_url: 'https://www.maharashtratourism.gov.in/ecosystem.jpg',
          links: [
            { title: 'Ecosystem Types', url: 'https://www.maharashtratourism.gov.in/ecosystem-types' },
            { title: 'Ecological Studies', url: 'https://www.maharashtratourism.gov.in/ecological-studies' }
          ]
        }
      ]
    },
    visiting: {
      title: 'Visiting',
      content: [
        {
          title: 'Safari Options',
          description: 'Various safari options including jeep safaris and guided tours.',
          image_url: 'https://www.maharashtratourism.gov.in/safari-options.jpg',
          links: [
            { title: 'Safari Booking', url: 'https://www.maharashtratourism.gov.in/safari-booking' },
            { title: 'Safari Timings', url: 'https://www.maharashtratourism.gov.in/safari-timings' }
          ]
        },
        {
          title: 'Best Time to Visit',
          description: 'Best time to visit is from October to May when wildlife is most active.',
          image_url: 'https://www.maharashtratourism.gov.in/best-time.jpg',
          links: [
            { title: 'Seasonal Guide', url: 'https://www.maharashtratourism.gov.in/seasonal-guide' },
            { title: 'Weather Information', url: 'https://www.maharashtratourism.gov.in/weather-information' }
          ]
        },
        {
          title: 'Accommodation',
          description: 'Various accommodation options from forest lodges to luxury resorts.',
          image_url: 'https://www.maharashtratourism.gov.in/accommodation.jpg',
          links: [
            { title: 'Lodge Booking', url: 'https://www.maharashtratourism.gov.in/lodge-booking' },
            { title: 'Resort Options', url: 'https://www.maharashtratourism.gov.in/resort-options' }
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
          image_url: 'https://www.maharashtratourism.gov.in/big-cats.jpg',
          links: [
            { title: 'Tiger Spotting', url: 'https://www.maharashtratourism.gov.in/tiger-spotting' },
            { title: 'Leopard Sightings', url: 'https://www.maharashtratourism.gov.in/leopard-sightings' }
          ]
        },
        {
          title: 'Herbivores',
          description: 'Large population of elephants, deer, and other herbivorous animals.',
          image_url: 'https://www.maharashtratourism.gov.in/herbivores.jpg',
          links: [
            { title: 'Elephant Herds', url: 'https://www.maharashtratourism.gov.in/elephant-herds' },
            { title: 'Deer Species', url: 'https://www.maharashtratourism.gov.in/deer-species' }
          ]
        },
        {
          title: 'Bird Species',
          description: 'Over 200 species of birds including migratory and resident species.',
          image_url: 'https://www.maharashtratourism.gov.in/bird-species.jpg',
          links: [
            { title: 'Bird Watching', url: 'https://www.maharashtratourism.gov.in/bird-watching' },
            { title: 'Bird Checklist', url: 'https://www.maharashtratourism.gov.in/bird-checklist' }
          ]
        }
      ]
    }
  }
};

// Melghat Tiger Reserve
export const melghatData: KarnatakaPOI = {
  id: 'melghat_maharashtra',
  name: 'Melghat Tiger Reserve',
  category: 'wildlife',
  coordinates: { lat: 21.5000, lng: 77.0000 },
  description: 'Important tiger reserve in the Satpura Range, known for its conservation efforts.',
  icon_color: '#FF8C00',
  tabs: {
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'Tiger Conservation',
          description: 'Melghat Tiger Reserve is dedicated to tiger conservation and habitat protection.',
          image_url: 'https://www.maharashtratourism.gov.in/tiger-conservation.jpg',
          links: [
            { title: 'Conservation Programs', url: 'https://www.maharashtratourism.gov.in/conservation-programs' },
            { title: 'Tiger Monitoring', url: 'https://www.maharashtratourism.gov.in/tiger-monitoring' }
          ]
        },
        {
          title: 'Forest Types',
          description: 'Diverse forest types including tropical dry deciduous forests.',
          image_url: 'https://www.maharashtratourism.gov.in/forest-types.jpg',
          links: [
            { title: 'Forest Classification', url: 'https://www.maharashtratourism.gov.in/forest-classification' },
            { title: 'Vegetation Study', url: 'https://www.maharashtratourism.gov.in/vegetation-study' }
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
          image_url: 'https://www.maharashtratourism.gov.in/entry-permits.jpg',
          links: [
            { title: 'Permit Booking', url: 'https://www.maharashtratourism.gov.in/permit-booking' },
            { title: 'Entry Rules', url: 'https://www.maharashtratourism.gov.in/entry-rules' }
          ]
        },
        {
          title: 'Safari Experience',
          description: 'Guided safari experiences to explore the wildlife and natural beauty.',
          image_url: 'https://www.maharashtratourism.gov.in/safari-experience.jpg',
          links: [
            { title: 'Safari Packages', url: 'https://www.maharashtratourism.gov.in/safari-packages' },
            { title: 'Wildlife Photography', url: 'https://www.maharashtratourism.gov.in/wildlife-photography' }
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
          image_url: 'https://www.maharashtratourism.gov.in/tiger-population.jpg',
          links: [
            { title: 'Tiger Census', url: 'https://www.maharashtratourism.gov.in/tiger-census' },
            { title: 'Sighting Reports', url: 'https://www.maharashtratourism.gov.in/sighting-reports' }
          ]
        },
        {
          title: 'Other Wildlife',
          description: 'Diverse wildlife including elephants, gaur, and various bird species.',
          image_url: 'https://www.maharashtratourism.gov.in/other-wildlife.jpg',
          links: [
            { title: 'Wildlife List', url: 'https://www.maharashtratourism.gov.in/wildlife-list' },
            { title: 'Endangered Species', url: 'https://www.maharashtratourism.gov.in/endangered-species' }
          ]
        }
      ]
    }
  }
};

// Sanjay Gandhi National Park
export const sanjayGandhiData: KarnatakaPOI = {
  id: 'sanjay_gandhi_maharashtra',
  name: 'Sanjay Gandhi National Park',
  category: 'wildlife',
  coordinates: { lat: 19.2000, lng: 72.9000 },
  description: 'National park located within Mumbai city limits, known for its urban wildlife.',
  icon_color: '#FF8C00',
  tabs: {
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'Urban National Park',
          description: 'One of the few national parks located within city limits.',
          image_url: 'https://www.maharashtratourism.gov.in/urban-national-park.jpg',
          links: [
            { title: 'Park Information', url: 'https://www.maharashtratourism.gov.in/park-information' },
            { title: 'Urban Wildlife', url: 'https://www.maharashtratourism.gov.in/urban-wildlife' }
          ]
        },
        {
          title: 'Kanheri Caves',
          description: 'Ancient Buddhist caves located within the national park.',
          image_url: 'https://www.maharashtratourism.gov.in/kanheri-caves.jpg',
          links: [
            { title: 'Cave History', url: 'https://www.maharashtratourism.gov.in/cave-history' },
            { title: 'Buddhist Heritage', url: 'https://www.maharashtratourism.gov.in/buddhist-heritage' }
          ]
        }
      ]
    },
    visiting: {
      title: 'Visiting',
      content: [
        {
          title: 'Easy Access',
          description: 'Easily accessible from Mumbai city with good connectivity.',
          image_url: 'https://www.maharashtratourism.gov.in/easy-access.jpg',
          links: [
            { title: 'Access Information', url: 'https://www.maharashtratourism.gov.in/access-information' },
            { title: 'Transportation', url: 'https://www.maharashtratourism.gov.in/transportation' }
          ]
        },
        {
          title: 'Activities',
          description: 'Various activities including safari, trekking, and cave exploration.',
          image_url: 'https://www.maharashtratourism.gov.in/activities.jpg',
          links: [
            { title: 'Activity Guide', url: 'https://www.maharashtratourism.gov.in/activity-guide' },
            { title: 'Booking Information', url: 'https://www.maharashtratourism.gov.in/booking-information' }
          ]
        }
      ]
    },
    animals_found: {
      title: 'Animals Found',
      content: [
        {
          title: 'Wildlife Species',
          description: 'Various wildlife species adapted to urban environment.',
          image_url: 'https://www.maharashtratourism.gov.in/wildlife-species.jpg',
          links: [
            { title: 'Species List', url: 'https://www.maharashtratourism.gov.in/species-list' },
            { title: 'Conservation Efforts', url: 'https://www.maharashtratourism.gov.in/conservation-efforts' }
          ]
        }
      ]
    }
  }
};

// Pench Tiger Reserve
export const penchData: KarnatakaPOI = {
  id: 'pench_maharashtra',
  name: 'Pench Tiger Reserve',
  category: 'wildlife',
  coordinates: { lat: 21.7000, lng: 79.2000 },
  description: 'Tiger reserve shared between Maharashtra and Madhya Pradesh, known for its tiger population.',
  icon_color: '#FF8C00',
  tabs: {
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'Interstate Reserve',
          description: 'Pench Tiger Reserve is shared between Maharashtra and Madhya Pradesh.',
          image_url: 'https://www.maharashtratourism.gov.in/interstate-reserve.jpg',
          links: [
            { title: 'Reserve Information', url: 'https://www.maharashtratourism.gov.in/reserve-information' },
            { title: 'Management', url: 'https://www.maharashtratourism.gov.in/management' }
          ]
        },
        {
          title: 'Tiger Population',
          description: 'Significant tiger population with good sighting opportunities.',
          image_url: 'https://www.maharashtratourism.gov.in/tiger-population.jpg',
          links: [
            { title: 'Tiger Census', url: 'https://www.maharashtratourism.gov.in/tiger-census' },
            { title: 'Sighting Records', url: 'https://www.maharashtratourism.gov.in/sighting-records' }
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
          image_url: 'https://www.maharashtratourism.gov.in/safari-tours.jpg',
          links: [
            { title: 'Tour Booking', url: 'https://www.maharashtratourism.gov.in/tour-booking' },
            { title: 'Tour Packages', url: 'https://www.maharashtratourism.gov.in/tour-packages' }
          ]
        }
      ]
    },
    animals_found: {
      title: 'Animals Found',
      content: [
        {
          title: 'Wildlife Diversity',
          description: 'Rich wildlife including tigers, leopards, and various bird species.',
          image_url: 'https://www.maharashtratourism.gov.in/wildlife-diversity.jpg',
          links: [
            { title: 'Wildlife List', url: 'https://www.maharashtratourism.gov.in/wildlife-list' },
            { title: 'Sighting Reports', url: 'https://www.maharashtratourism.gov.in/sighting-reports' }
          ]
        }
      ]
    }
  }
};

export default [tadobaData, melghatData, sanjayGandhiData, penchData];
