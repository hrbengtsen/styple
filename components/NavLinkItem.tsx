import { useRouter } from "next/router";
import Link from "next/link";
import { NavItem } from "../";

export const NavLinkItem = ({ href, children, ...rest }) => {
  const { asPath } = useRouter();
  const isActive = asPath === href;

  return (
    <Link href={href} passHref>
      <NavItem className={isActive ? "active" : ""} {...rest}>
        {children}
      </NavItem>
    </Link>
  );
};
