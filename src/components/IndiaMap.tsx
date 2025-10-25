import { useEffect, useRef, useState } from 'react';
import { STATES_WITH_DATA, getStateConfig } from '@/config/statesConfig';
import { mapDataService } from '@/services/mapDataService';
import { Place, GeographicalPOI, KarnatakaPOI } from '@/types/database';
import { databaseService } from '@/services/database';
import { getKarnatakaPOIIcon, getKarnatakaPOIColor } from '@/config/karnatakaPOIConfig';

interface IndiaMapProps {
  onStateClick: (stateId: string) => void;
  onPlaceClick?: (place: Place) => void;
  onPOIClick?: (poi: GeographicalPOI) => void;
  onBackToMap?: () => void;
  mapPhase: 'initial' | 'stateZoomed' | 'poiSelected';
  selectedState: string | null;
}

const rusticMapStyle = [
  {
    elementType: "geometry",
    stylers: [{ color: "#efe6d9" }]
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b4b3e" }]
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#f4f0e9" }]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#c6b89e" }]
  },
  {
    featureType: "administrative.country",
    elementType: "geometry.stroke",
    stylers: [{ color: "#a78b71" }]
  },
  {
    featureType: "administrative.province",
    elementType: "geometry.stroke",
    stylers: [{ color: "#d4b896" }]
  },
  {
    featureType: "road",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "poi",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "transit",
    stylers: [{ visibility: "off" }]
  }
];

const IndiaMap = ({ onStateClick, onPlaceClick, onPOIClick, onBackToMap, mapPhase, selectedState }: IndiaMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const statePolygonsRef = useRef<google.maps.Data.Feature[]>([]);
  const placeMarkersRef = useRef<google.maps.Marker[]>([]);
  const poiMarkersRef = useRef<google.maps.Marker[]>([]);
  const [places, setPlaces] = useState<Place[]>([]);
  const [pois, setPOIs] = useState<GeographicalPOI[]>([]);

  // Initialize map and load GeoJSON polygons
  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return;

    const indiaCenter = { lat: 22.5937, lng: 78.9629 };

    mapRef.current = new google.maps.Map(mapContainer.current, {
      center: indiaCenter,
      zoom: 5,
      styles: rusticMapStyle,
      disableDefaultUI: true,
      gestureHandling: "greedy",
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_TOP
      }
    });

    // Load circular clickable areas for states
    createStateClickableAreas();

    return () => {
      clearAllMarkers();
    };
  }, []);

  // Create circular clickable areas for states
  const createStateClickableAreas = () => {
    if (!mapRef.current) return;

    // Clear any existing clickable areas
    statePolygonsRef.current.forEach(area => area.setMap(null));
    statePolygonsRef.current = [];

    STATES_WITH_DATA.forEach(stateConfig => {
      // Create a circular clickable area centered on the state
      const circle = new google.maps.Circle({
        center: stateConfig.center,
        radius: 80000, // 80km radius - covers the center area of each state
        map: mapRef.current!,
        fillColor: 'transparent',
        fillOpacity: 0,
        strokeColor: 'transparent',
        strokeWeight: 0,
        clickable: true,
        zIndex: 1
      });

      // Add click listener
      circle.addListener('click', () => {
        // Only allow state clicks when in initial phase
        if (mapPhase === 'initial' && onStateClick) {
          onStateClick(stateConfig.id);
        }
      });

      // Add hover effects
      circle.addListener('mouseover', () => {
        // Only show hover effects when state clicks are allowed
        if (mapPhase === 'initial') {
          circle.setOptions({
            fillColor: '#d97706',
            fillOpacity: 0.2,
            strokeColor: '#f59e0b',
            strokeWeight: 2
          });
        }
      });

      circle.addListener('mouseout', () => {
        circle.setOptions({
          fillColor: 'transparent',
          fillOpacity: 0,
          strokeColor: 'transparent',
          strokeWeight: 0
        });
      });

      statePolygonsRef.current.push(circle as any);
    });
  };

  // Handle state selection and zoom
  useEffect(() => {
    if (!mapRef.current || !selectedState) return;

    const stateConfig = getStateConfig(selectedState);
    if (!stateConfig) return;

    if (mapPhase === 'stateZoomed') {
      // Zoom to state
      mapRef.current.panTo(stateConfig.center);
      mapRef.current.setZoom(stateConfig.zoom);
      
      // Load POIs for the selected state
      setTimeout(() => {
        loadPOIsForState(selectedState);
      }, 1000);
    } else if (mapPhase === 'initial') {
      // Reset to India view
      mapRef.current.panTo({ lat: 22.5937, lng: 78.9629 });
      mapRef.current.setZoom(5);
      createStateClickableAreas();
    }
  }, [mapPhase, selectedState]);

  // Load POIs for selected state
  const loadPOIsForState = async (stateId: string) => {
    if (!mapRef.current) return;
    
    try {
      console.log(`Loading POIs for state: ${stateId}`);
      
      // For Karnataka, use the new Karnataka POI dataset
      if (stateId === 'karnataka') {
        const karnatakaPOIs = await mapDataService.getKarnatakaPOIs();
        console.log(`Found ${karnatakaPOIs.length} Karnataka POIs`);
        
        // Convert KarnatakaPOI to GeographicalPOI for compatibility
        const convertedPOIs: GeographicalPOI[] = karnatakaPOIs.map(poi => ({
          id: poi.id,
          state_id: 'karnataka',
          name: poi.name,
          category: poi.category === 'place' ? 'city' : poi.category as any,
          description: poi.description,
          coordinates: poi.coordinates,
          icon_color: getKarnatakaPOIColor(poi.category),
          created_at: poi.created_at
        }));
        
        setPOIs(convertedPOIs);
        createPOIMarkers(convertedPOIs);
      } else {
        // For other states, try to fetch from database
        try {
          const poisData = await databaseService.getGeographicalPOIsByState(stateId);
          console.log(`Found ${poisData.length} POIs for ${stateId} from database`);
          if (poisData.length > 0) {
            setPOIs(poisData);
            createPOIMarkers(poisData);
          } else {
            console.log(`No POIs found for ${stateId}, showing message`);
            // Show a message that this state doesn't have POI data yet
            setPOIs([]);
          }
        } catch (dbError) {
          console.log(`Database error for ${stateId}, showing message`);
          setPOIs([]);
        }
      }
    } catch (error) {
      console.error('Error loading POIs:', error);
      setPOIs([]);
    }
  };

  // Create POI markers with custom icons
  const createPOIMarkers = (pois: GeographicalPOI[]) => {
    if (!mapRef.current) return;

    // Clear existing POI markers
    poiMarkersRef.current.forEach(marker => marker.setMap(null));
    poiMarkersRef.current = [];

    // Create POI markers
    pois.forEach((poi, index) => {
      // Create custom icon based on category
      let iconUrl = '';
      
      switch (poi.category) {
        case 'city':
          // Red pin for cities
          iconUrl = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg width="24" height="32" viewBox="0 0 24 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 12 12 20 12 20s12-8 12-20c0-6.627-5.373-12-12-12z" fill="#dc2626"/>
              <circle cx="12" cy="12" r="6" fill="white"/>
            </svg>
          `);
          break;
        case 'river':
          // Wave emoji for rivers
          iconUrl = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <text x="16" y="24" font-size="24" text-anchor="middle">🌊</text>
            </svg>
          `);
          break;
        case 'mountain':
          // Mountain emoji for mountains
          iconUrl = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <text x="16" y="24" font-size="24" text-anchor="middle">⛰️</text>
            </svg>
          `);
          break;
        case 'wildlife':
        case 'wildlife_sanctuary':
          // Custom animal icons for wildlife sanctuaries
          let animalEmoji = '🐘'; // Default elephant
          if (poi.name.toLowerCase().includes('bandipur')) animalEmoji = '🐅'; // Tiger
          if (poi.name.toLowerCase().includes('nagarhole')) animalEmoji = '🐘'; // Elephant
          if (poi.name.toLowerCase().includes('dandeli')) animalEmoji = '🦌'; // Deer
          if (poi.name.toLowerCase().includes('bhadra')) animalEmoji = '🐅'; // Tiger
          if (poi.name.toLowerCase().includes('bannerghatta')) animalEmoji = '🦁'; // Lion
          
          iconUrl = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <text x="16" y="24" font-size="24" text-anchor="middle">${animalEmoji}</text>
            </svg>
          `);
          break;
        case 'forest':
          // Tree emoji for forests
          iconUrl = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <text x="16" y="24" font-size="24" text-anchor="middle">🌲</text>
            </svg>
          `);
          break;
        case 'waterfall':
          // Water drop emoji for waterfalls
          iconUrl = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <text x="16" y="24" font-size="24" text-anchor="middle">💧</text>
            </svg>
          `);
          break;
        case 'dam':
          // Dam icon for dams
          iconUrl = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <text x="16" y="24" font-size="24" text-anchor="middle">🌉</text>
            </svg>
          `);
          break;
        default:
          // Default pin for other categories
          iconUrl = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg width="24" height="32" viewBox="0 0 24 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 12 12 20 12 20s12-8 12-20c0-6.627-5.373-12-12-12z" fill="#dc2626"/>
              <circle cx="12" cy="12" r="6" fill="white"/>
            </svg>
          `);
      }

      const marker = new google.maps.Marker({
        position: poi.coordinates,
        map: mapRef.current!,
        title: `${poi.name} (${poi.category})`,
        icon: {
          url: iconUrl,
          scaledSize: new google.maps.Size(32, 32),
          anchor: new google.maps.Point(16, 16)
        },
        animation: google.maps.Animation.DROP
      });

      marker.addListener('click', () => {
        // Only allow POI clicks when in stateZoomed phase
        if (mapPhase === 'stateZoomed' && onPOIClick) {
          onPOIClick(poi);
        }
      });

      // Add hover effects
      marker.addListener('mouseover', () => {
        // Only show hover effects when POI clicks are allowed
        if (mapPhase === 'stateZoomed') {
          marker.setIcon({
            url: iconUrl,
            scaledSize: new google.maps.Size(40, 40),
            anchor: new google.maps.Point(20, 20)
          });
        }
      });

      marker.addListener('mouseout', () => {
        marker.setIcon({
          url: iconUrl,
          scaledSize: new google.maps.Size(32, 32),
          anchor: new google.maps.Point(16, 16)
        });
      });

      poiMarkersRef.current.push(marker);
    });
  };

  // Clear all markers and clickable areas
  const clearAllMarkers = () => {
    statePolygonsRef.current.forEach(area => area.setMap(null));
    placeMarkersRef.current.forEach(marker => marker.setMap(null));
    poiMarkersRef.current.forEach(marker => marker.setMap(null));
    statePolygonsRef.current = [];
    placeMarkersRef.current = [];
    poiMarkersRef.current = [];
  };

  return (
    <div className="relative w-full h-full">
      <div ref={mapContainer} className="absolute inset-0 rounded-2xl shadow-2xl overflow-hidden z-0" />
      <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg border border-border z-10">
        {mapPhase === 'initial' && (
          <p className="text-sm font-medium text-muted-foreground">
            Hover over states to see clickable areas
          </p>
        )}
        {mapPhase === 'stateZoomed' && (
          <p className="text-sm font-medium text-muted-foreground">
            Loading geographical features...
          </p>
        )}
        {mapPhase === 'placesShown' && pois.length > 0 && (
          <p className="text-sm font-medium text-muted-foreground">
            Click on a POI marker to learn more
          </p>
        )}
        {mapPhase === 'placesShown' && pois.length === 0 && (
          <p className="text-sm font-medium text-muted-foreground">
            No geographical features available for this state yet
          </p>
        )}
        {(mapPhase === 'stateZoomed' || mapPhase === 'poiSelected') && onBackToMap && (
          <button
            onClick={onBackToMap}
            className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-primary/20 hover:bg-white hover:shadow-xl transition-all duration-200 text-sm font-medium text-primary hover:text-accent"
          >
            ← {mapPhase === 'stateZoomed' ? 'Go Back to India Map' : 'Go Back to State View'}
          </button>
        )}
      </div>
    </div>
  );
};

export default IndiaMap;
