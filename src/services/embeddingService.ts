import { GoogleGenerativeAI } from '@google/generative-ai';
import { KarnatakaPOI } from '../types/database';

class EmbeddingService {
  private genAI: GoogleGenerativeAI;

  constructor() {
    // Use process.env for Node.js scripts, import.meta.env for browser
    const apiKey = typeof process !== 'undefined' && process.env 
      ? process.env.VITE_GEMINI_API_KEY 
      : import.meta.env?.VITE_GEMINI_API_KEY;
      
    if (!apiKey) {
      throw new Error('VITE_GEMINI_API_KEY is required for embedding service');
    }
    this.genAI = new GoogleGenerativeAI(apiKey);
  }

  /**
   * Generate embedding for text using Gemini
   */
  async generateEmbedding(text: string): Promise<number[]> {
    try {
      const model = this.genAI.getGenerativeModel({ model: 'embedding-001' });
      const result = await model.embedContent(text);
      return result.embedding.values;
    } catch (error) {
      console.error('Error generating embedding:', error);
      throw error;
    }
  }

  /**
   * Generate text chunk from KarnatakaPOI for embedding
   */
  generateTextChunk(poi: KarnatakaPOI): string {
    let textChunk = `${poi.name} (${poi.category} in ${poi.city || 'Unknown City'}, ${poi.state || 'Unknown State'}). `;
    textChunk += `Description: ${poi.description}. `;

    // Add category-specific information
    if (poi.tabs) {
      const tabs = poi.tabs as any;
      
      switch (poi.category) {
        case 'place':
          if (tabs.monuments) {
            textChunk += `Monuments: ${tabs.monuments.map((m: any) => m.title).join(', ')}. `;
          }
          if (tabs.food) {
            textChunk += `Food: ${tabs.food.map((f: any) => f.title).join(', ')}. `;
          }
          if (tabs.festivals) {
            textChunk += `Festivals: ${tabs.festivals.map((f: any) => f.title).join(', ')}. `;
          }
          break;
          
        case 'river':
          if (tabs.facts) {
            textChunk += `River Facts: ${tabs.facts}. `;
          }
          if (tabs.fishes_found) {
            textChunk += `Fish Species: ${tabs.fishes_found}. `;
          }
          break;
          
        case 'mountain':
          if (tabs.facts) {
            textChunk += `Mountain Facts: ${tabs.facts}. `;
          }
          if (tabs.trekking) {
            textChunk += `Trekking Info: ${tabs.trekking}. `;
          }
          break;
          
        case 'wildlife':
          if (tabs.facts) {
            textChunk += `Wildlife Facts: ${tabs.facts}. `;
          }
          if (tabs.animals_found) {
            textChunk += `Animals Found: ${tabs.animals_found}. `;
          }
          break;
          
        case 'forest':
          if (tabs.facts) {
            textChunk += `Forest Facts: ${tabs.facts}. `;
          }
          if (tabs.animals_found) {
            textChunk += `Animals Found: ${tabs.animals_found}. `;
          }
          break;
          
        case 'waterfall':
          if (tabs.size) {
            textChunk += `Size: ${tabs.size}. `;
          }
          if (tabs.rivers_associated) {
            textChunk += `Associated Rivers: ${tabs.rivers_associated}. `;
          }
          break;
          
        case 'dam':
          if (tabs.size) {
            textChunk += `Size: ${tabs.size}. `;
          }
          if (tabs.rivers_associated) {
            textChunk += `Associated Rivers: ${tabs.rivers_associated}. `;
          }
          break;
      }
    }

    // Add coordinates
    textChunk += `Coordinates: ${poi.coordinates.lat}, ${poi.coordinates.lng}. `;
    
    // Add banner image info if available
    if (poi.banner_image) {
      textChunk += `Image available. `;
    }

    return textChunk.trim();
  }

  /**
   * Generate embeddings for multiple POIs
   */
  async generateEmbeddingsForPOIs(pois: KarnatakaPOI[]): Promise<Array<{
    poi: KarnatakaPOI;
    textChunk: string;
    embedding: number[];
  }>> {
    const results = [];
    
    for (const poi of pois) {
      try {
        const textChunk = this.generateTextChunk(poi);
        const embedding = await this.generateEmbedding(textChunk);
        
        results.push({
          poi,
          textChunk,
          embedding
        });
        
        // Add small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 100));
      } catch (error) {
        console.error(`Error generating embedding for POI ${poi.id}:`, error);
      }
    }
    
    return results;
  }

  /**
   * Generate embedding for user query
   */
  async generateQueryEmbedding(query: string): Promise<number[]> {
    return this.generateEmbedding(query);
  }
}

export const embeddingService = new EmbeddingService();
