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
    pages: [
      { title: "Accordion", slug: "docs/components/accordion" },
      { title: "AlertDialog", slug: "docs/components/alertdialog" },
      { title: "Avatar", slug: "docs/components/avatar" },
      { title: "Badge", slug: "docs/components/badge" },
      { title: "Button", slug: "docs/components/button" },
      { title: "Card", slug: "docs/components/card" },
    ],
  },

  {
    label: "Hooks",
    pages: [
      { title: "useMounted", slug: "docs/hooks/useMounted" },
      { title: "useInterval", slug: "docs/hooks/useInterval" },
      { title: "useActiveElement", slug: "docs/hooks/useActiveElement" },
      { title: "useOnScreen", slug: "docs/hooks/useOnScreen" },
      { title: "useDebounce", slug: "docs/hooks/useDebounce" },
      { title: "useCopy", slug: "docs/hooks/useCopy" },
    ],
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
