import React from "react";
import { styled, darkTheme, deepTheme } from "../stitches.config";
import * as PopoverPrimitive from "@radix-ui/react-Popover";
import { Text } from "..";

const PopoverContent = styled(PopoverPrimitive.Content, {
  borderRadius: "$lg",
  bg: "$bg300",
  boxShadow: "$sm",
  p: "$sm",

  [`.${darkTheme} &, .${deepTheme} &`]: {
    "&::before": {
      content: "",
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundColor: "white",
      top: "0",
      left: "0",
      borderRadius: "inherit",

      opacity: "0.03",
      transition: "$opacity",
      pointerEvents: "none",
    },
  },
});

type PopoverProps = React.ComponentProps<typeof PopoverPrimitive.Root> &
  React.ComponentProps<typeof PopoverPrimitive.Content> & {
    children: React.ReactElement;
    content: React.ReactNode;
  };

export const Popover = ({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  ...props
}: PopoverProps) => (
  <PopoverPrimitive.Root
    open={open}
    defaultOpen={defaultOpen}
    onOpenChange={onOpenChange}
  >
    <PopoverPrimitive.Trigger asChild>{children}</PopoverPrimitive.Trigger>

    <PopoverContent side="bottom" align="center" sideOffset={5} {...props}>
      <Text
        size="xs"
        css={{
          textAlign: "center",
          lineHeight: "16px",
        }}
      >
        {content}
      </Text>
    </PopoverContent>
  </PopoverPrimitive.Root>
);
