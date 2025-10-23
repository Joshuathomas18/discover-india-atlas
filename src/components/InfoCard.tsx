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
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
          <div className="absolute top-2 right-2 w-8 h-8 bg-accent/80 rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-accent-foreground">{index + 1}</span>
          </div>
        </div>
        <CardContent className="p-4 bg-gradient-to-b from-card to-secondary/10">
          <h3 className="font-bold text-lg mb-1 line-clamp-2 text-primary">{category.title}</h3>
          <p className="text-xs text-muted-foreground line-clamp-2">
            {category.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default InfoCard;
