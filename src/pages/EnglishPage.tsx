import { Head } from "vite-react-ssg";
import {
  Bug, Cpu, Droplets, HeartHandshake, HousePlus,
  MessageCircle, ScanLine, Scissors, Stethoscope, Syringe,
  Home, Heart, type LucideIcon,
} from "lucide-react";
import ReviewsSection from "@/components/ReviewsSection";
import DuckLogo from "@/components/DuckLogo";
import heroImageMd from "@/assets/hero-v11-md.webp";
import { FIXED_FEE, KILOMETER_FEE } from "@/data/constants";
import { getFreeKilometreAreas, PRICING_VARIABILITY_NOTICE, PRICING_EXAMPLES, formatCzk } from "@/data/pricing";
import { PRACTICE_AREA_SERVED, practiceReference, withPracticeGraph } from "@/data/structuredData";

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
      <div className="flex items-center gap-3">
        <a href="#services" className="hidden md:block text-sm hover:text-accent">Care at home</a>
        <a href="/en/pricing/" className="hidden sm:block text-sm hover:text-accent">Prices</a>
        <a href="/" lang="cs" className="text-sm hover:text-accent">Česky</a>
      <a
        href="https://wa.me/420734231444"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-5 py-2 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
      >
        Request a home visit
      </a>
      </div>
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
      fetchPriority="high"
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
          An English-speaking vet, at your doorstep.
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-8 font-light max-w-xl">
          Veterinary care at home in Prague, Benešov and nearby areas. Skip the journey and waiting room, with care that puts your pet’s comfort first.
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
            Request a home visit
          </a>
          <a
            href="#services"
            className="inline-flex justify-center items-center px-8 py-3.5 rounded-full bg-card/90 text-foreground font-semibold text-base border border-border hover:bg-card transition-all hover:scale-105 shadow-sm"
          >
            See the care I offer
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
    desc: "No car journey or unfamiliar waiting room. Your pet can be examined in familiar surroundings.",
  },
  {
    Icon: MessageCircle,
    title: "Communication in English",
    desc: "Talk through your concerns, the examination and the next steps in English.",
  },
  {
    Icon: Heart,
    title: "A gentle, individual approach",
    desc: "Tell me what worries your pet. We can plan the visit around their temperament and care needs.",
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
            a veterinarian who brings care to your home, with an emphasis on gentle handling and clear explanations.
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
              Clinical internships in Tennessee, USA
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold">
              Consultations in English
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── Services ────────────────────────────────────────────────────────────────

const enServices: { Icon: LucideIcon; name: string; desc: string }[] = [
  { Icon: Stethoscope, name: "Wellness Exams",       desc: "A chance to discuss changes you’ve noticed and check your pet’s health" },
  { Icon: Syringe,     name: "Vaccinations",          desc: "Vaccines chosen with your pet’s health and previous vaccinations in mind" },
  { Icon: Bug,         name: "Parasite Prevention",   desc: "Advice and treatment suited to your pet’s species, weight and lifestyle" },
  { Icon: Cpu,         name: "Microchipping",         desc: "Microchip implantation; ask about pet passport arrangements when booking" },
  { Icon: Droplets,    name: "Blood Tests",            desc: "Blood sampling at home, with tests and result times confirmed for your pet" },
  { Icon: ScanLine,    name: "Ultrasound",     desc: "Portable ultrasound when suitable for your pet’s symptoms" },
  { Icon: Scissors,    name: "Wound Care",             desc: "Minor wounds assessed first to check whether home treatment is suitable" },
  { Icon: MessageCircle, name: "Consultations",       desc: "Health, nutrition, and prevention advice" },
  { Icon: HeartHandshake, name: "Palliative Care",    desc: "Compassionate support for sick and aging animals" },
  { Icon: HousePlus,   name: "Home Euthanasia",       desc: "Peaceful, dignified farewell in familiar surroundings" },
  { Icon: Scissors,    name: "Neutering/Spaying",     desc: "Preventive procedure — at the Benešov clinic only" },
];

const EnServices = () => (
  <section id="services" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12">
        <span className="text-gradient">Care</span>{" "}
        <span className="text-foreground">I can bring to your home</span>
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
        <span className="text-gradient">Areas</span>{" "}
        <span className="text-foreground">I cover</span>
      </h2>
      <p className="text-center text-muted-foreground mb-10">
        I cover Prague and the surrounding region. These are the Prague districts I visit most often.
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
        I also visit areas around Prague — Jesenice, Říčany, Průhonice, Benešov and more.{" "}
        <a
          href="https://wa.me/420734231444"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          Ask me about your area.
        </a>
      </p>
    </div>
  </section>
);

// ─── Pricing ─────────────────────────────────────────────────────────────────

const EnPricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
          <span className="text-gradient">Transparent</span>{" "}
          <span className="text-foreground">pricing</span>
        </h2>
        <p className="text-muted-foreground mb-10">Your visit includes the care provided, a call-out fee and, outside selected areas, mileage. Here is how the costs fit together.</p>
        <div className="bg-card rounded-3xl border border-border p-8 text-left space-y-5 [&_span]:shrink-0 [&_span]:text-right [&_span]:max-w-[40%] [&_div.flex]:gap-4">
          <div className="flex justify-between items-center pb-5 border-b border-border">
            <div>
              <p className="font-heading font-bold text-foreground">Starting call-out fee</p>
              <p className="text-sm text-muted-foreground">Applies to every home visit; treatment is charged separately</p>
            </div>
            <span className="font-heading font-bold text-xl text-foreground">{FIXED_FEE} CZK</span>
          </div>
          <div className="flex justify-between items-center pb-5 border-b border-border">
            <div>
              <p className="font-heading font-bold text-foreground">Travel fee</p>
              <p className="text-sm text-muted-foreground">One-way Google Maps distance from the nearer base, charged there and back: Prague 8 or Benešov</p>
            </div>
            <span className="font-heading font-bold text-xl text-foreground">{KILOMETER_FEE} CZK/km each way</span>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-heading font-bold text-foreground">Visits in {getFreeKilometreAreas("en")}</p>
              <p className="text-sm text-muted-foreground">No per-kilometre charge is added in these areas; the starting fee still applies. The two bases are Prague 8 and Benešov.</p>
            </div>
            <span className="font-heading font-bold text-xl text-accent">{FIXED_FEE} CZK</span>
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 text-left">
          {PRICING_EXAMPLES.slice(0, 2).map((example) => <article key={example.id} className="rounded-2xl border border-border bg-card p-5">
            <h3 className="font-heading font-semibold">{example.titleEn}</h3>
            <p className="mt-2 text-xl font-bold text-accent">{formatCzk(example.totalCzk, "en-GB")}</p>
            <p className="mt-2 text-sm text-muted-foreground">Illustrative sum of the listed items, including the call-out fee in an area with no mileage charge. Additional care may change the total.</p>
          </article>)}
        </div>
        <p className="text-sm text-muted-foreground mt-5">
          <a href="/en/pricing/" className="font-semibold text-accent hover:underline">See the full price list and visit calculator →</a>
        </p>
        <p className="text-xs text-muted-foreground mt-4">
          {PRICING_VARIABILITY_NOTICE.en}
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
        Tell me your address, your pet’s species and age, and what you need help with. I’ll confirm whether a home visit is suitable, the available appointment and the planned cost.
      </p>
      <div className="mb-10">
        <a
          href="https://wa.me/420734231444"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center items-center gap-3 px-10 py-4 rounded-full bg-accent text-accent-foreground font-semibold text-lg hover:opacity-90 transition-all hover:scale-105 shadow-md"
        >
          <WhatsAppIcon />
          Message me on WhatsApp
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
        <a href="/en/pricing/" className="hover:text-foreground">Prices</a>
        <span>© {new Date().getFullYear()}</span>
        <a href="/" className="hover:text-foreground transition-colors">
          Česká verze
        </a>
      </div>
    </div>
  </footer>
);


const EnVisitSteps = () => (
  <section id="how-it-works" className="py-20 bg-section-alt">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-4">Your home visit, step by step</h2>
      <p className="max-w-2xl mx-auto text-center text-muted-foreground mb-8">Whether your cat dislikes the carrier or your older dog finds travel difficult, we’ll start by discussing what they need.</p>
      <ol className="grid md:grid-cols-3 gap-5">
        {[
          ["Tell me about your pet", "Send your address, your pet’s species and age, and a description of their symptoms or the care you’re looking for. Mention any worries about handling or previous vet visits."],
          ["Agree a plan", "I’ll check whether care at home is suitable and discuss the appointment, preparation and planned price. Some conditions need a clinic’s equipment."],
          ["Care in familiar surroundings", "Have your pet’s records and medication list ready. During the visit, I’ll explain the findings and discuss any recommended tests, treatment and next steps."],
        ].map(([title, text], index) => <li key={title} className="rounded-2xl border border-border bg-card p-6"><span className="text-accent font-heading text-2xl font-bold" aria-hidden="true">0{index + 1}</span><h3 className="font-heading font-semibold mt-3 mb-2">{title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{text}</p></li>)}
      </ol>
      <p className="mt-6 text-center"><a href="#contact" className="font-semibold text-accent hover:underline">Tell me what your pet needs →</a></p>
    </div>
  </section>
);

const englishFaqs = [
  ["Can the whole visit be in English?", "Yes. We can discuss your pet’s history, the examination and the next steps in English. You can also send your appointment request in English."],
  ["My cat is frightened of vets. Can you help?", "A home visit removes the journey and waiting room, but the examination itself can still be stressful. Tell me how your cat reacts to strangers and handling so we can discuss a suitable approach. Only give calming medication if agreed with a vet beforehand."],
  ["Can you visit an older dog or cat?", "Yes. Health checks, blood sampling, ultrasound and palliative care may be available at home. We’ll discuss which care is appropriate for your pet before arranging a visit."],
  ["What is included in the price?", "Treatment and travel are charged separately. Some medicines are charged by the quantity used, which depends on your pet’s species, weight and the medicine chosen. Before the visit, we’ll discuss the planned care, any examination fee and the expected cost."],
  ["Should I prepare anything?", "Have your pet’s vaccination record, previous test results and medication list ready. Choose a quiet room. Ask about preparation for blood tests or ultrasound; do not withhold food or give calming medication without prior advice."],
  ["Is this an emergency service?", "Home visits are by arrangement and depend on availability; this is not a 24-hour emergency service. If your pet is seriously unwell or deteriorating, seek urgent veterinary help rather than waiting for a WhatsApp reply."],
];

const EnFaq = () => (
  <section id="faq" className="py-20 bg-section-alt">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">Before you book</h2>
      <div className="space-y-3">{englishFaqs.map(([question, answer]) => <details key={question} className="rounded-2xl border border-border bg-card p-5"><summary className="font-semibold cursor-pointer">{question}</summary><p className="mt-3 text-sm text-muted-foreground leading-relaxed">{answer}</p></details>)}</div>
      <p className="mt-6 text-center"><a href="/en/pricing/" className="text-accent font-semibold hover:underline">Explore prices and calculate travel →</a></p>
    </div>
  </section>
);

// ─── Page ────────────────────────────────────────────────────────────────────

const EnglishPage = () => (
  <>
    <Head>
      <title>Mobile Vet Prague | Home Visit Veterinary Care | Ducktorka</title>
      <meta
        name="description"
        content="English-speaking mobile vet in Prague. Dr. Měchurová visits your home in Praha 2, 3, 7, 8 and surrounding areas. Professional care for dogs & cats. Book directly with Kateřina via WhatsApp."
      />
      <link rel="canonical" href="https://ducktorka.cz/en/" />
      <link rel="alternate" hrefLang="cs" href="https://ducktorka.cz/" />
      <link rel="alternate" hrefLang="en" href="https://ducktorka.cz/en/" />
      <link rel="alternate" hrefLang="x-default" href="https://ducktorka.cz/" />
      <script type="application/ld+json">
        {JSON.stringify(withPracticeGraph(
          {
            "@type": "WebPage",
            "@id": "https://ducktorka.cz/en/#webpage",
            name: "Mobile Vet Prague | Home Visit Veterinary Care | Ducktorka",
            description: "English-speaking mobile vet in Prague. Dr. Měchurová visits your home in Praha 2, 3, 7, 8 and surrounding areas. Professional care for dogs & cats. Book directly with Kateřina via WhatsApp.",
            url: "https://ducktorka.cz/en/",
            inLanguage: "en",
            about: practiceReference,
            mainEntity: { "@id": "https://ducktorka.cz/en/#home-visit-service" },
            hasPart: { "@id": "https://ducktorka.cz/en/#faq" },
          },
          {
            "@type": "Service",
            "@id": "https://ducktorka.cz/en/#home-visit-service",
            name: "Mobile veterinary home visits",
            description: "Veterinary care for dogs and cats at home in Praha 2, 3, 7, 8, Benešov and nearby areas, by arrangement.",
            provider: practiceReference,
            areaServed: PRACTICE_AREA_SERVED,
          },
          {
            "@type": "FAQPage",
            "@id": "https://ducktorka.cz/en/#faq",
            name: "Frequently asked questions about home veterinary visits",
            url: "https://ducktorka.cz/en/#faq",
            inLanguage: "en",
            mainEntity: englishFaqs.map(([question, answer]) => ({
              "@type": "Question",
              name: question,
              acceptedAnswer: { "@type": "Answer", text: answer },
            })),
          },
        ))}
      </script>
    </Head>
    <EnNavbar />
    <main>
      <EnHero />
      <EnBenefits />
      <EnAbout />
      <EnServices />
      <EnVisitSteps />
      <EnCoverage />
      <EnPricing />
      <ReviewsSection language="en" />
      <EnFaq />
      <EnContact />
    </main>
    <EnFooter />
  </>
);

export default EnglishPage;
