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
        bg: "$primaryNormalA",
        color: "$primaryNormal",

        // Fix primary color text being inaccessible in cozy
        [`.${cozyTheme} &`]: {
          color: "$textNormal",
        },

        "&:focus": {
          bg: "$primaryLightA",
          boxShadow: "0 0 0 0.1rem $colors$primaryLight",
        },
      },
      accent: {
        bg: "$accentNormalA",
        color: "$accentNormal",
        "&:focus": {
          bg: "$accentLightA",
          boxShadow: "0 0 0 0.1rem $colors$accentLight",
        },
      },
      danger: {
        bg: "$dangerNormalA",
        color: "$dangerNormal",
        "&:focus": {
          bg: "$dangerLightA",
          boxShadow: "0 0 0 0.1rem $colors$dangerLight",
        },
      },
      success: {
        bg: "$successNormalA",
        color: "$successNormal",
        "&:focus": {
          bg: "$successLightA",
          boxShadow: "0 0 0 0.1rem $colors$successLight",
        },
      },
      normal: {
        bg: "$buttonNormal",
        color: "$textNormal",
        "&:focus": {
          bg: "$buttonDark",
          boxShadow: "0 0 0 0.1rem $colors$buttonLight",
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
          bg: "$primaryDark",
        },
      },
    },
    {
      interactive: true,
      variant: "accent",
      css: {
        "&:hover": {
          bg: "$accentDark",
        },
      },
    },
    {
      interactive: true,
      variant: "danger",
      css: {
        "&:hover": {
          bg: "$dangerDark",
        },
      },
    },
    {
      interactive: true,
      variant: "success",
      css: {
        "&:hover": {
          bg: "$successDark",
        },
      },
    },
    {
      interactive: true,
      variant: "normal",
      css: {
        "&:hover": {
          bg: "$buttonDark",
        },
      },
    },
  ],
  defaultVariants: {
    size: "sm",
    variant: "normal",
  },
});
