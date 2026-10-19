import { FIXED_FEE, getFreeKilometreAreasIn, KILOMETER_FEE } from "./pricing";

export interface ServiceFaq {
  question: string;
  answer: string;
}

export const serviceFaqs: Record<string, ServiceFaq[]> = {
  vakcinace: [
    {
      question: "Kolik stojí očkování psa nebo kočky doma?",
      answer: "Ceny v tabulce jsou orientační a závisí na zvolené vakcíně. Celkovou cenu může ovlivnit také potřebný materiál nebo klinické vyšetření; přesný rozsah potvrdíme před návštěvou. Cestovné se účtuje zvlášť: startovní výjezdový poplatek je " + FIXED_FEE + " Kč. V " + getFreeKilometreAreasIn("cs") + " se kilometry neúčtují; jinde se jednosměrná vzdálenost od bližší základny účtuje tam i zpět, za " + KILOMETER_FEE + " Kč/km v každém směru.",
    },
    {
      question: "Jak se vybírá vhodná vakcína?",
      answer: "Vakcína a schéma očkování se volí s ohledem na druh zvířete, jeho zdravotní stav, dosavadní očkování a životní styl. Konkrétní výběr potvrďte s veterinářkou.",
    },
    {
      question: "Co zahrnuje uvedená cena vakcíny?",
      answer: "Online ceník u každé vakcíny nerozepisuje, zda uvedená cena zahrnuje aplikaci, potřebný materiál nebo klinické vyšetření. Před návštěvou vám potvrdíme, co bude potřeba a kolik bude stát celá návštěva.",
    },
    {
      question: "Musím zvíře na očkování nějak připravit?",
      answer: "Při objednání sdělte druh a věk zvířete a datum posledního očkování. Pokud bude potřeba další příprava, veterinářka vám ji upřesní.",
    },
  ],
  "odbery-krve": [
    {
      question: "Lze odebrat krev zvířeti přímo doma?",
      answer: "Ano, Ducktorka nabízí domácí odběry krve psů a koček. Rozsah laboratorního vyšetření se domlouvá podle důvodu návštěvy.",
    },
    {
      question: "Kolik stojí odběr krve a laboratorní vyšetření?",
      answer: "Zveřejněná cena začíná na 800 Kč za odběr krve a laboratorní vyšetření. Cestovné se účtuje zvlášť: " + FIXED_FEE + " Kč jako startovní poplatek. V " + getFreeKilometreAreasIn("cs") + " se kilometry neúčtují; jinde se jednosměrná vzdálenost od bližší základny účtuje tam i zpět, za " + KILOMETER_FEE + " Kč/km v každém směru. Přesnou cenu potvrďte podle rozsahu testů.",
    },
    {
      question: "Kdy bývají výsledky?",
      answer: "Podle informací na stránce služby bývá většina výsledků dostupná následující den. Konkrétní čas závisí na zvoleném laboratorním vyšetření.",
    },
    {
      question: "Musí být zvíře před odběrem nalačno?",
      answer: "Potřeba lačnění závisí na konkrétním testu a zdravotním stavu. Nedržte zvíře nalačno bez pokynu; ověřte přípravu s veterinářkou při objednání.",
    },
  ],
  "sono-vysetreni": [
    {
      question: "Provádí Ducktorka ultrazvuk přímo doma?",
      answer: "Ano. K domácím návštěvám používá přenosný ultrazvukový přístroj. Rozsah a vhodnost vyšetření se domlouvají podle konkrétního případu.",
    },
    {
      question: "Jaká vyšetření lze provést ultrazvukem?",
      answer: "Stránka služby uvádí vyšetření břišní dutiny, močových cest a diagnostiku březosti. Veterinářka potvrdí, zda je ultrazvuk vhodný pro potíže vašeho zvířete.",
    },
    {
      question: "Kolik stojí domácí ultrazvuk?",
      answer: "Cena ultrazvukového vyšetření není v online ceníku uvedena. Cestovné tvoří startovní poplatek " + FIXED_FEE + " Kč; v " + getFreeKilometreAreasIn("cs") + " se další kilometry neúčtují. Jinde se jednosměrná vzdálenost podle Google Maps účtuje tam i zpět za " + KILOMETER_FEE + " Kč/km každým směrem. Při objednání si potvrďte konečnou cenu vyšetření i dopravy.",
    },
    {
      question: "Je před ultrazvukovým vyšetřením potřeba příprava?",
      answer: "Příprava může záviset na vyšetřované oblasti. Popište potíže při objednání a veterinářka vám sdělí, zda je potřeba se na návštěvu připravit.",
    },
  ],
};
