import { styled } from "../stitches.config";

export const Card = styled("div", {
  backgroundColor: "$bgNormal",
  position: "relative",
  border: "none",

  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",

  boxSizing: "border-box",
  borderRadius: "$xl",

  variants: {
    interactive: {
      true: {
        transition: "$transform, $bgColor, $boxShadow",
        willChange: "transform",
        "&:hover, &:focus": {
          transform: "translateY(-2px)",
          boxShadow: "$md",
        },
        "&:focus": {
          boxShadow: "$md, 0 0 0 0.1rem $colors$buttonLight",
        },
        "&:active": {
          transform: "translateY(0)",
          boxShadow: "$sm, 0 0 0 0.1rem $colors$buttonLight",
        },
      },
    },
  },
});
