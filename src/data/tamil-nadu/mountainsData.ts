// Tamil Nadu Mountains Data
// Major mountain ranges and peaks

import { KarnatakaPOI } from '../../types/database';

// Nilgiri Hills
export const nilgiriHillsData: KarnatakaPOI = {
  id: 'nilgiri_hills_tamil_nadu',
  name: 'Nilgiri Hills',
  category: 'mountain',
  coordinates: { lat: 11.3778, lng: 76.7650 },
  description: 'Mountain range in the Western Ghats, known for their blue appearance and tea plantations.',
  icon_color: '#8B4513',
  tabs: {
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'Blue Mountains',
          description: 'The Nilgiri Hills are called "Blue Mountains" due to the blue haze that often covers them.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/blue-mountains.jpg',
          links: [
            { title: 'Geographic Formation', url: 'https://www.tamilnadutourism.tn.gov.in/geographic-formation' },
            { title: 'Climate Conditions', url: 'https://www.tamilnadutourism.tn.gov.in/climate-conditions' }
          ]
        },
        {
          title: 'Highest Peak',
          description: 'Doddabetta Peak at 2,637 meters is the highest point in the Nilgiri Hills.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/doddabetta-peak.jpg',
          links: [
            { title: 'Peak Information', url: 'https://www.tamilnadutourism.tn.gov.in/peak-information' },
            { title: 'Climbing Routes', url: 'https://www.tamilnadutourism.tn.gov.in/climbing-routes' }
          ]
        },
        {
          title: 'UNESCO World Heritage',
          description: 'Part of the Western Ghats UNESCO World Heritage Site.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/unesco-heritage.jpg',
          links: [
            { title: 'UNESCO Details', url: 'https://www.tamilnadutourism.tn.gov.in/unesco-details' },
            { title: 'Conservation Efforts', url: 'https://www.tamilnadutourism.tn.gov.in/conservation-efforts' }
          ]
        }
      ]
    },
    trekking: {
      title: 'Trekking',
      content: [
        {
          title: 'Popular Trekking Routes',
          description: 'Several scenic trekking routes through the Nilgiri Hills for all skill levels.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/trekking-routes.jpg',
          links: [
            { title: 'Trekking Maps', url: 'https://www.tamilnadutourism.tn.gov.in/trekking-maps' },
            { title: 'Difficulty Levels', url: 'https://www.tamilnadutourism.tn.gov.in/difficulty-levels' }
          ]
        },
        {
          title: 'Trekking Season',
          description: 'Best time for trekking is from October to March when weather is pleasant.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/trekking-season.jpg',
          links: [
            { title: 'Weather Guide', url: 'https://www.tamilnadutourism.tn.gov.in/weather-guide' },
            { title: 'Seasonal Tips', url: 'https://www.tamilnadutourism.tn.gov.in/seasonal-tips' }
          ]
        },
        {
          title: 'Trekking Equipment',
          description: 'Essential equipment and gear needed for trekking in the Nilgiri Hills.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/trekking-equipment.jpg',
          links: [
            { title: 'Equipment List', url: 'https://www.tamilnadutourism.tn.gov.in/equipment-list' },
            { title: 'Rental Services', url: 'https://www.tamilnadutourism.tn.gov.in/rental-services' }
          ]
        }
      ]
    },
    how_to_get_there: {
      title: 'How to Get There',
      content: [
        {
          title: 'By Road',
          description: 'Well-connected by road from major cities like Coimbatore and Bangalore.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/road-access.jpg',
          links: [
            { title: 'Route Information', url: 'https://www.tamilnadutourism.tn.gov.in/route-information' },
            { title: 'Bus Services', url: 'https://www.tamilnadutourism.tn.gov.in/bus-services' }
          ]
        },
        {
          title: 'By Train',
          description: 'Nilgiri Mountain Railway offers scenic train journey to Ooty.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/mountain-railway.jpg',
          links: [
            { title: 'Train Schedule', url: 'https://www.tamilnadutourism.tn.gov.in/train-schedule' },
            { title: 'Booking Information', url: 'https://www.tamilnadutourism.tn.gov.in/booking-information' }
          ]
        },
        {
          title: 'By Air',
          description: 'Nearest airport is Coimbatore, about 85 km from Ooty.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/air-access.jpg',
          links: [
            { title: 'Flight Information', url: 'https://www.tamilnadutourism.tn.gov.in/flight-information' },
            { title: 'Airport Transfer', url: 'https://www.tamilnadutourism.tn.gov.in/airport-transfer' }
          ]
        }
      ]
    }
  }
};

// Eastern Ghats
export const easternGhatsData: KarnatakaPOI = {
  id: 'eastern_ghats_tamil_nadu',
  name: 'Eastern Ghats',
  category: 'mountain',
  coordinates: { lat: 12.9202, lng: 79.1500 },
  description: 'Mountain range running parallel to the eastern coast of India, covering parts of Tamil Nadu.',
  icon_color: '#8B4513',
  tabs: {
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'Geographic Extent',
          description: 'The Eastern Ghats extend from Odisha through Andhra Pradesh to Tamil Nadu.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/geographic-extent.jpg',
          links: [
            { title: 'Range Map', url: 'https://www.tamilnadutourism.tn.gov.in/range-map' },
            { title: 'Geological Formation', url: 'https://www.tamilnadutourism.tn.gov.in/geological-formation' }
          ]
        },
        {
          title: 'Biodiversity',
          description: 'Rich biodiversity with unique flora and fauna adapted to the region.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/biodiversity.jpg',
          links: [
            { title: 'Flora Species', url: 'https://www.tamilnadutourism.tn.gov.in/flora-species' },
            { title: 'Fauna Species', url: 'https://www.tamilnadutourism.tn.gov.in/fauna-species' }
          ]
        },
        {
          title: 'Climate Influence',
          description: 'The Eastern Ghats influence the climate and rainfall patterns of the region.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/climate-influence.jpg',
          links: [
            { title: 'Climate Data', url: 'https://www.tamilnadutourism.tn.gov.in/climate-data' },
            { title: 'Rainfall Patterns', url: 'https://www.tamilnadutourism.tn.gov.in/rainfall-patterns' }
          ]
        }
      ]
    },
    trekking: {
      title: 'Trekking',
      content: [
        {
          title: 'Trekking Opportunities',
          description: 'Various trekking opportunities in the Eastern Ghats for nature enthusiasts.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/trekking-opportunities.jpg',
          links: [
            { title: 'Trekking Trails', url: 'https://www.tamilnadutourism.tn.gov.in/trekking-trails' },
            { title: 'Guided Tours', url: 'https://www.tamilnadutourism.tn.gov.in/guided-tours' }
          ]
        },
        {
          title: 'Scenic Views',
          description: 'Breathtaking views of valleys, forests, and distant plains from the peaks.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/scenic-views.jpg',
          links: [
            { title: 'Viewpoints', url: 'https://www.tamilnadutourism.tn.gov.in/viewpoints' },
            { title: 'Photography Spots', url: 'https://www.tamilnadutourism.tn.gov.in/photography-spots' }
          ]
        }
      ]
    },
    how_to_get_there: {
      title: 'How to Get There',
      content: [
        {
          title: 'Access Points',
          description: 'Multiple access points to the Eastern Ghats from various cities in Tamil Nadu.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/access-points.jpg',
          links: [
            { title: 'Entry Points', url: 'https://www.tamilnadutourism.tn.gov.in/entry-points' },
            { title: 'Transportation Options', url: 'https://www.tamilnadutourism.tn.gov.in/transportation-options' }
          ]
        },
        {
          title: 'Local Guides',
          description: 'Local guides available for safe and informative trekking experiences.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/local-guides.jpg',
          links: [
            { title: 'Guide Services', url: 'https://www.tamilnadutourism.tn.gov.in/guide-services' },
            { title: 'Safety Guidelines', url: 'https://www.tamilnadutourism.tn.gov.in/safety-guidelines' }
          ]
        }
      ]
    }
  }
};

export default [nilgiriHillsData, easternGhatsData];
