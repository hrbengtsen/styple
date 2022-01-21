import {
  Container,
  Heading,
  Section,
  Text,
  Badge,
  Code,
  Link,
  Separator,
} from "../packages/design-system";
import { Release } from "../components/Release";
import { Frontmatter, getFileBySlug } from "../lib/mdx";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import CodeBlock from "../components/CodeBlock";

const components = {
  Container,
  Badge,
  Release,
  h1: ({ children, ...props }) => (
    <Heading size="3xl" css={{ mb: "$md" }} {...props}>
      {children}
    </Heading>
  ),
  h2: ({ children, ...props }) => (
    <Heading as="h2" css={{ mb: "$md" }} size="2xl" {...props}>
      {children}
    </Heading>
  ),
  h3: ({ children, ...props }) => (
    <Heading as="h3" size="xl" css={{ mb: "$md" }} {...props}>
      {children}
    </Heading>
  ),
  p: ({ children, ...props }) => (
    <Text css={{ mb: "$lg" }} {...props}>
      {children}
    </Text>
  ),
  a: ({ children, href, ...props }) => (
    <Link href={href} {...props}>
      {children}
    </Link>
  ),
  hr: (props) => <Separator size="lg" {...props} />,
  code: ({ children, className, ...props }) => {
    const isInlineCode = !className;
    return isInlineCode ? (
      <Code {...props}>{children}</Code>
    ) : (
      <CodeBlock className={className} children={children} {...props} />
    );
  },
  strong: ({ children, ...props }) => (
    <Text
      css={{ display: "inline", fontSize: "inherit", fontWeight: "$semibold" }}
      {...props}
    >
      {children}
    </Text>
  ),
  ul: ({ children, ...props }) => (
    <Container
      {...props}
      css={{
        pl: "1.15em",
        mb: "$lg",
        color: "$text200",
      }}
      as="ul"
    >
      {children}
    </Container>
  ),
  ol: ({ children, ...props }) => (
    <Container {...props} css={{ mb: "$lg", color: "$text200" }} as="ol">
      {children}
    </Container>
  ),
  li: ({ children, ...props }) => (
    <li>
      <Text {...props}>{children}</Text>
    </li>
  ),
};

type ReleasesType = {
  frontmatter: Frontmatter;
  code: string;
};

export default function Releases({ frontmatter, code }: ReleasesType) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <Container
      css={{
        px: "$lg",
        maxWidth: "768px",
        mx: "auto",
      }}
    >
      <Section size="lg">
        <Heading size="3xl">{frontmatter.title}</Heading>
        <Heading
          as="h2"
          size="md"
          css={{
            fontWeight: "$semibold",
            color: "$text200",
          }}
        >
          {frontmatter.description}
        </Heading>
      </Section>
      <Component
        components={{
          ...components,
        }}
      />
    </Container>
  );
}

export async function getStaticProps() {
  const { frontmatter, code } = await getFileBySlug("overview", "releases");
  return {
    props: { frontmatter, code },
  };
}
