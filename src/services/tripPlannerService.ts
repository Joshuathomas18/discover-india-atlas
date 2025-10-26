import { 
  TripPreferences, 
  TripItinerary, 
  ConversationState, 
  TripPlannerSession,
  REGION_OPTIONS,
  TERRAIN_OPTIONS,
  ACTIVITY_OPTIONS,
  DAYS_OPTIONS,
  BUDGET_OPTIONS
} from '../types/tripPlanner';
import { meilisearchService } from './meilisearchService';
import { geminiService } from './geminiService';

class TripPlannerService {
  private session: TripPlannerSession = {
    conversationState: ConversationState.INITIAL,
    preferences: {},
    messageHistory: []
  };

  /**
   * Initialize trip planner session
   */
  initializeSession(): TripPlannerSession {
    this.session = {
      conversationState: ConversationState.INITIAL,
      preferences: {},
      messageHistory: []
    };
    return this.session;
  }

  /**
   * Get current session state
   */
  getCurrentSession(): TripPlannerSession {
    return this.session;
  }

  /**
   * Handle user response and update conversation state
   */
  handleUserResponse(response: string, optionValue?: string): {
    nextState: ConversationState;
    message: string;
    options?: Array<{ value: string; label: string; emoji?: string }>;
    questionType?: ConversationState;
    isComplete: boolean;
  } {
    const currentState = this.session.conversationState;

    switch (currentState) {
      case ConversationState.INITIAL:
        if (response.toLowerCase().includes('yes') || optionValue === 'yes') {
          this.session.conversationState = ConversationState.HAS_PLACE;
          return {
            nextState: ConversationState.HAS_PLACE,
            message: "Great! Which place would you like to visit? Please type the name of the city or place.",
            questionType: ConversationState.HAS_PLACE,
            isComplete: false
          };
        } else {
          this.session.conversationState = ConversationState.REGION_SELECT;
          return {
            nextState: ConversationState.REGION_SELECT,
            message: "Which region of India would you like to explore?",
            options: REGION_OPTIONS,
            questionType: ConversationState.REGION_SELECT,
            isComplete: false
          };
        }

      case ConversationState.HAS_PLACE:
        // Validate place and extract region
        const placeValidation = this.validatePlace(response);
        if (placeValidation.isValid) {
          this.session.preferences.place = response;
          this.session.preferences.region = placeValidation.region;
          this.session.conversationState = ConversationState.DAYS_SELECT;
          return {
            nextState: ConversationState.DAYS_SELECT,
            message: `Perfect! I found ${response}. How many days are you planning for your trip?`,
            options: DAYS_OPTIONS,
            questionType: ConversationState.DAYS_SELECT,
            isComplete: false
          };
        } else {
          return {
            nextState: ConversationState.HAS_PLACE,
            message: "I couldn't find that place. Could you please try a different city or place name?",
            questionType: ConversationState.HAS_PLACE,
            isComplete: false
          };
        }

      case ConversationState.REGION_SELECT:
        if (optionValue) {
          this.session.preferences.region = optionValue;
          this.session.conversationState = ConversationState.TERRAIN_SELECT;
          const regionName = REGION_OPTIONS.find(r => r.value === optionValue)?.label || optionValue;
          return {
            nextState: ConversationState.TERRAIN_SELECT,
            message: `Great choice! ${regionName} has amazing diversity. What kind of terrain do you prefer?`,
            options: TERRAIN_OPTIONS,
            questionType: ConversationState.TERRAIN_SELECT,
            isComplete: false
          };
        }
        break;

      case ConversationState.TERRAIN_SELECT:
        if (optionValue) {
          this.session.preferences.terrain = optionValue as 'hills' | 'plains' | 'mixed';
          this.session.conversationState = ConversationState.ACTIVITY_SELECT;
          return {
            nextState: ConversationState.ACTIVITY_SELECT,
            message: "What's your travel style? What kind of activities interest you most?",
            options: ACTIVITY_OPTIONS,
            questionType: ConversationState.ACTIVITY_SELECT,
            isComplete: false
          };
        }
        break;

      case ConversationState.ACTIVITY_SELECT:
        if (optionValue) {
          this.session.preferences.activityType = optionValue as 'adventure' | 'culture' | 'nature' | 'relaxation';
          this.session.conversationState = ConversationState.DAYS_SELECT;
          return {
            nextState: ConversationState.DAYS_SELECT,
            message: "How many days are you planning for your trip?",
            options: DAYS_OPTIONS,
            questionType: ConversationState.DAYS_SELECT,
            isComplete: false
          };
        }
        break;

      case ConversationState.DAYS_SELECT:
        if (optionValue) {
          this.session.preferences.days = optionValue as '2-3' | '4-5' | '6-7' | '1week+';
          this.session.conversationState = ConversationState.BUDGET_SELECT;
          return {
            nextState: ConversationState.BUDGET_SELECT,
            message: "What's your budget range per person for this trip?",
            options: BUDGET_OPTIONS,
            questionType: ConversationState.BUDGET_SELECT,
            isComplete: false
          };
        }
        break;

      case ConversationState.BUDGET_SELECT:
        if (optionValue) {
          this.session.preferences.budget = optionValue as 'budget' | 'mid-range' | 'luxury';
          this.session.conversationState = ConversationState.GENERATING;
          return {
            nextState: ConversationState.GENERATING,
            message: "Perfect! Let me create your personalized itinerary... ✨",
            questionType: ConversationState.GENERATING,
            isComplete: false
          };
        }
        break;
    }

    return {
      nextState: currentState,
      message: "I didn't understand that. Could you please try again?",
      isComplete: false
    };
  }

  /**
   * Validate if a place exists in our data
   */
  private validatePlace(placeName: string): { isValid: boolean; region?: string } {
    // This is a simplified validation - in a real app, you'd query your database
    const placeRegionMap: { [key: string]: string } = {
      // North India
      'mumbai': 'north',
      'pune': 'north',
      'delhi': 'north',
      'jaipur': 'north',
      'udaipur': 'north',
      'jodhpur': 'north',
      'lucknow': 'north',
      'varanasi': 'north',
      'agra': 'north',
      'shimla': 'north',
      'manali': 'north',
      'dharamshala': 'north',
      'dehradun': 'north',
      'rishikesh': 'north',
      'haridwar': 'north',
      'ahmedabad': 'north',
      'vadodara': 'north',
      'surat': 'north',
      'kolkata': 'north',
      'darjeeling': 'north',
      'amritsar': 'north',
      'ludhiana': 'north',
      'gurugram': 'north',
      'faridabad': 'north',
      'bhopal': 'north',
      'indore': 'north',
      'gwalior': 'north',
      'raipur': 'north',
      'bhilai': 'north',
      'ranchi': 'north',
      'jamshedpur': 'north',
      'patna': 'north',
      'gaya': 'north',
      'gangtok': 'north',
      'pelling': 'north',
      'shillong': 'north',
      'cherrapunjee': 'north',
      'imphal': 'north',
      'leh': 'north',
      'kargil': 'north',
      
      // South India
      'bangalore': 'south',
      'bengaluru': 'south',
      'mysore': 'south',
      'mangalore': 'south',
      'kochi': 'south',
      'thiruvananthapuram': 'south',
      'munnar': 'south',
      'goa': 'south',
      'panaji': 'south',
      'chennai': 'south',
      'madurai': 'south',
      'coimbatore': 'south',
      'hyderabad': 'south',
      'warangal': 'south',
      'visakhapatnam': 'south',
      'vijayawada': 'south',
      'bhubaneswar': 'south',
      'cuttack': 'south',
      'guwahati': 'south',
      'jorhat': 'south'
    };

    const normalizedPlace = placeName.toLowerCase().trim();
    const region = placeRegionMap[normalizedPlace];
    
    return {
      isValid: !!region,
      region
    };
  }

  /**
   * Generate itinerary using hybrid approach
   */
  async generateItinerary(): Promise<TripItinerary> {
    try {
      // Step 1: Query Meilisearch for relevant POIs
      const relevantPOIs = await this.getRelevantPOIs();
      
      // Step 2: Send to Gemini for itinerary generation
      const itinerary = await geminiService.generateTripItinerary(
        this.session.preferences as TripPreferences,
        relevantPOIs
      );

      // Step 3: Update session
      this.session.currentItinerary = itinerary;
      this.session.conversationState = ConversationState.COMPLETE;

      return itinerary;
    } catch (error) {
      console.error('Error generating itinerary:', error);
      throw new Error('Failed to generate itinerary. Please try again.');
    }
  }

  /**
   * Get relevant POIs based on preferences
   */
  private async getRelevantPOIs(): Promise<any[]> {
    const { region, terrain, activityType } = this.session.preferences;
    
    try {
      // Build search query based on preferences
      let searchQuery = '';
      
      if (region) {
        const regionName = region === 'north' ? 'North India' : 'South India';
        searchQuery += regionName;
      }

      // Add terrain-specific keywords
      if (terrain === 'hills') {
        searchQuery += ' mountains hills trekking';
      } else if (terrain === 'plains') {
        searchQuery += ' beaches plains coastal';
      }

      // Add activity-specific keywords
      if (activityType === 'adventure') {
        searchQuery += ' adventure trekking hiking outdoor';
      } else if (activityType === 'culture') {
        searchQuery += ' monuments temples heritage culture';
      } else if (activityType === 'nature') {
        searchQuery += ' wildlife forests national park nature';
      } else if (activityType === 'relaxation') {
        searchQuery += ' beaches resorts spa relaxation';
      }

      // Search Meilisearch
      const results = await meilisearchService.search(searchQuery, {
        limit: 20,
        attributesToRetrieve: ['id', 'name', 'type', 'state', 'city', 'coordinates', 'description_short', 'category', 'state_id']
      });

      return results.hits || [];
    } catch (error) {
      console.error('Error fetching POIs:', error);
      return [];
    }
  }

  /**
   * Reset session for new trip planning
   */
  resetSession(): void {
    this.session = {
      conversationState: ConversationState.INITIAL,
      preferences: {},
      messageHistory: []
    };
  }

  /**
   * Modify preferences and regenerate
   */
  modifyPreferences(updatedPreferences: Partial<TripPreferences>): void {
    this.session.preferences = { ...this.session.preferences, ...updatedPreferences };
    this.session.conversationState = ConversationState.GENERATING;
  }
}

export const tripPlannerService = new TripPlannerService();
