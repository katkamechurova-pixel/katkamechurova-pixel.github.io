import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import Sitemap from "vite-plugin-sitemap";
import { plugin as markdown, Mode } from "vite-plugin-markdown";
import fs from "fs";

// Discover dynamic routes from content directory at config time
function getContentSlugs(dir: string): string[] {
  const contentDir = path.resolve(__dirname, dir);
  if (!fs.existsSync(contentDir)) return [];
  return fs.readdirSync(contentDir)
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace('.md', ''));
}

const serviceSlugs = getContentSlugs('content/services');
const articleSlugs = getContentSlugs('content/articles');

const dynamicRoutes = [
  ...serviceSlugs.map(s => `/sluzby/${s}`),
  ...articleSlugs.map(a => `/clanky/${a}`),
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    markdown({ mode: [Mode.HTML] }),
    Sitemap({
      hostname: 'https://ducktorka.cz',
      dynamicRoutes,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  ssgOptions: {
    dirStyle: 'nested',
    script: 'async',
  },
}));
