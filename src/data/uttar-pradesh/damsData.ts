// Uttar Pradesh Dams Data
// Major dams and reservoirs

import { KarnatakaPOI } from '../../types/database';

// Rihand Dam
export const rihandDamData: KarnatakaPOI = {
  id: 'rihand_dam_uttar_pradesh',
  name: 'Rihand Dam',
  category: 'dam',
  coordinates: { lat: 24.2000, lng: 82.8000 },
  description: 'Large dam on the Rihand River, important for hydroelectric power generation.',
  icon_color: '#4682B4',
  tabs: {
    size: {
      title: 'Size',
      content: [
        {
          title: 'Dam Dimensions',
          description: 'Rihand Dam is 934 meters long and 91 meters high.',
          image_url: 'https://www.uptourism.gov.in/dam-dimensions.jpg',
          links: [
            { title: 'Technical Specifications', url: 'https://www.uptourism.gov.in/technical-specifications' },
            { title: 'Construction Details', url: 'https://www.uptourism.gov.in/construction-details' }
          ]
        },
        {
          title: 'Reservoir Capacity',
          description: 'Rihand Reservoir has a storage capacity of 10,600 million cubic meters.',
          image_url: 'https://www.uptourism.gov.in/reservoir-capacity.jpg',
          links: [
            { title: 'Capacity Data', url: 'https://www.uptourism.gov.in/capacity-data' },
            { title: 'Water Management', url: 'https://www.uptourism.gov.in/water-management' }
          ]
        },
        {
          title: 'Power Generation',
          description: 'Hydroelectric power station with installed capacity of 300 MW.',
          image_url: 'https://www.uptourism.gov.in/power-generation.jpg',
          links: [
            { title: 'Power Station Details', url: 'https://www.uptourism.gov.in/power-station-details' },
            { title: 'Energy Production', url: 'https://www.uptourism.gov.in/energy-production' }
          ]
        }
      ]
    },
    rivers_associated: {
      title: 'Rivers Associated',
      content: [
        {
          title: 'Rihand River',
          description: 'Built across the Rihand River, the dam regulates water flow downstream.',
          image_url: 'https://www.uptourism.gov.in/rihand-river.jpg',
          links: [
            { title: 'River Basin', url: 'https://www.uptourism.gov.in/river-basin' },
            { title: 'Water Sharing', url: 'https://www.uptourism.gov.in/water-sharing' }
          ]
        },
        {
          title: 'Canal System',
          description: 'Extensive canal system distributes water for irrigation across the region.',
          image_url: 'https://www.uptourism.gov.in/canal-system.jpg',
          links: [
            { title: 'Canal Network', url: 'https://www.uptourism.gov.in/canal-network' },
            { title: 'Irrigation Coverage', url: 'https://www.uptourism.gov.in/irrigation-coverage' }
          ]
        }
      ]
    },
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'Construction History',
          description: 'Completed in 1962, the dam was built for irrigation and power generation.',
          image_url: 'https://www.uptourism.gov.in/construction-history.jpg',
          links: [
            { title: 'Project Timeline', url: 'https://www.uptourism.gov.in/project-timeline' },
            { title: 'Construction Challenges', url: 'https://www.uptourism.gov.in/construction-challenges' }
          ]
        },
        {
          title: 'Agricultural Impact',
          description: 'Critical for agriculture in the eastern Uttar Pradesh region.',
          image_url: 'https://www.uptourism.gov.in/agricultural-impact.jpg',
          links: [
            { title: 'Irrigation Benefits', url: 'https://www.uptourism.gov.in/irrigation-benefits' },
            { title: 'Crop Production', url: 'https://www.uptourism.gov.in/crop-production' }
          ]
        },
        {
          title: 'Tourist Attraction',
          description: 'Popular tourist destination with scenic views and recreational activities.',
          image_url: 'https://www.uptourism.gov.in/tourist-attraction.jpg',
          links: [
            { title: 'Viewing Points', url: 'https://www.uptourism.gov.in/viewing-points' },
            { title: 'Photography Spots', url: 'https://www.uptourism.gov.in/photography-spots' }
          ]
        }
      ]
    },
    tourists: {
      title: 'Tourists',
      content: [
        {
          title: 'Scenic Beauty',
          description: 'Beautiful reservoir surrounded by hills and forests.',
          image_url: 'https://www.uptourism.gov.in/scenic-beauty.jpg',
          links: [
            { title: 'Scenic Views', url: 'https://www.uptourism.gov.in/scenic-views' },
            { title: 'Nature Photography', url: 'https://www.uptourism.gov.in/nature-photography' }
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
          title: 'Best Time to Visit',
          description: 'Best time to visit is during monsoon season when the dam is full.',
          image_url: 'https://www.uptourism.gov.in/best-time.jpg',
          links: [
            { title: 'Seasonal Guide', url: 'https://www.uptourism.gov.in/seasonal-guide' },
            { title: 'Weather Information', url: 'https://www.uptourism.gov.in/weather-information' }
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
          description: 'Nearest railway station is Renukoot, about 20 km from the dam.',
          image_url: 'https://www.uptourism.gov.in/train-access.jpg',
          links: [
            { title: 'Train Schedule', url: 'https://www.uptourism.gov.in/train-schedule' },
            { title: 'Station Information', url: 'https://www.uptourism.gov.in/station-information' }
          ]
        },
        {
          title: 'Local Transport',
          description: 'Local buses and taxis available from Renukoot to Rihand Dam.',
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

export default [rihandDamData];
