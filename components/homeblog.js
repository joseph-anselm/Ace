import groq from "groq";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import BlockContent from "@sanity/block-content-to-react";
import client from "../client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../client";
import React, { useState, useEffect } from "react";
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

const Homeblog = ({ post, slug }) => {
  const [postData, setPost] = useState(null);

  const posts = groq`
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
}`;

  useEffect(() => {
    sanityClient
      .fetch(posts)
      .then((data) => setPost(data))
      .catch(console.error);
  }, [slug]);

  /* Section Six */
  return (
    <div className={styles.section6}>
      <Container>
        <Row>
          <div className={styles.section6title}>
            <h2>
              Blogs <span> & </span>Events
            </h2>
          </div>
          {postData &&
            postData
              .map((post) => (
                <Col xs={6} md={3} justify-content-md-center>
                  <div className={styles.section6tabs}>
                    <div>
                      <div>
                        <Link
                          href="/blog/[slug]"
                          as={`/blog/${post.slug.current}`}
                          className={styles.bloglinks}
                        >
                          <a className={styles.bloglinks}>
                            <img
                              src={post.mainImage?.asset.url}
                              width={250}
                              height={200}
                              alt={post?.mainImage?.alt}
                              className={styles.section6image}
                            />

                            <h6>{post.title}</h6>

                            <p>{post.excerpt}</p>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              ))
              .slice(0, 4)}
        </Row>
        <div className={styles.section6btn}>
          <a>
            <Nav.Link href="/blog" className={styles.bloglinks}>
              more blogs >>>>
            </Nav.Link>
          </a>
        </div>
      </Container>
    </div>
  );
};

const query = groq`
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
}`;
export async function getStaticProps() {
  const allPosts = await client.fetch(query);

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default Homeblog;
