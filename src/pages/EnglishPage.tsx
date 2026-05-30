import { Head } from "vite-react-ssg";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  Bug, Cpu, Droplets, HeartHandshake, HousePlus,
  MessageCircle, ScanLine, Scissors, Stethoscope, Syringe,
  Home, Heart, type LucideIcon,
} from "lucide-react";
import DuckLogo from "@/components/DuckLogo";
import heroImageMd from "@/assets/hero-v11-md.webp";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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

// Remaining sections added in Tasks 4–6

const EnglishPage = () => (
  <>
    <Head>
      <title>Mobile Vet Prague | Home Visit Veterinary Care | Ducktorka</title>
      <meta
        name="description"
        content="English-speaking mobile vet in Prague. Dr. Měchurová visits your home in Praha 2, 3, 7, 8 and surrounding areas. Professional care for dogs & cats. Book via WhatsApp."
      />
      <link rel="alternate" hrefLang="cs" href="https://ducktorka.cz/" />
      <link rel="alternate" hrefLang="en" href="https://ducktorka.cz/en/" />
      <link rel="alternate" hrefLang="x-default" href="https://ducktorka.cz/" />
    </Head>
    <EnNavbar />
    <main>
      <EnHero />
      <EnBenefits />
      <EnAbout />
    </main>
  </>
);

export default EnglishPage;
