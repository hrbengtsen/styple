import React from "react";
import { styled, keyframes } from "../stitches.config";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Separator } from "..";

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-accordion-content-height)" },
});

const slideUp = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 },
});

const StyledAccordion = styled(AccordionPrimitive.Root, {});

type AcoordionProps = React.ComponentProps<typeof StyledAccordion>;

export const Accordion = React.forwardRef<
  React.ElementRef<typeof StyledAccordion>,
  AcoordionProps
>(({ children, ...props }, forwardedRef) => (
  <StyledAccordion
    ref={forwardedRef}
    {...props}
    {...(props.type === "single" ? { collapsible: true } : {})}
  >
    {children}
  </StyledAccordion>
));
Accordion.displayName = "Accordion";

export const AccordionItem = styled(AccordionPrimitive.Item, {});

const AccordionHeader = styled(AccordionPrimitive.Header, {
  all: "unset",
});

export const AccordionContent = styled(AccordionPrimitive.Content, {
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

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  all: "unset",
  boxSizing: "border-box",
  userSelect: "none",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  p: "$sm",
  color: "$text200",
  width: "100%",
  transition: "$bgColor",
  borderRadius: "$xs",

  "&:hover": {
    bg: "$bg300",
  },
  "&:focus": {
    boxShadow: "inset 0 0 0 1px currentColor, 0 0 0 1px currentColor",
  },

  svg: {
    transition: "transform 200ms cubic-bezier(0.65, 0, 0.35, 1)",
    "@motion": {
      transition: "none",
    },
  },

  '&[data-state="open"]': {
    svg: {
      transform: "rotate(180deg)",
    },
  },
});

type AccordionTriggerProps = React.ComponentProps<typeof StyledTrigger> & {
  noSeparator?: boolean;
};

export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof StyledTrigger>,
  AccordionTriggerProps
>(({ children, noSeparator, ...props }, forwardedRef) => (
  <AccordionHeader>
    <StyledTrigger {...props} ref={forwardedRef}>
      {children}
      <ChevronDown />
    </StyledTrigger>
    {!noSeparator && <Separator />}
  </AccordionHeader>
));
AccordionTrigger.displayName = "Accordion";
