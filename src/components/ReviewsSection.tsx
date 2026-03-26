import { Star, PawPrint } from "lucide-react";

const placeholderReviews = [
  
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="pb-20">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {placeholderReviews.map((r, i) => (
            <div
              key={r.name}
              className="bg-card rounded-2xl p-6 shadow-sm"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: r.rating }).map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-pastel-pink text-pastel-pink" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm mb-4 italic leading-relaxed">„{r.text}"</p>
              <p className="font-heading font-semibold text-foreground text-sm">{r.name}</p>
            </div>
          ))}
        </div>

        {/* Pet clients gallery */}
        <div>
          <div className="flex items-center justify-center gap-2 mb-8">
            <PawPrint className="w-5 h-5 text-pastel-turquoise" />
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center">
              Moji chlupatí <span className="text-gradient">klienti</span>
            </h2>
            <PawPrint className="w-5 h-5 text-pastel-turquoise" />
          </div>

          <div className="max-w-md mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-lg aspect-square relative bg-muted">
              <img
                src="/pet-client-1-md.webp"
                alt="Chlupatý klient Ducktorky"
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
