import { styled } from "../stitches.config";

export const TextArea = styled("textarea", {
  // Reset
  border: "none",
  outline: "none",
  fontFamily: "inherit",
  width: "100%",
  resize: "none",

  minHeight: "112px",
  bg: "$bg200",
  color: "$text200",
  transition: "$bgColor, $boxShadow",
  borderRadius: "$xl",
  p: "$sm",
  fontSize: "$sm",
  lineHeight: "$normal",

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
});
