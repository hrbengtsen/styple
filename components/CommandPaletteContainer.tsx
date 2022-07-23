import { Button, CommandPalette, DataObj } from "../packages/design-system";
import { Search } from "lucide-react";

const dummyCategories = ["Final docs pages"];

const dummyData: DataObj[] = [
  {
    label: "Do custom action",
    action: () => {
      alert("Custom action");
    },
  },
  {
    label: "Introduction",
    slug: "docs/overview/introduction",
    icon: <Search />,
  },
  {
    label: "Getting started",
    slug: "docs/overview/getting-started",
  },
  {
    label: "Toast",
    slug: "docs/components/toast",
    category: dummyCategories[0],
  },
];

// Boilerplate component of how to implement a CommandPalette
export const CommandPaletteContainer = () => {
  return (
    <CommandPalette
      data={dummyData}
      categories={dummyCategories}
      trigger={<Button>Open CommandPalette</Button>}
    />
  );
};

/*
  CMDPALETTE todos:
  - fix displaying of dataItem icons
  - add preview possibility
  - improve performance (re-renders too often with too much computation)
*/
