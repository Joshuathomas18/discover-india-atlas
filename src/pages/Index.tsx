import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import IndiaMap from "@/components/IndiaMap";
import InfoCard from "@/components/InfoCard";
import StateModal from "@/components/StateModal";
import MapLegend from "@/components/MapLegend";
import POIModal from "@/components/POIModal";
import SearchBar from "@/components/SearchBar";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";
import { getStateConfig } from "@/config/statesConfig";
import { GeographicalPOI } from "@/types/database";
import { mapDataService } from "@/services/mapDataService";
import { Place, CulturalItem } from "@/types/database";

const Index = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedPOI, setSelectedPOI] = useState<GeographicalPOI | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [showPOIModal, setShowPOIModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [mapPhase, setMapPhase] = useState<'initial' | 'stateZoomed' | 'poiSelected'>('initial');
  const [placeCategories, setPlaceCategories] = useState<Record<string, CulturalItem[]>>({});

  const handleStateClick = (stateId: string) => {
    // Only allow state clicks when in initial phase
    if (mapPhase !== 'initial') return;
    
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
    // Only allow POI clicks when in stateZoomed phase
    if (mapPhase !== 'stateZoomed') return;
    
    setSelectedPOI(poi);
    setMapPhase('poiSelected');
    
    console.log('POI clicked:', poi.name, 'mapPhase set to:', 'poiSelected');
    
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
        const karnatakaPOI = await mapDataService.getKarnatakaPOIById(poi.id);
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
    
    // Fallback for non-Karnataka POIs
    const place: Place = {
      id: poi.id,
      state_id: poi.state_id,
      name: poi.name,
      type: 'city' as any,
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
    
    setSelectedPlace(place);
    setMapPhase('placeSelected');
    
    // Load cultural items for all categories of this place
    try {
      const categories = await mapDataService.getCulturalItemsForPlace(place.id);
      setPlaceCategories(categories);
    } catch (error) {
      console.error('Error loading place categories:', error);
      setPlaceCategories({});
    }
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
  const handleSearchResult = (result: any) => {
    if (result.type === 'state') {
      // Navigate to state
      handleStateClick(result.id);
    } else if (result.type === 'poi') {
      // Create a GeographicalPOI object from search result
      const poi: GeographicalPOI = {
        id: result.id,
        state_id: result.state.toLowerCase().replace(' ', '-'),
        name: result.name,
        category: result.category || 'place',
        description: result.description || '',
        coordinates: result.coordinates,
        created_at: new Date()
      };
      
      // First navigate to the state, then select the POI
      handleStateClick(result.state.toLowerCase().replace(' ', '-'));
      
      // Wait a bit for state to load, then select POI
      setTimeout(() => {
        handlePOIClick(poi);
      }, 1500);
    }
  };

  // Handle Add Your Website click
  const handleAddWebsite = () => {
    // For now, show an alert. In the future, this could open a form or modal
    alert('Add Your Website feature coming soon! Share your location to be featured on the map.');
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
              Incredible India
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

          {/* Search Bar and Add Website - positioned above the map */}
          <div className="mb-6 flex justify-between items-center">
            <SearchBar 
              onLocationSelect={handleSearchResult}
              mapPhase={mapPhase}
            />
            
            {/* Add Your Website Box - positioned above the map */}
            <div 
              onClick={handleAddWebsite}
              className="bg-gradient-to-br from-primary to-accent/80 backdrop-blur-md px-6 py-4 rounded-xl shadow-xl border border-primary/20 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">+</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Add Your Website</h3>
                  <p className="text-white/80 text-xs">Share your location</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Container */}
          <div className="relative h-[700px] mb-20">
                <IndiaMap 
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
      <StateModal
        isOpen={showModal}
        onClose={handleCloseModal}
        category={selectedCategory}
            place={selectedPlace}
      />
    </div>
  );
};

export default Index;
