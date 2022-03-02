import styles from "../styles/header.module.css";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const Header2 = ({ title }) => {
  Header2.image;
  Header2.title;
  Header2.excerpt;
  Header2.imgsrc;
  return (
    <div
      className={styles.hero2}
      style={{
        background: `url(${Header2.imgsrc})`,
        objectFill: "cover",
      }}
    >
      <div className={styles.headoverlay}>
        <h1>
          <span>{Header2.title}</span>
        </h1>
        <p>{Header2.excerpt}</p>
        <div className="bton">
          <button className="header-button">
            <a>Volunteer</a>
          </button>
        </div>
        <Breadcrumb className={styles.breadcrumb}>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/blog">Blog</Breadcrumb.Item>
          <Breadcrumb.Item active>current page</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default Header2;
