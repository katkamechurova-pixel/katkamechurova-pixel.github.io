import { motion } from "framer-motion";
import heroImageLg from "@/assets/hero-v11-lg.webp";
import heroImageMd from "@/assets/hero-v11-md.webp";
import heroImageSm from "@/assets/hero-v11-sm.webp";
import duckLogoLg from "@/assets/duck-watercolor-clean-lg.webp";
import duckLogoMd from "@/assets/duck-watercolor-clean-md.webp";
import duckLogoSm from "@/assets/duck-watercolor-clean-sm.webp";

/** Watercolor duck logo component */
const DuckLogo = ({ className = "" }: { className?: string }) => (
  <div className={`${className} rounded-full bg-gradient-to-br from-primary/80 to-accent/60 p-1.5 flex items-center justify-center shadow-md`}>
    <img 
      src={duckLogoMd} 
      srcSet={`${duckLogoSm} 200w, ${duckLogoMd} 400w, ${duckLogoLg} 800w`}
      sizes="(max-width: 768px) 64px, 96px"
      alt="Ducktorka logo" 
      className="w-full h-full object-contain rounded-full drop-shadow-sm" 
    />
  </div>
);

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden flex items-center pt-20">
      {/* Background image */}
      <img
        src={heroImageLg}
        srcSet={`${heroImageSm} 800w, ${heroImageMd} 1200w, ${heroImageLg} 1920w`}
        sizes="100vw"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-[center_top_20%] md:object-bottom"
        loading="eager"
        fetchPriority="high"
      />
      
      {/* Light/Dark Overlays for Text Readability */}
      <div className="absolute inset-0 bg-background/60 md:bg-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/40 to-background/95 md:bg-gradient-to-r md:from-background/95 md:via-background/60 md:to-transparent" />

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-5 mb-6 md:mb-8">
            <DuckLogo className="w-16 h-16 md:w-24 md:h-24 shrink-0 drop-shadow-md" />
            <span className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-gradient">
              Ducktorka<span className="text-pastel-pink">.cz</span>
            </span>
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground leading-snug mb-4">
            Výjezdová veterinární péče o&nbsp;vaše mazlíčky v&nbsp;pohodlí domova
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-8 font-light max-w-xl">
            Profesionální veterinární péče bez stresu z&nbsp;čekárny
          </p>
          
          <p className="text-xl md:text-2xl font-heading font-bold text-foreground/90 mb-8">
            MVDr. Kateřina Měchurová
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/#contact" className="inline-flex justify-center items-center px-8 py-3.5 rounded-full bg-accent text-accent-foreground font-semibold text-lg hover:opacity-90 transition-all hover:scale-105 shadow-md">
              Objednat návštěvu
            </a>
            <a href="/#contact" className="inline-flex justify-center items-center px-8 py-3.5 rounded-full bg-card/90 text-foreground font-semibold text-base border border-border hover:bg-card transition-all hover:scale-105 shadow-sm">
              Kontaktovat
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { DuckLogo };
export default HeroSection;
