import { Container } from "..";
import { styled } from "../stitches.config";

export const Spacer = styled(Container, {
  variants: {
    size: {
      xs: {
        minSize: "$xs",
      },
      sm: {
        minSize: "$sm",
      },
      md: {
        minSize: "$md",
      },
      lg: {
        minSize: "$lg",
      },
      xl: {
        minSize: "$xl",
      },
      "2xl": {
        minSize: "$2xl",
      },
      "3xl": {
        minSize: "$3xl",
      },
    },
    fill: {
      true: {
        width: "100%",
      },
    },
  },
});
