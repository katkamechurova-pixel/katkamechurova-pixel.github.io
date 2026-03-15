import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Vyplňte jméno").max(100),
  phone: z.string().trim().min(1, "Vyplňte telefon").max(20),
  email: z.string().trim().email("Neplatný e-mail").max(255),
  animalName: z.string().trim().min(1, "Vyplňte jméno zvířete").max(100),
  animalType: z.string().trim().min(1, "Vyplňte druh zvířete").max(50),
  description: z.string().trim().min(1, "Popište problém").max(1000),
});

type FormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const [form, setForm] = useState<FormData>({
    name: "", phone: "", email: "", animalName: "", animalType: "", description: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      result.error.errors.forEach((err) => {
        const key = err.path[0] as keyof FormData;
        fieldErrors[key] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const inputClasses = "w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow text-sm";

  return (
    <section id="contact" className="py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-heading font-bold text-center mb-12 text-foreground"
        >
          <span className="text-gradient">Kontakt</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading font-semibold text-lg text-foreground mb-6">Kontaktní údaje</h3>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-pastel-pink mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Telefon</p>
                  <a href="tel:+420123456789" className="text-muted-foreground hover:text-primary transition-colors">+420 123 456 789</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-pastel-pink mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">E-mail</p>
                  <a href="mailto:info@ducktorka.cz" className="text-muted-foreground hover:text-primary transition-colors">info@ducktorka.cz</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-pastel-pink mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Oblast působnosti</p>
                  <p className="text-muted-foreground">Praha a okolí (do 30 km)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-pastel-pink mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Provozní doba</p>
                  <p className="text-muted-foreground">Po–Pá: 8:00–18:00</p>
                  <p className="text-muted-foreground">So: 9:00–14:00</p>
                  <p className="text-muted-foreground text-sm">Po domluvě i mimo provozní dobu</p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-border h-48 bg-muted flex items-center justify-center">
              <iframe
                title="Oblast působnosti"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163539.3214847!2d14.2244!3d50.0755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b939c0970798b%3A0x400af0f66164090!2sPraha!5e0!3m2!1scs!2scz!4v1700000000000"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="bg-card rounded-2xl p-8 text-center shadow-sm">
                <div className="w-16 h-16 rounded-full bg-pastel-green-light flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🐥</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">Děkujeme!</h3>
                <p className="text-muted-foreground">Vaše zpráva byla odeslána. Ozveme se vám co nejdříve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-8 shadow-sm space-y-4">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Napište nám</h3>
                {(
                  [
                    { key: "name" as const, label: "Vaše jméno", placeholder: "Jan Novák" },
                    { key: "phone" as const, label: "Telefon", placeholder: "+420 ..." },
                    { key: "email" as const, label: "E-mail", placeholder: "jan@email.cz" },
                    { key: "animalName" as const, label: "Jméno zvířete", placeholder: "Rexík" },
                    { key: "animalType" as const, label: "Druh zvířete", placeholder: "Pes, kočka..." },
                  ]
                ).map((f) => (
                  <div key={f.key}>
                    <label className="block text-sm font-medium text-foreground mb-1">{f.label}</label>
                    <input
                      className={inputClasses}
                      placeholder={f.placeholder}
                      value={form[f.key]}
                      onChange={(e) => handleChange(f.key, e.target.value)}
                    />
                    {errors[f.key] && <p className="text-sm text-destructive mt-1">{errors[f.key]}</p>}
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Popis problému</label>
                  <textarea
                    className={`${inputClasses} min-h-[100px] resize-none`}
                    placeholder="Popište, co vašeho mazlíčka trápí..."
                    value={form.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                  />
                  {errors.description && <p className="text-sm text-destructive mt-1">{errors.description}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  Odeslat zprávu
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
