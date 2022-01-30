import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import rehypeMetaAttr from "./rehype/rehypeMetaAttr";
import rehypeHighlightCode from "./rehype/rehypeHighlightCode";
import rehypeSlug from "rehype-slug";

export type Frontmatter = {
  slug: string;
  title: string;
  description: string;
};

const ROOT_PATH = path.join(process.cwd(), "data");

export const getAllFrontmatter = (fromPath: string) => {
  const files = fs.readdirSync(path.join(ROOT_PATH, fromPath));

  return files.reduce((allFiles, fileSlug) => {
    const source = fs.readFileSync(
      path.join(ROOT_PATH, fromPath, fileSlug),
      "utf-8"
    );
    const { data } = matter(source);

    return [
      {
        ...(data as Frontmatter),
        slug: fileSlug.replace(`${ROOT_PATH}/`, "").replace(".mdx", ""),
      } as Frontmatter,
      ...allFiles,
    ];
  }, []);
};

export async function getMdxBySlug(basePath: string, slug: string | string[]) {
  const source = fs.readFileSync(
    path.join(ROOT_PATH, basePath, `${slug}.mdx`),
    "utf8"
  );
  const { frontmatter, code } = await bundleMDX({
    source,
    xdmOptions(options, frontmatter) {
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeMetaAttr,
        rehypeHighlightCode,
        rehypeSlug,
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
