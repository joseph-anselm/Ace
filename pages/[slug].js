// [slug].js
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import Header2 from "../components/header2";
import client from "../client";
import React, { useState, useEffect } from "react";
import styles from "../styles/singleprofile.module.css";
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

const Profile = ({ post, slug, author, allPosts, image }) => {
  const [postData, setPost] = useState(null);
  const title = author?.memberPosition;

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[slug.current == "${slug}"]{
        
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
      <Container>
        <Row className={styles.profile}>
          {author?.authorImage && (
            <div>
              <img
                src={urlFor(author?.authorImage).url()}
                alt={author?.authorImage}
              />
            </div>
          )}
          <h5>{author?.name}</h5>
          <p>{author?.memberPosition}</p>
          <BlockContent
            blocks={author?.bio}
            imageOptions={{ w: 320, h: 240, fit: "max" }}
            {...client.config()}
          />
        </Row>
      </Container>
    </article>
  );
};
const query = groq`*[_type == "author" && slug.current == $slug][0]{
  name,   
  memberPosition,
  bio,
  "authorImage":     
    image {
      asset ->
    }
  ,
  
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
  const author = await client.fetch(query, { slug });

  if (!author) {
    return {
      notfound: true,
    };
  } else {
    return {
      props: {
        author,
      },
    };
  }
}

export default Profile;
