import { styled } from "../stitches.config";

export const TextField = styled("input", {
  // Reset
  border: "none",
  outline: "none",
  p: "0",
  fontFamily: "inherit",
  width: "100%",

  bg: "$bgDark",
  color: "$textNormal",
  transition: "$bgColor, $boxShadow",

  "&::placeholder": {
    color: "$textNormal",
    opacity: ".6",
  },

  "&:disabled": {
    opacity: ".6",
    pointerEvents: "none",
  },

  "&:focus": {
    boxShadow: "0 0 0 0.1rem $colors$buttonLight",
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
          bg: "$bgDark",
        },
      },
    },
    state: {
      valid: {
        boxShadow: "0 0 0 0.1rem $colors$successLight",
      },
      invalid: {
        boxShadow: "0 0 0 0.1rem $colors$dangerLight",
      },
    },
  },
  defaultVariants: {
    size: "sm",
  },
});