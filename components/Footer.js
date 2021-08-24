import styles from "../styles/Footer.module.css";
import Image from "next/image";
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

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <Container className="container">
          <Row>
            <Col>
              <div className={styles.prefooter}>
                <i className="bi bi-telephone" style={{ color: "white" }}></i>
                <span> Do you have a question</span>
                <h1>+2348032516519</h1>
                <form action="" className={styles.form}>
                  <input type="email" placeholder="enter email" />
                  <button>Subscribe</button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.footercol}>
        <Container>
          <Row>
            <Col xs={12} md={3}>
              <h2>Our Mission</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                sit mollitia nostrum tenetur explicabo fuga, voluptatibus, est
                officiis ipsam possimus fugit adipisci assumenda corporis.
                Laboriosam neque repellat nihil tempore aperiam ducimus qui fuga
                excepturi obcaecati?
              </p>
            </Col>

            <Col xs={12} md={3}>
              <h2>Quick Links</h2>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Our blog</li>
                <li>Events</li>
                <li>Contact</li>
                <li>Join Us</li>
              </ul>
            </Col>

            <Col xs={12} md={3}>
              <h2>Gallery</h2>
              <div>
                <Image src="/../public/img/ace2.jpg" width={90} height={75} />
                <Image src="/../public/img/ace1.jpg" width={90} height={75} />
                <Image src="/../public/img/ace3.jpg" width={90} height={75} />
                <Image src="/../public/img/ace4.jpg" width={90} height={75} />
                <Image src="/../public/img/ace1.jpg" width={90} height={75} />
                <Image src="/../public/img/ace2.jpg" width={90} height={75} />
              </div>
            </Col>

            <Col xs={12} md={3}>
              <h3>Contact Us</h3>
              <div className={styles.contactinfo}>
                <i className="bi bi-telephone" style={{ color: "red" }}>
                  <span> Head office</span>
                </i>
                <span>126 , Ijebu Ode , Lagos Ajah Nigeria</span>
              </div>
              <div className={styles.contactinfo}>
                <i className="bi bi-telephone" style={{ color: "red" }}>
                  {" "}
                  <span>Phone</span>{" "}
                </i>
                <span>+2348032516519</span>
                <span>+2348032516519</span>
              </div>
              <div className={styles.contactinfo}>
                <i className="bi bi-envelope" style={{ color: "red" }}>
                  {" "}
                  <span>Email</span>{" "}
                </i>
                <span>info@aceinitiatives.com</span>
                <span>support@aceinititaives.com</span>
              </div>
            </Col>
          </Row>
        </Container>
        <hr />
        <p className={styles.copyright}>Copyright 2021 | Ace Initiatives</p>
      </div>
    </div>
  );
};

export default Footer;
