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
      xxl: {
        minSize: "$xxl",
      },
      xxxl: {
        minSize: "$xxxl",
      },
    },
    fill: {
      true: {
        width: "100%",
      },
    },
  },
});
