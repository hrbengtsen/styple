import { styled } from "../stitches.config";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

const StyledSeparator = styled(SeparatorPrimitive.Root, {
  bg: "$textNormal",
  opacity: ".3",

  variants: {
    size: {
      sm: {
        "&[data-orientation=horizontal]": { height: 1, width: "$lg" },
        "&[data-orientation=vertical]": { height: "$sm", width: 1 },
      },
      md: {
        "&[data-orientation=horizontal]": { height: 1, width: "$xxl" },
        "&[data-orientation=vertical]": { height: "$md", width: 1 },
      },
      fill: {
        "&[data-orientation=horizontal]": { height: 1, width: "100%" },
        "&[data-orientation=vertical]": { height: "100%", width: 1 },
      },
    },
  },
  defaultVariants: {
    size: "fill",
  },
});

export const Separator = StyledSeparator;
