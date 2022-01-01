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
  bg: "$bgElavated",

  borderRadius: "$xl",
  boxShadow: "$lg",
  p: "$lg",
});

export const Panel = styled("div", panelStyles);
