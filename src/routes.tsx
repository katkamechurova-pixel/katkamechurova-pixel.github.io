import type { RouteRecord } from "vite-react-ssg";
import App from "./App";
import { services } from "./data/services";
import { articles } from "./data/articles";
import Index from "./pages/Index";
import ServiceDetail from "./pages/ServiceDetail";
import ArticleDetail from "./pages/ArticleDetail";
import NotFound from "./pages/NotFound";

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "sluzby/:serviceSlug",
        element: <ServiceDetail />,
        getStaticPaths: () => services.map(s => `/sluzby/${s.slug}`),
      },
      {
        path: "clanky/:articleSlug",
        element: <ArticleDetail />,
        getStaticPaths: () => articles.map(a => `/clanky/${a.slug}`),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];
