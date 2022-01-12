import Link from "next/link";
import groq from "groq";
import client from "../client";
import { useState, useEffect } from "react";

function Blog(props) {
  Blog.getInitialProps = async () => ({
    posts: await client.fetch(groq`
    '*[_type == "post" && slug.current == $slug][0]{title, "name": author->name}', { slug }
  `),
  });
  const { posts = [] } = props;
  return (
    <div>
      <h1>Welcome to a blog!</h1>
      {posts.length > 0 &&
        posts.map(
          ({ _id, title = "", slug = "", _updatedAt = "" }) =>
            slug && (
              <li key={_id}>
                <Link prefetch href="/post/[slug]" as={`/post/${slug.current}`}>
                  <a>{title}</a>
                  <h2>{slug}</h2>
                </Link>{" "}
                ({new Date(_updatedAt).toDateString()})
              </li>
            )
        )}
    </div>
  );
}

export default Blog;
