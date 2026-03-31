# Ducktorka – Výjezdová veterinární péče

Webová stránka pro MVDr. Kateřinu Měchurovou (Ducktorka), poskytující mobilní veterinární péči v Praze a okolí.

## Technologie

- **Vite** + **React**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**

## Místní vývoj

1.  Nainstalujte závislosti:
    ```sh
    npm install
    ```

2.  Spusťte vývojový server:
    ```sh
    npm run dev
    ```

3.  Vytvořte produkční verzi:
    ```sh
    npm run build
    ```

## Nasazení

Tento projekt je nastaven pro nasazení na GitHub Pages přes GitHub Actions.

### Nastavení v GitHub Pages

1. Workflow v `.github/workflows/deploy.yml` nasazuje každý push do branche `dev`.
2. GitHub Actions sestaví web příkazem `npm run build`.
3. Výsledný obsah z `dist` se publikuje do branche `main`, kterou GitHub Pages obsluhuje.
4. Soubor `public/CNAME` udržuje vlastní doménu `ducktorka.cz` i po každém deployi.

### SEO poznámka

Build nyní generuje skutečné per-page SEO tagy přímo do statického HTML a sitemap používá stejné trailing-slash URL jako výsledné GitHub Pages adresy. To je důležitější pro indexaci než samotná změna hostingu.

### Co už není potřeba

- kopírování `dist/index.html` do `dist/404.html`
