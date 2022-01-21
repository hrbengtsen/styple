import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import duotoneDark from "prism-react-renderer/themes/duotoneDark";
import { Container } from "../packages/design-system";

export default function CodeBlock({ children, className }) {
  const language = className.replace(/language-/, "");

  return (
    <Highlight
      {...defaultProps}
      theme={duotoneDark}
      code={children.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Container
          as="pre"
          className={className}
          css={{
            ...style,
            p: "$xl",
            my: "$lg",
            whiteSpace: "pre-wrap",
            borderRadius: "$xl",
            fontFamily: "$mono",
            fontSize: "$xs",
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Container>
      )}
    </Highlight>
  );
}
