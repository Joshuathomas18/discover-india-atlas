// State Configuration for Multi-State Interactive Map
// Defines ALL 36 states/UTs with data and their map coordinates

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
  // States
  {
    id: 'andhra-pradesh',
    name: 'Andhra Pradesh',
    center: { lat: 15.9129, lng: 79.7400 },
    zoom: 7,
    description: 'Rice Bowl of India - Temples, beaches, and rich cultural heritage'
  },
  {
    id: 'assam',
    name: 'Assam',
    center: { lat: 26.2006, lng: 92.9376 },
    zoom: 7,
    description: 'Land of Tea Gardens - Wildlife, tea plantations, and diverse culture'
  },
  {
    id: 'bihar',
    name: 'Bihar',
    center: { lat: 25.0961, lng: 85.3131 },
    zoom: 7,
    description: 'Land of Enlightenment - Buddhist sites, ancient history, and spirituality'
  },
  {
    id: 'chhattisgarh',
    name: 'Chhattisgarh',
    center: { lat: 21.2787, lng: 81.8661 },
    zoom: 7,
    description: 'Rice Bowl of Central India - Tribal culture, waterfalls, and natural beauty'
  },
  {
    id: 'goa',
    name: 'Goa',
    center: { lat: 15.2993, lng: 74.1240 },
    zoom: 9,
    description: 'Pearl of the Orient - Beaches, Portuguese heritage, and vibrant culture'
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    center: { lat: 23.0225, lng: 72.5714 },
    zoom: 7,
    description: 'Land of Legends - Temples, wildlife, and industrial development'
  },
  {
    id: 'haryana',
    name: 'Haryana',
    center: { lat: 29.0588, lng: 76.0856 },
    zoom: 8,
    description: 'Land of Agriculture - Green fields, heritage sites, and modern development'
  },
  {
    id: 'himachal-pradesh',
    name: 'Himachal Pradesh',
    center: { lat: 31.1048, lng: 77.1734 },
    zoom: 8,
    description: 'Land of Snow - Hill stations, scenic beauty, and peaceful retreats'
  },
  {
    id: 'jharkhand',
    name: 'Jharkhand',
    center: { lat: 23.6102, lng: 85.2799 },
    zoom: 7,
    description: 'Land of Forests - Tribal culture, waterfalls, and mineral wealth'
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    center: { lat: 15.3173, lng: 75.7139 },
    zoom: 7,
    description: 'Land of Heritage - Temples, palaces, and technological advancement'
  },
  {
    id: 'kerala',
    name: 'Kerala',
    center: { lat: 10.8505, lng: 76.2711 },
    zoom: 8,
    description: 'God\'s Own Country - Backwaters, beaches, and rich cultural heritage'
  },
  {
    id: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    center: { lat: 22.9734, lng: 78.6569 },
    zoom: 7,
    description: 'Heart of India - Wildlife, temples, and historical monuments'
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    center: { lat: 19.7515, lng: 75.7139 },
    zoom: 7,
    description: 'Gateway of India - Bollywood, colonial architecture, and diverse landscapes'
  },
  {
    id: 'manipur',
    name: 'Manipur',
    center: { lat: 24.6637, lng: 93.9063 },
    zoom: 8,
    description: 'Jewel of India - Floating islands, traditional dance, and natural beauty'
  },
  {
    id: 'meghalaya',
    name: 'Meghalaya',
    center: { lat: 25.4670, lng: 91.3662 },
    zoom: 8,
    description: 'Abode of Clouds - Living root bridges, waterfalls, and matrilineal society'
  },
  {
    id: 'mizoram',
    name: 'Mizoram',
    center: { lat: 23.1645, lng: 92.9376 },
    zoom: 8,
    description: 'Land of the Mizos - Hills, bamboo forests, and vibrant culture'
  },
  {
    id: 'nagaland',
    name: 'Nagaland',
    center: { lat: 26.1584, lng: 94.5624 },
    zoom: 8,
    description: 'Land of Festivals - Tribal culture, Hornbill Festival, and natural beauty'
  },
  {
    id: 'odisha',
    name: 'Odisha',
    center: { lat: 20.9517, lng: 85.0985 },
    zoom: 7,
    description: 'Land of Temples - Ancient architecture, beaches, and tribal culture'
  },
  {
    id: 'punjab',
    name: 'Punjab',
    center: { lat: 31.1471, lng: 75.3412 },
    zoom: 8,
    description: 'Land of Five Rivers - Golden Temple, agriculture, and Sikh heritage'
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    center: { lat: 27.0238, lng: 74.2179 },
    zoom: 7,
    description: 'Land of Kings - Forts, palaces, deserts, and royal heritage'
  },
  {
    id: 'sikkim',
    name: 'Sikkim',
    center: { lat: 27.5330, lng: 88.5122 },
    zoom: 9,
    description: 'Land of Mountains - Himalayas, monasteries, and organic farming'
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    center: { lat: 11.1271, lng: 78.6569 },
    zoom: 7,
    description: 'Land of Temples - Dravidian culture, classical arts, and ancient heritage'
  },
  {
    id: 'telangana',
    name: 'Telangana',
    center: { lat: 18.1124, lng: 79.0193 },
    zoom: 7,
    description: 'Land of Telugu Culture - IT hub, historical monuments, and rich heritage'
  },
  {
    id: 'west-bengal',
    name: 'West Bengal',
    center: { lat: 22.9868, lng: 87.8550 },
    zoom: 7,
    description: 'Land of Culture - Literature, art, tea gardens, and diverse heritage'
  },
  {
    id: 'uttar-pradesh',
    name: 'Uttar Pradesh',
    center: { lat: 26.8467, lng: 80.9462 },
    zoom: 7,
    description: 'Land of Heritage - Taj Mahal, spiritual sites, and cultural diversity'
  },
  
  // Union Territories
  {
    id: 'andaman-nicobar',
    name: 'Andaman & Nicobar Islands',
    center: { lat: 11.7401, lng: 92.6586 },
    zoom: 8,
    description: 'Tropical Paradise - Coral reefs, pristine beaches, and unique biodiversity'
  },
  {
    id: 'chandigarh',
    name: 'Chandigarh',
    center: { lat: 30.7333, lng: 76.7794 },
    zoom: 10,
    description: 'City Beautiful - Planned city, gardens, and modern architecture'
  },
  {
    id: 'dadra-nagar-haveli-daman-diu',
    name: 'Dadra & Nagar Haveli and Daman & Diu',
    center: { lat: 20.1809, lng: 73.0169 },
    zoom: 9,
    description: 'Coastal Union Territory - Beaches, Portuguese heritage, and natural beauty'
  },
  {
    id: 'delhi',
    name: 'Delhi',
    center: { lat: 28.7041, lng: 77.1025 },
    zoom: 9,
    description: 'Capital of India - Historical monuments, modern development, and cultural diversity'
  },
  {
    id: 'jammu-kashmir',
    name: 'Jammu & Kashmir',
    center: { lat: 34.0837, lng: 74.7973 },
    zoom: 7,
    description: 'Paradise on Earth - Mountains, lakes, and breathtaking landscapes'
  },
  {
    id: 'ladakh',
    name: 'Ladakh',
    center: { lat: 34.1526, lng: 77.5771 },
    zoom: 8,
    description: 'Land of High Passes - Monasteries, mountains, and unique culture'
  },
  {
    id: 'lakshadweep',
    name: 'Lakshadweep',
    center: { lat: 10.5667, lng: 72.6417 },
    zoom: 9,
    description: 'Coral Islands - Pristine beaches, marine life, and tropical paradise'
  },
  {
    id: 'puducherry',
    name: 'Puducherry',
    center: { lat: 11.9416, lng: 79.8083 },
    zoom: 9,
    description: 'French Riviera of the East - Colonial architecture, beaches, and spiritual centers'
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
