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
  { service: "Preventivní prohlídka a konzultace", availability: "Doma", note: "V klidu probereme zdravotní stav, výživu i chování vašeho zvířete a zkontroluji celkovou kondici.", href: "/sluzby/preventivni-prohlidky/" },
  { service: "Očkování", availability: "Doma", note: "Šetrné vakcíny na míru (včetně neadjuvantního Purevaxu pro kočky) bez stresu z ordinace a plné čekárny.", href: "/sluzby/vakcinace/" },
  { service: "Antiparazitární ochrana", availability: "Doma", note: "Doporučení a podání ověřených přípravků proti klíšťatům, blechám i vnitřním parazitům.", href: "/sluzby/odcerveni/" },
  { service: "Čipování a vystavení pasu", availability: "Doma", note: "Rychlé a šetrné označení mikročipem, kontrola čtečkou a zápis do očkovacího průkazu či registru.", href: "/sluzby/cipovani/" },
  { service: "Odběr krve", availability: "Doma", note: "Šetrný odběr vzorku v klidu domova a zajištění laboratorního rozboru v akreditované laboratoři.", href: "/sluzby/odbery-krve/" },
  { service: "Ultrazvukové vyšetření", availability: "Doma", note: "Vyšetření břicha, močových cest či potvrzení březosti mobilním ultrazvukovým přístrojem.", href: "/sluzby/sono-vysetreni/" },
  { service: "Ošetření drobných poranění", availability: "Doma po domluvě", note: "Očištění, dezinfekce a ošetření povrchových ran, trhlin a drobných úrazů po telefonické konzultaci.", href: "/sluzby/osetreni-poraneni/" },
  { service: "Paliativní péče", availability: "Doma po domluvě", note: "Tlumení bolesti a nastavení komfortního režimu pro starší a chronicky nemocná zvířátka.", href: "/sluzby/paliativni-pece/" },
  { service: "Eutanazie v domácím prostředí", availability: "Doma po domluvě", note: "Důstojné, citlivé a klidné rozloučení v prostředí, které zvíře důvěrně zná a má rádo.", href: "/sluzby/eutanazie-doma/" },
  { service: "Kastrace", availability: "Ordinace Benešov", note: "Kastrace koček i psů provádím výhradně v plně vybavené ordinaci v Benešově.", href: "/sluzby/kastrace/" },
  { service: "Akutní a život ohrožující stavy", availability: "Telefonická domluva", note: "Mobilní návštěva není 24/7 pohotovost. Při náhlém kolapsu či dušnosti neprodleně kontaktujte nonstop kliniku." },
];

export const knowledgePages: KnowledgePageData[] = [
  {
    slug: "co-osetrime-doma",
    title: "S čím vám pomůžu přímo u vás doma?",
    metaTitle: "Co lze ošetřit doma? | Výjezdová veterina Ducktorka",
    metaDescription: "Přehled veterinární péče v pohodlí vašeho domova: očkování, odběry krve, sono i péče o seniory. Kdy je domácí návštěva ideální a co řešíme na klinice.",
    intro: "Na očkování, preventivní prohlídku ani odběr krve nemusíte se zvířátkem cestovat do ordinace. Řadu vyšetření a běžných zákroků zvládneme v klidu u vás v obýváku. Stačí mi popsat, co vašeho mazlíčka trápí, a společně se domluvíme na nejvhodnějším postupu.",
    sections: [
      {
        heading: "Je domácí návštěva vhodná právě pro vaše zvíře?",
        paragraphs: [
          "Při objednání mi prosím popište, jaké potíže pozorujete, kolik je zvířeti let a jaká vyšetření už v minulosti podstoupilo. Společně posoudíme, zda je domácí ošetření vhodné, a řeknu vám, jak zvířátko na mou návštěvu jednoduše připravit.",
          "Mobilní veterina je skvělá pro klidnou a bezstresovou péči, ale nenahrazuje nepřetržitou pohotovost ani zázemí velké kliniky. Pokud se stav zvířete prudce zhoršuje, je v šoku nebo jde o život ohrožující stav, je nutné neprodleně vyhledat pohotovostní kliniku.",
        ],
      },
      {
        heading: "Co řešíme přímo v ordinaci?",
        paragraphs: [
          "Chirurgické zákroky, jako je například kastrace koček a psů, vyžadují sterilní sál a monitorovanou anestezii, proto je provádím v ordinaci v Benešově. Stejně tak rozsáhlejší rentgenologické vyšetření nebo složitější stomatologii řešíme v ordinaci. Vždy vám na rovinu řeknu, co zvládneme v teple domova a kdy je pro bezpečí zvířete lepší vyrazit na kliniku.",
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
    intro: "Kolik návštěva stojí, kam všude přijedu a jak zvířátko připravit? Zde najdete přehledné odpovědi na nejčastější dotazy. Pokud řešíte konkrétní potíže svého mazlíčka, neváhejte mi zavolat nebo napsat na WhatsApp.",
    sections: [],
    faqGroups: [
      {
        heading: "Ceny a doprava",
        items: [
          { question: "Kolik stojí návštěva veterináře doma?", answer: "K ceně samotného ošetření se připočítává základní výjezdový poplatek " + FIXED_FEE + " Kč. V " + getFreeKilometreAreasIn("cs") + " se kilometrovné neplatí – hradíte pouze základní výjezd. Jinde účtujeme cestu tam i zpět podle Google Maps z bližší základny (Praha 8 – Invalidovna nebo Benešov) se sazbou " + KILOMETER_FEE + " Kč za kilometr." },
          { question: "Mohu znát celkovou cenu předem?", answer: "Určitě ano. Když mi napíšete nebo zavoláte, popíšete stav zvířátka a svou adresu, předem vám spočítám cenu dopravy i plánovaného ošetření. Pokud bychom na místě zjistili, že je potřeba udělat další vyšetření nebo podat léky, vždy se s vámi nejdříve domluvím." },
          { question: "Ve kterých oblastech se neúčtují kilometry?", answer: "Kilometrovné neplatíte pouze v Benešově. V Praze 2, 3, 7 i 8 a v ostatních místech se účtuje " + KILOMETER_FEE + " Kč za kilometr v každém směru podle jednosměrné vzdálenosti od bližší základny; základní výjezd " + FIXED_FEE + " Kč a cena úkonů se účtují zvlášť." },
          { question: "Proč se cena léků liší podle zvířete?", answer: "U většiny léků se cena počítá podle přesného množství účinné látky, které zvířátko dostane (na mililitry nebo jednotlivé tablety). Dávku určuji přesně na míru podle hmotnosti, věku a zdravotního stavu pacienta. Proto se cena stejného léku u čivavy a u německého ovčáka přirozeně liší." },
          { question: "Zahrnuje cena ošetření i klinické vyšetření?", answer: "Před každým úkonem (např. před očkováním) zvířátko základně prohlédnu, abychom měli jistotu, že je v pořádku. Pokud řešíme konkrétní zdravotní problém, provádím podrobnější klinické vyšetření. Předem vám vždy na rovinu řeknu, co přesně bude návštěva zahrnovat a jaká bude konečná částka." },
          { question: "Platím cestovné také při očkování?", answer: "Ano, výjezdové (cestovné) je samostatná položka připočítávaná k ceně vakcíny a vyšetření. Přesnou částku si můžete předem jednoduše spočítat v naší kalkulačce." },
          { question: "Platí se víkendový nebo noční příplatek?", answer: "U běžně plánovaných návštěv příplatky neúčtujeme. Pokud mě však potřebujete akutně o víkendu nebo v nočních hodinách (po 20:00) bez předchozího objednání, účtuje se pohotovostní příplatek (" + ADDITIONAL_FEES[0].priceCzk + " Kč o víkendu, " + ADDITIONAL_FEES[1].priceCzk + " Kč v noci). Na všem se vždy domluvíme po telefonu ještě před mým výjezdem." },
        ],
      },
      {
        heading: "Služby a příprava",
        items: [
          { question: "Lze udělat ultrazvuk přímo doma?", answer: "Ano, vozím s sebou přenosný ultrazvukový přístroj. V domácím prostředí můžeme v klidu zkontrolovat břišní orgány, močový měchýř nebo potvrdit březost." },
          { question: "Provádíte odběry krve doma?", answer: "Ano, odběr krve doma je ideální zejména pro zvířata, která jsou v ordinaci ve velkém stresu. Vzorky odesílám do akreditované laboratoře a většinu výsledků máme k dispozici hned druhý pracovní den." },
          { question: "Musí být zvíře před odběrem nalačno?", answer: "Záleží na tom, jaké testy budeme provádět. U běžného biochemického profilu je obvykle potřeba zhruba 8–12 hodin nalačno (voda nevadí). U jiných vyšetření nebo u pacientů s cukrovkou to naopak nutné není. Vše si upřesníme předem při domluvě termínu – bez předchozí domluvy zvířeti krmení sami neupírejte." },
          { question: "Můžete při jedné návštěvě ošetřit více zvířat?", answer: "Samozřejmě, je to velmi časté a praktické řešení. Dejte mi jen předem vědět, kolik zvířátek doma máte a co budou potřebovat, abych si na vás vyhradila dostatek času. Výjezdový poplatek za dopravu samozřejmě platíte pouze jednou." },
          { question: "Lze při jedné návštěvě spojit odběr krve a ultrazvuk?", answer: "Určitě ano. Pokud má zvířátko komplexnější potíže, je takové spojení ideální. Jen mi to prosím řekněte při objednání, ať máme dostatek času a zvířátko zbytečně nehoníme." },
          { question: "Očkujete také králíky?", answer: "Ano, očkuji i králíčky (proti moru a myxomatóze vakcínou Nobivac Myxo-RHD). Při objednání si potvrdíme dostupnost vakcíny a domluvíme termín." },
          { question: "Lze doma ošetřit i drobné poranění?", answer: "Ano, běžné povrchové rány, oděrky, tržné ranky či zatržené drápky zvládneme ošetřit přímo doma. Do telefonu mi prosím popište, jak zranění vypadá, abychom zhodnotili, zda není nutný chirurgický zákrok v narkóze na klinice." },
        ],
      },
      {
        heading: "Objednání a dostupnost",
        items: [
          { question: "Do jakých míst přijíždíte?", answer: "Působím především v Praze, Benešově a přilehlém okolí Středočeského kraje. Přehled hlavních lokalit najdete na stránce výjezdových oblastí, dostupnost vaší konkrétní adresy si snadno potvrdíme po telefonu nebo na WhatsAppu." },
          { question: "Přijedete také do Karlína nebo na Letnou?", answer: "Ano, do Karlína (Praha 8) i na Letnou (Praha 7) jezdím pravidelně. Kilometrovné se počítá podle jednosměrné vzdálenosti od bližší základny sazbou " + KILOMETER_FEE + " Kč za kilometr v každém směru, k tomu se účtuje základní výjezd " + FIXED_FEE + " Kč a cena ošetření." },
          { question: "Jak rychle můžete přijet?", answer: "Záleží na mém aktuálním denním harmonogramu a dopravní situaci. Napište mi na WhatsApp nebo zavolejte, sdělte svou adresu a co se děje – obratem vám potvrdím nejbližší volný čas." },
          { question: "Je mobilní veterina nonstop pohotovost?", answer: "Ne. Jsem terénní veterinářka a výjezdy plánuji po vzájemné domluvě. Nemám nepřetržitou službu. Pokud je vaše zvíře v akutním ohrožení života nebo v těžkém šoku, neprodleně kontaktujte specializovanou nonstop veterinární kliniku." },
          { question: "Mluví veterinářka anglicky?", answer: "Ano, hovořím plynule anglicky. Zahraniční klienti mohou bez obav zavolat nebo napsat na WhatsApp v angličtině." },
          { question: "Provádíte kastraci u zvířete doma?", answer: "Kastrace psů i koček provádím výhradně v ordinaci v Benešově. Jedná se o břišní chirurgický zákrok, který vyžaduje sterilní prostředí sálu a anesteziologický monitoring." },
          { question: "Můžete přijet k úzkostné kočce nebo staršímu zvířeti?", answer: "Ano, právě pro ně má domácí návštěva největší smysl. Ke kočkám, které nesnášejí přepravku a cizí prostředí, i k pejskům seniorům s pohybovými potížemi jezdím denně. Na pacienta nespěchám, nechám ho očichat si mě a tempo vyšetření přizpůsobím jeho pohodě." },
        ],
      },
    ],
  },
  {
    slug: "veterinar-pro-bazlive-kocky",
    title: "Špatně snáší vaše kočka cestu k veterináři? Přijedu za vámi domů.",
    metaTitle: "Veterinářka doma pro plaché a bojácné kočky | Ducktorka",
    metaDescription: "Bojí se vaše kočka přepravky a cesty na veterinu? Přijedu přímo k vám domů. Klidné vyšetření v jejím tempu a bez zbytečného stresu.",
    intro: "Strach z přepravky, nervozita z jízdy autem a cizí pachy v čekárně plné psů – pro spoustu koček je návštěva veteriny velkým traumatem. Přímo u vás doma proběhne vyšetření v klidu a v jejím vlastním tempu. Předem mi řeknete, co kočičce vadí a co jí pomáhá, a já se její povaze přizpůsobím.",
    sections: [
      {
        heading: "Co všechno zvládneme u kočky vyšetřit doma?",
        paragraphs: [
          "V domácím prostředí zvládneme většinu běžné péče: preventivní prohlídku, šetrné očkování (používám neadjuvantní vakcíny Purevax), odběr krve i vyšetření přenosným ultrazvukem. Ráda pomohu také při chronických onemocněních, paliativní péči nebo drobných poraněních.",
          "Každá kočička je osobnost. Některá se schová pod postel, jiná potřebuje čas na očichání a další ocení vyšetření přímo ve svém pelíšku. Napište mi předem, co vaši kočku rozrušuje a jak reaguje na cizí lidi – vyšetření nastavíme tak, aby pro ni bylo co nejméně stresující.",
        ],
      },
      {
        heading: "Jak kočce návštěvu co nejvíce usnadnit?",
        paragraphs: [
          "Před mým příjezdem připravte klidnou místnost, kde se kočka cítí v bezpečí (ideálně obývák nebo ložnice), a zavřete dveře do těžko přístupných skrýší. Nechte jí po ruce oblíbenou deku nebo pelíšek a nachystejte očkovací průkaz či předchozí zprávy.",
          "Zklidňující přípravky (např. Gabapentin) podávejte pouze po předchozí telefonické domluvě se mnou. Bez domluvy kočce neomezujte ani krmení. Všechny detaily si spolu řekneme předem.",
        ],
      },
      {
        heading: "Kdy je přece jen bezpečnější navštívit kliniku?",
        paragraphs: [
          "Některá vyšetření a zákroky vyžadují plné vybavení kliniky – zejména chirurgické operace, akutní neprůchodnost močových cest (např. u kocoura, který nemůže močit), těžká dušnost nebo nutnost hospitalizace na kyslíku. Pokud z popisu potíží vyhodnotím, že domácí péče nestačí, otevřeně vám to řeknu a doporučím vhodné pracoviště.",
        ],
      },
    ],
  },
  {
    slug: "veterinar-pro-seniory",
    title: "Péče o starší psy a kočky v pohodlí domova",
    metaTitle: "Veterinář pro starší psy a kočky | Péče doma | Ducktorka",
    metaDescription: "Domácí veterinární návštěvy pro psí a kočičí seniory. Šetrné preventivní prohlídky, odběry krve, sono a nastavení úlevy od bolesti bez stresu z cestování.",
    intro: "Dělá vašemu pejskovi problém naskakování do auta, trápí ho bolavé klouby, nebo se kočičí senior v cizím prostředí snadno vyleká? Domácí návštěva ušetří starším zvířátkům zbytečnou námahu a stres. V klidu vašeho domova zhodnotíme jejich zdravotní stav a nastavíme péči tak, aby si užívali spokojené stáří.",
    sections: [
      {
        heading: "Jaká péče je pro seniory doma nejvhodnější?",
        paragraphs: [
          "U starších psů a koček doporučuji pravidelné preventivní prohlídky a kontrolní odběry krve (zaměřené zejména na funkci ledvin, jater a hladinu cukru). Vše zvládneme přímo u vás v obýváku. Vzorky odesílám do laboratoře a přenosným ultrazvukem můžeme zkontrolovat stav vnitřních orgánů.",
          "Pokud se zvířátko potýká s artrózou, selháváním ledvin, cukrovkou nebo jiným chronickým neduhem, nastavíme vhodnou podpůrnou a paliativní léčbu, včetně účinného tlumení bolesti. Cílem je zachovat co nejvyšší kvalitu života a pohodlí.",
        ],
      },
      {
        heading: "Co si připravit před mou návštěvou?",
        paragraphs: [
          "Připravte si očkovací průkaz a seznam všech léků a doplňků, které zvíře užívá, včetně dávkování. Sepište si také změny, kterých jste si v poslední době všimli – zda více pije, hubne, hůře vstává nebo má jiné stravovací návyky. Každý detail je pro správné posouzení důležitý.",
        ],
      },
      {
        heading: "Kdy je nutné vyhledat pohotovostní kliniku?",
        paragraphs: [
          "Při náhlém kolapsu, podezření na cévní příhodu, těžkém záchvatu nebo akutní dušnosti je potřeba okamžitá intenzivní péče na nonstop veterinární klinice s kyslíkovým boxem. V takových chvílích nečekejte na výjezd a vyrazte přímo na pohotovost.",
        ],
      },
    ],
  },
];
