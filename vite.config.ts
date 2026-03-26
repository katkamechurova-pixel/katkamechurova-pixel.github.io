import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import Sitemap from "vite-plugin-sitemap";
import { plugin as markdown, Mode } from "vite-plugin-markdown";
import fs from "fs";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { visualizer } from 'rollup-plugin-visualizer';

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
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
      exclude: undefined,
      include: undefined,
      includePublic: true,
      logStats: true,
      ansiColors: true,
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupIds: false,
                removeViewBox: false,
              },
            },
          },
          'sortAttrs',
          {
            name: 'addAttributesToSVGElement',
            params: {
              attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
            },
          },
        ],
      },
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
      webp: {
        lossless: true,
      },
      avif: {
        lossless: true,
      },
    }),
    markdown({ mode: [Mode.HTML] }),
    Sitemap({
      hostname: 'https://ducktorka.cz',
      dynamicRoutes,
    }),
    ...(process.env.ANALYZE === 'true' ? [visualizer({
      open: true,
      filename: "dist/stats.html",
      gzipSize: true,
      brotliSize: true,
    })] : []),
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
