import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Button, Heading } from "..";
import { styled } from "../stitches.config";

// Sticky header for Sheet and Dialog with Title and Close button and sticky footer

const StyledHeader = styled("div", {
  position: "sticky",
  top: "0",
  p: "$lg",
  zIndex: "$1",
  bg: "$bg200E",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "$lg",
  transition: "$boxShadow",

  variants: {
    scrolled: {
      true: {
        boxShadow: "inset 0 -1px 2px -1px $colors$button100",
      },
    },
  },
});

type HeaderProps = React.ComponentProps<typeof StyledHeader> & {
  headerTitle: React.ReactElement<typeof Heading>;
};

export function Header({ children, headerTitle, ...props }: HeaderProps) {
  return (
    <StyledHeader {...props}>
      <DialogPrimitive.Title asChild>{headerTitle}</DialogPrimitive.Title>
      <DialogPrimitive.Close asChild>
        <Button
          highlight
          size="circle"
          css={{ ml: "auto" }}
          aria-label="Close button"
        >
          <X />
        </Button>
      </DialogPrimitive.Close>
    </StyledHeader>
  );
}

const StyledFooter = styled("div", {
  position: "sticky",
  top: "100%",
  p: "$lg",
  zIndex: "$1",
  bg: "$bg200E",
  display: "flex",
  width: "inherit",

  variants: {
    overflow: {
      true: {
        boxShadow: "inset 0 1px 2px -1px $colors$button100",
        top: "0",
        bottom: "0",
      },
    },
  },
});

export function Footer({
  children,
  ...props
}: React.ComponentProps<typeof StyledFooter>) {
  return <StyledFooter {...props}>{children}</StyledFooter>;
}
