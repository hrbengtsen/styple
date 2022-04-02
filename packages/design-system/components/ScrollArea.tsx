import { styled } from "../stitches.config";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import React from "react";

const SCROLLBAR_SIZE = 8;

const StyledScrollArea = styled(ScrollAreaPrimitive.Root, {
  position: "relative",
  height: "100%",
  borderRadius: "$sm",
  overflow: "hidden",
});

const StyledViewport = styled(ScrollAreaPrimitive.Viewport, {
  width: "100%",
  height: "100%",
  borderRadius: "inherit",
});

const StyledScrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
  display: "flex",
  // Ensures no selection
  userSelect: "none",
  // Disable browser handling of all panning and zooming gestures on touch devices
  touchAction: "none",
  padding: 2,
  bg: "$bg200A",
  transition: "background 160ms ease-out",
  "&:hover": { bg: "$bg300A" },
  '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
  '&[data-orientation="horizontal"]': {
    flexDirection: "column",
    height: SCROLLBAR_SIZE,
  },
});

const StyledThumb = styled(ScrollAreaPrimitive.Thumb, {
  flex: 1,
  bg: "$button100A",
  borderRadius: SCROLLBAR_SIZE,
  // Increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    minWidth: 44,
    minHeight: 44,
  },
});

const StyledCorner = styled(ScrollAreaPrimitive.Corner, {
  bg: "$bg300A",
});

export const ScrollArea = React.forwardRef<
  React.ElementRef<typeof StyledViewport>,
  React.ComponentPropsWithRef<typeof StyledScrollArea>
>(({ children, ...props }, forwardedRef) => {
  return (
    <StyledScrollArea scrollHideDelay={0} {...props}>
      <StyledViewport ref={forwardedRef}>{children}</StyledViewport>
      <StyledScrollbar orientation="horizontal">
        <StyledThumb />
      </StyledScrollbar>
      <StyledScrollbar orientation="vertical">
        <StyledThumb />
      </StyledScrollbar>
      <StyledCorner />
    </StyledScrollArea>
  );
});
ScrollArea.displayName = "ScrollArea";
