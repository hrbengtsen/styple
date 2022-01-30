import React from "react";
import {
  Container,
  Heading,
  Text,
  Badge,
  Code,
  Link,
  Separator,
  Button,
} from "../packages/design-system";
import { Release } from "../components/Release";
import { Preview } from "../components/Preview";
import { CodeBlock, CodeBlockLink, CodeHighlight } from "./Codeblock";
import { Coffee } from "lucide-react";

export const components = {
  Container,
  Badge,
  Button,
  Release,
  Preview,
  Coffee,
  h1: ({ children, ...props }) => (
    <Heading size="2xl" css={{ mb: "$md", mt: "$3xl" }} {...props}>
      {children}
    </Heading>
  ),
  h2: ({ children, ...props }) => (
    <Heading as="h2" css={{ mb: "$md", mt: "$3xl" }} size="xl" {...props}>
      {children}
    </Heading>
  ),
  h3: ({ children, id, ...props }) => (
    <Container css={{ mb: "$sm", mt: "$3xl" }}>
      <Heading
        as="h3"
        size="lg"
        // Hack to fix jump from quicknav moving heading under the fixed header
        css={{
          mt: "-$4xl",
          pt: "$4xl",
        }}
        {...props}
        id={id}
        data-heading="1"
      >
        {children}
      </Heading>
    </Container>
  ),
  h4: ({ children, id, ...props }) => (
    <Container css={{ mb: "$xs", mt: "$2xl" }}>
      <Heading
        as="h4"
        size="md"
        // Hack to fix jump from quicknav moving heading under the fixed header
        css={{ mt: "-$4xl", pt: "$4xl", fontWeight: "$semibold" }}
        {...props}
        id={id}
        data-heading="2"
      >
        {children}
      </Heading>
    </Container>
  ),
  blockquote: ({ children, ...props }) => (
    <Container
      css={{
        px: "$lg",
        py: "$md",
        mb: "$lg",
        bg: "$accent100A",
        borderLeft: "2px solid $button100",
        borderTopRightRadius: "$xl",
        borderBottomRightRadius: "$xl",
        "& p": {
          color: "$accent200",
          fontSize: "$xs",
          m: 0,
        },
      }}
      {...props}
    >
      {children}
    </Container>
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
  pre: ({ children }) => <>{children}</>,
  code: ({ children, className, id, line, outline, ...props }) => {
    const isInlineCode = !className;
    return isInlineCode ? (
      <Code {...props}>{children}</Code>
    ) : (
      <CodeBlock
        className={className}
        id={id}
        line={line}
        outline={outline}
        {...props}
      >
        {children}
      </CodeBlock>
    );
  },
  CodeBlockLink,
  CodeHighlight,
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
