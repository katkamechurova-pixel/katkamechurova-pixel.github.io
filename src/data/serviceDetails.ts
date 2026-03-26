import { serviceSummaries, type ServiceSummary } from "@/data/serviceSummaries";

export interface ServiceDetail extends ServiceSummary {
  html: string;
}

const htmlModules = import.meta.glob<string>("/content/services/*.md", {
  eager: true,
  import: "html",
});

const htmlBySlug = Object.fromEntries(
  Object.entries(htmlModules).map(([filepath, html]) => [
    filepath.split("/").pop()!.replace(".md", ""),
    html,
  ]),
);

export const serviceDetails: ServiceDetail[] = serviceSummaries.map((service) => ({
  ...service,
  html: htmlBySlug[service.slug] ?? "",
}));
