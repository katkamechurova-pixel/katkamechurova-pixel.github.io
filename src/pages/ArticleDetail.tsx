import { useParams, Link } from "react-router-dom"
import { Head } from "vite-react-ssg";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articleDetails } from "@/data/articleDetails";
import { practiceReference, withPracticeGraph } from "@/data/structuredData";

const CalendarIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ArticleDetail = () => {
  const { articleSlug } = useParams<{ articleSlug: string }>();
  const article = articleDetails.find((a) => a.slug === articleSlug);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24 pb-12">
        <Navbar />
        <h1 className="text-3xl font-bold mb-4">Článek nenalezen</h1>
        <a href="/" className="text-primary hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Zpět na úvodní stránku
        </a>
        <Footer />
      </div>
    );
  }

  const pageUrl = `https://ducktorka.cz/clanky/${article.slug}/`;
  const absoluteImageUrl = new URL(article.imageUrl, "https://ducktorka.cz/").href;

  return (
    <>
      <Head>
        <title>{article.metaTitle}</title>
        <meta name="description" content={article.metaDescription} />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={article.metaTitle} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={absoluteImageUrl} />
        <meta property="article:published_time" content={article.datePublishedIso} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.metaTitle} />
        <meta name="twitter:description" content={article.metaDescription} />
        <meta name="twitter:image" content={absoluteImageUrl} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(withPracticeGraph(
            {
              "@type": "WebPage",
              "@id": `${pageUrl}#webpage`,
              name: article.metaTitle,
              description: article.metaDescription,
              url: pageUrl,
              inLanguage: "cs-CZ",
              about: practiceReference,
              mainEntity: { "@id": `${pageUrl}#article` },
            },
            {
              "@type": "BlogPosting",
              "@id": `${pageUrl}#article`,
              headline: article.title,
              description: article.excerpt,
              image: absoluteImageUrl,
              datePublished: article.datePublishedIso,
              author: {
                "@type": "Person",
                name: "MVDr. Kateřina Měchurová",
                url: "https://ducktorka.cz/",
              },
              publisher: practiceReference,
              mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
            },
          ))}
        </script>
      </Head>

      <Navbar />

      <main className="min-h-screen pt-28 md:pt-36 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">

          <a href="/" className="inline-flex items-center gap-2 text-foreground/75 hover:text-foreground transition-colors mb-8 uppercase tracking-wider text-sm font-semibold">
            <ArrowLeft className="w-4 h-4" /> Zpět
          </a>

          <article>
            <div className="mb-10 text-center">
              {article.category && (
                <p className="inline-flex items-center rounded-full border border-emerald-600/20 bg-pastel-turquoise-light px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-emerald-800 mb-5">
                  {article.category}
                </p>
              )}
              <div className="flex justify-center items-center gap-2 text-emerald-800 font-semibold text-sm mb-6">
                <CalendarIcon />
                <span>{article.date}</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
                {article.title}
              </h1>
              <p className="text-lg md:text-xl text-foreground/85 font-normal max-w-2xl mx-auto leading-relaxed">
                {article.excerpt}
              </p>
            </div>

            <figure className={`${article.category ? "mx-auto max-w-3xl" : "w-full"} mb-14`}>
              <div className={`w-full ${article.category ? "aspect-[4/3]" : "aspect-[21/9] md:aspect-[3/1]"} bg-muted rounded-[2rem] overflow-hidden shadow-lg relative`}>
                <div className={`absolute inset-0 z-10 ${article.category ? "bg-transparent" : "bg-black/10"}`} />
                <img
                  src={article.imageUrl}
                  alt={article.imageAlt ?? article.title}
                  className={`w-full h-full ${article.category ? "object-contain" : "object-cover"}`}
                />
              </div>
              {article.imageCaption && (
                <figcaption className="mt-3 text-center text-sm text-foreground/75">
                  {article.imageCaption}
                </figcaption>
              )}
            </figure>

            {article.caseFacts && (
              <section aria-label="O případu na první pohled" className="mx-auto mb-14 max-w-3xl">
                <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.16em] text-foreground/70">
                  Případ ve zkratce
                </p>
                <dl className="grid gap-3 sm:grid-cols-3">
                  {article.caseFacts.map((fact) => (
                    <div key={fact.label} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                      <dt className="text-xs font-bold uppercase tracking-[0.12em] text-emerald-800">
                        {fact.label}
                      </dt>
                      <dd className="mt-2 text-sm font-semibold leading-relaxed text-foreground">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}

            <div className="rich-content max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: article.html }} />

          </article>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default ArticleDetail;
