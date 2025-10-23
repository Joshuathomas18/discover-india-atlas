import { motion } from "framer-motion";
import { CulturalCategory } from "@/data/jaipurData";
import { Card, CardContent } from "./ui/card";

interface InfoCardProps {
  category: CulturalCategory;
  index: number;
  onClick: () => void;
}

const InfoCard = ({ category, index, onClick }: InfoCardProps) => {
  const radius = 250;
  const angle = (index * 72 * Math.PI) / 180;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

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
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
      whileHover={{ scale: 1.05 }}
      className="absolute cursor-pointer"
      onClick={onClick}
    >
      <Card className="w-48 overflow-hidden shadow-xl hover:shadow-2xl transition-shadow border-2 border-primary/20">
        <div className="relative h-32 overflow-hidden">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <CardContent className="p-4">
          <h3 className="font-bold text-lg mb-1 line-clamp-2">{category.title}</h3>
          <p className="text-xs text-muted-foreground line-clamp-2">
            {category.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default InfoCard;
