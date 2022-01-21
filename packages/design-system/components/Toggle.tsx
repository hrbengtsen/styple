import { styled } from "../stitches.config";
import * as TogglePrimitive from "@radix-ui/react-toggle";

export const Toggle = styled(TogglePrimitive.Root, {
  // Reset
  border: "none",
  bg: "transparent",
  color: "$text200",
  borderRadius: "$lg",
  transition: "$bgColor, $boxShadow",

  "&:hover": {
    bg: "$bg300",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.1rem $colors$button100",
  },

  '&[data-state="on"]': {
    bg: "$button200",
    "&:hover": {
      bg: "$button300",
    },
  },

  variants: {
    size: {
      sm: {
        size: "$md",
      },
      lg: {
        size: "$lg",
      },
    },
  },
  defaultVariants: {
    size: "sm",
  },
});
