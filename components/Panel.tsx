import {
  css,
  darkTheme,
  deepTheme,
  styled,
  keyframes,
} from "../stitches.config";

export const contentFadeIn = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.9)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

export const panelStyles = css({
  bg: "$bg200",

  [`.${darkTheme} &, .${deepTheme} &`]: {
    bg: "$bg300",

    "&::before": {
      content: "",
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundColor: "white",
      top: "0",
      left: "0",
      borderRadius: "inherit",

      opacity: "0.03",
      transition: "$opacity",
      pointerEvents: "none",
    },
  },

  borderRadius: "$xl",
  boxShadow: "$lg",
  p: "$lg",
});

export const Panel = styled("div", panelStyles);
