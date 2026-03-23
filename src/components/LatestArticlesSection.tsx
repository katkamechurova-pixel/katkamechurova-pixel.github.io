import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";
import { ArrowRight, Calendar } from "lucide-react";

const LatestArticlesSection = () => {
  // Take only the latest 3 articles (assuming the array is pre-sorted or we just slice the newest)
  const recentArticles = articles.slice(0, 3);

  return (
    <section id="articles" className="py-20 lg:py-24">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-foreground">
              Zajímavosti a <span className="text-gradient">články</span>
            </h2>
            <p className="text-muted-foreground">
              Užitečné rady, tipy a informace o veterinární péči a zdraví vašich mazlíčků, psané s láskou a pochopením.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {recentArticles.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex"
            >
              <Link
                to={`/clanky/${article.slug}`}
                className="flex flex-col bg-card rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-border w-full"
              >
                <div className="h-56 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />
                  <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    loading="lazy"
                  />
                </div>
                
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-pastel-turquoise font-semibold text-xs mb-4">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center text-primary font-semibold text-sm mt-auto">
                    Číst celý článek <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestArticlesSection;
