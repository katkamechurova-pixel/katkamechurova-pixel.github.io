import { useParams, Link } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { ArrowLeft, MapPin, Phone, MessageCircle, Lightbulb, Car, ChevronDown } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { locations, calcTransport } from "@/data/locations";
import { serviceSummaries } from "@/data/serviceSummaries";
import { FIXED_FEE, KILOMETER_FEE } from "@/data/constants";

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-section-alt transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-foreground text-sm leading-snug">{question}</span>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
          {answer}
        </div>
      )}
    </div>
  );
};

const HIGHLIGHT_SERVICES = [
  "preventivni-prohlidky",
  "vakcinace",
  "odcerveni",
  "odbery-krve",
  "sono-vysetreni",
  "eutanazie-doma",
];

const LocationDetail = () => {
  const { locationSlug } = useParams<{ locationSlug: string }>();
  const location = locations.find((l) => l.pageSlug === locationSlug);

  if (!location) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24 pb-12">
        <Navbar />
        <h1 className="text-3xl font-bold mb-4">Lokalita nenalezena</h1>
        <a
          href="/vyjezdova-veterina/"
          className="text-primary hover:underline flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Zpět na přehled lokalit
        </a>
        <Footer />
      </div>
    );
  }

  const transportCost = calcTransport(location.distanceKm);
  const pageUrl = `https://ducktorka.cz/vyjezdova-veterina/${location.pageSlug}/`;

  const neighborLocations = location.neighbors
    .map((slug) => locations.find((l) => l.slug === slug))
    .filter(Boolean) as typeof locations;

  const highlightedServices = serviceSummaries.filter((s) =>
    HIGHLIGHT_SERVICES.includes(s.slug)
  );

  const faqSchema = location.faq && location.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": location.faq.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer },
    })),
  } : null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    name: `Výjezdová veterinářka ${location.name} – MVDr. Kateřina Měchurová`,
    description: location.metaDescription,
    url: pageUrl,
    image: "https://ducktorka.cz/og-image-1.jpg",
    telephone: "+420734231444",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nezvalova 989",
      addressLocality: "Benešov",
      postalCode: "25601",
      addressCountry: "CZ",
    },
    areaServed: {
      "@type": "City",
      name: location.name,
      addressCountry: "CZ",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Veterinární služby domů",
      itemListElement: highlightedServices.map((s, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.shortDesc,
          url: `https://ducktorka.cz/sluzby/${s.slug}/`,
        },
      })),
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    publicAccess: false,
  };

  return (
    <>
      <Head>
        <title>{location.seoTitle}</title>
        <meta name="description" content={location.metaDescription} />
        <meta name="keywords" content={location.keywords.join(", ")} />
        <link rel="canonical" href={pageUrl} />

        <meta property="og:title" content={location.seoTitle} />
        <meta property="og:description" content={location.metaDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ducktorka.cz/og-image-1.jpg" />
        <meta property="og:image:alt" content={`Veterinář ${location.name}`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={location.seoTitle} />
        <meta name="twitter:description" content={location.metaDescription} />
        <meta name="twitter:image" content="https://ducktorka.cz/og-image-1.jpg" />

        {faqSchema && (
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        )}
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Head>

      <Navbar />

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-card/95 backdrop-blur border-t border-border shadow-lg">
        <div className="flex gap-2 p-3">
          <a
            href="tel:+420734231444"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-pastel-turquoise text-white font-bold text-sm"
          >
            <Phone className="w-4 h-4" />
            Zavolat
          </a>
          <a
            href="https://wa.me/420734231444"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-accent text-accent-foreground font-bold text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </div>

      <main className="min-h-screen pt-32 pb-28 md:pb-20 overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-10">
            <a href="/" className="hover:text-foreground transition-colors">Domů</a>
            <span>/</span>
            <a href="/vyjezdova-veterina/" className="hover:text-foreground transition-colors">
              Výjezdová veterina
            </a>
            <span>/</span>
            <span className="text-foreground font-medium">{location.name}</span>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">

            {/* Hero card */}
            <article className="bg-card rounded-[2rem] p-8 md:p-14 shadow-sm border border-border relative overflow-hidden">
              <div className="absolute top-0 right-0 p-16 bg-gradient-to-bl from-pastel-turquoise-light via-pastel-turquoise-light/20 to-transparent rounded-bl-full opacity-60 pointer-events-none -z-10" />

              <header className="mb-8 border-b border-border pb-8">
                <span className="inline-block mb-3 px-3 py-1 rounded-full bg-pastel-turquoise/15 text-pastel-turquoise text-sm font-semibold">
                  {location.serviceTitle}
                </span>
                <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
                  {location.h1}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {location.uniqueText}
                </p>
              </header>

              {/* Transport info */}
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <div className="flex items-start gap-3 bg-section-alt rounded-2xl p-4">
                  <Car className="w-5 h-5 text-pastel-turquoise mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5 uppercase tracking-wide font-semibold">
                      Doprava {location.distanceKm === 0 ? '' : '(odhad)'}
                    </p>
                    <p className="font-bold text-foreground">
                      {location.distanceKm === 0
                        ? <span>${FIXED_FEE} Kč<br/>(žádné km navíc)</span>
                        : `${transportCost} Kč`}
                    </p>
                    {location.distanceKm > 0 && (
                      <p className="text-xs text-muted-foreground">
                        {FIXED_FEE} + {location.distanceKm} km × {KILOMETER_FEE} Kč
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-section-alt rounded-2xl p-4">
                  <MapPin className="w-5 h-5 text-pastel-turquoise mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5 uppercase tracking-wide font-semibold">
                      Parkování
                    </p>
                    <p className="font-bold text-foreground">Přímo u vás</p>
                  </div>
                </div>
              </div>

              {/* Local tip */}
              <div className="flex gap-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-5 mb-8">
                <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-amber-800 dark:text-amber-300 mb-1">
                    Tip pro {location.name}
                  </p>
                  <p className="text-sm text-amber-700 dark:text-amber-400 leading-relaxed">
                    {location.localTip}
                  </p>
                </div>
              </div>

              {/* Transport detail text */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                {location.distanceKm === 0 ? (
                  <>
                    Naše výjezdová základna se nachází v Benešově a Praze 8, takže k vám dojedu bez
                    příplatku za vzdálenost. 
                    <strong>{transportCost} Kč</strong>.
                  </>
                ) : (
                  <>
                    Cena dopravy k vám vychází na{" "}
                    <strong>{transportCost} Kč</strong> (fixní poplatek {FIXED_FEE} Kč +{" "}
                    {location.distanceKm} km x {KILOMETER_FEE} Kč). Parkujeme přímo před vaším domem, takže
                    veškeré vybavení včetně přenosného sonografu přineseme až k vašemu mazlíčkovi.
                  </>
                )}
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 bg-section-alt rounded-2xl p-6 items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-lg mb-1">
                    Potřebujete pomoc v {location.name}?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Zavolejte nebo napište přes WhatsApp.
                  </p>
                </div>
                <div className="flex gap-3 shrink-0">
                  <a
                    href="tel:+420734231444"
                    className="flex items-center gap-2 px-5 py-3 rounded-full bg-pastel-turquoise text-white font-bold hover:opacity-90 transition-all hover:scale-105 shadow-md"
                  >
                    <Phone className="w-4 h-4" />
                    Zavolat
                  </a>
                  <a
                    href="https://wa.me/420734231444"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-all hover:scale-105 shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </article>

            {/* Services offered */}
            <section className="bg-card rounded-[2rem] p-8 md:p-10 shadow-sm border border-border">
              <h2 className="text-2xl font-heading font-bold mb-6">
                Služby dostupné v {location.name}
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {highlightedServices.map((service) => (
                  <li key={service.slug}>
                    <a
                      href={`/sluzby/${service.slug}/`}
                      className="flex items-start gap-3 p-4 rounded-2xl bg-section-alt hover:bg-pastel-turquoise/10 transition-colors group"
                    >
                      <span className="w-2 h-2 rounded-full bg-pastel-turquoise mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                      <div>
                        <p className="font-semibold text-foreground text-sm">{service.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                          {service.shortDesc}
                        </p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                Všechny služby nabízíme přímo u vás doma v {location.name} a okolí.{" "}
                <a href="/#services" className="text-pastel-turquoise hover:underline">
                  Zobrazit kompletní přehled služeb →
                </a>
              </p>
            </section>

            {/* Sub-areas + Neighboring locations */}
            {(neighborLocations.length > 0 || (location.subAreas && location.subAreas.length > 0)) && (
              <section className="bg-card rounded-[2rem] p-8 md:p-10 shadow-sm border border-border">
                <h2 className="text-xl font-heading font-bold mb-4">
                  Obsluhujeme i okolní obce a části
                </h2>
                {location.subAreas && location.subAreas.length > 0 && (
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-3">
                      Pokrýváme {location.name} a přilehlé části:
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {location.subAreas.map((area) => (
                        <span
                          key={area}
                          className="px-3 py-1.5 rounded-full bg-section-alt border border-border text-sm text-muted-foreground"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {neighborLocations.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {neighborLocations.map((neighbor) => (
                      <a
                        key={neighbor.slug}
                        href={`/vyjezdova-veterina/${neighbor.pageSlug}/`}
                        className="px-4 py-2 rounded-full border border-border hover:border-pastel-turquoise hover:bg-pastel-turquoise/10 transition-colors text-sm font-medium"
                      >
                        {neighbor.name}
                      </a>
                    ))}
                  </div>
                )}
              </section>
            )}

            {/* FAQ section */}
            {location.faq && location.faq.length > 0 && (
              <section className="bg-card rounded-[2rem] p-8 md:p-10 shadow-sm border border-border">
                <h2 className="text-2xl font-heading font-bold mb-6">
                  Časté otázky – {location.name}
                </h2>
                <div className="space-y-3">
                  {location.faq.map((item, i) => (
                    <FaqItem key={i} question={item.question} answer={item.answer} />
                  ))}
                </div>
              </section>
            )}

            {/* Back link */}
            <div className="pt-2">
              <a
                href="/vyjezdova-veterina/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-semibold uppercase tracking-wider"
              >
                <ArrowLeft className="w-4 h-4" /> Zpět na přehled lokalit
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default LocationDetail;
