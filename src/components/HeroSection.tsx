import { motion } from "framer-motion";
import heroImage from "@/assets/hero-v11.jpg";
import duckLogo from "@/assets/duck-watercolor-clean.png";

/** Watercolor duck logo component */
const DuckLogo = ({ className = "" }: { className?: string }) => (
  <div className={`${className} rounded-full bg-gradient-to-br from-primary/80 to-accent/60 p-1.5 flex items-center justify-center shadow-md`}>
    <img src={duckLogo} alt="Ducktorka logo" className="w-full h-full object-contain rounded-full drop-shadow-sm" />
  </div>
);

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[100svh] md:min-h-screen overflow-hidden pt-20 md:pt-32 flex flex-col items-start">
      {/* Background image – on mobile sized to show all 3 animals, on desktop cover */}
      <div
        className="absolute inset-0 bg-no-repeat bg-bottom"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      <style>{`
        #hero > div:first-child {
          background-size: 120% auto;
          background-position: 100% bottom;
        }
        @media (min-width: 768px) {
          #hero > div:first-child {
            background-size: cover !important;
            background-position: center bottom !important;
          }
        }
      `}</style>
      {/* Mobile overlay: only cover text area at top, rest fully transparent to show office */}
      <div className="absolute inset-0 md:hidden" style={{
        background: 'linear-gradient(to bottom, hsl(140 30% 97% / 0.93) 0%, hsl(140 30% 97% / 0.7) 28%, hsl(140 30% 97% / 0.05) 48%, transparent 55%)',
      }} />
      {/* Desktop overlay */}
      <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-background/85 via-background/40 to-transparent" />
      <div className="absolute inset-0 hidden md:block bg-gradient-to-b from-background/20 via-transparent to-background/10" />

      <div className="relative z-10 container mx-auto px-4 flex-1 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl flex flex-col md:flex-1"
        >
          <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-7">
            <DuckLogo className="w-12 h-12 md:w-24 md:h-24 shrink-0 drop-shadow-md" />
            <span className="text-3xl md:text-6xl lg:text-7xl font-heading font-bold text-gradient">
              Ducktorka<span className="text-pastel-pink">.cz</span>
            </span>
          </div>
          <h1 className="text-base md:text-2xl font-heading font-medium text-foreground/80 leading-relaxed mb-2 md:mb-5">
            Výjezdová veterinární péče o&nbsp;vaše mazlíčky v&nbsp;pohodlí domova
          </h1>
          <p className="text-sm md:text-lg text-muted-foreground mb-4 md:mb-8 font-light">
            Profesionální veterinární péče bez stresu z&nbsp;čekárny
          </p>
          {/* Spacer to push name & buttons to bottom on desktop */}
          <div className="hidden md:block md:flex-1" />
          <p className="text-base md:text-xl font-heading font-bold text-foreground/80 mb-3 md:mb-6">
            MVDr. Kateřina Měchurová
          </p>
          <div className="flex flex-col sm:flex-row gap-2 md:gap-4 md:pb-24">
            <a href="#contact" className="inline-block px-5 md:px-8 py-2.5 md:py-3.5 rounded-full bg-accent text-accent-foreground font-semibold text-sm md:text-lg hover:opacity-90 transition-all hover:scale-105 shadow-md text-center">
              Objednat návštěvu
            </a>
            <a href="#contact" className="inline-block px-5 md:px-8 py-2.5 md:py-3.5 rounded-full bg-card/90 text-foreground font-semibold text-sm md:text-base border border-border hover:bg-card transition-all hover:scale-105 shadow-sm text-center">
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
