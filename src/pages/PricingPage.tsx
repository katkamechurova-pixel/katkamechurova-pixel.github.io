import { useLocation } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { ArrowRight } from "lucide-react";
import DuckLogo from "@/components/DuckLogo";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TravelPriceCalculator from "@/components/TravelPriceCalculator";
import {
  ADDITIONAL_FEES,
  FIXED_FEE,
  formatCzk,
  getFreeKilometreAreas,
  getFreeKilometreAreasIn,
  getPublishedPrice,
  KILOMETER_FEE,
  PRICING_EXAMPLES,
  PRICING_VARIABILITY_NOTICE,
  SERVICE_CATEGORIES,
  VACCINE_PRICE_NOTICE,
  VACCINE_PRICES,
} from "@/data/pricing";
import { breadcrumbSchema, practiceReference, withPracticeGraph } from "@/data/structuredData";

const animalNames: Record<string, { cs: string; en: string }> = {
  dog: { cs: "pes", en: "dog" },
  cat: { cs: "kočka", en: "cat" },
  ferret: { cs: "fretka", en: "ferret" },
  rabbit: { cs: "králík", en: "rabbit" },
};

const PricingPage = () => {
  const isEnglish = useLocation().pathname.startsWith("/en/");
  const pageUrl = isEnglish
    ? "https://ducktorka.cz/en/pricing/"
    : "https://ducktorka.cz/cenik/";
  const locale = isEnglish ? "en-GB" : "cs-CZ";
  const freeKmAreas = getFreeKilometreAreas(isEnglish ? "en" : "cs");
  const freeKmAreasIn = getFreeKilometreAreasIn(isEnglish ? "en" : "cs");
  const title = isEnglish ? "What does a home visit cost?" : "Kolik stojí veterinář domů?";
  const description = isEnglish
    ? "See published service prices and calculate the call-out fee and return travel from the nearer base for an English-speaking mobile vet in Prague and the surrounding area."
    : "Podívejte se na přehled cen ošetření a spočítejte si návštěvu v kalkulačce. K péči se připočítává základní výjezdové od " + FIXED_FEE + " Kč a mimo bezplatné zóny také kilometrovné.";
  const pricedEntries = [...SERVICE_CATEGORIES, ...VACCINE_PRICES]
    .filter((entry) => getPublishedPrice(entry) !== null)
    .map((entry) => ({
      "@type": "Service",
      "@id": `${pageUrl}#price-${entry.id}`,
      name: isEnglish ? entry.labelEn : entry.labelCs,
      url: pageUrl,
      offers: {
        "@type": "Offer",
        priceCurrency: "CZK",
        price: getPublishedPrice(entry),
        description: entry.kind === "vaccine"
          ? (isEnglish ? "Indicative vaccine price; travel is charged separately. The total may vary with materials or examination." : "Orientační cena vakcíny; cestovné se účtuje zvlášť. Celková částka se odvíjí od potřebného vyšetření a spotřebního materiálu.")
          : entry.priceBasis === "from"
            ? (isEnglish ? "Published starting price; final price depends on the service." : "Orientační cena od; konečná částka závisí na rozsahu ošetření.")
            : (isEnglish ? "Published treatment price; travel is charged separately." : "Orientační cena ošetření; cestovné se účtuje zvlášť."),
        seller: practiceReference,
      },
    }));

  return (
    <>
      <Head>
        <title>{isEnglish ? "Pricing | Mobile Vet Prague | Ducktorka" : "Ceník a kalkulačka výjezdu | Ducktorka"}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={pageUrl} />
        <link rel="alternate" hrefLang="cs" href="https://ducktorka.cz/cenik/" />
        <link rel="alternate" hrefLang="en" href="https://ducktorka.cz/en/pricing/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ducktorka.cz/og-image-1.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(withPracticeGraph(
            {
              "@type": "WebPage",
              "@id": `${pageUrl}#webpage`,
              name: title,
              description,
              url: pageUrl,
              inLanguage: locale,
              about: practiceReference,
              mainEntity: pricedEntries,
            },
            breadcrumbSchema(pageUrl, [
              { name: isEnglish ? "Home" : "Domů", url: isEnglish ? "https://ducktorka.cz/en/" : "https://ducktorka.cz/" },
              { name: isEnglish ? "Pricing" : "Ceník", url: pageUrl },
            ]),
          ))}
        </script>
      </Head>

      {isEnglish ? (
        <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-lg border-b border-border/50">
          <div className="container mx-auto flex items-center justify-between py-3 px-4">
            <a href="/en/" className="flex items-center gap-2">
              <DuckLogo className="w-8 h-8" />
              <span className="font-heading font-bold text-lg text-gradient">Ducktorka<span className="text-pastel-pink">.cz</span></span>
            </a>
            <a href="/en/#contact" className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground">Book with me on WhatsApp</a>
          </div>
        </header>
      ) : <Navbar />}

      <main className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto max-w-4xl px-4">
          <nav aria-label={isEnglish ? "Breadcrumb" : "Drobečková navigace"} className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            <a href={isEnglish ? "/en/" : "/"} className="hover:text-foreground">{isEnglish ? "Home" : "Domů"}</a>
            <span aria-hidden="true">/</span>
            <span className="text-foreground">{isEnglish ? "Pricing" : "Ceník"}</span>
          </nav>
          <header className="mb-10">
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground leading-tight">{title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">{description}</p>
          </header>

          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            <article className="rounded-2xl bg-card border border-border p-5">
              <p className="text-sm text-muted-foreground">{isEnglish ? "Starting call-out fee" : "Základní poplatek za výjezd"}</p>
              <p className="mt-1 text-2xl font-heading font-bold">{formatCzk(FIXED_FEE, locale)}</p>
            </article>
            <article className="rounded-2xl bg-card border border-border p-5">
              <p className="text-sm text-muted-foreground">{isEnglish ? "Travel outside 0 km areas" : "Kilometrovné mimo vybrané oblasti"}</p>
              <p className="mt-1 text-2xl font-heading font-bold">{formatCzk(KILOMETER_FEE, locale)} / km / {isEnglish ? "direction" : "směr"}</p>
            </article>
            <article className="rounded-2xl bg-card border border-border p-5">
              <p className="text-sm text-muted-foreground">{freeKmAreas}</p>
              <p className="mt-1 text-lg font-heading font-bold">{isEnglish ? "0 km + starting fee" : "Pouze základní poplatek za výjezd"}</p>
            </article>
          </div>

          <TravelPriceCalculator language={isEnglish ? "en" : "cs"} />

          <section className="mt-8" aria-labelledby="pricing-examples-heading">
            <h2 id="pricing-examples-heading" className="text-2xl font-heading font-bold">
              {isEnglish ? "Example visit totals" : "Jak může vypadat cena návštěvy"}
            </h2>
            <p className="mt-2 mb-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              {isEnglish
                ? "These examples show how listed treatment prices and travel charges add up. Each total includes only the items shown; any additional examination, medicine or materials may change the final price. I will confirm the scope and total before the visit."
                : "Na těchto modelových příkladech vidíte, jak se cena skládá. Všechny počítají s návštěvou v oblasti bez kilometrovného (Praha 2, 3, 7, 8 a Benešov). Před každou návštěvou vám vždy předem potvrdím předpokládanou celkovou částku."}
            </p>
            <div className="grid gap-5 lg:grid-cols-2">
              {PRICING_EXAMPLES.map((example) => (
                <article key={example.id} className="rounded-2xl bg-card border border-border p-5 md:p-6">
                  <h3 className="text-xl font-heading font-bold text-foreground">
                    {isEnglish ? example.titleEn : example.titleCs}
                  </h3>
                  <div className="mt-4 space-y-3">
                    {example.lines.map((line) => (
                      <div key={line.labelEn} className="flex justify-between gap-4 border-b border-border/70 pb-2 text-sm">
                        <span className="text-muted-foreground">{isEnglish ? line.labelEn : line.labelCs}</span>
                        <span className="shrink-0 font-semibold text-foreground">{formatCzk(line.amountCzk, locale)}</span>
                      </div>
                    ))}
                    <div className="flex justify-between gap-4 pt-1">
                      <span className="font-semibold text-foreground">{isEnglish ? "Sum of listed items" : "Součet uvedených položek"}</span>
                      <span className="font-heading text-xl font-bold text-pastel-green">{formatCzk(example.totalCzk, locale)}</span>
                    </div>
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                    {isEnglish ? example.descriptionEn : example.descriptionCs}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-10 rounded-3xl bg-card border border-border p-6 md:p-8">
            <h2 className="text-2xl font-heading font-bold">{isEnglish ? "Published service prices" : "Ceník ošetření"}</h2>
            <p className="mt-2 mb-6 text-sm text-muted-foreground">
              {isEnglish
                ? `Treatment prices are separate from travel. ${PRICING_VARIABILITY_NOTICE.en}`
                : `K ceně ošetření se připočítává cestovné. ${PRICING_VARIABILITY_NOTICE.cs}`}
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border text-muted-foreground">
                    <th className="py-3 pr-4 font-semibold">{isEnglish ? "Service" : "Služba"}</th>
                    <th className="py-3 pr-4 font-semibold">{isEnglish ? "Published price" : "Orientační cena"}</th>
                    <th className="py-3 font-semibold">{isEnglish ? "Place" : "Místo"}</th>
                  </tr>
                </thead>
                <tbody>
                  {SERVICE_CATEGORIES.map((entry) => {
                    const price = getPublishedPrice(entry);
                    return (
                      <tr key={entry.id} className="border-b border-border/70">
                        <td className="py-3 pr-4 font-medium text-foreground">{isEnglish ? entry.labelEn : entry.labelCs}</td>
                        <td className="py-3 pr-4 text-pastel-green font-semibold">
                          {price === null
                            ? (isEnglish ? "By arrangement" : "Individuálně")
                            : (entry.priceBasis === "from" ? (isEnglish ? "from " : "od ") : "") + formatCzk(price, locale)}
                        </td>
                        <td className="py-3 text-muted-foreground">
                          {entry.offeredAtHome ? (isEnglish ? "Home visit" : "Doma") : (isEnglish ? "Benešov clinic" : "Ordinace Benešov")}
                        </td>
                      </tr>
                    );
                  })}
                  {ADDITIONAL_FEES.map((fee) => (
                    <tr key={fee.id} className="border-b border-border/70">
                      <td className="py-3 pr-4 font-medium text-foreground">{isEnglish ? fee.labelEn : fee.labelCs}</td>
                      <td className="py-3 pr-4 font-semibold text-pastel-green">{formatCzk(fee.priceCzk, locale)}</td>
                      <td className="py-3 text-muted-foreground">—</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-8 rounded-3xl bg-card border border-border p-6 md:p-8">
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-heading font-bold">{isEnglish ? "Vaccination price list" : "Ceník vakcín"}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{isEnglish ? VACCINE_PRICE_NOTICE.en : VACCINE_PRICE_NOTICE.cs}</p>
              </div>
              {!isEnglish && (
                <a href="/sluzby/vakcinace/" className="inline-flex items-center gap-1 text-sm font-semibold text-pastel-turquoise hover:underline">
                  Více o vakcinaci <ArrowRight className="h-4 w-4" />
                </a>
              )}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[420px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border text-muted-foreground">
                    <th className="py-3 pr-4 font-semibold">{isEnglish ? "Vaccine" : "Vakcína"}</th>
                    <th className="py-3 pr-4 font-semibold">{isEnglish ? "Animal" : "Zvíře"}</th>
                    <th className="py-3 font-semibold">{isEnglish ? "Indicative price" : "Orientační cena"}</th>
                  </tr>
                </thead>
                <tbody>
                  {VACCINE_PRICES.map((entry) => (
                    <tr key={entry.id} className="border-b border-border/70">
                      <td className="py-3 pr-4 font-medium text-foreground">{entry.productName}</td>
                      <td className="py-3 pr-4 text-muted-foreground">
                        {entry.species?.map((animal) => animalNames[animal]?.[isEnglish ? "en" : "cs"] ?? animal).join(", ")}
                      </td>
                      <td className="py-3 font-semibold text-pastel-green">{formatCzk(entry.publishedPriceCzk ?? 0, locale)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-8 rounded-3xl bg-section-alt border border-border p-6 md:p-8">
            <h2 className="text-xl font-heading font-bold">{isEnglish ? "How travel is calculated" : "Jak se počítá doprava"}</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {isEnglish ? (
                <>The starting call-out fee is <strong>{FIXED_FEE} CZK</strong>. In {freeKmAreasIn}, no kilometres are charged and only the starting fee applies. Elsewhere, the one-way Google Maps distance from the nearer base is charged in both directions at <strong>{KILOMETER_FEE} CZK per kilometre each way</strong>.</>
              ) : (
                <>Základní poplatek za výjezd je <strong>{FIXED_FEE} Kč</strong>. V {freeKmAreasIn} se další kilometrovné neúčtuje – platíte pouze tento základní výjezd. Do ostatních míst připočítáváme cestu tam i zpět z bližší základny (Praha 8 – Invalidovna nebo Benešov) podle Google Maps se sazbou <strong>{KILOMETER_FEE} Kč za kilometr</strong>.</>
              )}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {isEnglish
                ? "This page is an indicative price guide, not a final quote. The exact service, availability, any extra charges and total price are confirmed before the visit."
                : "Při domluvě návštěvy mi stačí popsat stav vašeho mazlíčka a uvést přesnou adresu. Vždy vám předem potvrdím termín i konečnou kalkulaci dopravy a péče."}
            </p>
          </section>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href={isEnglish ? "/en/#contact" : "/#contact"} className="rounded-full bg-accent px-7 py-3 font-semibold text-accent-foreground hover:opacity-90">
              {isEnglish ? "Request an appointment" : "Domluvit návštěvu"}
            </a>
            <a href={isEnglish ? "/cenik/" : "/en/pricing/"} className="rounded-full border border-border bg-card px-7 py-3 font-semibold text-foreground hover:bg-background">
              {isEnglish ? "Český ceník" : "English pricing"}
            </a>
            {!isEnglish && <a href="/co-osetrime-doma/" className="rounded-full border border-border bg-card px-7 py-3 font-semibold text-foreground hover:bg-background">Co lze ošetřit doma?</a>}
          </div>
        </div>
      </main>
      {isEnglish ? (
        <footer className="border-t border-border/50 bg-card py-8">
          <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground sm:flex-row">
            <span>Ducktorka.cz — MVDr. Kateřina Měchurová</span>
            <a href="/cenik/" className="hover:text-foreground">Český ceník</a>
          </div>
        </footer>
      ) : <Footer />}
    </>
  );
};

export default PricingPage;
