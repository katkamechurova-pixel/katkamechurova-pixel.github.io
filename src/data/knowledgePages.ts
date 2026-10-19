import { ADDITIONAL_FEES, FIXED_FEE, getFreeKilometreAreasIn, KILOMETER_FEE } from "./pricing";

export interface KnowledgeSection {
  heading: string;
  paragraphs: string[];
}

export interface KnowledgeFaq {
  question: string;
  answer: string;
}

export interface KnowledgeFaqGroup {
  heading: string;
  items: KnowledgeFaq[];
}

export interface CapabilityRow {
  service: string;
  availability: string;
  note: string;
  href?: string;
}

export interface KnowledgePageData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: KnowledgeSection[];
  capabilityRows?: CapabilityRow[];
  faqGroups?: KnowledgeFaqGroup[];
}

export const atHomeCapabilities: CapabilityRow[] = [
  { service: "Preventivní prohlídka a konzultace", availability: "Doma", note: "Probereme zdravotní stav zvířete a domluvíme se, co je potřeba vyšetřit.", href: "/sluzby/preventivni-prohlidky/" },
  { service: "Očkování", availability: "Doma", note: "Vakcínu vybereme s ohledem na zdravotní stav zvířete a předchozí očkování.", href: "/sluzby/vakcinace/" },
  { service: "Antiparazitární ochrana", availability: "Doma", note: "Vhodný přípravek zvolíme podle druhu, hmotnosti a potřeb zvířete.", href: "/sluzby/odcerveni/" },
  { service: "Čipování", availability: "Doma", note: "Označení zvířete mikročipem po předchozí domluvě.", href: "/sluzby/cipovani/" },
  { service: "Odběr krve", availability: "Doma", note: "Předem se domluvíme, které krevní testy budou potřeba.", href: "/sluzby/odbery-krve/" },
  { service: "Ultrazvukové vyšetření", availability: "Doma", note: "Vyšetření provedeme přenosným ultrazvukem. Jeho vhodnost posoudíme podle obtíží zvířete.", href: "/sluzby/sono-vysetreni/" },
  { service: "Ošetření drobných poranění", availability: "Doma po domluvě", note: "Nejprve nám popište poranění. Podle jeho závažnosti posoudíme, zda je ošetření doma vhodné.", href: "/sluzby/osetreni-poraneni/" },
  { service: "Paliativní péče", availability: "Doma po domluvě", note: "Podpůrnou péči přizpůsobíme zdravotnímu stavu a potřebám zvířete.", href: "/sluzby/paliativni-pece/" },
  { service: "Eutanazie", availability: "Doma po domluvě", note: "Citlivý postup i termín návštěvy nejprve proberete s veterinářkou.", href: "/sluzby/eutanazie-doma/" },
  { service: "Kastrace", availability: "Ordinace Benešov", note: "Kastrace provádíme pouze v ordinaci v Benešově.", href: "/sluzby/kastrace/" },
  { service: "Akutní nebo rychle se zhoršující stav", availability: "Telefonická domluva", note: "Mobilní návštěva není nepřetržitá pohotovost. Nečekejte na běžný termín; zavolejte a ověřte další postup." },
];

export const knowledgePages: KnowledgePageData[] = [
  {
    slug: "co-osetrime-doma",
    title: "S čím vám pomůžeme přímo doma?",
    metaTitle: "Co lze ošetřit doma? | Výjezdová veterina Ducktorka",
    metaDescription: "Přehled veterinárních služeb Ducktorky v domácím prostředí a jejich omezení. Očkování, odběry krve, ultrazvuk i péče o starší zvířata.",
    intro: "Na očkování, preventivní prohlídku nebo odběr krve nemusíte vždy jezdit do ordinace. Řadu vyšetření zvládneme u vás doma. Stačí nám popsat, co vaše zvíře potřebuje, a společně domluvíme vhodný postup.",
    sections: [
      {
        heading: "Je domácí návštěva vhodná pro vaše zvíře?",
        paragraphs: [
          "Při objednání nám řekněte, co zvíře trápí, kolik mu je let a jaká vyšetření už podstoupilo. Veterinářka posoudí, zda mu může pomoci doma, a vysvětlí vám, jak se na návštěvu připravit.",
          "Mobilní návštěva nenahrazuje nepřetržitou pohotovost ani vybavení kliniky. Pokud se stav zvířete rychle zhoršuje nebo působí vážně, zavolejte a ověřte další postup bez odkladu.",
        ],
      },
      {
        heading: "Co se řeší v ordinaci?",
        paragraphs: [
          "Na kastraci je potřeba přijet do ordinace v Benešově. Také u dalších zákroků záleží na potřebném vybavení a zdravotním stavu zvířete. Při objednání vám řekneme, zda je domácí ošetření vhodné.",
        ],
      },
    ],
    capabilityRows: atHomeCapabilities,
  },
  {
    slug: "casto-kladene-dotazy",
    title: "Často kladené dotazy",
    metaTitle: "Často kladené dotazy | Mobilní veterinář Ducktorka",
    metaDescription: "Odpovědi na otázky o ceně, výjezdech, domácím vyšetření, přípravě zvířete a objednání mobilní veterinární péče.",
    intro: "Kolik návštěva stojí, kam přijedeme a co si připravit? Tady najdete odpovědi na nejčastější otázky. Pokud řešíte konkrétní potíže svého zvířete, zavolejte nám nebo napište.",
    sections: [],
    faqGroups: [
      {
        heading: "Ceny a doprava",
        items: [
          { question: "Kolik stojí návštěva veterináře doma?", answer: "K ceně ošetření se vždy připočítává základní poplatek za výjezd " + FIXED_FEE + " Kč. V " + getFreeKilometreAreasIn("cs") + " se kilometrovné neplatí. Jinde připočítáváme cestu tam i zpět od bližší základny v Praze 8 – Invalidovně nebo Benešově. Vzdálenost určujeme podle Google Maps, sazba je " + KILOMETER_FEE + " Kč/km v každém směru." },
          { question: "Mohu znát celkovou cenu před návštěvou?", answer: "Při objednání nám popište, co zvíře potřebuje, a pošlete přesnou adresu. Probereme s vámi cenu plánovaného ošetření i dopravy. Pokud bude potřeba další vyšetření nebo léčba, může se výsledná částka změnit." },
          { question: "Ve kterých pražských částech se neúčtují kilometry?", answer: "Nulová sazba za kilometry platí v Praze 2, 3, 7 a 8 i v Benešově. Základní poplatek za výjezd " + FIXED_FEE + " Kč a cena ošetření se účtují vždy zvlášť." },
          { question: "Proč se cena léků liší podle zvířete?", answer: "U řady léčiv se cena odvíjí od skutečně použitého množství, například v mililitrech nebo tabletách. Potřebnou dávku veterinářka určí podle druhu a hmotnosti zvířete, jeho zdravotního stavu a konkrétního přípravku. Stejné ošetření proto může u různých zvířat stát jinou částku." },
          { question: "Zahrnuje cena ošetření i klinické vyšetření?", answer: "Záleží na konkrétním ošetření. U některých položek ceník zahrnutí klinického vyšetření neupřesňuje. Před návštěvou vám vysvětlíme, co uvedená cena obsahuje a co se případně účtuje zvlášť." },
          { question: "Platím cestovné také při očkování?", answer: "Ano, cena vakcíny a výjezdový poplatek se počítají zvlášť. Cestovné si můžete orientačně spočítat v kalkulačce na stránce ceníku." },
          { question: "Platí víkendový nebo noční příplatek?", answer: "U neobjednaných návštěv účtujeme víkendový příplatek " + ADDITIONAL_FEES[0].priceCzk + " Kč a noční poplatek " + ADDITIONAL_FEES[1].priceCzk + " Kč po 20:00. Termín i případné příplatky s vámi probereme při domluvě návštěvy." },
        ],
      },
      {
        heading: "Služby a příprava",
        items: [
          { question: "Lze udělat ultrazvuk přímo doma?", answer: "Ano, používáme přenosný ultrazvuk. Podle obtíží zvířete se s vámi domluvíme, zda je toto vyšetření vhodné a co je potřeba vyšetřit." },
          { question: "Provádíte odběry krve doma?", answer: "Ano, krev můžeme odebrat u vás doma a zajistit laboratorní vyšetření. Předem vám řekneme, které testy doporučujeme a jak zvíře na odběr připravit." },
          { question: "Musí být zvíře před odběrem nalačno?", answer: "Záleží na druhu testu a zdravotním stavu zvířete. Před odběrem vám řekneme, zda a jak dlouho nemá jíst. Bez předchozí domluvy mu krmení neomezujte." },
          { question: "Můžete při jedné návštěvě ošetřit více zvířat?", answer: "Už při objednání nám napište, kolik zvířat máte a jakou péči potřebují. Domluvíme se, zda vše zvládneme při jedné návštěvě, a probereme s vámi cenu ošetření i dopravy." },
          { question: "Lze při jedné návštěvě spojit odběr krve a ultrazvuk?", answer: "Obě vyšetření nabízíme doma. Při objednání nám řekněte, že máte zájem o obě, abychom mohli ověřit jejich vhodnost a vyhradit na návštěvu dostatek času." },
          { question: "Očkujete také králíky?", answer: "Ano, nabízíme také očkování králíků. Při objednání probereme vhodnou vakcínu a ověříme její dostupnost." },
          { question: "Lze doma ošetřit i drobné poranění?", answer: "Ano, pokud to povaha poranění dovolí. Nejprve nám popište ránu a stav zvířete, abychom mohli posoudit, zda postačí domácí ošetření." },
        ],
      },
      {
        heading: "Objednání a dostupnost",
        items: [
          { question: "Do jakých míst přijíždíte?", answer: "Ducktorka působí v Benešově, Praze a vybraných obcích v okolí. Přehled lokalit najdete na stránce oblastí působnosti; dostupnost konkrétní adresy si potvrďte při objednání." },
          { question: "Přijedete také do Karlína nebo na Letnou?", answer: "Ano, jezdíme do Karlína i na Letnou. V Praze 8 a 7 se kilometry neúčtují; platí se výjezdový poplatek a ošetření. Termín domluvíme podle vaší adresy a aktuální dostupnosti." },
          { question: "Jak rychle můžete přijet?", answer: "Záleží na aktuálním programu, lokalitě a dopravě. Při telefonátu nebo zprávě sdělte adresu a naléhavost; veterinářka potvrdí nejbližší dostupný termín." },
          { question: "Je mobilní veterina nonstop pohotovost?", answer: "Ne. Jde o návštěvy domluvené podle dostupnosti veterinářky, nikoli o nepřetržitou pohotovost. Při vážném nebo rychle se zhoršujícím stavu volejte ihned a nečekejte na běžný termín." },
          { question: "Mluví veterinářka anglicky?", answer: "Ano, MVDr. Kateřina Měchurová se s vámi domluví i anglicky. Zavolat nebo napsat přes WhatsApp můžete také v angličtině." },
          { question: "Provádíte kastraci u zvířete doma?", answer: "Ne. Kastrace se provádí v ordinaci v Benešově. Ostatní domácí služby najdete v přehledu péče." },
          { question: "Můžete přijet k úzkostné kočce nebo staršímu zvířeti?", answer: "Ano, ke kočkám, které hůře snášejí cestu nebo nové prostředí, i ke starším zvířatům jezdím pravidelně. Při návštěvě na ně nespěchám, vnímám jejich potřeby a postupuji citlivě podle toho, co jim vyhovuje. Už při objednání mi můžete říct, co vaše zvíře trápí a čeho se obáváte. Společně probereme, zda lze potřebné vyšetření nebo ošetření provést doma." },
        ],
      },
    ],
  },
  {
    slug: "veterinar-pro-bazlive-kocky",
    title: "Špatně snáší vaše kočka cestu k veterináři? Přijedu za vámi domů.",
    metaTitle: "Veterinářka doma pro plaché kočky | Ducktorka",
    metaDescription: "Vaše kočka hůře snáší přepravku nebo cestu k veterináři? Ráda přijedu k vám domů a přizpůsobím návštěvu jejím potřebám.",
    intro: "Před návštěvou mi můžete říct, co vaši kočku obvykle rozruší a co jí pomáhá cítit se bezpečně. Na místě na ni nespěchám a průběh vyšetření přizpůsobím jejímu tempu. Společně probereme, co lze doma bezpečně zvládnout.",
    sections: [
      {
        heading: "S čím vaší kočce doma pomůžu?",
        paragraphs: [
          "Doma můžu kočku preventivně vyšetřit, naočkovat, odebrat jí krev nebo provést ultrazvuk. Ráda s vámi proberu také zdravotní potíže, paliativní péči nebo drobné poranění.",
          "Každá kočka je jiná. Napište mi, co ji obvykle rozruší, jak snáší doteky a manipulaci a co ji trápí. Podle toho přizpůsobím průběh návštěvy a společně posoudíme, co je možné bezpečně vyšetřit doma.",
        ],
      },
      {
        heading: "Jak kočce návštěvu usnadnit?",
        paragraphs: [
          "Připravte klidnou místnost, kde se vaše kočka cítí bezpečně. Nechte jí přístup k oblíbenému pelíšku nebo úkrytu a nachystejte očkovací průkaz, seznam léků i výsledky předchozích vyšetření.",
          "Uklidňující léky podávejte jen po předchozí domluvě se mnou. Bez domluvy kočce neomezujte ani krmení. Pokud bude potřeba zvláštní příprava, vysvětlím vám ji před návštěvou.",
        ],
      },
      {
        heading: "Kdy doporučím návštěvu kliniky?",
        paragraphs: [
          "Některá vyšetření nebo zákroky vyžadují vybavení kliniky. Pokud podle příznaků usoudím, že domácí návštěva nebude stačit, řeknu vám to a doporučím další postup. Při náhlém nebo vážném zhoršení stavu vyhledejte veterinární pomoc bez odkladu.",
        ],
      },
    ],
  },
  {
    slug: "veterinar-pro-seniory",
    title: "Péče o starší psy a kočky u vás doma",
    metaTitle: "Veterinář pro starší psy a kočky | Péče doma | Ducktorka",
    metaDescription: "Domácí veterinární návštěva pro starší psy a kočky. Informace o preventivním vyšetření, odběrech krve, ultrazvuku a paliativní péči.",
    intro: "Hůře se vašemu psovi nastupuje do auta nebo kočka těžce snáší cestu na veterinu? S řadou vyšetření můžeme přijet za vámi. V domácím prostředí probereme změny, kterých si všímáte, a domluvíme další péči.",
    sections: [
      {
        heading: "Jaká péče je dostupná doma?",
        paragraphs: [
          "Doma můžeme provést preventivní prohlídku, odebrat krev nebo vyšetřit zvíře přenosným ultrazvukem. Laboratorní testy zajistíme ve spolupráci s laboratoří. Potřebná vyšetření s vámi probereme podle obtíží zvířete.",
          "Pokud je zvíře dlouhodobě nemocné, můžeme s vámi probrat i paliativní péči. Další návštěvy domluvíme podle jeho potřeb a možností veterinářky.",
        ],
      },
      {
        heading: "Co si připravit před návštěvou?",
        paragraphs: [
          "Sepište, co se změnilo a kdy potíže začaly. Připravte názvy a dávkování podávaných léků, očkovací průkaz a dostupné výsledky vyšetření. Pokud zvažujete krevní testy, ověřte si předem, zda je pro konkrétní test nutná zvláštní příprava.",
        ],
      },
      {
        heading: "Kdy domácí návštěva nemusí stačit?",
        paragraphs: [
          "Některé stavy vyžadují rychlé vyšetření nebo vybavení kliniky. Pokud se zdravotní stav rychle zhoršuje, zavolejte bez odkladu a ověřte, kam se obrátit; mobilní návštěva není nepřetržitá pohotovost.",
        ],
      },
    ],
  },
];
