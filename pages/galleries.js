import styles from "../styles/Gallery.module.css";
import Header2 from "../components/header2";
import client from "../client";
import Img from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import groq from "groq";

Header2.title = "Pictures speaks volume";
Header2.imgsrc = "/img/ace3.jpg";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}
const Galleries = ({ gallery }) => {
  const [postData, setPost] = useState("");

  const postItems = groq`
*[_type == "gallery"]  {  
  images,
  
  
}`;

  useEffect(() => {
    sanityClient
      .fetch(postItems)
      .then((data) => setPost(data))
      .catch(console.error);
  }, [gallery]);

  return (
    <div>
      {postData &&
        postData.map(
          ({ images = "" }, posts) =>
            gallery && (
              <div>
                <Img src={images} />
              </div>
            )
        )}
    </div>
  );
};

const query = groq`
*[_type == "gallery"]  { 
  
  images,
  
 
}`;
export async function getStaticProps() {
  const allPosts = await client.fetch(query);

  return {
    props: {
      gallery: allPosts,
    },
  };
}

export default Galleries;
