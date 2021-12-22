import React from "react";
import { styled, CSS, darkTheme, deepTheme } from "../stitches.config";
import * as SwitchPrimitive from "@radix-ui/react-switch";

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  position: "absolute",

  width: "$sm",
  height: "$sm",
  bg: "$bgLight",
  [`.${darkTheme} &, .${deepTheme} &`]: {
    bg: "$textNormal",
  },
  borderRadius: "$round",
  boxShadow: "rgba(0, 0, 0, 0.3) 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 1px 2px",
  transition: "transform 75ms linear, $bgColor",

  transform: "translateX(-7px)",
  willChange: "transform",

  '&[data-state="checked"]': {
    transform: "translateX(7px)",
    bg: "white",
    [`.${darkTheme} &, .${deepTheme} &`]: {
      bg: "$textLight",
    },
  },
});

const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: "unset",
  boxSizing: "border-box",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },

  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  bg: "$bgDark",
  borderRadius: "$pill",

  width: "34px",
  height: "19px",
  transition: "$bgColor, $boxShadow",

  "&:focus": {
    boxShadow: "0 0 0 0.1rem $colors$buttonLight",
  },
  '&[data-state="checked"]': {
    bg: "$successNormal",
    "&:focus": {
      boxShadow: "0 0 0 0.1rem $colors$successLight",
    },
  },
});

type SwitchProps = React.ComponentProps<typeof StyledSwitch> & {
  css?: CSS;
};

export const Switch = React.forwardRef<
  React.ElementRef<typeof StyledSwitch>,
  SwitchProps
>((props, forwardedRef) => {
  return (
    <StyledSwitch {...props} ref={forwardedRef}>
      <StyledThumb />
    </StyledSwitch>
  );
});
