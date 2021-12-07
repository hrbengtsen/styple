import { darkTheme, deepTheme, styled } from "../stitches.config";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import React from "react";
import { VariantProps } from "@stitches/react";

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  userSelect: "none",
  borderRadius: "50%",

  bg: "$bgDark",
  [`.${darkTheme} &, .${deepTheme} &`]: {
    bg: "$bgLight",
  },

  position: "relative",

  variants: {
    size: {
      sm: {
        width: "$md",
        height: "$md",
      },
      md: {
        width: "$lg",
        height: "$lg",
      },
      lg: {
        width: "$xl",
        height: "$xl",
      },
      xl: {
        width: "$xxl",
        height: "$xxl",
      },
    },
    inactive: {
      true: {
        opacity: ".5",
      },
    },
    interactive: {}, // Clickable like button (maybe tooltip?)
  },
  defaultVariants: {
    size: "sm",
  },
});

// Swap out the as={Image} with actual styles in here to not be Nextjs dependent
const StyledImage = styled(AvatarPrimitive.Image, {
  objectFit: "cover",
  height: "100%",
  width: "100%",
});

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  color: "$textNormal",
  fontWeight: "$bold",
  textTransform: "uppercase",

  variants: {
    size: {
      sm: {
        fontSize: "$xs",
      },
      md: {
        fontSize: "$sm",
      },
      lg: {
        fontSize: "$md",
      },
      xl: {
        fontSize: "$lg",
      },
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

type AvatarVariants = VariantProps<typeof StyledAvatar>;
type AvatarPrimitiveProps = React.ComponentProps<typeof AvatarPrimitive.Root>;
type AvatarProps = AvatarPrimitiveProps &
  AvatarVariants & {
    alt?: string;
    src?: string;
    fallback?: React.ReactNode;
  };

export const Avatar = React.forwardRef<
  React.ElementRef<typeof StyledAvatar>,
  AvatarProps
>(({ alt, src, fallback, size, ...props }, forwardedRef) => {
  return (
    <StyledAvatar ref={forwardedRef} size={size} {...props}>
      <StyledImage alt={alt} src={src} />
      <StyledFallback size={size} delayMs={600}>
        {fallback}
      </StyledFallback>
    </StyledAvatar>
  );
});

export const AvatarGroupItem = styled("div", {
  boxShadow: "0 0 0 2px $colors$textLight",
  borderRadius: "50%",
});

export const AvatarGroup = styled("div", {
  display: "flex",
  flexDirection: "row-reverse",
  [`& ${AvatarGroupItem}:nth-child(n+2)`]: {
    marginRight: "-$sm",
  },
});
