import React from "react";
import { styled, CSS, VariantProps } from "../stitches.config";
import { ChevronDown } from "lucide-react";

const SelectWrapper = styled("div", {
  position: "relative",
  backgroundColor: "$button200",
  color: "$text200",

  transition: "$boxShadow",

  "&:focus-within": {
    boxShadow: "0 0 0 0.1rem $colors$button100",
  },

  variants: {
    size: {
      sm: {
        height: "$lg",
        borderRadius: "$lg",
      },
      lg: {
        height: "40px",
        borderRadius: "$xl",
      },
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

const StyledSelect = styled("select", {
  appearance: "none",
  bg: "transparent",
  border: "none",
  borderRadius: "inherit",
  color: "inherit",
  outline: "none",
  width: "100%",
  height: "100%",
  lineHeight: "1",
  pl: "$sm",
  pr: "$xxl",
  py: "$sm",
});

const StyledChevronDown = styled(ChevronDown, {
  position: "absolute",
  pointerEvents: "none",
  display: "inline",

  variants: {
    size: {
      sm: {
        top: "4px",
        right: "4px",
      },
      lg: {
        top: "7px",
        right: "4px",
      },
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

type SelectVariants = VariantProps<typeof SelectWrapper>;
type SelectProps = React.ComponentProps<typeof StyledSelect> &
  SelectVariants & { css?: CSS };

export const Select = React.forwardRef<
  React.ElementRef<typeof StyledSelect>,
  SelectProps
>(({ size, css, ...props }, forwardedRef) => (
  <SelectWrapper css={css} size={size}>
    <StyledSelect ref={forwardedRef} {...props} />
    <StyledChevronDown size={size} />
  </SelectWrapper>
));
