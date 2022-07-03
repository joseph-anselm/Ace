import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Header2 from "../components/header2";
import Layouts from "../components/layouts";
import styles from "../styles/Contact.module.css";
import { useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  ProgressBar,
  Card,
  Button,
  Row,
  Col,
  Form,
} from "react-bootstrap";

Layouts.title = "Contact us";
Header2.title = "Contact Page";

Header2.title = "Reach out to us";
Header2.imgsrc = "/img/ace-banner3.jpg";
Header2.excerpt =
  "We ensure all queries are well attended to, all our available contact options is a way to help us reach our audience and also keep us connected always  ";

const contact = () => {
  const [state, handleSubmit] = useForm("mayvgywz");
  if (state.succeeded) {
    return (
      <div className="d-flex flex-column justify-content-between">
        <p
          className="fw-bolder alert alert-success m-5 text-center "
          role="alert"
        >
          Thanks for Contacting us! We will ensure to respond in less than
          48hours.
          <span class="badge bg-success m-4">
            <a href="/" className="text-light">
              Back to home
            </a>
          </span>
        </p>
      </div>
    );
  }

  return (
    // section 1 form
    <div>
      <>
        <Container className={styles.section1}>
          <Row>
            <Col xs={12} md={6}>
              <img src="/img/ace-contact2.png" />
            </Col>

            <Col xs={12} md={6} className={styles.form}>
              <div>
                <h2>You can reach out to us now!</h2>
                <p>We always respond between 24 - 48 hours.</p>

                <Form onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="fullname"
                        placeholder="Enter Full name"
                      />
                      <ValidationError
                        prefix="Full Name"
                        field="fullname"
                        errors={state.errors}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        name="email"
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formGridAddress1"
                    >
                      <Form.Label>Phone number</Form.Label>
                      <Form.Control placeholder="1234567890" name="phone" />
                      <ValidationError
                        prefix="Phone Number"
                        field="phone"
                        errors={state.errors}
                      />
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formGridAddress2"
                    >
                      <Form.Label>Subject</Form.Label>
                      <Form.Control
                        placeholder="Message subject"
                        name="subject"
                      />
                      <ValidationError
                        prefix="Message Subject"
                        field="subject"
                        errors={state.errors}
                      />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" rows={5} name="message" />
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />
                    </Form.Group>
                  </Row>

                  <Button
                    type="submit"
                    disabled={state.submitting}
                    className="mt-5"
                    variant="primary"
                    size="lg"
                    style={{
                      background: "#3c9234",
                      display: "block",
                      width: "100%",
                    }}
                  >
                    Send
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </>

      {/* map section */}

      <>
        <Col fluid>
          <div className={styles.map}>
            <iframe
              width="1600"
              height="400"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=44%20Olisa%20street%20Ijebu%20Ode&t=k&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </Col>
      </>

      {/* Section 2 */}
      <>
        <Container className={styles.section2}>
          <Row>
            <Col xs={6} md={3} className={styles.section2tabs}>
              <div>
                <h5>
                  <i
                    className="bi bi-geo-alt"
                    style={{ color: "black", marginRight: "10px" }}
                  ></i>
                  Location
                </h5>
                <p>44 Olisa street, Ijebu Ode .</p>
                <p>Ogun state. Nigeria</p>
              </div>
            </Col>
            <Col xs={6} md={3} className={styles.section2tabs}>
              <div>
                <h5>
                  <i
                    className="bi bi-telephone"
                    style={{ color: "black", marginRight: "10px" }}
                  ></i>
                  Phone
                </h5>
                <p>+2348032501608</p>
                <p>+2348032501608</p>
              </div>
            </Col>
            <Col xs={6} md={3} className={styles.section2tabs}>
              <div>
                <h5>
                  <i
                    className="bi bi-envelope-open"
                    style={{ color: "black", marginRight: "10px" }}
                  ></i>
                  Email Support
                </h5>
                <p>info@aceinitiatives.com</p>
                <p>help@aceinitiatives.com</p>
              </div>
            </Col>
            <Col xs={6} md={3} className={styles.section2tabs}>
              <div>
                <h5>
                  <i
                    className="bi bi-chat-dots"
                    style={{ color: "black", marginRight: "10px" }}
                  ></i>
                  Live chat
                </h5>
                <p>Avaliable online Mon - Fri</p>
                <p>For your queries, 9am - 5pm</p>
              </div>
            </Col>
          </Row>
        </Container>
      </>

      {/* section 3 */}

      <div id="map"></div>
    </div>
  );
};

export default contact;
