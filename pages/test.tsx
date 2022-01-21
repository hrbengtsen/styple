import { Container, Heading, NavLinkItem } from "../packages/design-system";

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
            <NavLinkItem ghost href="/components">
              Components (color, default)
            </NavLinkItem>
            <NavLinkItem ghost href="/test">
              Test (color, default)
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
            <NavLinkItem active="bold" ghost href="/components">
              Components (bold)
            </NavLinkItem>
            <NavLinkItem active="bold" ghost href="/test">
              Test (bold)
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
            <NavLinkItem active="both" ghost href="/components">
              Components (both)
            </NavLinkItem>
            <NavLinkItem active="both" ghost href="/test">
              Test (both)
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
