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
import { components } from "../components/MDXComponents";

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
    props: { frontmatter: JSON.parse(JSON.stringify(frontmatter)), code },
  };
}
