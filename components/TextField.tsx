import { darkTheme, deepTheme, styled } from "../stitches.config";

export const TextField = styled("input", {
  // Reset
  border: "none",
  outline: "none",
  p: "0",
  fontFamily: "inherit",
  width: "100%",

  bg: "$bg300",
  color: "$text200",
  transition: "$bgColor, $boxShadow",

  "&::placeholder": {
    color: "$text200",
    opacity: ".7",
  },

  "&:disabled": {
    opacity: ".6",
    pointerEvents: "none",
  },

  "&:focus": {
    boxShadow: "0 0 0 0.1rem $colors$button100",
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
        bg: "transparent",
        "&:hover": {
          bg: "$bg300",
        },
      },
    },
    state: {
      valid: {
        boxShadow: "0 0 0 0.1rem $colors$success100",
      },
      invalid: {
        boxShadow: "0 0 0 0.1rem $colors$danger100",
      },
    },
  },
  defaultVariants: {
    size: "sm",
  },
});
