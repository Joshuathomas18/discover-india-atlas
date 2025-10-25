// State Configuration for Multi-State Interactive Map
// Defines the 7 states with data and their map coordinates

export interface StateConfig {
  id: string;
  name: string;
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
  description: string;
}

export const STATES_WITH_DATA: StateConfig[] = [
  {
    id: 'kerala',
    name: 'Kerala',
    center: { lat: 10.8505, lng: 76.2711 },
    zoom: 8,
    description: 'God\'s Own Country - Backwaters, beaches, and rich cultural heritage'
  },
  {
    id: 'goa',
    name: 'Goa',
    center: { lat: 15.2993, lng: 74.1240 },
    zoom: 9,
    description: 'Pearl of the Orient - Beaches, Portuguese heritage, and vibrant culture'
  },
  {
    id: 'tamil_nadu',
    name: 'Tamil Nadu',
    center: { lat: 11.1271, lng: 78.6569 },
    zoom: 7,
    description: 'Land of Temples - Dravidian culture, classical arts, and ancient heritage'
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    center: { lat: 15.3173, lng: 75.7139 },
    zoom: 7,
    description: 'Land of Heritage - Temples, palaces, and technological advancement'
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    center: { lat: 19.7515, lng: 75.7139 },
    zoom: 7,
    description: 'Gateway of India - Bollywood, colonial architecture, and diverse landscapes'
  },
  {
    id: 'uttarakhand',
    name: 'Uttarakhand',
    center: { lat: 30.0668, lng: 79.0193 },
    zoom: 8,
    description: 'Land of Gods - Himalayas, spiritual sites, and adventure tourism'
  },
  {
    id: 'himachal_pradesh',
    name: 'Himachal Pradesh',
    center: { lat: 31.1048, lng: 77.1734 },
    zoom: 8,
    description: 'Land of Snow - Hill stations, scenic beauty, and peaceful retreats'
  }
];

// Helper function to get state config by ID
export function getStateConfig(stateId: string): StateConfig | undefined {
  return STATES_WITH_DATA.find(state => state.id === stateId);
}

// Helper function to check if state has data
export function hasStateData(stateId: string): boolean {
  return STATES_WITH_DATA.some(state => state.id === stateId);
}
