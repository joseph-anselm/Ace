import Image from "next/image";
import styles from "../styles/menubar.module.css";
import { Container, Navbar, Nav } from "react-bootstrap";

import { ReactElement } from "react";
import {
  faCoffee,
  faFacebook,
  faRibbon,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const classNames = require("classnames");

const Menubar = () => {
  return (
    <div fixed="top">
      <div className="bg-dark">
        <ul className="nav bg-dark justify-content-end container">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="bi bi-twitter" style={{ color: "white" }}></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i className="bi bi-facebook" style={{ color: "white" }}></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i className="bi bi-instagram" style={{ color: "white" }}></i>
            </a>
          </li>
        </ul>
      </div>

      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/" className={styles.logoimg}>
            <Image
              src="/logo.png"
              width="30"
              height="40"
              className="d-inline-block align-top logoimg"
              alt="Bloom logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Container class="ml-auto">
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link href="/about">About us</Nav.Link>
                <Nav.Link href="/services">Services</Nav.Link>
                <Nav.Link href="/gallery">Gallery</Nav.Link>
                <Nav.Link href="/updates">News and Updates</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menubar;
