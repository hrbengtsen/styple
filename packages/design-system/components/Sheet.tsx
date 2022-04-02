import React from "react";
import { styled, keyframes } from "../stitches.config";
import { VariantProps } from "@stitches/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { overlayStyles } from "./Overlay";
import { panelStyles } from "./Panel";
import { Button } from "..";

const fadeIn = keyframes({
  from: { opacity: "0" },
  to: { opacity: "1" },
});

const fadeOut = keyframes({
  from: { opacity: "1" },
  to: { opacity: "0" },
});

const StyledOverlay = styled(DialogPrimitive.Overlay, overlayStyles, {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,

  '&[data-state="open"]': {
    animation: `${fadeIn} .15s ease-out`,
  },

  '&[data-state="closed"]': {
    animation: `${fadeOut} .15s ease-in`,
  },
});

const slideIn = keyframes({
  from: { transform: "$$transformVal" },
  to: { transform: "translate3d(0,0,0)" },
});

const slideOut = keyframes({
  from: { transform: "translate3d(0,0,0)" },
  to: { transform: "$$transformVal" },
});

const StyledContent = styled(DialogPrimitive.Content, panelStyles, {
  position: "fixed",
  zIndex: "$max",

  top: "0",
  bottom: "0",

  overflowY: "auto",

  '&[data-state="open"]': {
    animation: `${slideIn} .15s ease-out`,
  },

  '&[data-state="closed"]': {
    animation: `${slideOut} .15s ease-in`,
  },

  variants: {
    side: {
      bottom: {
        $$transformVal: "translate3d(0,100%,0)",
        width: "100%",
        height: "320px",
        top: "auto",

        borderBottomLeftRadius: "0",
        borderBottomRightRadius: "0",
      },
      top: {
        $$transformVal: "translate3d(0,-100%,0)",
        width: "100%",
        height: "320px",
        bottom: "auto",

        borderTopLeftRadius: "0",
        borderTopRightRadius: "0",
      },
      left: {
        $$transformVal: "translate3d(-100%,0,0)",
        width: "320px",
        left: 0,

        borderTopLeftRadius: "0",
        borderBottomLeftRadius: "0",
      },
      right: {
        $$transformVal: "translate3d(100%,0,0)",
        width: "320px",
        right: 0,

        borderTopRightRadius: "0",
        borderBottomRightRadius: "0",
      },
    },
  },

  defaultVariants: {
    side: "bottom",
  },
});

const StyledCloseButton = styled(DialogPrimitive.Close, {
  position: "absolute",
  top: "$md",
  right: "$md",
});

type SheetProps = React.ComponentProps<typeof DialogPrimitive.Root> & {
  children: React.ReactNode;
};

export function Sheet({ children, ...props }: SheetProps) {
  return <DialogPrimitive.Root {...props}>{children}</DialogPrimitive.Root>;
}

type SheetContentProps = React.ComponentProps<typeof StyledContent> &
  VariantProps<typeof StyledContent>;

export const SheetContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  SheetContentProps
>(({ children, ...props }, forwardedRef) => (
  <StyledOverlay>
    <StyledContent
      {...props}
      // Temp fix "pointerEvents: none" from staying due to closing animation and bug in Radix Dialog: https://github.com/radix-ui/primitives/issues/1241
      onCloseAutoFocus={(_: Event) =>
        (document.body.style.pointerEvents = "auto")
      }
      ref={forwardedRef}
    >
      {children}
      <StyledCloseButton asChild>
        <Button highlight size="circle" aria-label="Close button">
          <X />
        </Button>
      </StyledCloseButton>
    </StyledContent>
  </StyledOverlay>
));
SheetContent.displayName = "SheetContent";

export const SheetTrigger = DialogPrimitive.Trigger;
export const SheetClose = DialogPrimitive.Close;
export const SheetTitle = DialogPrimitive.Title;
export const SheetDescription = DialogPrimitive.Description;
export const SheetPortal = DialogPrimitive.Portal;
