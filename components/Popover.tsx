import React from "react";
import { styled } from "../stitches.config";
import * as PopoverPrimitive from "@radix-ui/react-Popover";
import { Text } from "..";

const PopoverContent = styled(PopoverPrimitive.Content, {
  borderRadius: "$lg",
  bg: "$bgElavated",
  boxShadow: "$sm",
  p: "$sm",
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
