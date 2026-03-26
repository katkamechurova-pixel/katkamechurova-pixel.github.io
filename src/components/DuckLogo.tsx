import duckLogoLg from "@/assets/duck-watercolor-clean-lg.webp";
import duckLogoMd from "@/assets/duck-watercolor-clean-md.webp";
import duckLogoSm from "@/assets/duck-watercolor-clean-sm.webp";

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

export default DuckLogo;
