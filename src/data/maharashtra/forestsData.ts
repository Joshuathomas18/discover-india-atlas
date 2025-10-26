// Maharashtra Forests Data
// Major forest areas and reserves

import { KarnatakaPOI } from '../../types/database';

// Chandoli National Park
export const chandoliData: KarnatakaPOI = {
  id: 'chandoli_maharashtra',
  name: 'Chandoli National Park',
  category: 'forest',
  coordinates: { lat: 17.2000, lng: 73.8000 },
  description: 'National park in the Western Ghats, known for its biodiversity and scenic beauty.',
  icon_color: '#228B22',
  tabs: {
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'Biodiversity Hotspot',
          description: 'Part of the Western Ghats biodiversity hotspot with high species endemism.',
          image_url: 'https://www.maharashtratourism.gov.in/biodiversity-hotspot.jpg',
          links: [
            { title: 'Species Diversity', url: 'https://www.maharashtratourism.gov.in/species-diversity' },
            { title: 'Endemic Species', url: 'https://www.maharashtratourism.gov.in/endemic-species' }
          ]
        },
        {
          title: 'Forest Types',
          description: 'Diverse forest types including tropical evergreen and semi-evergreen forests.',
          image_url: 'https://www.maharashtratourism.gov.in/forest-types.jpg',
          links: [
            { title: 'Forest Classification', url: 'https://www.maharashtratourism.gov.in/forest-classification' },
            { title: 'Vegetation Zones', url: 'https://www.maharashtratourism.gov.in/vegetation-zones' }
          ]
        },
        {
          title: 'Waterfalls',
          description: 'Several beautiful waterfalls within the national park.',
          image_url: 'https://www.maharashtratourism.gov.in/waterfalls.jpg',
          links: [
            { title: 'Waterfall List', url: 'https://www.maharashtratourism.gov.in/waterfall-list' },
            { title: 'Scenic Beauty', url: 'https://www.maharashtratourism.gov.in/scenic-beauty' }
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
          image_url: 'https://www.maharashtratourism.gov.in/eco-tourism.jpg',
          links: [
            { title: 'Eco-Tourism Programs', url: 'https://www.maharashtratourism.gov.in/eco-tourism-programs' },
            { title: 'Sustainable Practices', url: 'https://www.maharashtratourism.gov.in/sustainable-practices' }
          ]
        },
        {
          title: 'Nature Trails',
          description: 'Various nature trails for visitors to explore the forest ecosystem.',
          image_url: 'https://www.maharashtratourism.gov.in/nature-trails.jpg',
          links: [
            { title: 'Trail Maps', url: 'https://www.maharashtratourism.gov.in/trail-maps' },
            { title: 'Guided Walks', url: 'https://www.maharashtratourism.gov.in/guided-walks' }
          ]
        },
        {
          title: 'Visitor Centers',
          description: 'Information centers providing education about the national park.',
          image_url: 'https://www.maharashtratourism.gov.in/visitor-centers.jpg',
          links: [
            { title: 'Center Locations', url: 'https://www.maharashtratourism.gov.in/center-locations' },
            { title: 'Educational Programs', url: 'https://www.maharashtratourism.gov.in/educational-programs' }
          ]
        }
      ]
    },
    animals_found: {
      title: 'Animals Found',
      content: [
        {
          title: 'Mammals',
          description: 'Rich mammal diversity including tigers, leopards, and endemic species.',
          image_url: 'https://www.maharashtratourism.gov.in/mammals.jpg',
          links: [
            { title: 'Mammal Species', url: 'https://www.maharashtratourism.gov.in/mammal-species' },
            { title: 'Conservation Status', url: 'https://www.maharashtratourism.gov.in/conservation-status' }
          ]
        },
        {
          title: 'Birds',
          description: 'Over 200 bird species including many endemic and migratory species.',
          image_url: 'https://www.maharashtratourism.gov.in/birds.jpg',
          links: [
            { title: 'Bird Checklist', url: 'https://www.maharashtratourism.gov.in/bird-checklist' },
            { title: 'Bird Watching', url: 'https://www.maharashtratourism.gov.in/bird-watching' }
          ]
        },
        {
          title: 'Reptiles and Amphibians',
          description: 'Diverse reptile and amphibian species adapted to forest habitats.',
          image_url: 'https://www.maharashtratourism.gov.in/reptiles-amphibians.jpg',
          links: [
            { title: 'Species List', url: 'https://www.maharashtratourism.gov.in/species-list' },
            { title: 'Habitat Studies', url: 'https://www.maharashtratourism.gov.in/habitat-studies' }
          ]
        }
      ]
    }
  }
};

// Radhanagari Wildlife Sanctuary
export const radhanagariData: KarnatakaPOI = {
  id: 'radhanagari_maharashtra',
  name: 'Radhanagari Wildlife Sanctuary',
  category: 'forest',
  coordinates: { lat: 16.4000, lng: 73.8000 },
  description: 'Wildlife sanctuary in the Western Ghats, known for its gaur population.',
  icon_color: '#228B22',
  tabs: {
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'Gaur Population',
          description: 'Home to a significant population of Indian gaur (bison).',
          image_url: 'https://www.maharashtratourism.gov.in/gaur-population.jpg',
          links: [
            { title: 'Gaur Conservation', url: 'https://www.maharashtratourism.gov.in/gaur-conservation' },
            { title: 'Population Studies', url: 'https://www.maharashtratourism.gov.in/population-studies' }
          ]
        },
        {
          title: 'Forest Ecosystem',
          description: 'Diverse forest ecosystem with unique flora and fauna.',
          image_url: 'https://www.maharashtratourism.gov.in/forest-ecosystem.jpg',
          links: [
            { title: 'Ecosystem Study', url: 'https://www.maharashtratourism.gov.in/ecosystem-study' },
            { title: 'Biodiversity Index', url: 'https://www.maharashtratourism.gov.in/biodiversity-index' }
          ]
        }
      ]
    },
    visiting: {
      title: 'Visiting',
      content: [
        {
          title: 'Wildlife Viewing',
          description: 'Opportunities for wildlife viewing and nature photography.',
          image_url: 'https://www.maharashtratourism.gov.in/wildlife-viewing.jpg',
          links: [
            { title: 'Viewing Points', url: 'https://www.maharashtratourism.gov.in/viewing-points' },
            { title: 'Photography Tips', url: 'https://www.maharashtratourism.gov.in/photography-tips' }
          ]
        }
      ]
    },
    animals_found: {
      title: 'Animals Found',
      content: [
        {
          title: 'Wildlife Species',
          description: 'Various wildlife species including gaur, deer, and birds.',
          image_url: 'https://www.maharashtratourism.gov.in/wildlife-species.jpg',
          links: [
            { title: 'Species Inventory', url: 'https://www.maharashtratourism.gov.in/species-inventory' },
            { title: 'Conservation Efforts', url: 'https://www.maharashtratourism.gov.in/conservation-efforts' }
          ]
        }
      ]
    }
  }
};

// Koyna Wildlife Sanctuary
export const koynaData: KarnatakaPOI = {
  id: 'koyna_maharashtra',
  name: 'Koyna Wildlife Sanctuary',
  category: 'forest',
  coordinates: { lat: 17.4000, lng: 73.7000 },
  description: 'Wildlife sanctuary surrounding the Koyna Dam, known for its scenic beauty.',
  icon_color: '#228B22',
  tabs: {
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'Dam Surroundings',
          description: 'Wildlife sanctuary surrounding the Koyna Dam reservoir.',
          image_url: 'https://www.maharashtratourism.gov.in/dam-surroundings.jpg',
          links: [
            { title: 'Dam Information', url: 'https://www.maharashtratourism.gov.in/dam-information' },
            { title: 'Reservoir Area', url: 'https://www.maharashtratourism.gov.in/reservoir-area' }
          ]
        },
        {
          title: 'Scenic Beauty',
          description: 'Beautiful landscapes with forests, hills, and water bodies.',
          image_url: 'https://www.maharashtratourism.gov.in/scenic-beauty.jpg',
          links: [
            { title: 'Scenic Viewpoints', url: 'https://www.maharashtratourism.gov.in/scenic-viewpoints' },
            { title: 'Photography Spots', url: 'https://www.maharashtratourism.gov.in/photography-spots' }
          ]
        }
      ]
    },
    visiting: {
      title: 'Visiting',
      content: [
        {
          title: 'Nature Walks',
          description: 'Guided nature walks to explore the sanctuary.',
          image_url: 'https://www.maharashtratourism.gov.in/nature-walks.jpg',
          links: [
            { title: 'Walk Routes', url: 'https://www.maharashtratourism.gov.in/walk-routes' },
            { title: 'Guided Tours', url: 'https://www.maharashtratourism.gov.in/guided-tours' }
          ]
        }
      ]
    },
    animals_found: {
      title: 'Animals Found',
      content: [
        {
          title: 'Wildlife Diversity',
          description: 'Diverse wildlife adapted to the forest and water environment.',
          image_url: 'https://www.maharashtratourism.gov.in/wildlife-diversity.jpg',
          links: [
            { title: 'Species List', url: 'https://www.maharashtratourism.gov.in/species-list' },
            { title: 'Habitat Information', url: 'https://www.maharashtratourism.gov.in/habitat-information' }
          ]
        }
      ]
    }
  }
};

export default [chandoliData, radhanagariData, koynaData];
