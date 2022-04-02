import { styled } from "../stitches.config";

export const Code = styled("code", {
  fontFamily: "$mono",
  fontSize: "max($xs, 85%)",
  whiteSpace: "nowrap",
  p: "$xs",
  borderRadius: "$lg",

  variants: {
    color: {
      accent: {
        color: "$accent200",
        bg: "$accent100A",
      },
      normal: {
        color: "$text200",
        bg: "$button300",
      },
    },
  },
  defaultVariants: {
    color: "accent",
  },
});
