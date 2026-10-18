import { Star, PawPrint } from "lucide-react";

// Excerpts transcribed from client-provided screenshots. English text is a translation.
const reviews = [
  {
    name: "E.", source: "Firmy.cz", href: "https://www.firmy.cz/detail/13990143-ducktorka-vyjezdova-veterinarni-pece-benesov.html", rating: 5,
    cs: "Už samotná možnost vyhnout se stresu z cestování a čekárny byla obrovským přínosem jak pro zvířátka, tak pro nás.",
    en: "Just being able to avoid the stress of travelling and the waiting room was a huge benefit for both our pets and us.",
  },
  {
    name: "T. A.", source: "Google", href: "https://maps.app.goo.gl/KFwRJsYukNbPj7Ya9", rating: 5,
    cs: "Paní/slečna veterinářka byla velmi milá, vše vysvětlila a k našemu kocourkovi se chovala opravdu hezky a citlivě.",
    en: "The vet was very kind, explained everything, and treated our cat with real care and sensitivity.",
  },
  {
    name: "P. K.", source: "Facebook", href: "https://www.facebook.com/profile.php?id=61579437449029&sk=reviews", rating: null,
    cs: "Paní doktorku musím doporučit všema deseti, s péčí o moje kočky jsem byla moc spokojená, skvělý přístup a ochota, hlavně opravdový zájem o dané zvíře.",
    en: "I wholeheartedly recommend the vet. I was very happy with the care for my cats: a wonderful approach, willingness to help and, above all, a real interest in each animal.",
  },
];

const ReviewsSection = ({ language = "cs" }: { language?: "cs" | "en" }) => {
  const english = language === "en";
  return (
    <section id="reviews" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-foreground mb-4">
          {english ? "Kind care, in our clients’ words" : "Jak péči doma vnímají naši klienti"}
        </h2>
        <p className="max-w-2xl mx-auto text-center text-muted-foreground mb-8">
          {english
            ? "Selected excerpts from reviews on Google and Firmy.cz, and a recommendation on Facebook. Translated from Czech."
            : "Vybrané úryvky z recenzí na Googlu a Firmy.cz a z doporučení na Facebooku."}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {reviews.map((r) => (
            <figure key={r.name} className="bg-card rounded-2xl border border-border p-6 shadow-sm flex flex-col">
              {r.rating ? (
                <div className="flex gap-0.5 mb-3" aria-label={english ? "5 out of 5 stars" : "5 z 5 hvězdiček"}>
                  {Array.from({ length: r.rating }).map((_, i) => <Star key={i} aria-hidden="true" className="w-4 h-4 fill-pastel-pink text-pastel-pink" />)}
                </div>
              ) : <p className="text-sm font-semibold text-pastel-green mb-3">{english ? "Recommends Ducktorka" : "Doporučuje Ducktorku"}</p>}
              <blockquote className="text-muted-foreground text-sm mb-5 leading-relaxed flex-1">{english ? `“${r.en}”` : `„${r.cs}“`}</blockquote>
              <figcaption className="text-sm"><span className="font-heading font-semibold text-foreground">{r.name}</span><a href={r.href} target="_blank" rel="noopener noreferrer" className="block text-muted-foreground mt-1 hover:text-pastel-turquoise hover:underline">{r.source} · {r.source === "Facebook" ? (english ? "recommendation" : "doporučení") : (english ? "review" : "recenze")} ↗</a></figcaption>
            </figure>
          ))}
        </div>


        {/* Pet clients gallery */}
        <div>
          <div className="flex items-center justify-center gap-2 mb-8">
            <PawPrint className="w-5 h-5 text-pastel-turquoise" />
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center">
              {english ? "A familiar face from a home visit" : <>Moji chlupatí <span className="text-gradient">klienti</span></>}
            </h2>
            <PawPrint className="w-5 h-5 text-pastel-turquoise" />
          </div>

          <div className="max-w-md mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-lg aspect-square relative bg-muted">
              <img
                src="/pet-client-1-md.webp"
                alt={english ? "A pet visited by Ducktorka" : "Chlupatý klient Ducktorky"}
                className="w-full h-full object-cover absolute inset-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
