import { styled } from "../stitches.config";

export const Status = styled("div", {
  borderRadius: "50%",

  variants: {
    size: {
      sm: {
        size: "$xs",
      },
      lg: {
        size: "$sm",
      },
    },
    variant: {
      normal: {
        bg: "$buttonNormal",
      },
      primary: {
        bg: "$primaryNormal",
      },
      accent: {
        bg: "$accentNormal",
      },
      danger: {
        bg: "$dangerNormal",
      },
      success: {
        bg: "$successNormal",
      },
    },
  },
  defaultVariants: {
    size: "sm",
    variant: "normal",
  },
});
