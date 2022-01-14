import {
  Container,
  Heading,
  Section,
  Link,
  Grid,
  Text,
  Flex,
  Button,
  Code,
  Tooltip,
} from "..";
import { PersonStanding, Brush, Code2 } from "lucide-react";
import { NpmCopy } from "../custom/NpmCopy";

export default function Home() {
  return (
    <Container
      css={{
        px: "$lg",
      }}
    >
      <Section
        size="lg"
        css={{
          textAlign: "center",
          maxWidth: "768px",
          mx: "auto",
        }}
      >
        <Heading
          css={{
            fontWeight: "$black",
            lineHeight: "1.15",
          }}
        >
          An accessible design system for React
        </Heading>
        <Heading
          as="h2"
          size="lg"
          css={{
            fontWeight: "$semibold",
            pt: "$xl",
            color: "$text200",
          }}
        >
          Built using <Link href="https://stitches.dev/">Stitches</Link> and{" "}
          <Link href="https://www.radix-ui.com/">Radix-UI</Link> with attention
          to detail.
        </Heading>
        <NpmCopy />
      </Section>
      <Section
        size="lg"
        css={{
          maxWidth: "$max",
          mx: "auto",
        }}
      >
        <Heading
          as="h3"
          size="xl"
          css={{
            pb: "$lg",
          }}
        >
          Design goals
        </Heading>
        <Flex
          css={{
            flexDirection: "column",
            gap: "$lg",
            height: "300px",
            borderRadius: "$xxl",
            background:
              "linear-gradient(45deg, #ff9a9e80 0%, #fad0c4 99%, #fad0c4 100%)",
            p: "$xl",
            position: "relative",
          }}
        >
          <Text
            size="lg"
            color="heading"
            css={{
              fontWeight: "$semibold",
            }}
          >
            Accessibility
          </Text>
          <Text
            color="heading"
            size="md"
            css={{
              maxWidth: "320px",
            }}
          >
            The web should be accessible for all. Styple follows WCAG standards
            as best it can through Radix components and colors with proper
            contrast.
          </Text>
          <Container
            css={{
              position: "absolute",
              bottom: "24px",
              right: "24px",
              bg: "$bg300A",
              width: "46px",
              height: "46px",
              borderRadius: "$xl",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "$text100",
            }}
          >
            <PersonStanding size="32" />
          </Container>
        </Flex>
        <Grid
          css={{
            gridTemplateColumns: "1fr",
            gridAutoRows: "300px",
            "@bp2": {
              gridTemplateColumns: "1fr 1fr",
            },
            gap: "$xxl",
            pt: "$xxl",
          }}
        >
          <Flex
            css={{
              flexDirection: "column",
              gap: "$lg",
              borderRadius: "$xxl",
              background: "linear-gradient(to top, #a18cd1 0%, #fbc2eb80 100%)",
              p: "$xl",
              position: "relative",
            }}
          >
            <Text
              size="lg"
              color="heading"
              css={{
                fontWeight: "$semibold",
              }}
            >
              Details matter
            </Text>
            <Text
              color="heading"
              size="md"
              css={{
                maxWidth: "320px",
              }}
            >
              Making the web more fun and delightful through micro-interactions
              and animation.
            </Text>
            <Container
              css={{
                position: "absolute",
                bottom: "24px",
                right: "24px",
                bg: "$bg300A",
                width: "46px",
                height: "46px",
                borderRadius: "$xl",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "$text100",
              }}
            >
              <Brush size="32" />
            </Container>
          </Flex>
          <Flex
            css={{
              flexDirection: "column",
              gap: "$lg",
              borderRadius: "$xxl",
              background: "linear-gradient(120deg, #84fab080 0%, #8fd3f4 100%)",
              p: "$xl",
              position: "relative",
            }}
          >
            <Text
              size="lg"
              color="heading"
              css={{
                fontWeight: "$semibold",
              }}
            >
              UX & DX
            </Text>
            <Text
              color="heading"
              size="md"
              css={{
                maxWidth: "320px",
              }}
            >
              Both solid user and developer experience are essential parts of
              any application.
            </Text>
            <Container
              css={{
                position: "absolute",
                bottom: "24px",
                right: "24px",
                bg: "$bg300A",
                width: "46px",
                height: "46px",
                borderRadius: "$xl",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "$text100",
              }}
            >
              <Code2 size="32" />
            </Container>
          </Flex>
        </Grid>
      </Section>
      <Section
        css={{
          textAlign: "center",
        }}
      >
        <Text>
          Created, maintained and used by{" "}
          <Link href="https://www.mikkelbengtsen.com/">Mikkel</Link>
        </Text>
        <Text>Made with ✨ and 💻 in Denmark</Text>
      </Section>
    </Container>
  );
}
