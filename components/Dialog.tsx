import React from "react";
import { styled, CSS } from "../stitches.config";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { overlayStyles } from "./Overlay";
import { panelStyles, contentFadeIn } from "./Panel";
import { Button } from "..";

const StyledOverlay = styled(DialogPrimitive.Overlay, overlayStyles, {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});

const StyledContent = styled(DialogPrimitive.Content, panelStyles, {
  position: "fixed",
  zIndex: "$max",

  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  maxWidth: "$xxxxl",

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

const StyledCloseButton = styled(DialogPrimitive.Close, {
  position: "absolute",
  top: "$md",
  right: "$md",
});

type DialogProps = React.ComponentProps<typeof DialogPrimitive.Root> & {
  children: React.ReactNode;
};

export function Dialog({ children, ...props }: DialogProps) {
  return <DialogPrimitive.Root {...props}>{children}</DialogPrimitive.Root>;
}

type DialogContentProps = React.ComponentProps<typeof StyledContent> & {
  css?: CSS;
};

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  DialogContentProps
>(({ children, ...props }, forwardedRef) => (
  <StyledOverlay>
    <StyledContent {...props} ref={forwardedRef}>
      {children}
      <StyledCloseButton asChild>
        <Button highlight size="circle">
          <X />
        </Button>
      </StyledCloseButton>
    </StyledContent>
  </StyledOverlay>
));

export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;
