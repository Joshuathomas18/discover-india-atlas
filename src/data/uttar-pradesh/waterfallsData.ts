// Uttar Pradesh Waterfalls Data
// Major waterfalls and cascades

import { KarnatakaPOI } from '../../types/database';

// Chitrakoot Waterfalls
export const chitrakootData: KarnatakaPOI = {
  id: 'chitrakoot_uttar_pradesh',
  name: 'Chitrakoot Waterfalls',
  category: 'waterfall',
  coordinates: { lat: 25.2000, lng: 80.8000 },
  description: 'Beautiful waterfall in the Chitrakoot region, known for its scenic beauty.',
  icon_color: '#87CEEB',
  tabs: {
    size: {
      title: 'Size',
      content: [
        {
          title: 'Waterfall Height',
          description: 'Chitrakoot Waterfalls has a height of approximately 100 feet (30 meters).',
          image_url: 'https://www.uptourism.gov.in/waterfall-height.jpg',
          links: [
            { title: 'Height Measurements', url: 'https://www.uptourism.gov.in/height-measurements' },
            { title: 'Geographic Survey', url: 'https://www.uptourism.gov.in/geographic-survey' }
          ]
        },
        {
          title: 'Water Volume',
          description: 'Seasonal water volume with peak flow during monsoon season.',
          image_url: 'https://www.uptourism.gov.in/water-volume.jpg',
          links: [
            { title: 'Flow Data', url: 'https://www.uptourism.gov.in/flow-data' },
            { title: 'Seasonal Variations', url: 'https://www.uptourism.gov.in/seasonal-variations' }
          ]
        },
        {
          title: 'Pool Area',
          description: 'Natural pool at the base of the waterfall for bathing and recreation.',
          image_url: 'https://www.uptourism.gov.in/pool-area.jpg',
          links: [
            { title: 'Pool Dimensions', url: 'https://www.uptourism.gov.in/pool-dimensions' },
            { title: 'Safety Information', url: 'https://www.uptourism.gov.in/safety-information' }
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
          image_url: 'https://www.uptourism.gov.in/water-source.jpg',
          links: [
            { title: 'Source Mapping', url: 'https://www.uptourism.gov.in/source-mapping' },
            { title: 'Hydrological Study', url: 'https://www.uptourism.gov.in/hydrological-study' }
          ]
        },
        {
          title: 'Seasonal Flow',
          description: 'Water flow varies seasonally with peak during monsoon season.',
          image_url: 'https://www.uptourism.gov.in/seasonal-flow.jpg',
          links: [
            { title: 'Flow Patterns', url: 'https://www.uptourism.gov.in/flow-patterns' },
            { title: 'Seasonal Data', url: 'https://www.uptourism.gov.in/seasonal-data' }
          ]
        }
      ]
    },
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'Religious Significance',
          description: 'The waterfall has religious significance and is visited by pilgrims.',
          image_url: 'https://www.uptourism.gov.in/religious-significance.jpg',
          links: [
            { title: 'Religious Practices', url: 'https://www.uptourism.gov.in/religious-practices' },
            { title: 'Pilgrimage Information', url: 'https://www.uptourism.gov.in/pilgrimage-information' }
          ]
        },
        {
          title: 'Scenic Beauty',
          description: 'Known for its breathtaking beauty and picturesque surroundings.',
          image_url: 'https://www.uptourism.gov.in/scenic-beauty.jpg',
          links: [
            { title: 'Photography Spots', url: 'https://www.uptourism.gov.in/photography-spots' },
            { title: 'Scenic Views', url: 'https://www.uptourism.gov.in/scenic-views' }
          ]
        },
        {
          title: 'Natural Environment',
          description: 'Surrounded by lush green forests and natural vegetation.',
          image_url: 'https://www.uptourism.gov.in/natural-environment.jpg',
          links: [
            { title: 'Forest Information', url: 'https://www.uptourism.gov.in/forest-information' },
            { title: 'Ecological Studies', url: 'https://www.uptourism.gov.in/ecological-studies' }
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
          image_url: 'https://www.uptourism.gov.in/best-time.jpg',
          links: [
            { title: 'Seasonal Guide', url: 'https://www.uptourism.gov.in/seasonal-guide' },
            { title: 'Weather Information', url: 'https://www.uptourism.gov.in/weather-information' }
          ]
        },
        {
          title: 'Visitor Facilities',
          description: 'Basic facilities including parking, food stalls, and viewing areas.',
          image_url: 'https://www.uptourism.gov.in/visitor-facilities.jpg',
          links: [
            { title: 'Facility Information', url: 'https://www.uptourism.gov.in/facility-information' },
            { title: 'Accessibility', url: 'https://www.uptourism.gov.in/accessibility' }
          ]
        },
        {
          title: 'Safety Guidelines',
          description: 'Important safety guidelines for visitors to prevent accidents.',
          image_url: 'https://www.uptourism.gov.in/safety-guidelines.jpg',
          links: [
            { title: 'Safety Rules', url: 'https://www.uptourism.gov.in/safety-rules' },
            { title: 'Emergency Procedures', url: 'https://www.uptourism.gov.in/emergency-procedures' }
          ]
        }
      ]
    },
    how_to_get_there: {
      title: 'How to Get There',
      content: [
        {
          title: 'By Road',
          description: 'Well-connected by road from major cities in Uttar Pradesh.',
          image_url: 'https://www.uptourism.gov.in/road-access.jpg',
          links: [
            { title: 'Route Information', url: 'https://www.uptourism.gov.in/route-information' },
            { title: 'Distance Chart', url: 'https://www.uptourism.gov.in/distance-chart' }
          ]
        },
        {
          title: 'By Train',
          description: 'Nearest railway station is Chitrakoot, about 10 km from the waterfall.',
          image_url: 'https://www.uptourism.gov.in/train-access.jpg',
          links: [
            { title: 'Train Schedule', url: 'https://www.uptourism.gov.in/train-schedule' },
            { title: 'Station Information', url: 'https://www.uptourism.gov.in/station-information' }
          ]
        },
        {
          title: 'Local Transport',
          description: 'Local buses and taxis available from Chitrakoot to the waterfall.',
          image_url: 'https://www.uptourism.gov.in/local-transport.jpg',
          links: [
            { title: 'Bus Services', url: 'https://www.uptourism.gov.in/bus-services' },
            { title: 'Taxi Services', url: 'https://www.uptourism.gov.in/taxi-services' }
          ]
        }
      ]
    }
  }
};

export default [chitrakootData];
