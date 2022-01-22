import React from "react";
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
import { Pre } from "../components/Pre";
import { Preview } from "../components/Preview";
import rangeParser from "parse-numeric-range";

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
  pre: ({ children, line, outline }) => (
    <Pre
      data-highlights-lines={line ? true : false}
      outline={outline}
      css={{ my: "$lg" }}
    >
      {children}
    </Pre>
  ),
  code: ({ children, className, id, ...props }) => {
    const isInlineCode = !className;
    return isInlineCode ? (
      <Code {...props}>{children}</Code>
    ) : (
      <code children={children} className={className} id={id} />
    );
  },
  RegisterLink: ({ id, index, href }) => {
    const isExternal = href.startsWith("http");

    React.useEffect(() => {
      const codeBlock = document.getElementById(id);
      if (!codeBlock) return;

      const allHighlightWords = codeBlock.querySelectorAll(".highlight-word");
      const target = allHighlightWords[index - 1];
      if (!target) return;

      target.replaceWith(
        Object.assign(document.createElement("a"), {
          href,
          innerHTML: target.innerHTML,
          className: target.className,
          ...(isExternal ? { target: "_blank", rel: "noopener" } : {}),
        })
      );
    }, []);

    return null;
  },
  H: ({ id, index, ...props }) => {
    const triggerRef = React.useRef<HTMLElement>(null);

    React.useEffect(() => {
      const trigger = triggerRef.current;

      const codeBlock = document.getElementById(id);
      if (!codeBlock) return;

      const allHighlightWords = codeBlock.querySelectorAll(".highlight-word");
      const targetIndex = rangeParser(index).map((i) => i - 1);
      if (Math.max(...targetIndex) >= allHighlightWords.length) return;

      const addClass = () =>
        targetIndex.forEach((i) => allHighlightWords[i].classList.add("on"));
      const removeClass = () =>
        targetIndex.forEach((i) => allHighlightWords[i].classList.remove("on"));

      trigger.addEventListener("mouseenter", addClass);
      trigger.addEventListener("mouseleave", removeClass);

      return () => {
        trigger.removeEventListener("mouseenter", addClass);
        trigger.removeEventListener("mouseleave", removeClass);
      };
    }, []);

    return <Code ref={triggerRef} css={{ cursor: "default" }} {...props} />;
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
