import { Home, Heart, Clock, Shield, Smile } from "lucide-react";

const benefits = [
  { icon: Heart, title: "Bez stresu z převozu", desc: "Váš mazlíček zůstává v bezpečí domova." },
  { icon: Home, title: "Pohodlí domova", desc: "Péče tam, kde se váš miláček cítí nejlépe." },
  { icon: Smile, title: "Individuální přístup", desc: "Plná pozornost jen vašemu zvířátku." },
  { icon: Shield, title: "Šetrné zacházení", desc: "Empatická péče s důrazem na klid." },
  { icon: Clock, title: "Časová flexibilita", desc: "Termíny přizpůsobené vašemu rozvrhu." },
];

const BenefitsSection = () => (
  <section className="py-20 bg-section-alt">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12 text-foreground">
        Proč zvolit <span className="text-gradient">Ducktorku</span>?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="bg-card rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-full bg-pastel-green-light flex items-center justify-center mx-auto mb-4">
              <b.icon className="w-6 h-6 text-pastel-green" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">{b.title}</h3>
            <p className="text-sm text-muted-foreground">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
