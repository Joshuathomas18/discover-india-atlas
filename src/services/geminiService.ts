import { GoogleGenerativeAI } from '@google/generative-ai';

export enum PlaceType {
  CITY = 'city',
  MONUMENT = 'monument', 
  RIVER = 'river',
  MOUNTAIN = 'mountain',
  WILDLIFE = 'wildlife',
  FOREST = 'forest',
  WATERFALL = 'waterfall',
  DAM = 'dam',
  TEMPLE = 'temple',
  FORT = 'fort',
  BEACH = 'beach',
  LAKE = 'lake',
  VALLEY = 'valley',
  DESERT = 'desert',
  HILL_STATION = 'hill_station'
}

export interface GeminiPlaceData {
  name: string;
  description: string;
  coordinates: { lat: number; lng: number };
  state: string;
  city?: string;
  category: PlaceType;
  monuments?: CulturalItem[];
  food?: CulturalItem[];
  customs?: CulturalItem[];
  festivals?: CulturalItem[];
  history?: CulturalItem[];
  facts?: any[];
  fishes?: any[];
  howToReach?: any[];
  trekking?: any[];
  animals?: any[];
  visiting?: any[];
  size?: any[];
  rivers?: any[];
  tourists?: any[];
}

export interface CulturalItem {
  id: string;
  place_id: string;
  state_id: string;
  category: string;
  name: string;
  description: string;
  details: string;
  images: Array<{
    storage_path: string;
    download_url: string;
    caption: string;
    credit: string;
    alt_text: string;
    uploaded_at: Date;
  }>;
  actions: {
    primary: {
      label: string;
      type: string;
      url: string;
    };
  };
  opening_hours?: string;
  entry_fee?: string;
  best_time?: string;
  duration?: string;
  created_at: Date;
  updated_at: Date;
}

class GeminiService {
  private genAI: GoogleGenerativeAI;
  private model: any;
  private availableModels: string[] = [
    'models/gemini-2.5-flash',
    'models/gemini-2.5-pro', 
    'models/gemini-2.0-flash',
    'models/gemini-2.0-flash-001',
    'models/gemini-2.0-flash-lite',
    'models/gemini-2.5-flash-lite'
  ];
  private currentModelIndex: number = 0;
  
  constructor() {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      console.error('❌ Gemini API key not found');
      throw new Error('Gemini API key is required');
    }
    
    this.genAI = new GoogleGenerativeAI(apiKey);
    this.initializeModel();
    console.log('✅ Gemini service initialized');
  }
  
  /**
   * Initialize model with fallback options
   */
  private async initializeModel(): Promise<void> {
    try {
      this.model = this.genAI.getGenerativeModel({ 
        model: this.availableModels[this.currentModelIndex] 
      });
      console.log(`✅ Using Gemini model: ${this.availableModels[this.currentModelIndex]}`);
    } catch (error) {
      console.error(`❌ Failed to initialize model ${this.availableModels[this.currentModelIndex]}:`, error);
      await this.tryNextModel();
    }
  }
  
  /**
   * Try the next available model
   */
  private async tryNextModel(): Promise<void> {
    this.currentModelIndex++;
    if (this.currentModelIndex < this.availableModels.length) {
      try {
        this.model = this.genAI.getGenerativeModel({ 
          model: this.availableModels[this.currentModelIndex] 
        });
        console.log(`✅ Switched to Gemini model: ${this.availableModels[this.currentModelIndex]}`);
      } catch (error) {
        console.error(`❌ Failed to initialize model ${this.availableModels[this.currentModelIndex]}:`, error);
        await this.tryNextModel();
      }
    } else {
      console.error('❌ All Gemini models failed to initialize');
      throw new Error('No available Gemini models');
    }
  }
  
  /**
   * Classify the place type using Gemini
   */
  async classifyPlace(query: string): Promise<PlaceType> {
    try {
      console.log('🔍 Classifying place type for:', query);
      
      const prompt = `Classify this Indian place query into one of these exact categories: city, monument, river, mountain, wildlife, forest, waterfall, dam, temple, fort, beach, lake, valley, desert, hill_station.

Query: "${query}"

Return only the category name, nothing else.`;

      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const classification = response.text().trim().toLowerCase();
      
      console.log('📊 Gemini classification:', classification);
      
      // Validate classification
      if (Object.values(PlaceType).includes(classification as PlaceType)) {
        return classification as PlaceType;
      } else {
        console.log('⚠️ Invalid classification, defaulting to city');
        return PlaceType.CITY;
      }
    } catch (error) {
      console.error('❌ Classification failed:', error);
      
      // Try to switch to next model if current one fails
      if (this.currentModelIndex < this.availableModels.length - 1) {
        console.log('🔄 Trying next model...');
        await this.tryNextModel();
        return this.classifyPlace(query); // Retry with new model
      }
      
      return PlaceType.CITY; // Default fallback
    }
  }
  
  /**
   * Generate comprehensive place data using Gemini
   */
  async generatePlaceData(query: string, placeType: PlaceType): Promise<GeminiPlaceData> {
    try {
      console.log('🤖 Generating place data for:', query, 'Type:', placeType);
      
      const template = this.getDataTemplate(placeType);
      const prompt = this.buildDataPrompt(query, placeType, template);
      
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const jsonText = response.text();
      
      console.log('📝 Raw Gemini response:', jsonText.substring(0, 200) + '...');
      
      // Parse JSON response
      const data = this.parseGeminiResponse(jsonText, query, placeType);
      
      console.log('✅ Generated place data:', data.name);
      return data;
      
    } catch (error) {
      console.error('❌ Data generation failed:', error);
      
      // Try to switch to next model if current one fails
      if (this.currentModelIndex < this.availableModels.length - 1) {
        console.log('🔄 Trying next model for data generation...');
        await this.tryNextModel();
        return this.generatePlaceData(query, placeType); // Retry with new model
      }
      
      throw error;
    }
  }
  
  /**
   * Get data template based on place type
   */
  private getDataTemplate(placeType: PlaceType): any {
    const templates = {
      [PlaceType.CITY]: {
        requiredFields: ['monuments', 'food', 'customs', 'festivals', 'history'],
        structure: 'CityData'
      },
      [PlaceType.MONUMENT]: {
        requiredFields: ['monuments', 'food', 'customs', 'festivals', 'history'],
        structure: 'MonumentData'
      },
      [PlaceType.RIVER]: {
        requiredFields: ['facts', 'fishes', 'howToReach'],
        structure: 'RiverData'
      },
      [PlaceType.MOUNTAIN]: {
        requiredFields: ['facts', 'trekking', 'howToReach'],
        structure: 'MountainData'
      },
      [PlaceType.WILDLIFE]: {
        requiredFields: ['facts', 'visiting', 'animals'],
        structure: 'WildlifeData'
      },
      [PlaceType.FOREST]: {
        requiredFields: ['facts', 'visiting', 'animals'],
        structure: 'ForestData'
      },
      [PlaceType.WATERFALL]: {
        requiredFields: ['size', 'rivers', 'facts', 'tourists', 'howToReach'],
        structure: 'WaterfallData'
      },
      [PlaceType.DAM]: {
        requiredFields: ['size', 'rivers', 'facts', 'tourists', 'howToReach'],
        structure: 'DamData'
      }
    };
    
    return templates[placeType] || templates[PlaceType.CITY];
  }
  
  /**
   * Build data generation prompt
   */
  private buildDataPrompt(query: string, placeType: PlaceType, template: any): string {
    const basePrompt = `Generate comprehensive data for this Indian ${placeType}: "${query}"

Return a JSON object with this exact structure:`;

    const structurePrompt = this.getStructurePrompt(placeType);
    
    const instructions = `
Requirements:
- All coordinates must be valid Indian locations
- State names must be accurate Indian states
- All data must be culturally appropriate for India
- Include realistic opening hours, entry fees, and practical information
- Generate 2-3 items for each category
- Use proper Indian place names and cultural references
- Ensure all JSON is valid and properly formatted
- Keep city descriptions concise (2-3 sentences maximum)
- Focus on key highlights and unique characteristics

Return only the JSON object, no additional text.`;

    return basePrompt + structurePrompt + instructions;
  }
  
  /**
   * Get structure prompt based on place type
   */
  private getStructurePrompt(placeType: PlaceType): string {
    const structures = {
      [PlaceType.CITY]: `
{
  "name": "string",
  "description": "Brief 2-3 sentence description highlighting key characteristics",
  "coordinates": {"lat": number, "lng": number},
  "state": "string",
  "city": "string",
  "category": "city",
  "monuments": [
    {
      "id": "string",
      "place_id": "string",
      "state_id": "string", 
      "category": "monuments",
      "name": "string",
      "description": "string",
      "details": "string",
      "images": [{"storage_path": "string", "download_url": "string", "caption": "string", "credit": "string", "alt_text": "string", "uploaded_at": "2024-01-01T00:00:00.000Z"}],
      "actions": {"primary": {"label": "string", "type": "external_link", "url": "string"}},
      "opening_hours": "string",
      "entry_fee": "string", 
      "best_time": "string",
      "duration": "string",
      "created_at": "2024-01-01T00:00:00.000Z",
      "updated_at": "2024-01-01T00:00:00.000Z"
    }
  ],
  "food": [...],
  "customs": [...],
  "festivals": [...],
  "history": [...]
}`,
      [PlaceType.RIVER]: `
{
  "name": "string",
  "description": "string", 
  "coordinates": {"lat": number, "lng": number},
  "state": "string",
  "category": "river",
  "facts": [
    {
      "id": "string",
      "place_id": "string",
      "state_id": "string",
      "category": "facts",
      "name": "string",
      "description": "string",
      "details": "string",
      "images": [...],
      "actions": {...},
      "created_at": "2024-01-01T00:00:00.000Z",
      "updated_at": "2024-01-01T00:00:00.000Z"
    }
  ],
  "fishes": [...],
  "howToReach": [...]
}`,
      [PlaceType.MOUNTAIN]: `
{
  "name": "string",
  "description": "string",
  "coordinates": {"lat": number, "lng": number}, 
  "state": "string",
  "category": "mountain",
  "facts": [...],
  "trekking": [...],
  "howToReach": [...]
}`,
      [PlaceType.WILDLIFE]: `
{
  "name": "string",
  "description": "string",
  "coordinates": {"lat": number, "lng": number},
  "state": "string", 
  "category": "wildlife",
  "facts": [...],
  "visiting": [...],
  "animals": [...]
}`,
      [PlaceType.FOREST]: `
{
  "name": "string",
  "description": "string",
  "coordinates": {"lat": number, "lng": number},
  "state": "string",
  "category": "forest", 
  "facts": [...],
  "visiting": [...],
  "animals": [...]
}`,
      [PlaceType.WATERFALL]: `
{
  "name": "string",
  "description": "string",
  "coordinates": {"lat": number, "lng": number},
  "state": "string",
  "category": "waterfall",
  "size": [...],
  "rivers": [...], 
  "facts": [...],
  "tourists": [...],
  "howToReach": [...]
}`,
      [PlaceType.DAM]: `
{
  "name": "string",
  "description": "string", 
  "coordinates": {"lat": number, "lng": number},
  "state": "string",
  "category": "dam",
  "size": [...],
  "rivers": [...],
  "facts": [...],
  "tourists": [...],
  "howToReach": [...]
}`
    };
    
    return structures[placeType] || structures[PlaceType.CITY];
  }
  
  /**
   * Parse Gemini response and validate data
   */
  private parseGeminiResponse(jsonText: string, query: string, placeType: PlaceType): GeminiPlaceData {
    try {
      // Clean the response text
      let cleanJson = jsonText.trim();
      
      // Remove markdown code blocks if present
      if (cleanJson.startsWith('```json')) {
        cleanJson = cleanJson.replace(/^```json\s*/, '').replace(/\s*```$/, '');
      } else if (cleanJson.startsWith('```')) {
        cleanJson = cleanJson.replace(/^```\s*/, '').replace(/\s*```$/, '');
      }
      
      const data = JSON.parse(cleanJson);
      
      // Validate required fields
      if (!data.name || !data.description || !data.coordinates || !data.state) {
        throw new Error('Missing required fields in Gemini response');
      }
      
      // Ensure proper data structure
      const processedData: GeminiPlaceData = {
        name: data.name,
        description: data.description,
        coordinates: data.coordinates,
        state: data.state,
        city: data.city,
        category: placeType,
        monuments: data.monuments || [],
        food: data.food || [],
        customs: data.customs || [],
        festivals: data.festivals || [],
        history: data.history || [],
        facts: data.facts || [],
        fishes: data.fishes || [],
        howToReach: data.howToReach || [],
        trekking: data.trekking || [],
        animals: data.animals || [],
        visiting: data.visiting || [],
        size: data.size || [],
        rivers: data.rivers || [],
        tourists: data.tourists || []
      };
      
      return processedData;
      
    } catch (error) {
      console.error('❌ Failed to parse Gemini response:', error);
      console.error('Raw response:', jsonText);
      
      // Return fallback data
      return this.generateFallbackData(query, placeType);
    }
  }
  
  /**
   * Generate fallback data when Gemini fails
   */
  private generateFallbackData(query: string, placeType: PlaceType): GeminiPlaceData {
    console.log('🔄 Generating fallback data for:', query);
    
    return {
      name: query,
      description: `Discover the beauty and cultural significance of ${query} in India.`,
      coordinates: { lat: 20.5937, lng: 78.9629 }, // Center of India
      state: 'Unknown',
      category: placeType,
      monuments: [],
      food: [],
      customs: [],
      festivals: [],
      history: [],
      facts: [],
      fishes: [],
      howToReach: [],
      trekking: [],
      animals: [],
      visiting: [],
      size: [],
      rivers: [],
      tourists: []
    };
  }

  /**
   * Generate trip itinerary using Gemini
   */
  async generateTripItinerary(
    preferences: any,
    relevantPOIs: any[]
  ): Promise<any> {
    try {
      console.log('🗺️ Generating trip itinerary with Gemini...');
      
      const { place, state, terrain, activityType, days, budget } = preferences;
      
      // Build the prompt
      const location = place || state;
      const stateName = state ? this.getStateDisplayName(state) : '';
      
      const prompt = `Generate a detailed ${days}-day itinerary for ${location}${stateName ? `, ${stateName}` : ''} with these preferences:

Preferences:
- Terrain: ${terrain}
- Activity Type: ${activityType}
- Budget: ${budget}
- Duration: ${days} days

Available places and attractions:
${JSON.stringify(relevantPOIs.slice(0, 15), null, 2)}

Requirements:
1. Create a realistic, practical itinerary
2. Include specific timings for each activity
3. Suggest appropriate meals (breakfast, lunch, dinner)
4. Recommend accommodation based on budget
5. Provide budget breakdown with realistic costs
6. Include helpful travel tips
7. Use actual place names from the provided data
8. Make it culturally appropriate for India

Return ONLY a valid JSON object with this exact structure:
{
  "title": "string",
  "overview": "string",
  "days": [
    {
      "day": 1,
      "title": "Day 1: ...",
      "activities": [
        {
          "time": "9:00 AM",
          "activity": "Visit...",
          "place_id": "...",
          "duration": "2 hours",
          "description": "..."
        }
      ],
      "meals": {
        "breakfast": "...",
        "lunch": "...",
        "dinner": "..."
      },
      "accommodation": "Budget/Mid-range/Luxury hotel suggestion"
    }
  ],
  "budget_breakdown": {
    "accommodation": "₹X - ₹Y",
    "food": "₹X - ₹Y",
    "transport": "₹X - ₹Y",
    "activities": "₹X - ₹Y",
    "total": "₹X - ₹Y"
  },
  "tips": ["tip1", "tip2", "tip3"]
}`;

      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      console.log('📋 Gemini itinerary response:', text);
      
      // Parse JSON response
      try {
        const itinerary = JSON.parse(text);
        console.log('✅ Successfully parsed itinerary');
        return itinerary;
      } catch (parseError) {
        console.error('❌ Failed to parse JSON:', parseError);
        // Return a fallback itinerary
        return this.generateFallbackItinerary(preferences, relevantPOIs);
      }
      
    } catch (error: any) {
      console.error('❌ Error generating itinerary:', error);
      
      // Try to switch to next model if current one fails
      if (this.currentModelIndex < this.availableModels.length - 1) {
        console.log('🔄 Trying next model...');
        await this.tryNextModel();
        return this.generateTripItinerary(preferences, relevantPOIs);
      }
      
      // Return fallback itinerary
      return this.generateFallbackItinerary(preferences, relevantPOIs);
    }
  }

  /**
   * Generate fallback itinerary when Gemini fails
   */
  private generateFallbackItinerary(preferences: any, relevantPOIs: any[]): any {
    const { place, state, days, budget } = preferences;
    const location = place || state;
    
    const dayCount = parseInt(days.split('-')[0]) || 3;
    const daysArray = [];
    
    for (let i = 1; i <= dayCount; i++) {
      daysArray.push({
        day: i,
        title: `Day ${i}: Exploring ${location}`,
        activities: [
          {
            time: "9:00 AM",
            activity: "Morning sightseeing",
            place_id: relevantPOIs[i % relevantPOIs.length]?.id || '',
            duration: "3 hours",
            description: "Explore local attractions and landmarks"
          },
          {
            time: "2:00 PM",
            activity: "Lunch break",
            place_id: '',
            duration: "1 hour",
            description: "Enjoy local cuisine"
          },
          {
            time: "3:30 PM",
            activity: "Afternoon activities",
            place_id: relevantPOIs[(i + 1) % relevantPOIs.length]?.id || '',
            duration: "3 hours",
            description: "Continue exploring the area"
          }
        ],
        meals: {
          breakfast: "Local breakfast at hotel",
          lunch: "Traditional local restaurant",
          dinner: "Evening meal at recommended spot"
        },
        accommodation: `${budget} hotel in ${location}`
      });
    }
    
    return {
      title: `${dayCount}-Day ${location} Itinerary`,
      overview: `A comprehensive ${dayCount}-day trip to ${location} covering major attractions and experiences.`,
      days: daysArray,
      budget_breakdown: {
        accommodation: budget === 'budget' ? '₹1,000 - ₹2,000' : budget === 'mid-range' ? '₹2,000 - ₹4,000' : '₹4,000+',
        food: budget === 'budget' ? '₹500 - ₹1,000' : budget === 'mid-range' ? '₹1,000 - ₹2,000' : '₹2,000+',
        transport: budget === 'budget' ? '₹500 - ₹1,000' : budget === 'mid-range' ? '₹1,000 - ₹2,000' : '₹2,000+',
        activities: budget === 'budget' ? '₹300 - ₹800' : budget === 'mid-range' ? '₹800 - ₹1,500' : '₹1,500+',
        total: budget === 'budget' ? '₹2,300 - ₹4,800' : budget === 'mid-range' ? '₹4,800 - ₹9,500' : '₹9,500+'
      },
      tips: [
        "Book accommodations in advance",
        "Carry comfortable walking shoes",
        "Keep local emergency numbers handy",
        "Respect local customs and traditions"
      ]
    };
  }

  /**
   * Get display name for state
   */
  private getStateDisplayName(stateId: string): string {
    const stateMap: { [key: string]: string } = {
      'karnataka': 'Karnataka',
      'rajasthan': 'Rajasthan',
      'kerala': 'Kerala',
      'goa': 'Goa',
      'tamil-nadu': 'Tamil Nadu',
      'maharashtra': 'Maharashtra',
      'uttar-pradesh': 'Uttar Pradesh',
      'himachal-pradesh': 'Himachal Pradesh',
      'uttarakhand': 'Uttarakhand',
      'gujarat': 'Gujarat',
      'west-bengal': 'West Bengal',
      'andhra-pradesh': 'Andhra Pradesh',
      'telangana': 'Telangana',
      'odisha': 'Odisha',
      'assam': 'Assam',
      'punjab': 'Punjab',
      'haryana': 'Haryana',
      'madhya-pradesh': 'Madhya Pradesh',
      'chhattisgarh': 'Chhattisgarh',
      'jharkhand': 'Jharkhand',
      'bihar': 'Bihar',
      'sikkim': 'Sikkim',
      'meghalaya': 'Meghalaya',
      'manipur': 'Manipur',
      'delhi': 'Delhi',
      'chandigarh': 'Chandigarh',
      'puducherry': 'Puducherry',
      'lakshadweep': 'Lakshadweep',
      'andaman-nicobar': 'Andaman and Nicobar Islands',
      'dadra-nagar-haveli-daman-diu': 'Dadra and Nagar Haveli',
      'jammu-kashmir': 'Jammu and Kashmir',
      'ladakh': 'Ladakh'
    };
    return stateMap[stateId] || stateId;
  }
}

export const geminiService = new GeminiService();