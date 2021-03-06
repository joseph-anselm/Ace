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

Layouts.title = "About us";
Header2.title = "About us";
Header2.imgsrc = "/img/ace1.jpg";
Header2.excerpt =
  "We are a focused group aiming to achieve sustainable development in Africa through research, intervention programmes and community development activities. ";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const about = ({ author, slug, title }) => {
  title = "Aboutpage";
  const [postData, setPost] = useState(null);

  const postItems = `
*[_type == "author" ]  {
  
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
  }, [slug]);
  return (
    <div>
      {/* section 1 */}
      <Container>
        <Row className={styles.section1}>
          <Col xs={12} md={4}>
            <div className={styles.section1tabs}>
              <img src="/img/research2.jpg" width={250} height={250} />
              <h5>Making a Difference</h5>
              <p>
                Our ecosystem is a built around volunteers and professionals who
                are passioante about making a difference in our world.
              </p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            {" "}
            <div className={styles.section1tabs}>
              <img src="/img/research3.jpg" width={250} height={250} />
              <h5>Re-Invent</h5>
              <p>
                We are passionate about reinventing a structure that will
                enhance a more civil, positive and modern Africa. We Reinvent
                always!
              </p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            {" "}
            <div className={styles.section1tabs}>
              <img src="/img/research1.jpg" width={250} height={250} />
              <h5>Research</h5>
              <p>
                Our primary tool of extensive research expertise is the bedrock
                upon which our various activities and humanitarian services are
                developed.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* section 3 */}
      <>
        <Container fluid>
          <Row className={styles.section3}>
            <h2>Meet the team</h2>
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
                        <Link href="/[slug]" as={`/${slug?.current}`}>
                          <a
                            style={{
                              color: "black",
                              textDecoration: "none",
                            }}
                            className={styles.links}
                          >
                            <div>
                              <img src={urlFor(image).url()} />
                              <h5>{name}</h5>
                              <p>{memberPosition}</p>
                            </div>
                          </a>
                        </Link>

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
              <h1>Our Objectives</h1>
              <p>
                <ul>
                  <li>
                    To carry out research which are related to achieving
                    sustainable developments in developing countries.
                  </li>
                  <li>
                    To carry out research which are related to achieving
                    sustainable developments in developing countries.
                  </li>
                  <li>
                    To sensitize the public on research outcomes, especially
                    relating to Sustainable development goals (SDGs).
                  </li>
                  <li>
                    To develop intervention programmes which is targeted at
                    ensuring sustainable developments in developing countries.
                  </li>
                  <li>
                    To contribute immensely through community development
                    programmes which will empower developing countries to meet
                    up with the SDGs.
                  </li>
                  <li>
                    To coordinate programmes in both rural and urban areas that
                    is aimed at empowering developing countries to attain
                    sustainable developments.
                  </li>
                  <li>
                    To empower the less privilege in skills to that will be of
                    economic values.
                  </li>
                  <li>
                    To advocate for sustainable development in developing
                    countries.
                  </li>
                </ul>
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <>
        <Container className={styles.section5}>
          <Row className={styles.section5tabs}>
            <Col xs={12} md={6}>
              <div>
                <h3>
                  Wanna make a difference? we are a group that can deliver it
                  always
                </h3>
                <p>
                  We are committed to see Africa develop by bridging the gap
                  through research, intervention programmes and community
                  development activities. We constantly ensure our cause is
                  maintained through strategic activities
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
*[_type == "author"  && slug]  {
  
  name,
  memberPosition,
  slug,
  image ,  
  publishedAt,
  bio,
}`;
export async function getStaticProps() {
  const allPosts = await client.fetch(query);

  return {
    props: {
      allPosts,
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
