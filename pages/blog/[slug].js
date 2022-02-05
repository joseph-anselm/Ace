// [slug].js
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import Header2 from "../../components/header2";
import client from "../../client";
import React, { useState, useEffect } from "react";
import styles from "../../styles/header.module.css";
import sanityClient from "../../client";
import Layouts from "../../components/layouts";

Header2.imgsrc = "/img/ace3.jpg";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const Post = ({ post, slug }) => {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
                title,
                _id,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    }
                },
                body,
                "name": author->name,
                "authorImage": author->image
            }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, [slug]);

  return (
    <article>
      <h1>{post?.title}</h1>
      <span>By {post?.name}</span>
      {post?.categories && (
        <ul>
          Posted in
          {categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      )}
      {post?.authorImage && (
        <div>
          <img src={urlFor(post?.authorImage).width(200).url()} />
        </div>
      )}
      <BlockContent
        blocks={post?.body}
        imageOptions={{ w: 320, h: 240, fit: "max" }}
        {...client.config()}
      />

      <div>
        <img
          src={post?.mainImage?.asset?.url}
          width={250}
          height={200}
          alt={post?.mainImage}
          className={styles.mainImage}
        />
      </div>
    </article>
  );
};
const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,   
  "name": author->name,
  mainImage{
    asset->{
      _id,
      url,
    },
    alt
  },
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`;
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await client.fetch(query, { slug });
  return {
    props: {
      post,
    },
  };
}
export default Post;
