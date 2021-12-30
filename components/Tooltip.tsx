import React from "react";
import { styled, keyframes, darkTheme, deepTheme } from "../stitches.config";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { Text } from "..";

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const TooltipContent = styled(TooltipPrimitive.Content, {
  borderRadius: "$lg",
  bg: "$bg300",
  boxShadow: "$sm",
  p: "$sm",

  [`.${darkTheme} &, .${deepTheme} &`]: {
    "&::before": {
      content: "",
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundColor: "white",
      top: "0",
      left: "0",
      borderRadius: "inherit",

      opacity: "0.03",
      transition: "$opacity",
      pointerEvents: "none",
    },
  },

  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
  '&[data-state="delayed-open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
});

type TooltipProps = React.ComponentProps<typeof TooltipPrimitive.Root> &
  React.ComponentProps<typeof TooltipPrimitive.Content> & {
    children: React.ReactElement;
    content: React.ReactNode;
  };

export const Tooltip = ({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  ...props
}: TooltipProps) => (
  <TooltipPrimitive.Root
    open={open}
    defaultOpen={defaultOpen}
    onOpenChange={onOpenChange}
  >
    <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>

    <TooltipContent side="bottom" align="center" sideOffset={5} {...props}>
      <Text
        size="xs"
        css={{
          textAlign: "center",
          lineHeight: "16px",
        }}
      >
        {content}
      </Text>
    </TooltipContent>
  </TooltipPrimitive.Root>
);

export const TooltipProvider = ({
  delayDuration,
  skipDelayDuration,
  children,
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) => (
  <TooltipPrimitive.Provider
    delayDuration={delayDuration}
    skipDelayDuration={skipDelayDuration}
  >
    {children}
  </TooltipPrimitive.Provider>
);
