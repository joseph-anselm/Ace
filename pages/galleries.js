import styles from "../styles/Gallery.module.css";
import Header2 from "../components/header2";
import client from "../client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import groq from "groq";
import Link from "next/link";

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

Header2.title = "Pictures speaks volume";
Header2.imgsrc = "/img/ace3.jpg";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

const Galleries = ({ image }) => {
  const [postData, setPost] = useState("");

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const postItems = `
*[_type == "gallery"]{  
  images,
  caption,
  images[]{
    asset->{
     url
    }},  
  
}`;

  useEffect(() => {
    sanityClient
      .fetch(postItems)
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return !postData ? (
    <>Loading...</>
  ) : (
    <div>
      <Container>
        <div className={styles.row}>
          {postData?.map((gallery) => (
            <div>
              <h2>{gallery.caption}</h2>
              <Col className={styles.column}>
                {gallery.images?.map((image) => (
                  <div>
                    <img
                      src={image.asset.url}
                      width={100}
                      data-opt-src={image.asset.url}
                      layout="fill"
                      onClick={openModal}
                    />

                    <Link href={`${image.asset.url}`}>
                      <a>
                        <img
                          src={image.asset.url}
                          height={600}
                          width={400}
                          data-opt-src={image.asset.url}
                        />
                        img link
                      </a>
                    </Link>
                  </div>
                ))}
              </Col>
            </div>
          ))}
        </div>
      </Container>

      <div
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <img src={image?.asset.url} layout="fill" />
      </div>
    </div>
  );
};

export default Galleries;
