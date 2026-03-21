import {
  Stethoscope, Syringe, Bug, Cpu, Droplets, Scissors, MessageCircle, HeartHandshake, HousePlus, ScanLine, LucideIcon
} from "lucide-react";

export interface ServiceData {
  id: string;
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDesc: string;
  longDescription: string;
  metaTitle: string;
  metaDescription: string;
}

export const services: ServiceData[] = [
  { 
    id: "preventivni-prohlidky",
    slug: "preventivni-prohlidky",
    icon: Stethoscope, 
    title: "Preventivní prohlídky", 
    shortDesc: "Pravidelné kontroly zdravotního stavu vašeho mazlíčka.",
    longDescription: "Základem dlouhého a spokojeného života vašeho zvířete je prevence. V rámci výjezdové péče provádíme komplexní klinické vyšetření v klidném domácím prostředí. Zkontrolujeme stav kůže, srsti, zubů, poslechneme srdce a dýchání, prohmatáme břicho a v případě potřeby naplánujeme další postup nebo odběry.",
    metaTitle: "Preventivní prohlídky doma | Ducktorka",
    metaDescription: "Komplexní preventivní prohlídky psů a koček v pohodlí domova. Předejděte zdravotním problémům bez stresující cesty na veterinu."
  },
  { 
    id: "vakcinace",
    slug: "vakcinace",
    icon: Syringe, 
    title: "Vakcinace", 
    shortDesc: "Očkování dle aktuálního vakcinačního schématu.",
    longDescription: "Očkování je nejúčinnější formou ochrany proti smrtelným infekčním chorobám. Sestavíme vakcinační plán na míru přímo pro vašeho mazlíčka dle jeho věku a životního stylu. Aplikace probíhá rychle a bezpečně u vás doma, čímž minimalizujeme riziko nákazy v čekárně plné dalších zvířat.",
    metaTitle: "Vakcinace a očkování doma | Ducktorka",
    metaDescription: "Mobilní očkování psů a koček proti infekčním nemocem a vzteklině přímo u vás doma v Praze a okolí."
  },
  { 
    id: "odcerveni",
    slug: "odcerveni",
    icon: Bug, 
    title: "Odčervení", 
    shortDesc: "Vnitřní i vnější antiparazitární ošetření.",
    longDescription: "Parazité nejenže oslabují imunitní systém vašeho zvířete, ale navíc mohou představovat riziko nákazy i pro vás (zoonózy). Rádi vám poradíme s výběrem nejvhodnějšího přípravku, probereme dávkovací schéma a na místě podáme pipetu, tabletu nebo odčervovací pastu dle aktuálních potřeb.",
    metaTitle: "Ošetření proti parazitům a odčervení doma | Ducktorka",
    metaDescription: "Ochrana psů a koček proti vnitřním i vnějším parazitům (klíšťata, blechy, červi) přímo u vás doma."
  },
  { 
    id: "cipovani",
    slug: "cipovani",
    icon: Cpu, 
    title: "Čipování", 
    shortDesc: "Implantace mikročipu pro identifikaci zvířete.",
    longDescription: "Aplikace mikročipu je nutností nejen pro vycestování za hranice, ale u psů dokonce povinností dle platné legislativy. Samotné čipování je velmi rychlé a připomíná běžné podkožní očkování. Provedeme jej v klidu domova a následně vystavíme potvrzení pro zaregistrování do registrů.",
    metaTitle: "Čipování pasů a zvířat doma | Ducktorka",
    metaDescription: "Bezbolestná implantace identifikačního čipu přímo u vás doma. Rychlé a bezstresové splnění legislativních povinností."
  },
  { 
    id: "odbery-krve",
    slug: "odbery-krve",
    icon: Droplets, 
    title: "Odběry krve", 
    shortDesc: "Laboratorní diagnostika z pohodlí domova.",
    longDescription: "Správná a přesná diagnostika často vyžaduje analýzu krve. Krevní oběry odeslány do specializované laboratoře zvládneme realizovat i u vás v obýváku. Doma zamezíme fyziologickým výkyvům hodnot (hlavně u koček), k nimž může docházet v důsledku stresu z cesty na kliniku.",
    metaTitle: "Laboratorní diagnostika a odběry krve doma | Ducktorka",
    metaDescription: "Odběry krve psů a koček bez stresu přímo ve vašem domově. Rychlá laboratorní diagnostika bez nutnosti návštěvy kliniky."
  },
  { 
    id: "sono-vysetreni",
    slug: "sono-vysetreni",
    icon: ScanLine, 
    title: "Sono vyšetření", 
    shortDesc: "Ultrazvuková diagnostika pro přesné a šetrné vyšetření.",
    longDescription: "Přímo k vám domů doručíme moderní přenosný ultrazvuk. Toto neinvazivní a bezbolestné vyšetření umožňuje prohlédnout dutinu břišní, zkontrolovat stav orgánů nebo diagnostikovat březost bez jakýchkoliv rizik pro pacienta.",
    metaTitle: "Sono a ultrazvukové vyšetření doma | Ducktorka",
    metaDescription: "Profesionální ultrazvuková diagnostika přímo u vás doma. Klidné sono vyšetření břišní dutiny a orgánů pro vaše mazlíčky."
  },
  { 
    id: "osetreni-poraneni",
    slug: "osetreni-poraneni",
    icon: Scissors, 
    title: "Ošetření poranění", 
    shortDesc: "Ošetření drobných ran a poranění.",
    longDescription: "Vaše zvíře je zrazené, pokousané nebo se někde nešťastně zaseklo a cesta na veterinu by byla příliš stresující? Provádíme základní dezinfekci, sešití drobných tržných ran a aplikaci podpůrných léků v pohodlí bezpečí vašeho domova.",
    metaTitle: "Ošetření ran a poranění doma | Ducktorka",
    metaDescription: "Okamžité a bezpečné ošetření drobných ran, pokousání a povrchových zranění vašeho zvířete bez nutnosti převozu k veterináři."
  },
  { 
    id: "konzultace",
    slug: "konzultace",
    icon: MessageCircle, 
    title: "Konzultace", 
    shortDesc: "Poradenství ohledně zdraví, výživy a prevence.",
    longDescription: "Není to vždy hned o lécích a speciálních vyšetřeních. Někdy potřebujete jen v klidu probrat úpravu jídelníčku, vhodné doplňky stravy, podpoření imunity, chování nebo problémy se srstí. Uvaříte si kávu a my vám ve vašem obýváku věnujeme čas na detailní konzultaci všech vašich obav a otázek.",
    metaTitle: "Veterinární poradenství a konzultace | Ducktorka",
    metaDescription: "Odborná veterinární konzultace přímo u vás doma – poradíme vám v otázkách zdraví, chování, výživy a celkové péče o mazlíčky."
  },
  { 
    id: "paliativni-pece",
    slug: "paliativni-pece",
    icon: HeartHandshake, 
    title: "Paliativní péče", 
    shortDesc: "Citlivá péče o nemocná a stárnoucí zvířata.",
    longDescription: "Zlatý věk přináší i zdravotní komplikace. Snažíme se maximálně zmírnit bolestivost chronických onemocnění u stárnoucích domácích zvířat. Společně nalezneme řešení pro zvládnutí symptomů doma, nastavíme vhodnou medikaci a zajistíme vašemu parťákovi co nejdelší, ale především kvalitní a klidné období strávené po vašem boku.",
    metaTitle: "Paliativní veterinární péče doma | Ducktorka",
    metaDescription: "Citlivé provázení a ošetření nevyléčitelně nemocných nebo geriatrických zvířat doma k zajištění kvality a bezbolestnosti jejich života."
  },
  { 
    id: "eutanazie-doma",
    slug: "eutanazie-doma",
    icon: HousePlus, 
    title: "Eutanazie doma", 
    shortDesc: "Důstojný a klidný odchod v domácím prostředí.",
    longDescription: "Nejtěžší ale často nejlaskavější rozhodnutí v životě majitele. Možnost uspání pejska nebo kočičky v domácím, důvěrně známém prostředí minimalizuje jejich i váš stres. Poslední chvíle tak netrávíte v neznámé ordinaci na studeném stole, ale v klidu oblíbeného pelíšku v náručí své rodiny.",
    metaTitle: "Klidná eutanazie zvířat doma | Ducktorka",
    metaDescription: "Důstojné, citlivé a bezbolestné uspání vašeho zvířete v teple a bezpečí jeho vlastního domova."
  }
];
