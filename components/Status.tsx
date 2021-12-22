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
        bg: "$button200",
      },
      primary: {
        bg: "$primary200",
      },
      accent: {
        bg: "$accent200",
      },
      danger: {
        bg: "$danger200",
      },
      success: {
        bg: "$success200",
      },
    },
  },
  defaultVariants: {
    size: "sm",
    variant: "normal",
  },
});
