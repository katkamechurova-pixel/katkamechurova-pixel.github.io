import { ADDITIONAL_FEES, SERVICE_CATEGORIES, FIXED_FEE, getFreeKilometreAreas, KILOMETER_FEE, formatCzk, getPublishedPrice, PRICING_VARIABILITY_NOTICE } from "@/data/pricing";

const priceRows = SERVICE_CATEGORIES.map((entry) => {
  const price = getPublishedPrice(entry);
  return {
    service: entry.labelCs,
    price: price === null
      ? "individuálně"
      : `${entry.priceBasis === "from" ? "od " : ""}${formatCzk(price)}`,
    details: entry.offeredAtHome ? undefined : ["Ošetření probíhá v ordinaci v Benešově."],
  };
});

priceRows.push(...ADDITIONAL_FEES.map((fee) => ({
  service: fee.labelCs,
  price: formatCzk(fee.priceCzk),
  details: undefined,
})), {
  service: "Výjezdový poplatek",
  price: `${formatCzk(FIXED_FEE)} + ${formatCzk(KILOMETER_FEE)}/km/směr`,
  details: [
    "Startovní poplatek platí pro všechny výjezdy.",
    "Základny jsou Praha 8 (Invalidovna) a Benešov. V " + getFreeKilometreAreas("cs") + " se účtuje 0 km; startovní poplatek platí vždy.",
    "Jinde se podle Google Maps určí jednosměrná vzdálenost od bližší základny; účtuje se za cestu tam i zpět, tedy " + KILOMETER_FEE + " Kč/km v každém směru.",
  ],
});

const prices = priceRows;

const PricingSection = () => (
  <section id="pricing" className="py-20">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-4 text-foreground">
        <span className="text-gradient">Ceník</span> služeb
      </h2>
      <p className="text-center text-muted-foreground mb-10 text-sm">
        {PRICING_VARIABILITY_NOTICE.cs}
      </p>

      <div className="bg-card rounded-2xl shadow-sm overflow-hidden">
        {prices.map((p, i) => (
          <div
            key={p.service}
            className={`flex justify-between items-center px-6 py-4 ${i !== prices.length - 1 ? "border-b border-border" : ""
              } ${i === prices.length - 1 ? "bg-pastel-green-light font-semibold" : ""}`}
          >
            <div className="min-w-0">
              <div className="text-foreground text-sm md:text-base">{p.service}</div>
              {"details" in p && p.details ? (
                <div className="mt-2 space-y-1 text-xs md:text-sm text-muted-foreground font-normal leading-relaxed">
                  {p.details.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              ) : null}
            </div>
            <span className="text-pastel-green font-semibold text-sm md:text-base whitespace-nowrap ml-4">{p.price}</span>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        <a href="/cenik/" className="font-semibold text-pastel-green hover:underline">Podrobný ceník a kalkulačka návštěvy →</a>
        <span className="mx-3" aria-hidden="true">·</span>
        <a href="/co-osetrime-doma/" className="font-semibold text-pastel-green hover:underline">Co lze ošetřit doma? →</a>
      </p>
    </div>
  </section>
);

export default PricingSection;
