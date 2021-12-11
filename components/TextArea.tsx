import { styled } from "../stitches.config";

export const TextArea = styled("textarea", {
  // Reset
  border: "none",
  outline: "none",
  fontFamily: "inherit",
  width: "100%",
  resize: "none",

  minHeight: "112px",
  bg: "$bgDark",
  color: "$textNormal",
  transition: "$bgColor, $boxShadow",
  borderRadius: "$xl",
  p: "$sm",
  fontSize: "$sm",
  lineHeight: "$normal",

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
});
