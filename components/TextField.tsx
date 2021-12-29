import { styled } from "../stitches.config";

export const TextField = styled("input", {
  // Reset
  border: "none",
  outline: "none",
  p: "0",
  fontFamily: "inherit",
  width: "100%",

  bg: "$bg200",
  color: "$text200",
  transition: "$bgColor, $boxShadow",

  boxShadow: "inset 0 0 0 1px $colors$button100",

  "&::placeholder": {
    color: "$text200",
    opacity: ".6",
  },

  "&:disabled": {
    opacity: ".6",
    pointerEvents: "none",
  },

  "&:hover, &:focus": {
    boxShadow: "inset 0 0 0 0.1rem $colors$button100",
  },

  variants: {
    size: {
      sm: {
        height: "$lg",
        borderRadius: "$lg",
        px: "$sm",
        fontSize: "$sm",
      },
      lg: {
        height: "40px",
        borderRadius: "$xl",
        px: "$md",
        fontSize: "$sm",
      },
    },
    variant: {
      ghost: {
        boxShadow: "none",
      },
    },
    state: {
      valid: {
        boxShadow: "inset 0 0 0 0.1rem $colors$success100",
      },
      invalid: {
        boxShadow: "inset 0 0 0 0.1rem $colors$danger100",
      },
    },
  },
  defaultVariants: {
    size: "sm",
  },
});
