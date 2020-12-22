import Link from "next/link";
import { getAllPagesProps } from "../../lib/mdxUtils";

export default function IndexPage({ posts }) {
  return (
    <>
      <h1>My Cool Blog</h1>
      <ul>
        {posts.map((post) => {
          console.log(post.content);
          return (
            <li key={post.slug}>
              <Link
                href="/blog/posts/[slug]"
                as={`/blog/posts/${encodeURIComponent(post.slug)}`}
              >
                <a>{post.data.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPagesProps("content", ".mdx");
  return { props: { posts } };
}
