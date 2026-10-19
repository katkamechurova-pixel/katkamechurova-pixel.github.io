import { FIXED_FEE, getFreeKilometreAreasIn, KILOMETER_FEE } from "./pricing";

export interface ServiceFaq {
  question: string;
  answer: string;
}

export const serviceFaqs: Record<string, ServiceFaq[]> = {
  vakcinace: [
    {
      question: "Kolik stojí očkování psa nebo kočky doma?",
      answer: "Cena se skládá z ceny vybrané vakcíny a cestovného. Základní výjezdový poplatek je " + FIXED_FEE + " Kč, přičemž v " + getFreeKilometreAreasIn("cs") + " se kilometry neúčtují. Do ostatních míst připočítáváme " + KILOMETER_FEE + " Kč/km z bližší základny (počítá se cesta tam i zpět podle Google Maps). Před každým očkováním pejska nebo kočičku pečlivě prohlédnu a celkovou kalkulaci vám vždy předem potvrdím.",
    },
    {
      question: "Jak se vybírá vhodná vakcína?",
      answer: "Vakcínu a schéma očkování volím vždy individuálně podle věku zvířete, jeho celkového zdravotního stavu a životního stylu – jinak očkujeme kočku žijící výhradně doma v bytě a jinak loveckého psa nebo zvíře, které s vámi cestuje do zahraničí. U koček používám moderní a šetrné vakcíny Purevax bez adjuvantů.",
    },
    {
      question: "Co zahrnuje uvedená cena vakcíny?",
      answer: "Cena v tabulce je orientační cena samotné očkovací látky. K ní se připočítává výjezdové a případný spotřební materiál či podrobnější klinické vyšetření, pokud zrovna řešíme další zdravotní potíže. Přesný rozsah a konečnou částku s vámi vždy otevřeně proberu předem.",
    },
    {
      question: "Musím zvíře na očkování nějak připravit?",
      answer: "Žádná složitá příprava není nutná. Hlavní podmínkou je, aby bylo zvířátko v den očkování zdravé a v dobré kondici (nemělo teplotu, průjem, nekašlalo). Připravte si prosím očkovací průkaz nebo pas a nechte mazlíčka před mým příjezdem v klidu v jeho oblíbeném pokoji.",
    },
  ],
  "odbery-krve": [
    {
      question: "Lze odebrat krev zvířeti přímo doma?",
      answer: "Ano, odběr krve v domácím prostředí je pro psy i kočky mnohem příjemnější než v ordinaci. Zvíře zůstává ve svém známém revíru, což usnadňuje klidný průběh a navíc zabraňuje zkreslení některých parametrů stresem (např. glukózy u koček).",
    },
    {
      question: "Kolik stojí odběr krve a laboratorní vyšetření?",
      answer: "Základní biochemické či hematologické vyšetření včetně odběru začíná od 800 Kč (podle rozsahu požadovaných testů). K ceně se připočítává základní výjezdové " + FIXED_FEE + " Kč (v " + getFreeKilometreAreasIn("cs") + " bez kilometrovného, jinde se účtuje " + KILOMETER_FEE + " Kč/km tam i zpět). Předem se vždy domluvíme, jaké testy jsou pro vaše zvířátko potřeba, a potvrdím vám přesnou cenu.",
    },
    {
      question: "Kdy bývají k dispozici výsledky?",
      answer: "Odebrané vzorky odesílám do akreditované veterinární laboratoře. Většinu běžných rozborů (krevní obraz, jaterní a ledvinné testy) máme hotovou hned následující pracovní den. Jakmile mám výsledky k dispozici, zavolám vám a vše srozumitelně vysvětlím.",
    },
    {
      question: "Musí být zvíře před odběrem nalačno?",
      answer: "U většiny biochemických profilů je ideální lačnění zhruba 8 až 12 hodin (čerstvou vodu může zvířátko pít bez omezení). U štěňat, koťat nebo diabetiků však mohou platit jiná pravidla. Přesné pokyny si řekneme předem při domluvě termínu – bez předchozí domluvy krmení sami neomezujte.",
    },
  ],
  "sono-vysetreni": [
    {
      question: "Provádíte ultrazvuk přímo u nás doma?",
      answer: "Ano, na výjezdy vozím moderní přenosný ultrazvuk. Vyšetření probíhá v klidu na podlaze, na dece nebo v pelíšku vašeho mazlíčka, bez zbytečného přenášení a nervozity.",
    },
    {
      question: "Co všechno lze ultrazvukem doma vyšetřit?",
      answer: "Přenosným sonem nejčastěji vyšetřuji orgány dutiny břišní (ledviny, močový měchýř, játra, slezinu či střeva) při zažívacích a urologických potížích, a také spolehlivě diagnostikuji a potvrzuji březost.",
    },
    {
      question: "Kolik stojí domácí ultrazvukové vyšetření?",
      answer: "Cena ultrazvuku se odvíjí od rozsahu a náročnosti vyšetření (zda kontrolujeme jeden orgán, nebo celé bříško). K ceně péče se připočítává startovní výjezd " + FIXED_FEE + " Kč (v " + getFreeKilometreAreasIn("cs") + " je doprava bez dalších poplatků za kilometry, jinde platí sazba " + KILOMETER_FEE + " Kč/km tam i zpět). Přesnou částku vám ráda spočítám předem podle konkrétních obtíží zvířete.",
    },
    {
      question: "Je před vyšetřením potřeba nějaká příprava?",
      answer: "Pro přehledné zobrazení břišních orgánů je vhodné, aby bylo zvířátko několik hodin nalačno (plný žaludek může stínit ostatní orgány). Při kontrole močového měchýře je naopak ideální zvíře těsně před návštěvou nevenčit. Aby měl ultrazvuk dobrý kontakt s kůží, bývá také nutné vyholit malé okénko na srsti – vše vám dopředu vysvětlím při domluvě.",
    },
  ],
};
