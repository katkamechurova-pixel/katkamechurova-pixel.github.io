export type ServiceIconName =
  | "Stethoscope"
  | "Syringe"
  | "Bug"
  | "Cpu"
  | "Droplets"
  | "Scissors"
  | "MessageCircle"
  | "HeartHandshake"
  | "HousePlus"
  | "ScanLine";

export interface ServiceSummary {
  slug: string;
  iconName: ServiceIconName;
  title: string;
  shortDesc: string;
  metaTitle: string;
  metaDescription: string;
}

export const serviceSummaries: ServiceSummary[] = [
  {
    slug: "preventivni-prohlidky",
    iconName: "Stethoscope",
    title: "Preventivní prohlídky",
    shortDesc: "Pravidelné kontroly zdravotního stavu vašeho mazlíčka.",
    metaTitle: "Preventivní prohlídky doma | Ducktorka",
    metaDescription: "Komplexní preventivní prohlídky psů a koček v pohodlí domova. Předejděte zdravotním problémům bez stresující cesty na veterinu.",
  },
  {
    slug: "vakcinace",
    iconName: "Syringe",
    title: "Vakcinace",
    shortDesc: "Očkování moderními vakcínami dle aktuálního vakcinačního schématu.",
    metaTitle: "Vakcinace doma | Ducktorka",
    metaDescription: "Očkování psů, koček a drobných zvířat přímo u vás doma. Bezpečná vakcinace bez stresu z čekárny.",
  },
  {
    slug: "odcerveni",
    iconName: "Bug",
    title: "Antiparazitární ochrana",
    shortDesc: "Vnitřní i vnější antiparazitární ošetření.",
    metaTitle: "Antiparazitární ochrana doma | Ducktorka",
    metaDescription: "Odčervení, ochrana proti blechám, klíšťatům a dalším parazitům v pohodlí domova.",
  },
  {
    slug: "cipovani",
    iconName: "Cpu",
    title: "Čipování",
    shortDesc: "Implantace mikročipu pro identifikaci zvířete.",
    metaTitle: "Čipování pasů a zvířat doma | Ducktorka",
    metaDescription: "Bezbolestná implantace identifikačního čipu přímo u vás doma. Rychlé a bezstresové splnění legislativních povinností.",
  },
  {
    slug: "odbery-krve",
    iconName: "Droplets",
    title: "Odběry krve",
    shortDesc: "Laboratorní diagnostika z pohodlí domova. Biochemické vyšetření s výsledky v den odběru. Spolupráce s laboratoří Veteo, případně německou laboratoří Laboklin",
    metaTitle: "Odběry krve doma | Ducktorka",
    metaDescription: "Odběr krve a laboratorní vyšetření přímo u vás doma. Rychlá diagnostika bez zbytečného stresu.",
  },
  {
    slug: "sono-vysetreni",
    iconName: "ScanLine",
    title: "Sono vyšetření",
    shortDesc: "Ultrazvuková diagnostika pro přesné a šetrné vyšetření přenosným USG přístrojem.",
    metaTitle: "Sono vyšetření doma | Ducktorka",
    metaDescription: "Přenosné ultrazvukové vyšetření zvířat v pohodlí domova. Šetrná diagnostika bez nutnosti převozu.",
  },
  {
    slug: "osetreni-poraneni",
    iconName: "Scissors",
    title: "Ošetření poranění",
    shortDesc: "Ošetření drobných ran a poranění.",
    metaTitle: "Ošetření poranění doma | Ducktorka",
    metaDescription: "Šetrné ošetření drobných poranění a ran přímo u vás doma. Rychlá pomoc bez čekání v ordinaci.",
  },
  {
    slug: "konzultace",
    iconName: "MessageCircle",
    title: "Konzultace",
    shortDesc: "Poradenství ohledně zdraví, výživy a prevence.",
    metaTitle: "Veterinární konzultace doma | Ducktorka",
    metaDescription: "Odborné konzultace ke zdraví, výživě i prevenci domácích mazlíčků přímo u vás doma.",
  },
  {
    slug: "paliativni-pece",
    iconName: "HeartHandshake",
    title: "Paliativní péče",
    shortDesc: "Citlivá péče o nemocná a stárnoucí zvířata.",
    metaTitle: "Paliativní péče doma | Ducktorka",
    metaDescription: "Citlivá podpora nemocných a stárnoucích zvířat v klidném domácím prostředí.",
  },
  {
    slug: "eutanazie-doma",
    iconName: "HousePlus",
    title: "Eutanazie doma",
    shortDesc: "Důstojný a klidný odchod v domácím prostředí.",
    metaTitle: "Eutanazie doma | Ducktorka",
    metaDescription: "Citlivě vedená domácí eutanazie v bezpečí známého prostředí vašeho mazlíčka.",
  },
  {
    slug: "kastrace",
    iconName: "Scissors",
    title: "Kastrace",
    shortDesc: "Preventivní kastrace koček a psů, pouze v ordinaci v Benešově.",
    metaTitle: "Kastrace | Ducktorka",
    metaDescription: "Informace o preventivní kastraci koček a psů v ordinaci v Benešově.",
  },
];
