export interface WebCrawlResult {
  name: string;
  description: string;
  coordinates?: { lat: number; lng: number };
  state?: string;
  city?: string;
  category?: string;
  images?: string[];
  facts?: string[];
  activities?: string[];
  bestTime?: string;
  entryFee?: string;
  openingHours?: string;
  howToReach?: string;
  nearbyAttractions?: string[];
  source?: string;
}

export interface GeocodingResult {
  lat: number;
  lng: number;
  formatted_address: string;
  state?: string;
  city?: string;
}

class WebCrawlService {
  private readonly GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  private readonly OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
  
  /**
   * Crawl web data for a place using multiple sources
   */
  async crawlPlaceData(placeName: string): Promise<WebCrawlResult | null> {
    try {
      console.log(`🔍 Starting web crawl for: ${placeName}`);
      
      // Step 1: Enhance the search query for better geocoding
      const enhancedQuery = this.enhanceSearchQuery(placeName);
      console.log(`📍 Enhanced query: ${enhancedQuery}`);
      
      // Step 2: Get coordinates using Google Geocoding API
      const geocodingResult = await this.getCoordinates(enhancedQuery);
      if (!geocodingResult) {
        console.log('❌ Could not find coordinates for:', enhancedQuery);
        console.log('🔍 Trying original query as fallback...');
        const originalResult = await this.getCoordinates(placeName);
        if (!originalResult) {
          console.log('❌ Could not find coordinates for original query either:', placeName);
          return null;
        }
        console.log('✅ Found coordinates for original query:', originalResult);
        // Use original result
        const webData = await this.searchWebInformation(placeName, originalResult);
        const result: WebCrawlResult = {
          name: placeName,
          description: webData.description || `Discover the beauty and culture of ${placeName}`,
          coordinates: originalResult,
          state: originalResult.state,
          city: originalResult.city,
          category: this.determineCategory(placeName, webData.description),
          images: webData.images || [],
          facts: webData.facts || [],
          activities: webData.activities || [],
          bestTime: webData.bestTime,
          entryFee: webData.entryFee,
          openingHours: webData.openingHours,
          howToReach: webData.howToReach,
          nearbyAttractions: webData.nearbyAttractions || [],
          source: 'web_crawl'
        };
        console.log('✅ Web crawl completed for:', placeName);
        return result;
      }
      
      console.log('📍 Coordinates found:', geocodingResult);
      
      // Step 2: Search for information using web search
      const webData = await this.searchWebInformation(placeName, geocodingResult);
      
      // Step 3: Combine and structure the data
      const result: WebCrawlResult = {
        name: placeName,
        description: webData.description || `Discover the beauty and culture of ${placeName}`,
        coordinates: geocodingResult,
        state: geocodingResult.state,
        city: geocodingResult.city,
        category: this.determineCategory(placeName, webData.description),
        images: webData.images || [],
        facts: webData.facts || [],
        activities: webData.activities || [],
        bestTime: webData.bestTime,
        entryFee: webData.entryFee,
        openingHours: webData.openingHours,
        howToReach: webData.howToReach,
        nearbyAttractions: webData.nearbyAttractions || [],
        source: 'web_crawl'
      };
      
      console.log('✅ Web crawl completed for:', placeName);
      return result;
      
    } catch (error) {
      console.error('❌ Web crawl failed for:', placeName, error);
      return null;
    }
  }
  
  /**
   * Enhance search query for better geocoding results
   */
  private enhanceSearchQuery(placeName: string): string {
    const query = placeName.toLowerCase().trim();
    
    // Handle common abbreviations and short queries
    const enhancements: { [key: string]: string } = {
      'mum': 'Mumbai Maharashtra India',
      'del': 'Delhi India',
      'kol': 'Kolkata West Bengal India',
      'che': 'Chennai Tamil Nadu India',
      'hyd': 'Hyderabad Telangana India',
      'pun': 'Pune Maharashtra India',
      'ban': 'Bangalore Karnataka India',
      'blr': 'Bangalore Karnataka India',
      'bom': 'Mumbai Maharashtra India',
      'cal': 'Kolkata West Bengal India',
      'mad': 'Madurai Tamil Nadu India',
      'mys': 'Mysore Karnataka India',
      'koch': 'Kochi Kerala India',
      'tvm': 'Thiruvananthapuram Kerala India',
      'goa': 'Goa India',
      'raj': 'Rajasthan India',
      'ker': 'Kerala India',
      'kar': 'Karnataka India',
      'tn': 'Tamil Nadu India',
      'mh': 'Maharashtra India',
      'up': 'Uttar Pradesh India',
      'wb': 'West Bengal India',
      'gj': 'Gujarat India',
      'mp': 'Madhya Pradesh India',
      'ap': 'Andhra Pradesh India',
      'ts': 'Telangana India',
      'or': 'Odisha India',
      'as': 'Assam India',
      'pb': 'Punjab India',
      'hr': 'Haryana India',
      'hp': 'Himachal Pradesh India',
      'uk': 'Uttarakhand India',
      'jh': 'Jharkhand India',
      'br': 'Bihar India',
      'cg': 'Chhattisgarh India',
      'sk': 'Sikkim India',
      'mn': 'Manipur India',
      'mz': 'Mizoram India',
      'nl': 'Nagaland India',
      'ar': 'Arunachal Pradesh India',
      'me': 'Meghalaya India',
      'tr': 'Tripura India',
      'ga': 'Goa India',
      'ch': 'Chandigarh India',
      'dl': 'Delhi India',
      'py': 'Puducherry India',
      'ld': 'Lakshadweep India',
      'an': 'Andaman and Nicobar Islands India',
      'dn': 'Dadra and Nagar Haveli and Daman and Diu India',
      'jk': 'Jammu and Kashmir India',
      'la': 'Ladakh India'
    };
    
    // Check for exact matches first
    if (enhancements[query]) {
      return enhancements[query];
    }
    
    // Check for partial matches
    for (const [abbrev, full] of Object.entries(enhancements)) {
      if (query.includes(abbrev) || abbrev.includes(query)) {
        return full;
      }
    }
    
    // If query is too short, try to expand it
    if (query.length <= 3) {
      // Try common Indian place patterns
      if (query.endsWith('ai') || query.endsWith('ur') || query.endsWith('pur')) {
        return `${placeName} India`;
      }
      if (query.endsWith('bad') || query.endsWith('nagar') || query.endsWith('garh')) {
        return `${placeName} India`;
      }
    }
    
    // Default: add India to the query
    return `${placeName} India`;
  }
  
  /**
   * Get coordinates using Google Geocoding API
   */
  private async getCoordinates(placeName: string): Promise<GeocodingResult | null> {
    console.log('🔍 Attempting geocoding for:', placeName);
    console.log('🔑 Google API Key available:', !!this.GOOGLE_API_KEY);
    
    // First try fallback coordinates for known places
    const fallbackResult = this.getFallbackCoordinates(placeName);
    if (fallbackResult) {
      console.log('✅ Using fallback coordinates:', fallbackResult);
      return fallbackResult;
    }
    
    if (!this.GOOGLE_API_KEY) {
      console.log('⚠️ Google API key not found, no fallback available');
      return null;
    }
    
    try {
      console.log('🌐 Making Google Geocoding API request...');
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(placeName)}&key=${this.GOOGLE_API_KEY}`
      );
      
      if (!response.ok) {
        console.error('❌ Geocoding API response not OK:', response.status, response.statusText);
        return null;
      }
      
      const data = await response.json();
      console.log('📡 Geocoding API response:', data.status, data.results?.length || 0, 'results');
      
      if (data.status === 'OK' && data.results.length > 0) {
        const result = data.results[0];
        const location = result.geometry.location;
        
        // Extract state and city from address components
        let state = '';
        let city = '';
        
        result.address_components.forEach((component: any) => {
          if (component.types.includes('administrative_area_level_1')) {
            state = component.long_name;
          }
          if (component.types.includes('locality') || component.types.includes('administrative_area_level_2')) {
            city = component.long_name;
          }
        });
        
        const geocodingResult = {
          lat: location.lat,
          lng: location.lng,
          formatted_address: result.formatted_address,
          state,
          city
        };
        
        console.log('✅ Geocoding successful:', geocodingResult);
        return geocodingResult;
      }
      
      console.log('❌ Geocoding failed:', data.status, data.error_message || 'No results');
      return null;
    } catch (error) {
      console.error('❌ Geocoding API error:', error);
      return null;
    }
  }
  
  /**
   * Fallback coordinates for known places
   */
  private getFallbackCoordinates(placeName: string): GeocodingResult | null {
    const fallbackPlaces: { [key: string]: GeocodingResult } = {
      // Major cities
      'mumbai': { lat: 19.0760, lng: 72.8777, formatted_address: 'Mumbai, Maharashtra, India', state: 'Maharashtra', city: 'Mumbai' },
      'delhi': { lat: 28.7041, lng: 77.1025, formatted_address: 'Delhi, India', state: 'Delhi', city: 'Delhi' },
      'bangalore': { lat: 12.9716, lng: 77.5946, formatted_address: 'Bangalore, Karnataka, India', state: 'Karnataka', city: 'Bangalore' },
      'chennai': { lat: 13.0827, lng: 80.2707, formatted_address: 'Chennai, Tamil Nadu, India', state: 'Tamil Nadu', city: 'Chennai' },
      'kolkata': { lat: 22.5726, lng: 88.3639, formatted_address: 'Kolkata, West Bengal, India', state: 'West Bengal', city: 'Kolkata' },
      'hyderabad': { lat: 17.3850, lng: 78.4867, formatted_address: 'Hyderabad, Telangana, India', state: 'Telangana', city: 'Hyderabad' },
      'pune': { lat: 18.5204, lng: 73.8567, formatted_address: 'Pune, Maharashtra, India', state: 'Maharashtra', city: 'Pune' },
      'ahmedabad': { lat: 23.0225, lng: 72.5714, formatted_address: 'Ahmedabad, Gujarat, India', state: 'Gujarat', city: 'Ahmedabad' },
      'jaipur': { lat: 26.9124, lng: 75.7873, formatted_address: 'Jaipur, Rajasthan, India', state: 'Rajasthan', city: 'Jaipur' },
      'lucknow': { lat: 26.8467, lng: 80.9462, formatted_address: 'Lucknow, Uttar Pradesh, India', state: 'Uttar Pradesh', city: 'Lucknow' },
      
      // Tourist destinations
      'agra': { lat: 27.1767, lng: 78.0081, formatted_address: 'Agra, Uttar Pradesh, India', state: 'Uttar Pradesh', city: 'Agra' },
      'varanasi': { lat: 25.3176, lng: 82.9739, formatted_address: 'Varanasi, Uttar Pradesh, India', state: 'Uttar Pradesh', city: 'Varanasi' },
      'coimbatore': { lat: 11.0168, lng: 76.9558, formatted_address: 'Coimbatore, Tamil Nadu, India', state: 'Tamil Nadu', city: 'Coimbatore' },
      'madurai': { lat: 9.9252, lng: 78.1198, formatted_address: 'Madurai, Tamil Nadu, India', state: 'Tamil Nadu', city: 'Madurai' },
      'mysore': { lat: 12.2958, lng: 76.6394, formatted_address: 'Mysore, Karnataka, India', state: 'Karnataka', city: 'Mysore' },
      'mangalore': { lat: 12.9141, lng: 74.8560, formatted_address: 'Mangalore, Karnataka, India', state: 'Karnataka', city: 'Mangalore' },
      'kochi': { lat: 9.9312, lng: 76.2673, formatted_address: 'Kochi, Kerala, India', state: 'Kerala', city: 'Kochi' },
      'thiruvananthapuram': { lat: 8.5241, lng: 76.9366, formatted_address: 'Thiruvananthapuram, Kerala, India', state: 'Kerala', city: 'Thiruvananthapuram' },
      
      // States (center coordinates)
      'maharashtra': { lat: 19.7515, lng: 75.7139, formatted_address: 'Maharashtra, India', state: 'Maharashtra', city: 'Mumbai' },
      'karnataka': { lat: 15.3173, lng: 75.7139, formatted_address: 'Karnataka, India', state: 'Karnataka', city: 'Bangalore' },
      'tamil nadu': { lat: 11.1271, lng: 78.6569, formatted_address: 'Tamil Nadu, India', state: 'Tamil Nadu', city: 'Chennai' },
      'kerala': { lat: 10.8505, lng: 76.2711, formatted_address: 'Kerala, India', state: 'Kerala', city: 'Thiruvananthapuram' },
      'rajasthan': { lat: 27.0238, lng: 74.2179, formatted_address: 'Rajasthan, India', state: 'Rajasthan', city: 'Jaipur' },
      'gujarat': { lat: 23.0225, lng: 71.1924, formatted_address: 'Gujarat, India', state: 'Gujarat', city: 'Ahmedabad' },
      'uttar pradesh': { lat: 26.8467, lng: 80.9462, formatted_address: 'Uttar Pradesh, India', state: 'Uttar Pradesh', city: 'Lucknow' },
      'west bengal': { lat: 22.9868, lng: 87.8550, formatted_address: 'West Bengal, India', state: 'West Bengal', city: 'Kolkata' }
    };
    
    const normalizedName = placeName.toLowerCase().trim();
    console.log('🔍 Looking up fallback coordinates for:', normalizedName);
    
    // Check for exact matches
    if (fallbackPlaces[normalizedName]) {
      console.log('✅ Found exact fallback match:', normalizedName);
      return fallbackPlaces[normalizedName];
    }
    
    // Check for partial matches - extract the main city/place name
    const mainPlaceName = normalizedName.split(' ')[0]; // Get first word
    console.log('🔍 Checking partial match for main place:', mainPlaceName);
    
    if (fallbackPlaces[mainPlaceName]) {
      console.log('✅ Found partial fallback match:', mainPlaceName);
      return fallbackPlaces[mainPlaceName];
    }
    
    // Check for partial matches in the full name
    for (const [key, value] of Object.entries(fallbackPlaces)) {
      if (normalizedName.includes(key) || key.includes(normalizedName)) {
        console.log('✅ Found partial fallback match:', key);
        return value;
      }
    }
    
    console.log('❌ No fallback coordinates found for:', normalizedName);
    return null;
  }
  
  /**
   * Search for web information about the place
   */
  private async searchWebInformation(placeName: string, geocodingResult: GeocodingResult): Promise<any> {
    try {
      // Use web search to find information
      const searchQuery = `${placeName} ${geocodingResult.state || ''} India tourism attractions facts`;
      
      // For now, return structured mock data based on place type
      // In production, this would use actual web scraping or APIs
      return this.generateStructuredData(placeName, geocodingResult);
      
    } catch (error) {
      console.error('Web search error:', error);
      return {};
    }
  }
  
  /**
   * Generate structured data based on place characteristics
   */
  private generateStructuredData(placeName: string, geocodingResult: GeocodingResult): any {
    const placeType = this.determinePlaceType(placeName);
    
    switch (placeType) {
      case 'city':
        return {
          description: `${placeName} is a vibrant city in ${geocodingResult.state || 'India'}, known for its rich culture, historical significance, and modern amenities.`,
          facts: [
            `Located in ${geocodingResult.state || 'India'}`,
            'Rich cultural heritage',
            'Modern infrastructure',
            'Tourist-friendly destination'
          ],
          activities: [
            'Explore local markets',
            'Visit historical sites',
            'Try local cuisine',
            'Experience cultural festivals'
          ],
          bestTime: 'October to March',
          howToReach: 'Well connected by road, rail, and air'
        };
        
      case 'monument':
        return {
          description: `${placeName} is a magnificent historical monument showcasing architectural brilliance and cultural heritage.`,
          facts: [
            'Historical significance',
            'Architectural marvel',
            'UNESCO World Heritage Site (if applicable)',
            'Cultural importance'
          ],
          activities: [
            'Guided tours',
            'Photography',
            'Historical exploration',
            'Cultural learning'
          ],
          bestTime: 'Early morning or late afternoon',
          entryFee: 'INR 50-500 (varies)',
          openingHours: '6:00 AM - 6:00 PM'
        };
        
      case 'nature':
        return {
          description: `${placeName} offers breathtaking natural beauty and is perfect for nature lovers and adventure enthusiasts.`,
          facts: [
            'Natural beauty',
            'Biodiversity hotspot',
            'Adventure activities',
            'Scenic views'
          ],
          activities: [
            'Trekking',
            'Photography',
            'Nature walks',
            'Wildlife spotting'
          ],
          bestTime: 'October to April',
          howToReach: 'Accessible by road'
        };
        
      default:
        return {
          description: `${placeName} is a fascinating destination in ${geocodingResult.state || 'India'} worth exploring.`,
          facts: [
            'Unique destination',
            'Cultural significance',
            'Tourist attraction'
          ],
          activities: [
            'Exploration',
            'Photography',
            'Cultural experience'
          ],
          bestTime: 'Year-round',
          howToReach: 'Well connected'
        };
    }
  }
  
  /**
   * Determine the type of place based on name
   */
  private determinePlaceType(placeName: string): string {
    const name = placeName.toLowerCase();
    
    if (name.includes('fort') || name.includes('palace') || name.includes('temple') || name.includes('mosque') || name.includes('church')) {
      return 'monument';
    }
    
    if (name.includes('falls') || name.includes('lake') || name.includes('river') || name.includes('mountain') || name.includes('hill') || name.includes('valley') || name.includes('forest') || name.includes('park')) {
      return 'nature';
    }
    
    return 'city';
  }
  
  /**
   * Determine category for the crawled data
   */
  private determineCategory(placeName: string, description?: string): string {
    const placeType = this.determinePlaceType(placeName);
    
    switch (placeType) {
      case 'monument': return 'monuments';
      case 'nature': return 'nature';
      default: return 'place';
    }
  }
  
  /**
   * Cache crawled data in localStorage
   */
  cacheCrawledData(placeName: string, data: WebCrawlResult): void {
    try {
      const cacheKey = `crawled_${placeName.toLowerCase().replace(/\s+/g, '_')}`;
      const cachedData = {
        ...data,
        crawled_at: new Date().toISOString(),
        cache_key: cacheKey
      };
      
      localStorage.setItem(cacheKey, JSON.stringify(cachedData));
      console.log('✅ Cached crawled data for:', placeName);
    } catch (error) {
      console.error('❌ Failed to cache data:', error);
    }
  }
  
  /**
   * Get cached crawled data
   */
  getCachedData(placeName: string): WebCrawlResult | null {
    try {
      const cacheKey = `crawled_${placeName.toLowerCase().replace(/\s+/g, '_')}`;
      const cached = localStorage.getItem(cacheKey);
      
      if (cached) {
        const data = JSON.parse(cached);
        console.log('📦 Retrieved cached data for:', placeName);
        return data;
      }
      
      return null;
    } catch (error) {
      console.error('❌ Failed to retrieve cached data:', error);
      return null;
    }
  }
}

export const webCrawlService = new WebCrawlService();
