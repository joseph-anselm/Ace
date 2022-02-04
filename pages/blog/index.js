import Link from "next/link";
import groq from "groq";
import client from "../../client";
import Header2 from "../../components/header2";
import Layouts from "../../components/layouts";

Layouts.links = "/blog";
Header2.title = "Blog post";
Header2.imgsrc = "/img/ace3.jpg";
const Index = ({ posts }) => {
  return (
    <div>
      <h1>Welcome to a blog!</h1>
      {posts.length > 0 &&
        posts.map(
          ({ _id, title = "", slug = "", publishedAt = "" }) =>
            slug && (
              <li key={_id}>
                <Link href="/blog/[slug]" as={`/blog/${slug.current}`}>
                  <a>{title}</a>
                </Link>{" "}
                ({new Date(publishedAt).toDateString()})
              </li>
            )
        )}
    </div>
  );
};

export async function getStaticProps() {
  const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
    `);
  return {
    props: {
      posts,
    },
  };
}

export default Index;
