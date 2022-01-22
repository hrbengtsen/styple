import React from "react";
import {
  Container,
  Heading,
  Text,
  Badge,
  Code,
  Link,
  Separator,
} from "../packages/design-system";
import { Release } from "../components/Release";
import { Preview } from "../components/Preview";
import { CodeBlock, CodeBlockLink, CodeHighlight } from "./Codeblock";

export const components = {
  Container,
  Badge,
  Release,
  Preview,
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
  pre: ({ children }) => <>{children}</>,
  code: ({ children, className, id, line, outline, ...props }) => {
    const isInlineCode = !className;
    return isInlineCode ? (
      <Code {...props}>{children}</Code>
    ) : (
      <CodeBlock
        children={children}
        className={className}
        id={id}
        line={line}
        outline={outline}
        {...props}
      />
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
