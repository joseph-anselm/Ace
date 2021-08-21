import Link from "next/Link";
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
    <div>
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

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <FontAwesomeIcon
              icon={faRibbon}
              style={{ color: "#f13e4b", width: 30 }}
              className="icon"
            />
            Ace Initiatives
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About us</Nav.Link>
            <Nav.Link href="/contact">Contact us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menubar;
