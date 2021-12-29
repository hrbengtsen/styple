import React from "react";
import { styled, CSS, darkTheme, deepTheme } from "../stitches.config";
import * as SliderPrimitive from "@radix-ui/react-slider";

const SliderTrack = styled(SliderPrimitive.Track, {
  position: "relative",
  borderRadius: "$pill",
  flexGrow: 1,
  bg: "$bg300",
  '&[data-orientation="horizontal"]': {
    height: 3,
  },
  '&[data-orientation="vertical"]': {
    width: 3,
    height: 100,
  },
});

const SliderRange = styled(SliderPrimitive.Range, {
  position: "absolute",
  bg: "$button100",
  borderRadius: "inherit",
  '&[data-orientation="horizontal"]': {
    height: "100%",
  },
  '&[data-orientation="vertical"]': {
    width: "100%",
  },
});

const SliderThumb = styled(SliderPrimitive.Thumb, {
  position: "relative",
  display: "block",
  width: "$sm",
  height: "$sm",
  outline: "none",
  bg: "$bg100",
  // Make thumb light colors on dark themes
  [`.${darkTheme} &, .${deepTheme} &`]: {
    bg: "$text200",
  },
  borderRadius: "$round",
  boxShadow: "rgba(0, 0, 0, 0.3) 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 1px 2px",
  transition: "$bgColor",
  "&:hover": {
    bg: "white",
    // Make thumb light colors on dark themes
    [`.${darkTheme} &, .${deepTheme} &`]: {
      bg: "$text100",
    },
  },

  "&::after": {
    content: "",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: "-1",
    bg: "rgba(0, 0, 0, 0.1)",
    transform: "scale(1)",
    borderRadius: "$round",
    transition: "$transform",
  },

  "&:focus": {
    "&::after": {
      transform: "scale(1.5)",
    },
  },
});

const StyledSlider = styled(SliderPrimitive.Root, {
  position: "relative",
  display: "flex",
  alignItems: "center",

  flexGrow: 1,

  '&[data-orientation="horizontal"]': {
    width: "100%",
  },
  '&[data-orientation="vertical"]': {
    height: "100%",
    flexDirection: "column",
  },
});

type SliderProps = React.ComponentProps<typeof StyledSlider> & { css?: CSS };

export const Slider = React.forwardRef<
  React.ElementRef<typeof StyledSlider>,
  SliderProps
>((props, forwardedRef) => {
  return (
    <StyledSlider {...props} ref={forwardedRef}>
      <SliderTrack>
        <SliderRange />
      </SliderTrack>
      <SliderThumb />
    </StyledSlider>
  );
});
