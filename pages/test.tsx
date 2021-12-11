import { Container, Heading, Text, NavLinkItem } from "..";
import { ThemeButton } from "../custom/ThemeButton";

export default function Test() {
  return (
    <Container
      css={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "$xl",
        py: "$xl",
      }}
    >
      <ThemeButton />
      <Heading>A different page</Heading>
      {/*--------------- NAV ITEM ---------------*/}
      <Container
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "$md",
        }}
      >
        <Container
          css={{
            display: "flex",
            flexDirection: "column",
            gap: "$md",
            alignItems: "center",
          }}
        >
          <Container
            css={{
              display: "flex",
              gap: "$md",
              justifyContent: "center",
            }}
          >
            <NavLinkItem ghost href="/">
              Home (color, default)
            </NavLinkItem>
            <NavLinkItem ghost href="/test">
              Link (color, default)
            </NavLinkItem>
            <NavLinkItem ghost href="https://www.bitetap.com/">
              Ext. Link
            </NavLinkItem>
          </Container>
          <Container
            css={{
              display: "flex",
              gap: "$md",
              justifyContent: "center",
            }}
          >
            <NavLinkItem active="bold" ghost href="/">
              Home (bold)
            </NavLinkItem>
            <NavLinkItem active="bold" ghost href="/test">
              Link (bold)
            </NavLinkItem>
            <NavLinkItem active="bold" ghost href="https://www.bitetap.com/">
              Ext. Link
            </NavLinkItem>
          </Container>
          <Container
            css={{
              display: "flex",
              gap: "$md",
              justifyContent: "center",
            }}
          >
            <NavLinkItem active="both" ghost href="/">
              Home (both)
            </NavLinkItem>
            <NavLinkItem active="both" ghost href="/test">
              Link (both)
            </NavLinkItem>
            <NavLinkItem active="both" ghost href="https://www.bitetap.com/">
              Ext. Link
            </NavLinkItem>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
