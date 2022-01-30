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
        <Row>
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
                      <div className={styles.section6tabs}>
                        <div>
                          <div>
                            <Link
                              href="/blog/[slug]"
                              as={`/blog/${slug.current}`}
                              className={styles.bloglinks}
                            >
                              <a className={styles.bloglinks}>
                                <img
                                  src={mainImage?.asset?.url}
                                  width={250}
                                  height={200}
                                  alt={mainImage?.alt}
                                  className={styles.section6image}
                                />

                                <h6>{title}</h6>

                                <p>{excerpt}</p>
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

// const query = groq`
// *[_type == "post"] | order(date desc, _createdAt desc) {
//   _id,
//   title,
//   slug,
//   excerpt,
//   author -> {
//     name,
//     image {
//       asset ->
//     }
//   },
//   mainImage {
//     asset -> {
//       _id,
//       url
//     }
//   },
//   categories[0] ->,
//   publishedAt,
//   body,
// }`;
export async function getStaticProps() {
  const allPosts = await client.fetch(groq`
  *[_type == "post" && publishedAt < now()]|order(publishedAt desc)
`);

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default Homeblog;
