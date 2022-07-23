import {
  Button,
  CommandPalette,
  DataObj,
  Flex,
} from "../packages/design-system";
import { Search } from "lucide-react";
import { useRouter } from "next/router";
import { NavLinkItem } from "./NavLinkItem";

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
    slug: "/docs/overview/introduction",
    icon: <Search />,
  },
  {
    label: "Getting started",
    slug: "/docs/overview/getting-started",
  },
  {
    label: "Toast",
    slug: "/docs/components/toast",
    category: dummyCategories[0],
  },
];

// Boilerplate component of how to implement a CommandPalette
export const CommandPaletteContainer = () => {
  const router = useRouter();

  return (
    <CommandPalette
      data={dummyData}
      categories={dummyCategories}
      trigger={<Button>Open CommandPalette</Button>}
      router={router}
      customLink={NavLinkItem}
      preview={(selectedItemValue, data) => (
        <Flex>test preview for {selectedItemValue}</Flex>
      )}
    />
  );
};

/*
  CMDPALETTE todos:
  - improve performance (re-renders too often with too much computation)
*/
