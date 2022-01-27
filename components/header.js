import styles from "../styles/header.module.css";
const Header = () => {
  return (
    <div className={styles.hero}>
      <h1>
        <span>We are Ace</span>
        <br /> A Sustainable development
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

export default Header;
