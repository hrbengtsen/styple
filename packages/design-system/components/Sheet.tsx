import React from "react";
import { styled, keyframes } from "../stitches.config";
import { VariantProps } from "@stitches/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { overlayStyles } from "./Overlay";
import { panelStyles } from "./Panel";
import { Header as SheetHeader, Footer as SheetFooter } from "./DialogUtils";
import { Container, Heading } from "..";

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

  top: "0",
  bottom: "0",

  // Override panelStyles p: "$lg"
  p: "0",

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

type SheetProps = React.ComponentProps<typeof DialogPrimitive.Root> & {
  children: React.ReactNode;
};

export function Sheet({ children, ...props }: SheetProps) {
  return <DialogPrimitive.Root {...props}>{children}</DialogPrimitive.Root>;
}

type SheetContentProps = React.ComponentProps<typeof StyledContent> &
  VariantProps<typeof StyledContent> & {
    headerTitle: React.ReactElement<typeof Heading>;
    footerContent?: React.ReactNode;
  };

export const SheetContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  SheetContentProps
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
          // Temp fix "pointerEvents: none" from staying due to closing animation and bug in Radix Dialog: https://github.com/radix-ui/primitives/issues/1241
          onCloseAutoFocus={(_: Event) =>
            (document.body.style.pointerEvents = "auto")
          }
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
          <SheetHeader headerTitle={headerTitle} scrolled={scrolled} />
          <Container
            css={{
              px: "$lg",
              pb: `${footerContent ? "0" : "$lg"}`,
            }}
          >
            {children}
          </Container>
          {footerContent && (
            <SheetFooter overflow={hasOverflowY}>{footerContent}</SheetFooter>
          )}
        </StyledContent>
      </StyledOverlay>
    </DialogPrimitive.Portal>
  );
});
SheetContent.displayName = "SheetContent";

export const SheetTrigger = DialogPrimitive.Trigger;
export const SheetClose = DialogPrimitive.Close;
export const SheetDescription = DialogPrimitive.Description;
