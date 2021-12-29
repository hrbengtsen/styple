import { darkTheme, deepTheme, styled } from "../stitches.config";

export const Card = styled("div", {
  backgroundColor: "$bg200",
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
          "&::before": {
            content: "",
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            top: "0",
            left: "0",
            borderRadius: "inherit",

            opacity: "0",
            transition: "$opacity",
          },
          "&:hover::before, &:focus::before": {
            opacity: "0.03",
          },
          "&:active::before": {
            opacity: "0.02",
          },
        },
      },
    },
  ],
});
