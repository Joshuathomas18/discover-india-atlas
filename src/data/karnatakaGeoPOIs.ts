// Karnataka Geographical POI Dataset
// Comprehensive dataset with 50+ POIs across 7 categories

import { GeographicalPOI } from '../types/database';
import { POI_CATEGORIES } from '../config/poiConfig';

export const karnatakaGeoPOIs: GeographicalPOI[] = [
  // Cities (8 major cities)
  {
    id: 'bengaluru_karnataka',
    state_id: 'karnataka',
    name: 'Bengaluru',
    category: 'city',
    description: 'Silicon Valley of India, known for IT industry and pleasant climate',
    coordinates: { lat: 12.9716, lng: 77.5946 },
    icon_color: POI_CATEGORIES.city.color,
    created_at: new Date()
  },
  {
    id: 'mysuru_karnataka',
    state_id: 'karnataka',
    name: 'Mysuru',
    category: 'city',
    description: 'Cultural capital of Karnataka, famous for palaces and heritage',
    coordinates: { lat: 12.2958, lng: 76.6394 },
    icon_color: POI_CATEGORIES.city.color,
    created_at: new Date()
  },
  {
    id: 'mangaluru_karnataka',
    state_id: 'karnataka',
    name: 'Mangaluru',
    category: 'city',
    description: 'Coastal city known for ports and educational institutions',
    coordinates: { lat: 12.9141, lng: 74.8560 },
    icon_color: POI_CATEGORIES.city.color,
    created_at: new Date()
  },
  {
    id: 'hubballi_karnataka',
    state_id: 'karnataka',
    name: 'Hubballi',
    category: 'city',
    description: 'Commercial hub of North Karnataka',
    coordinates: { lat: 15.3647, lng: 75.1240 },
    icon_color: POI_CATEGORIES.city.color,
    created_at: new Date()
  },
  {
    id: 'belagavi_karnataka',
    state_id: 'karnataka',
    name: 'Belagavi',
    category: 'city',
    description: 'Border city known for military cantonment and forts',
    coordinates: { lat: 15.8497, lng: 74.4977 },
    icon_color: POI_CATEGORIES.city.color,
    created_at: new Date()
  },
  {
    id: 'ballari_karnataka',
    state_id: 'karnataka',
    name: 'Ballari',
    category: 'city',
    description: 'Mining city known for iron ore deposits',
    coordinates: { lat: 15.1500, lng: 76.9333 },
    icon_color: POI_CATEGORIES.city.color,
    created_at: new Date()
  },
  {
    id: 'tumakuru_karnataka',
    state_id: 'karnataka',
    name: 'Tumakuru',
    category: 'city',
    description: 'Industrial city known for silk and coconut production',
    coordinates: { lat: 13.3409, lng: 77.1010 },
    icon_color: POI_CATEGORIES.city.color,
    created_at: new Date()
  },
  {
    id: 'shivamogga_karnataka',
    state_id: 'karnataka',
    name: 'Shivamogga',
    category: 'city',
    description: 'Gateway to Western Ghats, known for waterfalls and forests',
    coordinates: { lat: 13.9299, lng: 75.5681 },
    icon_color: POI_CATEGORIES.city.color,
    created_at: new Date()
  },

  // Rivers (7 major rivers)
  {
    id: 'kaveri_river',
    state_id: 'karnataka',
    name: 'Kaveri River',
    category: 'river',
    description: 'Sacred river of South India, lifeline of Karnataka',
    coordinates: { lat: 12.4167, lng: 75.5167 },
    length_km: 765,
    icon_color: POI_CATEGORIES.river.color,
    created_at: new Date()
  },
  {
    id: 'krishna_river',
    state_id: 'karnataka',
    name: 'Krishna River',
    category: 'river',
    description: 'One of the longest rivers in India',
    coordinates: { lat: 15.5000, lng: 76.0000 },
    length_km: 1400,
    icon_color: POI_CATEGORIES.river.color,
    created_at: new Date()
  },
  {
    id: 'tungabhadra_river',
    state_id: 'karnataka',
    name: 'Tungabhadra River',
    category: 'river',
    description: 'Major tributary of Krishna River',
    coordinates: { lat: 15.3500, lng: 76.2000 },
    length_km: 531,
    icon_color: POI_CATEGORIES.river.color,
    created_at: new Date()
  },
  {
    id: 'sharavathi_river',
    state_id: 'karnataka',
    name: 'Sharavathi River',
    category: 'river',
    description: 'River famous for Jog Falls',
    coordinates: { lat: 14.2333, lng: 74.8167 },
    length_km: 128,
    icon_color: POI_CATEGORIES.river.color,
    created_at: new Date()
  },
  {
    id: 'hemavati_river',
    state_id: 'karnataka',
    name: 'Hemavati River',
    category: 'river',
    description: 'Tributary of Kaveri River',
    coordinates: { lat: 12.8333, lng: 76.0000 },
    length_km: 245,
    icon_color: POI_CATEGORIES.river.color,
    created_at: new Date()
  },
  {
    id: 'netravati_river',
    state_id: 'karnataka',
    name: 'Netravati River',
    category: 'river',
    description: 'Coastal river flowing through Mangaluru',
    coordinates: { lat: 12.8500, lng: 74.8500 },
    length_km: 103,
    icon_color: POI_CATEGORIES.river.color,
    created_at: new Date()
  },
  {
    id: 'kali_river',
    state_id: 'karnataka',
    name: 'Kali River',
    category: 'river',
    description: 'River flowing through Western Ghats',
    coordinates: { lat: 15.0000, lng: 74.5000 },
    length_km: 184,
    icon_color: POI_CATEGORIES.river.color,
    created_at: new Date()
  },

  // Mountains (5 major peaks)
  {
    id: 'mullayanagiri_mountain',
    state_id: 'karnataka',
    name: 'Mullayanagiri',
    category: 'mountain',
    description: 'Highest peak in Karnataka',
    coordinates: { lat: 13.3833, lng: 75.7167 },
    elevation: 1930,
    icon_color: POI_CATEGORIES.mountain.color,
    created_at: new Date()
  },
  {
    id: 'kudremukh_mountain',
    state_id: 'karnataka',
    name: 'Kudremukh',
    category: 'mountain',
    description: 'Horse-face shaped peak in Western Ghats',
    coordinates: { lat: 13.1333, lng: 75.2500 },
    elevation: 1894,
    icon_color: POI_CATEGORIES.mountain.color,
    created_at: new Date()
  },
  {
    id: 'brahmagiri_mountain',
    state_id: 'karnataka',
    name: 'Brahmagiri',
    category: 'mountain',
    description: 'Sacred mountain peak in Coorg',
    coordinates: { lat: 12.4167, lng: 75.5167 },
    elevation: 1608,
    icon_color: POI_CATEGORIES.mountain.color,
    created_at: new Date()
  },
  {
    id: 'kumara_parvatha_mountain',
    state_id: 'karnataka',
    name: 'Kumara Parvatha',
    category: 'mountain',
    description: 'Popular trekking destination',
    coordinates: { lat: 12.4500, lng: 75.7000 },
    elevation: 1712,
    icon_color: POI_CATEGORIES.mountain.color,
    created_at: new Date()
  },
  {
    id: 'pushpagiri_mountain',
    state_id: 'karnataka',
    name: 'Pushpagiri',
    category: 'mountain',
    description: 'Mountain peak in Western Ghats',
    coordinates: { lat: 12.5833, lng: 75.7500 },
    elevation: 1712,
    icon_color: POI_CATEGORIES.mountain.color,
    created_at: new Date()
  },

  // Wildlife Sanctuaries (6 sanctuaries)
  {
    id: 'bandipur_sanctuary',
    state_id: 'karnataka',
    name: 'Bandipur National Park',
    category: 'wildlife_sanctuary',
    description: 'Famous tiger reserve and national park',
    coordinates: { lat: 11.6667, lng: 76.6167 },
    area_sq_km: 874,
    species: ['Tiger', 'Elephant', 'Leopard', 'Gaur', 'Sambar'],
    icon_color: POI_CATEGORIES.wildlife_sanctuary.color,
    created_at: new Date()
  },
  {
    id: 'nagarhole_sanctuary',
    state_id: 'karnataka',
    name: 'Nagarhole National Park',
    category: 'wildlife_sanctuary',
    description: 'Rajiv Gandhi National Park, known for elephants',
    coordinates: { lat: 12.0000, lng: 76.1667 },
    area_sq_km: 643,
    species: ['Elephant', 'Tiger', 'Leopard', 'Wild Dog', 'Sloth Bear'],
    icon_color: POI_CATEGORIES.wildlife_sanctuary.color,
    created_at: new Date()
  },
  {
    id: 'dandeli_sanctuary',
    state_id: 'karnataka',
    name: 'Dandeli Wildlife Sanctuary',
    category: 'wildlife_sanctuary',
    description: 'Second largest wildlife sanctuary in Karnataka',
    coordinates: { lat: 15.2500, lng: 74.6167 },
    area_sq_km: 834,
    species: ['Tiger', 'Leopard', 'Elephant', 'Gaur', 'Wild Boar'],
    icon_color: POI_CATEGORIES.wildlife_sanctuary.color,
    created_at: new Date()
  },
  {
    id: 'bhadra_sanctuary',
    state_id: 'karnataka',
    name: 'Bhadra Wildlife Sanctuary',
    category: 'wildlife_sanctuary',
    description: 'Project Tiger reserve in Western Ghats',
    coordinates: { lat: 13.4167, lng: 75.6167 },
    area_sq_km: 492,
    species: ['Tiger', 'Leopard', 'Elephant', 'Gaur', 'Wild Dog'],
    icon_color: POI_CATEGORIES.wildlife_sanctuary.color,
    created_at: new Date()
  },
  {
    id: 'bannerghatta_sanctuary',
    state_id: 'karnataka',
    name: 'Bannerghatta National Park',
    category: 'wildlife_sanctuary',
    description: 'National park near Bengaluru',
    coordinates: { lat: 12.8000, lng: 77.5667 },
    area_sq_km: 104,
    species: ['Tiger', 'Lion', 'Leopard', 'Elephant', 'Bear'],
    icon_color: POI_CATEGORIES.wildlife_sanctuary.color,
    created_at: new Date()
  },
  {
    id: 'br_hills_sanctuary',
    state_id: 'karnataka',
    name: 'BR Hills Wildlife Sanctuary',
    category: 'wildlife_sanctuary',
    description: 'Biligiri Rangaswamy Temple Wildlife Sanctuary',
    coordinates: { lat: 11.9167, lng: 77.0833 },
    area_sq_km: 540,
    species: ['Tiger', 'Elephant', 'Leopard', 'Gaur', 'Wild Dog'],
    icon_color: POI_CATEGORIES.wildlife_sanctuary.color,
    created_at: new Date()
  },

  // Forests (5 forest areas)
  {
    id: 'western_ghats_forest',
    state_id: 'karnataka',
    name: 'Western Ghats Forests',
    category: 'forest',
    description: 'UNESCO World Heritage Site, biodiversity hotspot',
    coordinates: { lat: 13.0000, lng: 75.5000 },
    area_sq_km: 20000,
    icon_color: POI_CATEGORIES.forest.color,
    created_at: new Date()
  },
  {
    id: 'cauvery_forest',
    state_id: 'karnataka',
    name: 'Cauvery Wildlife Sanctuary Forests',
    category: 'forest',
    description: 'Protected forest area along Cauvery River',
    coordinates: { lat: 12.5000, lng: 76.0000 },
    area_sq_km: 1027,
    icon_color: POI_CATEGORIES.forest.color,
    created_at: new Date()
  },
  {
    id: 'kodagu_forest',
    state_id: 'karnataka',
    name: 'Kodagu Forests',
    category: 'forest',
    description: 'Coffee plantations and dense forests',
    coordinates: { lat: 12.4167, lng: 75.7333 },
    area_sq_km: 4102,
    icon_color: POI_CATEGORIES.forest.color,
    created_at: new Date()
  },
  {
    id: 'shimoga_forest',
    state_id: 'karnataka',
    name: 'Shimoga Forests',
    category: 'forest',
    description: 'Dense forests in Malnad region',
    coordinates: { lat: 13.9167, lng: 75.5667 },
    area_sq_km: 8477,
    icon_color: POI_CATEGORIES.forest.color,
    created_at: new Date()
  },
  {
    id: 'uttara_kannada_forest',
    state_id: 'karnataka',
    name: 'Uttara Kannada Forests',
    category: 'forest',
    description: 'Coastal and Western Ghats forests',
    coordinates: { lat: 14.7500, lng: 74.5000 },
    area_sq_km: 10291,
    icon_color: POI_CATEGORIES.forest.color,
    created_at: new Date()
  },

  // Waterfalls (5 major waterfalls)
  {
    id: 'jog_falls',
    state_id: 'karnataka',
    name: 'Jog Falls',
    category: 'waterfall',
    description: 'Second highest plunge waterfall in India',
    coordinates: { lat: 14.2167, lng: 74.8167 },
    height_m: 253,
    icon_color: POI_CATEGORIES.waterfall.color,
    created_at: new Date()
  },
  {
    id: 'abbey_falls',
    state_id: 'karnataka',
    name: 'Abbey Falls',
    category: 'waterfall',
    description: 'Picturesque waterfall in Coorg',
    coordinates: { lat: 12.4167, lng: 75.7333 },
    height_m: 70,
    icon_color: POI_CATEGORIES.waterfall.color,
    created_at: new Date()
  },
  {
    id: 'iruppu_falls',
    state_id: 'karnataka',
    name: 'Iruppu Falls',
    category: 'waterfall',
    description: 'Sacred waterfall near Brahmagiri',
    coordinates: { lat: 12.4000, lng: 75.7000 },
    height_m: 170,
    icon_color: POI_CATEGORIES.waterfall.color,
    created_at: new Date()
  },
  {
    id: 'shivanasamudra_falls',
    state_id: 'karnataka',
    name: 'Shivanasamudra Falls',
    category: 'waterfall',
    description: 'Famous waterfall on Kaveri River',
    coordinates: { lat: 12.2833, lng: 77.1833 },
    height_m: 90,
    icon_color: POI_CATEGORIES.waterfall.color,
    created_at: new Date()
  },
  {
    id: 'gokak_falls',
    state_id: 'karnataka',
    name: 'Gokak Falls',
    category: 'waterfall',
    description: 'Mini Niagara Falls of Karnataka',
    coordinates: { lat: 16.1667, lng: 74.8333 },
    height_m: 52,
    icon_color: POI_CATEGORIES.waterfall.color,
    created_at: new Date()
  },

  // Dams (5 major dams)
  {
    id: 'krishna_raja_sagara_dam',
    state_id: 'karnataka',
    name: 'Krishna Raja Sagara Dam',
    category: 'dam',
    description: 'Famous dam built across Kaveri River',
    coordinates: { lat: 12.4167, lng: 76.5667 },
    capacity_mcm: 49.45,
    icon_color: POI_CATEGORIES.dam.color,
    created_at: new Date()
  },
  {
    id: 'tungabhadra_dam',
    state_id: 'karnataka',
    name: 'Tungabhadra Dam',
    category: 'dam',
    description: 'Major dam on Tungabhadra River',
    coordinates: { lat: 15.3500, lng: 76.2000 },
    capacity_mcm: 135.5,
    icon_color: POI_CATEGORIES.dam.color,
    created_at: new Date()
  },
  {
    id: 'linganamakki_dam',
    state_id: 'karnataka',
    name: 'Linganamakki Dam',
    category: 'dam',
    description: 'Dam on Sharavathi River',
    coordinates: { lat: 14.2167, lng: 74.8167 },
    capacity_mcm: 151.8,
    icon_color: POI_CATEGORIES.dam.color,
    created_at: new Date()
  },
  {
    id: 'almatti_dam',
    state_id: 'karnataka',
    name: 'Almatti Dam',
    category: 'dam',
    description: 'Dam on Krishna River',
    coordinates: { lat: 16.3333, lng: 75.8833 },
    capacity_mcm: 123.08,
    icon_color: POI_CATEGORIES.dam.color,
    created_at: new Date()
  },
  {
    id: 'supa_dam',
    state_id: 'karnataka',
    name: 'Supa Dam',
    category: 'dam',
    description: 'Dam on Kali River',
    coordinates: { lat: 15.2500, lng: 74.6167 },
    capacity_mcm: 4.2,
    icon_color: POI_CATEGORIES.dam.color,
    created_at: new Date()
  }
];

export default karnatakaGeoPOIs;
