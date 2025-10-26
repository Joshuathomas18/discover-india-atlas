// Tamil Nadu Waterfalls Data
// Major waterfalls and cascades

import { KarnatakaPOI } from '../../types/database';

// Courtallam Falls
export const courtallamData: KarnatakaPOI = {
  id: 'courtallam_tamil_nadu',
  name: 'Courtallam Falls',
  category: 'waterfall',
  coordinates: { lat: 8.9333, lng: 77.2667 },
  description: 'Famous waterfall known as the "Spa of South India" for its therapeutic properties.',
  icon_color: '#87CEEB',
  tabs: {
    size: {
      title: 'Size',
      content: [
        {
          title: 'Waterfall Height',
          description: 'Courtallam Falls has a height of approximately 167 feet (51 meters).',
          image_url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
          links: [
            { title: 'Height Measurements', url: 'https://www.tamilnadutourism.tn.gov.in/courtallam' },
            { title: 'Geographic Survey', url: 'https://www.surveyofindia.gov.in' }
          ]
        },
        {
          title: 'Water Volume',
          description: 'Seasonal water volume varies, with peak flow during monsoon season.',
          image_url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
          links: [
            { title: 'Flow Data', url: 'https://www.cwc.gov.in' },
            { title: 'Seasonal Variations', url: 'https://www.imd.gov.in' }
          ]
        },
        {
          title: 'Pool Area',
          description: 'Natural pool at the base of the waterfall for bathing and recreation.',
          image_url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
          links: [
            { title: 'Pool Dimensions', url: 'https://www.tamilnadutourism.tn.gov.in/courtallam' },
            { title: 'Safety Information', url: 'https://www.tamilnadutourism.tn.gov.in/safety-guidelines' }
          ]
        }
      ]
    },
    rivers_associated: {
      title: 'Rivers Associated',
      content: [
        {
          title: 'Chittar River',
          description: 'Courtallam Falls is formed by the Chittar River flowing through the hills.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/chittar-river.jpg',
          links: [
            { title: 'River Course', url: 'https://www.tamilnadutourism.tn.gov.in/river-course' },
            { title: 'Tributaries', url: 'https://www.tamilnadutourism.tn.gov.in/tributaries' }
          ]
        },
        {
          title: 'Water Source',
          description: 'The waterfall is fed by mountain streams and seasonal rainfall.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/water-source.jpg',
          links: [
            { title: 'Source Mapping', url: 'https://www.tamilnadutourism.tn.gov.in/source-mapping' },
            { title: 'Hydrological Study', url: 'https://www.tamilnadutourism.tn.gov.in/hydrological-study' }
          ]
        }
      ]
    },
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'Therapeutic Properties',
          description: 'The water is believed to have medicinal properties due to mineral content.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/therapeutic-properties.jpg',
          links: [
            { title: 'Mineral Analysis', url: 'https://www.tamilnadutourism.tn.gov.in/mineral-analysis' },
            { title: 'Health Benefits', url: 'https://www.tamilnadutourism.tn.gov.in/health-benefits' }
          ]
        },
        {
          title: 'Religious Significance',
          'description': 'Considered sacred by locals and visited by pilgrims for spiritual cleansing.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/religious-significance.jpg',
          links: [
            { title: 'Religious Practices', url: 'https://www.tamilnadutourism.tn.gov.in/religious-practices' },
            { title: 'Pilgrimage Information', url: 'https://www.tamilnadutourism.tn.gov.in/pilgrimage-information' }
          ]
        },
        {
          title: 'Tourist Attraction',
          description: 'Popular tourist destination attracting visitors throughout the year.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/tourist-attraction.jpg',
          links: [
            { title: 'Visitor Statistics', url: 'https://www.tamilnadutourism.tn.gov.in/visitor-statistics' },
            { title: 'Tourism Impact', url: 'https://www.tamilnadutourism.tn.gov.in/tourism-impact' }
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
          image_url: 'https://www.tamilnadutourism.tn.gov.in/best-time.jpg',
          links: [
            { title: 'Seasonal Guide', url: 'https://www.tamilnadutourism.tn.gov.in/seasonal-guide' },
            { title: 'Weather Information', url: 'https://www.tamilnadutourism.tn.gov.in/weather-information' }
          ]
        },
        {
          title: 'Visitor Facilities',
          description: 'Basic facilities including changing rooms, food stalls, and parking.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/visitor-facilities.jpg',
          links: [
            { title: 'Facility Information', url: 'https://www.tamilnadutourism.tn.gov.in/facility-information' },
            { title: 'Accessibility', url: 'https://www.tamilnadutourism.tn.gov.in/accessibility' }
          ]
        },
        {
          title: 'Safety Guidelines',
          description: 'Important safety guidelines for visitors to prevent accidents.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/safety-guidelines.jpg',
          links: [
            { title: 'Safety Rules', url: 'https://www.tamilnadutourism.tn.gov.in/safety-rules' },
            { title: 'Emergency Procedures', url: 'https://www.tamilnadutourism.tn.gov.in/emergency-procedures' }
          ]
        }
      ]
    },
    how_to_get_there: {
      title: 'How to Get There',
      content: [
        {
          title: 'By Road',
          description: 'Well-connected by road from major cities like Madurai and Tirunelveli.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/road-access.jpg',
          links: [
            { title: 'Route Information', url: 'https://www.tamilnadutourism.tn.gov.in/route-information' },
            { title: 'Distance Chart', url: 'https://www.tamilnadutourism.tn.gov.in/distance-chart' }
          ]
        },
        {
          title: 'By Train',
          description: 'Nearest railway station is Tenkasi, about 5 km from Courtallam.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/train-access.jpg',
          links: [
            { title: 'Train Schedule', url: 'https://www.tamilnadutourism.tn.gov.in/train-schedule' },
            { title: 'Station Information', url: 'https://www.tamilnadutourism.tn.gov.in/station-information' }
          ]
        },
        {
          title: 'Local Transport',
          description: 'Local buses and taxis available from Tenkasi to Courtallam.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/local-transport.jpg',
          links: [
            { title: 'Bus Services', url: 'https://www.tamilnadutourism.tn.gov.in/bus-services' },
            { title: 'Taxi Services', url: 'https://www.tamilnadutourism.tn.gov.in/taxi-services' }
          ]
        }
      ]
    }
  }
};

// Hogenakkal Falls
export const hogenakkalData: KarnatakaPOI = {
  id: 'hogenakkal_tamil_nadu',
  name: 'Hogenakkal Falls',
  category: 'waterfall',
  coordinates: { lat: 12.1167, lng: 77.7667 },
  description: 'Famous waterfall on the Cauvery River, known as the "Niagara of India".',
  icon_color: '#87CEEB',
  tabs: {
    size: {
      title: 'Size',
      content: [
        {
          title: 'Waterfall Dimensions',
          description: 'Hogenakkal Falls has multiple cascades with varying heights up to 20 meters.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/waterfall-dimensions.jpg',
          links: [
            { title: 'Cascade Details', url: 'https://www.tamilnadutourism.tn.gov.in/cascade-details' },
            { title: 'Measurement Data', url: 'https://www.tamilnadutourism.tn.gov.in/measurement-data' }
          ]
        },
        {
          title: 'River Width',
          description: 'The Cauvery River at Hogenakkal is approximately 200 meters wide.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/river-width.jpg',
          links: [
            { title: 'Width Measurements', url: 'https://www.tamilnadutourism.tn.gov.in/width-measurements' },
            { title: 'River Profile', url: 'https://www.tamilnadutourism.tn.gov.in/river-profile' }
          ]
        }
      ]
    },
    rivers_associated: {
      title: 'Rivers Associated',
      content: [
        {
          title: 'Cauvery River',
          description: 'Hogenakkal Falls is formed by the Cauvery River flowing through rocky terrain.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/cauvery-river.jpg',
          links: [
            { title: 'River Course', url: 'https://www.tamilnadutourism.tn.gov.in/river-course' },
            { title: 'Geological Formation', url: 'https://www.tamilnadutourism.tn.gov.in/geological-formation' }
          ]
        },
        {
          title: 'Water Flow',
          description: 'Seasonal water flow with peak during monsoon and reduced flow in summer.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/water-flow.jpg',
          links: [
            { title: 'Flow Patterns', url: 'https://www.tamilnadutourism.tn.gov.in/flow-patterns' },
            { title: 'Seasonal Data', url: 'https://www.tamilnadutourism.tn.gov.in/seasonal-data' }
          ]
        }
      ]
    },
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'Geological Formation',
          description: 'Formed by the Cauvery River cutting through ancient rock formations.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/geological-formation.jpg',
          links: [
            { title: 'Rock Types', url: 'https://www.tamilnadutourism.tn.gov.in/rock-types' },
            { title: 'Formation Process', url: 'https://www.tamilnadutourism.tn.gov.in/formation-process' }
          ]
        },
        {
          title: 'Tourist Activities',
          description: 'Popular for coracle rides, bathing, and scenic boat trips.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/tourist-activities.jpg',
          links: [
            { title: 'Activity Guide', url: 'https://www.tamilnadutourism.tn.gov.in/activity-guide' },
            { title: 'Adventure Sports', url: 'https://www.tamilnadutourism.tn.gov.in/adventure-sports' }
          ]
        }
      ]
    },
    tourists: {
      title: 'Tourists',
      content: [
        {
          title: 'Visitor Season',
          description: 'Peak tourist season is from October to March when weather is pleasant.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/visitor-season.jpg',
          links: [
            { title: 'Seasonal Information', url: 'https://www.tamilnadutourism.tn.gov.in/seasonal-information' },
            { title: 'Crowd Management', url: 'https://www.tamilnadutourism.tn.gov.in/crowd-management' }
          ]
        },
        {
          title: 'Tourist Facilities',
          description: 'Facilities include boat rides, food stalls, and parking areas.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/tourist-facilities.jpg',
          links: [
            { title: 'Facility List', url: 'https://www.tamilnadutourism.tn.gov.in/facility-list' },
            { title: 'Service Providers', url: 'https://www.tamilnadutourism.tn.gov.in/service-providers' }
          ]
        }
      ]
    },
    how_to_get_there: {
      title: 'How to Get There',
      content: [
        {
          title: 'From Bangalore',
          description: 'About 180 km from Bangalore, accessible by road.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/bangalore-access.jpg',
          links: [
            { title: 'Route Map', url: 'https://www.tamilnadutourism.tn.gov.in/route-map' },
            { title: 'Travel Time', url: 'https://www.tamilnadutourism.tn.gov.in/travel-time' }
          ]
        },
        {
          title: 'From Chennai',
          description: 'About 350 km from Chennai, accessible via road and rail.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/chennai-access.jpg',
          links: [
            { title: 'Transportation Options', url: 'https://www.tamilnadutourism.tn.gov.in/transportation-options' },
            { title: 'Journey Planning', url: 'https://www.tamilnadutourism.tn.gov.in/journey-planning' }
          ]
        }
      ]
    }
  }
};

export default [courtallamData, hogenakkalData];
