// Maharashtra Waterfalls Data
// Major waterfalls and cascades

import { KarnatakaPOI } from '../../types/database';

// Thoseghar Waterfalls
export const thosegharData: KarnatakaPOI = {
  id: 'thoseghar_maharashtra',
  name: 'Thoseghar Waterfalls',
  category: 'waterfall',
  coordinates: { lat: 17.2000, lng: 73.8000 },
  description: 'Beautiful waterfall in the Western Ghats, known for its scenic beauty and multiple cascades.',
  icon_color: '#87CEEB',
  tabs: {
    size: {
      title: 'Size',
      content: [
        {
          title: 'Waterfall Height',
          description: 'Thoseghar Waterfalls has a height of approximately 500 feet (152 meters).',
          image_url: 'https://www.maharashtratourism.gov.in/waterfall-height.jpg',
          links: [
            { title: 'Height Measurements', url: 'https://www.maharashtratourism.gov.in/height-measurements' },
            { title: 'Geographic Survey', url: 'https://www.maharashtratourism.gov.in/geographic-survey' }
          ]
        },
        {
          title: 'Multiple Cascades',
          description: 'The waterfall consists of multiple cascades creating a spectacular view.',
          image_url: 'https://www.maharashtratourism.gov.in/multiple-cascades.jpg',
          links: [
            { title: 'Cascade Details', url: 'https://www.maharashtratourism.gov.in/cascade-details' },
            { title: 'Viewing Points', url: 'https://www.maharashtratourism.gov.in/viewing-points' }
          ]
        },
        {
          title: 'Pool Area',
          description: 'Natural pool at the base of the waterfall for bathing and recreation.',
          image_url: 'https://www.maharashtratourism.gov.in/pool-area.jpg',
          links: [
            { title: 'Pool Dimensions', url: 'https://www.maharashtratourism.gov.in/pool-dimensions' },
            { title: 'Safety Information', url: 'https://www.maharashtratourism.gov.in/safety-information' }
          ]
        }
      ]
    },
    rivers_associated: {
      title: 'Rivers Associated',
      content: [
        {
          title: 'Water Source',
          description: 'The waterfall is fed by mountain streams and seasonal rainfall.',
          image_url: 'https://www.maharashtratourism.gov.in/water-source.jpg',
          links: [
            { title: 'Source Mapping', url: 'https://www.maharashtratourism.gov.in/source-mapping' },
            { title: 'Hydrological Study', url: 'https://www.maharashtratourism.gov.in/hydrological-study' }
          ]
        },
        {
          title: 'Seasonal Flow',
          description: 'Water flow varies seasonally with peak during monsoon season.',
          image_url: 'https://www.maharashtratourism.gov.in/seasonal-flow.jpg',
          links: [
            { title: 'Flow Patterns', url: 'https://www.maharashtratourism.gov.in/flow-patterns' },
            { title: 'Seasonal Data', url: 'https://www.maharashtratourism.gov.in/seasonal-data' }
          ]
        }
      ]
    },
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'Scenic Beauty',
          description: 'Known for its breathtaking beauty and picturesque surroundings.',
          image_url: 'https://www.maharashtratourism.gov.in/scenic-beauty.jpg',
          links: [
            { title: 'Photography Spots', url: 'https://www.maharashtratourism.gov.in/photography-spots' },
            { title: 'Scenic Views', url: 'https://www.maharashtratourism.gov.in/scenic-views' }
          ]
        },
        {
          title: 'Tourist Attraction',
          description: 'Popular tourist destination attracting visitors throughout the year.',
          image_url: 'https://www.maharashtratourism.gov.in/tourist-attraction.jpg',
          links: [
            { title: 'Visitor Statistics', url: 'https://www.maharashtratourism.gov.in/visitor-statistics' },
            { title: 'Tourism Impact', url: 'https://www.maharashtratourism.gov.in/tourism-impact' }
          ]
        },
        {
          title: 'Natural Environment',
          description: 'Surrounded by lush green forests and natural vegetation.',
          image_url: 'https://www.maharashtratourism.gov.in/natural-environment.jpg',
          links: [
            { title: 'Forest Information', url: 'https://www.maharashtratourism.gov.in/forest-information' },
            { title: 'Ecological Studies', url: 'https://www.maharashtratourism.gov.in/ecological-studies' }
          ]
        }
      ]
    },
    tourists: {
      title: 'Tourists',
      content: [
        {
          title: 'Best Time to Visit',
          description: 'Best time to visit is from June to September during monsoon season.',
          image_url: 'https://www.maharashtratourism.gov.in/best-time.jpg',
          links: [
            { title: 'Seasonal Guide', url: 'https://www.maharashtratourism.gov.in/seasonal-guide' },
            { title: 'Weather Information', url: 'https://www.maharashtratourism.gov.in/weather-information' }
          ]
        },
        {
          title: 'Visitor Facilities',
          description: 'Basic facilities including parking, food stalls, and viewing areas.',
          image_url: 'https://www.maharashtratourism.gov.in/visitor-facilities.jpg',
          links: [
            { title: 'Facility Information', url: 'https://www.maharashtratourism.gov.in/facility-information' },
            { title: 'Accessibility', url: 'https://www.maharashtratourism.gov.in/accessibility' }
          ]
        },
        {
          title: 'Safety Guidelines',
          description: 'Important safety guidelines for visitors to prevent accidents.',
          image_url: 'https://www.maharashtratourism.gov.in/safety-guidelines.jpg',
          links: [
            { title: 'Safety Rules', url: 'https://www.maharashtratourism.gov.in/safety-rules' },
            { title: 'Emergency Procedures', url: 'https://www.maharashtratourism.gov.in/emergency-procedures' }
          ]
        }
      ]
    },
    how_to_get_there: {
      title: 'How to Get There',
      content: [
        {
          title: 'By Road',
          description: 'Well-connected by road from major cities like Pune and Mumbai.',
          image_url: 'https://www.maharashtratourism.gov.in/road-access.jpg',
          links: [
            { title: 'Route Information', url: 'https://www.maharashtratourism.gov.in/route-information' },
            { title: 'Distance Chart', url: 'https://www.maharashtratourism.gov.in/distance-chart' }
          ]
        },
        {
          title: 'By Train',
          description: 'Nearest railway station is Satara, about 30 km from the waterfall.',
          image_url: 'https://www.maharashtratourism.gov.in/train-access.jpg',
          links: [
            { title: 'Train Schedule', url: 'https://www.maharashtratourism.gov.in/train-schedule' },
            { title: 'Station Information', url: 'https://www.maharashtratourism.gov.in/station-information' }
          ]
        },
        {
          title: 'Local Transport',
          description: 'Local buses and taxis available from Satara to Thoseghar.',
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

// Kune Waterfalls
export const kuneData: KarnatakaPOI = {
  id: 'kune_maharashtra',
  name: 'Kune Waterfalls',
  category: 'waterfall',
  coordinates: { lat: 18.7500, lng: 73.4000 },
  description: 'Picturesque waterfall near Lonavala, popular among tourists and nature lovers.',
  icon_color: '#87CEEB',
  tabs: {
    size: {
      title: 'Size',
      content: [
        {
          title: 'Waterfall Height',
          description: 'Kune Waterfalls has a height of approximately 200 feet (61 meters).',
          image_url: 'https://www.maharashtratourism.gov.in/waterfall-height.jpg',
          links: [
            { title: 'Height Measurements', url: 'https://www.maharashtratourism.gov.in/height-measurements' },
            { title: 'Geographic Survey', url: 'https://www.maharashtratourism.gov.in/geographic-survey' }
          ]
        },
        {
          title: 'Water Volume',
          description: 'Seasonal water volume with peak flow during monsoon season.',
          image_url: 'https://www.maharashtratourism.gov.in/water-volume.jpg',
          links: [
            { title: 'Flow Data', url: 'https://www.maharashtratourism.gov.in/flow-data' },
            { title: 'Seasonal Variations', url: 'https://www.maharashtratourism.gov.in/seasonal-variations' }
          ]
        }
      ]
    },
    rivers_associated: {
      title: 'Rivers Associated',
      content: [
        {
          title: 'Water Source',
          description: 'The waterfall is fed by mountain streams and seasonal rainfall.',
          image_url: 'https://www.maharashtratourism.gov.in/water-source.jpg',
          links: [
            { title: 'Source Mapping', url: 'https://www.maharashtratourism.gov.in/source-mapping' },
            { title: 'Hydrological Study', url: 'https://www.maharashtratourism.gov.in/hydrological-study' }
          ]
        }
      ]
    },
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'Tourist Popularity',
          description: 'Popular among tourists visiting Lonavala and Khandala.',
          image_url: 'https://www.maharashtratourism.gov.in/tourist-popularity.jpg',
          links: [
            { title: 'Visitor Information', url: 'https://www.maharashtratourism.gov.in/visitor-information' },
            { title: 'Tourism Impact', url: 'https://www.maharashtratourism.gov.in/tourism-impact' }
          ]
        },
        {
          title: 'Natural Beauty',
          description: 'Known for its natural beauty and serene environment.',
          image_url: 'https://www.maharashtratourism.gov.in/natural-beauty.jpg',
          links: [
            { title: 'Scenic Views', url: 'https://www.maharashtratourism.gov.in/scenic-views' },
            { title: 'Photography', url: 'https://www.maharashtratourism.gov.in/photography' }
          ]
        }
      ]
    },
    tourists: {
      title: 'Tourists',
      content: [
        {
          title: 'Visitor Season',
          description: 'Peak tourist season is during monsoon and winter months.',
          image_url: 'https://www.maharashtratourism.gov.in/visitor-season.jpg',
          links: [
            { title: 'Seasonal Information', url: 'https://www.maharashtratourism.gov.in/seasonal-information' },
            { title: 'Crowd Management', url: 'https://www.maharashtratourism.gov.in/crowd-management' }
          ]
        },
        {
          title: 'Tourist Facilities',
          description: 'Basic facilities including parking and food stalls.',
          image_url: 'https://www.maharashtratourism.gov.in/tourist-facilities.jpg',
          links: [
            { title: 'Facility List', url: 'https://www.maharashtratourism.gov.in/facility-list' },
            { title: 'Service Providers', url: 'https://www.maharashtratourism.gov.in/service-providers' }
          ]
        }
      ]
    },
    how_to_get_there: {
      title: 'How to Get There',
      content: [
        {
          title: 'From Lonavala',
          description: 'About 15 km from Lonavala, easily accessible by road.',
          image_url: 'https://www.maharashtratourism.gov.in/lonavala-access.jpg',
          links: [
            { title: 'Route Map', url: 'https://www.maharashtratourism.gov.in/route-map' },
            { title: 'Travel Time', url: 'https://www.maharashtratourism.gov.in/travel-time' }
          ]
        },
        {
          title: 'From Mumbai',
          description: 'About 100 km from Mumbai, accessible via road.',
          image_url: 'https://www.maharashtratourism.gov.in/mumbai-access.jpg',
          links: [
            { title: 'Transportation Options', url: 'https://www.maharashtratourism.gov.in/transportation-options' },
            { title: 'Journey Planning', url: 'https://www.maharashtratourism.gov.in/journey-planning' }
          ]
        }
      ]
    }
  }
};

export default [thosegharData, kuneData];
