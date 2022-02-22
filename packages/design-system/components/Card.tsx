import { styled } from "../stitches.config";

export const Card = styled("div", {
  bg: "$bg300",
  position: "relative",
  border: "none",

  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  p: "$lg",

  boxSizing: "border-box",
  borderRadius: "$xl",

  variants: {
    active: {
      true: {
        boxShadow: "$sm",
      },
    },
    interactive: {
      true: {
        transition: "$transform, $bgColor, $boxShadow",
        willChange: "transform",
        "&:hover, &:focus": {
          transform: "translateY(-2px)",
          boxShadow: "$md",

          bg: "$bg300E",
        },
        "&:active": {
          transform: "translateY(0)",
          boxShadow: "$sm",
        },
      },
    },
  },
});
