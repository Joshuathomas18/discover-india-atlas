import { GeminiPlaceData } from './geminiService';
import { GeographicalPOI, CulturalItem } from '../types/database';
import { meilisearchService, MeilisearchDocument } from './meilisearchService';

class GeminiIntegrationService {
  
  /**
   * Convert Gemini data to our existing POI format
   */
  convertGeminiToPOI(geminiData: GeminiPlaceData): GeographicalPOI {
    const poiId = `${geminiData.name.toLowerCase().replace(/\s+/g, '_')}_${geminiData.state.toLowerCase().replace(/\s+/g, '-')}`;
    
    return {
      id: poiId,
      state_id: geminiData.state.toLowerCase().replace(/\s+/g, '-'),
      name: geminiData.name,
      category: geminiData.category,
      description: geminiData.description,
      coordinates: geminiData.coordinates,
      created_at: new Date()
    };
  }
  
  /**
   * Convert Gemini data to cultural tabs format
   */
  convertGeminiToCulturalTabs(geminiData: GeminiPlaceData): Record<string, CulturalItem[]> {
    const tabs: Record<string, CulturalItem[]> = {};
    
    // Handle different place types
    switch (geminiData.category) {
      case 'city':
      case 'monument':
        tabs.monuments = geminiData.monuments || [];
        tabs.food = geminiData.food || [];
        tabs.customs = geminiData.customs || [];
        tabs.festivals = geminiData.festivals || [];
        tabs.history = geminiData.history || [];
        break;
        
      case 'river':
        tabs.facts = geminiData.facts || [];
        tabs.fishes = geminiData.fishes || [];
        tabs.howToReach = geminiData.howToReach || [];
        break;
        
      case 'mountain':
        tabs.facts = geminiData.facts || [];
        tabs.trekking = geminiData.trekking || [];
        tabs.howToReach = geminiData.howToReach || [];
        break;
        
      case 'wildlife':
      case 'forest':
        tabs.facts = geminiData.facts || [];
        tabs.visiting = geminiData.visiting || [];
        tabs.animals = geminiData.animals || [];
        break;
        
      case 'waterfall':
      case 'dam':
        tabs.size = geminiData.size || [];
        tabs.rivers = geminiData.rivers || [];
        tabs.facts = geminiData.facts || [];
        tabs.tourists = geminiData.tourists || [];
        tabs.howToReach = geminiData.howToReach || [];
        break;
        
      default:
        // Default to city format
        tabs.monuments = geminiData.monuments || [];
        tabs.food = geminiData.food || [];
        tabs.customs = geminiData.customs || [];
        tabs.festivals = geminiData.festivals || [];
        tabs.history = geminiData.history || [];
    }
    
    return tabs;
  }
  
  /**
   * Index Gemini data into Meilisearch
   */
  async indexGeminiData(geminiData: GeminiPlaceData): Promise<void> {
    try {
      console.log('📚 Indexing Gemini data into Meilisearch:', geminiData.name);
      
      // Convert to Meilisearch document format
      const documents: MeilisearchDocument[] = [];
      
      // Create main POI document
      const mainDoc: MeilisearchDocument = {
        id: `${geminiData.category}_${geminiData.name.toLowerCase().replace(/\s+/g, '_')}_${geminiData.state.toLowerCase().replace(/\s+/g, '-')}`,
        name: geminiData.name,
        type: this.getMeilisearchType(geminiData.category),
        state: geminiData.state,
        city: geminiData.city || geminiData.name,
        coordinates: geminiData.coordinates,
        tags: this.generateTags(geminiData),
        description_short: geminiData.description.substring(0, 200),
        description_long: geminiData.description,
        category: geminiData.category,
        state_id: geminiData.state.toLowerCase().replace(/\s+/g, '-')
      };
      
      documents.push(mainDoc);
      
      // Create documents for cultural items
      const culturalTabs = this.convertGeminiToCulturalTabs(geminiData);
      
      Object.entries(culturalTabs).forEach(([category, items]) => {
        items.forEach((item, index) => {
          const culturalDoc: MeilisearchDocument = {
            id: `${category}_${item.id}`,
            name: item.name,
            type: this.getMeilisearchType(category),
            state: geminiData.state,
            city: geminiData.city || geminiData.name,
            coordinates: geminiData.coordinates,
            tags: this.generateCulturalTags(item, geminiData),
            description_short: item.description.substring(0, 200),
            description_long: item.details || item.description,
            category: category,
            state_id: geminiData.state.toLowerCase().replace(/\s+/g, '-')
          };
          
          documents.push(culturalDoc);
        });
      });
      
      // Index all documents
      await meilisearchService.addDocuments(documents);
      
      console.log(`✅ Indexed ${documents.length} documents for ${geminiData.name}`);
      
    } catch (error) {
      console.error('❌ Failed to index Gemini data:', error);
      throw error;
    }
  }
  
  /**
   * Get Meilisearch type from category
   */
  private getMeilisearchType(category: string): string {
    const typeMap: { [key: string]: string } = {
      'city': 'City',
      'monument': 'Monument',
      'river': 'River',
      'mountain': 'Mountain',
      'wildlife': 'Wildlife',
      'forest': 'Forest',
      'waterfall': 'Waterfall',
      'dam': 'Dam',
      'temple': 'Monument',
      'fort': 'Monument',
      'beach': 'Monument',
      'lake': 'Monument',
      'valley': 'Monument',
      'desert': 'Monument',
      'hill_station': 'City',
      'facts': 'Monument',
      'fishes': 'Monument',
      'howToReach': 'Monument',
      'trekking': 'Monument',
      'animals': 'Monument',
      'visiting': 'Monument',
      'size': 'Monument',
      'rivers': 'Monument',
      'tourists': 'Monument',
      'monuments': 'Monument',
      'food': 'Food',
      'customs': 'Custom',
      'festivals': 'Festival',
      'history': 'Monument'
    };
    
    return typeMap[category] || 'Monument';
  }
  
  /**
   * Generate tags for Gemini data
   */
  private generateTags(geminiData: GeminiPlaceData): string[] {
    const tags = [
      geminiData.name,
      geminiData.category,
      geminiData.state,
      'gemini_generated',
      'ai_discovered'
    ];
    
    if (geminiData.city) {
      tags.push(geminiData.city);
    }
    
    return tags.filter(Boolean).map(tag => String(tag));
  }
  
  /**
   * Generate tags for cultural items
   */
  private generateCulturalTags(item: CulturalItem, geminiData: GeminiPlaceData): string[] {
    const tags = [
      item.name,
      item.category,
      geminiData.name,
      geminiData.state,
      'gemini_generated',
      'cultural_item'
    ];
    
    return tags.filter(Boolean).map(tag => String(tag));
  }
  
  /**
   * Process complete Gemini flow: classify, generate, convert, and index
   */
  async processGeminiQuery(query: string): Promise<{
    poi: GeographicalPOI;
    culturalTabs: Record<string, CulturalItem[]>;
    geminiData: GeminiPlaceData;
  }> {
    try {
      console.log('🚀 Starting complete Gemini processing for:', query);
      
      // Import services dynamically to avoid circular dependencies
      const { geminiService } = await import('./geminiService');
      const { cacheService } = await import('./cacheService');
      
      // Check cache first
      let geminiData = cacheService.get(query);
      
      if (!geminiData) {
        console.log('🔄 Cache miss, generating new data...');
        
        // Classify place type
        const placeType = await geminiService.classifyPlace(query);
        
        // Generate data
        geminiData = await geminiService.generatePlaceData(query, placeType);
        
        // Cache the result
        cacheService.set(query, geminiData);
      } else {
        console.log('📦 Using cached data');
      }
      
      // Convert to our formats
      const poi = this.convertGeminiToPOI(geminiData);
      const culturalTabs = this.convertGeminiToCulturalTabs(geminiData);
      
      // Index into Meilisearch
      await this.indexGeminiData(geminiData);
      
      console.log('✅ Complete Gemini processing finished for:', query);
      
      return {
        poi,
        culturalTabs,
        geminiData
      };
      
    } catch (error) {
      console.error('❌ Gemini processing failed:', error);
      throw error;
    }
  }
}

export const geminiIntegrationService = new GeminiIntegrationService();

