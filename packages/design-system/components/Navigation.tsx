import React from "react";
import { Container, Sheet, SheetContent, SheetTrigger, Button } from "..";
import { styled } from "../stitches.config";
import * as Collapsible from "@radix-ui/react-collapsible";
import { Menu } from "lucide-react";

const StyledBurger = styled("button", {
  display: "block",
  size: "$md",
  transform: "rotate(0deg)",
  transition: "all 175ms ease-in-out",
  border: "none",
  cursor: "pointer",
  bg: "transparent",

  span: {
    display: "block",
    position: "absolute",
    height: "1px",
    width: "100%",
    bg: "$text200",
    opacity: 1,
    left: 0,
    transform: "rotate(0deg)",
    transition: "all 175ms ease-in-out",
  },
  "&:hover span, &:focus span": {
    bg: "$text100",
  },

  "span:nth-child(1)": {
    top: "3px",
  },
  "span:nth-child(2), span:nth-child(3)": {
    top: "11px",
  },
  "span:nth-child(4)": {
    top: "19px",
  },

  variants: {
    open: {
      true: {
        "span:nth-child(1)": {
          top: "12px",
          width: 0,
          left: "50%",
        },
        "span:nth-child(2)": {
          transform: "rotate(45deg)",
        },
        "span:nth-child(3)": {
          transform: "rotate(-45deg)",
        },
        "span:nth-child(4)": {
          top: "12px",
          width: 0,
          left: "50%",
        },
      },
    },
  },
});

type BurgerProps = React.ComponentProps<typeof StyledBurger> & {
  open: boolean;
  bp?: "@bp1" | "@bp2" | "@bp3" | "@bp4";
};

const Burger = React.forwardRef<
  React.ElementRef<typeof StyledBurger>,
  BurgerProps
>(({ open, bp = "@bp2", ...props }, forwardedRef) => (
  <StyledBurger
    open={open}
    css={{
      [bp]: {
        display: "none",
      },
    }}
    aria-label="Navigation menu toggle"
    {...props}
    ref={forwardedRef}
  >
    <span />
    <span />
    <span />
    <span />
  </StyledBurger>
));
Burger.displayName = "Burger";

// General collapsible navbar with custom animated Burger
type NavbarProps = React.ComponentProps<typeof Container> & {
  brand?: React.ReactNode;
  content: React.ReactNode;
  mobileContent: React.ReactNode;
  bp?: "@bp1" | "@bp2" | "@bp3" | "@bp4";
};

export const Navbar = React.forwardRef<
  React.ElementRef<typeof StyledBurger>,
  NavbarProps
>(({ brand, content, mobileContent, bp = "@bp2", ...props }, forwardedRef) => {
  const [internalOpen, setInternalOpen] = React.useState<boolean>(false);

  return (
    <Collapsible.Root
      open={internalOpen}
      onOpenChange={(open) => {
        setInternalOpen(open);
      }}
    >
      <Container {...props}>
        {brand}
        <Container
          css={{
            display: "none",
            [bp]: {
              display: "flex",
            },
          }}
        >
          {content}
        </Container>
        <Collapsible.Trigger asChild>
          <Burger open={internalOpen} ref={forwardedRef} />
        </Collapsible.Trigger>
      </Container>
      <Collapsible.Content asChild>{mobileContent}</Collapsible.Content>
    </Collapsible.Root>
  );
});
Navbar.displayName = "Navbar";

// Sidebar
type SidebarProps = React.ComponentProps<typeof Container> & {
  brand?: React.ReactNode;
  content: React.ReactNode;
  mobileContent: React.ReactNode;
  side?: "bottom" | "left" | "right" | "top";
  bp?: "@bp1" | "@bp2" | "@bp3" | "@bp4";
  icon?: React.ReactNode;
};

export const Sidebar = React.forwardRef<
  React.ElementRef<typeof Button>,
  SidebarProps
>(
  (
    {
      brand,
      content,
      mobileContent,
      side = "right",
      bp = "@bp2",
      icon,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <Sheet>
        <Container {...props}>
          {brand}
          <Container
            css={{
              position: "relative",
              display: "none",
              [bp]: {
                display: "block",
                height: "100%", // can get annoying when styling a sidebar, but it enables scrollarea in content
              },
            }}
          >
            {content}
          </Container>
          <SheetTrigger asChild>
            <Button
              ghost
              ref={forwardedRef}
              css={{
                [bp]: {
                  display: "none",
                },
                p: "$sm",
              }}
            >
              {icon ? icon : <Menu style={{ verticalAlign: "middle" }} />}
            </Button>
          </SheetTrigger>
        </Container>
        <SheetContent side={side}>{mobileContent}</SheetContent>
      </Sheet>
    );
  }
);
Sidebar.displayName = "Sidebar";
