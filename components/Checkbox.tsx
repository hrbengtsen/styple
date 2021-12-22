import React from "react";
import { styled, CSS } from "../stitches.config";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  all: "unset",
  boxSizing: "border-box",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },

  width: "20px",
  height: "20px",
  borderRadius: "$lg",
  bg: "$bg300",
  "&:focus": {
    outline: "none",
    boxShadow: "0 0 0 0.1rem $colors$button100",
  },
  transition: "box-shadow 75ms ease-in-out",
});

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "$text200",
});

type CheckboxProps = React.ComponentProps<typeof StyledCheckbox> & {
  css?: CSS;
};

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof StyledCheckbox>,
  CheckboxProps
>((props, forwardedRef) => {
  return (
    <StyledCheckbox {...props} ref={forwardedRef}>
      <StyledIndicator>
        <Check size="16" />
      </StyledIndicator>
    </StyledCheckbox>
  );
});
