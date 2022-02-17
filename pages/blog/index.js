import Link from "next/link";
import groq from "groq";
import client from "../../client";
import Header2 from "../../components/header2";
import Layouts from "../../components/layouts";

Header2.title = "Post, News and Events";
Header2.imgsrc = "/img/ace3.jpg";
const Index = ({ posts }) => {
  return (
    <div>
      <h1>Welcome to a blog!</h1>
      {posts &&
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
