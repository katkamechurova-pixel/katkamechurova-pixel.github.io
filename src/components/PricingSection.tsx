import { motion } from "framer-motion";

const prices = [
  { service: "Preventivní prohlídka", price: "od 600 Kč" },
  { service: "Vakcinace", price: "od 500 Kč" },
  { service: "Odčervení", price: "od 200 Kč" },
  { service: "Čipování", price: "od 800 Kč" },
  { service: "Odběr krve + laboratorní vyšetření", price: "od 900 Kč" },
  { service: "Ošetření drobného poranění", price: "od 500 Kč" },
  { service: "Konzultace zdravotního stavu", price: "od 400 Kč" },
  { service: "Paliativní péče", price: "individuálně" },
  { service: "Eutanazie v domácím prostředí", price: "od 1 500 Kč" },
  { service: "Výjezdový poplatek", price: "od 200 Kč" },
];

const PricingSection = () => (
  <section id="pricing" className="py-20">
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-heading font-bold text-center mb-4 text-foreground"
      >
        <span className="text-gradient">Ceník</span> služeb
      </motion.h2>
      <p className="text-center text-muted-foreground mb-10 text-sm">
        Ceny jsou orientační a mohou se lišit dle náročnosti ošetření a lokality výjezdu.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card rounded-2xl shadow-sm overflow-hidden"
      >
        {prices.map((p, i) => (
          <div
            key={p.service}
            className={`flex justify-between items-center px-6 py-4 ${
              i !== prices.length - 1 ? "border-b border-border" : ""
            } ${i === prices.length - 1 ? "bg-pastel-green-light font-semibold" : ""}`}
          >
            <span className="text-foreground text-sm md:text-base">{p.service}</span>
            <span className="text-pastel-green font-semibold text-sm md:text-base whitespace-nowrap ml-4">{p.price}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default PricingSection;
