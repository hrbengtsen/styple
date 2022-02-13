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
    color: "heading",
  },
});

export const Heading = React.forwardRef<
  React.ElementRef<typeof DEFAULT_TAG>,
  HeadingProps
>((props, forwardedRef) => {
  const { as = DEFAULT_TAG, ...rest } = props;

  const textSize: Record<HeadingTypeVariants, TextSizeVariants["size"]> = {
    h1: { "@initial": "3xl", "@bp2": "4xl" },
    h2: { "@initial": "2xl", "@bp2": "3xl" },
    h3: { "@initial": "xl", "@bp2": "2xl" },
    h4: { "@initial": "lg", "@bp2": "xl" },
  };

  return (
    <StyledHeading as={as} size={textSize[as]} {...rest} ref={forwardedRef} />
  );
});
Heading.displayName = "Heading";
