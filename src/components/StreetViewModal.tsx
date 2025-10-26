import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Info, Share2, Maximize2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface Monument {
  id: string;
  name: string;
  description: string;
  details: string;
  coordinates: { lat: number; lng: number };
  images?: Array<{
    download_url: string;
    caption: string;
    alt_text: string;
  }>;
  opening_hours?: string;
  entry_fee?: string;
  best_time?: string;
  duration?: string;
  accessibility_info?: string;
}

interface StreetViewModalProps {
  monument: Monument | null;
  isOpen: boolean;
  onClose: () => void;
}

const StreetViewModal: React.FC<StreetViewModalProps> = ({ monument, isOpen, onClose }) => {
  const streetViewRef = useRef<HTMLDivElement>(null);
  const panoramaRef = useRef<google.maps.StreetViewPanorama | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [rateLimitExceeded, setRateLimitExceeded] = useState(false);
  const lastInteractionRef = useRef<number>(0);

  // Debounced interaction handler to prevent rate limiting
  const debouncedInteraction = useCallback((callback: () => void, delay: number = 500) => {
    const now = Date.now();
    if (now - lastInteractionRef.current < delay) {
      return;
    }
    lastInteractionRef.current = now;
    callback();
  }, []);

  useEffect(() => {
    if (!isOpen || !monument || !streetViewRef.current) return;

    setIsLoading(true);
    setError(null);

    // Check if Google Maps is loaded
    if (!window.google || !window.google.maps) {
      setError('Google Maps not loaded');
      setIsLoading(false);
      return;
    }

    // Check if Street View service is available
    if (!window.google.maps.StreetViewService) {
      setError('Street View service not available');
      setIsLoading(false);
      return;
    }

    console.log('Initializing Street View for:', monument.name, 'at', monument.coordinates);

    // Add delay to prevent rate limiting
    const initDelay = setTimeout(() => {
      // First check if Street View is available at this location
      const streetViewService = new google.maps.StreetViewService();
      streetViewService.getPanorama({
        location: monument.coordinates,
        radius: 50
      }, (data, status) => {
        if (status === google.maps.StreetViewStatus.OK && data) {
          // Street View is available, initialize panorama with rate limiting
          const panorama = new google.maps.StreetViewPanorama(streetViewRef.current!, {
            position: monument.coordinates,
            pov: {
              heading: 0,
              pitch: 0
            },
            zoom: 1,
            visible: true,
            addressControl: false,
            linksControl: true,
            panControl: true,
            enableCloseButton: false,
            showRoadLabels: false,
            zoomControl: true,
            zoomControlOptions: {
              position: google.maps.ControlPosition.RIGHT_TOP
            },
            // Add rate limiting options
            motionTracking: false,
            motionTrackingControl: false,
            // Reduce image quality to prevent rate limiting
            imageDateControl: false
          });

          // Add event listeners to handle rate limiting
          panorama.addListener('status_changed', () => {
            const panoramaStatus = panorama.getStatus();
            if (panoramaStatus === google.maps.StreetViewStatus.OK) {
              setIsLoading(false);
              setError(null);
              setRateLimitExceeded(false);
            } else if (panoramaStatus === google.maps.StreetViewStatus.ZERO_RESULTS) {
              setIsLoading(false);
              setError('Street View imagery not available for this location');
              setRateLimitExceeded(false);
            } else {
              setIsLoading(false);
              setRateLimitExceeded(true);
              setError('Rate limit exceeded - Please wait a moment before trying again');
            }
          });

          // Add error handling for network issues
          panorama.addListener('error', () => {
            setIsLoading(false);
            setRateLimitExceeded(true);
            setError('Network error - Please check your connection and try again');
          });

          panoramaRef.current = panorama;
        } else {
          // No Street View available
          setIsLoading(false);
          setError('Street View imagery not available for this location');
        }
      });
    }, 1000); // 1 second delay to prevent rate limiting

    // Cleanup
    return () => {
      clearTimeout(initDelay);
      if (panoramaRef.current) {
        panoramaRef.current.setVisible(false);
        panoramaRef.current = null;
      }
    };
  }, [isOpen, monument]);

  const handleRetry = useCallback(() => {
    if (rateLimitExceeded) {
      setRateLimitExceeded(false);
      setError(null);
      setIsLoading(true);
      
      // Wait 2 seconds before retrying to respect rate limits
      setTimeout(() => {
        if (panoramaRef.current) {
          panoramaRef.current.setVisible(false);
          panoramaRef.current = null;
        }
        // Trigger re-initialization
        const event = new Event('retry');
        window.dispatchEvent(event);
      }, 2000);
    }
  }, [rateLimitExceeded]);

  const handleShare = () => {
    if (!monument) return;
    
    const shareUrl = `https://www.google.com/maps/@${monument.coordinates.lat},${monument.coordinates.lng},3a,75y,0h,90t/data=!3m6!1e1!3m4!1s${monument.id}!2e0!7i13312!8i6656`;
    
    if (navigator.share) {
      navigator.share({
        title: `Explore ${monument.name} in 3D`,
        text: `Check out this amazing 3D view of ${monument.name}`,
        url: shareUrl
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
      // You could add a toast notification here
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  if (!monument) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`fixed inset-0 z-50 bg-black/80 backdrop-blur-sm ${
            isFullscreen ? 'p-0' : 'p-4'
          }`}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className={`relative bg-white rounded-2xl shadow-2xl overflow-hidden ${
              isFullscreen ? 'w-full h-full rounded-none' : 'w-full h-full max-w-6xl mx-auto'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/60 to-transparent p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-white" />
                  <div>
                    <h2 className="text-xl font-bold text-white">{monument.name}</h2>
                    <p className="text-sm text-white/80">{monument.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={handleShare}
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={toggleFullscreen}
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                  >
                    <Maximize2 className="h-4 w-4" />
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={onClose}
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Street View Container */}
            <div className="relative w-full h-full">
              <div
                ref={streetViewRef}
                className="w-full h-full"
                style={{ minHeight: '500px' }}
              />
              
              {/* Loading Overlay */}
              {isLoading && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="bg-white rounded-lg p-6 flex items-center gap-3">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                    <span className="text-sm font-medium">Loading 3D view...</span>
                  </div>
                </div>
              )}

              {/* Error Overlay */}
              {error && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Card className="bg-white p-6 max-w-md mx-4">
                    <div className="text-center">
                      <div className="text-red-500 text-4xl mb-4">🗺️</div>
                      <h3 className="text-lg font-semibold mb-2">Street View Unavailable</h3>
                      <p className="text-sm text-muted-foreground mb-4">{error}</p>
                      <div className="flex gap-2 justify-center">
                        {rateLimitExceeded && (
                          <Button onClick={handleRetry} className="bg-primary hover:bg-primary/90">
                            Retry
                          </Button>
                        )}
                        <Button onClick={onClose} variant="outline">
                          Close
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              )}
            </div>

            {/* Info Panel */}
            {!isFullscreen && (
              <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 to-transparent p-4">
                <Card className="bg-white/95 backdrop-blur-sm">
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{monument.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{monument.details}</p>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => {/* Toggle info panel */}}
                        className="text-muted-foreground"
                      >
                        <Info className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      {monument.opening_hours && (
                        <div>
                          <Badge variant="secondary" className="mb-1">Hours</Badge>
                          <p className="text-muted-foreground">{monument.opening_hours}</p>
                        </div>
                      )}
                      
                      {monument.entry_fee && (
                        <div>
                          <Badge variant="secondary" className="mb-1">Entry Fee</Badge>
                          <p className="text-muted-foreground">{monument.entry_fee}</p>
                        </div>
                      )}
                      
                      {monument.best_time && (
                        <div>
                          <Badge variant="secondary" className="mb-1">Best Time</Badge>
                          <p className="text-muted-foreground">{monument.best_time}</p>
                        </div>
                      )}
                      
                      {monument.duration && (
                        <div>
                          <Badge variant="secondary" className="mb-1">Duration</Badge>
                          <p className="text-muted-foreground">{monument.duration}</p>
                        </div>
                      )}
                    </div>

                    {monument.accessibility_info && (
                      <div className="mt-3 pt-3 border-t">
                        <Badge variant="outline" className="mb-2">Accessibility</Badge>
                        <p className="text-sm text-muted-foreground">{monument.accessibility_info}</p>
                      </div>
                    )}
                  </div>
                </Card>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StreetViewModal;
