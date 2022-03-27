import React from "react";
import { styled } from "../stitches.config";
import { Container } from "./Containers";
import { ScrollArea } from "./ScrollArea";

const StyledScrollShadow = styled("div", {
  position: "relative",
  height: "100%",
  $$shadowSize: "$sizes$md",
  $$shadowColor: "rgba(22, 23, 24, 0.1)",

  variants: {
    direction: {
      horizontal: {
        "&::before": {
          content: "",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: "$$shadowSize",
          zIndex: "$1",
          background:
            "linear-gradient(to right, $$shadowColor 0%, transparent 100%)",
        },

        "&::after": {
          content: "",
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          width: "$$shadowSize",
          zIndex: "$1",
          background:
            "linear-gradient(to left, $$shadowColor 0%, transparent 100%)",
        },
      },
      vertical: {
        "&::before": {
          content: "",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          height: "$$shadowSize",
          zIndex: "$4",
          background:
            "linear-gradient(to bottom, $$shadowColor 0%, transparent 100%)",
        },

        "&::after": {
          content: "",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          width: "100%",
          height: "$$shadowSize",
          zIndex: "$4",
          background:
            "linear-gradient(to top, $$shadowColor 0%, transparent 100%)",
        },
      },
    },
    hideStart: {
      true: {},
    },
    hideEnd: {
      true: {},
    },
  },
  compoundVariants: [
    {
      direction: "horizontal",
      hideStart: true,
      css: {
        "&::before": {
          content: "none",
        },
      },
    },
    {
      direction: "horizontal",
      hideEnd: true,
      css: {
        "&::after": {
          content: "none",
        },
      },
    },
    {
      direction: "vertical",
      hideStart: true,
      css: {
        "&::before": {
          content: "none",
        },
      },
    },
    {
      direction: "vertical",
      hideEnd: true,
      css: {
        "&::after": {
          content: "none",
        },
      },
    },
  ],
});

// Remove hide(Start/End) variants from exported component, since it should only be used internally
type HideVariants = "hideStart" | "hideEnd";

type ScrollShadowProps = Omit<
  React.ComponentProps<typeof StyledScrollShadow>,
  HideVariants
> & {
  withScrollArea?: boolean;
};

export const ScrollShadow = React.forwardRef<
  React.ElementRef<typeof StyledScrollShadow>,
  ScrollShadowProps
>(
  (
    { children, direction = "vertical", withScrollArea = false, ...props },
    forwardedRef
  ) => {
    const [showStart, setShowStart] = React.useState(false);
    const [showEnd, setShowEnd] = React.useState(false);
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      const onScroll = () => {
        const {
          scrollWidth = 0,
          scrollHeight = 0,
          scrollLeft = 0,
          scrollTop = 0,
          offsetWidth = 0,
          offsetHeight = 0,
        } = ref.current || {};

        if (direction === "horizontal") {
          setShowStart(scrollLeft > 0);
          setShowEnd(Math.round(scrollLeft + offsetWidth) < scrollWidth - 1);
        }

        if (direction === "vertical") {
          setShowStart(scrollTop > 0);
          setShowEnd(Math.round(scrollTop + offsetHeight) < scrollHeight - 1);
        }
      };

      onScroll();
      const node = ref.current;
      node?.addEventListener("scroll", onScroll);
      window.addEventListener("resize", onScroll);

      return () => {
        node?.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      };
    }, [direction]);

    return (
      <StyledScrollShadow
        {...props}
        direction={direction}
        hideStart={!showStart}
        hideEnd={!showEnd}
        ref={forwardedRef}
      >
        {withScrollArea ? (
          <ScrollArea ref={ref}>{children}</ScrollArea>
        ) : (
          <Container css={{ overflow: "auto" }} ref={ref}>
            {children}
          </Container>
        )}
      </StyledScrollShadow>
    );
  }
);
ScrollShadow.displayName = "ScrollShadow";
