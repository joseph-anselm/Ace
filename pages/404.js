import Link from "next/link";
import styles from "../styles/Home.module.css";

const Notfound = () => {
  return (
    <div className={styles.notfound}>
      <div>
        <h1>Oooooops......</h1>
        <h3>The Page you are requesting can not be found</h3>
        <p>
          Go back to the
          <Link href="/">
            <a> Homepage</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Notfound;
