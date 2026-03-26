import {
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { getServiceIcon } from "@/data/serviceIcons";
import { serviceSummaries } from "@/data/serviceSummaries";

const ServicesSection = () => (
  <section id="services" className="py-20 bg-section-alt">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-4 text-foreground">
        Nabízené <span className="text-gradient">služby</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        Kompletní veterinární péče přímo u vás doma – pro psy, kočky a drobná domácí zvířata.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {serviceSummaries.map((service) => {
          const Icon = getServiceIcon(service.iconName);

          return (
          <div key={service.slug}>
            <Link
              to={`/sluzby/${service.slug}`}
              className="group block bg-card rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 h-full border border-transparent hover:border-pastel-turquoise/10 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-pastel-turquoise-light flex items-center justify-center mb-4 group-hover:bg-pastel-turquoise/20 transition-colors duration-300">
                <Icon className="w-6 h-6 text-pastel-turquoise" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-pastel-turquoise transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {service.shortDesc}
              </p>
              <div className="mt-auto pt-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-pastel-turquoise opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Více informací
                </span>
                <div className="w-8 h-8 rounded-full bg-pastel-turquoise-light flex items-center justify-center text-pastel-turquoise group-hover:bg-pastel-turquoise group-hover:text-white transition-all duration-300">
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
          );
        })}
      </div>
    </div>
  </section>
);


export default ServicesSection;
