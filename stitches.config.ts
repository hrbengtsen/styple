import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";
import { normalize } from "./lib/normalize";

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
  /*
    Note on themes:

    I use a simple scale (with a caveat!):

    100: light (dark on light/cozy for text)
    200: normal
    300: dark (light on dark/deep for bg)

    I prefer semantic names (light, normal, dark), but they cause too many issues and need component specific style overrides (therefore 100-300).

    The caveat is the reversed order for text colors on light themes and bg colors on dark themes.

    They should prob. be changed to function the same (hover "gives" light on dark themes and "shadows" on light themes), but I have settled on this for now.

    I don't find knowing if 100 is dark or light for custom styles must of an issue, since its only reversed in 2 cases and the scale is only 3 variants.

    - Mikkel
  */
  theme: {
    colors: {
      // Element based colors

      // Reversed color order
      heading100: "#131314", // dark
      heading200: "#3B3B3E", // normal
      heading300: "#6c6c6f", // light

      text100: "$heading100",
      text200: "$heading200",
      text300: "$heading300",

      bg100: "#FFFFFF",
      bg200: "#FBFCFC",
      bg300: "#f1f1f1",

      button100: "#c9cacd",
      button200: "#E9EAEC",
      button300: "#E0E1E4",

      // Semantic colors
      primary100: "$heading100",
      primary200: "$heading200",
      primary300: "$heading300",
      primary100A: "rgba(194, 199, 202, 0.16)",
      primary200A: "rgba(194, 199, 202, 0.12)",

      accent100: "#3c87b2",
      accent200: "#347399",
      accent300: "#2b607f",
      accent100A: "rgba(52, 115, 153, 0.10)",
      accent200A: "rgba(52, 115, 153, 0.06)",

      danger100: "#b24343",
      danger200: "#993a3a",
      danger300: "#7f3030",
      danger100A: "rgba(153, 58, 58, 0.10)",
      danger200A: "rgba(153, 58, 58, 0.06)",

      success100: "#3e946b",
      success200: "#357f5b",
      success300: "#2c6a4c",
      success100A: "rgba(62, 148, 107, 0.10)",
      success200A: "rgba(62, 148, 107, 0.06)",
    },
    fonts: {
      inter:
        "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
      mono: "Söhne Mono, menlo, monospace",
    },
    fontWeights: {
      reg: 400,
      semibold: 500,
      bold: 700,
      black: 900,
    },
    space: {
      xs: "4px",
      sm: "8px",
      md: "12px",
      lg: "16px",
      xl: "24px",
      xxl: "32px",
      xxxl: "48px",
      xxxxl: "64px",
      max: "128px",
    },
    sizes: {
      xs: "8px",
      sm: "16px",
      md: "24px",
      lg: "32px",
      xl: "48px",
      xxl: "64px",
      xxxl: "128px",
      xxxxl: "576px",
      max: "1200px",
    },
    fontSizes: {
      xs: "14px",
      sm: "16px",
      md: "20px",
      lg: "24px",
      xl: "32px",
      xxl: "40px",
      xxxl: "48px",
      xxxxl: "64px",
      max: "72px",
    },
    radii: {
      xs: "2px",
      sm: "4px",
      md: "6px",
      lg: "8px",
      xl: "12px",
      xxl: "16px",
      round: "50%",
      pill: "9999px",
    },
    lineHeights: {
      normal: "1.5",
    },
    letterSpacings: {
      normal: "normal",
    },
    borderWidths: {
      sm: "1px",
      md: "2px",
      lg: "4px",
      xl: "8px",
    },
    shadows: {
      sm: "0px 2px 8px -2px rgba(22, 23, 24, 0.35), 0px 2px 5px -3px rgba(22, 23, 24, 0.2)",
      md: "0px 5px 16px -5px rgba(22, 23, 24, 0.35), 0px 5px 10px -7px rgba(22, 23, 24, 0.2)",
      lg: "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
    },
    zIndices: {
      1: "100",
      2: "200",
      3: "300",
      4: "400",
      max: "999",
    },
    transitions: {
      color: "color 0.2s ease-in-out",
      bgColor: "background-color 0.2s ease-in-out",
      transform: "transform 0.2s ease-in-out",
      border: "border 0.2s ease-in-out",
      boxShadow: "box-shadow 0.2s ease-in-out",
      opacity: "opacity 0.2s ease-in-out",
    },
  },
  media: {
    bp1: "(min-width: 576px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 992px)",
    bp4: "(min-width: 1200px)",
    motion: "(prefers-reduced-motion)",
  },
  utils: {
    // Margin utils
    m: (value: Stitches.PropertyValue<"margin">) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<"marginTop">) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<"marginRight">) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<"marginBottom">) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<"marginTop">) => ({
      marginTop: value,
      marginBottom: value,
    }),

    // Padding utils
    p: (value: Stitches.PropertyValue<"padding">) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<"paddingTop">) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<"paddingRight">) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<"paddingBottom">) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<"paddingTop">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    // Util for applying width and height at the same time with same value
    size: (value: Stitches.PropertyValue<"width">) => ({
      width: value,
      height: value,
    }),
    minSize: (value: Stitches.PropertyValue<"minWidth">) => ({
      minWidth: value,
      minHeight: value,
    }),

    // Shorthand util for backgroundColor
    bg: (value: Stitches.PropertyValue<"backgroundColor">) => ({
      backgroundColor: value,
    }),
  },
});

export type { VariantProps } from "@stitches/react";
export type CSS = Stitches.CSS<typeof config>;

// Re-do eventually with inspo from: https://www.joshwcomeau.com/css/custom-css-reset/
export const globalStyles = globalCss({
  ...normalize,
  "*, *::before, *::after": {
    boxSizing: "border-box",
  },
  "@font-face": {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "100 900",
    fontDisplay: "optional",
    src: "url(/fonts/inter-var-latin.woff2) format('woff2')",
    unicodeRange:
      "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
  },
  body: {
    m: "0",
    fontFamily: "$inter",
    lineHeight: "$normal",
    letterSpacing: "$normal",
    bg: "$bg200",
    "-webkit-font-smoothing": "antialiased",
  },
  "html, body, #__next": {
    height: "100%",
    "-webkit-tap-highlight-color": "transparent",
  },
  a: {
    color: "inherit",
    textDecoration: "none",
  },
  ".image-in-card": {
    borderRadius: "$xl",
    zIndex: "-1",
    filter: "brightness(55%)",
  },
});

export const darkTheme = createTheme("dark-theme", {
  colors: {
    // Element based colors
    heading100: "#F4F4F6",
    heading200: "#C2C7CA",
    heading300: "#858589",

    text100: "$heading100",
    text200: "$heading200",
    text300: "$heading300",

    // Reversed color order
    bg100: "#000000", // dark
    bg200: "#131314", // normal
    bg300: "#1E1E1F", // light

    button100: "#545455",
    button200: "#3f3f40",
    button300: "#353536",

    // Semantic colors
    primary100: "#FFFFFF",
    primary200: "#F4F4F6",
    primary300: "#C2C7CA",
    primary100A: "rgba(194, 199, 202, 0.16)",
    primary200A: "rgba(194, 199, 202, 0.12)",

    accent100: "#89d3ff",
    accent200: "#57c1ff",
    accent300: "#4eade5",
    accent100A: "rgba(87, 193, 255, 0.16)",
    accent200A: "rgba(87, 193, 255, 0.12)",

    danger100: "#ff9090",
    danger200: "#ff6161",
    danger300: "#e55757",
    danger100A: "rgba(255, 97, 97, 0.16)",
    danger200A: "rgba(255, 97, 97, 0.12)",

    success100: "#8ae0b7",
    success200: "#59d499",
    success300: "#50be89",
    success100A: "rgba(89, 212, 153, 0.16)",
    success200A: "rgba(89, 212, 153, 0.12)",
  },
});

export const cozyTheme = createTheme("cozy-theme", {
  colors: {
    // Element based colors

    // Reversed color order
    heading100: "#4f4230", // dark
    heading200: "#63533c", // normal
    heading300: "#756957", // light

    text100: "$heading100",
    text200: "$heading200",
    text300: "$heading300",

    bg100: "#FEFCEE",
    bg200: "#FDF9E2",
    bg300: "#F5EDD6",

    button100: "#858589",
    button200: "#FCEDA2",
    button300: "#F8E99F",

    // Semantic colors
    primary100: "#FFDD75",
    primary200: "#FFD146",
    primary300: "#FAC832",
    primary100A: "rgba(253, 213, 35, 0.16)",
    primary200A: "rgba(253, 213, 35, 0.12)",

    accent100: "#308e85",
    accent200: "#2b7e76",
    accent300: "#256e67",
    accent100A: "rgba(43, 126, 118, 0.09)",
    accent200A: "rgba(43, 126, 118, 0.05)",

    danger100: "#d95444",
    danger200: "#c14b3c",
    danger300: "#a94135",
    danger100A: "rgba(193, 75, 60, 0.08)",
    danger200A: "rgba(193, 75, 60, 0.04)",

    success100: "$accent100",
    success200: "$accent200",
    success300: "$accent300",
    success100A: "$accent100A",
    success200A: "$accent200A",
  },
});

export const deepTheme = createTheme("deep-theme", {
  colors: {
    // Element based colors
    heading100: "#F4F4F6",
    heading200: "#C2C7CA",
    heading300: "#858589",

    text100: "$heading100",
    text200: "$heading200",
    text300: "$heading300",

    // Reversed color order
    bg100: "#080716", // dark
    bg200: "#0b0a1e", // normal
    bg300: "#1B1A2D", // light

    button100: "#4e4e5c",
    button200: "#383848",
    button300: "#2E2D3E",

    // Semantic colors
    primary100: "#ec5d94",
    primary200: "#ea4c89",
    primary300: "#d2447b",
    primary100A: "rgba(234, 76, 137, 0.09)",
    primary200A: "rgba(234, 76, 137, 0.05)",

    accent100: "#5dbec5",
    accent200: "#4bb7bf",
    accent300: "#43a4ab",
    accent100A: "rgba(75, 183, 191, 0.09)",
    accent200A: "rgba(75, 183, 191, 0.05)",

    danger100: "#ff9090",
    danger200: "#ff6161",
    danger300: "#e55757",
    danger100A: "rgba(255, 97, 97, 0.09)",
    danger200A: "rgba(255, 97, 97, 0.05)",

    success100: "#8ae0b7",
    success200: "#59d499",
    success300: "#50be89",
    success100A: "rgba(89, 212, 153, 0.09)",
    success200A: "rgba(89, 212, 153, 0.05)",
  },
});
