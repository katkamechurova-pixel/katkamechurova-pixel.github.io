import type { RouteRecord } from "vite-react-ssg";
import App from "./App";
import { serviceSummaries } from "./data/serviceSummaries";
import { articleSummaries } from "./data/articleSummaries";
import { locations } from "./data/locations";

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        lazy: async () => {
          const { default: Component } = await import("./pages/Index");
          return { Component };
        },
      },
      {
        path: "sluzby/:serviceSlug",
        lazy: async () => {
          const { default: Component } = await import("./pages/ServiceDetail");
          return { Component };
        },
        getStaticPaths: () => serviceSummaries.map((s) => `/sluzby/${s.slug}/`),
      },
      {
        path: "clanky/:articleSlug",
        lazy: async () => {
          const { default: Component } = await import("./pages/ArticleDetail");
          return { Component };
        },
        getStaticPaths: () => articleSummaries.map((a) => `/clanky/${a.slug}/`),
      },
      {
        path: "vyjezdova-veterina",
        lazy: async () => {
          const { default: Component } = await import("./pages/LocationHub");
          return { Component };
        },
      },
      {
        path: "vyjezdova-veterina/:locationSlug",
        lazy: async () => {
          const { default: Component } = await import("./pages/LocationDetail");
          return { Component };
        },
        getStaticPaths: () =>
          locations.map((l) => `/vyjezdova-veterina/${l.pageSlug}/`),
      },
      {
        path: "*",
        lazy: async () => {
          const { default: Component } = await import("./pages/NotFound");
          return { Component };
        },
      },
    ],
  },
];
