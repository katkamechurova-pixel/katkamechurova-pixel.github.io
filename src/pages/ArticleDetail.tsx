import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articles } from "@/data/articles";

const ArticleDetail = () => {
  const { articleSlug } = useParams<{ articleSlug: string }>();
  const article = articles.find((a) => a.slug === articleSlug);

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

  return (
    <>
      <Helmet>
        <title>{article.metaTitle}</title>
        <meta name="description" content={article.metaDescription} />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen pt-28 md:pt-36 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 uppercase tracking-wider text-sm font-semibold">
            <ArrowLeft className="w-4 h-4" /> Zpět
          </Link>

          <article>
            <div className="mb-10 text-center">
              <div className="flex justify-center items-center gap-2 text-pastel-turquoise font-semibold text-sm mb-6">
                <Calendar className="w-4 h-4" />
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

            <div className="prose prose-lg dark:prose-invert prose-p:leading-relaxed prose-headings:font-heading prose-a:text-primary max-w-3xl mx-auto prose-img:rounded-2xl">
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>
            
          </article>

        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default ArticleDetail;
