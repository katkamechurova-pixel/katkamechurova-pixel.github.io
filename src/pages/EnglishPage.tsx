import { Head } from "vite-react-ssg";
import {
  Bug, Cpu, Droplets, HeartHandshake, HousePlus,
  MessageCircle, ScanLine, Scissors, Stethoscope, Syringe,
  Home, Heart, type LucideIcon,
} from "lucide-react";
import DuckLogo from "@/components/DuckLogo";
import heroImageMd from "@/assets/hero-v11-md.webp";
import { FIXED_FEE, KILOMETER_FEE } from "@/data/constants";

// WhatsApp SVG — same as used in Footer.tsx
const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.541 4.189 1.567 6.014L0 24l6.105-1.599a11.802 11.802 0 005.94 1.597h.005c6.632 0 12.029-5.396 12.032-12.03a11.8 11.8 0 00-3.483-8.484" />
  </svg>
);

// ─── Navbar ──────────────────────────────────────────────────────────────────

const EnNavbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-card/85 backdrop-blur-lg border-b border-border/50">
    <div className="container mx-auto flex items-center justify-between py-3 px-4">
      <a href="/en/" className="flex items-center gap-2">
        <DuckLogo className="w-8 h-8" />
        <span className="font-heading font-bold text-lg text-gradient">
          Ducktorka<span className="text-pastel-pink">.cz</span>
        </span>
      </a>
      <a
        href="https://wa.me/420734231444"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-5 py-2 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
      >
        Book via WhatsApp
      </a>
    </div>
  </nav>
);

// ─── Hero ────────────────────────────────────────────────────────────────────

const EnHero = () => (
  <section id="hero" className="relative min-h-[100svh] overflow-hidden flex items-center pt-20">
    <img
      src={heroImageMd}
      alt=""
      className="absolute inset-0 w-full h-full object-cover object-[center_top_20%] md:object-bottom"
      loading="eager"
      fetchpriority="high"
    />
    <div className="absolute inset-0 bg-background/60 md:bg-transparent" />
    <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/40 to-background/95 md:bg-gradient-to-r md:from-background/95 md:via-background/60 md:to-transparent" />
    <div className="relative z-10 container mx-auto px-4 py-12 md:py-24">
      <div className="max-w-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-5 mb-6 md:mb-8">
          <DuckLogo className="w-16 h-16 md:w-24 md:h-24 shrink-0 drop-shadow-md" />
          <span className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-gradient">
            Ducktorka<span className="text-pastel-pink">.cz</span>
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground leading-snug mb-4">
          Mobile Vet in Prague — We Come to You
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-8 font-light max-w-xl">
          Professional home-visit veterinary care, in English.
        </p>
        <p className="text-xl md:text-2xl font-heading font-bold text-foreground/90 mb-8">
          MVDr. Kateřina Měchurová
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://wa.me/420734231444"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-3 px-8 py-3.5 rounded-full bg-accent text-accent-foreground font-semibold text-lg hover:opacity-90 transition-all hover:scale-105 shadow-md"
          >
            <WhatsAppIcon />
            Book via WhatsApp
          </a>
          <a
            href="#services"
            className="inline-flex justify-center items-center px-8 py-3.5 rounded-full bg-card/90 text-foreground font-semibold text-base border border-border hover:bg-card transition-all hover:scale-105 shadow-sm"
          >
            See our services
          </a>
        </div>
      </div>
    </div>
  </section>
);

// ─── Benefits ────────────────────────────────────────────────────────────────

const benefits: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: Home,
    title: "No waiting room",
    desc: "Your pet stays calm in the comfort of their own home.",
  },
  {
    Icon: MessageCircle,
    title: "Communication in English",
    desc: "Full consultation and follow-up in English.",
  },
  {
    Icon: Heart,
    title: "Less stress for your pet",
    desc: "Familiar surroundings mean better diagnostics and easier treatment.",
  },
];

const EnBenefits = () => (
  <section className="py-16 bg-section-alt">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-heading font-bold text-center mb-10">
        <span className="text-gradient">Why</span>{" "}
        <span className="text-foreground">a home visit?</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="flex flex-col items-center text-center gap-3 p-6 bg-card rounded-2xl border border-border"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <b.Icon className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-heading font-bold text-foreground">{b.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── About ───────────────────────────────────────────────────────────────────

const EnAbout = () => (
  <section id="about" className="py-20">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-lg aspect-[3/4] relative">
            <img
              src="/about-photo-1-md.webp"
              alt="MVDr. Kateřina Měchurová"
              className="w-full h-full object-cover absolute inset-0"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-pastel-pink-light opacity-60 -z-10" />
          <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-pastel-turquoise-light opacity-60 -z-10" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            <span className="text-gradient">About</span>{" "}
            <span className="text-foreground">the vet</span>
          </h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            I'm{" "}
            <strong className="text-foreground">MVDr. Kateřina Měchurová</strong>,
            a veterinarian with a passion for animals and a belief that veterinary
            care can be gentle and stress-free.
          </p>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            I graduated from the Veterinary University of Brno and gained
            experience in both clinical and field practice. During my studies I
            completed two internships in the USA — at the{" "}
            <strong className="text-foreground">
              Animal Wellness and Rehabilitation Center
            </strong>{" "}
            and the{" "}
            <strong className="text-foreground">
              Blackford Veterinary Referral Hospital
            </strong>
            , both in Tennessee. Witnessing how stressful vet visits can be for
            animals inspired me to found Ducktorka.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold">
              🇺🇸 Trained in Tennessee, USA
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold">
              🇬🇧 Speaks English
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── Services ────────────────────────────────────────────────────────────────

const enServices: { Icon: LucideIcon; name: string; desc: string }[] = [
  { Icon: Stethoscope, name: "Wellness Exams",       desc: "Routine health checks for dogs and cats" },
  { Icon: Syringe,     name: "Vaccinations",          desc: "Up-to-date vaccines following current protocols" },
  { Icon: Bug,         name: "Parasite Prevention",   desc: "Internal and external antiparasitic treatment" },
  { Icon: Cpu,         name: "Microchipping",         desc: "Chip implantation and EU pet passport" },
  { Icon: Droplets,    name: "Blood Tests",            desc: "Lab diagnostics with same-day results" },
  { Icon: ScanLine,    name: "Ultrasound (Sono)",     desc: "Portable ultrasound diagnostics at your home" },
  { Icon: Scissors,    name: "Wound Care",             desc: "Treatment of minor injuries and wounds" },
  { Icon: MessageCircle, name: "Consultations",       desc: "Health, nutrition, and prevention advice" },
  { Icon: HeartHandshake, name: "Palliative Care",    desc: "Compassionate support for sick and aging animals" },
  { Icon: HousePlus,   name: "Home Euthanasia",       desc: "Peaceful, dignified farewell in familiar surroundings" },
  { Icon: Scissors,    name: "Neutering/Spaying",     desc: "Preventive procedure — at the Benešov clinic only" },
];

const EnServices = () => (
  <section id="services" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12">
        <span className="text-gradient">Our</span>{" "}
        <span className="text-foreground">services</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {enServices.map((s) => (
          <div
            key={s.name}
            className="flex items-start gap-4 p-5 bg-card rounded-2xl border border-border"
          >
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
              <s.Icon className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-1">{s.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Coverage ────────────────────────────────────────────────────────────────

const pragueAreas = [
  { district: "Praha 2", neighborhoods: ["Vinohrady", "Vyšehrad", "Nové Město"] },
  { district: "Praha 3", neighborhoods: ["Žižkov", "Jarov"] },
  { district: "Praha 7", neighborhoods: ["Holešovice", "Letná", "Bubny"] },
  { district: "Praha 8", neighborhoods: ["Karlín", "Libeň", "Kobylisy", "Bohnice"] },
];

const EnCoverage = () => (
  <section id="coverage" className="py-20 bg-section-alt">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-4">
        <span className="text-gradient">Where</span>{" "}
        <span className="text-foreground">we travel</span>
      </h2>
      <p className="text-center text-muted-foreground mb-10">
        We cover Prague and the surrounding region. Below are the Prague districts we visit most often.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {pragueAreas.map((area) => (
          <div key={area.district} className="bg-card rounded-2xl border border-border p-5">
            <h3 className="font-heading font-bold text-foreground mb-3">{area.district}</h3>
            <ul className="space-y-1">
              {area.neighborhoods.map((n) => (
                <li key={n} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {n}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-muted-foreground">
        We also cover areas around Prague — Jesenice, Říčany, Průhonice, Benešov and more.{" "}
        <a
          href="https://wa.me/420734231444"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          Ask us about your area.
        </a>
      </p>
    </div>
  </section>
);

// ─── Pricing ─────────────────────────────────────────────────────────────────

const EnPricing = () => {
  const pragueEstimate = FIXED_FEE + 7 * KILOMETER_FEE; // Praha 7 example (~7 km)
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
          <span className="text-gradient">Transparent</span>{" "}
          <span className="text-foreground">pricing</span>
        </h2>
        <p className="text-muted-foreground mb-10">No surprises. The exact fee is confirmed at booking.</p>
        <div className="bg-card rounded-3xl border border-border p-8 text-left space-y-5">
          <div className="flex justify-between items-center pb-5 border-b border-border">
            <div>
              <p className="font-heading font-bold text-foreground">Base visit fee</p>
              <p className="text-sm text-muted-foreground">Examination + call-out charge</p>
            </div>
            <span className="font-heading font-bold text-xl text-foreground">{FIXED_FEE} CZK</span>
          </div>
          <div className="flex justify-between items-center pb-5 border-b border-border">
            <div>
              <p className="font-heading font-bold text-foreground">Travel fee</p>
              <p className="text-sm text-muted-foreground">Per kilometre from Benešov</p>
            </div>
            <span className="font-heading font-bold text-xl text-foreground">{KILOMETER_FEE} CZK/km</span>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-heading font-bold text-foreground">Prague visit (example)</p>
              <p className="text-sm text-muted-foreground">
                Praha 7 — {FIXED_FEE} + 7&thinsp;&times;&thinsp;{KILOMETER_FEE} CZK
              </p>
            </div>
            <span className="font-heading font-bold text-xl text-accent">~{pragueEstimate} CZK</span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          Prices for individual procedures confirmed on request. 1 EUR ≈ 25 CZK.
        </p>
      </div>
    </section>
  );
};

// ─── Contact ─────────────────────────────────────────────────────────────────

const EnContact = () => (
  <section id="contact" className="py-20 bg-section-alt">
    <div className="container mx-auto px-4 text-center max-w-2xl">
      <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
        <span className="text-gradient">Book</span>{" "}
        <span className="text-foreground">an appointment</span>
      </h2>
      <p className="text-muted-foreground mb-10">
        We respond in English — usually within a few hours on business days.
      </p>
      <div className="mb-10">
        <a
          href="https://wa.me/420734231444"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center items-center gap-3 px-10 py-4 rounded-full bg-accent text-accent-foreground font-semibold text-lg hover:opacity-90 transition-all hover:scale-105 shadow-md"
        >
          <WhatsAppIcon />
          Message us on WhatsApp
        </a>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-muted-foreground">
        <a href="tel:+420734231444" className="hover:text-foreground transition-colors">
          📞 +420 734 231 444
        </a>
        <a href="mailto:ducktorka@outlook.com" className="hover:text-foreground transition-colors">
          ✉️ ducktorka@outlook.com
        </a>
      </div>
    </div>
  </section>
);

// ─── Footer ──────────────────────────────────────────────────────────────────

const EnFooter = () => (
  <footer className="bg-card border-t border-border/50 py-8">
    <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <DuckLogo className="w-6 h-6" />
        <span className="font-heading font-semibold text-foreground">Ducktorka.cz</span>
        <span>— MVDr. Kateřina Měchurová</span>
      </div>
      <div className="flex items-center gap-4">
        <span>© {new Date().getFullYear()}</span>
        <a href="/" className="hover:text-foreground transition-colors">
          Česká verze
        </a>
      </div>
    </div>
  </footer>
);

// ─── Page ────────────────────────────────────────────────────────────────────

const EnglishPage = () => (
  <>
    <Head>
      <title>Mobile Vet Prague | Home Visit Veterinary Care | Ducktorka</title>
      <meta
        name="description"
        content="English-speaking mobile vet in Prague. Dr. Měchurová visits your home in Praha 2, 3, 7, 8 and surrounding areas. Professional care for dogs & cats. Book via WhatsApp."
      />
      <link rel="canonical" href="https://ducktorka.cz/en/" />
      <link rel="alternate" hrefLang="cs" href="https://ducktorka.cz/" />
      <link rel="alternate" hrefLang="en" href="https://ducktorka.cz/en/" />
      <link rel="alternate" hrefLang="x-default" href="https://ducktorka.cz/" />
    </Head>
    <EnNavbar />
    <main>
      <EnHero />
      <EnBenefits />
      <EnAbout />
      <EnServices />
      <EnCoverage />
      <EnPricing />
      <EnContact />
    </main>
    <EnFooter />
  </>
);

export default EnglishPage;
