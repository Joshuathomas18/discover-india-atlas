// Database Schema Types for India Cultural Atlas

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface ImageReference {
  storage_path: string; // Firebase Storage path for blob storage
  download_url: string; // Generated download URL
  caption: string;
  credit: string;
  alt_text: string;
  uploaded_at: Date;
}

export interface ActionButton {
  label: string;
  type: 'external_link' | 'modal' | 'places_search' | 'highlight_pins';
  url?: string;
  content?: string;
  query?: string;
  pins?: string[];
}

export interface TravelInfo {
  by_air?: string;
  by_train?: string;
  by_road?: string;
  by_bus?: string;
}

// Legacy POI types for compatibility
export type POICategory = 'city' | 'river' | 'mountain' | 'wildlife_sanctuary' | 'forest' | 'waterfall' | 'dam';

export interface GeographicalPOI {
  id: string;
  state_id: string;
  name: string;
  category: POICategory;
  description: string;
  coordinates: Coordinates;
  elevation?: number; // For mountains
  length_km?: number; // For rivers
  area_sq_km?: number; // For forests, sanctuaries
  species?: string[]; // For wildlife sanctuaries
  height_m?: number; // For waterfalls
  capacity_mcm?: number; // For dams
  icon_color: string; // Marker color
  created_at: Date;
}

// Karnataka-specific category tab structures
export interface PlaceTabs {
  monuments: CulturalItem[];
  food: CulturalItem[];
  customs: CulturalItem[];
  festivals: CulturalItem[];
  history: CulturalItem[];
}

export interface RiverTabs {
  facts: string;
  fishes: string[];
  how_to_reach: string;
}

export interface MountainTabs {
  facts: string;
  trekking: string;
  how_to_reach: string;
}

export interface WildlifeTabs {
  facts: string;
  visiting_info: string;
  animals_found: string[];
}

export interface ForestTabs {
  facts: string;
  visiting_info: string;
  animals_found: string[];
}

export interface WaterfallTabs {
  size: string;
  rivers_associated: string[];
  facts_tourists: string;
  how_to_reach: string;
}

export interface DamTabs {
  size: string;
  rivers_associated: string[];
  facts_tourists: string;
  how_to_reach: string;
}

// Updated POI types for Karnataka
export type KarnatakaPOICategory = 'place' | 'river' | 'mountain' | 'wildlife' | 'forest' | 'waterfall' | 'dam';

export interface KarnatakaPOI {
  id: string;
  name: string;
  category: KarnatakaPOICategory;
  description: string;
  coordinates: Coordinates;
  banner_image: ImageReference;
  tabs: PlaceTabs | RiverTabs | MountainTabs | WildlifeTabs | ForestTabs | WaterfallTabs | DamTabs;
  icon_type: string; // For custom icons
  created_at: Date;
}

// Level 1: States Collection
export interface State {
  id: string; // e.g., "rajasthan"
  name: string; // e.g., "Rajasthan"
  capital: string; // e.g., "Jaipur"
  description: string; // Comprehensive state overview
  coordinates: Coordinates; // State center coordinates
  banner_image: ImageReference; // State banner image stored in blob storage
  best_time_to_visit: string; // e.g., "October to March"
  languages: string[]; // e.g., ["Hindi", "Rajasthani"]
  population: string; // e.g., "68.5 million"
  area_sq_km: number; // e.g., 342239
  created_at: Date;
  updated_at: Date;
}

// Level 2: Places Collection (7-8 per state)
export interface Place {
  id: string; // e.g., "jaipur_rajasthan"
  state_id: string; // Reference to state
  name: string; // e.g., "Jaipur"
  type: 'city' | 'town' | 'village' | 'heritage_site' | 'hill_station' | 'beach';
  nickname?: string; // e.g., "The Pink City"
  description: string; // Detailed place description
  coordinates: Coordinates; // Place coordinates
  banner_image: ImageReference; // Place banner image stored in blob storage
  population?: string; // e.g., "3.1 million"
  best_time_to_visit: string; // e.g., "October to March"
  how_to_reach: TravelInfo;
  created_at: Date;
  updated_at: Date;
}

// Level 3: Cultural Items Collection (3-5 per category per place)
export interface CulturalItem {
  id: string; // e.g., "amber_fort_jaipur"
  place_id: string; // Reference to place
  state_id: string; // Reference to state (for faster queries)
  category: 'monuments' | 'food' | 'customs' | 'festivals' | 'history';
  name: string; // e.g., "Amber Fort"
  description: string; // Brief description (1-2 sentences)
  details: string; // Comprehensive details (2-3 paragraphs)
  coordinates?: Coordinates; // Specific location coordinates
  images: ImageReference[]; // 2-3 images stored in blob storage
  actions: {
    primary: ActionButton;
    secondary?: ActionButton;
  };
  opening_hours?: string; // e.g., "9:00 AM - 5:30 PM"
  entry_fee?: string; // e.g., "INR 500 (foreigners), INR 100 (Indians)"
  best_time?: string; // e.g., "Early morning or late afternoon"
  duration?: string; // e.g., "2-3 hours"
  accessibility_info?: string;
  created_at: Date;
  updated_at: Date;
}

// Indexing interfaces for efficient queries
export interface StateIndex {
  id: string;
  name: string;
  coordinates: Coordinates;
  banner_image_url: string; // Direct URL for quick access
  places_count: number; // Number of places in this state
}

export interface PlaceIndex {
  id: string;
  state_id: string;
  name: string;
  type: string;
  coordinates: Coordinates;
  banner_image_url: string; // Direct URL for quick access
  cultural_items_count: number; // Number of cultural items
}

export interface CulturalItemIndex {
  id: string;
  place_id: string;
  state_id: string;
  category: string;
  name: string;
  coordinates?: Coordinates;
  primary_image_url: string; // First image URL for quick access
  has_actions: boolean; // Whether item has action buttons
}

// Query result interfaces
export interface StateWithPlaces extends State {
  places: Place[];
}

export interface PlaceWithCulturalItems extends Place {
  cultural_items: CulturalItem[];
}

export interface CulturalItemsByCategory {
  monuments: CulturalItem[];
  food: CulturalItem[];
  customs: CulturalItem[];
  festivals: CulturalItem[];
  history: CulturalItem[];
}

// Image upload interfaces
export interface ImageUploadResult {
  storage_path: string;
  download_url: string;
  metadata: {
    size: number;
    contentType: string;
    uploaded_at: Date;
  };
}

export interface BatchImageUpload {
  state_id: string;
  place_id: string;
  category: string;
  item_id: string;
  images: File[];
}

// Search and filter interfaces
export interface SearchFilters {
  states?: string[];
  categories?: string[];
  place_types?: string[];
  has_images?: boolean;
  has_actions?: boolean;
}

export interface SearchResult {
  states: StateIndex[];
  places: PlaceIndex[];
  cultural_items: CulturalItemIndex[];
  total_results: number;
}
