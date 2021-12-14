import { cozyTheme, styled } from "../stitches.config";

export const NavItem = styled("a", {
  // Reset
  display: "block",
  border: "0",
  cursor: "pointer",
  textDecoration: "none",

  transition: "$color, $bgColor, $transform, $border, $boxShadow",

  "&:disabled": {
    opacity: "0.7",
    pointerEvents: "none",
  },

  variants: {
    active: {
      bold: {
        "&.active": {
          fontWeight: "$bold",
        },
      },
      color: {
        "&.active": {
          color: "$textLight",
        },
      },
      both: {
        "&.active": {
          fontWeight: "$bold",
          color: "$textLight",
        },
      },
    },
    size: {
      sm: {
        py: "$xs",
        px: "$sm",
        borderRadius: "$lg",
        fontSize: "$sm",
      },
      md: {
        py: "$sm",
        px: "$md",
        borderRadius: "$xl",
        fontSize: "$sm",
      },
      lg: {
        py: "$sm",
        px: "$lg",
        borderRadius: "$xxl",
        fontSize: "$md",
      },
      circle: {
        p: "$sm",
        width: "40px",
        height: "40px",
        borderRadius: "$round",
      },
    },
    move: {
      true: {
        "&:hover": {
          transform: "translateY(-1px)",
        },
        "&:active": {
          transform: "translateY(0px)",
        },
        willChange: "transform",
      },
    },
    tactile: {
      true: {
        "&:hover": {
          transform: "scale(1.05)",
        },
        "&:active": {
          transform: "scale(.9)",
        },
        willChange: "transform",
      },
    },
    transparent: {
      true: {},
    },
    pill: {
      true: {},
    },
    outline: {
      // Border (outline) color is in compound variants
      true: {
        bg: "transparent",
        "&:hover": {
          bg: "transparent",
        },
        "&:focus": {
          bg: "transparent",
        },
        borderStyle: "solid",
        borderWidth: "$md",
      },
    },
    ghost: {
      true: {
        bg: "transparent",
        "&:hover": {
          bg: "transparent",
        },
        "&:focus": {
          bg: "transparent",
        },
      },
    },
    highlight: {
      true: {
        bg: "transparent",
        "&:hover": {
          bg: "$bgDark",
        },
        "&:focus": {
          bg: "$bgDark",
        },
      },
    },
    variant: {
      primary: {
        bg: "$primaryNormal",
        color: "$bgNormal",

        // Fix primary color text being inaccessible in cozy
        [`.${cozyTheme} &`]: {
          color: "$textNormal",
        },

        "&:hover": {
          bg: "$primaryDark",
        },
        "&:focus": {
          bg: "$primaryDark",
          boxShadow: "0 0 0 0.1rem $colors$primaryLight",
        },
      },
      accent: {
        bg: "$accentNormal",
        color: "$bgNormal",
        "&:hover": {
          bg: "$accentDark",
        },
        "&:focus": {
          bg: "$accentDark",
          boxShadow: "0 0 0 0.1rem $colors$accentLight",
        },
      },
      danger: {
        bg: "$dangerNormal",
        color: "$bgNormal",
        "&:hover": {
          bg: "$dangerDark",
        },
        "&:focus": {
          bg: "$dangerDark",
          boxShadow: "0 0 0 0.1rem $colors$dangerLight",
        },
      },
      success: {
        bg: "$successNormal",
        color: "$bgNormal",
        "&:hover": {
          bg: "$successDark",
        },
        "&:focus": {
          bg: "$successDark",
          boxShadow: "0 0 0 0.1rem $colors$successLight",
        },
      },
      normal: {
        bg: "$buttonNormal",
        color: "$textNormal",
        "&:hover": {
          bg: "$buttonDark",
        },
        "&:focus": {
          bg: "$buttonDark",
          boxShadow: "0 0 0 0.1rem $colors$buttonLight",
        },
      },
    },
  },
  compoundVariants: [
    // Variant + transparent compounds
    {
      variant: "primary",
      transparent: "true",
      css: {
        bg: "$primaryNormalA",
        color: "$primaryNormal",
        "&:hover": {
          bg: "$primaryLightA",
        },
        "&:focus": {
          bg: "$primaryLightA",
        },
      },
    },
    {
      variant: "accent",
      transparent: "true",
      css: {
        bg: "$accentNormalA",
        color: "$accentNormal",
        "&:hover": {
          bg: "$accentLightA",
        },
        "&:focus": {
          bg: "$accentLightA",
        },
      },
    },
    {
      variant: "danger",
      transparent: "true",
      css: {
        bg: "$dangerNormalA",
        color: "$dangerNormal",
        "&:hover": {
          bg: "$dangerLightA",
        },
        "&:focus": {
          bg: "$dangerLightA",
        },
      },
    },
    {
      variant: "success",
      transparent: "true",
      css: {
        bg: "$successNormalA",
        color: "$successNormal",
        "&:hover": {
          bg: "$successLightA",
        },
        "&:focus": {
          bg: "$successLightA",
        },
      },
    },
    // Variant + outline compounds
    {
      variant: "primary",
      outline: "true",
      css: {
        bg: "transparent",
        borderColor: "$primaryLight",
        color: "$primaryNormal",
        "&:hover": {
          color: "$primaryLight",

          // Fix primary color text being inaccessible in cozy
          [`.${cozyTheme} &`]: {
            color: "$textLight",
          },

          bg: "transparent",
        },
        "&:focus": {
          color: "$primaryLight",

          // Fix primary color text being inaccessible in cozy
          [`.${cozyTheme} &`]: {
            color: "$textLight",
          },

          bg: "transparent",
        },
      },
    },
    {
      variant: "accent",
      outline: "true",
      css: {
        bg: "transparent",
        borderColor: "$accentLight",
        color: "$accentNormal",
        "&:hover": {
          color: "$accentLight",
          bg: "transparent",
        },
        "&:focus": {
          color: "$accentLight",
          bg: "transparent",
        },
      },
    },
    {
      variant: "danger",
      outline: "true",
      css: {
        bg: "transparent",
        borderColor: "$dangerLight",
        color: "$dangerNormal",
        "&:hover": {
          color: "$dangerLight",
          bg: "transparent",
        },
        "&:focus": {
          color: "$dangerLight",
          bg: "transparent",
        },
      },
    },
    {
      variant: "success",
      outline: "true",
      css: {
        bg: "transparent",
        borderColor: "$successLight",
        color: "$successNormal",
        "&:hover": {
          color: "$successLight",
          bg: "transparent",
        },
        "&:focus": {
          color: "$successLight",
          bg: "transparent",
        },
      },
    },
    {
      variant: "normal",
      outline: "true",
      css: {
        bg: "transparent",
        borderColor: "$buttonLight",
        color: "$textNormal",
        "&:hover": {
          color: "$textLight",
          bg: "transparent",
        },
        "&:focus": {
          color: "$textLight",
          bg: "transparent",
        },
      },
    },
    // Variant + ghost compounds
    {
      variant: "primary",
      ghost: "true",
      css: {
        color: "$primaryNormal",
        bg: "transparent",
        "&:hover": {
          color: "$primaryLight",
          bg: "transparent",

          // Fix primary color text being inaccessible in cozy
          [`.${cozyTheme} &`]: {
            color: "$textLight",
          },
        },
        "&:focus": {
          color: "$primaryLight",
          bg: "transparent",

          // Fix primary color text being inaccessible in cozy
          [`.${cozyTheme} &`]: {
            color: "$textLight",
          },
          boxShadow: "none",
        },
      },
    },
    {
      variant: "accent",
      ghost: "true",
      css: {
        color: "$accentNormal",
        bg: "transparent",
        "&:hover": {
          color: "$accentLight",
          bg: "transparent",
        },
        "&:focus": {
          color: "$accentLight",
          bg: "transparent",
          boxShadow: "none",
        },
      },
    },
    {
      variant: "danger",
      ghost: "true",
      css: {
        color: "$dangerNormal",
        bg: "transparent",
        "&:hover": {
          color: "$dangerLight",
          bg: "transparent",
        },
        "&:focus": {
          color: "$dangerLight",
          bg: "transparent",
          boxShadow: "none",
        },
      },
    },
    {
      variant: "success",
      ghost: "true",
      css: {
        color: "$successNormal",
        bg: "transparent",
        "&:hover": {
          color: "$successLight",
          bg: "transparent",
        },
        "&:focus": {
          color: "$successLight",
          bg: "transparent",
          boxShadow: "none",
        },
      },
    },
    {
      variant: "normal",
      ghost: "true",
      css: {
        color: "$textNormal",
        bg: "transparent",
        "&:hover": {
          color: "$textLight",
          bg: "transparent",
        },
        "&:focus": {
          color: "$textLight",
          bg: "transparent",
          boxShadow: "none",
        },
      },
    },
    // Size + pill compounds
    {
      size: "sm",
      pill: "true",
      css: {
        borderRadius: "$pill",
        px: "$md",
      },
    },
    {
      size: "md",
      pill: "true",
      css: {
        borderRadius: "$pill",
        px: "$lg",
      },
    },
    {
      size: "lg",
      pill: "true",
      css: {
        borderRadius: "$pill",
        px: "$xl",
      },
    },
  ],
  defaultVariants: {
    variant: "normal",
    size: "md",
    active: "color",
  },
});
