export interface TripPreferences {
  place?: string;
  region?: string;
  terrain?: 'hills' | 'plains' | 'mixed';
  activityType?: 'adventure' | 'culture' | 'nature' | 'relaxation';
  days?: '2-3' | '4-5' | '6-7' | '1week+';
  budget?: 'budget' | 'mid-range' | 'luxury';
}

export interface ItineraryActivity {
  time: string;
  activity: string;
  place_id?: string;
  duration: string;
  description: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  activities: ItineraryActivity[];
  meals: {
    breakfast: string;
    lunch: string;
    dinner: string;
  };
  accommodation: string;
}

export interface BudgetBreakdown {
  accommodation: string;
  food: string;
  transport: string;
  activities: string;
  total: string;
}

export interface TripItinerary {
  title: string;
  overview: string;
  days: ItineraryDay[];
  budget_breakdown: BudgetBreakdown;
  tips: string[];
}

export enum ConversationState {
  INITIAL = 'INITIAL',
  HAS_PLACE = 'HAS_PLACE',
  REGION_SELECT = 'REGION_SELECT',
  TERRAIN_SELECT = 'TERRAIN_SELECT',
  ACTIVITY_SELECT = 'ACTIVITY_SELECT',
  DAYS_SELECT = 'DAYS_SELECT',
  BUDGET_SELECT = 'BUDGET_SELECT',
  GENERATING = 'GENERATING',
  COMPLETE = 'COMPLETE'
}

export interface TripPlannerSession {
  conversationState: ConversationState;
  preferences: Partial<TripPreferences>;
  currentItinerary?: TripItinerary;
  messageHistory: any[];
}

export interface PreferenceOption {
  value: string;
  label: string;
  emoji?: string;
}

export const REGION_OPTIONS: PreferenceOption[] = [
  { value: 'north', label: 'North India', emoji: '🏔️' },
  { value: 'south', label: 'South India', emoji: '🌴' }
];

export const TERRAIN_OPTIONS: PreferenceOption[] = [
  { value: 'hills', label: 'Hills & Mountains', emoji: '🏔️' },
  { value: 'plains', label: 'Plains & Beaches', emoji: '🏖️' },
  { value: 'mixed', label: 'Mix of Both', emoji: '🌲' }
];

export const ACTIVITY_OPTIONS: PreferenceOption[] = [
  { value: 'adventure', label: 'Adventure & Outdoors', emoji: '🎒' },
  { value: 'culture', label: 'Culture & Heritage', emoji: '🏛️' },
  { value: 'nature', label: 'Nature & Wildlife', emoji: '🌿' },
  { value: 'relaxation', label: 'Relaxation & Leisure', emoji: '😌' }
];

export const DAYS_OPTIONS: PreferenceOption[] = [
  { value: '2-3', label: '2-3 days' },
  { value: '4-5', label: '4-5 days' },
  { value: '6-7', label: '6-7 days' },
  { value: '1week+', label: '1 week+' }
];

export const BUDGET_OPTIONS: PreferenceOption[] = [
  { value: 'budget', label: 'Budget (₹5k-15k)', emoji: '💰' },
  { value: 'mid-range', label: 'Mid-range (₹15k-30k)', emoji: '💵' },
  { value: 'luxury', label: 'Luxury (₹30k+)', emoji: '💎' }
];
