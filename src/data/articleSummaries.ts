export interface ArticleSummary {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  metaTitle: string;
  metaDescription: string;
}

export const articleSummaries: ArticleSummary[] = [
  {
    slug: "neni-kazde-kulhani-artroza-kocici-cukrovka",
    title: "Není každé kulhání artróza: Když se za slabostí nohou skrývá kočičí cukrovka",
    excerpt: "Diabetická neuropatie u koček se snadno zamění za kloubní problémy. Přečtěte si příběh Čezetky, které k diagnóze pomohlo vyšetření v klidu domova a moderní senzor.",
    date: "8. června 2026",
    imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop",
    metaTitle: "Kočičí cukrovka a diabetická neuropatie | Ducktorka",
    metaDescription: "Případová studie kočičky Čezetky: jak se cukrovka maskuje za artrózu, jak probíhá domácí diagnostika a moderní monitoring pomocí senzoru FreeStyle Libre.",
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
