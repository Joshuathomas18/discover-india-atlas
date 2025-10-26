import { MeiliSearch } from 'meilisearch';

export interface MeilisearchDocument {
  id: string;
  name: string;
  type: 'Monument' | 'City' | 'River' | 'Mountain' | 'Wildlife' | 'Forest' | 'Waterfall' | 'Dam' | 'Festival' | 'Food' | 'Custom';
  state: string;
  city?: string;
  coordinates: { lat: number; lng: number };
  tags: string[];
  description_short: string;
  description_long: string;
  banner_image?: string;
  category: string;
  state_id: string;
}

class MeilisearchService {
  private client: MeiliSearch | null = null;
  private indexName = 'india_knowledge_graph';

  private getClient(): MeiliSearch {
    if (!this.client) {
      // Use process.env for Node.js scripts, import.meta.env for browser
      const url = typeof process !== 'undefined' && process.env 
        ? process.env.VITE_MEILISEARCH_URL 
        : import.meta.env?.VITE_MEILISEARCH_URL || 'http://localhost:7700';
        
      const key = typeof process !== 'undefined' && process.env 
        ? process.env.VITE_MEILISEARCH_KEY 
        : import.meta.env?.VITE_MEILISEARCH_KEY || 'master_key_change_me_in_production';
      
      console.log('Meilisearch URL:', url);
      console.log('Meilisearch Key:', key ? '***' + key.slice(-4) : 'undefined');
      
      this.client = new MeiliSearch({
        host: url,
        apiKey: key,
      });
    }
    return this.client;
  }

  /**
   * Initialize the Meilisearch index with proper settings
   */
  async initializeIndex(): Promise<void> {
    try {
      const index = this.getClient().index(this.indexName);
      
      // Set primary key
      try {
        await index.update({ primaryKey: 'id' });
        console.log('✅ Primary key set to "id"');
      } catch (e) {
        console.log('Primary key already set or index exists');
      }
      
      // Configure searchable attributes
      await index.updateSearchableAttributes([
        'name',
        'description_short', 
        'description_long',
        'tags',
        'state',
        'city',
        'type'
      ]);

      // Configure filterable attributes
      await index.updateFilterableAttributes([
        'type',
        'state',
        'category',
        'state_id'
      ]);

      // Configure sortable attributes
      await index.updateSortableAttributes(['name']);

      // Configure typo tolerance
      await index.updateTypoTolerance({
        enabled: true,
        minWordSizeForTypos: {
          oneTypo: 4,
          twoTypos: 8
        }
      });

      // Configure ranking rules
      await index.updateRankingRules([
        'words',
        'typo',
        'proximity',
        'attribute',
        'sort',
        'exactness'
      ]);

      console.log('✅ Meilisearch index initialized successfully');
    } catch (error) {
      console.error('❌ Failed to initialize Meilisearch index:', error);
      throw error;
    }
  }

  /**
   * Add documents to the index
   */
  async addDocuments(documents: MeilisearchDocument[]): Promise<void> {
    try {
      const index = this.getClient().index(this.indexName);
      await index.addDocuments(documents);
      console.log(`✅ Added ${documents.length} documents to Meilisearch`);
    } catch (error) {
      console.error('❌ Failed to add documents to Meilisearch:', error);
      throw error;
    }
  }

  /**
   * Search for documents
   */
  async search(
    query: string, 
    options: {
      limit?: number;
      offset?: number;
      filters?: string;
      sort?: string[];
      attributesToRetrieve?: string[];
    } = {}
  ): Promise<{ hits: MeilisearchDocument[]; totalHits: number; processingTimeMs: number }> {
    try {
      const index = this.getClient().index(this.indexName);
      
      const searchOptions = {
        limit: options.limit || 10,
        offset: options.offset || 0,
        filter: options.filters,
        sort: options.sort,
        attributesToRetrieve: options.attributesToRetrieve,
        showMatchesPosition: true,
        highlightPreTag: '<mark>',
        highlightPostTag: '</mark>'
      };

      const results = await index.search(query, searchOptions);
      
      return {
        hits: results.hits as MeilisearchDocument[],
        totalHits: results.estimatedTotalHits || 0,
        processingTimeMs: results.processingTimeMs || 0
      };
    } catch (error) {
      console.error('❌ Meilisearch search failed:', error);
      throw error;
    }
  }

  /**
   * Search with filters
   */
  async searchWithFilters(
    query: string,
    filters: {
      type?: string;
      state?: string;
      category?: string;
    } = {}
  ): Promise<MeilisearchDocument[]> {
    const filterParts: string[] = [];
    
    if (filters.type) {
      filterParts.push(`type = "${filters.type}"`);
    }
    
    if (filters.state) {
      filterParts.push(`state = "${filters.state}"`);
    }
    
    if (filters.category) {
      filterParts.push(`category = "${filters.category}"`);
    }

    const filterString = filterParts.length > 0 ? filterParts.join(' AND ') : undefined;
    
    const results = await this.search(query, { 
      limit: 20,
      filters: filterString 
    });
    
    return results.hits;
  }

  /**
   * Get all documents (for debugging)
   */
  async getAllDocuments(): Promise<MeilisearchDocument[]> {
    try {
      const index = this.getClient().index(this.indexName);
      const results = await index.getDocuments({ limit: 1000 });
      return results.results as MeilisearchDocument[];
    } catch (error) {
      console.error('❌ Failed to get all documents:', error);
      throw error;
    }
  }

  /**
   * Get index stats
   */
  async getStats(): Promise<any> {
    try {
      const index = this.getClient().index(this.indexName);
      return await index.getStats();
    } catch (error) {
      console.error('❌ Failed to get index stats:', error);
      throw error;
    }
  }

  /**
   * Clear all documents from the index
   */
  async clearIndex(): Promise<void> {
    try {
      const index = this.getClient().index(this.indexName);
      await index.deleteAllDocuments();
      console.log('✅ Cleared Meilisearch index');
    } catch (error) {
      console.error('❌ Failed to clear index:', error);
      throw error;
    }
  }

  /**
   * Search for trip planning with specific filters
   */
  async searchForTripPlanning(filters: {
    state?: string;
    terrain?: 'hills' | 'plains' | 'mixed';
    activityType?: string;
    limit?: number;
  }): Promise<MeilisearchDocument[]> {
    try {
      const { state, terrain, activityType, limit = 20 } = filters;
      
      // Build search query based on filters
      let searchQuery = '';
      let filterQuery = '';
      
      if (state) {
        filterQuery += `state = "${state}"`;
      }
      
      // Add terrain-specific keywords
      if (terrain === 'hills') {
        searchQuery += ' mountains hills trekking peaks ';
      } else if (terrain === 'plains') {
        searchQuery += ' beaches plains coastal rivers ';
      } else if (terrain === 'mixed') {
        searchQuery += ' mountains hills beaches plains ';
      }
      
      // Add activity-specific keywords
      if (activityType === 'adventure') {
        searchQuery += ' adventure trekking hiking outdoor sports ';
      } else if (activityType === 'culture') {
        searchQuery += ' monuments temples heritage culture history ';
      } else if (activityType === 'nature') {
        searchQuery += ' wildlife forests national park nature animals ';
      } else if (activityType === 'relaxation') {
        searchQuery += ' beaches resorts spa relaxation leisure ';
      }
      
      // If no specific search query, search for all POIs in the state
      if (!searchQuery.trim()) {
        searchQuery = state || 'india';
      }
      
      const searchOptions: any = {
        limit,
        attributesToRetrieve: ['id', 'name', 'type', 'state', 'city', 'coordinates', 'description_short', 'category', 'state_id', 'tags']
      };
      
      if (filterQuery) {
        searchOptions.filter = filterQuery;
      }
      
      const results = await this.search(searchQuery, searchOptions);
      
      // Filter results by terrain and activity type for better relevance
      let filteredResults = results.hits;
      
      if (terrain === 'hills') {
        filteredResults = filteredResults.filter(doc => 
          doc.type === 'Mountain' || 
          doc.tags.some(tag => 
            ['mountain', 'hill', 'trek', 'peak', 'hiking'].some(keyword => 
              tag.toLowerCase().includes(keyword)
            )
          )
        );
      } else if (terrain === 'plains') {
        filteredResults = filteredResults.filter(doc => 
          doc.type === 'River' || 
          doc.tags.some(tag => 
            ['beach', 'coastal', 'plain', 'river'].some(keyword => 
              tag.toLowerCase().includes(keyword)
            )
          )
        );
      }
      
      if (activityType === 'adventure') {
        filteredResults = filteredResults.filter(doc => 
          doc.type === 'Mountain' || 
          doc.tags.some(tag => 
            ['adventure', 'trek', 'hiking', 'outdoor'].some(keyword => 
              tag.toLowerCase().includes(keyword)
            )
          )
        );
      } else if (activityType === 'culture') {
        filteredResults = filteredResults.filter(doc => 
          doc.type === 'Monument' || 
          doc.tags.some(tag => 
            ['monument', 'temple', 'heritage', 'culture', 'history'].some(keyword => 
              tag.toLowerCase().includes(keyword)
            )
          )
        );
      } else if (activityType === 'nature') {
        filteredResults = filteredResults.filter(doc => 
          ['Wildlife', 'Forest', 'River', 'Mountain'].includes(doc.type) || 
          doc.tags.some(tag => 
            ['wildlife', 'forest', 'nature', 'animals'].some(keyword => 
              tag.toLowerCase().includes(keyword)
            )
          )
        );
      } else if (activityType === 'relaxation') {
        filteredResults = filteredResults.filter(doc => 
          doc.type === 'River' || 
          doc.tags.some(tag => 
            ['beach', 'resort', 'spa', 'relaxation'].some(keyword => 
              tag.toLowerCase().includes(keyword)
            )
          )
        );
      }
      
      return filteredResults.slice(0, limit);
    } catch (error) {
      console.error('Error in searchForTripPlanning:', error);
      return [];
    }
  }
}

export const meilisearchService = new MeilisearchService();
