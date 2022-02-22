import NextLink from "next/link";
import { Link as DSLink } from "../packages/design-system";
import React from "react";
import { UrlObject } from "url";

type LinkProps = Omit<React.ComponentProps<typeof DSLink>, "href"> & {
  href: string | UrlObject;
};

export const Link = React.forwardRef<
  React.ElementRef<typeof DSLink>,
  LinkProps
>(({ href, children, ...props }, forwardedRef) => {
  return (
    <NextLink href={href} passHref>
      <DSLink ref={forwardedRef} {...props}>
        {children}
      </DSLink>
    </NextLink>
  );
});
Link.displayName = "Link";
