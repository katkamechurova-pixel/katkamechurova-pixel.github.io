export interface ArticleData {
  slug: string;
  title: string;
  excerpt: string;
  html: string;
  date: string;
  imageUrl: string;
  metaTitle: string;
  metaDescription: string;
}

// Eagerly import all article markdown files at build time
const modules = import.meta.glob<{
  attributes: Record<string, string>;
  html: string;
}>('/content/articles/*.md', { eager: true });

export const articles: ArticleData[] = Object.entries(modules).map(([filepath, mod]) => {
  const slug = filepath.split('/').pop()!.replace('.md', '');
  const attrs = mod.attributes;
  return {
    slug,
    title: attrs.title,
    excerpt: attrs.excerpt,
    html: mod.html,
    date: attrs.date,
    imageUrl: attrs.imageUrl,
    metaTitle: attrs.metaTitle,
    metaDescription: attrs.metaDescription,
  };
});
