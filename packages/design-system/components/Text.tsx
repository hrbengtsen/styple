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
      "2xl": {
        fontSize: "$2xl",
      },
      "3xl": {
        fontSize: "$3xl",
      },
      "4xl": {
        fontSize: "$4xl",
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
      heading: {
        color: "$text100",
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
