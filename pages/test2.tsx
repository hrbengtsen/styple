import { Container, Heading, NavLinkItem } from "..";

export default function Test2() {
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
            <NavLinkItem ghost href="/test">
              Test (color, default)
            </NavLinkItem>
            <NavLinkItem ghost href="/test2">
              Test2 (color, default)
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
            <NavLinkItem active="bold" ghost href="/test">
              Test (bold)
            </NavLinkItem>
            <NavLinkItem active="bold" ghost href="/test2">
              Test2 (bold)
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
            <NavLinkItem active="both" ghost href="/test">
              Test (both)
            </NavLinkItem>
            <NavLinkItem active="both" ghost href="/test2">
              Test2 (both)
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
