import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import IndiaMap from "@/components/IndiaMap";
import InfoCard from "@/components/InfoCard";
import StateModal from "@/components/StateModal";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";
import { jaipurData, CulturalCategory } from "@/data/jaipurData";

const Index = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CulturalCategory | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleStateClick = (state: string) => {
    setSelectedState(state);
  };

  const handleCategoryClick = (category: CulturalCategory) => {
    setSelectedCategory(category);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen bg-background parchment-texture">
      <Navbar />
      
      {/* Hero Section */}
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Explore India
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              One Click, One Culture, One Story at a Time
            </p>
          </motion.div>

          {/* Map Container */}
          <div className="relative h-[600px] mb-20">
            <IndiaMap onStateClick={handleStateClick} />
            
            {/* Info Cards - Appear after state selection */}
            <AnimatePresence>
              {selectedState && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <div className="relative pointer-events-auto">
                    {/* Center State Name */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10"
                    >
                      <div className="bg-card/95 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-2xl border-2 border-primary">
                        <h2 className="text-3xl font-bold text-primary">{selectedState}</h2>
                        <p className="text-sm text-muted-foreground">Rajasthan</p>
                      </div>
                    </motion.div>

                    {/* Info Cards in Circle */}
                    {jaipurData.map((category, index) => (
                      <InfoCard
                        key={category.id}
                        category={category}
                        index={index}
                        onClick={() => handleCategoryClick(category)}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="about"
            className="max-w-4xl mx-auto text-center py-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Discover India's Cultural Tapestry
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Embark on a digital journey through India's diverse states, each with its own unique
              traditions, cuisine, monuments, and stories. Click on any state to uncover the rich
              heritage that makes India truly incredible.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
      <Chatbot />
      <StateModal
        isOpen={showModal}
        onClose={handleCloseModal}
        category={selectedCategory}
      />
    </div>
  );
};

export default Index;
