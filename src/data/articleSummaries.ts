export interface ArticleSummary {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  imageAlt?: string;
  imageCaption?: string;
  category?: string;
  caseFacts?: Array<{ label: string; value: string }>;
  metaTitle: string;
  metaDescription: string;
}

export const articleSummaries: ArticleSummary[] = [
  {
    slug: "kocka-s-fip-pripad-z-praxe",
    title: "Kočičí máma s FIP a její čtyři koťata",
    excerpt: "Čtyři dny po porodu měla vysokou horečku a potřebovala rychlou pomoc. Pak jsme hledaly zázemí pro ni i koťata.",
    date: "19. října 2026",
    imageUrl: "/images/cases/fip-mama-s-kotaty.jpg",
    imageAlt: "Kočičí máma leží vedle svých koťat",
    imageCaption: "Kočičí máma se svými čtyřmi koťaty.",
    category: "Případ z praxe",
    caseFacts: [
      { label: "Při příjezdu", value: "Čtyři dny po porodu, horečka a tekutina v břiše" },
      { label: "První návštěva", value: "Ultrazvuk, odběr krve a infuze" },
      { label: "Každodenní péče", value: "Majitelka, pečovatelka a veterinářka" },
    ],
    metaTitle: "Kočičí máma s FIP a její koťata | Ducktorka",
    metaDescription: "Čtyři dny po porodu měla kočičí máma vysokou horečku a tekutinu v břiše. Přečtěte si, jak probíhala její stabilizace a každodenní péče.",
  },
  {
    slug: "kocka-s-cukrovkou-pripad-z-praxe",
    title: "Cukrovka se projevila slabostí zadních nohou",
    excerpt: "Starší kočka hubla a slábly jí zadní nohy. Při domácí návštěvě jsem zjistila, že za tím stojí cukrovka.",
    date: "19. října 2026",
    imageUrl: "/images/cases/kocka-s-diabetem-a-senzorem.jpg",
    imageAlt: "Kočka s nasazeným senzorem pro průběžné sledování glykémie",
    imageCaption: "Senzor FreeStyle Libre na boku kočky.",
    category: "Případ z praxe",
    caseFacts: [
      { label: "Čeho si majitelé všimli", value: "Hubnutí a slabost zadních nohou" },
      { label: "Co ukázalo vyšetření", value: "Krev, moč a způsob chůze" },
      { label: "Co následovalo", value: "Inzulin ProZinc a senzor FreeStyle Libre" },
    ],
    metaTitle: "Cukrovka u kočky a slabost zadních nohou | Ducktorka",
    metaDescription: "Starší kočka hubla a slábly jí zadní nohy. Při domácím vyšetření jsem zjistila cukrovku a s majiteli nastavila léčbu i sledování glykémie.",
  },
  {
    slug: "jak-pripravit-psa-na-preventivni-prohlidku",
    title: "Jak připravit psa na domácí preventivní prohlídku?",
    excerpt: "Zjistěte, jak zajistit co nejvíce klidné a bezstresové vyšetření v prostředí vašeho domova.",
    date: "20. března 2026",
    imageUrl: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop",
    metaTitle: "Jak připravit psa na domácí prohlídku | Ducktorka",
    metaDescription: "Tipy a rady, jak zajistit klidnou a bezstresovou domácí veterinární prohlídku pro vašeho psa.",
  },
];
