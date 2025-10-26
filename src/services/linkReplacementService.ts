// Link Replacement Service
// Automatically finds and replaces placeholder links with real URLs

import { geminiService } from './geminiService';

export interface LinkCategory {
  type: 'tickets' | 'virtual_tour' | 'restaurant' | 'hotel' | 'official_website' | 'booking' | 'guide' | 'museum' | 'transport';
  priority: number; // 1 = highest priority
  searchTerms: string[];
  urlPatterns: string[];
}

export interface LinkReplacement {
  originalUrl: string;
  newUrl: string;
  category: LinkCategory['type'];
  confidence: number; // 0-1
  source: string;
  lastChecked: Date;
}

export interface PlaceInfo {
  name: string;
  state: string;
  category: string; // monument, restaurant, hotel, etc.
  coordinates?: { lat: number; lng: number };
  description?: string;
}

class LinkReplacementService {
  private linkCategories: LinkCategory[] = [
    {
      type: 'tickets',
      priority: 1,
      searchTerms: ['tickets', 'booking', 'entry fee', 'admission', 'online booking'],
      urlPatterns: ['bookmyshow.com', 'ticketmaster.in', 'in.bookmyshow.com', 'tourism.gov.in', 'asi.nic.in']
    },
    {
      type: 'virtual_tour',
      priority: 1,
      searchTerms: ['virtual tour', '360 view', 'online tour', 'digital tour', 'street view'],
      urlPatterns: ['google.com/maps', 'streetview', 'virtualtour', '360.com']
    },
    {
      type: 'restaurant',
      priority: 2,
      searchTerms: ['restaurant', 'food', 'dining', 'cuisine', 'local food'],
      urlPatterns: ['zomato.com', 'swiggy.com', 'dineout.co.in', 'eazydiner.com']
    },
    {
      type: 'hotel',
      priority: 2,
      searchTerms: ['hotel', 'accommodation', 'stay', 'booking', 'resort'],
      urlPatterns: ['makemytrip.com', 'goibibo.com', 'booking.com', 'oyorooms.com', 'treebo.com']
    },
    {
      type: 'official_website',
      priority: 3,
      searchTerms: ['official website', 'government', 'tourism board', 'official'],
      urlPatterns: ['tourism.gov.in', '.gov.in', 'official', 'tourism']
    },
    {
      type: 'guide',
      priority: 3,
      searchTerms: ['guide', 'tour guide', 'local guide', 'travel guide'],
      urlPatterns: ['tripadvisor.com', 'thrillophilia.com', 'traveltriangle.com']
    },
    {
      type: 'museum',
      priority: 2,
      searchTerms: ['museum', 'gallery', 'exhibition', 'art'],
      urlPatterns: ['museum', 'gallery', 'exhibition']
    },
    {
      type: 'transport',
      priority: 3,
      searchTerms: ['transport', 'bus', 'train', 'flight', 'how to reach'],
      urlPatterns: ['irctc.co.in', 'redbus.in', 'makemytrip.com', 'goibibo.com']
    }
  ];

  private cache = new Map<string, LinkReplacement[]>();
  private readonly CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

  /**
   * Find real links for a place using web search and AI
   */
  async findRealLinks(placeInfo: PlaceInfo, linkType?: LinkCategory['type']): Promise<LinkReplacement[]> {
    const cacheKey = `${placeInfo.name}_${placeInfo.state}_${linkType || 'all'}`;
    
    // Check cache first
    const cached = this.cache.get(cacheKey);
    if (cached && this.isCacheValid(cached[0]?.lastChecked)) {
      return cached;
    }

    console.log(`🔍 Finding real links for: ${placeInfo.name}, ${placeInfo.state}`);
    
    const categories = linkType ? 
      this.linkCategories.filter(cat => cat.type === linkType) : 
      this.linkCategories.sort((a, b) => a.priority - b.priority);

    const replacements: LinkReplacement[] = [];

    for (const category of categories) {
      try {
        const replacement = await this.findLinksForCategory(placeInfo, category);
        if (replacement) {
          replacements.push(replacement);
        }
      } catch (error) {
        console.error(`Error finding links for category ${category.type}:`, error);
      }
    }

    // Cache the results
    this.cache.set(cacheKey, replacements);
    
    return replacements;
  }

  /**
   * Find links for a specific category using Gemini AI
   */
  private async findLinksForCategory(placeInfo: PlaceInfo, category: LinkCategory): Promise<LinkReplacement | null> {
    const searchQuery = this.buildSearchQuery(placeInfo, category);
    
    try {
      // Use Gemini to find relevant links
      const prompt = `
        Find the best ${category.type} link for "${placeInfo.name}" in ${placeInfo.state}, India.
        
        Search for: ${searchQuery.join(', ')}
        
        Return a JSON object with:
        {
          "url": "actual_working_url",
          "confidence": 0.8,
          "source": "website_name",
          "description": "brief description of what this link provides"
        }
        
        Only return real, working URLs. If no good link is found, return null.
        Focus on official websites, reputable booking platforms, and government tourism sites.
      `;

      const response = await geminiService.generateContent(prompt);
      
      if (response && response.includes('null')) {
        return null;
      }

      // Parse the response
      const match = response.match(/\{[\s\S]*\}/);
      if (!match) {
        return null;
      }

      const result = JSON.parse(match[0]);
      
      if (!result.url || result.url.includes('example.com')) {
        return null;
      }

      return {
        originalUrl: `https://example.com/${category.type}`,
        newUrl: result.url,
        category: category.type,
        confidence: result.confidence || 0.5,
        source: result.source || 'AI Search',
        lastChecked: new Date()
      };

    } catch (error) {
      console.error(`Error in Gemini search for ${category.type}:`, error);
      return null;
    }
  }

  /**
   * Build search query for a specific category
   */
  private buildSearchQuery(placeInfo: PlaceInfo, category: LinkCategory): string[] {
    const baseTerms = [
      placeInfo.name,
      placeInfo.state,
      'India'
    ];

    const categoryTerms = category.searchTerms;
    
    return [
      ...baseTerms,
      ...categoryTerms
    ];
  }

  /**
   * Validate if a URL is working
   */
  async validateUrl(url: string): Promise<boolean> {
    try {
      const response = await fetch(url, { 
        method: 'HEAD',
        mode: 'no-cors' // Avoid CORS issues
      });
      return true; // If no error, assume it's working
    } catch (error) {
      console.warn(`URL validation failed for ${url}:`, error);
      return false;
    }
  }

  /**
   * Batch process multiple places
   */
  async batchProcessPlaces(places: PlaceInfo[]): Promise<Map<string, LinkReplacement[]>> {
    const results = new Map<string, LinkReplacement[]>();
    
    console.log(`🚀 Starting batch processing of ${places.length} places`);
    
    for (let i = 0; i < places.length; i++) {
      const place = places[i];
      console.log(`Processing ${i + 1}/${places.length}: ${place.name}`);
      
      try {
        const replacements = await this.findRealLinks(place);
        results.set(`${place.name}_${place.state}`, replacements);
        
        // Add delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 1000));
        
      } catch (error) {
        console.error(`Error processing ${place.name}:`, error);
        results.set(`${place.name}_${place.state}`, []);
      }
    }
    
    return results;
  }

  /**
   * Check if cache is still valid
   */
  private isCacheValid(lastChecked: Date): boolean {
    return Date.now() - lastChecked.getTime() < this.CACHE_DURATION;
  }

  /**
   * Get statistics about link replacements
   */
  getStats(): {
    totalCached: number;
    categoriesFound: Record<string, number>;
    averageConfidence: number;
  } {
    const totalCached = this.cache.size;
    const categoriesFound: Record<string, number> = {};
    let totalConfidence = 0;
    let totalReplacements = 0;

    for (const replacements of this.cache.values()) {
      for (const replacement of replacements) {
        categoriesFound[replacement.category] = (categoriesFound[replacement.category] || 0) + 1;
        totalConfidence += replacement.confidence;
        totalReplacements++;
      }
    }

    return {
      totalCached,
      categoriesFound,
      averageConfidence: totalReplacements > 0 ? totalConfidence / totalReplacements : 0
    };
  }

  /**
   * Clear cache
   */
  clearCache(): void {
    this.cache.clear();
  }
}

export const linkReplacementService = new LinkReplacementService();

