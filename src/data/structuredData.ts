import { locations } from "./locations";

export const PRACTICE_ID = "https://ducktorka.cz/#practice";
export const PRACTICE_AREA_SERVED = locations.map((location) => ({
  "@type": "Place",
  name: location.name,
}));

/** One real mobile veterinary practice, shared by page-level JSON-LD graphs. */
export const PRACTICE_ENTITY = {
  "@type": "VeterinaryCare",
  "@id": PRACTICE_ID,
  name: "Ducktorka – MVDr. Kateřina Měchurová",
  description:
    "Výjezdová veterinární péče o psy, kočky a drobná zvířata v Benešově, vybraných částech Prahy a okolí.",
  url: "https://ducktorka.cz/",
  image: "https://ducktorka.cz/og-image-1.jpg",
  telephone: "+420734231444",
  email: "ducktorka@outlook.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nezvalova 989",
    addressLocality: "Benešov",
    postalCode: "25601",
    addressCountry: "CZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 49.7813,
    longitude: 14.6869,
  },
  areaServed: PRACTICE_AREA_SERVED,
} as const;

export const practiceReference = { "@id": PRACTICE_ID } as const;

export function breadcrumbSchema(
  pageUrl: string,
  items: { name: string; url: string }[],
) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function withPracticeGraph(...entities: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [PRACTICE_ENTITY, ...entities],
  };
}
