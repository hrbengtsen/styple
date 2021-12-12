import { styled } from "../stitches.config";
import * as TogglePrimitive from "@radix-ui/react-toggle";

export const Toggle = styled(TogglePrimitive.Root, {
  // Reset
  border: "none",
  bg: "transparent",
  color: "$textNormal",
  borderRadius: "$lg",
  width: "$md",
  height: "$md",
  transition: "$bgColor, $boxShadow",

  "&:hover": {
    bg: "$bgDark",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.1rem $colors$buttonLight",
  },

  '&[data-state="on"]': {
    bg: "$buttonNormal",
    "&:hover": {
      bg: "$buttonDark",
    },
  },
});
