import { styled } from "../stitches.config";

export const Text = styled("p", {
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
        color: "$primary100",
      },
      secondary: {
        color: "$secondary100",
      },
      text1: {
        color: "$text100",
      },
      text2: {
        color: "$text200",
      },
      danger: {
        color: "$danger100",
      },
      success: {
        color: "$success100",
      },
    },
  },
  defaultVariants: {
    size: "sm",
    color: "text1",
  },
});
