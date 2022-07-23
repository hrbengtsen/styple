import React from "react";
import { styled, keyframes } from "../stitches.config";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-collapsible-content-height)" },
});

const slideUp = keyframes({
  from: { height: "var(--radix-collapsible-content-height)" },
  to: { height: 0 },
});

const StyledCollapsible = styled(CollapsiblePrimitive.Root, {});

type CollapsibleProps = React.ComponentProps<typeof StyledCollapsible>;

export const Collapsible = React.forwardRef<
  React.ElementRef<typeof StyledCollapsible>,
  CollapsibleProps
>(({ children, ...props }, forwardedRef) => (
  <StyledCollapsible ref={forwardedRef} {...props}>
    {children}
  </StyledCollapsible>
));
Collapsible.displayName = "Collapsible";

export const CollapsibleContent = styled(CollapsiblePrimitive.Content, {
  overflow: "hidden",
  '&[data-state="open"]': {
    animation: `${slideDown} 200ms cubic-bezier(0.87, 0, 0.13, 1)`,
    "@motion": {
      animation: "none",
    },
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 200ms cubic-bezier(0.87, 0, 0.13, 1)`,
    "@motion": {
      animation: "none",
    },
  },
});

export const CollapsibleTrigger = CollapsiblePrimitive.Trigger;
