import { createTheme } from "../packages/design-system";

export const cozyTheme = createTheme("cozy-theme", {
  colors: {
    // Element based colors
    text100: "#4f4230",
    text200: "#63533c",
    text300: "#756957",

    bg100: "#FEFCEE",
    bg200: "#FDF9E2",
    bg300: "#F5EDD6",
    bg100A: "#FEFCEEBF",
    bg200A: "#FDF9E2BF",
    bg300A: "#F5EDD6BF",
    bg100E: "#FEFCEE",
    bg200E: "#FDF9E2",
    bg300E: "#F5EDD6",

    button100: "#9d9da0",
    button200: "#FCEDA2",
    button300: "#F8E99F",
    button100A: "#858589BF",
    button200A: "#FCEDA2BF",
    button300A: "#F8E99FBF",

    // Semantic colors
    primary100: "#ac7539",
    primary200: "#976632",
    primary300: "#81582b",
    primary100A: "rgba(253, 213, 35, 0.12)",
    primary200A: "rgba(253, 213, 35, 0.16)",

    accent100: "#308e85",
    accent200: "#2b7e76",
    accent300: "#256e67",
    accent100A: "rgba(43, 126, 118, 0.05)",
    accent200A: "rgba(43, 126, 118, 0.09)",

    danger100: "#d95444",
    danger200: "#c14b3c",
    danger300: "#a94135",
    danger100A: "rgba(193, 75, 60, 0.04)",
    danger200A: "rgba(193, 75, 60, 0.08)",

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
    text100: "#F4F4F6",
    text200: "#C2C7CA",
    text300: "#858589",

    bg100: "#080716",
    bg200: "#0b0a1e",
    bg300: "#1B1A2D",
    bg100A: "#080716BF",
    bg200A: "#0b0a1eBF",
    bg300A: "#1B1A2DBF",
    bg100E: "#212033",
    bg200E: "#212033",
    bg300E: "#212033",

    button100: "#4e4e5c",
    button200: "#383848",
    button300: "#2E2D3E",
    button100A: "#4e4e5cBF",
    button200A: "#383848BF",
    button300A: "#2E2D3EBF",

    // Semantic colors
    primary100: "#ec5d94",
    primary200: "#ea4c89",
    primary300: "#d2447b",
    primary100A: "rgba(234, 76, 137, 0.05)",
    primary200A: "rgba(234, 76, 137, 0.09)",

    accent100: "#5dbec5",
    accent200: "#4bb7bf",
    accent300: "#43a4ab",
    accent100A: "rgba(75, 183, 191, 0.05)",
    accent200A: "rgba(75, 183, 191, 0.09)",

    danger100: "#ff9090",
    danger200: "#ff6161",
    danger300: "#e55757",
    danger100A: "rgba(255, 97, 97, 0.05)",
    danger200A: "rgba(255, 97, 97, 0.09)",

    success100: "#8ae0b7",
    success200: "#59d499",
    success300: "#50be89",
    success100A: "rgba(89, 212, 153, 0.05)",
    success200A: "rgba(89, 212, 153, 0.09)",
  },
});
