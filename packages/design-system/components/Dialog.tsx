import React from "react";
import { styled } from "../stitches.config";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { overlayStyles } from "./Overlay";
import { panelStyles, contentFadeIn } from "./Panel";
import { Header as DialogHeader, Footer as DialogFooter } from "./DialogUtils";
import { Container, Heading } from "..";

export const StyledOverlay = styled(DialogPrimitive.Overlay, overlayStyles, {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});

export const StyledContent = styled(DialogPrimitive.Content, panelStyles, {
  position: "fixed",

  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  // Override panelStyles p: "$lg"
  p: "0",

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

type DialogProps = React.ComponentProps<typeof DialogPrimitive.Root> & {
  children: React.ReactNode;
};

export function Dialog({ children, ...props }: DialogProps) {
  return <DialogPrimitive.Root {...props}>{children}</DialogPrimitive.Root>;
}

type DialogContentProps = React.ComponentProps<typeof StyledContent> & {
  headerTitle: React.ReactElement<typeof Heading>;
  footerContent?: React.ReactNode;
};

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  DialogContentProps
>(({ children, headerTitle, footerContent, ...props }, forwardedRef) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [hasOverflowY, setHasOverflowY] = React.useState(false);
  const [currentNode, setCurrentNode] = React.useState<HTMLDivElement>();

  const ref = React.useCallback((node: HTMLDivElement | null) => {
    if (node !== null) {
      const hasOverflowY = node.offsetHeight < node.scrollHeight;
      setHasOverflowY(hasOverflowY);
      setCurrentNode(node);
    }
  }, []);

  const onScroll = () => {
    const { scrollTop = 0 } = currentNode || {};
    if (scrollTop > 0 && !scrolled) {
      setScrolled(true);
    } else if (scrollTop == 0 && scrolled) {
      setScrolled(false);
    }
  };

  return (
    <DialogPrimitive.Portal>
      <StyledOverlay>
        <StyledContent
          {...props}
          onScroll={onScroll}
          ref={(node) => {
            // Update internal ref
            ref(node);

            // Handle forwarded ref
            if (typeof forwardedRef === "function") {
              forwardedRef(node);
            } else if (forwardedRef) {
              (
                forwardedRef as React.MutableRefObject<HTMLDivElement | null>
              ).current = node;
            }
          }}
        >
          <DialogHeader headerTitle={headerTitle} scrolled={scrolled} />
          <Container
            css={{
              px: "$lg",
              pb: `${footerContent ? "0" : "$lg"}`,
            }}
          >
            {children}
          </Container>
          {footerContent && (
            <DialogFooter overflow={hasOverflowY}>{footerContent}</DialogFooter>
          )}
        </StyledContent>
      </StyledOverlay>
    </DialogPrimitive.Portal>
  );
});
DialogContent.displayName = "DialogContent";

export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;
export const DialogDescription = DialogPrimitive.Description;
