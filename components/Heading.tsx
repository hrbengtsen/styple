import React from "react";
import { styled, VariantProps, CSS } from "../stitches.config";
import { Text } from "./Text";

const DEFAULT_TAG = "h1";

type TextSizeVariants = Pick<VariantProps<typeof Text>, "size">;
type HeadingTypeVariants = "h1" | "h2" | "h3" | "h4";
type HeadingProps = React.ComponentPropsWithRef<typeof DEFAULT_TAG> &
  VariantProps<typeof Text> & { css?: CSS; as?: HeadingTypeVariants };

export const StyledHeading = styled(Text, {
  // Reset
  fontWeight: "$bold",

  defaultVariants: {
    color: "text2",
  },
});

export const Heading = React.forwardRef<
  React.ElementRef<typeof DEFAULT_TAG>,
  HeadingProps
>((props, forwardedRef) => {
  const { as = DEFAULT_TAG, ...rest } = props;

  const textSize: Record<HeadingTypeVariants, TextSizeVariants["size"]> = {
    h1: { "@initial": "xxxl", "@bp2": "xxxxl" },
    h2: { "@initial": "xxl", "@bp2": "xxxl" },
    h3: { "@initial": "xl", "@bp2": "xxl" },
    h4: { "@initial": "lg", "@bp2": "xl" },
  };

  return (
    <StyledHeading as={as} size={textSize[as]} {...rest} ref={forwardedRef} />
  );
});
