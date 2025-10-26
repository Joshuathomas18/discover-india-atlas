import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { CulturalItem } from "@/types/database";
import { formatTabName } from "@/utils/formatTabName";

interface InfoCardProps {
  category: {
    key: string;
    name: string;
    description: string;
    items: CulturalItem[];
  };
  index: number;
  onClick: () => void;
}

const InfoCard = ({ category, index, onClick }: InfoCardProps) => {
  const radius = 250;
  const angle = (index * 72 * Math.PI) / 180;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  // Since cultural items don't have images in the database, use category-specific images
  // with better fallback logic
  const getCategoryImage = (categoryKey: string) => {
    const imageMap: Record<string, string> = {
      // Cities tabs
      monuments: '/src/assets/monuments.jpg',
      food: '/src/assets/food.jpg', 
      customs: '/src/assets/customs.jpg',
      festivals: '/src/assets/festivals.jpg',
      history: '/src/assets/history.jpg',
      
      // Waterfalls, Dams, Mountains, Rivers, Forests, Wildlife tabs
      facts: '/src/assets/facts.jpg',
      facts_tourists: '/src/assets/facts.jpg',
      how_to_reach: '/src/assets/how_to_reach.jpg',
      rivers_associated: '/src/assets/rivers_associated.jpg',
      trekking: '/src/assets/trekking.jpg',
      visiting: '/src/assets/visiting.jpg',
      fishes_found: '/src/assets/fishes_found.jpg',
      animals_found: '/src/assets/animals_found.jpg',
      tourists: '/src/assets/facts.jpg' // Use facts image for tourists tab
    };
    return imageMap[categoryKey] || '/src/assets/monuments.jpg';
  };

  const categoryImage = getCategoryImage(category.key);

  // Get category display name - use formatTabName to convert underscores to readable format
  const categoryName = category.name || formatTabName(category.key);
  
  // Get category description from first item
  const categoryDescription = category.items[0]?.description || `Explore ${categoryName.toLowerCase()} in this place`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: x,
        y: y,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      whileHover={{ scale: 1.08, rotate: 2 }}
      className="absolute cursor-pointer"
      onClick={onClick}
    >
      <Card className="w-52 overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(255,138,0,0.3)] transition-all duration-300 border-4 border-primary/30 bg-gradient-to-br from-card to-card/80 indian-pattern">
        <div className="relative h-36 overflow-hidden">
          <img
            src={categoryImage}
            alt={categoryName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
        </div>
        <CardContent className="p-4 bg-gradient-to-b from-card to-secondary/10">
          <h3 className="font-bold text-lg mb-1 line-clamp-2 text-primary">{categoryName}</h3>
          <p className="text-xs text-muted-foreground line-clamp-2">
            {categoryDescription}
          </p>
          <div className="text-xs text-accent mt-1">
            {category.items.length} item{category.items.length !== 1 ? 's' : ''}
          </div>
          
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default InfoCard;