import styles from "../styles/header.module.css";
import { useEffect } from "react";
import Layouts from "../components/layouts";

const Header2 = () => {
  Header2.title;

  return (
    <div className={styles.hero}>
      <h1>
        <span>{Header2.title}</span>
        <br /> Sustainable development
        <br /> focused group
      </h1>
      <p>
        We aim to see Africa develop through research and strategic orientation
      </p>
      <div className="bton">
        <button className="headbutton">
          <a href="">Donate Now</a>{" "}
        </button>
        <button className="header-button">
          <a>Volunteer</a>
        </button>
      </div>
    </div>
  );
};

export default Header2;
