import { useState, useRef, useEffect } from 'react';
import { Search, X, MapPin, Loader2, Globe, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { meilisearchService, MeilisearchDocument } from '@/services/meilisearchService';
import { geminiIntegrationService } from '@/services/geminiIntegrationService';
import { GeminiPlaceData } from '@/services/geminiService';
import { TextShimmer } from './ui/text-shimmer';

interface SearchResult {
  id: string;
  name: string;
  type: 'state' | 'poi' | 'place';
  state: string;
  coordinates: { lat: number; lng: number };
  description?: string;
  category?: string;
  meilisearchDoc?: MeilisearchDocument;
}

interface SearchBarProps {
  onLocationSelect: (result: SearchResult) => void;
  onGeminiResult: (result: GeminiPlaceData) => void;
  mapPhase: 'initial' | 'stateZoomed' | 'poiSelected';
}

const SearchBar = ({ onLocationSelect, onGeminiResult, mapPhase }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGeminiProcessing, setIsGeminiProcessing] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [showGeminiOption, setShowGeminiOption] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Search function using Meilisearch
  const searchLocations = async (searchQuery: string) => {
    if (searchQuery.length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    setIsLoading(true);
    setIsOpen(true); // Open dropdown when starting search
    try {
      const searchResults: SearchResult[] = [];

      // Search using Meilisearch
      const meilisearchResults = await meilisearchService.search(searchQuery, {
        limit: 10,
        attributesToRetrieve: ['id', 'name', 'type', 'state', 'city', 'coordinates', 'description_short', 'category', 'state_id']
      });

      // Transform Meilisearch results to SearchResult format
      meilisearchResults.hits.forEach((doc) => {
        if (doc.name && doc.state) { // Only add results with valid names and states
          searchResults.push({
            id: doc.id,
            name: doc.name,
            type: doc.type === 'City' ? 'place' : 'poi',
            state: doc.state,
            coordinates: doc.coordinates,
            description: doc.description_short,
            category: doc.category,
            meilisearchDoc: doc
          });
        }
      });

      // Add state-level results for broader searches
      const stateResults = await meilisearchService.searchWithFilters(searchQuery, {});
      const uniqueStates = new Set<string>();
      
      stateResults.forEach(result => {
        if (result.state && !uniqueStates.has(result.state)) {
          uniqueStates.add(result.state);
          searchResults.push({
            id: `state_${result.state_id}`,
            name: result.state,
            type: 'state',
            state: result.state,
            coordinates: result.coordinates, // Use first POI's coordinates as state center
            description: `Explore ${result.state}'s geographical treasures`
          });
        }
      });

      const finalResults = searchResults.slice(0, 10); // Limit to 10 results
      setResults(finalResults);
      
      // Show Gemini option when there are few results or no exact matches
      const exactMatch = finalResults.some(result => 
        result.name && result.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      const shouldShowGemini = finalResults.length === 0 || 
        !exactMatch || 
        finalResults.length < 3;
      
      setShowGeminiOption(shouldShowGemini && searchQuery.length >= 2);
      
    } catch (error) {
      console.error('Search error:', error);
      setShowGeminiOption(true); // Show Gemini option on error
      // Fallback to basic state search if Meilisearch fails
      const states = [
        { id: 'karnataka', name: 'Karnataka', center: { lat: 15.3173, lng: 75.7139 } },
        { id: 'kerala', name: 'Kerala', center: { lat: 10.8505, lng: 76.2711 } },
        { id: 'goa', name: 'Goa', center: { lat: 15.2993, lng: 74.1240 } },
        { id: 'tamil-nadu', name: 'Tamil Nadu', center: { lat: 11.1271, lng: 78.6569 } },
        { id: 'maharashtra', name: 'Maharashtra', center: { lat: 19.7515, lng: 75.7139 } },
        { id: 'uttarakhand', name: 'Uttarakhand', center: { lat: 30.0668, lng: 79.0193 } },
        { id: 'himachal-pradesh', name: 'Himachal Pradesh', center: { lat: 31.1048, lng: 77.1734 } },
        { id: 'rajasthan', name: 'Rajasthan', center: { lat: 27.0238, lng: 74.2179 } }
      ];

      const matchingStates = states.filter(state => 
        state.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      const fallbackResults = matchingStates.map(state => ({
          id: state.id,
          name: state.name,
        type: 'state' as const,
          state: state.name,
          coordinates: state.center,
          description: `Explore ${state.name}'s geographical treasures`
      }));

      setResults(fallbackResults);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setSelectedIndex(-1);
    
    if (value.length >= 2) {
      setIsOpen(true);
      searchLocations(value);
    } else {
      setIsOpen(false);
      setResults([]);
    }
  };

  // Handle key navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || results.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < results.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : results.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < results.length) {
          handleResultClick(results[selectedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setSelectedIndex(-1);
        break;
    }
  };

  // Handle result selection
  const handleResultClick = (result: SearchResult) => {
    onLocationSelect(result);
    setQuery('');
    setIsOpen(false);
    setSelectedIndex(-1);
    setResults([]);
  };

  // Clear search
  const clearSearch = () => {
    setQuery('');
    setIsOpen(false);
    setSelectedIndex(-1);
    setResults([]);
    setShowGeminiOption(false);
    inputRef.current?.focus();
  };

  // Handle Gemini search
  const handleGeminiSearch = async () => {
    if (!query.trim()) return;
    
    setIsGeminiProcessing(true);
    setShowGeminiOption(false);
    
    try {
      console.log('🤖 Starting Gemini search for:', query);
      
      // Process complete Gemini flow
      const result = await geminiIntegrationService.processGeminiQuery(query);
      
      // Pass result to parent
      onGeminiResult(result.geminiData);
      
      // Clear search
      setQuery('');
      setIsOpen(false);
      
      console.log('✅ Gemini search completed for:', query);
      
    } catch (error) {
      console.error('❌ Gemini search error:', error);
      // Show error message or fallback
    } finally {
      setIsGeminiProcessing(false);
    }
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-muted-foreground" />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length >= 2 && setIsOpen(true)}
          placeholder="Search states, cities, or places..."
          className="w-full pl-10 pr-10 py-3 bg-white/90 backdrop-blur-sm border border-primary/20 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 text-sm"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 pr-3 flex items-center hover:text-primary transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        )}
        {isLoading && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <Loader2 className="h-4 w-4 animate-spin text-primary" />
          </div>
        )}
      </div>

      {/* Search Results Dropdown */}
      <AnimatePresence>
        {/* Loading shimmer effect */}
        {isOpen && isLoading && results.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md border border-primary/20 rounded-xl shadow-xl z-50 p-4"
          >
            <div className="flex items-center justify-center gap-3">
              <Loader2 className="h-5 w-5 animate-spin text-primary" />
              <TextShimmer 
                className="text-lg font-medium text-primary"
                duration={1.5}
                spread={3}
              >
                Generating results...
              </TextShimmer>
            </div>
          </motion.div>
        )}
        
        {/* No Results + Gemini Option */}
        {isOpen && !isLoading && results.length === 0 && query.length >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md border border-primary/20 rounded-xl shadow-xl z-50"
          >
            <div className="px-4 py-6 text-center">
              <div className="text-gray-400 text-4xl mb-3">🔍</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
              <p className="text-sm text-gray-600 mb-4">
                Try searching with AI for "{query}"
              </p>
              
              {/* Gemini AI Option */}
              <button
                onClick={handleGeminiSearch}
                disabled={isGeminiProcessing}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
              >
                {isGeminiProcessing ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <TextShimmer 
                      className="text-sm font-medium"
                      duration={1.2}
                      spread={2}
                    >
                      AI analyzing...
                    </TextShimmer>
                  </>
                ) : (
                  <>
                    <Globe className="h-4 w-4" />
                    <Plus className="h-3 w-3" />
                    AI Search for "{query}"
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
        
        {/* Results with Gemini Option */}
        {isOpen && !isLoading && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md border border-primary/20 rounded-xl shadow-xl z-50 max-h-80 overflow-y-auto"
          >
            {results.map((result, index) => (
              <motion.div
                key={`${result.type}-${result.id}`}
                whileHover={{ backgroundColor: 'rgba(251, 146, 60, 0.1)' }}
                className={`px-4 py-3 cursor-pointer border-b border-gray-100 ${
                  index === selectedIndex ? 'bg-primary/10' : ''
                }`}
                onClick={() => handleResultClick(result)}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    {result.type === 'state' ? (
                      <MapPin className="h-4 w-4 text-primary" />
                    ) : (
                      <div className="w-4 h-4 rounded-full bg-accent flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-gray-900 truncate">
                        {result.name}
                      </h4>
                      <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                        {result.type === 'state' ? 'State' : result.category || 'POI'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {result.state}
                    </p>
                    {result.description && (
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                        {result.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Gemini AI Option at bottom of results */}
            {showGeminiOption && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="px-4 py-3 border-t border-gray-200 bg-gray-50/50"
              >
                <button
                  onClick={handleGeminiSearch}
                  disabled={isGeminiProcessing}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm text-primary hover:bg-primary/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGeminiProcessing ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <TextShimmer 
                        className="text-sm font-medium"
                        duration={1.2}
                        spread={2}
                      >
                        AI analyzing...
                      </TextShimmer>
                    </>
                  ) : (
                    <>
                      <Globe className="h-4 w-4" />
                      <Plus className="h-3 w-3" />
                      AI Search for "{query}"
                    </>
                  )}
                </button>
              </motion.div>
            )}
            
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default SearchBar;
