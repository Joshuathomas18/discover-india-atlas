import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import IndiaMap, { IndiaMapRef } from "@/components/IndiaMap";
import InfoCard from "@/components/InfoCard";
import StateModal from "@/components/StateModal";
import MapLegend from "@/components/MapLegend";
import POIModal from "@/components/POIModal";
import SearchBar from "@/components/SearchBar";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";
import StreetViewModal from "@/components/StreetViewModal";
import { getStateConfig } from "@/config/statesConfig";
import { GeographicalPOI } from "@/types/database";
import { poiNavigationService } from "@/services/poiNavigationService";
import { mapDataService } from "@/services/mapDataService";
import { monumentService, Monument } from "@/services/monumentService";
import { Place, CulturalItem, PlaceTabs } from "@/types/database";
import { GeminiPlaceData } from "@/services/geminiService";

const Index = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedPOI, setSelectedPOI] = useState<GeographicalPOI | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [showPOIModal, setShowPOIModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [mapPhase, setMapPhase] = useState<'initial' | 'stateZoomed' | 'poiSelected'>('initial');
  const [placeCategories, setPlaceCategories] = useState<Record<string, CulturalItem[]>>({});
  const [isSearchNavigation, setIsSearchNavigation] = useState(false);
  const isSearchNavigationRef = useRef(false);
  const mapRef = useRef<IndiaMapRef>(null);
  
  // Street View state
  const [selectedMonument, setSelectedMonument] = useState<Monument | null>(null);
  const [showStreetView, setShowStreetView] = useState(false);

  // Set up POI navigation service
  useEffect(() => {
    // Set the map reference
    poiNavigationService.setMapRef(mapRef.current?.getMap());
    
    // Set the POI selection callback
    poiNavigationService.setOnPOISelect((poi) => {
      console.log('POI navigation service triggered for:', poi.name);
      
      // Find the state for this POI
      const stateId = poi.state_id;
      if (stateId) {
        // Set the state and zoom to it
        setSelectedState(stateId);
        setMapPhase('stateZoomed');
        
        // Clear previous selections
        setSelectedPOI(null);
        setSelectedPlace(null);
        setSelectedCategory(null);
        setShowPOIModal(false);
        setShowModal(false);
        setPlaceCategories({});
        
        // After a short delay, select the POI
        setTimeout(() => {
          handlePOIClick(poi as GeographicalPOI);
        }, 1500); // Wait for map to zoom and POIs to load
      }
    });
  }, []);

  const handleStateClick = (stateId: string) => {
    // Allow state clicks when in initial phase OR during search navigation
    if (mapPhase !== 'initial' && !isSearchNavigationRef.current) return;
    
    setSelectedState(stateId);
    setMapPhase('stateZoomed');
    
    // Clear previous selections
    setSelectedPOI(null);
    setSelectedPlace(null);
    setSelectedCategory(null);
    setShowPOIModal(false);
    setShowModal(false);
    setPlaceCategories({});
  };

  const handlePOIClick = async (poi: GeographicalPOI) => {
    console.log('handlePOIClick called with:', poi.name, 'ID:', poi.id);
    console.log('Current mapPhase:', mapPhase);
    console.log('isSearchNavigation:', isSearchNavigation);
    console.log('isSearchNavigationRef.current:', isSearchNavigationRef.current);
    console.log('Phase check result:', mapPhase !== 'stateZoomed' && !isSearchNavigationRef.current);
    
    // Allow POI clicks when in stateZoomed phase OR during search navigation
    if (mapPhase !== 'stateZoomed' && !isSearchNavigationRef.current) {
      console.log('POI click blocked by phase guard');
      return;
    }
    
    console.log('POI click proceeding...');
    
    setSelectedPOI(poi);
    setMapPhase('poiSelected');
    
    console.log('POI clicked:', poi.name, 'mapPhase set to:', 'poiSelected');
    console.log('POI ID being searched for:', poi.id);
    
    // Create a basic place object immediately for display
    const basicPlace: Place = {
      id: poi.id,
      state_id: poi.state_id,
      name: poi.name,
      type: poi.category === 'place' ? 'city' : poi.category as any,
      description: poi.description,
      coordinates: poi.coordinates,
      banner_image: {
        storage_path: '',
        download_url: '',
        caption: poi.name,
        credit: '',
        alt_text: poi.name,
        uploaded_at: new Date()
      },
      best_time_to_visit: 'Year round',
      how_to_reach: {
        by_air: 'Nearest airport',
        by_train: 'Nearest railway station',
        by_road: 'Road connectivity available',
        by_bus: 'Bus services available'
      },
      created_at: new Date(),
      updated_at: new Date()
    };
    
    setSelectedPlace(basicPlace);
    
    console.log('Basic place set:', basicPlace.name);
    
    // For Karnataka POIs, we need to get the actual Karnataka POI data
    if (poi.state_id === 'karnataka') {
      try {
        console.log('Searching for Karnataka POI with ID:', poi.id);
        const karnatakaPOI = await mapDataService.getKarnatakaPOIById(poi.id);
        console.log('Found Karnataka POI:', karnatakaPOI);
        if (karnatakaPOI) {
          // Create a place object from the Karnataka POI for the circular tabs
          const place: Place = {
            id: karnatakaPOI.id,
            state_id: 'karnataka',
            name: karnatakaPOI.name,
            type: karnatakaPOI.category === 'place' ? 'city' : karnatakaPOI.category as any,
            description: karnatakaPOI.description,
            coordinates: karnatakaPOI.coordinates,
            banner_image: karnatakaPOI.banner_image,
            best_time_to_visit: 'Year round',
            how_to_reach: {
              by_air: 'Nearest airport',
              by_train: 'Nearest railway station',
              by_road: 'Road connectivity available',
              by_bus: 'Bus services available'
            },
            created_at: karnatakaPOI.created_at,
            updated_at: new Date()
          };

          setSelectedPlace(place);
          
          // For Karnataka POIs, create categories based on the POI type
          const categories: Record<string, any[]> = {};
          
          if (karnatakaPOI.category === 'place') {
            // For places, use the traditional 5 cultural categories
            const placeTabs = karnatakaPOI.tabs as any;
            categories.monuments = placeTabs.monuments || [];
            categories.food = placeTabs.food || [];
            categories.customs = placeTabs.customs || [];
            categories.festivals = placeTabs.festivals || [];
            categories.history = placeTabs.history || [];
          } else {
            // For other POI types, create category-specific tabs
            const tabs = karnatakaPOI.tabs as any;
            Object.keys(tabs).forEach(tabKey => {
              categories[tabKey] = [{
                id: `${karnatakaPOI.id}_${tabKey}`,
                place_id: karnatakaPOI.id,
                state_id: 'karnataka',
                category: tabKey,
                name: `${karnatakaPOI.name} - ${tabKey}`,
                description: typeof tabs[tabKey] === 'string' ? tabs[tabKey] : JSON.stringify(tabs[tabKey]),
                details: typeof tabs[tabKey] === 'string' ? tabs[tabKey] : JSON.stringify(tabs[tabKey]),
                coordinates: karnatakaPOI.coordinates,
                images: [karnatakaPOI.banner_image],
                actions: {
                  primary: {
                    label: 'Learn More',
                    type: 'modal',
                    content: typeof tabs[tabKey] === 'string' ? tabs[tabKey] : JSON.stringify(tabs[tabKey])
                  }
                },
                opening_hours: 'All day',
                entry_fee: 'Free',
                best_time: 'Any time',
                duration: '1 hour',
                accessibility_info: 'Public access',
                created_at: karnatakaPOI.created_at,
                updated_at: new Date()
              }];
            });
          }
          
          setPlaceCategories(categories);
          return;
        }
      } catch (error) {
        console.error('Error loading Karnataka POI:', error);
      }
    }
    
    // For all other states, get the actual POI data from local state data
    try {
      const statePOIs = await mapDataService.getAllPOIsForState(poi.state_id);
      const actualPOI = statePOIs.find(p => p.id === poi.id);
      
      if (actualPOI) {
        // Create a place object from the POI for the circular tabs
        const place: Place = {
          id: actualPOI.id,
          state_id: actualPOI.state_id,
          name: actualPOI.name,
          type: actualPOI.category === 'place' ? 'city' : actualPOI.category as any,
          description: actualPOI.description,
          coordinates: actualPOI.coordinates,
          banner_image: {
            storage_path: '',
            download_url: '',
            caption: actualPOI.name,
            credit: '',
            alt_text: actualPOI.name,
            uploaded_at: new Date()
          },
          best_time_to_visit: 'Year round',
          how_to_reach: {
            by_air: 'Nearest airport',
            by_train: 'Nearest railway station',
            by_road: 'Road connectivity available',
            by_bus: 'Bus services available'
          },
          created_at: actualPOI.created_at,
          updated_at: new Date()
        };

        setSelectedPlace(place);
        
        // Get the original POI data with tabs from the state data
        const stateDataMap: Record<string, any[]> = {
          'rajasthan': await import('../data/rajasthan').then(m => m.allRajasthanData),
          'kerala': await import('../data/kerala').then(m => m.allKeralaData),
          'goa': await import('../data/goa').then(m => m.allGoaData),
          'tamil-nadu': await import('../data/tamil-nadu').then(m => m.allTamilNaduData),
          'maharashtra': await import('../data/maharashtra').then(m => m.allMaharashtraData),
          'uttarakhand': await import('../data/uttarakhand').then(m => m.allUttarakhandData),
          'himachal-pradesh': await import('../data/himachal-pradesh').then(m => m.allHimachalPradeshData),
          'gujarat': await import('../data/gujarat').then(m => m.allGujaratData),
          'west-bengal': await import('../data/west-bengal').then(m => m.allWestBengalData),
          'andhra-pradesh': await import('../data/andhra-pradesh').then(m => m.allAndhraPradeshData),
          'telangana': await import('../data/telangana').then(m => m.allTelanganaData),
          'odisha': await import('../data/odisha').then(m => m.allOdishaData),
          'assam': await import('../data/assam').then(m => m.allAssamData),
          'punjab': await import('../data/punjab').then(m => m.allPunjabData),
          'haryana': await import('../data/haryana').then(m => m.allHaryanaData),
          'madhya-pradesh': await import('../data/madhya-pradesh').then(m => m.allMadhyaPradeshData),
          'chhattisgarh': await import('../data/chhattisgarh').then(m => m.allChhattisgarhData),
          'jharkhand': await import('../data/jharkhand').then(m => m.allJharkhandData),
          'bihar': await import('../data/bihar').then(m => m.allBiharData),
          'sikkim': await import('../data/sikkim').then(m => m.allSikkimData),
          'meghalaya': await import('../data/meghalaya').then(m => m.allMeghalayaData),
          'manipur': await import('../data/manipur').then(m => m.allManipurData),
          'delhi': await import('../data/delhi').then(m => m.allDelhiData),
          'chandigarh': await import('../data/chandigarh').then(m => m.allChandigarhData),
          'puducherry': await import('../data/puducherry').then(m => m.allPuducherryData),
          'lakshadweep': await import('../data/lakshadweep').then(m => m.allLakshadweepData),
          'andaman-nicobar': await import('../data/andaman-nicobar').then(m => m.allAndamanNicobarData),
          'dadra-nagar-haveli-daman-diu': await import('../data/dadra-nagar-haveli-daman-diu').then(m => m.allDadraNagarHaveliDamanDiuData),
          'jammu-kashmir': await import('../data/jammu-kashmir').then(m => m.allJammuKashmirData),
          'ladakh': await import('../data/ladakh').then(m => m.allLadakhData),
          'uttar-pradesh': await import('../data/uttar-pradesh').then(m => m.allUttarPradeshData)
        };

        const stateData = stateDataMap[poi.state_id];
        if (stateData) {
          const originalPOI = stateData.find(p => p.id === poi.id);
          if (originalPOI && originalPOI.tabs) {
            const tabs = originalPOI.tabs as any;
            const categories: Record<string, any[]> = {};
            
            if (originalPOI.category === 'place') {
              // For places, use the traditional 5 cultural categories
              categories.monuments = tabs.monuments || [];
              categories.food = tabs.food || [];
              categories.customs = tabs.customs || [];
              categories.festivals = tabs.festivals || [];
              categories.history = tabs.history || [];
            } else {
              // For other POI types, create category-specific tabs
              Object.keys(tabs).forEach(tabKey => {
                categories[tabKey] = [{
                  id: `${originalPOI.id}_${tabKey}`,
                  place_id: originalPOI.id,
                  state_id: originalPOI.state_id,
                  category: tabKey,
                  name: `${originalPOI.name} - ${tabKey}`,
                  description: typeof tabs[tabKey] === 'string' ? tabs[tabKey] : JSON.stringify(tabs[tabKey]),
                  details: typeof tabs[tabKey] === 'string' ? tabs[tabKey] : JSON.stringify(tabs[tabKey]),
                  coordinates: originalPOI.coordinates,
                  images: [originalPOI.banner_image],
                  actions: {
                    primary: {
                      label: 'Learn More',
                      type: 'modal',
                      content: typeof tabs[tabKey] === 'string' ? tabs[tabKey] : JSON.stringify(tabs[tabKey])
                    }
                  },
                  opening_hours: 'All day',
                  entry_fee: 'Free',
                  best_time: 'Any time',
                  duration: '1 hour',
                  accessibility_info: 'Public access',
                  created_at: originalPOI.created_at,
                  updated_at: new Date()
                }];
              });
            }
            
            setPlaceCategories(categories);
            console.log('Categories set for', poi.name, ':', Object.keys(categories));
            return;
          }
        }
      }
    } catch (error) {
      console.error('Error loading POI data:', error);
    }
    
    // Fallback if no data found
    setPlaceCategories({});
  };

  const handleBackToMap = () => {
    setSelectedState(null);
    setSelectedPOI(null);
    setSelectedPlace(null);
    setSelectedCategory(null);
    setShowPOIModal(false);
    setShowModal(false);
    setMapPhase('initial');
    setPlaceCategories({});
  };

  const handleBackToState = () => {
    setSelectedPOI(null);
    setSelectedPlace(null);
    setSelectedCategory(null);
    setShowPOIModal(false);
    setShowModal(false);
    setMapPhase('stateZoomed');
    setPlaceCategories({});
  };

  const handleStreetViewOpen = (monumentId: string) => {
    const monument = monumentService.getMonumentById(monumentId);
    if (monument) {
      setSelectedMonument(monument);
      setShowStreetView(true);
    }
  };

  const handleStreetViewClose = () => {
    setShowStreetView(false);
    setSelectedMonument(null);
  };

  const handleClosePOIModal = () => {
    setShowPOIModal(false);
    setSelectedPOI(null);
    setMapPhase('placesShown');
  };

  const handleCategoryClick = (category: any) => {
    setSelectedCategory(category);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCategory(null);
  };

  // Handle search result selection
  const handleSearchResult = async (result: any) => {
    if (result.type === 'state') {
      // Direct state navigation
      setSelectedState(result.id);
      setMapPhase('stateZoomed');
      setSelectedPOI(null);
      setSelectedPlace(null);
      setPlaceCategories({});
    } else if (result.type === 'poi' || result.type === 'place') {
      // Multi-step POI navigation
      setIsSearchNavigation(true);
      isSearchNavigationRef.current = true;
      
      // Step 1: Extract state ID from result
      const stateId = result.meilisearchDoc?.state_id || result.state.toLowerCase().replace(/\s+/g, '-');
      
      // Step 2: Navigate to state
      setSelectedState(stateId);
      setMapPhase('stateZoomed');
      
      // Step 3: Wait for map to load state POIs, then trigger POI click
      setTimeout(async () => {
        console.log('Search navigation - Starting POI click process...');
        console.log('Search result:', result);
        
        // Ensure search navigation flag is still set
        if (!isSearchNavigationRef.current) {
          console.log('Search navigation flag was reset, setting it again...');
          isSearchNavigationRef.current = true;
        }
        
        // Create POI object from search result
        // For places, we need to find the correct POI ID in the state data
        let poiId = result.id;
        
        // If this is a cultural item (monument, food, etc.), extract the base POI ID
        if (poiId.includes('_') && (poiId.startsWith('monument_') || poiId.startsWith('food_') || poiId.startsWith('festival_') || poiId.startsWith('custom_') || poiId.startsWith('history_') || poiId.startsWith('wildlife_') || poiId.startsWith('river_') || poiId.startsWith('mountain_') || poiId.startsWith('forest_') || poiId.startsWith('waterfall_') || poiId.startsWith('dam_') || poiId.startsWith('place_'))) {
          // Extract the base POI ID from cultural item ID
          poiId = poiId.replace(/^(monument|food|festival|custom|history|wildlife|river|mountain|forest|waterfall|dam|place)_/, '');
        }
        
        // For places, ensure we have the correct format (e.g., 'bengaluru_karnataka')
        if (result.type === 'place' && !poiId.includes('_')) {
          poiId = `${poiId.toLowerCase().replace(/\s+/g, '_')}_${stateId}`;
        }
        
        const poi: GeographicalPOI = {
          id: poiId,
          state_id: stateId,
          name: result.name,
          category: result.category || 'place',
          description: result.description || '',
          coordinates: result.coordinates,
          created_at: new Date()
        };
        
        console.log('Search navigation - POI object created:', poi);
        console.log('Current mapPhase:', mapPhase);
        console.log('isSearchNavigation:', isSearchNavigation);
        console.log('isSearchNavigationRef.current:', isSearchNavigationRef.current);
        console.log('About to call handlePOIClick with POI ID:', poi.id);
        console.log('Selected state:', selectedState);
        console.log('Map phase check - mapPhase === stateZoomed:', mapPhase === 'stateZoomed');
        console.log('Map phase check - isSearchNavigationRef.current:', isSearchNavigationRef.current);
        console.log('Will POI click be allowed?', mapPhase === 'stateZoomed' || isSearchNavigationRef.current);
        
        // Trigger POI click (will bypass phase check due to isSearchNavigation flag)
        try {
          await handlePOIClick(poi);
          console.log('Search navigation - POI click completed successfully');
        } catch (error) {
          console.error('Search navigation - POI click failed:', error);
        }
        
        setIsSearchNavigation(false);
        isSearchNavigationRef.current = false;
      }, 2000); // Increased timeout to 2 seconds to ensure state loads
    }
  };

  // Handle Gemini result
  const handleGeminiResult = async (result: GeminiPlaceData) => {
    console.log('🤖 Gemini result received:', result);
    
    // For cities/places, we need to create a Place object with cultural tabs
    if (result.category === 'city' || result.category === 'place') {
      // Create a Place object
      const place: Place = {
        id: `${result.name.toLowerCase().replace(/\s+/g, '_')}_${result.state.toLowerCase().replace(/\s+/g, '-')}`,
        state_id: result.state.toLowerCase().replace(/\s+/g, '-'),
        name: result.name,
        type: 'city',
        description: result.description,
        coordinates: result.coordinates,
        banner_image: {
          storage_path: `gemini/${result.name.toLowerCase().replace(/\s+/g, '_')}/banner.jpg`,
          download_url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800',
          caption: `${result.name} - AI Generated`,
          credit: 'Gemini AI',
          alt_text: `${result.name} city view`,
          uploaded_at: new Date()
        },
        best_time_to_visit: 'Year round',
        how_to_reach: {
          by_air: 'Nearest airport',
          by_train: 'Nearest railway station', 
          by_road: 'Road connectivity available',
          by_bus: 'Bus services available'
        },
        created_at: new Date(),
        updated_at: new Date()
      };
      
      // Set up cultural categories from Gemini data
      const categories: Record<string, CulturalItem[]> = {
        monuments: result.monuments || [],
        food: result.food || [],
        customs: result.customs || [],
        festivals: result.festivals || [],
        history: result.history || []
      };
      
      // Set search navigation flag
      setIsSearchNavigation(true);
      isSearchNavigationRef.current = true;
      
      // Navigate to the state
      if (result.state) {
        const stateId = result.state.toLowerCase().replace(/\s+/g, '-');
        setSelectedState(stateId);
        setMapPhase('stateZoomed');
        
        // Wait for map to load, then show the place with cultural tabs
        setTimeout(async () => {
          try {
            // Set the place and cultural categories
            setSelectedPlace(place);
            setPlaceCategories(categories);
            setMapPhase('poiSelected');
            console.log('✅ Gemini Place with cultural tabs displayed successfully');
          } catch (error) {
            console.error('❌ Failed to display Gemini Place:', error);
          }
          
          setIsSearchNavigation(false);
          isSearchNavigationRef.current = false;
        }, 2000);
      } else {
        // If no state info, just show the place directly
        setSelectedPlace(place);
        setPlaceCategories(categories);
        setMapPhase('poiSelected');
        setIsSearchNavigation(false);
        isSearchNavigationRef.current = false;
      }
    } else {
      // For non-city POIs, create a GeographicalPOI
      const poi: GeographicalPOI = {
        id: `${result.name.toLowerCase().replace(/\s+/g, '_')}_${result.state.toLowerCase().replace(/\s+/g, '-')}`,
        state_id: result.state.toLowerCase().replace(/\s+/g, '-'),
        name: result.name,
        category: result.category as any,
        description: result.description,
        coordinates: result.coordinates,
        icon_color: '#FF6B35',
        created_at: new Date()
      };
      
      // Set search navigation flag
      setIsSearchNavigation(true);
      isSearchNavigationRef.current = true;
      
      // Navigate to the state (if we can determine it)
      if (result.state) {
        const stateId = result.state.toLowerCase().replace(/\s+/g, '-');
        setSelectedState(stateId);
        setMapPhase('stateZoomed');
        
        // Wait for map to load, then show POI
        setTimeout(async () => {
          try {
            await handlePOIClick(poi);
            console.log('✅ Gemini POI displayed successfully');
          } catch (error) {
            console.error('❌ Failed to display Gemini POI:', error);
          }
          
          setIsSearchNavigation(false);
          isSearchNavigationRef.current = false;
        }, 2000);
      } else {
        // If no state info, just show the POI modal directly
        setSelectedPOI(poi);
        setMapPhase('poiSelected');
        setIsSearchNavigation(false);
        isSearchNavigationRef.current = false;
      }
    }
  };

  return (
    <div className="min-h-screen bg-background parchment-texture">
      <Navbar />
      
      {/* Hero Section */}
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-sm">
              Anubhooti
            </h1>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-1 w-16 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <span className="text-lg md:text-xl text-primary font-semibold">🕉️ अतुल्य भारत 🕉️</span>
              <div className="h-1 w-16 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
                  Click on any state to discover its geographical treasures
            </p>
          </motion.div>

          {/* Search Bar - positioned above the map */}
          <div className="mb-6 flex justify-start">
            <SearchBar 
              onLocationSelect={handleSearchResult}
              onGeminiResult={handleGeminiResult}
              mapPhase={mapPhase}
            />
          </div>

          {/* Map Container */}
          <div className="relative h-[700px] mb-20">
                <IndiaMap 
                  ref={mapRef}
                  onStateClick={handleStateClick}
                  onPOIClick={handlePOIClick}
                  onBackToMap={mapPhase === 'stateZoomed' ? handleBackToMap : handleBackToState}
                  mapPhase={mapPhase}
                  selectedState={selectedState}
                />
                
                {/* Map Legend */}
                <MapLegend isVisible={mapPhase === 'stateZoomed' || mapPhase === 'poiSelected'} />
                
                {/* Info Cards - Appear after POI selection */}
            <AnimatePresence>
                  {mapPhase === 'poiSelected' && selectedPlace && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/20 backdrop-blur-sm"
                >
                  <div className="relative pointer-events-auto">
                        {/* Center Place Name with Cultural Design */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", duration: 0.8 }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10"
                    >
                      <div className="bg-gradient-to-br from-primary to-accent/80 backdrop-blur-md px-10 py-6 rounded-3xl shadow-2xl border-4 border-accent relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
                        <div className="relative">
                              <h2 className="text-4xl font-bold text-white drop-shadow-lg">{selectedPlace.name}</h2>
                          <div className="flex items-center justify-center gap-2 mt-2">
                            <div className="h-0.5 w-8 bg-white/60"></div>
                                <p className="text-sm text-white/90 font-medium">{selectedPlace.description}</p>
                            <div className="h-0.5 w-8 bg-white/60"></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Info Cards in Circle */}
                        {Object.entries(placeCategories).map(([categoryKey, items], index) => {
                          if (items.length === 0) return null;
                          
                          const category = {
                            key: categoryKey,
                            name: items[0]?.category || categoryKey,
                            description: items[0]?.description || '',
                            items: items
                          };
                          
                          return (
                      <InfoCard
                              key={categoryKey}
                        category={category}
                        index={index}
                              onClick={() => handleCategoryClick({ key: categoryKey, items })}
                      />
                          );
                        })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="about"
            className="max-w-4xl mx-auto text-center py-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Discover India's Cultural Tapestry
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Embark on a digital journey through India's diverse states, each with its own unique
              traditions, cuisine, monuments, and stories. Click on any state to uncover the rich
              heritage that makes India truly incredible.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
      <Chatbot />
          <POIModal
            isOpen={showPOIModal}
            onClose={handleClosePOIModal}
            poi={selectedPOI}
          />
          
          {/* Street View Modal */}
          <StreetViewModal
            monument={selectedMonument}
            isOpen={showStreetView}
            onClose={handleStreetViewClose}
          />
          
      <StateModal
        isOpen={showModal}
        onClose={handleCloseModal}
        category={selectedCategory}
            place={selectedPlace}
        onStreetViewOpen={handleStreetViewOpen}
      />
    </div>
  );
};

export default Index;
