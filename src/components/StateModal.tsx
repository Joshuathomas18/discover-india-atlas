import { X } from "lucide-react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { CulturalCategory } from "@/data/jaipurData";
import { Button } from "./ui/button";

interface StateModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: CulturalCategory | null;
}

const StateModal = ({ isOpen, onClose, category }: StateModalProps) => {
  if (!category) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl">{category.title}</DialogTitle>
        </DialogHeader>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          <div className="relative h-64 rounded-xl overflow-hidden">
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-lg text-muted-foreground">{category.description}</p>
          <p className="text-base leading-relaxed">{category.details}</p>
          <div className="flex justify-end space-x-3 pt-4">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            <Button variant="default">
              Learn More
            </Button>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default StateModal;
