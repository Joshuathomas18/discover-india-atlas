import { useEffect, useRef } from 'react';

interface IndiaMapProps {
  onStateClick: (state: string) => void;
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

const IndiaMap = ({ onStateClick }: IndiaMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);

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

    const keyStates = [
      { name: 'Jaipur, Rajasthan', coords: { lat: 26.9124, lng: 75.7873 }, zoom: 13 },
      { name: 'Delhi', coords: { lat: 28.7041, lng: 77.1025 }, zoom: 11 },
      { name: 'Mumbai, Maharashtra', coords: { lat: 19.0760, lng: 72.8777 }, zoom: 11 },
      { name: 'Srinagar, Kashmir', coords: { lat: 34.0837, lng: 74.7973 }, zoom: 11 },
      { name: 'Gangtok, Sikkim', coords: { lat: 27.3389, lng: 88.6139 }, zoom: 11 },
      { name: 'Kochi, Kerala', coords: { lat: 9.9312, lng: 76.2673 }, zoom: 11 },
      { name: 'Panaji, Goa', coords: { lat: 15.4909, lng: 73.8278 }, zoom: 11 },
    ];

    keyStates.forEach((state) => {
      const marker = new google.maps.Marker({
        position: state.coords,
        map: mapRef.current!,
        title: state.name,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: '#d97706',
          fillOpacity: 1,
          strokeColor: '#ffffff',
          strokeWeight: 2
        },
        animation: google.maps.Animation.DROP
      });

      marker.addListener('click', () => {
        if (!mapRef.current) return;

        mapRef.current.panTo(state.coords);
        mapRef.current.setZoom(state.zoom);

        setTimeout(() => {
          if (state.name.includes('Jaipur')) {
            onStateClick('Jaipur');
          }
        }, 1200);
      });

      markersRef.current.push(marker);
    });

    return () => {
      markersRef.current.forEach(marker => marker.setMap(null));
      markersRef.current = [];
    };
  }, [onStateClick]);

  return (
    <div className="relative w-full h-full">
      <div ref={mapContainer} className="absolute inset-0 rounded-2xl shadow-2xl overflow-hidden z-0" />
      <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg border border-border z-10">
        <p className="text-sm font-medium text-muted-foreground">
          Click on markers to explore
        </p>
      </div>
    </div>
  );
};

export default IndiaMap;
