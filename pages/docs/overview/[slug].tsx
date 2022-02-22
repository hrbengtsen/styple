import { Container, Heading, Section } from "../../../packages/design-system";
import { Frontmatter, getAllFrontmatter, getMdxBySlug } from "../../../lib/mdx";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import { components } from "../../../components/MDXComponents";
import { GetStaticPaths, GetStaticProps } from "next";
import { QuickNav } from "../../../components/QuickNav";
import { MetaData } from "../../../components/MetaData";

type DocsType = {
  frontmatter: Frontmatter;
  code: string;
};

export default function DocsOverview({ frontmatter, code }: DocsType) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <MetaData title={`${frontmatter.title} — styple`} />
      <Container
        css={{
          px: "$lg",
          maxWidth: "768px",
          mx: "auto",
        }}
      >
        <Section size="md">
          <Heading size="3xl" css={{ fontWeight: "$black" }}>
            {frontmatter.title}
          </Heading>
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
        <Component components={components as any} />
        <QuickNav
          // Add quicknav here instead of in Layout, to make it re-render with new headings when changing doc through this key
          key={frontmatter.slug}
        />
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const frontmatters = getAllFrontmatter("overview");

  return {
    paths: frontmatters.map((frontmatter) => ({
      params: { slug: frontmatter.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { frontmatter, code } = await getMdxBySlug(
    "overview",
    context.params?.slug
  );
  return {
    props: { frontmatter: JSON.parse(JSON.stringify(frontmatter)), code },
  };
};
