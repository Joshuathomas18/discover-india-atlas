import { GoogleGenerativeAI } from '@google/generative-ai';
import { ChromaClient } from 'chromadb';
import { meilisearchService, MeilisearchDocument } from './meilisearchService';
import { embeddingService } from './embeddingService';

interface RAGResult {
  answer: string;
  sources: MeilisearchDocument[];
  confidence: number;
}

class RAGService {
  private genAI: GoogleGenerativeAI;
  private chromaClient: ChromaClient;
  private collectionName = 'india_tourism_embeddings';

  constructor() {
    // Use process.env for Node.js scripts, import.meta.env for browser
    const apiKey = typeof process !== 'undefined' && process.env 
      ? process.env.VITE_GEMINI_API_KEY 
      : import.meta.env?.VITE_GEMINI_API_KEY;
      
    if (!apiKey) {
      throw new Error('VITE_GEMINI_API_KEY is required for RAG service');
    }
    this.genAI = new GoogleGenerativeAI(apiKey);
    
    const chromaUrl = typeof process !== 'undefined' && process.env 
      ? process.env.VITE_CHROMADB_URL 
      : import.meta.env?.VITE_CHROMADB_URL || 'http://localhost:8000';
    this.chromaClient = new ChromaClient({ path: chromaUrl });
  }

  /**
   * Answer a user question using RAG
   */
  async answerQuestion(userQuery: string): Promise<RAGResult> {
    try {
      console.log(`🤖 Processing question: ${userQuery}`);
      
      // Step 1: Generate embedding for user query
      const queryEmbedding = await embeddingService.generateQueryEmbedding(userQuery);
      
      // Step 2: Vector search in ChromaDB
      const collection = await this.chromaClient.getCollection({ 
        name: this.collectionName 
      });
      
      const searchResults = await collection.query({
        queryEmbeddings: [queryEmbedding],
        nResults: 5, // Get top 5 most relevant documents
        include: ['metadatas', 'documents', 'distances']
      });
      
      if (!searchResults.metadatas || searchResults.metadatas.length === 0) {
        return {
          answer: "I couldn't find relevant information about that topic in our database. Please try asking about Indian states, cities, monuments, rivers, mountains, wildlife, forests, waterfalls, or dams.",
          sources: [],
          confidence: 0
        };
      }
      
      // Step 3: Fetch full data from Meilisearch using doc_ids
      const docIds = searchResults.metadatas[0].map((meta: any) => meta.doc_id);
      const sources: MeilisearchDocument[] = [];
      
      for (const docId of docIds) {
        try {
          const results = await meilisearchService.search('', {
            filters: `id = "${docId}"`
          });
          if (results.hits.length > 0) {
            sources.push(results.hits[0]);
          }
        } catch (error) {
          console.error(`Error fetching document ${docId}:`, error);
        }
      }
      
      // Step 4: Construct RAG prompt with context
      const context = this.buildContext(sources, searchResults.documents[0]);
      const prompt = this.buildPrompt(userQuery, context);
      
      // Step 5: Call Gemini LLM with prompt
      const model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      const result = await model.generateContent(prompt);
      const answer = result.response.text();
      
      // Step 6: Calculate confidence based on similarity scores
      const distances = searchResults.distances[0] || [];
      const avgDistance = distances.reduce((sum: number, dist: number) => sum + dist, 0) / distances.length;
      const confidence = Math.max(0, Math.min(1, 1 - avgDistance)); // Convert distance to confidence
      
      console.log(`✅ Generated answer with confidence: ${confidence.toFixed(2)}`);
      
      return {
        answer,
        sources,
        confidence
      };
      
    } catch (error) {
      console.error('❌ RAG service error:', error);
      return {
        answer: "I'm sorry, I encountered an error while processing your question. Please try again later.",
        sources: [],
        confidence: 0
      };
    }
  }

  /**
   * Build context from search results
   */
  private buildContext(sources: MeilisearchDocument[], documents: string[]): string {
    let context = '';
    
    sources.forEach((source, index) => {
      const document = documents[index] || '';
      context += `\n--- Source ${index + 1}: ${source.name} (${source.type}, ${source.state}) ---\n`;
      context += `Description: ${source.description_long}\n`;
      context += `Additional Info: ${document}\n`;
      
      if (source.city) {
        context += `City: ${source.city}\n`;
      }
      
      if (source.coordinates) {
        context += `Location: ${source.coordinates.lat}, ${source.coordinates.lng}\n`;
      }
    });
    
    return context;
  }

  /**
   * Build prompt for Gemini
   */
  private buildPrompt(userQuery: string, context: string): string {
    return `You are an expert guide for Indian tourism and culture. Answer the user's question based on the provided context about Indian states, cities, monuments, rivers, mountains, wildlife, forests, waterfalls, and dams.

Context Information:
${context}

User Question: ${userQuery}

Instructions:
1. Provide accurate, helpful information based on the context
2. If the context doesn't contain enough information, say so politely
3. Include relevant details like locations, descriptions, and interesting facts
4. Be conversational and engaging
5. If mentioning specific places, include their state and city when available
6. Keep your answer concise but informative (2-3 paragraphs max)
7. If the question is about travel planning, provide practical information

Answer:`;
  }

  /**
   * Get similar POIs based on a query
   */
  async getSimilarPOIs(query: string, limit: number = 5): Promise<MeilisearchDocument[]> {
    try {
      const queryEmbedding = await embeddingService.generateQueryEmbedding(query);
      
      const collection = await this.chromaClient.getCollection({ 
        name: this.collectionName 
      });
      
      const searchResults = await collection.query({
        queryEmbeddings: [queryEmbedding],
        nResults: limit,
        include: ['metadatas']
      });
      
      if (!searchResults.metadatas || searchResults.metadatas.length === 0) {
        return [];
      }
      
      const docIds = searchResults.metadatas[0].map((meta: any) => meta.doc_id);
      const sources: MeilisearchDocument[] = [];
      
      for (const docId of docIds) {
        try {
          const results = await meilisearchService.search('', {
            filters: `id = "${docId}"`
          });
          if (results.hits.length > 0) {
            sources.push(results.hits[0]);
          }
        } catch (error) {
          console.error(`Error fetching document ${docId}:`, error);
        }
      }
      
      return sources;
      
    } catch (error) {
      console.error('Error getting similar POIs:', error);
      return [];
    }
  }

  /**
   * Get collection stats
   */
  async getStats(): Promise<any> {
    try {
      const collection = await this.chromaClient.getCollection({ 
        name: this.collectionName 
      });
      
      const count = await collection.count();
      return { totalDocuments: count };
    } catch (error) {
      console.error('Error getting RAG stats:', error);
      return { totalDocuments: 0 };
    }
  }
}

export const ragService = new RAGService();
