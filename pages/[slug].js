// [slug].js
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import Header2 from "../components/header2";
import client from "../client";
import React, { useState, useEffect } from "react";
import styles from "../styles/header.module.css";
import Layouts from "../components/layouts";
import sanityClient from "../client";

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

Header2.imgsrc = "/img/ace3.jpg";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const Profile = ({ data, slug, author, allPosts }) => {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[slug.current == "${author}"]{
        
        name,
        memberPosition,
        slug,
        image ,  
        publishedAt,
        bio,
      }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <article>
      <h5>Profile page {allPosts?.memberPosition}</h5>

      {postData &&
        ((
          {
            name = "",
            slug = "",
            publishedAt = "",
            image = "",
            memberPosition = "",
            bio = "",
          },
          allPosts,
          author,
          posts
        ) =>
          author && (
            <Col xs={6} md={3}>
              <div className={styles.section3team}>
                <img src={urlFor(image).url()} />
                <h5>{slug}</h5>
                <p>{memberPosition}</p>
                <div className={styles.socialicons}>
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-linkedin"></i>
                  <i className="bi bi-twitter"></i>
                  <i className="bi bi-instagram"></i>
                  <p>{bio}</p>
                </div>
              </div>
            </Col>
          ))}
    </article>
  );
};
const query = groq`*[_type == "author" && slug.current == $slug][0]{
  name,   
  memberPosition,
  bio,
}`;
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "author" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const allPosts = await client.fetch(query, { slug });
  return {
    props: {
      data: {
        allPosts,
      },
    },
  };
}

export default Profile;
