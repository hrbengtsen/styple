import { styled } from "../stitches.config";

export const Container = styled("div", {
  // Reset
  boxSizing: "border-box",
});

export const Flex = styled(Container, {
  display: "flex",
});

export const Grid = styled(Container, {
  display: "grid",
});

export const Section = styled(Container, {
  variants: {
    size: {
      sm: {
        py: "$xl",
        "@bp2": {
          py: "$2xl",
        },
      },
      md: {
        py: "$3xl",
        "@bp2": {
          py: "$4xl",
        },
      },
      lg: {
        py: "$4xl",
        "@bp2": {
          py: "$max",
        },
      },
      xl: {
        py: "$max",
        "@bp2": {
          py: "256px",
        },
      },
    },
  },
  defaultVariants: {
    size: "sm",
  },
});
