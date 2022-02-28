// [slug].js
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import Header2 from "../../components/header2";

import Link from "next/link";
import client from "../../client";
import React, { useState, useEffect } from "react";
import styles from "../../styles/singlepost.module.css";
import sanityClient from "../../client";
import Layouts from "../../components/layouts";

import {
  Container,
  Nav,
  Navbar,
  ProgressBar,
  Card,
  Button,
  Row,
  Col,
} from "react-bootstrap";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const Post = ({ post, slug, posts }) => {
  const [postData, setPost] = useState(null);

  const headtitle = post?.title;
  Header2.title = headtitle;

  useEffect(() => {
    sanityClient
      .fetch(
        groq`
        *[_type == "post"] | order(date desc, _createdAt desc) {
          _id,
          title,
          slug,
          excerpt,
          author -> {
            name,
            image {
              asset ->
            }
          },
          mainImage {
            asset -> {
              _id,
              url
            }
          },
          categories[0] ->,
          publishedAt,
          body,
        }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, [post]);

  return (
    <>
      <div className={styles.postimage}>
        <img
          src={post?.mainImage?.asset?.url}
          alt={post?.mainImage}
          className={styles.mainImage}
        />
        <h1>{post?.title}</h1>
      </div>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <article>
              {post?.categories && (
                <ul>
                  Posted in
                  {categories.map((category) => (
                    <li key={category}>{category}</li>
                  ))}
                </ul>
              )}
              {post?.authorImage && (
                <div className={styles.authorimage}>
                  <img src={urlFor(post?.authorImage).width(50).url()} />
                  <span>By {post?.name}</span>
                </div>
              )}
              <BlockContent
                blocks={post?.body}
                imageOptions={{ w: 320, h: 240, fit: "max" }}
                {...client.config()}
              />
            </article>
          </Col>
          <Col xs={12} md={4}>
            {postData &&
              postData
                .map(
                  (
                    {
                      _id,
                      title = "",
                      slug = "",
                      publishedAt = "",
                      mainImage = "",
                      excerpt = "",
                    },
                    allPosts,
                    post,
                    posts
                  ) =>
                    post && (
                      <Col md={12}>
                        <div className={styles.sidepost}>
                          <div>
                            <Row>
                              <div class="shadow p-3 mb-5 bg-white rounded img-fluid hover-shadow">
                                <Link
                                  href="/blog/[slug]"
                                  as={`/blog/${slug.current}`}
                                  className={styles.bloglinks}
                                >
                                  <a className={styles.bloglinks}>
                                    <img
                                      src={mainImage?.asset?.url}
                                      width={100}
                                      alt={mainImage?.alt}
                                      className={styles.section6image}
                                    />

                                    <h6>
                                      {title.replace(/^(.{50}[^\s]*).*/, "$1")}
                                    </h6>

                                    <p>
                                      {excerpt?.replace(
                                        /^(.{20}[^\s]*).*/,
                                        "$1"
                                      )}
                                      ...
                                    </p>
                                  </a>
                                </Link>
                              </div>
                            </Row>
                          </div>
                        </div>
                      </Col>
                    )
                )
                .slice(0, 10)}
          </Col>
        </Row>
      </Container>
    </>
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

  if (!post) {
    return {
      notfound: true,
    };
  } else {
    return {
      props: {
        post,
        notfound: true,
        posts: post,
      },
    };
  }
}

export default Post;
