import React from "react";
import { styled, CSS } from "../stitches.config";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Separator } from "..";

const StyledAccordion = styled(AccordionPrimitive.Root, {});

type AcoordionProps = React.ComponentProps<typeof StyledAccordion> & {
  css?: CSS;
};

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

export const AccordionItem = styled(AccordionPrimitive.Item, {});

const AccordionHeader = styled(AccordionPrimitive.Header, {
  all: "unset",
});

export const AccordionContent = styled(AccordionPrimitive.Content, {
  p: "$sm",
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
  },

  '&[data-state="open"]': {
    svg: {
      transform: "rotate(180deg)",
    },
  },
});

type AccordionTriggerProps = React.ComponentProps<typeof StyledTrigger> & {
  css?: CSS;
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
