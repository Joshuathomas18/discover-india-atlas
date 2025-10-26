// Uttar Pradesh Forests Data
// Major forest areas and reserves

import { KarnatakaPOI } from '../../types/database';

// Hastinapur Wildlife Sanctuary
export const hastinapurData: KarnatakaPOI = {
  id: 'hastinapur_uttar_pradesh',
  name: 'Hastinapur Wildlife Sanctuary',
  category: 'forest',
  coordinates: { lat: 29.2000, lng: 78.0000 },
  description: 'Wildlife sanctuary with historical significance, mentioned in the Mahabharata.',
  icon_color: '#228B22',
  tabs: {
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'Historical Significance',
          description: 'Mentioned in the Mahabharata as the capital of the Kuru kingdom.',
          image_url: 'https://www.uptourism.gov.in/historical-significance.jpg',
          links: [
            { title: 'Mythological References', url: 'https://www.uptourism.gov.in/mythological-references' },
            { title: 'Historical Sites', url: 'https://www.uptourism.gov.in/historical-sites' }
          ]
        },
        {
          title: 'Biodiversity',
          description: 'Rich biodiversity with diverse flora and fauna.',
          image_url: 'https://www.uptourism.gov.in/biodiversity.jpg',
          links: [
            { title: 'Species Diversity', url: 'https://www.uptourism.gov.in/species-diversity' },
            { title: 'Ecological Studies', url: 'https://www.uptourism.gov.in/ecological-studies' }
          ]
        },
        {
          title: 'Forest Types',
          description: 'Diverse forest types including tropical dry deciduous forests.',
          image_url: 'https://www.uptourism.gov.in/forest-types.jpg',
          links: [
            { title: 'Forest Classification', url: 'https://www.uptourism.gov.in/forest-classification' },
            { title: 'Vegetation Study', url: 'https://www.uptourism.gov.in/vegetation-study' }
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
          image_url: 'https://www.uptourism.gov.in/eco-tourism.jpg',
          links: [
            { title: 'Eco-Tourism Programs', url: 'https://www.uptourism.gov.in/eco-tourism-programs' },
            { title: 'Sustainable Practices', url: 'https://www.uptourism.gov.in/sustainable-practices' }
          ]
        },
        {
          title: 'Nature Trails',
          description: 'Various nature trails for visitors to explore the forest ecosystem.',
          image_url: 'https://www.uptourism.gov.in/nature-trails.jpg',
          links: [
            { title: 'Trail Maps', url: 'https://www.uptourism.gov.in/trail-maps' },
            { title: 'Guided Walks', url: 'https://www.uptourism.gov.in/guided-walks' }
          ]
        },
        {
          title: 'Visitor Centers',
          description: 'Information centers providing education about the sanctuary.',
          image_url: 'https://www.uptourism.gov.in/visitor-centers.jpg',
          links: [
            { title: 'Center Locations', url: 'https://www.uptourism.gov.in/center-locations' },
            { title: 'Educational Programs', url: 'https://www.uptourism.gov.in/educational-programs' }
          ]
        }
      ]
    },
    animals_found: {
      title: 'Animals Found',
      content: [
        {
          title: 'Mammals',
          description: 'Rich mammal diversity including various deer and antelope species.',
          image_url: 'https://www.uptourism.gov.in/mammals.jpg',
          links: [
            { title: 'Mammal Species', url: 'https://www.uptourism.gov.in/mammal-species' },
            { title: 'Conservation Status', url: 'https://www.uptourism.gov.in/conservation-status' }
          ]
        },
        {
          title: 'Birds',
          description: 'Over 100 bird species including migratory and resident species.',
          image_url: 'https://www.uptourism.gov.in/birds.jpg',
          links: [
            { title: 'Bird Checklist', url: 'https://www.uptourism.gov.in/bird-checklist' },
            { title: 'Bird Watching', url: 'https://www.uptourism.gov.in/bird-watching' }
          ]
        },
        {
          title: 'Reptiles and Amphibians',
          description: 'Diverse reptile and amphibian species adapted to forest habitats.',
          image_url: 'https://www.uptourism.gov.in/reptiles-amphibians.jpg',
          links: [
            { title: 'Species List', url: 'https://www.uptourism.gov.in/species-list' },
            { title: 'Habitat Studies', url: 'https://www.uptourism.gov.in/habitat-studies' }
          ]
        }
      ]
    }
  }
};

// Kaimur Wildlife Sanctuary
export const kaimurData: KarnatakaPOI = {
  id: 'kaimur_uttar_pradesh',
  name: 'Kaimur Wildlife Sanctuary',
  category: 'forest',
  coordinates: { lat: 25.0000, lng: 83.0000 },
  description: 'Wildlife sanctuary in the Kaimur Range, known for its scenic beauty.',
  icon_color: '#228B22',
  tabs: {
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'Mountain Range',
          description: 'Located in the Kaimur Range with diverse topography.',
          image_url: 'https://www.uptourism.gov.in/mountain-range.jpg',
          links: [
            { title: 'Geographic Features', url: 'https://www.uptourism.gov.in/geographic-features' },
            { title: 'Topographic Details', url: 'https://www.uptourism.gov.in/topographic-details' }
          ]
        },
        {
          title: 'Forest Ecosystem',
          description: 'Diverse forest ecosystem with unique flora and fauna.',
          image_url: 'https://www.uptourism.gov.in/forest-ecosystem.jpg',
          links: [
            { title: 'Ecosystem Study', url: 'https://www.uptourism.gov.in/ecosystem-study' },
            { title: 'Biodiversity Index', url: 'https://www.uptourism.gov.in/biodiversity-index' }
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
          image_url: 'https://www.uptourism.gov.in/trekking-routes.jpg',
          links: [
            { title: 'Trekking Maps', url: 'https://www.uptourism.gov.in/trekking-maps' },
            { title: 'Difficulty Levels', url: 'https://www.uptourism.gov.in/difficulty-levels' }
          ]
        }
      ]
    },
    animals_found: {
      title: 'Animals Found',
      content: [
        {
          title: 'Wildlife Species',
          description: 'Various wildlife species adapted to the mountain forest environment.',
          image_url: 'https://www.uptourism.gov.in/wildlife-species.jpg',
          links: [
            { title: 'Species Inventory', url: 'https://www.uptourism.gov.in/species-inventory' },
            { title: 'Conservation Efforts', url: 'https://www.uptourism.gov.in/conservation-efforts' }
          ]
        }
      ]
    }
  }
};

export default [hastinapurData, kaimurData];
