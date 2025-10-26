// Maharashtra Dams Data
// Major dams and reservoirs

import { KarnatakaPOI } from '../../types/database';

// Koyna Dam
export const koynaDamData: KarnatakaPOI = {
  id: 'koyna_dam_maharashtra',
  name: 'Koyna Dam',
  category: 'dam',
  coordinates: { lat: 17.4000, lng: 73.7000 },
  description: 'Large dam on the Koyna River, one of the largest hydroelectric projects in India.',
  icon_color: '#4682B4',
  tabs: {
    size: {
      title: 'Size',
      content: [
        {
          title: 'Dam Dimensions',
          description: 'Koyna Dam is 2,648 meters long and 103 meters high.',
          image_url: 'https://www.maharashtratourism.gov.in/dam-dimensions.jpg',
          links: [
            { title: 'Technical Specifications', url: 'https://www.maharashtratourism.gov.in/technical-specifications' },
            { title: 'Construction Details', url: 'https://www.maharashtratourism.gov.in/construction-details' }
          ]
        },
        {
          title: 'Reservoir Capacity',
          description: 'Koyna Reservoir has a storage capacity of 2,797 TMC (Thousand Million Cubic feet).',
          image_url: 'https://www.maharashtratourism.gov.in/reservoir-capacity.jpg',
          links: [
            { title: 'Capacity Data', url: 'https://www.maharashtratourism.gov.in/capacity-data' },
            { title: 'Water Management', url: 'https://www.maharashtratourism.gov.in/water-management' }
          ]
        },
        {
          title: 'Power Generation',
          description: 'Hydroelectric power station with installed capacity of 1,960 MW.',
          image_url: 'https://www.maharashtratourism.gov.in/power-generation.jpg',
          links: [
            { title: 'Power Station Details', url: 'https://www.maharashtratourism.gov.in/power-station-details' },
            { title: 'Energy Production', url: 'https://www.maharashtratourism.gov.in/energy-production' }
          ]
        }
      ]
    },
    rivers_associated: {
      title: 'Rivers Associated',
      content: [
        {
          title: 'Koyna River',
          description: 'Built across the Koyna River, the dam regulates water flow downstream.',
          image_url: 'https://www.maharashtratourism.gov.in/koyna-river.jpg',
          links: [
            { title: 'River Basin', url: 'https://www.maharashtratourism.gov.in/river-basin' },
            { title: 'Water Sharing', url: 'https://www.maharashtratourism.gov.in/water-sharing' }
          ]
        },
        {
          title: 'Canal System',
          description: 'Extensive canal system distributes water for irrigation across Maharashtra.',
          image_url: 'https://www.maharashtratourism.gov.in/canal-system.jpg',
          links: [
            { title: 'Canal Network', url: 'https://www.maharashtratourism.gov.in/canal-network' },
            { title: 'Irrigation Coverage', url: 'https://www.maharashtratourism.gov.in/irrigation-coverage' }
          ]
        }
      ]
    },
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'Hydroelectric Project',
          description: 'One of the largest hydroelectric projects in India, completed in 1963.',
          image_url: 'https://www.maharashtratourism.gov.in/hydroelectric-project.jpg',
          links: [
            { title: 'Project History', url: 'https://www.maharashtratourism.gov.in/project-history' },
            { title: 'Construction Timeline', url: 'https://www.maharashtratourism.gov.in/construction-timeline' }
          ]
        },
        {
          title: 'Agricultural Impact',
          description: 'Critical for agriculture in the Konkan and western Maharashtra region.',
          image_url: 'https://www.maharashtratourism.gov.in/agricultural-impact.jpg',
          links: [
            { title: 'Irrigation Benefits', url: 'https://www.maharashtratourism.gov.in/irrigation-benefits' },
            { title: 'Crop Production', url: 'https://www.maharashtratourism.gov.in/crop-production' }
          ]
        },
        {
          title: 'Tourist Attraction',
          description: 'Popular tourist destination with scenic views and recreational activities.',
          image_url: 'https://www.maharashtratourism.gov.in/tourist-attraction.jpg',
          links: [
            { title: 'Viewing Points', url: 'https://www.maharashtratourism.gov.in/viewing-points' },
            { title: 'Photography Spots', url: 'https://www.maharashtratourism.gov.in/photography-spots' }
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
          image_url: 'https://www.maharashtratourism.gov.in/scenic-beauty.jpg',
          links: [
            { title: 'Scenic Views', url: 'https://www.maharashtratourism.gov.in/scenic-views' },
            { title: 'Nature Photography', url: 'https://www.maharashtratourism.gov.in/nature-photography' }
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
          title: 'Best Time to Visit',
          description: 'Best time to visit is during monsoon season when the dam is full.',
          image_url: 'https://www.maharashtratourism.gov.in/best-time.jpg',
          links: [
            { title: 'Seasonal Guide', url: 'https://www.maharashtratourism.gov.in/seasonal-guide' },
            { title: 'Weather Information', url: 'https://www.maharashtratourism.gov.in/weather-information' }
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
          description: 'Nearest railway station is Chiplun, about 50 km from the dam.',
          image_url: 'https://www.maharashtratourism.gov.in/train-access.jpg',
          links: [
            { title: 'Train Schedule', url: 'https://www.maharashtratourism.gov.in/train-schedule' },
            { title: 'Station Information', url: 'https://www.maharashtratourism.gov.in/station-information' }
          ]
        },
        {
          title: 'Local Transport',
          description: 'Local buses and taxis available from Chiplun to Koyna Dam.',
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

// Jayakwadi Dam
export const jayakwadiData: KarnatakaPOI = {
  id: 'jayakwadi_dam_maharashtra',
  name: 'Jayakwadi Dam',
  category: 'dam',
  coordinates: { lat: 19.5000, lng: 75.3000 },
  description: 'Large dam on the Godavari River, important for irrigation and hydroelectric power generation.',
  icon_color: '#4682B4',
  tabs: {
    size: {
      title: 'Size',
      content: [
        {
          title: 'Dam Specifications',
          description: 'Jayakwadi Dam is 3,393 meters long and 41 meters high.',
          image_url: 'https://www.maharashtratourism.gov.in/dam-specifications.jpg',
          links: [
            { title: 'Technical Details', url: 'https://www.maharashtratourism.gov.in/technical-details' },
            { title: 'Design Features', url: 'https://www.maharashtratourism.gov.in/design-features' }
          ]
        },
        {
          title: 'Reservoir Details',
          description: 'Jayakwadi Reservoir has a storage capacity of 2,170 TMC.',
          image_url: 'https://www.maharashtratourism.gov.in/reservoir-details.jpg',
          links: [
            { title: 'Storage Capacity', url: 'https://www.maharashtratourism.gov.in/storage-capacity' },
            { title: 'Water Levels', url: 'https://www.maharashtratourism.gov.in/water-levels' }
          ]
        }
      ]
    },
    rivers_associated: {
      title: 'Rivers Associated',
      content: [
        {
          title: 'Godavari River',
          description: 'Built across the Godavari River, the dam regulates water flow downstream.',
          image_url: 'https://www.maharashtratourism.gov.in/godavari-river.jpg',
          links: [
            { title: 'River Information', url: 'https://www.maharashtratourism.gov.in/river-information' },
            { title: 'Water Management', url: 'https://www.maharashtratourism.gov.in/water-management' }
          ]
        }
      ]
    },
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'Construction History',
          description: 'Completed in 1976, the dam was built for irrigation and power generation.',
          image_url: 'https://www.maharashtratourism.gov.in/construction-history.jpg',
          links: [
            { title: 'Project Timeline', url: 'https://www.maharashtratourism.gov.in/project-timeline' },
            { title: 'Construction Challenges', url: 'https://www.maharashtratourism.gov.in/construction-challenges' }
          ]
        },
        {
          title: 'Irrigation Benefits',
          description: 'Provides irrigation water for agricultural lands in the region.',
          image_url: 'https://www.maharashtratourism.gov.in/irrigation-benefits.jpg',
          links: [
            { title: 'Irrigation Coverage', url: 'https://www.maharashtratourism.gov.in/irrigation-coverage' },
            { title: 'Agricultural Impact', url: 'https://www.maharashtratourism.gov.in/agricultural-impact' }
          ]
        }
      ]
    },
    tourists: {
      title: 'Tourists',
      content: [
        {
          title: 'Scenic Beauty',
          description: 'Beautiful reservoir surrounded by hills and agricultural fields.',
          image_url: 'https://www.maharashtratourism.gov.in/scenic-beauty.jpg',
          links: [
            { title: 'Scenic Views', url: 'https://www.maharashtratourism.gov.in/scenic-views' },
            { title: 'Nature Photography', url: 'https://www.maharashtratourism.gov.in/nature-photography' }
          ]
        }
      ]
    },
    how_to_get_there: {
      title: 'How to Get There',
      content: [
        {
          title: 'Access Routes',
          description: 'Accessible by road from Aurangabad and other nearby cities.',
          image_url: 'https://www.maharashtratourism.gov.in/access-routes.jpg',
          links: [
            { title: 'Route Guide', url: 'https://www.maharashtratourism.gov.in/route-guide' },
            { title: 'Transportation', url: 'https://www.maharashtratourism.gov.in/transportation' }
          ]
        }
      ]
    }
  }
};

export default [koynaDamData, jayakwadiData];
