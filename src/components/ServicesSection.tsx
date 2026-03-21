import { motion } from "framer-motion";
import {
  Stethoscope, Syringe, Bug, Cpu, Droplets, Scissors, MessageCircle, HeartHandshake, HousePlus, ScanLine,
  BriefcaseMedical
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Stethoscope, slug: "preventivni-prohlidky", title: "Preventivní prohlídky", desc: "Pravidelné kontroly zdravotního stavu vašeho mazlíčka." },
  { icon: Syringe, slug: "vakcinace", title: "Vakcinace", desc: "Očkování moderními vakcínami dle aktuálního vakcinačního schématu." },
  { icon: Bug, slug: "odcerveni", title: "Odčervení", desc: "Vnitřní i vnější antiparazitární ošetření." },
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
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-heading font-bold text-center mb-4 text-foreground"
      >
        Nabízené <span className="text-gradient">služby</span>
      </motion.h2>
      <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        Kompletní veterinární péče přímo u vás doma – pro psy, kočky a drobná domácí zvířata.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <Link
              to={`/sluzby/${s.slug}`}
              className="block bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group h-full"
            >
              <div className="w-10 h-10 rounded-xl bg-pastel-turquoise-light flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <s.icon className="w-5 h-5 text-pastel-turquoise" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
