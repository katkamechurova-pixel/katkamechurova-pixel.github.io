import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import ReviewsSection from "@/components/ReviewsSection";
import LatestArticlesSection from "@/components/LatestArticlesSection";
import Footer from "@/components/Footer";
import DeferredSection from "@/components/DeferredSection";

const loadContactSection = () => import("@/components/ContactSection");

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

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ducktorka – Výjezdová veterinární péče | MVDr. Kateřina Měchurová" />
        <meta name="twitter:description" content="Mobilní veterinář k vám domů. Profesionální péče bez stresu pro psy, kočky a drobná zvířata." />
        <meta name="twitter:image" content="https://ducktorka.cz/og-image-1.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VeterinaryCare",
            "name": "Ducktorka – MVDr. Kateřina Měchurová",
            "description": "Výjezdová veterinární péče o vaše mazlíčky v pohodlí domova. Profesionální péče opsy, kočky a drobná zvířata.",
            "url": "https://ducktorka.cz",
            "logo": "https://ducktorka.cz/og-image-1.jpg",
            "image": "https://ducktorka.cz/og-image-1.jpg",
            "telephone": "+420734231444",
            "email": "ducktorka@outlook.com",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Nezvalova 989",
              "addressLocality": "Benešov",
              "postalCode": "25601",
              "addressCountry": "CZ"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 49.7813,
              "longitude": 14.6869
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Benešov",
                "sameAs": "https://www.wikidata.org/wiki/Q660074"
              },
              {
                "@type": "City",
                "name": "Praha",
                "sameAs": "https://www.wikidata.org/wiki/Q1085"
              },
              {
                "@type": "AdministrativeArea",
                "name": "Středočeský kraj",
                "sameAs": "https://www.wikidata.org/wiki/Q156096"
              }
            ],
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday"],
                "opens": "08:00",
                "closes": "20:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "13:00"
              }
            ],
            publicAccess: false
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
        <DeferredSection
          id="contact"
          loader={loadContactSection}
          placeholderClassName="min-h-[980px] bg-section-alt"
        />
        <Footer />
      </main>
    </>
  );
};

export default Index;
