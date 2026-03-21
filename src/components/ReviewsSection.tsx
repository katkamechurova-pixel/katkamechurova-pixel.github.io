import { motion, AnimatePresence } from "framer-motion";
import { Star, PawPrint } from "lucide-react";
import { useState, useEffect } from "react";

import petClient1 from "@/assets/pet-client-1.jpg";
import petClient2 from "@/assets/pet-client-2.jpg";
import petClient3 from "@/assets/pet-client-3.jpg";
import petClient4 from "@/assets/pet-client-4.jpg";
import petClient5 from "@/assets/pet-client-5.jpg";

const placeholderReviews = [
  
];

const petPhotos = [petClient1, petClient2, petClient3, petClient4, petClient5];

const ReviewsSection = () => {
  const [currentPet, setCurrentPet] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPet((prev) => (prev + 1) % petPhotos.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reviews" className="pb-20">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {placeholderReviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-sm"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: r.rating }).map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-pastel-pink text-pastel-pink" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm mb-4 italic leading-relaxed">„{r.text}"</p>
              <p className="font-heading font-semibold text-foreground text-sm">{r.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Pet clients gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <PawPrint className="w-5 h-5 text-pastel-turquoise" />
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center">
              Moji chlupatí <span className="text-gradient">klienti</span>
            </h2>
            <PawPrint className="w-5 h-5 text-pastel-turquoise" />
          </div>

          <div className="max-w-md mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-lg aspect-square relative bg-muted">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentPet}
                  src={petPhotos[currentPet]}
                  alt={`Chlupatý klient ${currentPet + 1}`}
                  className="w-full h-full object-cover absolute inset-0"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </AnimatePresence>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {petPhotos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPet(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentPet
                      ? "bg-pastel-turquoise w-6"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Zobrazit fotku ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
