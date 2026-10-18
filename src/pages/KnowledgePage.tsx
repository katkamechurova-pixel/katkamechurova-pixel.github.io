import { useLocation } from "react-router-dom";
import { Head } from "vite-react-ssg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { knowledgePages } from "@/data/knowledgePages";
import { breadcrumbSchema, practiceReference, withPracticeGraph } from "@/data/structuredData";

const KnowledgePage = () => {
  const { pathname } = useLocation();
  const slug = pathname.split("/").filter(Boolean).pop();
  const page = knowledgePages.find((item) => item.slug === slug);

  if (!page) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-36 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-heading font-bold">Stránka nenalezena</h1>
            <a href="/" className="mt-5 inline-block text-pastel-turquoise hover:underline">Zpět na úvodní stránku</a>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const pageUrl = "https://ducktorka.cz/" + page.slug + "/";
  const faqItems = page.faqGroups?.flatMap((group) => group.items) ?? [];
  const pageSchema = page.slug === "casto-kladene-dotazy"
    ? {
      "@type": "FAQPage",
      "@id": `${pageUrl}#webpage`,
      name: page.metaTitle,
      description: page.metaDescription,
      url: pageUrl,
      inLanguage: "cs-CZ",
      about: practiceReference,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    }
    : {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      name: page.metaTitle,
      description: page.metaDescription,
      url: pageUrl,
      inLanguage: "cs-CZ",
      about: practiceReference,
      ...(page.capabilityRows ? {
        mainEntity: {
          "@type": "ItemList",
          itemListElement: page.capabilityRows.map((row, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Thing",
              name: row.service,
              description: `${row.availability}. ${row.note}`,
              ...(row.href ? { url: `https://ducktorka.cz${row.href}` } : {}),
            },
          })),
        },
      } : {}),
    };
  const schema = withPracticeGraph(
    pageSchema,
    breadcrumbSchema(pageUrl, [
      { name: "Domů", url: "https://ducktorka.cz/" },
      { name: page.title, url: pageUrl },
    ]),
  );
  const relatedServices = page.slug === "veterinar-pro-bazlive-kocky"
    ? [
      { label: "Vakcinace", href: "/sluzby/vakcinace/" },
      { label: "Odběry krve", href: "/sluzby/odbery-krve/" },
      { label: "Ultrazvukové vyšetření", href: "/sluzby/sono-vysetreni/" },
    ]
    : page.slug === "veterinar-pro-seniory"
      ? [
        { label: "Preventivní prohlídky", href: "/sluzby/preventivni-prohlidky/" },
        { label: "Odběry krve", href: "/sluzby/odbery-krve/" },
        { label: "Ultrazvukové vyšetření", href: "/sluzby/sono-vysetreni/" },
        { label: "Paliativní péče", href: "/sluzby/paliativni-pece/" },
      ]
      : [];

  return (
    <>
      <Head>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={page.metaTitle} />
        <meta property="og:description" content={page.metaDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ducktorka.cz/og-image-1.jpg" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Head>

      <Navbar />
      <main className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4">
          <nav aria-label="Drobečková navigace" className="max-w-4xl mx-auto flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <a href="/" className="hover:text-foreground">Domů</a>
            <span aria-hidden="true">/</span>
            <span className="text-foreground">{page.title}</span>
          </nav>
          <header className="max-w-4xl mx-auto mb-10">
            <h1 className="text-3xl md:text-5xl font-heading font-bold leading-tight text-foreground">{page.title}</h1>
            <p className="mt-5 text-lg md:text-xl leading-relaxed text-muted-foreground">{page.intro}</p>
          </header>

          {page.capabilityRows && (
            <section aria-label="Přehled služeb" className="max-w-4xl mx-auto mb-10">
              <h2 className="text-2xl font-heading font-bold mb-5">Co zvládneme doma a s čím do ordinace</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {page.capabilityRows.map((row) => (
                  <article key={row.service} className="rounded-2xl bg-card border border-border p-5 shadow-sm">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className="font-heading font-bold text-foreground">
                        {row.href ? <a href={row.href} className="hover:text-pastel-turquoise">{row.service}</a> : row.service}
                      </h3>
                      <span className="rounded-full bg-pastel-turquoise-light px-3 py-1 text-xs font-semibold text-foreground">{row.availability}</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{row.note}</p>
                  </article>
                ))}
              </div>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                O tom, zda je domácí ošetření pro vaše zvíře vhodné, rozhodne veterinářka podle jeho zdravotního stavu.
              </p>
            </section>
          )}

          <div className="max-w-4xl mx-auto space-y-6">
            {page.sections.map((section) => (
              <section key={section.heading} className="rounded-3xl bg-card border border-border p-6 md:p-8 shadow-sm">
                <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground">{section.heading}</h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-muted-foreground leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {relatedServices.length > 0 && (
            <nav aria-label="Související služby" className="max-w-4xl mx-auto mt-8 flex flex-wrap gap-3">
              {relatedServices.map((service) => (
                <a key={service.href} href={service.href} className="rounded-full border border-border bg-card px-5 py-2 text-sm font-semibold text-foreground hover:bg-section-alt">
                  {service.label}
                </a>
              ))}
            </nav>
          )}

          {page.faqGroups && (
            <section className="max-w-4xl mx-auto mt-10">
              <h2 className="text-2xl font-heading font-bold mb-6">Otázky a odpovědi</h2>
              <div className="space-y-8">
                {page.faqGroups.map((group) => (
                  <div key={group.heading}>
                    <h3 className="text-lg font-heading font-bold mb-3 text-pastel-turquoise">{group.heading}</h3>
                    <div className="grid gap-3">
                      {group.items.map((item) => (
                        <article key={item.question} className="rounded-2xl bg-card border border-border p-5">
                          <h4 className="font-semibold text-foreground">{item.question}</h4>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
                        </article>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="max-w-4xl mx-auto mt-10 rounded-3xl bg-section-alt border border-border p-6 md:p-8">
            <h2 className="text-xl font-heading font-bold">Domluvíme návštěvu u vás doma?</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Zavolejte nám nebo napište, kde bydlíte, jaké zvíře máte a co ho trápí. Společně probereme vhodnou péči, termín i cenu návštěvy.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="tel:+420734231444" className="rounded-full bg-pastel-turquoise px-6 py-3 font-semibold text-white hover:opacity-90">Zavolat</a>
              <a href="https://wa.me/420734231444" target="_blank" rel="noopener noreferrer" className="rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground hover:opacity-90">Napsat na WhatsApp</a>
              <a href="/cenik/" className="rounded-full border border-border bg-card px-6 py-3 font-semibold text-foreground hover:bg-background">Ceník a kalkulačka</a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default KnowledgePage;
