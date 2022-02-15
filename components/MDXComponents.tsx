import React from "react";
import * as SDS from "../packages/design-system";
import { Release } from "../components/Release";
import { Preview } from "../components/Preview";
import { CodeBlock, CodeBlockLink, CodeHighlight } from "./Codeblock";
import { Coffee, Info, Plus, Trash2, Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import { Link } from "./Link";
import { NavLinkItem } from "./NavLinkItem";
import { DemoNavbars } from "./DemoNavbars";

export const components = {
  ...SDS,
  Release,
  Preview,
  Coffee,
  Info,
  Plus,
  Trash2,
  LinkIcon,
  Image,
  NavLinkItem,
  DemoNavbars,
  h1: ({ children, ...props }) => (
    <SDS.Heading size="2xl" css={{ mb: "$md", mt: "$3xl" }} {...props}>
      {children}
    </SDS.Heading>
  ),
  h2: ({ children, ...props }) => (
    <SDS.Heading as="h2" css={{ mb: "$md", mt: "$3xl" }} size="xl" {...props}>
      {children}
    </SDS.Heading>
  ),
  h3: ({ children, id, ...props }) => (
    <SDS.Container css={{ mb: "$sm", mt: "$3xl" }}>
      <SDS.Heading
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
      </SDS.Heading>
    </SDS.Container>
  ),
  h4: ({ children, id, ...props }) => (
    <SDS.Container css={{ mb: "$xs", mt: "$2xl" }}>
      <SDS.Heading
        as="h4"
        size="md"
        // Hack to fix jump from quicknav moving heading under the fixed header
        css={{ mt: "-$4xl", pt: "$4xl", fontWeight: "$semibold" }}
        {...props}
        id={id}
        data-heading="2"
      >
        {children}
      </SDS.Heading>
    </SDS.Container>
  ),
  blockquote: ({ children, ...props }) => (
    <SDS.Container
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
    </SDS.Container>
  ),
  p: ({ children, ...props }) => (
    <SDS.Text css={{ mb: "$lg" }} {...props}>
      {children}
    </SDS.Text>
  ),
  a: ({ children, href, ...props }) => (
    <Link href={href} {...props}>
      {children}
    </Link>
  ),
  hr: (props) => <SDS.Separator size="lg" {...props} />,
  pre: ({ children }) => <>{children}</>,
  code: ({ children, className, id, line, outline, ...props }) => {
    const isInlineCode = !className;
    return isInlineCode ? (
      <SDS.Code {...props}>{children}</SDS.Code>
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
    <SDS.Text
      as="span"
      css={{ display: "inline", fontSize: "inherit", fontWeight: "$semibold" }}
      {...props}
    >
      {children}
    </SDS.Text>
  ),
  ul: ({ children, ...props }) => (
    <SDS.Container
      {...props}
      css={{
        pl: "1.15em",
        mb: "$lg",
        color: "$text200",
      }}
      as="ul"
    >
      {children}
    </SDS.Container>
  ),
  ol: ({ children, ...props }) => (
    <SDS.Container {...props} css={{ mb: "$lg", color: "$text200" }} as="ol">
      {children}
    </SDS.Container>
  ),
  li: ({ children, ...props }) => (
    <li>
      <SDS.Text {...props}>{children}</SDS.Text>
    </li>
  ),
};
