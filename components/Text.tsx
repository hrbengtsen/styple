import { styled, css } from "../stitches.config";

export const textStyles = css({
  // Reset
  m: "0",
  fontWeight: "$reg",

  variants: {
    size: {
      xs: {
        fontSize: "$xs",
      },
      sm: {
        fontSize: "$sm",
      },
      md: {
        fontSize: "$md",
      },
      lg: {
        fontSize: "$lg",
      },
      xl: {
        fontSize: "$xl",
      },
      xxl: {
        fontSize: "$xxl",
      },
      xxxl: {
        fontSize: "$xxxl",
      },
      xxxxl: {
        fontSize: "$xxxxl",
      },
      max: {
        fontSize: "$max",
      },
    },
    color: {
      primary: {
        color: "$primary200",
      },
      accent: {
        color: "$accent200",
      },
      danger: {
        color: "$danger200",
      },
      success: {
        color: "$success200",
      },
      text: {
        color: "$text200",
      },
      white: {
        color: "#FFFFFF",
      },
      black: {
        color: "#000000",
      },
    },
  },
  defaultVariants: {
    size: "sm",
    color: "text",
  },
});

export const Text = styled("p", textStyles, {});
