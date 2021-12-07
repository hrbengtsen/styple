import { useRouter } from "next/router";
import Link from "next/link";
import { NavItem } from "../";
import React from "react";
import { UrlObject } from "url";

type NavItemProps = React.ComponentProps<typeof NavItem>;
type NavLinkItemProps = NavItemProps & {
  href: string | UrlObject;
  children: any;
};

export const NavLinkItem = React.forwardRef<
  React.ElementRef<typeof NavItem>,
  NavLinkItemProps
>(({ href, children, ...props }, forwardedRef) => {
  const { asPath } = useRouter();
  const isActive = asPath === href;

  return (
    <Link href={href} passHref>
      <NavItem
        className={isActive ? "active" : ""}
        ref={forwardedRef}
        {...props}
      >
        {children}
      </NavItem>
    </Link>
  );
});
