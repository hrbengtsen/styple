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
  theme: {
    // improve light theme to make it less bland
    colors: {
      // Element based colors
      headingLight: "#131314",
      headingNormal: "#242426",
      headingDark: "#6c6c6f",

      textLight: "$headingLight",
      textNormal: "$headingNormal",
      textDark: "$headingDark",

      bgLight: "#FFFFFF",
      bgNormal: "#FBFCFC",
      bgDark: "#F5F6F6",

      buttonLight: "#c9cacd",
      buttonNormal: "#E0E1E4",
      buttonDark: "#e9eaec",

      // Semantic colors
      primaryLight: "$headingLight",
      primaryNormal: "$headingNormal",
      primaryDark: "$headingDark",
      primaryLightA: "rgba(194, 199, 202, 0.16)",
      primaryNormalA: "rgba(194, 199, 202, 0.12)",

      accentLight: "#3c87b2",
      accentNormal: "#347399",
      accentDark: "#2b607f",
      accentLightA: "rgba(52, 115, 153, 0.10)",
      accentNormalA: "rgba(52, 115, 153, 0.06)",

      dangerLight: "#b24343",
      dangerNormal: "#993a3a",
      dangerDark: "#7f3030",
      dangerLightA: "rgba(153, 58, 58, 0.10)",
      dangerNormalA: "rgba(153, 58, 58, 0.06)",

      successLight: "#3e946b",
      successNormal: "#357f5b",
      successDark: "#2c6a4c",
      successLightA: "rgba(62, 148, 107, 0.10)",
      successNormalA: "rgba(62, 148, 107, 0.06)",
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
      md: "32px",
      lg: "64px",
      xl: "128px",
      xxl: "256px",
      xxxl: "512px",
      xxxxl: "768px",
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
    },
  },
  media: {
    bp1: "(min-width: 576px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 992px)",
    bp4: "(min-width: 1200px)",
    motion: "(prefers-reduced-motion)",
    hover: "(any-hover: hover)",
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
    bg: "$bgNormal",
  },
  "html, body, #__next": {
    height: "100%",
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
    headingLight: "#F4F4F6",
    headingNormal: "#C2C7CA",
    headingDark: "#858589",

    textLight: "$headingLight",
    textNormal: "$headingNormal",
    textDark: "$headingDark",

    bgLight: "#1C1C1D",
    bgNormal: "#131314",
    bgDark: "#000000",

    buttonLight: "#545455",
    buttonNormal: "#3f3f40",
    buttonDark: "#2A2A2B",

    // Semantic colors
    primaryLight: "#FFFFFF",
    primaryNormal: "#F4F4F6",
    primaryDark: "#C2C7CA",
    primaryLightA: "rgba(194, 199, 202, 0.16)",
    primaryNormalA: "rgba(194, 199, 202, 0.12)",

    accentLight: "#89d3ff",
    accentNormal: "#57c1ff",
    accentDark: "#4eade5",
    accentLightA: "rgba(87, 193, 255, 0.16)",
    accentNormalA: "rgba(87, 193, 255, 0.12)",

    dangerLight: "#ff9090",
    dangerNormal: "#ff6161",
    dangerDark: "#e55757",
    dangerLightA: "rgba(255, 97, 97, 0.16)",
    dangerNormalA: "rgba(255, 97, 97, 0.12)",

    successLight: "#8ae0b7",
    successNormal: "#59d499",
    successDark: "#50be89",
    successLightA: "rgba(89, 212, 153, 0.16)",
    successNormalA: "rgba(89, 212, 153, 0.12)",
  },
});

export const cozyTheme = createTheme("cozy-theme", {
  colors: {
    // Element based colors
    headingLight: "#4f4230",
    headingNormal: "#63533c",
    headingDark: "#756957",

    textLight: "$headingLight",
    textNormal: "$headingNormal",
    textDark: "$headingDark",

    bgLight: "#FEFCEE",
    bgNormal: "#FDF9E2",
    bgDark: "#F5EDD6",

    buttonLight: "#858589",
    buttonNormal: "#FCEDA2",
    buttonDark: "#F3E49C",

    // Semantic colors
    primaryLight: "#FDDA3B",
    primaryNormal: "#FDD523",
    primaryDark: "#ffcc33",
    primaryLightA: "rgba(253, 213, 35, 0.16)",
    primaryNormalA: "rgba(253, 213, 35, 0.12)",

    accentLight: "#308e85",
    accentNormal: "#2b7e76",
    accentDark: "#256e67",
    accentLightA: "rgba(43, 126, 118, 0.09)",
    accentNormalA: "rgba(43, 126, 118, 0.05)",

    dangerLight: "#d95444",
    dangerNormal: "#c14b3c",
    dangerDark: "#a94135",
    dangerLightA: "rgba(193, 75, 60, 0.08)",
    dangerNormalA: "rgba(193, 75, 60, 0.04)",

    successLight: "$accentLight",
    successNormal: "$accentNormal",
    successDark: "$accentDark",
    successLightA: "$accentLightA",
    successNormalA: "$accentNormalA",
  },
});

export const deepTheme = createTheme("deep-theme", {
  colors: {
    // Element based colors
    headingLight: "#F4F4F6",
    headingNormal: "#C2C7CA",
    headingDark: "#858589",

    textLight: "$headingLight",
    textNormal: "$headingNormal",
    textDark: "$headingDark",

    bgLight: "#171629",
    bgNormal: "#0b0a1e",
    bgDark: "#060612",

    buttonLight: "#4e4e5c",
    buttonNormal: "#383848",
    buttonDark: "#232234",

    // Semantic colors
    primaryLight: "#ec5d94",
    primaryNormal: "#ea4c89",
    primaryDark: "#d2447b",
    primaryLightA: "rgba(234, 76, 137, 0.09)",
    primaryNormalA: "rgba(234, 76, 137, 0.05)",

    accentLight: "#5dbec5",
    accentNormal: "#4bb7bf",
    accentDark: "#43a4ab",
    accentLightA: "rgba(75, 183, 191, 0.09)",
    accentNormalA: "rgba(75, 183, 191, 0.05)",

    dangerLight: "#ff9090",
    dangerNormal: "#ff6161",
    dangerDark: "#e55757",
    dangerLightA: "rgba(255, 97, 97, 0.09)",
    dangerNormalA: "rgba(255, 97, 97, 0.05)",

    successLight: "#8ae0b7",
    successNormal: "#59d499",
    successDark: "#50be89",
    successLightA: "rgba(89, 212, 153, 0.09)",
    successNormalA: "rgba(89, 212, 153, 0.05)",
  },
});
