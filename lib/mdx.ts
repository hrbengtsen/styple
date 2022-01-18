import { readFileSync } from "fs";
import { join } from "path";
import { bundleMDX } from "mdx-bundler";

export type Frontmatter = {
  slug: string;
  title: string;
  description: string;
};

export async function getFileBySlug(type, slug) {
  const source = readFileSync(
    join(process.cwd(), "data", type, `${slug}.mdx`),
    "utf8"
  );
  const { code, frontmatter } = await bundleMDX<Frontmatter>({ source });

  return {
    code,
    frontmatter: {
      slug,
      ...frontmatter,
    } as Frontmatter,
  };
}
