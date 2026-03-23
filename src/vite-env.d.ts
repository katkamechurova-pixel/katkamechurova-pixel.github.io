/// <reference types="vite/client" />

declare module '*.md' {
  const attributes: Record<string, string>;
  const html: string;
  export { attributes, html };
}
