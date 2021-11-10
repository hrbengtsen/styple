import { Container, Heading, Text, Button } from "..";
import { ThemeButton } from "../custom/ThemeButton";

export default function Home() {
  return (
    <Container
      css={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "$xl",
      }}
    >
      <ThemeButton />
      {/*--------------- HEADING ---------------*/}
      <Heading
        size="max"
        css={{
          fontWeight: "$black",
        }}
      >
        styple
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
          }}
        >
          <Button move>Test button with move</Button>
          <Button variant="primary">Test button with variant</Button>
        </Container>
      </Container>
    </Container>
  );
}
