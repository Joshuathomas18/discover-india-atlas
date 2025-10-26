// Tamil Nadu Dams Data
// Major dams and reservoirs

import { KarnatakaPOI } from '../../types/database';

// Mettur Dam
export const metturDamData: KarnatakaPOI = {
  id: 'mettur_dam_tamil_nadu',
  name: 'Mettur Dam',
  category: 'dam',
  coordinates: { lat: 11.8000, lng: 77.8000 },
  description: 'Large dam on the Cauvery River, one of the oldest and most important dams in Tamil Nadu.',
  icon_color: '#4682B4',
  tabs: {
    size: {
      title: 'Size',
      content: [
        {
          title: 'Dam Dimensions',
          description: 'Mettur Dam is 1,700 meters long and 65 meters high.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/dam-dimensions.jpg',
          links: [
            { title: 'Technical Specifications', url: 'https://www.tamilnadutourism.tn.gov.in/technical-specifications' },
            { title: 'Construction Details', url: 'https://www.tamilnadutourism.tn.gov.in/construction-details' }
          ]
        },
        {
          title: 'Reservoir Capacity',
          description: 'Stanley Reservoir has a storage capacity of 93.47 TMC (Thousand Million Cubic feet).',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/reservoir-capacity.jpg',
          links: [
            { title: 'Capacity Data', url: 'https://www.tamilnadutourism.tn.gov.in/capacity-data' },
            { title: 'Water Management', url: 'https://www.tamilnadutourism.tn.gov.in/water-management' }
          ]
        },
        {
          title: 'Power Generation',
          description: 'Hydroelectric power station with installed capacity of 120 MW.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/power-generation.jpg',
          links: [
            { title: 'Power Station Details', url: 'https://www.tamilnadutourism.tn.gov.in/power-station-details' },
            { title: 'Energy Production', url: 'https://www.tamilnadutourism.tn.gov.in/energy-production' }
          ]
        }
      ]
    },
    rivers_associated: {
      title: 'Rivers Associated',
      content: [
        {
          title: 'Cauvery River',
          description: 'Built across the Cauvery River, the dam regulates water flow downstream.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/cauvery-river.jpg',
          links: [
            { title: 'River Basin', url: 'https://www.tamilnadutourism.tn.gov.in/river-basin' },
            { title: 'Water Sharing', url: 'https://www.tamilnadutourism.tn.gov.in/water-sharing' }
          ]
        },
        {
          title: 'Canal System',
          description: 'Extensive canal system distributes water for irrigation across Tamil Nadu.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/canal-system.jpg',
          links: [
            { title: 'Canal Network', url: 'https://www.tamilnadutourism.tn.gov.in/canal-network' },
            { title: 'Irrigation Coverage', url: 'https://www.tamilnadutourism.tn.gov.in/irrigation-coverage' }
          ]
        }
      ]
    },
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'Historical Significance',
          description: 'Completed in 1934, it was one of the first major dams built in India.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/historical-significance.jpg',
          links: [
            { title: 'Construction History', url: 'https://www.tamilnadutourism.tn.gov.in/construction-history' },
            { title: 'Historical Timeline', url: 'https://www.tamilnadutourism.tn.gov.in/historical-timeline' }
          ]
        },
        {
          title: 'Agricultural Impact',
          description: 'Critical for agriculture in the Cauvery delta region.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/agricultural-impact.jpg',
          links: [
            { title: 'Irrigation Benefits', url: 'https://www.tamilnadutourism.tn.gov.in/irrigation-benefits' },
            { title: 'Crop Production', url: 'https://www.tamilnadutourism.tn.gov.in/crop-production' }
          ]
        },
        {
          title: 'Water Disputes',
          description: 'Subject to interstate water sharing disputes between Tamil Nadu and Karnataka.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/water-disputes.jpg',
          links: [
            { title: 'Dispute History', url: 'https://www.tamilnadutourism.tn.gov.in/dispute-history' },
            { title: 'Legal Proceedings', url: 'https://www.tamilnadutourism.tn.gov.in/legal-proceedings' }
          ]
        }
      ]
    },
    tourists: {
      title: 'Tourists',
      content: [
        {
          title: 'Tourist Attractions',
          description: 'Popular tourist destination with scenic views and recreational activities.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/tourist-attractions.jpg',
          links: [
            { title: 'Viewing Points', url: 'https://www.tamilnadutourism.tn.gov.in/viewing-points' },
            { title: 'Photography Spots', url: 'https://www.tamilnadutourism.tn.gov.in/photography-spots' }
          ]
        },
        {
          title: 'Visitor Facilities',
          description: 'Basic facilities including parking, food stalls, and viewing areas.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/visitor-facilities.jpg',
          links: [
            { title: 'Facility Information', url: 'https://www.tamilnadutourism.tn.gov.in/facility-information' },
            { title: 'Accessibility', url: 'https://www.tamilnadutourism.tn.gov.in/accessibility' }
          ]
        },
        {
          title: 'Best Time to Visit',
          description: 'Best time to visit is during monsoon season when the dam is full.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/best-time.jpg',
          links: [
            { title: 'Seasonal Guide', url: 'https://www.tamilnadutourism.tn.gov.in/seasonal-guide' },
            { title: 'Weather Information', url: 'https://www.tamilnadutourism.tn.gov.in/weather-information' }
          ]
        }
      ]
    },
    how_to_get_there: {
      title: 'How to Get There',
      content: [
        {
          title: 'By Road',
          description: 'Well-connected by road from Salem, about 35 km away.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/road-access.jpg',
          links: [
            { title: 'Route Information', url: 'https://www.tamilnadutourism.tn.gov.in/route-information' },
            { title: 'Distance Chart', url: 'https://www.tamilnadutourism.tn.gov.in/distance-chart' }
          ]
        },
        {
          title: 'By Train',
          description: 'Nearest railway station is Mettur Dam station, about 2 km from the dam.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/train-access.jpg',
          links: [
            { title: 'Train Schedule', url: 'https://www.tamilnadutourism.tn.gov.in/train-schedule' },
            { title: 'Station Information', url: 'https://www.tamilnadutourism.tn.gov.in/station-information' }
          ]
        },
        {
          title: 'Local Transport',
          description: 'Local buses and taxis available from Salem and other nearby cities.',
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

// Bhavani Sagar Dam
export const bhavaniSagarData: KarnatakaPOI = {
  id: 'bhavani_sagar_tamil_nadu',
  name: 'Bhavani Sagar Dam',
  category: 'dam',
  coordinates: { lat: 11.4500, lng: 77.2000 },
  description: 'Dam on the Bhavani River, important for irrigation and hydroelectric power generation.',
  icon_color: '#4682B4',
  tabs: {
    size: {
      title: 'Size',
      content: [
        {
          title: 'Dam Specifications',
          description: 'Bhavani Sagar Dam is 1,200 meters long and 40 meters high.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/dam-specifications.jpg',
          links: [
            { title: 'Technical Details', url: 'https://www.tamilnadutourism.tn.gov.in/technical-details' },
            { title: 'Design Features', url: 'https://www.tamilnadutourism.tn.gov.in/design-features' }
          ]
        },
        {
          title: 'Reservoir Details',
          description: 'Bhavani Sagar Reservoir has a storage capacity of 32.8 TMC.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/reservoir-details.jpg',
          links: [
            { title: 'Storage Capacity', url: 'https://www.tamilnadutourism.tn.gov.in/storage-capacity' },
            { title: 'Water Levels', url: 'https://www.tamilnadutourism.tn.gov.in/water-levels' }
          ]
        }
      ]
    },
    rivers_associated: {
      title: 'Rivers Associated',
      content: [
        {
          title: 'Bhavani River',
          description: 'Built across the Bhavani River, a tributary of the Cauvery River.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/bhavani-river.jpg',
          links: [
            { title: 'River Information', url: 'https://www.tamilnadutourism.tn.gov.in/river-information' },
            { title: 'Tributary Details', url: 'https://www.tamilnadutourism.tn.gov.in/tributary-details' }
          ]
        }
      ]
    },
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'Construction History',
          description: 'Completed in 1955, the dam was built for irrigation and power generation.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/construction-history.jpg',
          links: [
            { title: 'Project Timeline', url: 'https://www.tamilnadutourism.tn.gov.in/project-timeline' },
            { title: 'Construction Challenges', url: 'https://www.tamilnadutourism.tn.gov.in/construction-challenges' }
          ]
        },
        {
          title: 'Irrigation Benefits',
          description: 'Provides irrigation water for agricultural lands in the region.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/irrigation-benefits.jpg',
          links: [
            { title: 'Irrigation Coverage', url: 'https://www.tamilnadutourism.tn.gov.in/irrigation-coverage' },
            { title: 'Agricultural Impact', url: 'https://www.tamilnadutourism.tn.gov.in/agricultural-impact' }
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
          image_url: 'https://www.tamilnadutourism.tn.gov.in/scenic-beauty.jpg',
          links: [
            { title: 'Scenic Views', url: 'https://www.tamilnadutourism.tn.gov.in/scenic-views' },
            { title: 'Nature Photography', url: 'https://www.tamilnadutourism.tn.gov.in/nature-photography' }
          ]
        }
      ]
    },
    how_to_get_there: {
      title: 'How to Get There',
      content: [
        {
          title: 'Access Routes',
          description: 'Accessible by road from Erode and other nearby cities.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/access-routes.jpg',
          links: [
            { title: 'Route Guide', url: 'https://www.tamilnadutourism.tn.gov.in/route-guide' },
            { title: 'Transportation', url: 'https://www.tamilnadutourism.tn.gov.in/transportation' }
          ]
        }
      ]
    }
  }
};

export default [metturDamData, bhavaniSagarData];
