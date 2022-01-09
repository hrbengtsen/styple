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
        py: "$xxl",
      },
      md: {
        py: "$xxxxl",
      },
      lg: {
        py: "$max",
      },
      xl: {
        py: "256px",
      },
    },
  },
  defaultVariants: {
    size: "sm",
  },
});
