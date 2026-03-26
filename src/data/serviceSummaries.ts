import {
  Stethoscope,
  Syringe,
  Bug,
  Cpu,
  Droplets,
  Scissors,
  MessageCircle,
  HeartHandshake,
  HousePlus,
  ScanLine,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Stethoscope,
  Syringe,
  Bug,
  Cpu,
  Droplets,
  Scissors,
  MessageCircle,
  HeartHandshake,
  HousePlus,
  ScanLine,
};

export interface ServiceSummary {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDesc: string;
  metaTitle: string;
  metaDescription: string;
}

type ServiceSummarySource = Omit<ServiceSummary, "icon"> & {
  icon: keyof typeof iconMap;
};

const serviceSummarySources: ServiceSummarySource[] = [
  {
    slug: "preventivni-prohlidky",
    icon: "Stethoscope",
    title: "Preventivní prohlídky",
    shortDesc: "Pravidelné kontroly zdravotního stavu vašeho mazlíčka.",
    metaTitle: "Preventivní prohlídky doma | Ducktorka",
    metaDescription: "Komplexní preventivní prohlídky psů a koček v pohodlí domova. Předejděte zdravotním problémům bez stresující cesty na veterinu.",
  },
  {
    slug: "vakcinace",
    icon: "Syringe",
    title: "Vakcinace",
    shortDesc: "Očkování moderními vakcínami dle aktuálního vakcinačního schématu.",
    metaTitle: "Vakcinace doma | Ducktorka",
    metaDescription: "Očkování psů, koček a drobných zvířat přímo u vás doma. Bezpečná vakcinace bez stresu z čekárny.",
  },
  {
    slug: "odcerveni",
    icon: "Bug",
    title: "Antiparazitární ochrana",
    shortDesc: "Vnitřní i vnější antiparazitární ošetření.",
    metaTitle: "Antiparazitární ochrana doma | Ducktorka",
    metaDescription: "Odčervení, ochrana proti blechám, klíšťatům a dalším parazitům v pohodlí domova.",
  },
  {
    slug: "cipovani",
    icon: "Cpu",
    title: "Čipování",
    shortDesc: "Implantace mikročipu pro identifikaci zvířete.",
    metaTitle: "Čipování pasů a zvířat doma | Ducktorka",
    metaDescription: "Bezbolestná implantace identifikačního čipu přímo u vás doma. Rychlé a bezstresové splnění legislativních povinností.",
  },
  {
    slug: "odbery-krve",
    icon: "Droplets",
    title: "Odběry krve",
    shortDesc: "Laboratorní diagnostika z pohodlí domova. Biochemické vyšetření s výsledky v den odběru. Spolupráce s laboratoří Veteo, případně německou laboratoří Laboklin",
    metaTitle: "Odběry krve doma | Ducktorka",
    metaDescription: "Odběr krve a laboratorní vyšetření přímo u vás doma. Rychlá diagnostika bez zbytečného stresu.",
  },
  {
    slug: "sono-vysetreni",
    icon: "ScanLine",
    title: "Sono vyšetření",
    shortDesc: "Ultrazvuková diagnostika pro přesné a šetrné vyšetření přenosným USG přístrojem.",
    metaTitle: "Sono vyšetření doma | Ducktorka",
    metaDescription: "Přenosné ultrazvukové vyšetření zvířat v pohodlí domova. Šetrná diagnostika bez nutnosti převozu.",
  },
  {
    slug: "osetreni-poraneni",
    icon: "Scissors",
    title: "Ošetření poranění",
    shortDesc: "Ošetření drobných ran a poranění.",
    metaTitle: "Ošetření poranění doma | Ducktorka",
    metaDescription: "Šetrné ošetření drobných poranění a ran přímo u vás doma. Rychlá pomoc bez čekání v ordinaci.",
  },
  {
    slug: "konzultace",
    icon: "MessageCircle",
    title: "Konzultace",
    shortDesc: "Poradenství ohledně zdraví, výživy a prevence.",
    metaTitle: "Veterinární konzultace doma | Ducktorka",
    metaDescription: "Odborné konzultace ke zdraví, výživě i prevenci domácích mazlíčků přímo u vás doma.",
  },
  {
    slug: "paliativni-pece",
    icon: "HeartHandshake",
    title: "Paliativní péče",
    shortDesc: "Citlivá péče o nemocná a stárnoucí zvířata.",
    metaTitle: "Paliativní péče doma | Ducktorka",
    metaDescription: "Citlivá podpora nemocných a stárnoucích zvířat v klidném domácím prostředí.",
  },
  {
    slug: "eutanazie-doma",
    icon: "HousePlus",
    title: "Eutanazie doma",
    shortDesc: "Důstojný a klidný odchod v domácím prostředí.",
    metaTitle: "Eutanazie doma | Ducktorka",
    metaDescription: "Citlivě vedená domácí eutanazie v bezpečí známého prostředí vašeho mazlíčka.",
  },
  {
    slug: "kastrace",
    icon: "Scissors",
    title: "Kastrace",
    shortDesc: "Preventivní kastrace koček a psů, pouze v ordinaci v Benešově.",
    metaTitle: "Kastrace | Ducktorka",
    metaDescription: "Informace o preventivní kastraci koček a psů v ordinaci v Benešově.",
  },
];

export const serviceSummaries: ServiceSummary[] = serviceSummarySources.map((service) => ({
  ...service,
  icon: iconMap[service.icon] || Stethoscope,
}));
