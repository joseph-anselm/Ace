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

const Galleries = ({ gallery, caption, images }) => {
  const [postData, setPost] = useState("");

  const postItems = `
*[_type == "gallery"]*[].images  {  
  images,
  caption,
  images[0]{
    asset->{
     url
    }},  
  
}`;

  useEffect(() => {
    sanityClient
      .fetch(postItems)
      .then((data) => setPost(data))
      .catch(console.error);
  }, [gallery]);

  return (
    <div>
      <div>
        <img src={gallery?.images?.asset?.url} />
        <p>{gallery?.caption}</p>
      </div>

      {gallery.images && (
        <div>
          <img src={gallery.image} />
          <p>{gallery?.caption}</p>
        </div>
      )}
      {gallery.imageUrls && (
        <div>
          <img src={gallery?.imageUrls} />
        </div>
      )}
    </div>
  );
};

const query = `
*[_type == "gallery"][0]{   
 
  "imageUrls": images[].asset->url,
caption,
images{
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

export default Galleries;
