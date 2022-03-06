import React from "react";
import { styled } from "../stitches.config";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { Separator } from "..";

export const Tabs = styled(TabsPrimitive.Root, {
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

const StyledTabsList = styled(TabsPrimitive.List, {
  display: "flex",
  flexShrink: 0,
});

type TabsListProps = React.ComponentProps<typeof StyledTabsList>;

export const TabsList = React.forwardRef<
  React.ElementRef<typeof StyledTabsList>,
  TabsListProps
>((props, forwardedRef) => (
  <>
    <StyledTabsList {...props} ref={forwardedRef} />
    <Separator />
  </>
));
TabsList.displayName = "TabsList";

export const TabsTrigger = styled(TabsPrimitive.Trigger, {
  display: "inline-flex",
  flexShrink: 0,
  cursor: "pointer",
  height: "40px",
  alignItems: "center",
  justifyContent: "center",
  bg: "$bg200",
  color: "$text200",
  border: "none",
  transition: "$color",
  userSelect: "none",
  px: "$sm",

  "&:hover": {
    color: "$text100",
  },
  "&:focus": {
    boxShadow: "inset 0 0 0 1px currentColor, 0 0 0 1px currentColor",
  },
  '&[data-state="active"]': {
    color: "$text100",
    boxShadow: "inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor",
  },
});

export const TabsContent = styled(TabsPrimitive.Content, {
  flexGrow: 1,
  pt: "$sm",
});
