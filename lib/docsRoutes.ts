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
      { title: "Checkbox", slug: "docs/components/checkbox" },
      { title: "Code", slug: "docs/components/code" },
      {
        title: "Collapsible",
        slug: "docs/components/collapsible",
        draft: true,
      },
      {
        title: "CommandPalette",
        slug: "docs/components/commandpalette",
        draft: true,
      },
      { title: "Container", slug: "docs/components/container" },
      { title: "Dialog", slug: "docs/components/dialog" },
      { title: "DropdownMenu", slug: "docs/components/dropdownmenu" },
      { title: "Flex", slug: "docs/components/flex" },
      { title: "Grid", slug: "docs/components/grid" },
      { title: "Heading", slug: "docs/components/heading" },
      { title: "Label", slug: "docs/components/label" },
      { title: "Link", slug: "docs/components/link" },
      { title: "Navbar", slug: "docs/components/navbar" },
      {
        title: "NavigationMenu",
        slug: "docs/components/navigationmenu",
        draft: true,
      },
      { title: "NavItem", slug: "docs/components/navitem" },
      { title: "Popover", slug: "docs/components/popover" },
      { title: "Radio", slug: "docs/components/radio" },
      { title: "ScrollArea", slug: "docs/components/scrollarea" },
      { title: "ScrollShadow", slug: "docs/components/scrollshadow" },
      { title: "SearchField", slug: "docs/components/searchfield" },
      { title: "Section", slug: "docs/components/section" },
      { title: "Select", slug: "docs/components/select" },
      { title: "Separator", slug: "docs/components/separator" },
      { title: "Sheet", slug: "docs/components/sheet" },
      { title: "Sidebar", slug: "docs/components/sidebar" },
      { title: "Skeleton", slug: "docs/components/skeleton" },
      { title: "Slider", slug: "docs/components/slider" },
      { title: "Spinner", slug: "docs/components/spinner" },
      { title: "Status", slug: "docs/components/status" },
      { title: "Switch", slug: "docs/components/switch" },
      { title: "Table", slug: "docs/components/table" },
      { title: "Tabs", slug: "docs/components/tabs" },
      { title: "Text", slug: "docs/components/text" },
      { title: "TextArea", slug: "docs/components/textarea" },
      { title: "TextField", slug: "docs/components/textfield" },
      { title: "Toggle", slug: "docs/components/toggle" },
      { title: "Tooltip", slug: "docs/components/tooltip" },
      { title: "Toast", slug: "docs/components/toast", draft: true },
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
  draft?: boolean;
};

export type RouteProps = {
  label: string;
  pages: PageProps[];
};

export const allDocsRoutes: PageProps[] = docsRoutes.reduce(
  (acc: PageProps[], cur: RouteProps) => {
    return [...acc, ...cur.pages.filter((p) => p.draft !== true)];
  },
  []
);
