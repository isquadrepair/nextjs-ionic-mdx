import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import { getPageProps, getPagePaths } from "../../../lib/mdxUtils";

export default function BlogPost({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource);
  return (
    <>
      <h1>{frontMatter.title}</h1>
      {content}
    </>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: getPagePaths("content", ".mdx"),
  };
}

export async function getStaticProps({ params }) {
  const { data, content } = getPageProps("content", params.slug, ".mdx");
  const mdxSource = await renderToString(content);
  return { props: { mdxSource, frontMatter: data } };
}
