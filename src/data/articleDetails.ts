import { articleSummaries, type ArticleSummary } from "@/data/articleSummaries";

export interface ArticleDetail extends ArticleSummary {
  html: string;
}

const htmlModules = import.meta.glob<string>("/content/articles/*.md", {
  eager: true,
  import: "html",
});

const htmlBySlug = Object.fromEntries(
  Object.entries(htmlModules).map(([filepath, html]) => [
    filepath.split("/").pop()!.replace(".md", ""),
    html,
  ]),
);

export const articleDetails: ArticleDetail[] = articleSummaries.map((article) => ({
  ...article,
  html: htmlBySlug[article.slug] ?? "",
}));
