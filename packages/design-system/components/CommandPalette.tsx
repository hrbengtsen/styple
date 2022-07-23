import { ReactElement, useEffect, useState } from "react";
import { Combobox } from "@headlessui/react";
import { Button, NavItem, TextField, Container, Separator } from "..";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { StyledOverlay, StyledContent } from "./Dialog";
import { Search } from "lucide-react";
import { css, keyframes } from "../stitches.config";

const useEscape = (onEscape: () => void) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onEscape();
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  });
};

const optionsStyles = css({
  p: "0",
  listStyleType: "none",
  position: "relative",
  overflowY: "auto",
  maxHeight: "75vh",
});

const optionStyles = css({
  cursor: "pointer",
  mx: "$lg",
  my: "$xs",
  "&:first-child": {
    mt: "$lg",
  },
  "&:last-child": {
    mb: "$lg",
  },
});

const contentFadeIn = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -2%) scale(.9)" },
  "100%": { opacity: 1, transform: "translate(-50%, 0) scale(1)" },
});

export type DataObj = {
  label: string;
  category?: string;
  icon?: ReactElement<any, any>;
} & (
  | { slug: string; action?: never } // Required to have atleast one of these props
  | { slug?: never; action: () => void }
  | { slug: string; action: () => void }
);

type CommandPaletteProps = {
  data: DataObj[];
  categories?: string[];
  filterData?: (query: string, data: DataObj[]) => DataObj[];
  preview?: (selectedDataItem: string, data: DataObj[]) => JSX.Element;
  trigger: JSX.Element;
  displayOptionsOnEmpty?: boolean;
  placeholder?: string;
  router: any;
  customLink?: any;
};

export function CommandPalette({
  data,
  categories,
  filterData,
  preview,
  trigger,
  displayOptionsOnEmpty,
  placeholder,
  router,
  customLink,
}: CommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState("");
  const [query, setQuery] = useState("");

  // Force close of Dialog on ESC
  useEscape(() => setOpen(false));

  const filteredData = filterData
    ? // Custom filtering
      filterData(query, data)
    : // Default filtering of data with query
      data.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      );

  const firstCategoryItemEncounters = categories?.map((category) =>
    filteredData.findIndex((item) => item.category === category)
  );

  const NavItemCustom = customLink ?? NavItem;

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
      <StyledOverlay>
        <StyledContent
          css={{
            "@bp1": {
              minWidth: "$4xl",
              overflowY: "hidden",
              top: "10%",
              transform: "translate(-50%, 0)",
              animation: `${contentFadeIn} .15s ease-out`,
              "@motion": {
                animation: "none",
              },
            },
          }}
        >
          <Combobox
            value={selectedData}
            onChange={(value) => {
              setSelectedData(value);
              const dataItem = filteredData.find(
                (item) => item.label === value
              );

              if (dataItem?.slug) {
                router.push(dataItem.slug);
                return;
              }
              dataItem?.action?.();
            }}
            nullable
          >
            {({ open }) => (
              <>
                <Container css={{ position: "sticky", top: "0" }}>
                  <Container
                    css={{
                      color: "$text200",
                      position: "absolute",
                      top: "0",
                      left: "0",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      pl: "$lg",
                      pr: "$sm",
                    }}
                  >
                    <Search size="20" />
                  </Container>
                  <Combobox.Input
                    as={TextField}
                    variant="ghost"
                    css={{
                      px: "$3xl",
                      height: "46px",
                      "&:hover, &:focus": {
                        boxShadow: "none",
                      },
                      bg: "$bg200E",
                    }}
                    placeholder={placeholder ?? "Search..."}
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </Container>
                {(displayOptionsOnEmpty ? true : query && open) &&
                  filteredData.length > 0 && (
                    <>
                      <Separator css={{ position: "fixed", top: "46px" }} />
                      <Combobox.Options static hold className={optionsStyles()}>
                        {filteredData.map((item, index) => {
                          // Potential JSX of disabled category Combobox option
                          let categoryOption;

                          // Index of category which current item is first category-item of
                          const categoryOfItem =
                            firstCategoryItemEncounters?.findIndex(
                              (categoryFirstItemIndex) =>
                                categoryFirstItemIndex === index
                            );

                          const categoryExistAndItemIsMember =
                            typeof categoryOfItem !== "undefined" &&
                            categories &&
                            categoryOfItem !== -1;

                          if (categoryExistAndItemIsMember) {
                            categoryOption = (
                              <Combobox.Option
                                key={categories[categoryOfItem]}
                                value={categories[categoryOfItem]}
                                disabled
                              >
                                <Container
                                  css={{
                                    mx: "$lg",
                                    px: "$md",
                                    mt: "$xl",
                                    mb: "$xs",
                                    fontWeight: "$semibold",
                                    color: "$text100",
                                  }}
                                >
                                  {categories[categoryOfItem]}
                                </Container>
                              </Combobox.Option>
                            );
                          }

                          return (
                            <>
                              {categoryOption}
                              <Combobox.Option
                                key={item.label}
                                value={item.label}
                                className={optionStyles()}
                              >
                                {({ active, selected }) => {
                                  // Item has slug -> it should be rendered as anchor tag
                                  if (item.slug) {
                                    return (
                                      <>
                                        <NavItemCustom
                                          href={item.slug}
                                          onClick={
                                            item.action
                                              ? () => item.action()
                                              : undefined
                                          }
                                          css={{
                                            py: "$sm",
                                            px: "$md",
                                            borderRadius: "$xl",
                                            bg: `${
                                              active
                                                ? "$button200"
                                                : selected
                                                ? "$button300"
                                                : "transparent"
                                            }`,
                                            color: "$text200",

                                            display: "flex",
                                            gap: "$sm",
                                          }}
                                        >
                                          {item.icon}
                                          {item.label}
                                        </NavItemCustom>
                                      </>
                                    );
                                  }

                                  // Item not slug -> it should be rendered as button tag
                                  return (
                                    <>
                                      {item.icon}
                                      <Button
                                        onClick={
                                          item.action
                                            ? () => item.action()
                                            : undefined
                                        }
                                        css={{
                                          width: "100%",
                                          textAlign: "left",
                                          py: "$sm",
                                          px: "$md",
                                          borderRadius: "$xl",
                                          bg: `${
                                            active
                                              ? "$button200"
                                              : selected
                                              ? "$button300"
                                              : "transparent"
                                          }`,
                                          color: "$text200",
                                        }}
                                      >
                                        {item.label}
                                      </Button>
                                    </>
                                  );
                                }}
                              </Combobox.Option>
                            </>
                          );
                        })}
                      </Combobox.Options>
                    </>
                  )}
              </>
            )}
          </Combobox>
        </StyledContent>
      </StyledOverlay>
    </DialogPrimitive.Root>
  );
}
