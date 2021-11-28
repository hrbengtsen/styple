import { Container, Heading, Text, Button, Spacer } from "..";
import { ThemeButton } from "../custom/ThemeButton";

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
      <Heading
        size="max"
        css={{
          fontWeight: "$black",
          color: "$textLight",
        }}
      >
        styple lorem ipsum
      </Heading>
      <Heading
        size="max"
        css={{
          fontWeight: "$black",
          color: "$textNormal",
        }}
      >
        styple lorem ipsum
      </Heading>
      <Heading
        size="max"
        css={{
          fontWeight: "$black",
          color: "$textDark",
        }}
      >
        styple lorem ipsum
      </Heading>

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
          <Button size="sm">Small button</Button>
          <Button size="md">Medium button</Button>
          <Button size="lg">Large button</Button>

          <Button variant="primary">Primary</Button>
          <Button variant="primary" outline>
            Primary outline
          </Button>
          <Button variant="primary" transparent>
            Primary transparent
          </Button>

          <Button variant="accent">Accent</Button>
          <Button variant="accent" outline>
            Accent outline
          </Button>
          <Button variant="accent" transparent>
            Accent transparent
          </Button>

          <Button variant="danger">Danger</Button>
          <Button variant="danger" outline>
            Danger outline
          </Button>
          <Button variant="danger" transparent>
            Danger transparent
          </Button>

          <Button variant="success">Success</Button>
          <Button variant="success" outline>
            Success outline
          </Button>
          <Button variant="success" transparent>
            Success transparent
          </Button>
        </Container>
      </Container>
    </Container>
  );
}
