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
        color: "$primaryNormal",
      },
      accent: {
        color: "$accentNormal",
      },
      danger: {
        color: "$dangerNormal",
      },
      success: {
        color: "$successNormal",
      },
      text: {
        color: "$textNormal",
      },
      heading: {
        color: "$headingNormal",
      },
    },
  },
  defaultVariants: {
    size: "sm",
    color: "text",
  },
});
