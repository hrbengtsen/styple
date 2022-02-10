import NextLink from "next/link";
import { Link as DSLink } from "../packages/design-system";
import React from "react";

export const Link = React.forwardRef<
  React.ElementRef<typeof DSLink>,
  React.ComponentProps<typeof DSLink>
>(({ href, children, ...props }, forwardedRef) => {
  return (
    <NextLink href={href} passHref>
      <DSLink ref={forwardedRef} {...props}>
        {children}
      </DSLink>
    </NextLink>
  );
});
