// Uttar Pradesh Wildlife Data
// Wildlife sanctuaries and national parks

import { KarnatakaPOI } from '../../types/database';

// Dudhwa National Park
export const dudhwaData: KarnatakaPOI = {
  id: 'dudhwa_uttar_pradesh',
  name: 'Dudhwa National Park',
  category: 'wildlife',
  coordinates: { lat: 28.5000, lng: 80.7000 },
  description: 'National park known for its tiger population and diverse wildlife.',
  icon_color: '#FF8C00',
  tabs: {
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'Tiger Reserve',
          description: 'Dudhwa National Park is a Project Tiger reserve with significant tiger population.',
          image_url: 'https://www.uptourism.gov.in/tiger-reserve.jpg',
          links: [
            { title: 'Tiger Population', url: 'https://www.uptourism.gov.in/tiger-population' },
            { title: 'Conservation Programs', url: 'https://www.uptourism.gov.in/conservation-programs' }
          ]
        },
        {
          title: 'Biodiversity',
          description: 'Rich biodiversity with over 200 species of birds and numerous mammal species.',
          image_url: 'https://www.uptourism.gov.in/biodiversity.jpg',
          links: [
            { title: 'Species List', url: 'https://www.uptourism.gov.in/species-list' },
            { title: 'Research Studies', url: 'https://www.uptourism.gov.in/research-studies' }
          ]
        },
        {
          title: 'Ecosystem',
          description: 'Diverse ecosystem including grasslands, wetlands, and forests.',
          image_url: 'https://www.uptourism.gov.in/ecosystem.jpg',
          links: [
            { title: 'Ecosystem Types', url: 'https://www.uptourism.gov.in/ecosystem-types' },
            { title: 'Ecological Studies', url: 'https://www.uptourism.gov.in/ecological-studies' }
          ]
        }
      ]
    },
    visiting: {
      title: 'Visiting',
      content: [
        {
          title: 'Safari Options',
          description: 'Various safari options including jeep safaris and elephant rides.',
          image_url: 'https://www.uptourism.gov.in/safari-options.jpg',
          links: [
            { title: 'Safari Booking', url: 'https://www.uptourism.gov.in/safari-booking' },
            { title: 'Safari Timings', url: 'https://www.uptourism.gov.in/safari-timings' }
          ]
        },
        {
          title: 'Best Time to Visit',
          description: 'Best time to visit is from November to May when wildlife is most active.',
          image_url: 'https://www.uptourism.gov.in/best-time.jpg',
          links: [
            { title: 'Seasonal Guide', url: 'https://www.uptourism.gov.in/seasonal-guide' },
            { title: 'Weather Information', url: 'https://www.uptourism.gov.in/weather-information' }
          ]
        },
        {
          title: 'Accommodation',
          description: 'Various accommodation options from forest lodges to luxury resorts.',
          image_url: 'https://www.uptourism.gov.in/accommodation.jpg',
          links: [
            { title: 'Lodge Booking', url: 'https://www.uptourism.gov.in/lodge-booking' },
            { title: 'Resort Options', url: 'https://www.uptourism.gov.in/resort-options' }
          ]
        }
      ]
    },
    animals_found: {
      title: 'Animals Found',
      content: [
        {
          title: 'Big Cats',
          description: 'Home to tigers, leopards, and other big cat species.',
          image_url: 'https://www.uptourism.gov.in/big-cats.jpg',
          links: [
            { title: 'Tiger Spotting', url: 'https://www.uptourism.gov.in/tiger-spotting' },
            { title: 'Leopard Sightings', url: 'https://www.uptourism.gov.in/leopard-sightings' }
          ]
        },
        {
          title: 'Herbivores',
          description: 'Large population of elephants, deer, and other herbivorous animals.',
          image_url: 'https://www.uptourism.gov.in/herbivores.jpg',
          links: [
            { title: 'Elephant Herds', url: 'https://www.uptourism.gov.in/elephant-herds' },
            { title: 'Deer Species', url: 'https://www.uptourism.gov.in/deer-species' }
          ]
        },
        {
          title: 'Bird Species',
          description: 'Over 200 species of birds including migratory and resident species.',
          image_url: 'https://www.uptourism.gov.in/bird-species.jpg',
          links: [
            { title: 'Bird Watching', url: 'https://www.uptourism.gov.in/bird-watching' },
            { title: 'Bird Checklist', url: 'https://www.uptourism.gov.in/bird-checklist' }
          ]
        }
      ]
    }
  }
};

// Katarniaghat Wildlife Sanctuary
export const katarniaghatData: KarnatakaPOI = {
  id: 'katarniaghat_uttar_pradesh',
  name: 'Katarniaghat Wildlife Sanctuary',
  category: 'wildlife',
  coordinates: { lat: 28.2000, lng: 81.0000 },
  description: 'Wildlife sanctuary known for its gharial population and diverse aquatic life.',
  icon_color: '#FF8C00',
  tabs: {
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'Gharial Conservation',
          description: 'Important conservation area for the critically endangered gharial.',
          image_url: 'https://www.uptourism.gov.in/gharial-conservation.jpg',
          links: [
            { title: 'Gharial Population', url: 'https://www.uptourism.gov.in/gharial-population' },
            { title: 'Conservation Efforts', url: 'https://www.uptourism.gov.in/conservation-efforts' }
          ]
        },
        {
          title: 'Aquatic Ecosystem',
          description: 'Rich aquatic ecosystem with diverse fish and reptile species.',
          image_url: 'https://www.uptourism.gov.in/aquatic-ecosystem.jpg',
          links: [
            { title: 'Aquatic Species', url: 'https://www.uptourism.gov.in/aquatic-species' },
            { title: 'Ecosystem Study', url: 'https://www.uptourism.gov.in/ecosystem-study' }
          ]
        }
      ]
    },
    visiting: {
      title: 'Visiting',
      content: [
        {
          title: 'Boat Safaris',
          description: 'Boat safaris available for wildlife viewing along the river.',
          image_url: 'https://www.uptourism.gov.in/boat-safaris.jpg',
          links: [
            { title: 'Safari Booking', url: 'https://www.uptourism.gov.in/safari-booking' },
            { title: 'Safari Routes', url: 'https://www.uptourism.gov.in/safari-routes' }
          ]
        }
      ]
    },
    animals_found: {
      title: 'Animals Found',
      content: [
        {
          title: 'Aquatic Wildlife',
          description: 'Diverse aquatic wildlife including gharials, crocodiles, and fish.',
          image_url: 'https://www.uptourism.gov.in/aquatic-wildlife.jpg',
          links: [
            { title: 'Species List', url: 'https://www.uptourism.gov.in/species-list' },
            { title: 'Wildlife Viewing', url: 'https://www.uptourism.gov.in/wildlife-viewing' }
          ]
        }
      ]
    }
  }
};

// Chandra Prabha Wildlife Sanctuary
export const chandraPrabhaData: KarnatakaPOI = {
  id: 'chandra_prabha_uttar_pradesh',
  name: 'Chandra Prabha Wildlife Sanctuary',
  category: 'wildlife',
  coordinates: { lat: 25.0000, lng: 82.0000 },
  description: 'Wildlife sanctuary known for its scenic beauty and diverse wildlife.',
  icon_color: '#FF8C00',
  tabs: {
    facts: {
      title: 'Facts',
      content: [
        {
          title: 'Scenic Beauty',
          description: 'Known for its beautiful landscapes and natural scenery.',
          image_url: 'https://www.uptourism.gov.in/scenic-beauty.jpg',
          links: [
            { title: 'Landscape Features', url: 'https://www.uptourism.gov.in/landscape-features' },
            { title: 'Natural Beauty', url: 'https://www.uptourism.gov.in/natural-beauty' }
          ]
        },
        {
          title: 'Wildlife Diversity',
          description: 'Diverse wildlife including various mammal and bird species.',
          image_url: 'https://www.uptourism.gov.in/wildlife-diversity.jpg',
          links: [
            { title: 'Species Inventory', url: 'https://www.uptourism.gov.in/species-inventory' },
            { title: 'Conservation Status', url: 'https://www.uptourism.gov.in/conservation-status' }
          ]
        }
      ]
    },
    visiting: {
      title: 'Visiting',
      content: [
        {
          title: 'Nature Walks',
          description: 'Guided nature walks available for exploring the sanctuary.',
          image_url: 'https://www.uptourism.gov.in/nature-walks.jpg',
          links: [
            { title: 'Walk Routes', url: 'https://www.uptourism.gov.in/walk-routes' },
            { title: 'Guided Tours', url: 'https://www.uptourism.gov.in/guided-tours' }
          ]
        }
      ]
    },
    animals_found: {
      title: 'Animals Found',
      content: [
        {
          title: 'Wildlife Species',
          description: 'Various wildlife species adapted to the forest environment.',
          image_url: 'https://www.uptourism.gov.in/wildlife-species.jpg',
          links: [
            { title: 'Species List', url: 'https://www.uptourism.gov.in/species-list' },
            { title: 'Wildlife Viewing', url: 'https://www.uptourism.gov.in/wildlife-viewing' }
          ]
        }
      ]
    }
  }
};

export default [dudhwaData, katarniaghatData, chandraPrabhaData];
