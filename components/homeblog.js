import groq from "groq";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import sanityClient from "../client";
import client from "../client";
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

const Homeblog = ({ posts, post }) => {
  const [postData, setPost] = useState("");

  const postItems = groq`
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
      .fetch(postItems)
      .then((data) => setPost(data))
      .catch(console.error);
  }, [post]);

  /* Section Six */
  return (
    <div className={styles.section6}>
      <Container>
        <Row className={styles.section6}>
          <div className={styles.section6title}>
            <h2>
              Blogs <span> & </span>Events
            </h2>
          </div>
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
                    <Col xs={6} md={3} justify-content-md-center>
                      <div>
                        <div className="shadow p-1 mb-5 bg-white rounded img-fluid hover-shadow section6tabs">
                          <div>
                            <Link
                              href="/blog/[slug]"
                              as={`/blog/${slug.current}`}
                              className={styles.bloglinks}
                            >
                              <a className={styles.bloglinks}>
                                <img
                                  src={mainImage?.asset?.url}
                                  alt={mainImage?.alt}
                                  className={styles.section6image}
                                />

                                <h6 className={styles.blogtitle}>
                                  {title.replace(/^(.{50}[^\s]*).*/, "$1")}
                                </h6>

                                <p>
                                  {excerpt?.replace(/^(.{20}[^\s]*).*/, "$1")}
                                  ...
                                </p>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Col>
                  )
              )
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
