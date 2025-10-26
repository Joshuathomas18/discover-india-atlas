import { GeminiPlaceData, PlaceType } from './geminiService';

export interface CacheEntry {
  query: string;
  placeType: PlaceType;
  data: GeminiPlaceData;
  timestamp: number;
  expiresAt: number;
}

class CacheService {
  private readonly CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours
  private readonly CACHE_PREFIX = 'gemini_';
  
  /**
   * Store Gemini response in cache
   */
  set(query: string, data: GeminiPlaceData): void {
    try {
      const entry: CacheEntry = {
        query: query.toLowerCase().trim(),
        placeType: data.category,
        data,
        timestamp: Date.now(),
        expiresAt: Date.now() + this.CACHE_DURATION
      };
      
      const cacheKey = this.getCacheKey(query);
      localStorage.setItem(cacheKey, JSON.stringify(entry));
      
      console.log('💾 Cached Gemini data for:', query);
      
      // Track cache stats
      this.incrementCacheMisses();
      
    } catch (error) {
      console.error('❌ Failed to cache data:', error);
    }
  }
  
  /**
   * Retrieve cached Gemini response
   */
  get(query: string): GeminiPlaceData | null {
    try {
      const cacheKey = this.getCacheKey(query);
      const cached = localStorage.getItem(cacheKey);
      
      if (!cached) {
        return null;
      }
      
      const entry: CacheEntry = JSON.parse(cached);
      
      // Check if cache has expired
      if (Date.now() > entry.expiresAt) {
        this.remove(query);
        console.log('⏰ Cache expired for:', query);
        return null;
      }
      
      console.log('📦 Retrieved cached data for:', query);
      
      // Track cache stats
      this.incrementCacheHits();
      
      return entry.data;
      
    } catch (error) {
      console.error('❌ Failed to retrieve cached data:', error);
      return null;
    }
  }
  
  /**
   * Remove cached data
   */
  remove(query: string): void {
    try {
      const cacheKey = this.getCacheKey(query);
      localStorage.removeItem(cacheKey);
      console.log('🗑️ Removed cached data for:', query);
    } catch (error) {
      console.error('❌ Failed to remove cached data:', error);
    }
  }
  
  /**
   * Clear all cached data
   */
  clear(): void {
    try {
      const keys = Object.keys(localStorage);
      const geminiKeys = keys.filter(key => key.startsWith(this.CACHE_PREFIX));
      
      geminiKeys.forEach(key => localStorage.removeItem(key));
      
      console.log('🧹 Cleared all Gemini cache data');
    } catch (error) {
      console.error('❌ Failed to clear cache:', error);
    }
  }
  
  /**
   * Get cache statistics
   */
  getStats(): { hits: number; misses: number; hitRate: number } {
    const hits = parseInt(localStorage.getItem('gemini_cache_hits') || '0');
    const misses = parseInt(localStorage.getItem('gemini_cache_misses') || '0');
    const total = hits + misses;
    
    return {
      hits,
      misses,
      hitRate: total > 0 ? hits / total : 0
    };
  }
  
  /**
   * Get cache key for query
   */
  private getCacheKey(query: string): string {
    return `${this.CACHE_PREFIX}${query.toLowerCase().trim().replace(/\s+/g, '_')}`;
  }
  
  /**
   * Increment cache hits counter
   */
  private incrementCacheHits(): void {
    const current = parseInt(localStorage.getItem('gemini_cache_hits') || '0');
    localStorage.setItem('gemini_cache_hits', (current + 1).toString());
  }
  
  /**
   * Increment cache misses counter
   */
  private incrementCacheMisses(): void {
    const current = parseInt(localStorage.getItem('gemini_cache_misses') || '0');
    localStorage.setItem('gemini_cache_misses', (current + 1).toString());
  }
  
  /**
   * Get all cached queries
   */
  getAllCachedQueries(): string[] {
    try {
      const keys = Object.keys(localStorage);
      const geminiKeys = keys.filter(key => key.startsWith(this.CACHE_PREFIX));
      
      return geminiKeys.map(key => key.replace(this.CACHE_PREFIX, '').replace(/_/g, ' '));
    } catch (error) {
      console.error('❌ Failed to get cached queries:', error);
      return [];
    }
  }
  
  /**
   * Check if query is cached
   */
  isCached(query: string): boolean {
    return this.get(query) !== null;
  }
}

export const cacheService = new CacheService();

