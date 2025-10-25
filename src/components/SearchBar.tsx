import { useState, useRef, useEffect } from 'react';
import { Search, X, MapPin, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { mapDataService } from '@/services/mapDataService';
import { GeographicalPOI, Place } from '@/types/database';

interface SearchResult {
  id: string;
  name: string;
  type: 'state' | 'poi' | 'place';
  state: string;
  coordinates: { lat: number; lng: number };
  description?: string;
  category?: string;
}

interface SearchBarProps {
  onLocationSelect: (result: SearchResult) => void;
  mapPhase: 'initial' | 'stateZoomed' | 'poiSelected';
}

const SearchBar = ({ onLocationSelect, mapPhase }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
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

  // Search function
  const searchLocations = async (searchQuery: string) => {
    if (searchQuery.length < 2) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    try {
      const searchResults: SearchResult[] = [];

      // Search in states
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

      // Filter states by search query
      const matchingStates = states.filter(state => 
        state.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      matchingStates.forEach(state => {
        searchResults.push({
          id: state.id,
          name: state.name,
          type: 'state',
          state: state.name,
          coordinates: state.center,
          description: `Explore ${state.name}'s geographical treasures`
        });
      });

      // Search in Karnataka POIs if available
      try {
        const karnatakaPOIs = await mapDataService.getKarnatakaPOIs();
        const matchingPOIs = karnatakaPOIs.filter(poi => 
          poi.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          poi.description.toLowerCase().includes(searchQuery.toLowerCase())
        );

        matchingPOIs.forEach(poi => {
          searchResults.push({
            id: poi.id,
            name: poi.name,
            type: 'poi',
            state: 'Karnataka',
            coordinates: poi.coordinates,
            description: poi.description,
            category: poi.category
          });
        });
      } catch (error) {
        console.log('Karnataka POIs not available for search');
      }

      // Search in other states POIs
      const otherStates = ['kerala', 'goa', 'tamil-nadu', 'maharashtra', 'uttarakhand', 'himachal-pradesh', 'rajasthan'];
      
      for (const stateId of otherStates) {
        try {
          const pois = await mapDataService.getGeographicalPOIsByState(stateId);
          const matchingPOIs = pois.filter(poi => 
            poi.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            poi.description.toLowerCase().includes(searchQuery.toLowerCase())
          );

          matchingPOIs.forEach(poi => {
            searchResults.push({
              id: poi.id,
              name: poi.name,
              type: 'poi',
              state: stateId.charAt(0).toUpperCase() + stateId.slice(1).replace('-', ' '),
              coordinates: poi.coordinates,
              description: poi.description,
              category: poi.category
            });
          });
        } catch (error) {
          // State not available, continue
        }
      }

      setResults(searchResults.slice(0, 10)); // Limit to 10 results
    } catch (error) {
      console.error('Search error:', error);
      setResults([]);
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
    inputRef.current?.focus();
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
        {isOpen && results.length > 0 && (
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
                className={`px-4 py-3 cursor-pointer border-b border-gray-100 last:border-b-0 ${
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
          </motion.div>
        )}
      </AnimatePresence>

      {/* No Results */}
      <AnimatePresence>
        {isOpen && !isLoading && results.length === 0 && query.length >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md border border-primary/20 rounded-xl shadow-xl z-50 p-4"
          >
            <div className="text-center text-gray-500">
              <Search className="h-8 w-8 mx-auto mb-2 text-gray-400" />
              <p className="text-sm">No locations found for "{query}"</p>
              <p className="text-xs text-gray-400 mt-1">
                Try searching for states, cities, or geographical features
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
