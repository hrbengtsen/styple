export const docsRoutes = [
  {
    label: "Overview",
    pages: [
      { title: "Introduction", slug: "docs/overview/introduction" },
      { title: "Getting started", slug: "docs/overview/getting-started" },
      { title: "Theming", slug: "docs/overview/theming" },
      { title: "Releases", slug: "docs/overview/releases" },
    ],
  },

  {
    label: "Components",
    pages: [{ title: "Accordion", slug: "docs/components/accordion" }],
  },

  {
    label: "Hooks",
    pages: [{ title: "useMounted", slug: "docs/hooks/useMounted" }],
  },
];

export type PageProps = {
  title: string;
  slug: string;
};

export type RouteProps = {
  label: string;
  pages: PageProps[];
};

export const allDocsRoutes: PageProps[] = docsRoutes.reduce(
  (acc, cur: RouteProps) => {
    return [...acc, ...cur.pages];
  },
  []
);
