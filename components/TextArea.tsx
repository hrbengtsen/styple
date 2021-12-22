import { styled } from "../stitches.config";

export const TextArea = styled("textarea", {
  // Reset
  border: "none",
  outline: "none",
  fontFamily: "inherit",
  width: "100%",
  resize: "none",

  minHeight: "112px",
  bg: "$bg300",
  color: "$text200",
  transition: "$bgColor, $boxShadow",
  borderRadius: "$xl",
  p: "$sm",
  fontSize: "$sm",
  lineHeight: "$normal",

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
});
