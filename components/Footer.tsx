import { Section, Text } from "../packages/design-system";
import { Link } from "./Link";

export const Footer = () => (
  <Section
    css={{
      textAlign: "center",
    }}
    size="md"
    as="footer"
  >
    <Text css={{ color: "$text300" }}>
      Created, maintained and used by{" "}
      <Link href="https://www.mikkelbengtsen.com/">Mikkel</Link>
    </Text>
    <Text css={{ color: "$text300" }}>Made with ✨ and 💻 in Denmark</Text>
  </Section>
);
