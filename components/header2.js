import styles from "../styles/header.module.css";
import { useEffect } from "react";
import Layouts from "../components/layouts";

const Header2 = () => {
  Header2.title;
  Header2.image;
  Header2.excerpt;

  return (
    <div className={styles.hero2}>
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
      </div>
    </div>
  );
};

export default Header2;
