import { styled } from "../stitches.config";

export const Button = styled("button", {
  // Reset
  fontSize: "$sm",
  color: "$textNormal",
  p: "$sm",
  bg: "$buttonNormal",
  borderRadius: "$xl",
  display: "inline-block",
  lineHeight: "$normal",
  textAlign: "center",
  whiteSpace: "nowrap",
  verticalAlign: "middle",
  border: "0",
  cursor: "pointer",

  transition: "$color, $bgColor, $transform, $border, $boxShadow",

  "&:hover": {
    bg: "$buttonDark",
  },
  "&:focus": {
    bg: "$buttonDark",
  },
  "&:disabled": {
    opacity: "0.7",
    pointerEvents: "none",
  },

  variants: {
    move: {
      true: {
        "&:hover": {
          transform: "translateY(-1px)",
        },
        "&:active": {
          transform: "translateY(0px)",
        },
        willChange: "transform",
      },
    },
    variant: {
      primary: {
        bg: "$primaryNormal",
        color: "$bgNormal",
        "&:hover": {
          bg: "$primaryDark",
        },
        "&:focus": {
          bg: "$primaryDark",
          boxShadow: "$border",
        },
      },
      accent: {
        bg: "$secondary100",
        "&:hover": {
          bg: "$secondary200",
        },
        "&:focus": {
          bg: "$secondary200",
          boxShadow: "$border",
        },
      },
    },
    // add more variants: https://github.com/hrbengtsen/bitetap/blob/master/lib/styling/theme.js
  },
});
