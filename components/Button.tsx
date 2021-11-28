import { styled } from "../stitches.config";

export const Button = styled("button", {
  // Reset
  display: "inline-block",
  lineHeight: "$normal",
  textAlign: "center",
  whiteSpace: "nowrap",
  verticalAlign: "middle",
  border: "0",
  cursor: "pointer",

  transition: "$color, $bgColor, $transform, $border, $boxShadow",

  "&:disabled": {
    opacity: "0.7",
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
    variant: {
      primary: {
        bg: "$primaryNormal",
        color: "$bgNormal",
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
    {
      variant: "primary",
      outline: "true",
      css: {
        bg: "transparent",
        borderColor: "$primaryLight",
        color: "$primaryNormal",
        "&:hover": {
          color: "$primaryLight",
          bg: "transparent",
        },
        "&:focus": {
          color: "$primaryLight",
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
