import React from "react";
import { styled, CSS } from "../stitches.config";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { overlayStyles } from "./Overlay";
import { panelStyles, contentFadeIn } from "./Panel";

const StyledOverlay = styled(AlertDialogPrimitive.Overlay, overlayStyles, {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});

const StyledContent = styled(AlertDialogPrimitive.Content, panelStyles, {
  position: "fixed",
  zIndex: "$max",

  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  maxWidth: "$xxxxl",
  minWidth: "320px",
  maxHeight: "90vh",
  overflowY: "auto",

  animation: `${contentFadeIn} .15s ease-out`,
  "@motion": {
    animation: "none",
  },
});

type AlertDialogProps = React.ComponentProps<
  typeof AlertDialogPrimitive.Root
> & {
  children: React.ReactNode;
};

export function AlertDialog({ children, ...props }: AlertDialogProps) {
  return (
    <AlertDialogPrimitive.Root {...props}>{children}</AlertDialogPrimitive.Root>
  );
}

type AlertDialogContentProps = React.ComponentProps<typeof StyledContent> & {
  css?: CSS;
};

export const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  AlertDialogContentProps
>(({ children, ...props }, forwardedRef) => (
  <StyledOverlay>
    <StyledContent {...props} ref={forwardedRef}>
      {children}
    </StyledContent>
  </StyledOverlay>
));

export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
export const AlertDialogAction = AlertDialogPrimitive.Action;
export const AlertDialogCancel = AlertDialogPrimitive.Cancel;
