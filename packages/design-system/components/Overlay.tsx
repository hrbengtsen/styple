import { styled, css, keyframes } from "../stitches.config";

const overlayFadeIn = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const overlayStyles = css({
  backgroundColor: "rgba(0, 0, 0, .5)",
  zIndex: "$4",
  animation: `${overlayFadeIn} .15s ease-out`,
  "@motion": {
    animation: "none",
  },
});

export const Overlay = styled("div", overlayStyles);
