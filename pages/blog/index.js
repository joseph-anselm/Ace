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

Header2.title = "Blogs, News and Events";
Header2.imgsrc = "/img/ace3.jpg";
const Index = ({ posts, post, slug }) => {
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
  }, [slug]);

  return (
    <>
      <Container>
        <Row>
          <Col className={styles.cardpage}>
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
                      <div className={styles.cards}>
                        <Card style={{ width: "15em" }}>
                          <Card.Img variant="top" src={mainImage?.asset?.url} />
                          <Card.Body>
                            <Card.Title className={styles.blogtitle}>
                              {title}
                            </Card.Title>
                            <Card.Text>
                              {excerpt?.replace(/^(.{40}[^\s]*).*/, "$1")}....
                            </Card.Text>
                            <Button variant="primary" size="sm">
                              <Link
                                href="/blog/[slug]"
                                as={`/blog/${slug.current}`}
                              >
                                <a
                                  style={{
                                    color: "white",
                                    textDecoration: "none",
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
                      </div>
                    </div>
                  )
              )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export async function getStaticProps() {
  const allPosts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc){
        title, 
        slug,  
        
        excerpt,
        publishedAt,
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
      posts: allPosts,
    },
  };
}

export default Index;
