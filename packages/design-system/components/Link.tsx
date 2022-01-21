import NextLink from "next/link";
import React from "react";
import { UrlObject } from "url";
import { styled } from "../stitches.config";
import { Text } from "..";

const StyledLink = styled("a", {
  textDecorationLine: "none",
  textUnderlineOffset: "2px",
  textDecorationColor: "$button100",
  lineHeight: "inherit",
  "&:hover": {
    textDecorationLine: "underline",
  },
  "&:focus": {
    textDecorationLine: "none",
  },
  [`& ${Text}`]: {
    color: "inherit",
  },
  transition: "text-decoration-color 0.15s ease-in-out",

  variants: {
    variant: {
      color: {
        color: "$accent200",
        textDecorationColor: "$accent100",
        "&:focus": {
          outlineColor: "$accent100",
        },
      },
      underline: {
        color: "$text200",
        textDecoration: "underline",
        textDecorationColor: "$button300",

        "&:hover": {
          textDecorationColor: "$button100",
        },
        "&:focus": {
          outlineColor: "$accent100",
        },
      },
    },
  },
  defaultVariants: {
    variant: "underline",
  },
});

type NavItemProps = React.ComponentProps<typeof StyledLink>;
type NavLinkItemProps = NavItemProps & {
  href: string | UrlObject;
  children: any;
};

export const Link = React.forwardRef<
  React.ElementRef<typeof StyledLink>,
  NavLinkItemProps
>(({ href, children, ...props }, forwardedRef) => {
  return (
    <NextLink href={href} passHref>
      <StyledLink ref={forwardedRef} {...props}>
        {children}
      </StyledLink>
    </NextLink>
  );
});
