import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { GeographicalPOI } from "@/types/database";
import { POI_CATEGORIES } from "@/config/poiConfig";

interface POIModalProps {
  isOpen: boolean;
  onClose: () => void;
  poi: GeographicalPOI | null;
}

const POIModal = ({ isOpen, onClose, poi }: POIModalProps) => {
  if (!poi) return null;

  // Map Karnataka categories to POI categories
  const getCategoryKey = (category: string) => {
    switch (category) {
      case 'wildlife':
        return 'wildlife_sanctuary';
      case 'place':
        return 'city';
      default:
        return category as keyof typeof POI_CATEGORIES;
    }
  };

  const categoryKey = getCategoryKey(poi.category);
  const categoryConfig = POI_CATEGORIES[categoryKey];

  // Safety check to prevent errors
  if (!categoryConfig) {
    console.error(`No category config found for: ${poi.category} (mapped to: ${categoryKey})`);
    return null;
  }

  const renderPOIDetails = () => {
    switch (poi.category) {
      case 'city':
      case 'place':
        return (
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">City Information</h4>
              <p className="text-blue-700">{poi.description}</p>
            </div>
          </div>
        );

      case 'river':
        return (
          <div className="space-y-4">
            <div className="bg-cyan-50 p-4 rounded-lg">
              <h4 className="font-semibold text-cyan-800 mb-2">River Information</h4>
              <p className="text-cyan-700 mb-2">{poi.description}</p>
              {poi.length_km && (
                <p className="text-sm text-cyan-600">
                  <strong>Length:</strong> {poi.length_km} km
                </p>
              )}
            </div>
          </div>
        );

      case 'mountain':
        return (
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Mountain Information</h4>
              <p className="text-gray-700 mb-2">{poi.description}</p>
              {poi.elevation && (
                <p className="text-sm text-gray-600">
                  <strong>Elevation:</strong> {poi.elevation} meters above sea level
                </p>
              )}
            </div>
          </div>
        );

      case 'wildlife_sanctuary':
      case 'wildlife':
        return (
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Wildlife Sanctuary Information</h4>
              <p className="text-green-700 mb-2">{poi.description}</p>
              {poi.area_sq_km && (
                <p className="text-sm text-green-600 mb-1">
                  <strong>Area:</strong> {poi.area_sq_km} sq km
                </p>
              )}
              {poi.species && poi.species.length > 0 && (
                <div className="text-sm text-green-600">
                  <strong>Key Species:</strong> {poi.species.join(', ')}
                </div>
              )}
            </div>
          </div>
        );

      case 'forest':
        return (
          <div className="space-y-4">
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h4 className="font-semibold text-emerald-800 mb-2">Forest Information</h4>
              <p className="text-emerald-700 mb-2">{poi.description}</p>
              {poi.area_sq_km && (
                <p className="text-sm text-emerald-600">
                  <strong>Area:</strong> {poi.area_sq_km} sq km
                </p>
              )}
            </div>
          </div>
        );

      case 'waterfall':
        return (
          <div className="space-y-4">
            <div className="bg-sky-50 p-4 rounded-lg">
              <h4 className="font-semibold text-sky-800 mb-2">Waterfall Information</h4>
              <p className="text-sky-700 mb-2">{poi.description}</p>
              {poi.height_m && (
                <p className="text-sm text-sky-600">
                  <strong>Height:</strong> {poi.height_m} meters
                </p>
              )}
            </div>
          </div>
        );

      case 'dam':
        return (
          <div className="space-y-4">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h4 className="font-semibold text-indigo-800 mb-2">Dam Information</h4>
              <p className="text-indigo-700 mb-2">{poi.description}</p>
              {poi.capacity_mcm && (
                <p className="text-sm text-indigo-600">
                  <strong>Capacity:</strong> {poi.capacity_mcm} million cubic meters
                </p>
              )}
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700">{poi.description}</p>
          </div>
        );
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0">
        {/* Header */}
        <DialogHeader className="p-6 pb-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-3xl flex items-center gap-3">
              <span className="text-2xl">{categoryConfig.icon}</span>
              {poi.name}
            </DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-6"
        >
          {/* Category Badge */}
          <div className="flex items-center gap-2 mb-6">
            <div 
              className="w-4 h-4 rounded-full" 
              style={{ backgroundColor: categoryConfig.color }}
            />
            <span className="text-sm font-medium text-muted-foreground">
              {categoryConfig.label}
            </span>
          </div>

          {/* POI Details */}
          {renderPOIDetails()}

          {/* Coordinates */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Location</h4>
            <p className="text-sm text-gray-600">
              <strong>Coordinates:</strong> {poi.coordinates.lat.toFixed(4)}°N, {poi.coordinates.lng.toFixed(4)}°E
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end mt-6">
            <Button onClick={onClose} variant="outline">
              Close
            </Button>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default POIModal;
