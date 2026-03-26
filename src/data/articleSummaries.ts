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
    slug: "jak-pripravit-psa-na-preventivni-prohlidku",
    title: "Jak připravit psa na domácí preventivní prohlídku?",
    excerpt: "Zjistěte, jak zajistit co nejvíce klidné a bezstresové vyšetření v prostředí vašeho domova.",
    date: "20. března 2026",
    imageUrl: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop",
    metaTitle: "Jak připravit psa na domácí prohlídku | Ducktorka",
    metaDescription: "Tipy a rady, jak zajistit klidnou a bezstresovou domácí veterinární prohlídku pro vašeho psa.",
  },
];
