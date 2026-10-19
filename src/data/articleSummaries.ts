export interface ArticleSummary {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  datePublishedIso: string;
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
    title: "Kočičí mámu poslali domů zemřít 4 dny po porodu. Proč jsme boj s FIP nevzdaly?",
    excerpt: "Devítiměsíční kočka jen pár dní po porodu zkolabovala – horečky, 2,3 kg a tekutina v břiše. Na jiné veterině jí nedali šanci. FIP ale už dávno není rozsudek smrti. Přečtěte si, jak probíhala záchrana mámy i jejích čtyř koťat.",
    date: "4. června 2026",
    datePublishedIso: "2026-06-04",
    imageUrl: "/images/cases/fip-mama-s-kotaty.jpg",
    imageAlt: "Kočičí máma v pelíšku se svými čtyřmi koťaty",
    imageCaption: "Kočičí maminka se svými čtyřmi koťaty.",
    category: "Případ z praxe",
    caseFacts: [
      { label: "Pacientka", value: "9měsíční kočka, 4 dny po porodu čtyř koťat" },
      { label: "Kritický stav", value: "Horečky, 2,3 kg a tekutina v břiše (poslána domů bez infuzí)" },
      { label: "Záchranná péče", value: "Domácí infuze, náhradní azyl s koťaty a skupina FIP Warriors" },
    ],
    metaTitle: "Záchrana kočičí mámy s FIP krátce po porodu | Případ z praxe | Ducktorka",
    metaDescription: "Kočičku s FIP po porodu poslali domů zemřít. Proč FIP už není rozsudek smrti, jak probíhá domácí stabilizace a jak jsme s FIP Warriors zachránili mámu i koťata.",
  },
  {
    slug: "kocka-s-cukrovkou-pripad-z-praxe",
    title: "Není každé kulhání artróza: Když se za slabostí nohou skrývá kočičí cukrovka",
    excerpt: "Když kočce slábnou zadní nohy, nemusí jít o bolavé klouby. Dvanáctiletá Čezetka po neúspěšné léčbě artrózy dál chřadla, dokud domácí odběry neodhalily poškození nervů z cukrovky. Podívejte se, jak jí pomohl moderní senzor.",
    date: "15. června 2026",
    datePublishedIso: "2026-06-15",
    imageUrl: "/images/cases/kocka-s-diabetem-a-senzorem.jpg",
    imageAlt: "Černobílá kočka se senzorem FreeStyle Libre na boku",
    imageCaption: "Senzor FreeStyle Libre na boku kočky pro měření cukru bez píchání.",
    category: "Případ z praxe",
    caseFacts: [
      { label: "Pacientka", value: "Dvanáctiletá Čezetka (2,7 kg) se slabostí nohou" },
      { label: "Skutečná diagnóza", value: "Cukrovka a diabetická neuropatie (místo podezření na artrózu)" },
      { label: "Šetrná léčba", value: "Inzulin ProZinc a senzor FreeStyle Libre bez píchání do ucha" },
    ],
    metaTitle: "Není každé kulhání artróza: Cukrovka u kočky Čezetky | Ducktorka",
    metaDescription: "Kočička Čezetka byla léčena na artrózu, ale skutečnou příčinou byla cukrovka a plantigrádní chůze. Jak funguje domácí diagnostika a monitoring senzorem FreeStyle Libre?",
  },
  {
    slug: "jak-pripravit-psa-na-preventivni-prohlidku",
    title: "Jak připravit psa na domácí preventivní prohlídku?",
    excerpt: "Zjistěte, jak zajistit co nejvíce klidné a bezstresové vyšetření v prostředí vašeho domova.",
    date: "20. března 2026",
    datePublishedIso: "2026-03-20",
    imageUrl: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop",
    metaTitle: "Jak připravit psa na domácí prohlídku | Ducktorka",
    metaDescription: "Tipy a rady, jak zajistit klidnou a bezstresovou domácí veterinární prohlídku pro vašeho psa.",
  },
];
