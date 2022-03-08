import styles from "../styles/Gallery.module.css";
import Header2 from "../components/header2";
import client from "../client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import groq from "groq";

Header2.title = "Pictures speaks volume";
Header2.imgsrc = "/img/ace3.jpg";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}
export default function Galleries() {
  const [postData, setPost] = useState("");

  const postItems = `
*[_type == 'gallery'][0]{
  caption,
  images[]{
    asset->{
      url
    }
  }
}`;

  useEffect(() => {
    sanityClient.fetch(postItems).then((data) => setPost(data));
  }, []);

  if (!postData) return "Loading...";

  return (
    <>
      {postData?.images.map((image) => (
        <img src={image.asset.url} width={100} />
      ))}
    </>
  );
}

const query = groq`
*[_type == "gallery"][0]{  
 
  
caption,
images[]{
  asset->{    
    url,
  }},
 
}`;
export async function getStaticProps() {
  const gallery = await client.fetch(query);

  return {
    props: {
      gallery,
    },
  };
}
