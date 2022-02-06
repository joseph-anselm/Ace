import Link from "next/link";
import Head from "next/head";
import Layouts from "../components/layouts";
import styles from "../styles/About.module.css";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import React, { useState, useEffect } from "react";
import Header2 from "../components/header2";

import sanityClient from "../client";
import groq from "groq";
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

Header2.title = "About Page";
Header2.imgsrc = "/img/ace1.jpg";
Header2.excerpt =
  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const about = ({ author }) => {
  const [postData, setPost] = useState("");

  const postItems = groq`
*[_type == "author"]  {
  
  name,
  memberPosition,
  slug,
  image ,  
  publishedAt,
  bio,
}`;

  useEffect(() => {
    sanityClient
      .fetch(postItems)
      .then((data) => setPost(data))
      .catch(console.error);
  }, [author]);
  return (
    <div>
      {/* section 1 */}
      <Container>
        <Row className={styles.section1}>
          <Col xs={12} md={4}>
            <div className={styles.section1tabs}>
              <img src="/img/research2.jpg" width={250} height={250} />
              <h5>There are many variations</h5>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected
              </p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            {" "}
            <div className={styles.section1tabs}>
              <img src="/img/research3.jpg" width={250} height={250} />
              <h5>There are many variations</h5>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected
              </p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            {" "}
            <div className={styles.section1tabs}>
              <img src="/img/research1.jpg" width={250} height={250} />
              <h5>There are many variations</h5>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* section 3 */}
      <>
        <Container fluid>
          <Row className={styles.section3}>
            <h2>Meet our team/volunteers</h2>
            <h6>
              Ace Initiatives is anchored and sustained by passionate
              individuals who finds love in helping humanity, supporting
              positive cause and ensuring the goals and organization's
              objectives are actualized.
            </h6>

            {postData &&
              postData.map(
                (
                  {
                    name = "",
                    slug = "",
                    publishedAt = "",
                    image = "",
                    memberPosition = "",
                  },
                  allPosts,
                  author,
                  posts
                ) =>
                  author && (
                    <Col xs={6} md={3}>
                      <div className={styles.section3team}>
                        <img src={urlFor(image).url()} />
                        <h5>{name}</h5>
                        <p>{memberPosition}</p>
                        <div className={styles.socialicons}>
                          <i className="bi bi-facebook"></i>
                          <i className="bi bi-linkedin"></i>
                          <i className="bi bi-twitter"></i>
                          <i className="bi bi-instagram"></i>
                        </div>
                      </div>
                    </Col>
                  )
              )}
          </Row>
        </Container>
      </>

      {/* section 2 */}
      <Container className={styles.section2}>
        <Row>
          <Col xs={12} md={6}>
            <div>
              <img src="/img/research1.jpg" />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className={styles.section2tab1}>
              <h1>Our Journey</h1>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text
              </p>
              <p>Contrary to popular belief, Lorem Ipsum is not</p>
              <p>Contrary to popular belief, Lorem Ipsum</p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* section 4 */}
      <>
        <Container className={styles.section4}>
          <Row className={styles.section4}>
            <Col xs={12} md={6}>
              <p>
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>

              <p>
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </Col>
            <Col xs={12} md={6}>
              <p>
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
              <p>
                <ul>
                  <li>Contrary to popular belief, Lorem Ipsum is not simply</li>
                  <li>Contrary to popular belief, Lorem Ipsum is not simply</li>
                  <li>Contrary to popular belief, Lorem Ipsum is not simply</li>
                  <li>Contrary to popular belief, Lorem Ipsum is not simply</li>
                  <li>Contrary to popular belief, Lorem Ipsum is not simply</li>
                  <li>Contrary to popular belief, Lorem Ipsum is not simply</li>
                </ul>
              </p>
            </Col>
          </Row>
        </Container>
      </>

      <>
        <Container className={styles.section5}>
          <Row className={styles.section5tabs}>
            <Col xs={12} md={6}>
              <div>
                <h3>
                  Specialist moves? we are a company that can deliver it always
                </h3>
                <p>
                  Richard McClintock, a Latin professor at Hampden-Sydney
                  College in Virginia, looked up one of the more obscure Latin
                  words, consectetur, from a Lorem Ipsum passage, and going
                  through the cites of the word in classical literature,
                  discovered the undoubtable source
                </p>
                <Button variant="dark" size="md">
                  Be a part
                </Button>{" "}
              </div>
            </Col>
            <Col xs={12} md={6}>
              <img src="/img/volunteer2.jpg" />
            </Col>
          </Row>
        </Container>
      </>
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

  // export const getServerSideProps = async (pageContext) => {
  //   const pageSlug = pageContext.query.slug;
  //   const query = `*[_type == "author"][0] {
  //     name,
  //     memberPosition,
  //     image,
  //     bio,
  //     slug
  //   }`;

  //   const author = await sanityClient.fetch(query, pageSlug);

  //   if (!author) {
  //     return {
  //       props: null,
  //       notFound: true,
  //     };
  //   } else {
  //     return {
  //       props: {
  //         name: author.name,
  //         memberPosition: author.memberPosition,
  //         image: author.image,
  //         bio: author.bio,
  //       },
  //     };
  //   }
}

export default about;
