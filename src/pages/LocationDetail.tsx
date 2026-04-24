import { useParams, Link } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { ArrowLeft, MapPin, Phone, MessageCircle, Lightbulb, Car } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { locations, calcTransport } from "@/data/locations";
import { serviceSummaries } from "@/data/serviceSummaries";
import { FIXED_FEE, KILOMETER_FEE } from "@/data/constants";

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
        <Link
          to="/vyjezdova-veterina/"
          className="text-primary hover:underline flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Zpět na přehled lokalit
        </Link>
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

  const schema = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    name: `Výjezdová veterinářka ${location.name} – MVDr. Kateřina Měchurová`,
    description: location.metaDescription,
    url: pageUrl,
    image: "https://ducktorka.cz/og-image-1.jpg",
    telephone: "+420608061996",
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

        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Head>

      <Navbar />

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-card/95 backdrop-blur border-t border-border shadow-lg">
        <div className="flex gap-2 p-3">
          <a
            href="tel:+420608061996"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-pastel-turquoise text-white font-bold text-sm"
          >
            <Phone className="w-4 h-4" />
            Zavolat
          </a>
          <a
            href="https://wa.me/420608061996"
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
            <Link to="/" className="hover:text-foreground transition-colors">Domů</Link>
            <span>/</span>
            <Link to="/vyjezdova-veterina/" className="hover:text-foreground transition-colors">
              Výjezdová veterina
            </Link>
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
                      Doprava (odhad)
                    </p>
                    <p className="font-bold text-foreground">
                      {location.distanceKm === 0
                        ? "Zdarma"
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
                    Naše výjezdová základna se nachází přímo v Benešově, takže k vám dojedeme bez
                    příplatku za vzdálenost. Platíte pouze základní poplatek za výjezd{" "}
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
                    href="tel:+420608061996"
                    className="flex items-center gap-2 px-5 py-3 rounded-full bg-pastel-turquoise text-white font-bold hover:opacity-90 transition-all hover:scale-105 shadow-md"
                  >
                    <Phone className="w-4 h-4" />
                    Zavolat
                  </a>
                  <a
                    href="https://wa.me/420608061996"
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
                    <Link
                      to={`/sluzby/${service.slug}/`}
                      className="flex items-start gap-3 p-4 rounded-2xl bg-section-alt hover:bg-pastel-turquoise/10 transition-colors group"
                    >
                      <span className="w-2 h-2 rounded-full bg-pastel-turquoise mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                      <div>
                        <p className="font-semibold text-foreground text-sm">{service.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                          {service.shortDesc}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                Všechny služby nabízíme přímo u vás doma v {location.name} a okolí.{" "}
                <Link to="/#services" className="text-pastel-turquoise hover:underline">
                  Zobrazit kompletní přehled služeb →
                </Link>
              </p>
            </section>

            {/* Neighboring locations */}
            {neighborLocations.length > 0 && (
              <section className="bg-card rounded-[2rem] p-8 md:p-10 shadow-sm border border-border">
                <h2 className="text-xl font-heading font-bold mb-4">
                  Obsluhujeme i okolní obce
                </h2>
                <div className="flex flex-wrap gap-3">
                  {neighborLocations.map((neighbor) => (
                    <Link
                      key={neighbor.slug}
                      to={`/vyjezdova-veterina/${neighbor.pageSlug}/`}
                      className="px-4 py-2 rounded-full border border-border hover:border-pastel-turquoise hover:bg-pastel-turquoise/10 transition-colors text-sm font-medium"
                    >
                      {neighbor.name}
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Back link */}
            <div className="pt-2">
              <Link
                to="/vyjezdova-veterina/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-semibold uppercase tracking-wider"
              >
                <ArrowLeft className="w-4 h-4" /> Zpět na přehled lokalit
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default LocationDetail;
