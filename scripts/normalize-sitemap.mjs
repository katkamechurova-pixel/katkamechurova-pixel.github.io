import { readFile, writeFile } from "node:fs/promises";

const sitemapPath = new URL("../dist/sitemap.xml", import.meta.url);
const hostname = "https://ducktorka.cz";

const xml = await readFile(sitemapPath, "utf8");

const normalized = xml.replace(/<loc>(https:\/\/ducktorka\.cz(?:\/[^<]*)?)<\/loc>/g, (_, url) => {
  const path = url.slice(hostname.length);

  if (!path || path === "/" || path.endsWith("/")) {
    return `<loc>${url}</loc>`;
  }

  return `<loc>${url}/</loc>`;
});

if (normalized !== xml) {
  await writeFile(sitemapPath, normalized, "utf8");
}
