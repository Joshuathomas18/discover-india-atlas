// Maharashtra Mountains Data
// Major mountain ranges and peaks

import { KarnatakaPOI } from '../../types/database';

// Western Ghats
export const westernGhatsData: KarnatakaPOI = {
  id: 'western_ghats_maharashtra',
  name: 'Western Ghats',
  category: 'mountain',
  coordinates: { lat: 19.0760, lng: 73.8567 },
  description: 'UNESCO World Heritage Site mountain range running along the western coast of India.',
  icon_color: '#8B4513',
  tabs: {
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'UNESCO Heritage',
          description: 'The Western Ghats are a UNESCO World Heritage Site known for their biodiversity.',
          image_url: 'https://www.maharashtratourism.gov.in/unesco-heritage.jpg',
          links: [
            { title: 'UNESCO Information', url: 'https://www.maharashtratourism.gov.in/unesco-info' },
            { title: 'Heritage Status', url: 'https://www.maharashtratourism.gov.in/heritage-status' }
          ]
        },
        {
          title: 'Biodiversity Hotspot',
          description: 'One of the world\'s eight biodiversity hotspots with high species endemism.',
          image_url: 'https://www.maharashtratourism.gov.in/biodiversity-hotspot.jpg',
          links: [
            { title: 'Species Diversity', url: 'https://www.maharashtratourism.gov.in/species-diversity' },
            { title: 'Endemic Species', url: 'https://www.maharashtratourism.gov.in/endemic-species' }
          ]
        },
        {
          title: 'Mountain Range',
          description: 'The Western Ghats extend for about 1,600 km along the western coast of India.',
          image_url: 'https://www.maharashtratourism.gov.in/mountain-range.jpg',
          links: [
            { title: 'Geographic Extent', url: 'https://www.maharashtratourism.gov.in/geographic-extent' },
            { title: 'Topographic Features', url: 'https://www.maharashtratourism.gov.in/topographic-features' }
          ]
        }
      ]
    },
    trekking: {
      title: 'Trekking',
      content: [
        {
          title: 'Popular Trekking Routes',
          description: 'Several scenic trekking routes through the Western Ghats for all skill levels.',
          image_url: 'https://www.maharashtratourism.gov.in/trekking-routes.jpg',
          links: [
            { title: 'Trekking Maps', url: 'https://www.maharashtratourism.gov.in/trekking-maps' },
            { title: 'Difficulty Levels', url: 'https://www.maharashtratourism.gov.in/difficulty-levels' }
          ]
        },
        {
          title: 'Trekking Season',
          description: 'Best time for trekking is from October to March when weather is pleasant.',
          image_url: 'https://www.maharashtratourism.gov.in/trekking-season.jpg',
          links: [
            { title: 'Weather Guide', url: 'https://www.maharashtratourism.gov.in/weather-guide' },
            { title: 'Seasonal Tips', url: 'https://www.maharashtratourism.gov.in/seasonal-tips' }
          ]
        },
        {
          title: 'Trekking Equipment',
          description: 'Essential equipment and gear needed for trekking in the Western Ghats.',
          image_url: 'https://www.maharashtratourism.gov.in/trekking-equipment.jpg',
          links: [
            { title: 'Equipment List', url: 'https://www.maharashtratourism.gov.in/equipment-list' },
            { title: 'Rental Services', url: 'https://www.maharashtratourism.gov.in/rental-services' }
          ]
        }
      ]
    },
    how_to_get_there: {
      title: 'How to Get There',
      content: [
        {
          title: 'By Road',
          description: 'Well-connected by road from major cities like Mumbai, Pune, and Nashik.',
          image_url: 'https://www.maharashtratourism.gov.in/road-access.jpg',
          links: [
            { title: 'Route Information', url: 'https://www.maharashtratourism.gov.in/route-information' },
            { title: 'Bus Services', url: 'https://www.maharashtratourism.gov.in/bus-services' }
          ]
        },
        {
          title: 'By Train',
          description: 'Several railway stations provide access to the Western Ghats region.',
          image_url: 'https://www.maharashtratourism.gov.in/train-access.jpg',
          links: [
            { title: 'Train Schedule', url: 'https://www.maharashtratourism.gov.in/train-schedule' },
            { title: 'Station Information', url: 'https://www.maharashtratourism.gov.in/station-information' }
          ]
        },
        {
          title: 'By Air',
          description: 'Nearest airports are Mumbai and Pune, with good connectivity to the region.',
          image_url: 'https://www.maharashtratourism.gov.in/air-access.jpg',
          links: [
            { title: 'Flight Information', url: 'https://www.maharashtratourism.gov.in/flight-information' },
            { title: 'Airport Transfer', url: 'https://www.maharashtratourism.gov.in/airport-transfer' }
          ]
        }
      ]
    }
  }
};

// Sahyadri Hills
export const sahyadriHillsData: KarnatakaPOI = {
  id: 'sahyadri_hills_maharashtra',
  name: 'Sahyadri Hills',
  category: 'mountain',
  coordinates: { lat: 18.5204, lng: 73.8567 },
  description: 'Mountain range in the Western Ghats, known for their scenic beauty and historical forts.',
  icon_color: '#8B4513',
  tabs: {
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'Historical Forts',
          description: 'The Sahyadri Hills are dotted with numerous historical forts from the Maratha period.',
          image_url: 'https://www.maharashtratourism.gov.in/historical-forts.jpg',
          links: [
            { title: 'Fort List', url: 'https://www.maharashtratourism.gov.in/fort-list' },
            { title: 'Historical Significance', url: 'https://www.maharashtratourism.gov.in/historical-significance' }
          ]
        },
        {
          title: 'Scenic Beauty',
          description: 'Known for their breathtaking landscapes, waterfalls, and lush greenery.',
          image_url: 'https://www.maharashtratourism.gov.in/scenic-beauty.jpg',
          links: [
            { title: 'Scenic Viewpoints', url: 'https://www.maharashtratourism.gov.in/scenic-viewpoints' },
            { title: 'Photography Spots', url: 'https://www.maharashtratourism.gov.in/photography-spots' }
          ]
        },
        {
          title: 'Biodiversity',
          description: 'Rich biodiversity with unique flora and fauna adapted to the mountain environment.',
          image_url: 'https://www.maharashtratourism.gov.in/biodiversity.jpg',
          links: [
            { title: 'Flora Species', url: 'https://www.maharashtratourism.gov.in/flora-species' },
            { title: 'Fauna Species', url: 'https://www.maharashtratourism.gov.in/fauna-species' }
          ]
        }
      ]
    },
    trekking: {
      title: 'Trekking',
      content: [
        {
          title: 'Fort Trekking',
          description: 'Popular trekking routes to various historical forts in the Sahyadri Hills.',
          image_url: 'https://www.maharashtratourism.gov.in/fort-trekking.jpg',
          links: [
            { title: 'Fort Trekking Routes', url: 'https://www.maharashtratourism.gov.in/fort-trekking-routes' },
            { title: 'Trekking Difficulty', url: 'https://www.maharashtratourism.gov.in/trekking-difficulty' }
          ]
        },
        {
          title: 'Nature Trails',
          description: 'Various nature trails for exploring the natural beauty of the hills.',
          image_url: 'https://www.maharashtratourism.gov.in/nature-trails.jpg',
          links: [
            { title: 'Trail Maps', url: 'https://www.maharashtratourism.gov.in/trail-maps' },
            { title: 'Guided Walks', url: 'https://www.maharashtratourism.gov.in/guided-walks' }
          ]
        },
        {
          title: 'Adventure Activities',
          description: 'Rock climbing, rappelling, and other adventure activities available.',
          image_url: 'https://www.maharashtratourism.gov.in/adventure-activities.jpg',
          links: [
            { title: 'Adventure Sports', url: 'https://www.maharashtratourism.gov.in/adventure-sports' },
            { title: 'Safety Guidelines', url: 'https://www.maharashtratourism.gov.in/safety-guidelines' }
          ]
        }
      ]
    },
    how_to_get_there: {
      title: 'How to Get There',
      content: [
        {
          title: 'From Mumbai',
          description: 'About 100-150 km from Mumbai, accessible by road and train.',
          image_url: 'https://www.maharashtratourism.gov.in/mumbai-access.jpg',
          links: [
            { title: 'Route Information', url: 'https://www.maharashtratourism.gov.in/route-information' },
            { title: 'Travel Time', url: 'https://www.maharashtratourism.gov.in/travel-time' }
          ]
        },
        {
          title: 'From Pune',
          description: 'Well-connected from Pune with multiple access points.',
          image_url: 'https://www.maharashtratourism.gov.in/pune-access.jpg',
          links: [
            { title: 'Access Points', url: 'https://www.maharashtratourism.gov.in/access-points' },
            { title: 'Transportation', url: 'https://www.maharashtratourism.gov.in/transportation' }
          ]
        },
        {
          title: 'Local Transport',
          description: 'Local buses and taxis available from nearby cities and towns.',
          image_url: 'https://www.maharashtratourism.gov.in/local-transport.jpg',
          links: [
            { title: 'Bus Services', url: 'https://www.maharashtratourism.gov.in/bus-services' },
            { title: 'Taxi Services', url: 'https://www.maharashtratourism.gov.in/taxi-services' }
          ]
        }
      ]
    }
  }
};

export default [westernGhatsData, sahyadriHillsData];
