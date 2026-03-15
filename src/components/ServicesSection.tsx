import { motion } from "framer-motion";
import {
  Stethoscope, Syringe, Bug, Cpu, Droplets, Scissors, MessageCircle, HeartHandshake, HousePlus, ScanLine
} from "lucide-react";

const services = [
  { icon: Stethoscope, title: "Preventivní prohlídky", desc: "Pravidelné kontroly zdravotního stavu vašeho mazlíčka." },
  { icon: Syringe, title: "Vakcinace", desc: "Očkování dle aktuálního vakcinačního schématu." },
  { icon: Bug, title: "Odčervení", desc: "Vnitřní i vnější antiparazitární ošetření." },
  { icon: Cpu, title: "Čipování", desc: "Implantace mikročipu pro identifikaci zvířete." },
  { icon: Droplets, title: "Odběry krve", desc: "Laboratorní diagnostika z pohodlí domova." },
  { icon: ScanLine, title: "Sono vyšetření", desc: "Ultrazvuková diagnostika pro přesné a šetrné vyšetření." },
  { icon: Scissors, title: "Ošetření poranění", desc: "Ošetření drobných ran a poranění." },
  { icon: MessageCircle, title: "Konzultace", desc: "Poradenství ohledně zdraví, výživy a prevence." },
  { icon: HeartHandshake, title: "Paliativní péče", desc: "Citlivá péče o nemocná a stárnoucí zvířata." },
  { icon: HousePlus, title: "Eutanazie doma", desc: "Důstojný a klidný odchod v domácím prostředí." },
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
            className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="w-10 h-10 rounded-xl bg-pastel-turquoise-light flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <s.icon className="w-5 h-5 text-pastel-turquoise" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-1">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
