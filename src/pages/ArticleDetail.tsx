import { useParams, Link } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articleDetails } from "@/data/articleDetails";

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
        <Link to="/" className="text-primary hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Zpět na úvodní stránku
        </Link>
        <Footer />
      </div>
    );
  }

  const pageUrl = `https://ducktorka.cz/clanky/${article.slug}/`;

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
        <meta property="og:image" content={article.imageUrl} />
        <meta property="article:published_time" content={article.date} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.metaTitle} />
        <meta name="twitter:description" content={article.metaDescription} />
        <meta name="twitter:image" content={article.imageUrl} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": article.title,
            "description": article.excerpt,
            "image": article.imageUrl,
            "datePublished": article.date,
            "author": {
              "@type": "Person",
              "name": "MVDr. Kateřina Měchurová",
              "url": "https://ducktorka.cz"
            },
            "publisher": {
              "@type": "VeterinaryCare",
              "name": "Ducktorka – Výjezdová veterinární péče",
              "url": "https://ducktorka.cz",
              "logo": {
                "@type": "ImageObject",
                "url": "https://ducktorka.cz/og-image-1.jpg"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Nezvalova 989",
                "addressLocality": "Benešov",
                "postalCode": "25601",
                "addressCountry": "CZ"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": pageUrl
            },
            publicAccess: false
          })}
        </script>
      </Head>

      <Navbar />

      <main className="min-h-screen pt-28 md:pt-36 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">

          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 uppercase tracking-wider text-sm font-semibold">
            <ArrowLeft className="w-4 h-4" /> Zpět
          </Link>

          <article>
            <div className="mb-10 text-center">
              <div className="flex justify-center items-center gap-2 text-pastel-turquoise font-semibold text-sm mb-6">
                <CalendarIcon />
                <span>{article.date}</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
                {article.title}
              </h1>
              <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
                {article.excerpt}
              </p>
            </div>

            <div className="w-full aspect-[21/9] md:aspect-[3/1] bg-muted rounded-[2rem] overflow-hidden shadow-lg mb-16 relative">
              <div className="absolute inset-0 bg-black/10 z-10" />
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="rich-content max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: article.html }} />

          </article>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default ArticleDetail;
