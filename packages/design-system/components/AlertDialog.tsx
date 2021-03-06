import React from "react";
import { styled } from "../stitches.config";
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

  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  maxWidth: "$4xl",

  minWidth: "90%",
  "@bp1": {
    minWidth: "320px",
  },

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

type AlertDialogContentProps = React.ComponentProps<typeof StyledContent>;

export const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  AlertDialogContentProps
>(({ children, ...props }, forwardedRef) => (
  <AlertDialogPrimitive.Portal>
    <StyledOverlay>
      <StyledContent {...props} ref={forwardedRef}>
        {children}
      </StyledContent>
    </StyledOverlay>
  </AlertDialogPrimitive.Portal>
));
AlertDialogContent.displayName = "AlertDialogContent";

export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
export const AlertDialogAction = AlertDialogPrimitive.Action;
export const AlertDialogCancel = AlertDialogPrimitive.Cancel;
export const AlertDialogTitle = AlertDialogPrimitive.Title;
export const AlertDialogDescription = AlertDialogPrimitive.Description;
