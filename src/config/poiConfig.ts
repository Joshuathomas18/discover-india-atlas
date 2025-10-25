// POI Configuration for Geographical Features
// Defines categories, colors, icons, and labels for Points of Interest

export const POI_CATEGORIES = {
  city: { 
    color: '#3B82F6', 
    icon: '🏙️', 
    label: 'Cities',
    description: 'Major cities and urban centers'
  },
  river: { 
    color: '#06B6D4', 
    icon: '🌊', 
    label: 'Rivers',
    description: 'Major rivers and water bodies'
  },
  mountain: { 
    color: '#78716C', 
    icon: '⛰️', 
    label: 'Mountains',
    description: 'Mountain peaks and ranges'
  },
  wildlife_sanctuary: { 
    color: '#22C55E', 
    icon: '🦁', 
    label: 'Wildlife Sanctuaries',
    description: 'Protected wildlife areas'
  },
  forest: { 
    color: '#16A34A', 
    icon: '🌲', 
    label: 'Forests',
    description: 'Forest areas and reserves'
  },
  waterfall: { 
    color: '#0EA5E9', 
    icon: '💧', 
    label: 'Waterfalls',
    description: 'Natural waterfalls'
  },
  dam: { 
    color: '#6366F1', 
    icon: '🌉', 
    label: 'Dams',
    description: 'Major dams and reservoirs'
  }
} as const;

// Helper function to get POI category config
export function getPOICategoryConfig(category: keyof typeof POI_CATEGORIES) {
  return POI_CATEGORIES[category];
}

// Helper function to get all POI categories
export function getAllPOICategories() {
  return Object.keys(POI_CATEGORIES) as Array<keyof typeof POI_CATEGORIES>;
}

// Helper function to get POI color
export function getPOIColor(category: keyof typeof POI_CATEGORIES): string {
  return POI_CATEGORIES[category].color;
}

// Helper function to get POI icon
export function getPOIIcon(category: keyof typeof POI_CATEGORIES): string {
  return POI_CATEGORIES[category].icon;
}
