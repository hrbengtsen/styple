import { styled } from "../stitches.config";

export const Button = styled("button", {
  // Reset
  fontSize: "$sm",
  color: "$text100",
  p: "$sm",
  bg: "$button100",
  borderRadius: "$md",
  display: "inline-block",
  lineHeight: "$normal",
  textAlign: "center",
  whiteSpace: "nowrap",
  verticalAlign: "middle",
  border: "0",
  cursor: "pointer",

  transition: "$color, $bgColor, $transform, $border, $boxShadow",

  "&:hover": {
    bg: "$button200",
  },
  "&:focus": {
    bg: "$button200",
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
        bg: "$primary100",
        "&:hover": {
          bg: "$primary200",
        },
        "&:focus": {
          bg: "$primary200",
          boxShadow: "$border",
        },
      },
      secondary: {
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
