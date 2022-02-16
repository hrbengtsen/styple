import React from "react";
import { styled, CSS } from "../stitches.config";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

export const RadioGroup = styled(RadioGroupPrimitive.Root, {
  display: "flex",
});

const StyledRadio = styled(RadioGroupPrimitive.Item, {
  all: "unset",
  boxSizing: "border-box",

  width: "21px",
  height: "21px",
  borderRadius: "$round",
  bg: "$bg200",
  boxShadow: "inset 0 0 0 1px $colors$button100",
  "&:hover, &:focus": {
    outline: "none",
    boxShadow: "inset 0 0 0 0.1rem $colors$button100",
  },
  transition: "$boxShadow",
});

const StyledIndicator = styled(RadioGroupPrimitive.Indicator, {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&::after": {
    content: "",
    display: "block",
    size: "$xs",
    borderRadius: "$round",
    bg: "$text200",
  },
});

type RadioProps = React.ComponentProps<typeof StyledRadio> & {
  css?: CSS;
};

export const Radio = React.forwardRef<
  React.ElementRef<typeof StyledRadio>,
  RadioProps
>((props, forwardedRef) => {
  return (
    <StyledRadio {...props} ref={forwardedRef}>
      <StyledIndicator />
    </StyledRadio>
  );
});
Radio.displayName = "Radio";
