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
    opacity: "0.6",
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
      md: {
        fontSize: "$sm",
        px: "$sm",
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
        "&:hover": {
          bg: "$successLightA",
        },
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
  defaultVariants: {
    size: "sm",
    variant: "normal",
  },
});
