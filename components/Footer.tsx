import { Section, Text, Link } from "../packages/design-system";

export const Footer = () => (
  <Section
    css={{
      textAlign: "center",
    }}
    size="md"
    as="footer"
  >
    <Text>
      Created, maintained and used by{" "}
      <Link href="https://www.mikkelbengtsen.com/">Mikkel</Link>
    </Text>
    <Text>Made with ✨ and 💻 in Denmark</Text>
  </Section>
);
