import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import aboutPhoto1 from "@/assets/about-photo-1.png";
import aboutPhoto2 from "@/assets/about-photo-2.png";

const photos = [aboutPhoto1, aboutPhoto2];

const AboutSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        {/* Mobile-only title above photo */}
        <h2 className="md:hidden text-2xl font-heading font-bold mb-6 text-center">
          <span className="text-gradient">O</span> <span className="text-foreground">mně</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-lg aspect-[3/4] relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={photos[current]}
                  alt="MVDr. Kateřina Měchurová"
                  className="w-full h-full object-cover absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  loading="lazy"
                />
              </AnimatePresence>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-pastel-pink-light opacity-60 -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-pastel-turquoise-light opacity-60 -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="hidden md:block text-2xl md:text-3xl font-heading font-bold mb-4">
              <span className="text-gradient">O</span> <span className="text-foreground">mně</span>
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Jsem <strong className="text-foreground">MVDr. Kateřina Měchurová</strong>, veterinární lékařka s láskou ke zvířatům a přesvědčením, že péče o ně může být šetrná a bez zbytečného stresu.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Vystudovala jsem Veterinární univerzitu v Brně a praxi jsem získávala v ambulancích i terénu. Postupně jsem si uvědomila, že pro mnoho zvířat je návštěva veterináře spojena s velkým stresem – a tak vznikla <strong className="text-foreground">Ducktorka</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Mou filozofií je přistupovat ke každému pacientovi individuálně, s trpělivostí a empatií. Věřím, že klidné prostředí domova přispívá k lepší diagnostice i léčbě. 🐥
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
