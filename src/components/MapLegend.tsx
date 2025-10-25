import { POI_CATEGORIES } from '@/config/poiConfig';

interface MapLegendProps {
  isVisible?: boolean;
}

const MapLegend = ({ isVisible = true }: MapLegendProps) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-border z-20 max-w-xs">
      <h3 className="font-bold mb-3 text-primary text-lg">Map Legend</h3>
      <div className="space-y-2">
        {Object.entries(POI_CATEGORIES).map(([key, config]) => (
          <div key={key} className="flex items-center gap-3">
            <div 
              className="w-4 h-4 rounded-full border-2 border-white shadow-sm" 
              style={{ backgroundColor: config.color }}
            />
            <div className="flex items-center gap-2">
              <span className="text-lg">{config.icon}</span>
              <div>
                <div className="text-sm font-medium text-primary">{config.label}</div>
                <div className="text-xs text-muted-foreground">{config.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Additional Info */}
      <div className="mt-4 pt-3 border-t border-border">
        <div className="text-xs text-muted-foreground">
          <div className="flex items-center gap-1 mb-1">
            <div className="w-2 h-2 rounded-full bg-primary/20 border border-primary"></div>
            <span>Click state boundaries to explore</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-accent/20 border border-accent"></div>
            <span>Click POI markers for details</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapLegend;
