import { useState } from "react";
import {
  calculateTravelFee,
  FIXED_FEE,
  formatCzk,
  getFreeKilometreAreas,
  getFreeKilometreAreasIn,
  getPublishedPrice,
  KILOMETER_FEE,
  PRICING_VARIABILITY_NOTICE,
  SERVICE_CATEGORIES,
  TRAVEL_POLICY,
} from "@/data/pricing";

type Language = "cs" | "en";

const copy = {
  cs: {
    service: "Vyberte ošetření",
    destination: "Kde má návštěva proběhnout?",
    base: `${getFreeKilometreAreas("cs")} – bez kilometrovného`,
    elsewhere: "Jiná adresa – zadám vzdálenost",
    kilometres: "Vzdálenost od bližší základny (jedním směrem)",
    kilometresHint: `Zadejte vzdálenost podle Google Maps z Prahy 8 – Invalidovny nebo z Benešova, podle toho, odkud je to blíž. Zpáteční cestu připočítá kalkulačka sama. Sazba je ${KILOMETER_FEE} Kč/km v každém směru.`,
    startingFee: "Základní poplatek za výjezd",
    distance: "Doprava",
    estimate: "Orientační cena návštěvy",
    askForDistance: "Pro výpočet ceny zadejte vzdálenost v km.",
    individual: "Cena ošetření se stanoví individuálně.",
    notQuote: `Kalkulačka slouží pro předběžnou představu o ceně návštěvy. ${PRICING_VARIABILITY_NOTICE.cs}`,
    priceUnavailable: "Cena ošetření není v online ceníku uvedena.",
  },
  en: {
    service: "Choose a service",
    destination: "Where will the visit take place?",
    base: `${getFreeKilometreAreas("en")} – 0 billed km`,
    elsewhere: "Another address – I will enter the billed kilometres",
    kilometres: "One-way distance from the nearer base (Google Maps)",
    kilometresHint: `Enter the one-way distance from Google Maps. Kilometres are charged there and back: CZK ${KILOMETER_FEE}/km each way. The bases are Prague 8 – Invalidovna and Benešov; no kilometres are charged in Prague 2, 3 or 7.`,
    startingFee: "Starting call-out fee",
    distance: "Travel",
    estimate: "Indicative visit total",
    askForDistance: "Enter the billed kilometres to calculate travel.",
    individual: "The service price is set individually.",
    notQuote: `This is an indicative calculation from the published price list, not a binding quote. ${PRICING_VARIABILITY_NOTICE.en}`,
    priceUnavailable: "A service price is not published online.",
  },
} as const;

const TravelPriceCalculator = ({ language = "cs" }: { language?: Language }) => {
  const t = copy[language];
  const locale = language === "cs" ? "cs-CZ" : "en-GB";
  const [serviceId, setServiceId] = useState("vaccination");
  const [isInFreeKmArea, setIsInFreeKmArea] = useState(true);
  const [distanceInput, setDistanceInput] = useState("");

  const service = SERVICE_CATEGORIES.find((entry) => entry.id === serviceId) ?? SERVICE_CATEGORIES[0];
  const treatmentPrice = getPublishedPrice(service);
  const distanceKm = isInFreeKmArea ? 0 : distanceInput.trim() === "" ? null : Number(distanceInput);
  const travelPrice = distanceKm === null || !Number.isFinite(distanceKm) || distanceKm < 0
    ? null
    : calculateTravelFee(distanceKm);
  const total = treatmentPrice !== null && travelPrice !== null
    ? treatmentPrice + travelPrice
    : null;
  const isFromPrice = service.priceBasis === "from";

  return (
    <section aria-labelledby="travel-price-calculator" className="bg-card rounded-3xl border border-border shadow-sm p-6 md:p-8">
      <div className="mb-6">
        <h2 id="travel-price-calculator" className="text-2xl font-heading font-bold text-foreground">
          {language === "cs" ? "Orientační kalkulačka návštěvy" : "Indicative visit calculator"}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {language === "cs"
            ? `Vyberte ošetření a místo návštěvy. K ceně péče připočítáme výjezd. V ${getFreeKilometreAreasIn("cs")} zaplatíte za dopravu jen základní poplatek, bez kilometrovného.`
            : `Service price plus the call-out fee. 0 km are billed in ${getFreeKilometreAreasIn("en")}; the starting fee always applies.`}
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="calculator-service" className="block text-sm font-semibold text-foreground mb-2">
            {t.service}
          </label>
          <select
            id="calculator-service"
            value={serviceId}
            onChange={(event) => setServiceId(event.target.value)}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground"
          >
            {SERVICE_CATEGORIES.filter((entry) => entry.offeredAtHome).map((entry) => {
              const price = getPublishedPrice(entry);
              const priceText = price === null
                ? (language === "cs" ? "individuálně" : "individual")
                : `${entry.priceBasis === "from" ? (language === "cs" ? "od " : "from ") : ""}${formatCzk(price, locale)}`;
              return (
                <option key={entry.id} value={entry.id}>
                  {language === "cs" ? entry.labelCs : entry.labelEn} — {priceText}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <label htmlFor="calculator-destination" className="block text-sm font-semibold text-foreground mb-2">
            {t.destination}
          </label>
          <select
            id="calculator-destination"
            value={isInFreeKmArea ? "free-km" : "other"}
            onChange={(event) => {
              const inFreeKmArea = event.target.value === "free-km";
              setIsInFreeKmArea(inFreeKmArea);
              if (inFreeKmArea) setDistanceInput("");
            }}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground"
          >
            <option value="free-km">{t.base}</option>
            <option value="other">{t.elsewhere}</option>
          </select>
        </div>

        {!isInFreeKmArea && (
          <div className="md:col-span-2">
            <label htmlFor="calculator-kilometres" className="block text-sm font-semibold text-foreground mb-2">
              {t.kilometres}
            </label>
            <div className="flex items-center gap-3">
              <input
                id="calculator-kilometres"
                type="number"
                min="0"
                step="1"
                inputMode="numeric"
                value={distanceInput}
                onChange={(event) => setDistanceInput(event.target.value)}
                placeholder="např. 9"
                className="w-36 rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground"
              />
              <span className="text-sm text-muted-foreground">km</span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">{t.kilometresHint}</p>
          </div>
        )}
      </div>

      <div className="mt-7 rounded-2xl bg-section-alt p-5 md:p-6" aria-live="polite">
        <div className="flex justify-between gap-4 border-b border-border/70 pb-3 text-sm">
          <span className="text-muted-foreground">
            {language === "cs" ? service.labelCs : service.labelEn}
          </span>
          <span className="font-semibold text-foreground text-right">
            {treatmentPrice === null
              ? (language === "cs" ? "individuálně" : "individual")
              : `${isFromPrice ? (language === "cs" ? "od " : "from ") : ""}${formatCzk(treatmentPrice, locale)}`}
          </span>
        </div>
        <div className="flex justify-between gap-4 py-3 text-sm">
          <span className="text-muted-foreground">{t.startingFee}</span>
          <span className="font-semibold text-foreground">{formatCzk(FIXED_FEE, locale)}</span>
        </div>
        <div className="flex justify-between gap-4 border-b border-border/70 pb-3 text-sm">
          <span className="text-muted-foreground">{t.distance}</span>
          <span className="font-semibold text-foreground text-right">
            {travelPrice === null
              ? t.askForDistance
              : isInFreeKmArea
                ? `${formatCzk(0, locale)} (0 km)`
                : `${distanceKm} km × ${TRAVEL_POLICY.chargedDirectionsPerVisit} × ${formatCzk(KILOMETER_FEE, locale)}/km = ${formatCzk(travelPrice - FIXED_FEE, locale)} (${language === "cs" ? "tam i zpět" : "there and back"})`}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pt-4">
          <span className="font-semibold text-foreground">{t.estimate}</span>
          <span className="font-heading text-2xl md:text-3xl font-bold text-pastel-green">
            {total === null
              ? travelPrice === null
                ? t.askForDistance
                : treatmentPrice === null ? t.individual : t.priceUnavailable
              : `${isFromPrice ? (language === "cs" ? "od " : "from ") : ""}${formatCzk(total, locale)}`}
          </span>
        </div>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{t.notQuote}</p>
    </section>
  );
};

export default TravelPriceCalculator;
