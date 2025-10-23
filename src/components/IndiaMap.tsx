import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface IndiaMapProps {
  onStateClick: (state: string) => void;
}

const IndiaMap = ({ onStateClick }: IndiaMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const markers = useRef<L.Marker[]>([]);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Initialize Leaflet map
    map.current = L.map(mapContainer.current, {
      center: [22.5937, 78.9629],
      zoom: 5,
      zoomControl: false,
    });

    // Add OpenStreetMap tiles (free, no API key needed)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map.current);

    // Add zoom control to top right
    L.control.zoom({ position: 'topright' }).addTo(map.current);

    // Define key states with coordinates
    const keyStates = [
      { name: 'Jaipur, Rajasthan', coords: [26.9124, 75.7873] as [number, number] },
      { name: 'Delhi', coords: [28.7041, 77.1025] as [number, number] },
      { name: 'Mumbai, Maharashtra', coords: [19.0760, 72.8777] as [number, number] },
      { name: 'Srinagar, Kashmir', coords: [34.0837, 74.7973] as [number, number] },
      { name: 'Gangtok, Sikkim', coords: [27.3389, 88.6139] as [number, number] },
      { name: 'Kochi, Kerala', coords: [9.9312, 76.2673] as [number, number] },
      { name: 'Panaji, Goa', coords: [15.4909, 73.8278] as [number, number] },
    ];

    // Create custom pulsing marker icon
    const pulsingIcon = L.divIcon({
      className: 'custom-marker',
      html: '<div class="w-4 h-4 bg-primary rounded-full pulse-slow shadow-lg"></div>',
      iconSize: [16, 16],
      iconAnchor: [8, 8],
    });

    // Add markers for each state
    keyStates.forEach((state) => {
      const marker = L.marker(state.coords, { 
        icon: pulsingIcon,
        title: state.name 
      }).addTo(map.current!);

      // Add click handler
      marker.on('click', () => {
        if (!map.current || !mapContainer.current) return;
        
        // Get the map container dimensions to calculate center
        const mapHeight = mapContainer.current.offsetHeight;
        const mapWidth = mapContainer.current.offsetWidth;
        
        // Zoom to the location and center it perfectly
        if (state.name.includes('Jaipur')) {
          // Center the marker in the viewport
          map.current.flyTo(state.coords, 13, {
            duration: 1.8,
            easeLinearity: 0.25,
          });
          
          // Trigger state click after zoom animation completes
          setTimeout(() => {
            onStateClick('Jaipur');
          }, 1900);
        } else {
          map.current.flyTo(state.coords, 11, {
            duration: 1.5,
            easeLinearity: 0.25,
          });
        }
      });

      markers.current.push(marker);
    });

    // Cleanup
    return () => {
      markers.current.forEach(marker => marker.remove());
      markers.current = [];
      map.current?.remove();
      map.current = null;
    };
  }, [onStateClick]);

  return (
    <div className="relative w-full h-full">
      <div ref={mapContainer} className="absolute inset-0 rounded-2xl shadow-2xl overflow-hidden z-0" />
      <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg border border-border z-10">
        <p className="text-sm font-medium text-muted-foreground">
          Click on pulsing markers to explore
        </p>
      </div>
    </div>
  );
};

export default IndiaMap;
