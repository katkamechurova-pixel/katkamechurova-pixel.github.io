export const TRAVEL_POLICY = {
  startingFeeCzk: 420,
  perKmEachDirectionCzk: 20,
  chargedDirectionsPerVisit: 2,
  distanceSource: "Google Maps",
  bases: [
    { id: "prague-8", nameCs: "Praha 8 – Invalidovna", nameEn: "Prague 8 – Invalidovna" },
    { id: "benesov", nameCs: "Benešov", nameEn: "Benešov" },
  ],
  freeKilometreAreas: [
    { id: "prague-2", nameCs: "Praha 2", nameEn: "Prague 2" },
    { id: "prague-3", nameCs: "Praha 3", nameEn: "Prague 3" },
    { id: "prague-7", nameCs: "Praha 7", nameEn: "Prague 7" },
    { id: "prague-8", nameCs: "Praha 8", nameEn: "Prague 8" },
    { id: "benesov", nameCs: "Benešov", nameEn: "Benešov" },
  ],
} as const;

export function getFreeKilometreAreas(language: "cs" | "en"): string {
  const names = TRAVEL_POLICY.freeKilometreAreas.map((area) => language === "cs" ? area.nameCs : area.nameEn);
  const last = names.pop();
  return names.length ? `${names.join(", ")} ${language === "cs" ? "a" : "and"} ${last}` : last ?? "";
}

export function getFreeKilometreAreasIn(language: "cs" | "en"): string {
  return language === "cs" ? "Praze 2, 3, 7, 8 a Benešově" : getFreeKilometreAreas("en");
}

export const FIXED_FEE = TRAVEL_POLICY.startingFeeCzk;
export const KILOMETER_FEE = TRAVEL_POLICY.perKmEachDirectionCzk;

export const PRICING_VARIABILITY_NOTICE = {
  cs: "Ceny jsou orientační. Konečná částka se odvíjí od spotřebovaného materiálu a konkrétních léků – jejich dávkování se totiž vždy počítá na míru podle hmotnosti a zdravotního stavu vašeho mazlíčka. Před návštěvou se vždy domluvíme na rozsahu péče a předpokládané ceně, abyste předem přesně věděli, s čím počítat.",
  en: "Prices in this list are indicative. The final total may vary depending on the care needed, your pet’s weight and dosage, current medicine prices, and materials used. The list may not state whether every item includes a clinical examination. I will confirm the care required and total before the visit.",
} as const;

export const VACCINE_PRICE_NOTICE = {
  cs: "Ceny vakcín jsou orientační a odvíjejí se od aktuálních cen od dodavatele. K ceně vakcíny se připočítává cestovné a případně další materiál či vyšetření, pokud ho zvířátko potřebuje. Předem vám vždy na rovinu potvrdím celkovou předpokládanou částku.",
  en: "Vaccine prices are indicative and may change with the current price of the product. The list does not specify whether the price for each vaccine includes administration, materials or a clinical examination. Travel is charged separately. I will confirm the scope and total before the visit.",
} as const;

export type PriceBasis = "fixed" | "from" | "individual";
export type CatalogueKind = "service" | "vaccine";

export interface ServiceCatalogueEntry {
  id: string;
  categoryId: string;
  kind: CatalogueKind;
  labelCs: string;
  labelEn: string;
  publishedPriceCzk: number | null;
  priceBasis: PriceBasis;
  offeredAtHome: boolean;
  species?: string[];
  productName?: string;
  tableGroup?: string;
  tableGroupLabel?: string;
  includesClinicalExam: boolean | null;
  requiresAvailabilityConfirmation: boolean;
}

/**
 * Public treatment prices used by the homepage, pricing calculator and
 * vaccination price table. `null` means the price has not been published.
 */
export const SERVICE_CATALOGUE: ServiceCatalogueEntry[] = [
  { id: "preventive-check", categoryId: "preventive-check", kind: "service", labelCs: "Preventivní prohlídka", labelEn: "Preventive examination", publishedPriceCzk: 500, priceBasis: "from", offeredAtHome: true, includesClinicalExam: null, requiresAvailabilityConfirmation: true },
  { id: "vaccination", categoryId: "vaccination", kind: "service", labelCs: "Vakcinace", labelEn: "Vaccination", publishedPriceCzk: null, priceBasis: "from", offeredAtHome: true, includesClinicalExam: null, requiresAvailabilityConfirmation: true },
  { id: "parasite-prevention", categoryId: "parasite-prevention", kind: "service", labelCs: "Antiparazitární ochrana", labelEn: "Parasite prevention", publishedPriceCzk: 150, priceBasis: "from", offeredAtHome: true, includesClinicalExam: null, requiresAvailabilityConfirmation: true },
  { id: "microchipping", categoryId: "microchipping", kind: "service", labelCs: "Čipování", labelEn: "Microchipping", publishedPriceCzk: 800, priceBasis: "from", offeredAtHome: true, includesClinicalExam: null, requiresAvailabilityConfirmation: true },
  { id: "blood-tests", categoryId: "blood-tests", kind: "service", labelCs: "Odběr krve + laboratorní vyšetření", labelEn: "Blood draw + laboratory testing", publishedPriceCzk: 800, priceBasis: "from", offeredAtHome: true, includesClinicalExam: null, requiresAvailabilityConfirmation: true },
  { id: "minor-injury", categoryId: "minor-injury", kind: "service", labelCs: "Ošetření drobného poranění", labelEn: "Minor injury treatment", publishedPriceCzk: 500, priceBasis: "from", offeredAtHome: true, includesClinicalExam: null, requiresAvailabilityConfirmation: true },
  { id: "consultation", categoryId: "consultation", kind: "service", labelCs: "Konzultace zdravotního stavu", labelEn: "Health consultation", publishedPriceCzk: 400, priceBasis: "from", offeredAtHome: true, includesClinicalExam: null, requiresAvailabilityConfirmation: true },
  { id: "euthanasia", categoryId: "euthanasia", kind: "service", labelCs: "Eutanazie v domácím prostředí", labelEn: "Home euthanasia", publishedPriceCzk: 1500, priceBasis: "from", offeredAtHome: true, includesClinicalExam: null, requiresAvailabilityConfirmation: true },
  { id: "palliative-care", categoryId: "palliative-care", kind: "service", labelCs: "Paliativní péče", labelEn: "Palliative care", publishedPriceCzk: null, priceBasis: "individual", offeredAtHome: true, includesClinicalExam: null, requiresAvailabilityConfirmation: true },
  { id: "castration-cat-male", categoryId: "castration", kind: "service", labelCs: "Kastrace kocoura (ordinace Benešov)", labelEn: "Male cat castration (Benešov clinic)", publishedPriceCzk: 1000, priceBasis: "from", offeredAtHome: false, species: ["cat"], includesClinicalExam: null, requiresAvailabilityConfirmation: true },
  { id: "castration-cat-female", categoryId: "castration", kind: "service", labelCs: "Kastrace kočky (ordinace Benešov)", labelEn: "Female cat spay (Benešov clinic)", publishedPriceCzk: 1400, priceBasis: "from", offeredAtHome: false, species: ["cat"], includesClinicalExam: null, requiresAvailabilityConfirmation: true },

  { id: "cat-rabies-purevax", categoryId: "vaccination", kind: "vaccine", labelCs: "Purevax Rabies", labelEn: "Purevax Rabies", productName: "Purevax Rabies", tableGroup: "cat-rabies", tableGroupLabel: "Kočka · vzteklina", species: ["cat"], publishedPriceCzk: 860, priceBasis: "fixed", offeredAtHome: true, includesClinicalExam: null, requiresAvailabilityConfirmation: true },
  { id: "cat-rCP-purevax", categoryId: "vaccination", kind: "vaccine", labelCs: "Purevax RCP", labelEn: "Purevax RCP", productName: "Purevax RCP", tableGroup: "cat-infectious", tableGroupLabel: "Kočka · infekční nemoci", species: ["cat"], publishedPriceCzk: 850, priceBasis: "fixed", offeredAtHome: true, includesClinicalExam: null, requiresAvailabilityConfirmation: true },
  { id: "cat-rCPch-purevax", categoryId: "vaccination", kind: "vaccine", labelCs: "Purevax RCPCh", labelEn: "Purevax RCPCh", productName: "Purevax RCPCh", tableGroup: "cat-infectious", tableGroupLabel: "Kočka · infekční nemoci", species: ["cat"], publishedPriceCzk: 1070, priceBasis: "fixed", offeredAtHome: true, includesClinicalExam: null, requiresAvailabilityConfirmation: true },
  { id: "cat-rcpch-felv-purevax", categoryId: "vaccination", kind: "vaccine", labelCs: "Purevax RCPCH FeLV", labelEn: "Purevax RCPCH FeLV", productName: "Purevax RCPCH FeLV", tableGroup: "cat-infectious", tableGroupLabel: "Kočka · infekční nemoci", species: ["cat"], publishedPriceCzk: 1350, priceBasis: "fixed", offeredAtHome: true, includesClinicalExam: null, requiresAvailabilityConfirmation: true },
  { id: "cat-tricat-nobivac", categoryId: "vaccination", kind: "vaccine", labelCs: "Nobivac Tricat", labelEn: "Nobivac Tricat", productName: "Nobivac Tricat", tableGroup: "cat-infectious", tableGroupLabel: "Kočka · infekční nemoci", species: ["cat"], publishedPriceCzk: 770, priceBasis: "fixed", offeredAtHome: true, includesClinicalExam: null, requiresAvailabilityConfirmation: true },
  { id: "dog-rabies-nobivac-r", categoryId: "vaccination", kind: "vaccine", labelCs: "Nobivac R – vzteklina na 3 roky", labelEn: "Nobivac R – 3-year rabies vaccine", productName: "Nobivac R", tableGroup: "dog-rabies", tableGroupLabel: "Pes · vzteklina", species: ["dog"], publishedPriceCzk: 510, priceBasis: "fixed", offeredAtHome: true, includesClinicalExam: null, requiresAvailabilityConfirmation: true },
  { id: "dog-rabies-nobivac-rl", categoryId: "vaccination", kind: "vaccine", labelCs: "Nobivac RL", labelEn: "Nobivac RL", productName: "Nobivac RL", tableGroup: "dog-rabies", tableGroupLabel: "Pes · vzteklina", species: ["dog"], publishedPriceCzk: 600, priceBasis: "fixed", offeredAtHome: true, includesClinicalExam: null, requiresAvailabilityConfirmation: true },
  { id: "dog-dhp-nobivac", categoryId: "vaccination", kind: "vaccine", labelCs: "Nobivac DHP", labelEn: "Nobivac DHP", productName: "Nobivac DHP", tableGroup: "dog-infectious", tableGroupLabel: "Pes · infekční nemoci", species: ["dog", "ferret"], publishedPriceCzk: 645, priceBasis: "fixed", offeredAtHome: true, includesClinicalExam: null, requiresAvailabilityConfirmation: true },
  { id: "dog-dhppi-nobivac", categoryId: "vaccination", kind: "vaccine", labelCs: "Nobivac DHPPi", labelEn: "Nobivac DHPPi", productName: "Nobivac DHPPi", tableGroup: "dog-infectious", tableGroupLabel: "Pes · infekční nemoci", species: ["dog"], publishedPriceCzk: 690, priceBasis: "fixed", offeredAtHome: true, includesClinicalExam: null, requiresAvailabilityConfirmation: true },
  { id: "dog-dhppi-l4-nobivac", categoryId: "vaccination", kind: "vaccine", labelCs: "Nobivac DHPPi+L4", labelEn: "Nobivac DHPPi+L4", productName: "Nobivac DHPPi+L4", tableGroup: "dog-infectious", tableGroupLabel: "Pes · infekční nemoci", species: ["dog"], publishedPriceCzk: 810, priceBasis: "fixed", offeredAtHome: true, includesClinicalExam: null, requiresAvailabilityConfirmation: true },
  { id: "dog-dp-plus-nobivac", categoryId: "vaccination", kind: "vaccine", labelCs: "Nobivac DP Plus", labelEn: "Nobivac DP Plus", productName: "Nobivac DP Plus", tableGroup: "dog-infectious", tableGroupLabel: "Pes · infekční nemoci", species: ["dog"], publishedPriceCzk: 775, priceBasis: "fixed", offeredAtHome: true, includesClinicalExam: null, requiresAvailabilityConfirmation: true },
  { id: "dog-pi-l4-nobivac", categoryId: "vaccination", kind: "vaccine", labelCs: "Nobivac Pi+L4", labelEn: "Nobivac Pi+L4", productName: "Nobivac Pi+L4", tableGroup: "dog-infectious", tableGroupLabel: "Pes · infekční nemoci", species: ["dog"], publishedPriceCzk: 630, priceBasis: "fixed", offeredAtHome: true, includesClinicalExam: null, requiresAvailabilityConfirmation: true },
  { id: "dog-l4-nobivac", categoryId: "vaccination", kind: "vaccine", labelCs: "Nobivac L4", labelEn: "Nobivac L4", productName: "Nobivac L4", tableGroup: "dog-infectious", tableGroupLabel: "Pes · infekční nemoci", species: ["dog"], publishedPriceCzk: 545, priceBasis: "fixed", offeredAtHome: true, includesClinicalExam: null, requiresAvailabilityConfirmation: true },
  { id: "dog-kc-nobivac", categoryId: "vaccination", kind: "vaccine", labelCs: "Nobivac KC", labelEn: "Nobivac KC", productName: "Nobivac KC", tableGroup: "dog-infectious", tableGroupLabel: "Pes · infekční nemoci", species: ["dog"], publishedPriceCzk: 690, priceBasis: "fixed", offeredAtHome: true, includesClinicalExam: null, requiresAvailabilityConfirmation: true },
  { id: "dog-dhppi-l4-biocan", categoryId: "vaccination", kind: "vaccine", labelCs: "Biocan Novel DHPPi+L4", labelEn: "Biocan Novel DHPPi+L4", productName: "Biocan Novel DHPPi+L4", tableGroup: "dog-infectious", tableGroupLabel: "Pes · infekční nemoci", species: ["dog"], publishedPriceCzk: 750, priceBasis: "fixed", offeredAtHome: true, includesClinicalExam: null, requiresAvailabilityConfirmation: true },
  { id: "dog-pi-l4-biocan", categoryId: "vaccination", kind: "vaccine", labelCs: "Biocan Novel Pi+L4", labelEn: "Biocan Novel Pi+L4", productName: "Biocan Novel Pi+L4", tableGroup: "dog-infectious", tableGroupLabel: "Pes · infekční nemoci", species: ["dog"], publishedPriceCzk: 720, priceBasis: "fixed", offeredAtHome: true, includesClinicalExam: null, requiresAvailabilityConfirmation: true },
  { id: "dog-tetanus-cloteid", categoryId: "vaccination", kind: "vaccine", labelCs: "Tetanus (Cloteid 4)", labelEn: "Tetanus (Cloteid 4)", productName: "Cloteid 4", tableGroup: "dog-infectious", tableGroupLabel: "Pes · infekční nemoci", species: ["dog"], publishedPriceCzk: 690, priceBasis: "fixed", offeredAtHome: true, includesClinicalExam: null, requiresAvailabilityConfirmation: true },
  { id: "dog-lyme-vaccine", categoryId: "vaccination", kind: "vaccine", labelCs: "Borelióza", labelEn: "Lyme disease", productName: "Borelióza", tableGroup: "dog-infectious", tableGroupLabel: "Pes · infekční nemoci", species: ["dog"], publishedPriceCzk: 930, priceBasis: "fixed", offeredAtHome: true, includesClinicalExam: null, requiresAvailabilityConfirmation: true },
  { id: "rabbit-myx-rhd", categoryId: "vaccination", kind: "vaccine", labelCs: "Nobivac Myxo-RHD", labelEn: "Nobivac Myxo-RHD", productName: "Nobivac Myxo-RHD", tableGroup: "rabbit", tableGroupLabel: "Králík", species: ["rabbit"], publishedPriceCzk: 690, priceBasis: "fixed", offeredAtHome: true, includesClinicalExam: null, requiresAvailabilityConfirmation: true },
];

export const SERVICE_CATEGORIES = SERVICE_CATALOGUE.filter((entry) => entry.kind === "service");
export const VACCINE_PRICES = SERVICE_CATALOGUE.filter((entry) => entry.kind === "vaccine");

export const ADDITIONAL_FEES = [
  {
    id: "weekend-visit",
    labelCs: "Víkendový poplatek (pouze neobjednaní)",
    labelEn: "Weekend fee (non-booked visits only)",
    priceCzk: 500,
  },
  {
    id: "night-visit",
    labelCs: "Noční poplatek po 20:00 (pouze neobjednaní)",
    labelEn: "Night fee after 20:00 (non-booked visits only)",
    priceCzk: 600,
  },
] as const;

export interface PricingExampleLine {
  labelCs: string;
  labelEn: string;
  amountCzk: number;
}

export interface PricingExample {
  id: string;
  titleCs: string;
  titleEn: string;
  descriptionCs: string;
  descriptionEn: string;
  lines: PricingExampleLine[];
  totalCzk: number;
}

function makePricingExample(
  id: string,
  titleCs: string,
  titleEn: string,
  descriptionCs: string,
  descriptionEn: string,
  lines: PricingExampleLine[],
): PricingExample {
  return {
    id,
    titleCs,
    titleEn,
    descriptionCs,
    descriptionEn,
    lines,
    totalCzk: lines.reduce((total, line) => total + line.amountCzk, 0),
  };
}

/**
 * Illustrative totals combine example treatment prices with the currently
 * published travel rule. They are estimates of the displayed items, not final
 * quotes; the displayed notices explain what may change the total.
 */
export const PRICING_EXAMPLES: PricingExample[] = [
  makePricingExample(
    "dog-rabies-at-base",
    "Pes — očkování proti vzteklině",
    "Dog — rabies vaccination",
    "Příklad počítá s orientační cenou vakcíny Nobivac R v oblasti bez kilometrovného (Praha 2, 3, 7, 8 nebo Benešov). Zahrnuje základní výjezd a vakcínu. Přesnou celkovou cenu si potvrdíme předem při domluvě termínu.",
    "This example uses the indicative listed price for Nobivac R. The final vaccination price may vary depending on materials and any clinical examination; I will confirm the scope and total before the visit.",
    [
      { labelCs: "Vakcína Nobivac R — orientační cena", labelEn: "Nobivac R vaccine — indicative price", amountCzk: 510 },
      { labelCs: "Startovní výjezdový poplatek", labelEn: "Starting call-out fee", amountCzk: FIXED_FEE },
      { labelCs: "Doprava v oblasti bez kilometrovného", labelEn: "Per-kilometre charge in a 0 km area", amountCzk: 0 },
    ],
  ),
  makePricingExample(
    "cat-vaccine-and-exam-at-base",
    "Kočka — Purevax RCP a klinické vyšetření",
    "Cat — Purevax RCP vaccination and clinical examination",
    "Modelový příklad pro kočku v oblasti bez kilometrovného. Zahrnuje základní výjezdový poplatek, vakcínu Purevax RCP a klinické posouzení zdravotního stavu před očkováním.",
    "This example includes Purevax RCP vaccination and a clinical examination. Additional materials or procedures may change the price; I will confirm the scope and total before the visit.",
    [
      { labelCs: "Očkování Purevax RCP a klinické vyšetření", labelEn: "Purevax RCP vaccination and clinical examination", amountCzk: 850 },
      { labelCs: "Startovní výjezdový poplatek", labelEn: "Starting call-out fee", amountCzk: FIXED_FEE },
      { labelCs: "Doprava v oblasti bez kilometrovného", labelEn: "Per-kilometre charge in a 0 km area", amountCzk: 0 },
    ],
  ),
  makePricingExample(
    "blood-panel-at-base",
    "Starší pes nebo kočka — odběr a vyšetření krve",
    "Senior pet — blood draw and selected blood tests",
    "Příklad preventivního rozboru krve pro psího nebo kočičího seniora v bezkilometrové zóně: zahrnuje odběr krve, biochemický panel V, hematologii a základní výjezd.",
    "This example includes a blood draw, biochemistry (panel V) and haematology. Additional tests, medicines or materials may change the price; I will confirm the tests and total before the visit.",
    [
      { labelCs: "Odběr krve", labelEn: "Blood draw", amountCzk: 125 },
      { labelCs: "Biochemické vyšetření krve — panel V", labelEn: "Blood biochemistry — panel V", amountCzk: 620 },
      { labelCs: "Hematologické vyšetření krve", labelEn: "Blood haematology", amountCzk: 420 },
      { labelCs: "Startovní výjezdový poplatek", labelEn: "Starting call-out fee", amountCzk: FIXED_FEE },
      { labelCs: "Doprava v oblasti bez kilometrovného", labelEn: "Per-kilometre charge in a 0 km area", amountCzk: 0 },
    ],
  ),
];

export function getPublishedPrice(entry: ServiceCatalogueEntry): number | null {
  if (entry.publishedPriceCzk !== null) return entry.publishedPriceCzk;
  if (entry.categoryId === "vaccination") {
    const vaccinePrices = VACCINE_PRICES
      .map((vaccine) => vaccine.publishedPriceCzk)
      .filter((price): price is number => price !== null);
    return vaccinePrices.length > 0 ? Math.min(...vaccinePrices) : null;
  }
  return null;
}

export function calculateTravelFee(oneWayDistanceKm: number): number {
  if (!Number.isFinite(oneWayDistanceKm) || oneWayDistanceKm < 0) {
    throw new Error("Distance must be a non-negative number of kilometres.");
  }
  return FIXED_FEE + oneWayDistanceKm * TRAVEL_POLICY.chargedDirectionsPerVisit * KILOMETER_FEE;
}

export function formatCzk(amount: number, locale: "cs-CZ" | "en-GB" = "cs-CZ"): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "CZK",
    maximumFractionDigits: 0,
  }).format(amount);
}
