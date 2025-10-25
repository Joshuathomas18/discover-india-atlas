import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { toast } from "@/hooks/use-toast";
import { Place, CulturalItem } from "@/types/database";
import { useState } from "react";

// Import images
import monumentsImg from "@/assets/monuments.jpg";
import foodImg from "@/assets/food.jpg";
import customsImg from "@/assets/customs.jpg";
import festivalsImg from "@/assets/festivals.jpg";
import historyImg from "@/assets/history.jpg";

interface StateModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: any;
  place: Place | null;
}

const StateModal = ({ isOpen, onClose, category, place }: StateModalProps) => {
  if (!category || !place) return null;

  const [showActions, setShowActions] = useState(false);
  
  // Get cultural items for this place and category
  const culturalItems: CulturalItem[] = category.items || [];

  // Image mapping
  const imageMap: Record<string, string> = {
    monuments: monumentsImg,
    food: foodImg,
    customs: customsImg,
    festivals: festivalsImg,
    history: historyImg
  };

  const handleActionClick = (action: any) => {
    switch (action.type) {
      case 'external_link':
        if (action.url) {
          window.open(action.url, '_blank', 'noopener,noreferrer');
          toast({
            title: "Opening Link",
            description: `Redirecting to ${action.label.toLowerCase()}...`,
          });
        }
        break;

      case 'modal':
        toast({
          title: action.label,
          description: action.content || "Opening detailed information...",
        });
        break;

      case 'places_search':
        if (action.query) {
          toast({
            title: "Searching Places",
            description: `Finding ${action.query.toLowerCase()}...`,
          });
          
          setTimeout(() => {
            toast({
              title: "Search Results",
              description: "Found 5 nearby restaurants matching your criteria!",
            });
          }, 1500);
        }
        break;

      case 'highlight_pins':
        if (action.pins) {
          toast({
            title: "Highlighting Places",
            description: `Showing ${action.pins.length} related locations on the map`,
          });
        }
        break;

      default:
        toast({
          title: "Action",
          description: action.label,
        });
    }
  };

  const handlePlacesToExplore = () => {
    setShowActions(true);
  };

  const handleBack = () => {
    setShowActions(false);
  };

  // Get category description from first cultural item
  const categoryDescription = culturalItems.length > 0 ? culturalItems[0].details : '';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        {/* Header */}
        <DialogHeader className="p-6 pb-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-3xl flex items-center gap-3">
              <span className="text-2xl">🏛️</span>
              {category.key.charAt(0).toUpperCase() + category.key.slice(1)} in {place.name}
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
          {/* Banner Image */}
          <div className="relative h-80 rounded-xl overflow-hidden mb-6 shadow-lg">
            <img
              src={imageMap[category.key]}
              alt={category.key}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          
          {/* Category Description */}
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {categoryDescription}
          </p>
          
          {/* Cultural Items Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">Cultural Items</h3>
            
            <div className="grid gap-6">
              {culturalItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-2">{item.name}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <AnimatePresence>
                    {showActions && item.actions && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex gap-3 mt-4"
                      >
                        {item.actions.primary && (
                          <Button
                            onClick={() => handleActionClick(item.actions.primary)}
                            className="bg-primary hover:bg-primary/90"
                          >
                            {item.actions.primary.label}
                          </Button>
                        )}
                        {item.actions.secondary && (
                          <Button
                            variant="outline"
                            onClick={() => handleActionClick(item.actions.secondary)}
                          >
                            {item.actions.secondary.label}
                          </Button>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="flex justify-end mt-8">
            <AnimatePresence mode="wait">
              {!showActions ? (
                <motion.div
                  key="explore"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <Button onClick={handlePlacesToExplore} size="lg" className="bg-accent hover:bg-accent/90">
                    Places to Explore
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="back"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <Button onClick={handleBack} variant="outline" size="lg">
                    Back
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default StateModal;