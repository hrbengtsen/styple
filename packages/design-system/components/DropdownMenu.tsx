import React from "react";
import { styled, css, keyframes } from "../stitches.config";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { panelStyles } from "./Panel";
import { Switch } from "./Switch";

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuGroup = styled(DropdownMenuPrimitive.Group, {});

const slideDown = keyframes({
  "0%": { opacity: 0, transform: "translateY(-10px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideUp = keyframes({
  "0%": { opacity: 0, transform: "translateY(10px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const baseItemCss = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  userSelect: "none",
  whiteSpace: "nowrap",
  height: "$lg",
  px: "$sm",
  borderRadius: "$lg",
  transition: "background-color 0.15s ease-in-out",
});

export const DropdownMenuContent = styled(
  DropdownMenuPrimitive.Content,
  panelStyles,
  {
    animationDuration: "0.2s",
    animationTimingFunction: "ease-out",
    '&[data-side="top"]': { animationName: slideUp },
    '&[data-side="bottom"]': { animationName: slideDown },
    minWidth: "200px",
  }
);
export const DropdownMenuLabel = styled(
  DropdownMenuPrimitive.Label,
  baseItemCss,
  {
    color: "$text200",
    fontWeight: "$semibold",
  }
);
export const DropdownMenuItem = styled(
  DropdownMenuPrimitive.Item,
  baseItemCss,
  {
    position: "relative",
    color: "$text200",
    "&[data-disabled]": { opacity: "0.5" },

    "&:focus": {
      outline: "none",
      bg: "$bg300",
    },
  }
);
export const DropdownMenuSeparator = styled(DropdownMenuPrimitive.Separator, {
  height: 1,
  my: "$sm",
  bg: "$text200",
  opacity: ".3",
});

const StyledDropdownMenuCheckboxItem = styled(
  DropdownMenuPrimitive.CheckboxItem,
  baseItemCss,
  {
    position: "relative",
    color: "$text200",
    "&[data-disabled]": { opacity: "0.6" },

    "&:focus": {
      outline: "none",
      bg: "$bg300",
    },
  }
);

type DropdownMenuCheckboxItemProps = Omit<
  React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>,
  "onCheckedChange"
> & {
  onChange?: (bool: boolean) => void;
};

export const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof StyledDropdownMenuCheckboxItem>,
  DropdownMenuCheckboxItemProps
>(({ children, onChange, ...props }, forwardedRef) => {
  const [checked, setChecked] = React.useState<boolean>(false);

  return (
    <StyledDropdownMenuCheckboxItem
      onSelect={(e) => e.preventDefault()}
      css={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      {...props}
      checked={checked}
      onCheckedChange={(bool) => {
        setChecked(bool);
        if (onChange) {
          onChange(bool);
        }
      }}
      ref={forwardedRef}
    >
      {children}
      <Switch checked={checked} />
    </StyledDropdownMenuCheckboxItem>
  );
});
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";
