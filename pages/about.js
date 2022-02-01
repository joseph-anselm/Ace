import Link from "next/link";
import Layouts from "../components/layouts";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import React, { useState, useEffect } from "react";
import Header2 from "../components/header2";
import styles from "../styles/About.module.css";
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

Layouts.links = "/about";
Header2.title = "About Page";
Header2.excerpt =
  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum";

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
      <>
        <Container>
          <Row className={styles.section3}>
            <h2>Meet our team/volunteers</h2>
            <h6>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
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
                        <h6>{name}</h6>
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
      <>
        <Row fluid className={styles.section2}>
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
          <Col xs={12} md={6}>
            <div className={styles.section2tab2}></div>
          </Col>
        </Row>
      </>

      {/* section 3 */}
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
