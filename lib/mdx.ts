import { readFileSync } from "fs";
import { join } from "path";
import { bundleMDX } from "mdx-bundler";
import rehypeMetaAttr from "./rehype/rehypeMetaAttr";
import rehypeHighlightCode from "./rehype/rehypeHighlightCode";

export type Frontmatter = {
  slug: string;
  title: string;
  description: string;
};

export async function getFileBySlug(type: string, slug: string) {
  const source = readFileSync(
    join(process.cwd(), "data", type, `${slug}.mdx`),
    "utf8"
  );
  const { frontmatter, code } = await bundleMDX({
    source,
    xdmOptions(options, frontmatter) {
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeMetaAttr,
        rehypeHighlightCode,
      ];

      return options;
    },
  });

  return {
    frontmatter: {
      ...(frontmatter as Frontmatter),
      slug,
    } as Frontmatter,
    code,
  };
}
