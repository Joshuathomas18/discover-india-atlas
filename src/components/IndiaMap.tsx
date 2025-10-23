import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from './ui/input';
import { Button } from './ui/button';

interface IndiaMapProps {
  onStateClick: (state: string) => void;
}

const IndiaMap = ({ onStateClick }: IndiaMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const initializeMap = (token: string) => {
    if (!mapContainer.current || map.current) return;

    mapboxgl.accessToken = token;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [78.9629, 22.5937],
      zoom: 4,
      pitch: 0,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add markers for key states
    const keyStates = [
      { name: 'Jaipur, Rajasthan', coords: [75.7873, 26.9124] },
      { name: 'Delhi', coords: [77.1025, 28.7041] },
      { name: 'Mumbai, Maharashtra', coords: [72.8777, 19.0760] },
      { name: 'Srinagar, Kashmir', coords: [74.7973, 34.0837] },
      { name: 'Gangtok, Sikkim', coords: [88.6139, 27.3389] },
      { name: 'Kochi, Kerala', coords: [76.2673, 9.9312] },
      { name: 'Panaji, Goa', coords: [73.8278, 15.4909] },
    ];

    keyStates.forEach((state) => {
      const el = document.createElement('div');
      el.className = 'w-4 h-4 bg-primary rounded-full cursor-pointer pulse-slow shadow-lg';
      el.title = state.name;

      const marker = new mapboxgl.Marker(el)
        .setLngLat(state.coords as [number, number])
        .addTo(map.current!);

      el.addEventListener('click', () => {
        // Zoom to Jaipur for demo
        if (state.name.includes('Jaipur')) {
          map.current?.flyTo({
            center: state.coords as [number, number],
            zoom: 10,
            duration: 2000,
            essential: true,
          });
          setTimeout(() => {
            onStateClick('Jaipur');
          }, 2000);
        }
      });
    });

    setShowTokenInput(false);
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken) {
      initializeMap(mapboxToken);
    }
  };

  return (
    <div className="relative w-full h-full">
      {showTokenInput && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/95 backdrop-blur-sm">
          <div className="max-w-md w-full p-6 bg-card rounded-2xl shadow-2xl border border-border">
            <h3 className="text-2xl font-bold mb-4 text-center">Enter Mapbox Token</h3>
            <p className="text-sm text-muted-foreground mb-4 text-center">
              Get your free token at{' '}
              <a
                href="https://mapbox.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                mapbox.com
              </a>
            </p>
            <form onSubmit={handleTokenSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="pk.eyJ..."
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                className="font-mono text-sm"
              />
              <Button type="submit" className="w-full" disabled={!mapboxToken}>
                Load Map
              </Button>
            </form>
          </div>
        </div>
      )}
      <div ref={mapContainer} className="absolute inset-0 rounded-2xl shadow-2xl overflow-hidden" />
      {!showTokenInput && (
        <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg border border-border">
          <p className="text-sm font-medium text-muted-foreground">
            Click on pulsing markers to explore
          </p>
        </div>
      )}
    </div>
  );
};

export default IndiaMap;
