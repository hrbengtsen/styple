import React from "react";
import rangeParser from "parse-numeric-range";
import { Pre } from "./Pre";
import { Code, Container, Button } from "../packages/design-system";
import { useCopy } from "../packages/hooks";
import { Copy, CheckCircle2 } from "lucide-react";

export type CodeBlockProps = React.ComponentProps<typeof Container> & {
  line?: string;
  outline?: boolean;
};

// MDX codeblock
export const CodeBlock = ({
  className,
  id,
  line,
  outline,
  ...props
}: CodeBlockProps) => {
  const [code, setCode] = React.useState<string>("");
  const preRef = React.useRef<HTMLPreElement>(null);
  const { copy: copyCode, copied: codeCopied } = useCopy(code);

  React.useEffect(() => {
    if (preRef.current) {
      const codeElement = preRef.current.querySelector("code");
      const code = codeElement?.innerText.replace(/\n{2,}/g, "\n");
      if (code) setCode(code);
    }
  }, [preRef]);

  return (
    <Container
      css={{
        position: "relative",
      }}
    >
      <Pre
        ref={preRef}
        data-highlights-lines={line ? true : false}
        outline={outline}
        css={{
          my: "$lg",
          "[data-preview] + div > &": {
            mt: "-1px",
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          },
        }}
      >
        <code className={className} id={id}>
          {props.children}
        </code>
      </Pre>
      <Button
        size="circle"
        ghost
        tactile
        css={{
          position: "absolute",
          right: "$xs",
          top: "$xs",

          bg: `${outline ? "$bg200A" : "$bg300A"}`,
          "&:hover, &:focus": {
            bg: `${outline ? "$bg200A" : "$bg300A"}`,
            color: `${codeCopied && "$success200"}`,
          },
        }}
        onClick={() => copyCode()}
        aria-label="Copy code to clipboard"
      >
        {codeCopied ? (
          <CheckCircle2
            size="20"
            style={{ position: "relative", top: "2px" }}
          />
        ) : (
          <Copy size="16" style={{ position: "relative", top: "2px" }} />
        )}
      </Button>
    </Container>
  );
};

type CodeBlockLinkProps = {
  id: string;
  index: string;
  href: string;
};

// Make code in codeblock a link via word highlighting: __x__ and this component
export const CodeBlockLink = ({ id, index, href }: CodeBlockLinkProps) => {
  const isExternal = href.startsWith("http");

  React.useEffect(() => {
    const codeBlock = document.getElementById(id);
    if (!codeBlock) return;

    const allHighlightWords = codeBlock.querySelectorAll(".highlight-word");
    const target = allHighlightWords[+index - 1];
    if (!target) return;

    target.replaceWith(
      Object.assign(document.createElement("a"), {
        href,
        innerHTML: target.innerHTML,
        className: target.className,
        ...(isExternal ? { target: "_blank", rel: "noopener" } : {}),
      })
    );
  }, [href, id, index, isExternal]);

  return null;
};

type CodeHighlightProps = React.ComponentProps<typeof Code> & {
  id: string;
  index: string;
};

// Highlight some code on hover of this component
export const CodeHighlight = ({ id, index, ...props }: CodeHighlightProps) => {
  const triggerRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;

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
  }, [id, index]);

  return <Code ref={triggerRef} css={{ cursor: "default" }} {...props} />;
};
