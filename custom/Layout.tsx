import React from "react";
import { Container, Navbar, Flex, NavLinkItem, Text, Tooltip, Link } from "..";
import { ThemeButton } from "../custom/ThemeButton";
import { keyframes } from "..";
import { ArrowLeft, ArrowRight, Github } from "lucide-react";
import { useRouter } from "next/router";

const openNav = keyframes({
  from: { height: 0, opacity: 0 },
  to: { height: "var(--radix-collapsible-content-height)", opacity: 1 },
});
const closeNav = keyframes({
  from: { height: "var(--radix-collapsible-content-height)", opacity: 1 },
  to: { height: 0, opacity: 0 },
});

export function Layout({
  children,
  ...props
}: React.ComponentProps<typeof Container>) {
  const router = useRouter();

  return (
    <Container>
      <Container
        css={{
          width: "100%",
          bg: "$bg200A",
          backdropFilter: "blur(16px)",
          position: "fixed",
          zIndex: "$1",
        }}
      >
        <Navbar
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: "$lg",
            height: "$2xl",
            maxWidth: "$max",
            mx: "auto",
          }}
          brand={
            <Flex
              css={{
                alignItems: "center",
                gap: "$lg",
              }}
            >
              <NavLinkItem
                ghost
                href="/"
                css={{
                  display: "flex",
                  borderRadius: "0",
                  pl: "0",
                }}
              >
                <Container
                  as="span"
                  css={{
                    display: "inline-block",
                    transition: "transform 350ms ease-in-out",
                    willChange: "transform",
                    "a:hover &": {
                      transform: "translateX(84px) rotate(-45deg)",
                    },
                    lineHeight: 0,
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.21299 26.5623C4.01375 27.3059 4.69417 27.9863 5.43774 27.7871L10.9991 26.2969C11.7426 26.0977 11.9917 25.1682 11.4473 24.6239L7.37618 20.5527C6.83185 20.0084 5.90238 20.2574 5.70314 21.001L4.21299 26.5623Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.2365 18.1164C7.84597 18.5069 7.84597 19.1401 8.2365 19.5306L12.4693 23.7635C12.8599 24.154 13.493 24.154 13.8836 23.7635L31.2929 6.35417C31.6834 5.96364 31.6834 5.33048 31.2929 4.93995L27.06 0.707108C26.6695 0.316584 26.0363 0.316584 25.6458 0.707108L25.106 1.24688L30.7531 6.8939L29.8589 7.78803L24.2119 2.141L8.2365 18.1164Z"
                      fill="currentColor"
                    />
                  </svg>
                </Container>
                <Text
                  css={{
                    fontWeight: "$black",
                    ml: "$sm",
                    transition: "color 300ms ease-in-out",
                    "a:hover &": {
                      color: "$primary200",
                    },
                  }}
                >
                  styple
                </Text>
              </NavLinkItem>
              <Link
                href="/releases"
                css={{
                  fontSize: "$xs",
                  py: "$sm",
                }}
              >
                v0.1.0
              </Link>
            </Flex>
          }
          content={
            <Flex
              css={{
                gap: "$xs",
              }}
            >
              {router.pathname == "/" ? (
                <NavLinkItem ghost href="/test">
                  Explore components{" "}
                  <Container
                    as="span"
                    css={{
                      display: "inline-block",
                      transition: "transform 200ms ease-in-out",
                      willChange: "transform",
                      "a:hover &": {
                        transform: "translateX(2px)",
                      },
                    }}
                  >
                    <ArrowRight
                      size="16"
                      style={{ position: "relative", top: "2px" }}
                    />
                  </Container>
                </NavLinkItem>
              ) : (
                <NavLinkItem ghost href="/">
                  <Container
                    as="span"
                    css={{
                      display: "inline-block",
                      transition: "transform 200ms ease-in-out",
                      willChange: "transform",
                      "a:hover &": {
                        transform: "translateX(-2px)",
                      },
                    }}
                  >
                    <ArrowLeft
                      size="16"
                      style={{ position: "relative", top: "2px" }}
                    />
                  </Container>{" "}
                  Go home
                </NavLinkItem>
              )}

              <ThemeButton />
              <Tooltip content={<>View code on Github</>}>
                <NavLinkItem
                  size="circle"
                  ghost
                  href="https://github.com/hrbengtsen/styple"
                  css={{
                    textAlign: "center",
                  }}
                >
                  <Github
                    size="20"
                    style={{ position: "relative", top: "2px" }}
                  />
                </NavLinkItem>
              </Tooltip>
            </Flex>
          }
          mobileContent={
            <Flex
              css={{
                "@bp2": {
                  display: "none",
                },
                flexDirection: "column",
                width: "100%",
                '&[data-state="open"]': {
                  animation: `${openNav} 125ms ease-out`,
                },
                '&[data-state="closed"]': {
                  animation: `${closeNav} 125ms ease-out`,
                },
                gap: "$xs",
                px: "$lg",
                pb: "$lg",
              }}
            >
              {router.pathname == "/" ? (
                <NavLinkItem
                  ghost
                  href="/test"
                  css={{
                    pl: "0",
                  }}
                >
                  Explore components{" "}
                  <Container
                    as="span"
                    css={{
                      display: "inline-block",
                      transition: "transform 200ms ease-in-out",
                      willChange: "transform",
                      "a:hover &": {
                        transform: "translateX(2px)",
                      },
                    }}
                  >
                    <ArrowRight
                      size="16"
                      style={{ position: "relative", top: "2px" }}
                    />
                  </Container>
                </NavLinkItem>
              ) : (
                <NavLinkItem
                  ghost
                  href="/"
                  css={{
                    pl: "0",
                  }}
                >
                  <Container
                    as="span"
                    css={{
                      display: "inline-block",
                      transition: "transform 200ms ease-in-out",
                      willChange: "transform",
                      "a:hover &": {
                        transform: "translateX(-2px)",
                      },
                    }}
                  >
                    <ArrowLeft
                      size="16"
                      style={{ position: "relative", top: "2px" }}
                    />
                  </Container>{" "}
                  Go home
                </NavLinkItem>
              )}

              <Flex
                css={{
                  gap: "$xs",
                }}
              >
                <ThemeButton />
                <Tooltip content={<>View code on Github</>}>
                  <NavLinkItem
                    size="circle"
                    ghost
                    href="https://github.com/hrbengtsen/styple"
                    css={{
                      textAlign: "center",
                    }}
                  >
                    <Github
                      size="20"
                      style={{ position: "relative", top: "2px" }}
                    />
                  </NavLinkItem>
                </Tooltip>
              </Flex>
            </Flex>
          }
        />
      </Container>
      <Container
        css={{
          pt: "$4xl",
        }}
      >
        {children}
      </Container>
    </Container>
  );
}
