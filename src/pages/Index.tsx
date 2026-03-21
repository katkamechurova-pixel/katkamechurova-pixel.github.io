import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import ReviewsSection from "@/components/ReviewsSection";
import LatestArticlesSection from "@/components/LatestArticlesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Ducktorka – Výjezdová veterinární péče | MVDr. Kateřina Měchurová</title>
        <meta
          name="description"
          content="Ducktorka – mobilní veterinář k vám domů. Profesionální veterinární péče bez stresu pro psy, kočky a drobná zvířata. MVDr. Kateřina Měchurová, Benešov a okolí + Praha ve vyznačených částech, případně dle domluvy."
        />
        <meta
          name="keywords"
          content="výjezdová veterinární péče, mobilní veterinář, veterinář domů, veterinář bez stresu, veterinář Benešov, veterinář Praha 8"
        />
        <link rel="canonical" href="https://ducktorka.cz" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VeterinaryCare",
            name: "Ducktorka – MVDr. Kateřina Měchurová",
            description: "Výjezdová veterinární péče o vaše mazlíčky v pohodlí domova",
            url: "https://ducktorka.cz",
            telephone: "+420734231444",
            email: "ducktorka@outlook.com",
            areaServed: "Benešov a okolí; Praha ve vyznačených částech, případně dle domluvy",
            priceRange: "$$",
          })}
        </script>
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <BenefitsSection />
        <AboutSection />
        <ServicesSection />
        <PricingSection />
        <ReviewsSection />
        <LatestArticlesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
