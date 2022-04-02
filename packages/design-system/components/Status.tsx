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
        bg: "$button100",
      },
      primary: {
        bg: "$primary100",
      },
      accent: {
        bg: "$accent100",
      },
      danger: {
        bg: "$danger100",
      },
      success: {
        bg: "$success100",
      },
    },
  },
  defaultVariants: {
    size: "sm",
    variant: "normal",
  },
});
