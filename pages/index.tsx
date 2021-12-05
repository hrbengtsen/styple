import { Container, Heading, Text, Button, NavLinkItem } from "..";
import { ThemeButton } from "../custom/ThemeButton";
import { Plus } from "lucide-react";

export default function Home() {
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
      {/*--------------- HEADING ---------------*/}
      <Container
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "$md",
        }}
      >
        <Text>Testing heading component.</Text>
        <Heading
          css={{
            fontWeight: "$black",
            color: "$textLight",
          }}
        >
          styple lorem ipsum
        </Heading>
        <Heading
          as="h2"
          css={{
            fontWeight: "$black",
            color: "$textNormal",
          }}
        >
          styple lorem ipsum
        </Heading>
        <Heading
          as="h3"
          css={{
            fontWeight: "$black",
            color: "$textDark",
          }}
        >
          styple lorem ipsum
        </Heading>
      </Container>

      {/*--------------- TEXT ---------------*/}
      <Container
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "$md",
        }}
      >
        <Text>Testing text component.</Text>
        <Container>
          <Text size="md" color="primary">
            Primary colored text
          </Text>
          <Text size="md" color="accent">
            Accent colored text
          </Text>
          <Text size="md" color="danger">
            Danger colored text
          </Text>
          <Text size="md" color="success">
            Success colored text
          </Text>
        </Container>
      </Container>

      {/*--------------- BUTTON ---------------*/}
      <Container
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "$md",
        }}
      >
        <Text>Testing Button component.</Text>
        <Container
          css={{
            display: "flex",
            flexDirection: "column",
            gap: "$md",
            alignItems: "center",
          }}
        >
          <Button move>Move button</Button>
          <Button tactile>Tactile button</Button>
          <Button pill>Pill button</Button>
          <Button outline>Outline button</Button>
          <Button ghost>Ghost button</Button>
          <Button ghost>
            <Plus style={{ verticalAlign: "middle" }} />
          </Button>
          <Button size="sm">Small button</Button>
          <Button size="md">Medium button</Button>
          <Button size="lg">Large button</Button>

          <Button variant="primary">Primary</Button>
          <Button variant="primary" outline>
            Primary outline
          </Button>
          <Button variant="primary" ghost>
            Primary ghost
          </Button>
          <Button variant="primary" transparent>
            Primary transparent
          </Button>

          <Button variant="accent">Accent</Button>
          <Button variant="accent" outline>
            Accent outline
          </Button>
          <Button variant="accent" ghost>
            Accent ghost
          </Button>
          <Button variant="accent" transparent>
            Accent transparent
          </Button>

          <Button variant="danger">Danger</Button>
          <Button variant="danger" outline>
            Danger outline
          </Button>
          <Button variant="danger" ghost>
            Danger ghost
          </Button>
          <Button variant="danger" transparent>
            Danger transparent
          </Button>

          <Button variant="success">Success</Button>
          <Button variant="success" outline>
            Success outline
          </Button>
          <Button variant="success" ghost>
            Success ghost
          </Button>
          <Button variant="success" transparent>
            Success transparent
          </Button>
        </Container>
      </Container>

      {/*--------------- NAV ITEM ---------------*/}
      <Container
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "$md",
        }}
      >
        <Text>
          Testing Nav(Link)Item (with Nextjs Link) components. They have all
          button variants + active variant.
        </Text>
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
