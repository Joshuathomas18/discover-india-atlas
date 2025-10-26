import { MeiliSearch } from 'meilisearch';

export interface ChatbotMessage {
  text: string;
  isBot: boolean;
  sources?: SourceCitation[];
  isItinerary?: boolean;
  itinerary?: any;
  options?: Array<{value: string; label: string; emoji?: string}>;
  questionType?: string;
}

export interface SourceCitation {
  name: string;
  type: string;
  state: string;
  description: string;
}

export interface RAGResponse {
  answer: string;
  sources: SourceCitation[];
  confidence: number;
}

class UniversalRAGService {
  private client: MeiliSearch;
  private indexName = 'india_knowledge_graph';

  constructor() {
    const url = import.meta.env.VITE_MEILISEARCH_URL || 'http://localhost:7700';
    const key = import.meta.env.VITE_MEILISEARCH_KEY || 'master_key_change_me_in_production';
    
    this.client = new MeiliSearch({
      host: url,
      apiKey: key,
    });
  }

  /**
   * Search across all states for relevant information
   */
  async searchAllStates(query: string, limit: number = 5): Promise<any[]> {
    try {
      const index = this.client.index(this.indexName);
      const results = await index.search(query, { 
        limit,
        attributesToRetrieve: ['name', 'type', 'state', 'description_short', 'description_long', 'category', 'coordinates']
      });
      return results.hits;
    } catch (error) {
      console.error('Error searching Meilisearch:', error);
      return [];
    }
  }

  /**
   * Detect state from user query
   */
  detectState(query: string): string | null {
    const stateKeywords = {
      'karnataka': ['karnataka', 'bangalore', 'bengaluru', 'mysore', 'mangalore', 'hubli', 'belgaum'],
      'rajasthan': ['rajasthan', 'jaipur', 'udaipur', 'jodhpur', 'jaisalmer', 'pushkar', 'mount abu'],
      'kerala': ['kerala', 'kochi', 'thiruvananthapuram', 'munnar', 'alleppey', 'wayanad'],
      'goa': ['goa', 'panaji', 'margao', 'calangute', 'baga', 'anjuna'],
      'tamil nadu': ['tamil nadu', 'chennai', 'madurai', 'coimbatore', 'trichy', 'thanjavur'],
      'maharashtra': ['maharashtra', 'mumbai', 'pune', 'nagpur', 'nashik', 'aurangabad'],
      'uttarakhand': ['uttarakhand', 'dehradun', 'haridwar', 'rishikesh', 'nainital', 'mussoorie'],
      'himachal pradesh': ['himachal pradesh', 'shimla', 'manali', 'dharamshala', 'kullu', 'dalhousie'],
      'gujarat': ['gujarat', 'ahmedabad', 'vadodara', 'surat', 'rajkot', 'dwarka'],
      'west bengal': ['west bengal', 'kolkata', 'darjeeling', 'digha', 'siliguri'],
      'andhra pradesh': ['andhra pradesh', 'visakhapatnam', 'vijayawada', 'tirupati', 'guntur'],
      'telangana': ['telangana', 'hyderabad', 'warangal', 'karimnagar', 'nizamabad'],
      'odisha': ['odisha', 'bhubaneswar', 'cuttack', 'puri', 'konark', 'rourkela'],
      'assam': ['assam', 'guwahati', 'jorhat', 'tezpur', 'dibrugarh', 'silchar'],
      'punjab': ['punjab', 'amritsar', 'ludhiana', 'chandigarh', 'jalandhar', 'patiala'],
      'haryana': ['haryana', 'gurugram', 'faridabad', 'panipat', 'ambala', 'rohtak'],
      'madhya pradesh': ['madhya pradesh', 'bhopal', 'indore', 'gwalior', 'ujjain', 'jabalpur'],
      'chhattisgarh': ['chhattisgarh', 'raipur', 'bhilai', 'bilaspur', 'korba', 'durg'],
      'jharkhand': ['jharkhand', 'ranchi', 'jamshedpur', 'dhanbad', 'bokaro', 'hazaribagh'],
      'bihar': ['bihar', 'patna', 'gaya', 'bhagalpur', 'muzaffarpur', 'darbhanga'],
      'sikkim': ['sikkim', 'gangtok', 'pelling', 'lachung', 'namchi', 'ravangla'],
      'meghalaya': ['meghalaya', 'shillong', 'cherrapunjee', 'dawki', 'tura', 'jowai'],
      'manipur': ['manipur', 'imphal', 'bishnupur', 'ukhrul', 'thoubal', 'churachandpur'],
      'delhi': ['delhi', 'new delhi', 'nct', 'national capital territory'],
      'chandigarh': ['chandigarh', 'union territory'],
      'puducherry': ['puducherry', 'pondicherry', 'karaikal', 'mahe', 'yanam'],
      'lakshadweep': ['lakshadweep', 'kavaratti', 'agatti', 'minicoy'],
      'andaman and nicobar': ['andaman', 'nicobar', 'port blair', 'havelock', 'neil island'],
      'dadra and nagar haveli': ['dadra', 'nagar haveli', 'daman', 'diu'],
      'jammu and kashmir': ['jammu', 'kashmir', 'srinagar', 'leh', 'kargil'],
      'ladakh': ['ladakh', 'leh', 'kargil', 'nubra valley', 'pangong']
    };

    const lowerQuery = query.toLowerCase();
    
    for (const [state, keywords] of Object.entries(stateKeywords)) {
      if (keywords.some(keyword => lowerQuery.includes(keyword))) {
        return state;
      }
    }
    
    return null;
  }

  /**
   * Generate smart response based on search results
   */
  generateResponse(query: string, searchResults: any[]): RAGResponse {
    if (searchResults.length === 0) {
      return {
        answer: "I couldn't find specific information about that. Could you try asking about monuments, food, festivals, or other attractions in a specific state?",
        sources: [],
        confidence: 0
      };
    }

    const detectedState = this.detectState(query);
    const stateName = detectedState || 'India';
    
    // Group results by type
    const groupedResults = searchResults.reduce((acc, result) => {
      const type = result.type || result.category || 'attraction';
      if (!acc[type]) acc[type] = [];
      acc[type].push(result);
      return acc;
    }, {});

    // Generate response based on query type
    let answer = '';
    let sources: SourceCitation[] = [];

    // Check query type
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('waterfall') || lowerQuery.includes('falls')) {
      answer = this.generateWaterfallResponse(groupedResults, stateName);
    } else if (lowerQuery.includes('monument') || lowerQuery.includes('fort') || lowerQuery.includes('palace')) {
      answer = this.generateMonumentResponse(groupedResults, stateName);
    } else if (lowerQuery.includes('food') || lowerQuery.includes('cuisine') || lowerQuery.includes('restaurant')) {
      answer = this.generateFoodResponse(groupedResults, stateName);
    } else if (lowerQuery.includes('festival') || lowerQuery.includes('celebration')) {
      answer = this.generateFestivalResponse(groupedResults, stateName);
    } else if (lowerQuery.includes('wildlife') || lowerQuery.includes('animal') || lowerQuery.includes('sanctuary')) {
      answer = this.generateWildlifeResponse(groupedResults, stateName);
    } else if (lowerQuery.includes('mountain') || lowerQuery.includes('hill') || lowerQuery.includes('trek')) {
      answer = this.generateMountainResponse(groupedResults, stateName);
    } else if (lowerQuery.includes('river') || lowerQuery.includes('lake')) {
      answer = this.generateRiverResponse(groupedResults, stateName);
    } else {
      answer = this.generateGeneralResponse(groupedResults, stateName);
    }

    // Extract sources
    sources = searchResults.slice(0, 3).map(result => ({
      name: result.name,
      type: result.type || result.category,
      state: result.state,
      description: result.description_short || result.description_long?.substring(0, 100) + '...'
    }));

    return {
      answer,
      sources,
      confidence: Math.min(searchResults.length / 5, 1)
    };
  }

  private generateWaterfallResponse(groupedResults: any, stateName: string): string {
    const waterfalls = groupedResults.Waterfall || groupedResults.waterfall || [];
    if (waterfalls.length === 0) return `I couldn't find specific waterfall information for ${stateName}.`;

    let response = `Here are the amazing waterfalls in ${stateName}! 🌊\n\n`;
    
    waterfalls.slice(0, 3).forEach((waterfall: any, index: number) => {
      response += `${index + 1}. **${waterfall.name}** - ${waterfall.description_short}\n\n`;
    });

    response += `These waterfalls offer breathtaking views and are perfect for nature lovers and photographers! 📸`;
    return response;
  }

  private generateMonumentResponse(groupedResults: any, stateName: string): string {
    const monuments = groupedResults.Monument || groupedResults.City || [];
    if (monuments.length === 0) return `I couldn't find specific monument information for ${stateName}.`;

    let response = `Here are the incredible monuments and attractions in ${stateName}! 🏛️\n\n`;
    
    monuments.slice(0, 3).forEach((monument: any, index: number) => {
      response += `${index + 1}. **${monument.name}** - ${monument.description_short}\n\n`;
    });

    response += `These monuments showcase the rich history and architectural brilliance of ${stateName}! ✨`;
    return response;
  }

  private generateFoodResponse(groupedResults: any, stateName: string): string {
    const cities = groupedResults.City || [];
    if (cities.length === 0) return `I couldn't find specific food information for ${stateName}.`;

    let response = `Here's what makes ${stateName}'s cuisine special! 🍽️\n\n`;
    
    cities.slice(0, 2).forEach((city: any, index: number) => {
      response += `${index + 1}. **${city.name}** - ${city.description_short}\n\n`;
    });

    response += `Each region in ${stateName} has its unique flavors and traditional dishes that reflect the local culture! 🌶️`;
    return response;
  }

  private generateFestivalResponse(groupedResults: any, stateName: string): string {
    const cities = groupedResults.City || [];
    if (cities.length === 0) return `I couldn't find specific festival information for ${stateName}.`;

    let response = `Here are the vibrant festivals and cultural celebrations in ${stateName}! 🎉\n\n`;
    
    cities.slice(0, 2).forEach((city: any, index: number) => {
      response += `${index + 1}. **${city.name}** - ${city.description_short}\n\n`;
    });

    response += `${stateName} celebrates with great enthusiasm, showcasing its rich cultural heritage! 🎭`;
    return response;
  }

  private generateWildlifeResponse(groupedResults: any, stateName: string): string {
    const wildlife = groupedResults.Wildlife || groupedResults['Wildlife Sanctuary'] || [];
    if (wildlife.length === 0) return `I couldn't find specific wildlife information for ${stateName}.`;

    let response = `Here are the amazing wildlife sanctuaries in ${stateName}! 🦁\n\n`;
    
    wildlife.slice(0, 3).forEach((sanctuary: any, index: number) => {
      response += `${index + 1}. **${sanctuary.name}** - ${sanctuary.description_short}\n\n`;
    });

    response += `These sanctuaries offer incredible opportunities to spot diverse wildlife in their natural habitat! 📸`;
    return response;
  }

  private generateMountainResponse(groupedResults: any, stateName: string): string {
    const mountains = groupedResults.Mountain || groupedResults.mountain || [];
    if (mountains.length === 0) return `I couldn't find specific mountain information for ${stateName}.`;

    let response = `Here are the majestic mountains and hills in ${stateName}! 🏔️\n\n`;
    
    mountains.slice(0, 3).forEach((mountain: any, index: number) => {
      response += `${index + 1}. **${mountain.name}** - ${mountain.description_short}\n\n`;
    });

    response += `These mountains offer breathtaking views and are perfect for trekking and adventure! 🥾`;
    return response;
  }

  private generateRiverResponse(groupedResults: any, stateName: string): string {
    const rivers = groupedResults.River || groupedResults.river || [];
    if (rivers.length === 0) return `I couldn't find specific river information for ${stateName}.`;

    let response = `Here are the beautiful rivers and water bodies in ${stateName}! 🌊\n\n`;
    
    rivers.slice(0, 3).forEach((river: any, index: number) => {
      response += `${index + 1}. **${river.name}** - ${river.description_short}\n\n`;
    });

    response += `These rivers are not just scenic but also hold great cultural and historical significance! 🚣‍♂️`;
    return response;
  }

  private generateGeneralResponse(groupedResults: any, stateName: string): string {
    const allResults = Object.values(groupedResults).flat();
    if (allResults.length === 0) return `I couldn't find specific information for ${stateName}.`;

    let response = `Here's what makes ${stateName} special! ✨\n\n`;
    
    allResults.slice(0, 3).forEach((item: any, index: number) => {
      response += `${index + 1}. **${item.name}** (${item.type}) - ${item.description_short}\n\n`;
    });

    response += `${stateName} has so much to offer - from rich culture to natural beauty! 🎯`;
    return response;
  }

  /**
   * Get greeting message based on detected state
   */
  getGreeting(query?: string): string {
    const detectedState = query ? this.detectState(query) : null;
    
    if (detectedState) {
      return `Namaste! 🙏 Welcome to ${detectedState.charAt(0).toUpperCase() + detectedState.slice(1)}! I'm here to help you explore our rich culture, magnificent attractions, delicious cuisine, and vibrant traditions. What would you like to know?`;
    }
    
    return `Namaste! 🙏 Welcome to Incredible India! I'm your cultural companion, ready to help you explore our diverse states, magnificent monuments, delicious cuisine, and vibrant traditions. What would you like to know?`;
  }
}

export const universalRAGService = new UniversalRAGService();
