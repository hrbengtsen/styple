import { Container, Heading, Text, Button } from "..";

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
      <Container>
        <Text>Testing text component.</Text>
        <Text size="md" color="danger">
          Different color n' stuff.
        </Text>
      </Container>

      {/*--------------- BUTTON ---------------*/}
      <Container>
        <Text>Testing Button component.</Text>
        <Button move>Test button with move</Button>
        <Button variant="primary">Test button with variant</Button>
      </Container>
    </Container>
  );
}
