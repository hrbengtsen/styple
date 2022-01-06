import { cozyTheme, styled } from "../stitches.config";

export const Button = styled("button", {
  // Reset
  display: "inline-block",
  lineHeight: "$normal",
  textAlign: "center",
  whiteSpace: "nowrap",
  verticalAlign: "middle",
  border: "none",
  cursor: "pointer",

  transition: "$color, $bgColor, $transform, $border, $boxShadow",

  "&:disabled": {
    opacity: "0.6",
    pointerEvents: "none",
  },

  variants: {
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
          bg: "$bg300",
        },
        "&:focus": {
          bg: "$bg300",
        },
      },
    },
    variant: {
      primary: {
        bg: "$primary200",
        color: "$bg200",

        // Fix primary color text being inaccessible in cozy
        [`.${cozyTheme} &`]: {
          color: "$text200",
        },

        "&:hover": {
          bg: "$primary300",
        },
        "&:focus": {
          bg: "$primary300",
          boxShadow: "0 0 0 0.1rem $colors$primary100",
        },
      },
      accent: {
        bg: "$accent200",
        color: "$bg200",
        "&:hover": {
          bg: "$accent300",
        },
        "&:focus": {
          bg: "$accent300",
          boxShadow: "0 0 0 0.1rem $colors$accent100",
        },
      },
      danger: {
        bg: "$danger200",
        color: "$bg200",
        "&:hover": {
          bg: "$danger300",
        },
        "&:focus": {
          bg: "$danger300",
          boxShadow: "0 0 0 0.1rem $colors$danger100",
        },
      },
      success: {
        bg: "$success200",
        color: "$bg200",
        "&:hover": {
          bg: "$success300",
        },
        "&:focus": {
          bg: "$success300",
          boxShadow: "0 0 0 0.1rem $colors$success100",
        },
      },
      normal: {
        bg: "$button200",
        color: "$text200",
        "&:hover": {
          bg: "$button300",
        },
        "&:focus": {
          bg: "$button300",
          boxShadow: "0 0 0 0.1rem $colors$button100",
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
        bg: "$primary100A",
        color: "$primary200",
        "&:hover": {
          bg: "$primary200A",
        },
        "&:focus": {
          bg: "$primary200A",
        },
      },
    },
    {
      variant: "accent",
      transparent: "true",
      css: {
        bg: "$accent100A",
        color: "$accent200",
        "&:hover": {
          bg: "$accent200A",
        },
        "&:focus": {
          bg: "$accent200A",
        },
      },
    },
    {
      variant: "danger",
      transparent: "true",
      css: {
        bg: "$danger100A",
        color: "$danger200",
        "&:hover": {
          bg: "$danger200A",
        },
        "&:focus": {
          bg: "$danger200A",
        },
      },
    },
    {
      variant: "success",
      transparent: "true",
      css: {
        bg: "$success100A",
        color: "$success200",
        "&:hover": {
          bg: "$success200A",
        },
        "&:focus": {
          bg: "$success200A",
        },
      },
    },
    // Variant + outline compounds
    {
      variant: "primary",
      outline: "true",
      css: {
        bg: "transparent",
        borderColor: "$primary100",
        color: "$primary200",
        "&:hover": {
          color: "$primary100",

          // Fix primary color text being inaccessible in cozy
          [`.${cozyTheme} &`]: {
            color: "$text100",
          },

          bg: "transparent",
        },
        "&:focus": {
          color: "$primary100",

          // Fix primary color text being inaccessible in cozy
          [`.${cozyTheme} &`]: {
            color: "$text100",
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
        borderColor: "$accent100",
        color: "$accent200",
        "&:hover": {
          color: "$accent100",
          bg: "transparent",
        },
        "&:focus": {
          color: "$accent100",
          bg: "transparent",
        },
      },
    },
    {
      variant: "danger",
      outline: "true",
      css: {
        bg: "transparent",
        borderColor: "$danger100",
        color: "$danger200",
        "&:hover": {
          color: "$danger100",
          bg: "transparent",
        },
        "&:focus": {
          color: "$danger100",
          bg: "transparent",
        },
      },
    },
    {
      variant: "success",
      outline: "true",
      css: {
        bg: "transparent",
        borderColor: "$success100",
        color: "$success200",
        "&:hover": {
          color: "$success100",
          bg: "transparent",
        },
        "&:focus": {
          color: "$success100",
          bg: "transparent",
        },
      },
    },
    {
      variant: "normal",
      outline: "true",
      css: {
        bg: "transparent",
        borderColor: "$button100",
        color: "$text200",
        "&:hover": {
          color: "$text100",
          bg: "transparent",
        },
        "&:focus": {
          color: "$text100",
          bg: "transparent",
        },
      },
    },
    // Variant + ghost compounds
    {
      variant: "primary",
      ghost: "true",
      css: {
        color: "$primary200",
        bg: "transparent",
        "&:hover": {
          color: "$primary100",
          bg: "transparent",

          // Fix primary color text being inaccessible in cozy
          [`.${cozyTheme} &`]: {
            color: "$text100",
          },
        },
        "&:focus": {
          color: "$primary100",
          bg: "transparent",

          // Fix primary color text being inaccessible in cozy
          [`.${cozyTheme} &`]: {
            color: "$text100",
          },
          boxShadow: "none",
        },
      },
    },
    {
      variant: "accent",
      ghost: "true",
      css: {
        color: "$accent200",
        bg: "transparent",
        "&:hover": {
          color: "$accent100",
          bg: "transparent",
        },
        "&:focus": {
          color: "$accent100",
          bg: "transparent",
          boxShadow: "none",
        },
      },
    },
    {
      variant: "danger",
      ghost: "true",
      css: {
        color: "$danger200",
        bg: "transparent",
        "&:hover": {
          color: "$danger100",
          bg: "transparent",
        },
        "&:focus": {
          color: "$danger100",
          bg: "transparent",
          boxShadow: "none",
        },
      },
    },
    {
      variant: "success",
      ghost: "true",
      css: {
        color: "$success200",
        bg: "transparent",
        "&:hover": {
          color: "$success100",
          bg: "transparent",
        },
        "&:focus": {
          color: "$success100",
          bg: "transparent",
          boxShadow: "none",
        },
      },
    },
    {
      variant: "normal",
      ghost: "true",
      css: {
        color: "$text200",
        bg: "transparent",
        "&:hover": {
          color: "$text100",
          bg: "transparent",
        },
        "&:focus": {
          color: "$text100",
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
  },
});
