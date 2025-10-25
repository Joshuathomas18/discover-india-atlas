// Karnataka POI Configuration with Custom Icons
// Defines categories, icons, and tab structures for Karnataka POIs

export const KARNATAKA_POI_CATEGORIES = {
  place: { 
    icon: '📍', 
    color: '#3b82f6', // Blue
    label: 'Cities',
    description: 'Major cities and urban centers',
    tabs: ['monuments', 'food', 'customs', 'festivals', 'history']
  },
  river: { 
    icon: '🌊', 
    color: '#06b6d4', // Cyan
    label: 'Rivers',
    description: 'Major rivers and water bodies',
    tabs: ['facts', 'fishes', 'how_to_reach']
  },
  mountain: { 
    icon: '⛰️', 
    color: '#6b7280', // Gray
    label: 'Mountains',
    description: 'Mountain peaks and trekking destinations',
    tabs: ['facts', 'trekking', 'how_to_reach']
  },
  wildlife: { 
    icon: '🐘', // Default, will be customized per sanctuary
    color: '#10b981', // Green
    label: 'Wildlife Sanctuaries',
    description: 'Protected wildlife areas',
    tabs: ['facts', 'visiting_info', 'animals_found']
  },
  forest: { 
    icon: '🌲', 
    color: '#059669', // Dark green
    label: 'Forests',
    description: 'Forest areas and reserves',
    tabs: ['facts', 'visiting_info', 'animals_found']
  },
  waterfall: { 
    icon: '💧', 
    color: '#0ea5e9', // Light blue
    label: 'Waterfalls',
    description: 'Natural waterfalls',
    tabs: ['size', 'rivers_associated', 'facts_tourists', 'how_to_reach']
  },
  dam: { 
    icon: '🌉', 
    color: '#8b5cf6', // Purple
    label: 'Dams',
    description: 'Major dams and reservoirs',
    tabs: ['size', 'rivers_associated', 'facts_tourists', 'how_to_reach']
  }
} as const;

// Custom icons for specific wildlife sanctuaries
export const WILDLIFE_ICONS = {
  'bandipur': '🐅', // Tiger
  'nagarhole': '🐘', // Elephant
  'dandeli': '🦌', // Deer
  'bhadra': '🐅', // Tiger
  'bannerghatta': '🦁', // Lion
  'br_hills': '🐘' // Elephant
} as const;

// Helper functions
export function getKarnatakaPOICategoryConfig(category: keyof typeof KARNATAKA_POI_CATEGORIES) {
  return KARNATAKA_POI_CATEGORIES[category];
}

export function getWildlifeIcon(sanctuaryName: string): string {
  const key = sanctuaryName.toLowerCase().replace(/\s+/g, '_');
  return WILDLIFE_ICONS[key as keyof typeof WILDLIFE_ICONS] || '🐘';
}

export function getKarnatakaPOIIcon(category: keyof typeof KARNATAKA_POI_CATEGORIES, name?: string): string {
  if (category === 'wildlife' && name) {
    return getWildlifeIcon(name);
  }
  return KARNATAKA_POI_CATEGORIES[category].icon;
}

export function getKarnatakaPOIColor(category: keyof typeof KARNATAKA_POI_CATEGORIES): string {
  return KARNATAKA_POI_CATEGORIES[category].color;
}
