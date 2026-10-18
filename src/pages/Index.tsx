import { Head } from "vite-react-ssg";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import ReviewsSection from "@/components/ReviewsSection";
import LatestArticlesSection from "@/components/LatestArticlesSection";
import HomeFooter from "@/components/HomeFooter";
import DeferredSection from "@/components/DeferredSection";
import { withPracticeGraph } from "@/data/structuredData";

const loadContactSection = () => import("@/components/ContactSection");

const Index = () => {
  return (
    <>
      <Head>
        <title>Ducktorka – Výjezdová veterinární péče | MVDr. Kateřina Měchurová</title>
        <meta
          name="description"
          content="Ducktorka – mobilní veterinář k vám domů. Profesionální veterinární péče bez stresu pro psy, kočky a drobná zvířata. MVDr. Kateřina Měchurová, Benešov a okolí + Praha ve vyznačených částech, případně dle domluvy."
        />
        <meta
          name="keywords"
          content="výjezdová veterinární péče, mobilní veterinář, veterinář domů, veterinář bez stresu, veterinář Benešov, veterinář Praha 8"
        />
        <link rel="canonical" href="https://ducktorka.cz/" />
        <link rel="alternate" hrefLang="cs" href="https://ducktorka.cz/" />
        <link rel="alternate" hrefLang="en" href="https://ducktorka.cz/en/" />
        <link rel="alternate" hrefLang="x-default" href="https://ducktorka.cz/" />
        <meta property="og:title" content="Ducktorka – Výjezdová veterinární péče | MVDr. Kateřina Měchurová" />
        <meta property="og:description" content="Mobilní veterinář k vám domů. Profesionální péče bez stresu pro psy, kočky a drobná zvířata." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ducktorka.cz/" />
        <meta property="og:image" content="https://ducktorka.cz/og-image-1.jpg" />
        <meta property="og:image:alt" content="Ducktorka – mobilní veterinární péče" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ducktorka – Výjezdová veterinární péče | MVDr. Kateřina Měchurová" />
        <meta name="twitter:description" content="Mobilní veterinář k vám domů. Profesionální péče bez stresu pro psy, kočky a drobná zvířata." />
        <meta name="twitter:image" content="https://ducktorka.cz/og-image-1.jpg" />

        <script type="application/ld+json">
          {JSON.stringify(withPracticeGraph({
            "@type": "WebPage",
            "@id": "https://ducktorka.cz/#webpage",
            name: "Ducktorka – Výjezdová veterinární péče | MVDr. Kateřina Měchurová",
            description: "Ducktorka – mobilní veterinář k vám domů. Profesionální veterinární péče bez stresu pro psy, kočky a drobná zvířata. MVDr. Kateřina Měchurová, Benešov a okolí + Praha ve vyznačených částech, případně dle domluvy.",
            url: "https://ducktorka.cz/",
            inLanguage: "cs-CZ",
            mainEntity: { "@id": "https://ducktorka.cz/#practice" },
          }))}
        </script>
      </Head>
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
        <HomeFooter />
      </main>
    </>
  );
};

export default Index;
