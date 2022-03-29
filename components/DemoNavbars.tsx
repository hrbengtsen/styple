import {
  keyframes,
  Container,
  Navbar,
  Text,
  Flex,
  Button,
  CollapsibleTrigger,
} from "../packages/design-system";
import { NavLinkItem } from "./NavLinkItem";

// Keyframes for navbar examples
const slideRight = keyframes({
  from: { transform: "translateX(-32px)", opacity: 0 },
  to: { transform: "translateX(0)", opacity: 1, visibility: "visible" },
});
const openNav = keyframes({
  from: { height: 0, opacity: 0 },
  to: { height: "var(--radix-collapsible-content-height)", opacity: 1 },
});
const closeNav = keyframes({
  from: { height: "var(--radix-collapsible-content-height)", opacity: 1 },
  to: { height: 0, opacity: 0 },
});
const openFullNav = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

export function DemoNavbars() {
  return (
    <Flex
      css={{
        width: "100%",
        gap: "$md",
        flexDirection: "column",
      }}
    >
      <Container css={{ bg: "$bg300" }}>
        <Navbar
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: "$md",
            height: "$xl",
          }}
          brand={<Text>Basic navbar</Text>}
          content={
            <Flex>
              <NavLinkItem ghost href="/docs/components/navbar">
                Link 1
              </NavLinkItem>
              <NavLinkItem ghost href="/">
                Link 2
              </NavLinkItem>
              <NavLinkItem ghost href="https://www.bitetap.com/">
                Link 3
              </NavLinkItem>
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
              }}
            >
              <NavLinkItem ghost href="/docs/components/navbar">
                Link 1
              </NavLinkItem>
              <NavLinkItem ghost href="/">
                Link 2
              </NavLinkItem>
              <NavLinkItem ghost href="https://www.bitetap.com/">
                Link 3
              </NavLinkItem>
            </Flex>
          }
        />
      </Container>
      <Container css={{ bg: "$bg300" }}>
        <Navbar
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: "$md",
            height: "$xl",
          }}
          brand={<Text>Fullpage navbar</Text>}
          content={
            <Flex>
              <NavLinkItem ghost href="/docs/components/navbar">
                Link 1
              </NavLinkItem>
              <NavLinkItem ghost href="/">
                Link 2
              </NavLinkItem>
              <NavLinkItem ghost href="https://www.bitetap.com/">
                Link 3
              </NavLinkItem>
            </Flex>
          }
          mobileContent={
            <Flex
              css={{
                "@bp2": {
                  display: "none",
                },
                flexDirection: "column",
                position: "fixed",
                bg: "$bg300A",
                backdropFilter: "blur(16px)",
                animation: `${openFullNav} 200ms cubic-bezier(0.87, 0, 0.13, 1)`,
                zIndex: "$max",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
              }}
            >
              <CollapsibleTrigger asChild>
                <Button>Close</Button>
              </CollapsibleTrigger>

              <NavLinkItem
                ghost
                href="/docs/components/navbar"
                css={{
                  animation: `${slideRight} 200ms cubic-bezier(0.87, 0, 0.13, 1)`,
                  animationFillMode: "forwards",
                  willChange: "transform",
                  visibility: "hidden",
                }}
              >
                Link 1
              </NavLinkItem>
              <NavLinkItem
                ghost
                href="/"
                css={{
                  animation: `${slideRight} 200ms cubic-bezier(0.87, 0, 0.13, 1)`,
                  animationDelay: "75ms",
                  animationFillMode: "forwards",
                  willChange: "transform",
                  visibility: "hidden",
                }}
              >
                Link 2
              </NavLinkItem>
              <NavLinkItem
                ghost
                href="https://www.bitetap.com/"
                css={{
                  animation: `${slideRight} 200ms cubic-bezier(0.87, 0, 0.13, 1)`,
                  animationDelay: "150ms",
                  animationFillMode: "forwards",
                  willChange: "transform",
                  visibility: "hidden",
                }}
              >
                Link 3
              </NavLinkItem>
            </Flex>
          }
        />
      </Container>
    </Flex>
  );
}
