import Link from "next/link";
import groq from "groq";
import client from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import React, { useState, useEffect } from "react";
import sanityClient from "../../client";
import Header2 from "../../components/header2";
import styles from "../../styles/singlepost.module.css";
import Layouts from "../../components/layouts";

import {
  Container,
  Nav,
  Navbar,
  ProgressBar,
  Card,
  CardGroup,
  Button,
  Row,
  Col,
} from "react-bootstrap";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

Header2.title = "Post, News and Events";
Header2.imgsrc = "/img/ace3.jpg";
const Index = ({ posts, post }) => {
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
  }, []);

  return (
    <div>
      <h1>Welcome to a blog!</h1>
      {posts &&
        posts.map(
          ({
            _id,
            title = "",
            slug = "",
            publishedAt = "",
            excerpt = "",
            mainImage = "",
          }) =>
            posts && (
              <div key={_id}>
                <Container>
                  <Row>
                    <Col
                      xs={6}
                      md={3}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Card style={{ display: "flex" }}>
                        <Card.Img variant="top" src={mainImage?.asset?.url} />
                        <Card.Body>
                          <Card.Title>{title}</Card.Title>
                          <Card.Text>{excerpt}</Card.Text>
                          <Button variant="primary">
                            <Link
                              href="/blog/[slug]"
                              as={`/blog/${slug.current}`}
                            >
                              <a
                                style={{
                                  width: "15rem",
                                  flex: "3",
                                  color: "white",
                                }}
                              >
                                Read more
                              </a>
                            </Link>
                          </Button>
                        </Card.Body>
                        <Card.Footer>
                          <small className="text-muted">
                            Last updated {publishedAt}
                          </small>
                        </Card.Footer>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </div>
            )
        )}
    </div>
  );
};

export async function getStaticProps() {
  const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc){
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

      }
    `);
  return {
    props: {
      posts,
    },
  };
}

export default Index;
