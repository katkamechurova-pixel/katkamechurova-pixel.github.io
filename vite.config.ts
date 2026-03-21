import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import Sitemap from "vite-plugin-sitemap";
import { services } from "./src/data/services";
import { articles } from "./src/data/articles";

const dynamicRoutes = [
  ...services.map(s => `/sluzby/${s.slug}`),
  ...articles.map(a => `/clanky/${a.slug}`)
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
    Sitemap({
      hostname: 'https://ducktorka.cz',
      dynamicRoutes,
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
