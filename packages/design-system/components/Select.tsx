import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown, ChevronUp, Check } from "lucide-react";
import { styled, css } from "../stitches.config";
import { panelStyles } from "./Panel";
import { VariantProps } from "@stitches/react";

const StyledSelect = styled(SelectPrimitive.Trigger, {
  all: "unset",

  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",

  transition: "$color, $bgColor, $transform, $border, $boxShadow",

  fontSize: "$sm",
  bg: "$button200",
  color: "$text200",
  "&:hover": { bg: "$button300" },
  "&:focus": { bg: "$button300", boxShadow: "0 0 0 0.1rem $colors$button100" },
  lineHeight: 1,
  gap: "$xs",

  variants: {
    size: {
      sm: {
        py: "$xs",
        px: "$sm",
        height: "$md",
        borderRadius: "$lg",
      },
      md: {
        py: "$xs",
        px: "$md",
        height: "$lg",
        borderRadius: "$xl",
      },
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

const StyledContent = styled(SelectPrimitive.Content, panelStyles, {
  overflow: "hidden",
});

const scrollButtonStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "$xs",
  bg: "$bg200E",
  color: "$text200",
  cursor: "default",
};

const StyledScrollUpButton = styled(
  SelectPrimitive.ScrollUpButton,
  scrollButtonStyles
);
const StyledScrollDownButton = styled(
  SelectPrimitive.ScrollDownButton,
  scrollButtonStyles
);

type SelectProps = React.ComponentProps<typeof SelectPrimitive.Root> &
  VariantProps<typeof StyledSelect>;

export const Select = React.forwardRef<
  React.ElementRef<typeof StyledSelect>,
  SelectProps
>(({ children, size, ...props }, forwardedRef) => {
  return (
    <SelectPrimitive.Root {...props}>
      <StyledSelect size={size} ref={forwardedRef}>
        <SelectPrimitive.Value />
        <SelectPrimitive.Icon>
          <ChevronDown size="20" style={{ verticalAlign: "middle" }} />
        </SelectPrimitive.Icon>
      </StyledSelect>
      <StyledContent>
        <StyledScrollUpButton>
          <ChevronUp size="20" />
        </StyledScrollUpButton>
        <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
        <StyledScrollDownButton>
          <ChevronDown size="20" />
        </StyledScrollDownButton>
      </StyledContent>
    </SelectPrimitive.Root>
  );
});
Select.displayName = "Select";

type SelectItemProps = React.ComponentProps<typeof SelectPrimitive.Item>;

const baseItemCss = css({
  all: "unset",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  whiteSpace: "nowrap",
  height: "$lg",
  px: "$xl",
  borderRadius: "$lg",
  color: "$text200",
  userSelect: "none",
  fontSize: "$sm",
});

const StyledSelectItem = styled(SelectPrimitive.Item, baseItemCss, {
  transition: "background-color 0.15s ease-in-out",
  position: "relative",

  "&[data-disabled]": { opacity: "0.5" },

  "&:focus": {
    outline: "none",
    bg: "$bg300",
  },
});

const SelectItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  position: "absolute",
  left: 5,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

export const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  SelectItemProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <StyledSelectItem {...props} ref={forwardedRef}>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectItemIndicator>
        <Check size="16" />
      </SelectItemIndicator>
    </StyledSelectItem>
  );
});
SelectItem.displayName = "SelectItem";

export const SelectLabel = styled(SelectPrimitive.Label, baseItemCss, {
  fontWeight: "$semibold",
});

export const SelectSeparator = styled(SelectPrimitive.Separator, {
  height: 1,
  my: "$sm",
  bg: "$text200",
  opacity: ".3",
});

export const SelectGroup = SelectPrimitive.Group;
