import { darkTheme, deepTheme, styled } from "../stitches.config";

export const Card = styled("div", {
  bg: "$bg200",
  position: "relative",
  border: "none",

  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",

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
        },
        "&:active": {
          transform: "translateY(0)",
          boxShadow: "$sm",
        },
      },
    },
    elavateOnDark: {
      true: {},
    },
  },
  compoundVariants: [
    {
      interactive: "true",
      elavateOnDark: "true",
      css: {
        [`.${darkTheme} &, .${deepTheme} &`]: {
          "&:hover, &:focus": {
            bg: "$bgElavated",
          },
        },
      },
    },
  ],
});
