import Image from "next/image";
import styles from "../styles/menubar.module.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactElement } from "react";
import {
  faCoffee,
  faFacebook,
  faRibbon,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaTiktok } from "react-icons/fa";
const classNames = require("classnames");

const Menubar = () => {
  return (
    <div fixed="top">
      <div className="bg-dark">
        <ul className="nav bg-dark justify-content-end container">
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://twitter.com/AceInitiatives"
              target="_blank"
            >
              <i className="bi bi-twitter" style={{ color: "white" }}></i>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://web.facebook.com/aceinitiatives"
              target="_blank"
            >
              <i className="bi bi-facebook" style={{ color: "white" }}></i>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://www.instagram.com/official.aceinitiatives/"
              target="_blank"
            >
              <i className="bi bi-instagram" style={{ color: "white" }}></i>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://www.linkedin.com/company/aceinitiatives/"
              target="_blank"
            >
              <i className="bi bi-linkedin" style={{ color: "white" }}></i>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://www.youtube.com/channel/UC0fK9gU51kYvaPJvsDdbN5g"
              target="_blank"
            >
              <i className="bi bi-youtube" style={{ color: "white" }}></i>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://vm.tiktok.com/ZMLhoQ2TF"
              target="_blank"
            >
              <i>
                <FaTiktok style={{ color: "white" }} />
              </i>
            </a>
          </li>
        </ul>
      </div>

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/" className={styles.logoimg}>
            <img
              alt=""
              src="/img/2.png"
              className="d-inline-block align-top logo-img"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "200px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About us</Nav.Link>
              <Nav.Link href="/contact">Contact us</Nav.Link>
              <Nav.Link href="/galleries">Gallery</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/volunteer">Volunteer</Nav.Link>
              <Nav.Link href="/">Donate</Nav.Link>
              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            {/* <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menubar;
