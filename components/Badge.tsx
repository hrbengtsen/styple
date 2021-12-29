import { cozyTheme, styled } from "../stitches.config";

export const Badge = styled("span", {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "$pill",

  // Reset
  lineHeight: "$normal",
  textAlign: "center",
  whiteSpace: "nowrap",
  verticalAlign: "middle",
  border: "none",
  userSelect: "none",

  transition: "$color, $bgColor, $boxShadow",

  "&:disabled": {
    opacity: "0.5",
    pointerEvents: "none",
  },

  variants: {
    interactive: {
      true: {},
    },
    size: {
      sm: {
        fontSize: "$xs",
        px: "$sm",
        height: "$md",
      },
      lg: {
        fontSize: "$sm",
        px: "$md",
        height: "$lg",
      },
    },
    variant: {
      primary: {
        bg: "$primary200A",
        color: "$primary200",

        // Fix primary color text being inaccessible in cozy
        [`.${cozyTheme} &`]: {
          color: "$text200",
        },

        "&:focus": {
          bg: "$primary100A",
          boxShadow: "0 0 0 0.1rem $colors$primary100",
        },
      },
      accent: {
        bg: "$accent200A",
        color: "$accent200",
        "&:focus": {
          bg: "$accent100A",
          boxShadow: "0 0 0 0.1rem $colors$accent100",
        },
      },
      danger: {
        bg: "$danger200A",
        color: "$danger200",
        "&:focus": {
          bg: "$danger100A",
          boxShadow: "0 0 0 0.1rem $colors$danger100",
        },
      },
      success: {
        bg: "$success200A",
        color: "$success200",
        "&:focus": {
          bg: "$success100A",
          boxShadow: "0 0 0 0.1rem $colors$success100",
        },
      },
      normal: {
        bg: "$button200",
        color: "$text200",
        "&:focus": {
          bg: "$button300",
          boxShadow: "0 0 0 0.1rem $colors$button100",
        },
      },
    },
  },
  compoundVariants: [
    {
      interactive: true,
      variant: "primary",
      css: {
        "&:hover": {
          bg: "$primary300",
        },
      },
    },
    {
      interactive: true,
      variant: "accent",
      css: {
        "&:hover": {
          bg: "$accent300",
        },
      },
    },
    {
      interactive: true,
      variant: "danger",
      css: {
        "&:hover": {
          bg: "$danger300",
        },
      },
    },
    {
      interactive: true,
      variant: "success",
      css: {
        "&:hover": {
          bg: "$success300",
        },
      },
    },
    {
      interactive: true,
      variant: "normal",
      css: {
        "&:hover": {
          bg: "$button300",
        },
      },
    },
  ],
  defaultVariants: {
    size: "sm",
    variant: "normal",
  },
});
