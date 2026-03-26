import { Helmet } from "react-helmet-async";
import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import AboutSection from "@/components/AboutSection";

const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const ReviewsSection = lazy(() => import("@/components/ReviewsSection"));
const LatestArticlesSection = lazy(() => import("@/components/LatestArticlesSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionFallback = () => <div className="min-h-[200px]" />;

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
            name: "Ducktorka – MVDr. Kateřina Měchurová",
            description: "Výjezdová veterinární péče o vaše mazlíčky v pohodlí domova",
            url: "https://ducktorka.cz",
            telephone: "+420734231444",
            email: "ducktorka@outlook.com",
            areaServed: "Benešov a okolí; Praha ve vyznačených částech, případně dle domluvy",
            serviceType: "VeterinaryService",
            priceRange: "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Nezvalova 989",
              "addressLocality": "Benešov",
              "postalCode": "25601",
              "addressCountry": "CZ"
            },
            publicAccess: false
          })}
        </script>
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <BenefitsSection />
        <AboutSection />
        <Suspense fallback={<SectionFallback />}>
          <ServicesSection />
          <PricingSection />
          <ReviewsSection />
          <LatestArticlesSection />
          <ContactSection />
          <Footer />
        </Suspense>
      </main>
    </>
  );
};

export default Index;
