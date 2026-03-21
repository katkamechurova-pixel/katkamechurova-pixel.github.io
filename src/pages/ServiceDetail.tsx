import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/data/services";

const ServiceDetail = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = services.find((s) => s.slug === serviceSlug);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24 pb-12">
        <Navbar />
        <h1 className="text-3xl font-bold mb-4">Služba nenalezena</h1>
        <Link to="/" className="text-primary hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Zpět na úvodní stránku
        </Link>
        <Footer />
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        {/* Potentially add OpenGraph, Canonical URLs, etc here */}
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen pt-32 pb-20 overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          
          {/* Back link */}
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 uppercase tracking-wider text-sm font-semibold">
            <ArrowLeft className="w-4 h-4" /> Zpět na přehled
          </Link>

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

            <div className="prose prose-lg dark:prose-invert prose-p:leading-relaxed prose-headings:font-heading prose-a:text-primary max-w-none mb-12">
              <p>{service.longDescription}</p>
            </div>

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
