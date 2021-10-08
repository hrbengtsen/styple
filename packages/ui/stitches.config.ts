import { createStitches } from "@stitches/react";
import { stypleTheme, stypleUtils } from "./src";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: stypleTheme,
  media: {
    bp1: "(min-width: 576px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 992px)",
    bp4: "(min-width: 1200px)",
  },
  utils: stypleUtils,
});
