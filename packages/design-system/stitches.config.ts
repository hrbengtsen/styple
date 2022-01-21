import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";

// Default (light) theme
const defaultTheme = {
  colors: {
    // Element based colors
    text100: "#131314",
    text200: "#3B3B3E",
    text300: "#6c6c6f",

    bg100: "#FFFFFF",
    bg200: "#FBFCFC",
    bg300: "#f1f1f1",
    bg100A: "#FFFFFFBF", // Alpha (transparent) colors, BF = ~75% alpha (#rrggbbaa)
    bg200A: "#FBFCFCBF",
    bg300A: "#f1f1f1BF",
    bg100E: "#FFFFFF", // Elavation colors (mostly used for panels on dark modes)
    bg200E: "#FBFCFC",
    bg300E: "#f1f1f1",

    button100: "#c9cacd",
    button200: "#E9EAEC",
    button300: "#E0E1E4",
    button100A: "#c9cacdBF",
    button200A: "#E9EAECBF",
    button300A: "#E0E1E4BF",

    // Semantic colors
    primary100: "$text100",
    primary200: "$text200",
    primary300: "$text300",
    primary100A: "rgba(194, 199, 202, 0.12)",
    primary200A: "rgba(194, 199, 202, 0.16)",

    accent100: "#3c87b2",
    accent200: "#347399",
    accent300: "#2b607f",
    accent100A: "rgba(52, 115, 153, 0.06)",
    accent200A: "rgba(52, 115, 153, 0.10)",

    danger100: "#b24343",
    danger200: "#993a3a",
    danger300: "#7f3030",
    danger100A: "rgba(153, 58, 58, 0.06)",
    danger200A: "rgba(153, 58, 58, 0.10)",

    success100: "#3e946b",
    success200: "#357f5b",
    success300: "#2c6a4c",
    success100A: "rgba(62, 148, 107, 0.06)",
    success200A: "rgba(62, 148, 107, 0.10)",
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
    "2xl": "32px",
    "3xl": "48px",
    "4xl": "64px",
    max: "128px",
  },
  sizes: {
    xs: "8px",
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "48px",
    "2xl": "64px",
    "3xl": "128px",
    "4xl": "576px",
    max: "1200px",
  },
  fontSizes: {
    xs: "14px",
    sm: "16px",
    md: "20px",
    lg: "24px",
    xl: "32px",
    "2xl": "40px",
    "3xl": "48px",
    "4xl": "64px",
    max: "72px",
  },
  radii: {
    xs: "2px",
    sm: "4px",
    md: "6px",
    lg: "8px",
    xl: "12px",
    "2xl": "16px",
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
    sm:
      "0px 2px 8px -2px rgba(22, 23, 24, 0.35), 0px 2px 5px -3px rgba(22, 23, 24, 0.2)",
    md:
      "0px 5px 16px -5px rgba(22, 23, 24, 0.35), 0px 5px 10px -7px rgba(22, 23, 24, 0.2)",
    lg:
      "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
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
};

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
  theme: defaultTheme,
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
    maxSize: (value: Stitches.PropertyValue<"maxWidth">) => ({
      maxWidth: value,
      maxHeight: value,
    }),

    // Shorthand util for backgroundColor
    bg: (value: Stitches.PropertyValue<"backgroundColor">) => ({
      backgroundColor: value,
    }),
  },
});

export type { VariantProps } from "@stitches/react";
export type CSS = Stitches.CSS<typeof config>;

// Default global styles (based on https://www.joshwcomeau.com/css/custom-css-reset/)
export const globalStyles = globalCss({
  "*, *::before, *::after": {
    boxSizing: "border-box",
  },
  "*": {
    m: 0,
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
    fontFamily: "$inter",
    lineHeight: "$normal",
    letterSpacing: "$normal",
    bg: "$bg200", // should be removed?
    "-webkit-font-smoothing": "antialiased",
  },
  "html, body, #__next": {
    height: "100%",
    "-webkit-tap-highlight-color": "transparent",
  },
  "input, button, textarea, select": {
    font: "inherit",
  },
  a: {
    color: "inherit",
    textDecoration: "none",
  },
  "img, picture, video, canvas": {
    display: "block",
    maxWidth: "100%",
  },
  "p, h1, h2, h3, h4, h5, h6": {
    overflowWrap: "break-word",
  },
  "#root, #__next": {
    isolation: "isolate",
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
    text100: "#F4F4F6",
    text200: "#C2C7CA",
    text300: "#858589",

    bg100: "#000000",
    bg200: "#131314",
    bg300: "#1E1E1F",
    bg100A: "#000000BF",
    bg200A: "#131314BF",
    bg300A: "#1E1E1FBF",
    bg100E: "#242425",
    bg200E: "#242425",
    bg300E: "#242425",

    button100: "#545455",
    button200: "#3f3f40",
    button300: "#353536",
    button100A: "#545455",
    button200A: "#3f3f40",
    button300A: "#353536",

    // Semantic colors
    primary100: "#FFFFFF",
    primary200: "$text100",
    primary300: "$text200",
    primary100A: "rgba(194, 199, 202, 0.12)",
    primary200A: "rgba(194, 199, 202, 0.16)",

    accent100: "#89d3ff",
    accent200: "#57c1ff",
    accent300: "#4eade5",
    accent100A: "rgba(87, 193, 255, 0.12)",
    accent200A: "rgba(87, 193, 255, 0.16)",

    danger100: "#ff9090",
    danger200: "#ff6161",
    danger300: "#e55757",
    danger100A: "rgba(255, 97, 97, 0.12)",
    danger200A: "rgba(255, 97, 97, 0.16)",

    success100: "#8ae0b7",
    success200: "#59d499",
    success300: "#50be89",
    success100A: "rgba(89, 212, 153, 0.12)",
    success200A: "rgba(89, 212, 153, 0.16)",
  },
});
