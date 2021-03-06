import {
  Container,
  Heading,
  Section,
  Grid,
  Text,
  Flex,
  Card,
} from "../packages/design-system";
import { PersonStanding, Brush, Code2 } from "lucide-react";
import { CodeCopy } from "../components/CodeCopy";
import { Link } from "../components/Link";
import NextLink from "next/link";
import { MetaData } from "../components/MetaData";
import {
  enterAndStagger,
  personAnim,
  brushAnim,
  codeAnim,
} from "../lib/animations";

export default function Home() {
  return (
    <>
      <MetaData />
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
            className={enterAndStagger()}
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
            className={enterAndStagger()}
            css={{
              fontWeight: "$semibold",
              pt: "$xl",
              color: "$text200",
              $$stagger: 1,
            }}
          >
            Built using <Link href="https://stitches.dev/">Stitches</Link> and{" "}
            <Link href="https://www.radix-ui.com/">Radix-UI</Link> with
            attention to detail.
          </Heading>
          <CodeCopy />
        </Section>
        <Section
          size="lg"
          className={enterAndStagger()}
          css={{
            maxWidth: "$max",
            mx: "auto",
            $$stagger: 3,
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
              borderRadius: "$2xl",
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
              The web should be accessible for all. Styple follows WCAG
              standards as best it can through Radix components and accessible
              themes.
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

                "div:hover > & svg": {
                  animation: `${personAnim} 500ms cubic-bezier(0.87, 0, 0.13, 1)`,
                },
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
              gap: "$2xl",
              pt: "$2xl",
            }}
          >
            <Flex
              css={{
                flexDirection: "column",
                gap: "$lg",
                borderRadius: "$2xl",
                background:
                  "linear-gradient(to top, #a18cd1 0%, #fbc2eb80 100%)",
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
                Making the web more fun and delightful through
                micro-interactions and animation.
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

                  "div:hover > & svg": {
                    animation: `${brushAnim} 500ms ease-in-out`,
                  },
                }}
              >
                <Brush size="32" />
              </Container>
            </Flex>
            <Flex
              css={{
                flexDirection: "column",
                gap: "$lg",
                borderRadius: "$2xl",
                background:
                  "linear-gradient(120deg, #84fab080 0%, #8fd3f4 100%)",
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

                  "div:hover > & svg": {
                    animation: `${codeAnim} 500ms ease-in`,
                  },
                }}
              >
                <Code2 size="32" />
              </Container>
            </Flex>
          </Grid>
        </Section>

        <Section
          size="lg"
          css={{
            maxWidth: "$max",
            mx: "auto",
          }}
        >
          <Text css={{ fontWeight: "$semibold" }}>All styple tools</Text>
          <Heading
            as="h3"
            size="xl"
            css={{
              pb: "$lg",
            }}
          >
            More than a design system
          </Heading>
          <Grid
            css={{
              gridTemplateColumns: "1fr",
              gridAutoRows: "1fr",
              "@bp2": {
                gridTemplateColumns: "1fr 1fr 1fr",
              },
              gap: "$2xl",
            }}
          >
            <NextLink href="/docs/overview/getting-started" passHref>
              <Card
                as="a"
                interactive
                css={{ p: "$xl", gap: "$lg", bg: "$bg300" }}
              >
                <Text
                  size="lg"
                  color="heading"
                  css={{
                    fontWeight: "$semibold",
                    display: "flex",
                    alignItems: "center",
                    gap: "$md",
                  }}
                >
                  @styple/design-system
                </Text>
                <Text>
                  The core package and full design-system with components,
                  default themes and icons.
                </Text>
              </Card>
            </NextLink>
            <NextLink href="/docs/overview/getting-started" passHref>
              <Card
                as="a"
                interactive
                css={{ p: "$xl", gap: "$lg", bg: "$bg300" }}
              >
                <Text
                  size="lg"
                  color="heading"
                  css={{
                    fontWeight: "$semibold",
                    display: "flex",
                    alignItems: "center",
                    gap: "$md",
                  }}
                >
                  @styple/hooks
                </Text>
                <Text>A set of useful general-purpose React hooks.</Text>
              </Card>
            </NextLink>
            <Flex
              css={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                size="md"
                css={{
                  fontWeight: "$semibold",
                }}
              >
                More to come...
              </Text>
            </Flex>
          </Grid>
        </Section>
      </Container>
    </>
  );
}
