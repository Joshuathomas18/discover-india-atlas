// Tamil Nadu Forests Data
// Major forest areas and reserves

import { KarnatakaPOI } from '../../types/database';

// Nilgiri Biosphere Reserve
export const nilgiriBiosphereData: KarnatakaPOI = {
  id: 'nilgiri_biosphere_tamil_nadu',
  name: 'Nilgiri Biosphere Reserve',
  category: 'forest',
  coordinates: { lat: 11.3778, lng: 76.7650 },
  description: 'UNESCO World Heritage Site and biosphere reserve covering parts of Tamil Nadu.',
  icon_color: '#228B22',
  tabs: {
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'UNESCO Heritage',
          description: 'First biosphere reserve in India, recognized by UNESCO in 1986.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/unesco-heritage.jpg',
          links: [
            { title: 'UNESCO Information', url: 'https://www.tamilnadutourism.tn.gov.in/unesco-info' },
            { title: 'Heritage Status', url: 'https://www.tamilnadutourism.tn.gov.in/heritage-status' }
          ]
        },
        {
          title: 'Biodiversity Hotspot',
          description: 'One of the world\'s biodiversity hotspots with high species endemism.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/biodiversity-hotspot.jpg',
          links: [
            { title: 'Species Diversity', url: 'https://www.tamilnadutourism.tn.gov.in/species-diversity' },
            { title: 'Endemic Species', url: 'https://www.tamilnadutourism.tn.gov.in/endemic-species' }
          ]
        },
        {
          title: 'Forest Types',
          description: 'Diverse forest types including tropical evergreen and montane forests.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/forest-types.jpg',
          links: [
            { title: 'Forest Classification', url: 'https://www.tamilnadutourism.tn.gov.in/forest-classification' },
            { title: 'Vegetation Zones', url: 'https://www.tamilnadutourism.tn.gov.in/vegetation-zones' }
          ]
        }
      ]
    },
    visiting: {
      title: 'Visiting',
      content: [
        {
          title: 'Eco-Tourism',
          description: 'Promotes eco-tourism with sustainable practices and community involvement.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/eco-tourism.jpg',
          links: [
            { title: 'Eco-Tourism Programs', url: 'https://www.tamilnadutourism.tn.gov.in/eco-tourism-programs' },
            { title: 'Sustainable Practices', url: 'https://www.tamilnadutourism.tn.gov.in/sustainable-practices' }
          ]
        },
        {
          title: 'Nature Trails',
          description: 'Various nature trails for visitors to explore the forest ecosystem.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/nature-trails.jpg',
          links: [
            { title: 'Trail Maps', url: 'https://www.tamilnadutourism.tn.gov.in/trail-maps' },
            { title: 'Guided Walks', url: 'https://www.tamilnadutourism.tn.gov.in/guided-walks' }
          ]
        },
        {
          title: 'Visitor Centers',
          description: 'Information centers providing education about the biosphere reserve.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/visitor-centers.jpg',
          links: [
            { title: 'Center Locations', url: 'https://www.tamilnadutourism.tn.gov.in/center-locations' },
            { title: 'Educational Programs', url: 'https://www.tamilnadutourism.tn.gov.in/educational-programs' }
          ]
        }
      ]
    },
    animals_found: {
      title: 'Animals Found',
      content: [
        {
          title: 'Mammals',
          description: 'Rich mammal diversity including tigers, elephants, and endemic species.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/mammals.jpg',
          links: [
            { title: 'Mammal Species', url: 'https://www.tamilnadutourism.tn.gov.in/mammal-species' },
            { title: 'Conservation Status', url: 'https://www.tamilnadutourism.tn.gov.in/conservation-status' }
          ]
        },
        {
          title: 'Birds',
          description: 'Over 300 bird species including many endemic and migratory species.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/birds.jpg',
          links: [
            { title: 'Bird Checklist', url: 'https://www.tamilnadutourism.tn.gov.in/bird-checklist' },
            { title: 'Bird Watching', url: 'https://www.tamilnadutourism.tn.gov.in/bird-watching' }
          ]
        },
        {
          title: 'Reptiles and Amphibians',
          description: 'Diverse reptile and amphibian species adapted to forest habitats.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/reptiles-amphibians.jpg',
          links: [
            { title: 'Species List', url: 'https://www.tamilnadutourism.tn.gov.in/species-list' },
            { title: 'Habitat Studies', url: 'https://www.tamilnadutourism.tn.gov.in/habitat-studies' }
          ]
        }
      ]
    }
  }
};

// Anamalai Hills Forest
export const anamalaiHillsData: KarnatakaPOI = {
  id: 'anamalai_hills_tamil_nadu',
  name: 'Anamalai Hills Forest',
  category: 'forest',
  coordinates: { lat: 10.3000, lng: 77.1000 },
  description: 'Mountain range in the Western Ghats with rich forest cover and wildlife.',
  icon_color: '#228B22',
  tabs: {
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'Mountain Range',
          description: 'Part of the Western Ghats mountain range with elevations up to 2,695 meters.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/mountain-range.jpg',
          links: [
            { title: 'Geographic Features', url: 'https://www.tamilnadutourism.tn.gov.in/geographic-features' },
            { title: 'Elevation Profile', url: 'https://www.tamilnadutourism.tn.gov.in/elevation-profile' }
          ]
        },
        {
          title: 'Forest Cover',
          description: 'Dense forest cover with tropical evergreen and semi-evergreen forests.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/forest-cover.jpg',
          links: [
            { title: 'Forest Statistics', url: 'https://www.tamilnadutourism.tn.gov.in/forest-statistics' },
            { title: 'Coverage Maps', url: 'https://www.tamilnadutourism.tn.gov.in/coverage-maps' }
          ]
        }
      ]
    },
    visiting: {
      title: 'Visiting',
      content: [
        {
          title: 'Trekking Routes',
          description: 'Various trekking routes through the forest for adventure enthusiasts.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/trekking-routes.jpg',
          links: [
            { title: 'Trekking Maps', url: 'https://www.tamilnadutourism.tn.gov.in/trekking-maps' },
            { title: 'Difficulty Levels', url: 'https://www.tamilnadutourism.tn.gov.in/difficulty-levels' }
          ]
        },
        {
          title: 'Camping Sites',
          description: 'Designated camping sites for overnight stays in the forest.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/camping-sites.jpg',
          links: [
            { title: 'Camping Permits', url: 'https://www.tamilnadutourism.tn.gov.in/camping-permits' },
            { title: 'Safety Guidelines', url: 'https://www.tamilnadutourism.tn.gov.in/safety-guidelines' }
          ]
        }
      ]
    },
    animals_found: {
      title: 'Animals Found',
      content: [
        {
          title: 'Wildlife Diversity',
          description: 'Rich wildlife including tigers, elephants, and various bird species.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/wildlife-diversity.jpg',
          links: [
            { title: 'Wildlife List', url: 'https://www.tamilnadutourism.tn.gov.in/wildlife-list' },
            { title: 'Sighting Reports', url: 'https://www.tamilnadutourism.tn.gov.in/sighting-reports' }
          ]
        }
      ]
    }
  }
};

// Palani Hills Forest
export const palaniHillsData: KarnatakaPOI = {
  id: 'palani_hills_tamil_nadu',
  name: 'Palani Hills Forest',
  category: 'forest',
  coordinates: { lat: 10.4500, lng: 77.5000 },
  description: 'Hill range in Tamil Nadu known for its forest cover and religious significance.',
  icon_color: '#228B22',
  tabs: {
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'Religious Significance',
          description: 'Home to the famous Palani Murugan Temple, a major pilgrimage site.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/religious-significance.jpg',
          links: [
            { title: 'Temple Information', url: 'https://www.tamilnadutourism.tn.gov.in/temple-information' },
            { title: 'Pilgrimage Guide', url: 'https://www.tamilnadutourism.tn.gov.in/pilgrimage-guide' }
          ]
        },
        {
          title: 'Forest Ecosystem',
          description: 'Diverse forest ecosystem with unique flora and fauna.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/forest-ecosystem.jpg',
          links: [
            { title: 'Ecosystem Study', url: 'https://www.tamilnadutourism.tn.gov.in/ecosystem-study' },
            { title: 'Biodiversity Index', url: 'https://www.tamilnadutourism.tn.gov.in/biodiversity-index' }
          ]
        }
      ]
    },
    visiting: {
      title: 'Visiting',
      content: [
        {
          title: 'Pilgrimage Tourism',
          description: 'Combines religious tourism with nature exploration.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/pilgrimage-tourism.jpg',
          links: [
            { title: 'Tour Packages', url: 'https://www.tamilnadutourism.tn.gov.in/tour-packages' },
            { title: 'Accommodation', url: 'https://www.tamilnadutourism.tn.gov.in/accommodation' }
          ]
        }
      ]
    },
    animals_found: {
      title: 'Animals Found',
      content: [
        {
          title: 'Wildlife Species',
          description: 'Various wildlife species adapted to the hill forest environment.',
          image_url: 'https://www.tamilnadutourism.tn.gov.in/wildlife-species.jpg',
          links: [
            { title: 'Species Inventory', url: 'https://www.tamilnadutourism.tn.gov.in/species-inventory' },
            { title: 'Conservation Efforts', url: 'https://www.tamilnadutourism.tn.gov.in/conservation-efforts' }
          ]
        }
      ]
    }
  }
};

export default [nilgiriBiosphereData, anamalaiHillsData, palaniHillsData];
