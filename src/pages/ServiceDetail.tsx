import { useParams, Link } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getServiceIcon } from "@/data/serviceIcons";
import { serviceDetails } from "@/data/serviceDetails";
import { formatCzk, VACCINE_PRICE_NOTICE, VACCINE_PRICES } from "@/data/pricing";
import { serviceFaqs } from "@/data/serviceFaqs";
import { PRACTICE_AREA_SERVED, practiceReference, withPracticeGraph } from "@/data/structuredData";

const vaccinePriceGroups = [
  { id: "cat-rabies", title: "Očkování pro kočku · vzteklina", matches: (item: typeof VACCINE_PRICES[number]) => item.tableGroup === "cat-rabies" },
  { id: "cat-infectious", title: "Očkování pro kočku · infekční nemoci", matches: (item: typeof VACCINE_PRICES[number]) => item.tableGroup === "cat-infectious" },
  { id: "dog-rabies", title: "Očkování pro psa · vzteklina", matches: (item: typeof VACCINE_PRICES[number]) => item.tableGroup === "dog-rabies" },
  { id: "dog-infectious", title: "Očkování pro psa · infekční nemoci", matches: (item: typeof VACCINE_PRICES[number]) => item.tableGroup === "dog-infectious" && item.species?.includes("dog") },
  { id: "ferret", title: "Očkování pro fretku", matches: (item: typeof VACCINE_PRICES[number]) => item.species?.includes("ferret") === true },
  { id: "rabbit", title: "Očkování pro králíka", matches: (item: typeof VACCINE_PRICES[number]) => item.tableGroup === "rabbit" },
];

const VaccinationPriceTables = () => (
  <div className="rich-content max-w-none mb-12 space-y-8">
    {vaccinePriceGroups.map((group) => {
      const entries = VACCINE_PRICES.filter(group.matches);
      if (entries.length === 0) return null;
      return (
        <section key={group.id} aria-labelledby={"vaccine-group-" + group.id}>
          <h3 id={"vaccine-group-" + group.id}>{group.title}</h3>
          <div className="price-table-wrapper">
            <table className="price-table price-table--2col">
              <thead>
                <tr><th>Název vakcíny</th><th>Orientační cena</th></tr>
              </thead>
              <tbody>
                {entries.map((entry) => (
                  <tr key={entry.id}>
                    <td>{entry.productName}</td>
                    <td>{formatCzk(entry.publishedPriceCzk ?? 0)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      );
    })}
    <p className="text-sm text-muted-foreground">
      {VACCINE_PRICE_NOTICE.cs}{" "}
      <a href="/cenik/" className="text-pastel-turquoise hover:underline">Kalkulačka cestovného a ceník →</a>
    </p>
  </div>
);

const ServiceDetail = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = serviceDetails.find((s) => s.slug === serviceSlug);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24 pb-12">
        <Navbar />
        <h1 className="text-3xl font-bold mb-4">Služba nenalezena</h1>
        <a href="/" className="text-primary hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Zpět na úvodní stránku
        </a>
        <Footer />
      </div>
    );
  }

  const Icon = getServiceIcon(service.iconName);
  const pageUrl = `https://ducktorka.cz/sluzby/${service.slug}/`;

  const faqSchema = service.slug === "eutanazie-doma" ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Je domácí eutanázie psa nebo kočky bolestivá?",
        "acceptedAnswer": { "@type": "Answer", "text": "Ne. Celý proces je navržen tak, aby byl pro zvíře zcela bezbolestný. První sedativní injekce je aplikována do svalu. Zvíře poté upadne do hlubokého a klidného spánku, aniž by cokoli vnímalo." }
      },
      {
        "@type": "Question",
        "name": "Jak dlouho domácí eutanázie trvá?",
        "acceptedAnswer": { "@type": "Answer", "text": "Obvykle 30–60 minut, včetně úvodního rozhovoru a rozloučení. Nikam nespěcháme – máte dostatek času se se svým mazlíčkem v klidu rozloučit." }
      },
      {
        "@type": "Question",
        "name": "Musím být přítomen při eutanázii doma?",
        "acceptedAnswer": { "@type": "Answer", "text": "Není to povinností – rozhodnutí je čistě na vás. Velká část majitelů přítomna být chce a tato možnost je vždy k dispozici. Přítomnost bývá pro mazlíčka i pro majitele uklidňující." }
      },
      {
        "@type": "Question",
        "name": "Jak poznám, že je správný čas pro eutanázii?",
        "acceptedAnswer": { "@type": "Answer", "text": "Zaměřte se na kvalitu života vašeho zvířete: přijímá stále potravu? Má zájem o okolí a vaši přítomnost? Nebo jeho dny provází jen neustávající bolest a apatie? Veterinářka vám ráda pomůže situaci objektivně zhodnotit." }
      },
      {
        "@type": "Question",
        "name": "Kolik stojí eutanázie psa doma?",
        "acceptedAnswer": { "@type": "Answer", "text": "Cena se skládá ze základního poplatku za výjezd a poplatku za provedení eutanázie. Přesnou cenu sdělíme telefonicky nebo přes WhatsApp dle vaší lokality." }
      },
    ],
  } : null;
  const visibleFaqs = serviceFaqs[service.slug] ?? [];
  const visibleFaqSchema = visibleFaqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": visibleFaqs.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer },
    })),
  } : null;

  return (
    <>
      <Head>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ducktorka.cz/og-image-1.jpg" />
        <meta property="og:image:alt" content={service.title} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={service.metaTitle} />
        <meta name="twitter:description" content={service.metaDescription} />
        <meta name="twitter:image" content="https://ducktorka.cz/og-image-1.jpg" />

        {/* Structured Data */}
        {faqSchema && (
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        )}
        {visibleFaqSchema && (
          <script type="application/ld+json">{JSON.stringify(visibleFaqSchema)}</script>
        )}

        <script type="application/ld+json">
          {JSON.stringify(withPracticeGraph(
            {
              "@type": "WebPage",
              "@id": `${pageUrl}#webpage`,
              name: service.metaTitle,
              description: service.metaDescription,
              url: pageUrl,
              inLanguage: "cs-CZ",
              about: practiceReference,
              mainEntity: { "@id": `${pageUrl}#service` },
            },
            {
              "@type": "Service",
              "@id": `${pageUrl}#service`,
              name: service.title,
              description: service.shortDesc,
              url: pageUrl,
              provider: practiceReference,
              areaServed: PRACTICE_AREA_SERVED,
            },
          ))}
        </script>
      </Head>

      <Navbar />

      <main className="min-h-screen pt-32 pb-20 overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">

          {/* Back link */}
          <a href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 uppercase tracking-wider text-sm font-semibold">
            <ArrowLeft className="w-4 h-4" /> Zpět na přehled
          </a>

          <article className="max-w-3xl mx-auto bg-card rounded-[2rem] p-8 md:p-14 shadow-sm border border-border relative overflow-hidden">
            {/* Visual background blob */}
            <div className="absolute top-0 right-0 p-16 bg-gradient-to-bl from-pastel-turquoise-light via-pastel-turquoise-light/20 to-transparent rounded-bl-full opacity-60 pointer-events-none -z-10" />

            <header className="flex flex-col md:flex-row gap-6 md:items-center mb-10 border-b border-border pb-8">
              <div className="w-16 h-16 rounded-2xl bg-pastel-turquoise flex items-center justify-center shrink-0 shadow-sm shadow-pastel-turquoise/20">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-3">{service.title}</h1>
                <p className="text-lg md:text-xl text-muted-foreground font-light">{service.shortDesc}</p>
              </div>
            </header>

            <div className="service-prose rich-content max-w-none mb-12" dangerouslySetInnerHTML={{ __html: service.html }} />
            {service.slug === "vakcinace" && <VaccinationPriceTables />}
            {visibleFaqs.length > 0 && (
              <section className="mb-12 space-y-4" aria-labelledby="service-faq-title">
                <h2 id="service-faq-title" className="text-2xl font-heading font-bold">Časté dotazy</h2>
                {visibleFaqs.map((item) => (
                  <article key={item.question} className="rounded-2xl border border-border bg-section-alt p-5">
                    <h3 className="font-semibold text-foreground">{item.question}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
                  </article>
                ))}
                <p className="text-sm text-muted-foreground">
                  <a href="/cenik/" className="text-pastel-turquoise hover:underline">Ceník a kalkulačka výjezdu →</a>
                </p>
              </section>
            )}

            <div className="flex flex-col sm:flex-row gap-4 mt-12 bg-section-alt rounded-2xl p-6 items-center justify-between">
              <div>
                <h4 className="font-heading font-bold text-lg mb-1">Potřebujete tuto službu?</h4>
                <p className="text-muted-foreground text-sm">Zavolejte nám nebo vyplňte formulář.</p>
              </div>
              <a
                href="/#contact"
                className="px-8 py-3 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-all hover:scale-105 shadow-md whitespace-nowrap"
              >
                Objednat návštěvu
              </a>
            </div>

          </article>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ServiceDetail;
