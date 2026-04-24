import { Link } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { Clock, MapPin, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { locations, calcTransport } from "@/data/locations";

const LocationHub = () => {
  const pageUrl = "https://ducktorka.cz/vyjezdova-veterina/";

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Výjezdová veterinářka – oblasti působení",
    description:
      "MVDr. Kateřina Měchurová poskytuje výjezdovou veterinární péči v Benešově, Praze-východ a Středočeském kraji.",
    url: pageUrl,
    publisher: {
      "@type": "VeterinaryCare",
      name: "Ducktorka – MVDr. Kateřina Měchurová",
      url: "https://ducktorka.cz",
    },
  };

  return (
    <>
      <Head>
        <title>Výjezdová veterinářka – oblasti působení | Ducktorka.cz</title>
        <meta
          name="description"
          content="MVDr. Kateřina Měchurová jezdí za zvířaty domů do více než 20 obcí v Benešovsku a Praze-východ. Zjistěte, zda obsluhujeme i vaši obec."
        />
        <link rel="canonical" href={pageUrl} />

        <meta property="og:title" content="Výjezdová veterinářka – oblasti působení | Ducktorka" />
        <meta
          property="og:description"
          content="Mobilní veterinární péče v domácím prostředí – Benešov, Říčany, Jesenice, Praha 8 a dalších 16 obcí."
        />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ducktorka.cz/og-image-1.jpg" />

        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Head>

      <Navbar />

      <main className="min-h-screen pt-32 pb-20 overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-10">
            <Link to="/" className="hover:text-foreground transition-colors">Domů</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Výjezdová veterina</span>
          </div>

          {/* Header */}
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
              Výjezdová veterina –{" "}
              <span className="text-gradient">oblasti působení</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              MVDr. Kateřina Měchurová přijíždí za zvířaty přímo domů do více než 20 obcí v
              okolí Benešova a Prahy-východ. Vyberte svoji obec a zjistěte cenu dopravy i
              dostupné služby.
            </p>
          </div>

          {/* Location grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {locations.map((loc) => {
              const cost = calcTransport(loc.distanceKm);
              return (
                <Link
                  key={loc.slug}
                  to={`/vyjezdova-veterina/${loc.pageSlug}/`}
                  className="group bg-card border border-border rounded-[1.5rem] p-6 hover:border-pastel-turquoise hover:shadow-md transition-all relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-pastel-turquoise-light/30 to-transparent rounded-bl-full pointer-events-none" />

                  <div className="mb-4">
                    <h2 className="text-xl font-heading font-bold text-foreground group-hover:text-pastel-turquoise transition-colors">
                      {loc.name}
                    </h2>
                    <p className="text-sm text-pastel-turquoise font-medium mt-0.5">
                      {loc.serviceTitle}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-2">
                    {loc.description}
                  </p>

                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-pastel-turquoise group-hover:gap-2 transition-all">
                    Více informací <ChevronRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="max-w-2xl mx-auto text-center bg-card border border-border rounded-[2rem] p-10">
            <h2 className="text-2xl font-heading font-bold mb-3">
              Vaše obec v seznamu není?
            </h2>
            <p className="text-muted-foreground mb-6">
              Oblast působení průběžně rozšiřujeme. Zavolejte nám nebo napište – domluvíme se.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+420608061996"
                className="px-8 py-3 rounded-full bg-pastel-turquoise text-white font-bold hover:opacity-90 transition-all hover:scale-105 shadow-md"
              >
                Zavolat
              </a>
              <a
                href="/#contact"
                className="px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-all hover:scale-105 shadow-md"
              >
                Napsat zprávu
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default LocationHub;
