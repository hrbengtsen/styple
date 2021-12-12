import { styled } from "../stitches.config";
import * as LabelPrimitive from "@radix-ui/react-label";
import { textStyles } from "..";

export const Label = styled(LabelPrimitive.Root, {
  //...textStyles, -> gives client-server classname inconsistency, even with radix Id?
  // Reset
  m: "0",
  fontWeight: "$reg",

  display: "inline-block",
  verticalAlign: "middle",
  cursor: "default",

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
