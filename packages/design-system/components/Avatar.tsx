import { styled, config } from "../stitches.config";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import React from "react";
import { CSS, VariantProps } from "@stitches/react";
import { Status } from "./Status";
import { Container } from "./Containers";

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  userSelect: "none",
  borderRadius: "50%",

  bg: "$bg300",

  position: "relative",

  variants: {
    size: {
      sm: {
        size: "$md",
      },
      md: {
        size: "$lg",
      },
      lg: {
        size: "$xl",
      },
      xl: {
        size: "$2xl",
      },
    },
    inactive: {
      true: {
        opacity: ".5",
      },
    },
    interactive: {
      true: {
        "&::after": {
          content: '""',
          position: "absolute",
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          backgroundColor: "rgba(0,0,0,.1)",
          opacity: "0",
          transition: "opacity 75ms linear",
        },
        "&:hover": {
          "&::after": {
            opacity: "1",
          },
        },
        // For avatars within tooltips, etc.
        '&[data-state="open"]': {
          "&::after": {
            backgroundColor: "rgba(0,0,0,.15)",
            opacity: "1",
          },
        },
      },
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

const StyledImage = styled(AvatarPrimitive.Image, {
  objectFit: "cover",
  height: "100%",
  width: "100%",
});

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  color: "$text200",
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

type StatusVariants = Pick<React.ComponentProps<typeof Status>, "variant">;

type AvatarVariants = VariantProps<typeof StyledAvatar>;
type AvatarPrimitiveProps = React.ComponentProps<typeof AvatarPrimitive.Root>;
type AvatarProps = AvatarPrimitiveProps &
  AvatarVariants & {
    alt: string;
    src: string;
    fallback?: React.ReactNode;
    status?: StatusVariants["variant"];
    statusShadowColor?: CSS<typeof config>["color"];
  };

export const Avatar = React.forwardRef<
  React.ElementRef<typeof StyledAvatar>,
  AvatarProps
>(
  (
    {
      alt,
      src,
      fallback,
      status,
      statusShadowColor = "$bg200",
      size,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <Container
        css={{
          position: "relative",
          height: "fit-content",
          width: "fit-content",
        }}
      >
        <StyledAvatar ref={forwardedRef} size={size} {...props}>
          <StyledImage alt={alt} src={src} />
          <StyledFallback size={size} delayMs={600}>
            {fallback}
          </StyledFallback>
        </StyledAvatar>
        {status && (
          <Container
            css={{
              position: "absolute",
              bottom: 0,
              right: 0,
              // Typecast statusShadowColor to string to check if value is a token
              boxShadow: `0 0 0 3px ${
                (statusShadowColor + "").startsWith("$")
                  ? `$colors${statusShadowColor}`
                  : statusShadowColor
              }`,
              borderRadius: "$round",
            }}
          >
            <Status
              variant={status}
              size={size === "lg" || size === "xl" ? "lg" : "sm"}
            />
          </Container>
        )}
      </Container>
    );
  }
);
Avatar.displayName = "Avatar";

type AvatarGroupProps = React.ComponentProps<typeof StyledAvatarGroup> & {
  limit?: number;
  num?: number;
};

export const AvatarGroup = React.forwardRef<
  React.ElementRef<typeof StyledAvatarGroup>,
  AvatarGroupProps
>(({ limit, num, children, ...props }, forwardedRef) => {
  const childrenAsArray = React.Children.toArray(children);
  const childrenLimit = limit ? limit : childrenAsArray.length;
  const childrenToShow = childrenAsArray.slice(0, childrenLimit);

  const childrenLeft = num
    ? num
    : childrenAsArray.length - childrenToShow.length;

  return (
    <StyledAvatarGroup ref={forwardedRef} {...props}>
      {limit || num ? (
        <>
          <StyledAvatarGroupNumber>+{childrenLeft}</StyledAvatarGroupNumber>
          {React.Children.map(childrenToShow, (child) => child)}
        </>
      ) : (
        children
      )}
    </StyledAvatarGroup>
  );
});
AvatarGroup.displayName = "AvatarGroup";

const StyledAvatarGroup = styled("div", {
  display: "flex",
  flexDirection: "row-reverse",
  alignItems: "center",
  justifyContent: "flex-end",
  [`& ${StyledAvatar}:nth-child(n+2)`]: {
    marginRight: "-$md",
  },
  [`& ${StyledAvatar}`]: {
    boxShadow: "0 0 0 2px $colors$text200",
  },
});

const StyledAvatarGroupNumber = styled("span", {
  fontSize: "$xs",
  color: "$text200",
  pl: "$lg",
});
