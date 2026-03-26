import {
  Stethoscope, Syringe, Bug, Cpu, Droplets, Scissors, MessageCircle, HeartHandshake, HousePlus, ScanLine,
  BriefcaseMedical, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Stethoscope, slug: "preventivni-prohlidky", title: "Preventivní prohlídky", desc: "Pravidelné kontroly zdravotního stavu vašeho mazlíčka." },
  { icon: Syringe, slug: "vakcinace", title: "Vakcinace", desc: "Očkování moderními vakcínami dle aktuálního vakcinačního schématu." },
  { icon: Bug, slug: "odcerveni", title: "Antiparazitární ochrana", desc: "Vnitřní i vnější antiparazitární ošetření." },
  { icon: Cpu, slug: "cipovani", title: "Čipování", desc: "Implantace mikročipu pro identifikaci zvířete." },
  { icon: Droplets, slug: "odbery-krve", title: "Odběry krve", desc: "Laboratorní diagnostika z pohodlí domova. Biochemické vyšetření s výsledky v den odběru. Spolupráce s laboratoří Veteo, případně německou laboratoří Laboklin" },
  { icon: ScanLine, slug: "sono-vysetreni", title: "Sono vyšetření", desc: "Ultrazvuková diagnostika pro přesné a šetrné vyšetření přenosným USG přístrojem." },
  { icon: BriefcaseMedical, slug: "osetreni-poraneni", title: "Ošetření poranění", desc: "Ošetření drobných ran a poranění." },
  { icon: MessageCircle, slug: "konzultace", title: "Konzultace", desc: "Poradenství ohledně zdraví, výživy a prevence." },
  { icon: HeartHandshake, slug: "paliativni-pece", title: "Paliativní péče", desc: "Citlivá péče o nemocná a stárnoucí zvířata." },
  { icon: HousePlus, slug: "eutanazie-doma", title: "Eutanazie doma", desc: "Důstojný a klidný odchod v domácím prostředí." },
  { icon: Scissors, slug: "kastrace", title: "Kastrace", desc: "Preventivní kastrace koček a psů, pouze v ordinaci v Benešově." },

];

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
        {services.map((s) => (
          <div
            key={s.title}
          >
            <Link
              to={`/sluzby/${s.slug}`}
              className="group block bg-card rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 h-full border border-transparent hover:border-pastel-turquoise/10 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-pastel-turquoise-light flex items-center justify-center mb-4 group-hover:bg-pastel-turquoise/20 transition-colors duration-300">
                <s.icon className="w-6 h-6 text-pastel-turquoise" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-pastel-turquoise transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {s.desc}
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
        ))}
      </div>
    </div>
  </section>
);


export default ServicesSection;
