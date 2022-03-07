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

const Galleries = ({
  gallery,
  caption,
  images,
  galleries,
  imageUrls,
  imagegallery,
}) => {
  const [postData, setPost] = useState("");

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

  return (
    <div>
      <div>
        <img src={gallery.imageUrls} width={50} />
        <p>{gallery?.caption}</p>
      </div>

      <div>
        {/* {gallery.map((galleries) => {
          <div>
            <img src={galleries.imageUrls} width={400} />
          </div>;
        })}
        ; */}
        <img src={urlFor(gallery.imagegallery).url()} width={50} />
        <p>{caption}test</p>
      </div>
    </div>
  );
};

const query = groq`
*[_type == "gallery"][0]{   
  
 
  "imageUrls": images[0].asset->url,
caption,
'imagegallery':images[2]{
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
