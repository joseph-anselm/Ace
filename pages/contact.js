import Header2 from "../components/header2";
import Layouts from "../components/layouts";
import styles from "../styles/Contact.module.css";
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

Header2.title = "Contact Page";

Header2.title = "Reach out to us";
Header2.imgsrc = "/img/ace3.jpg";
Header2.excerpt =
  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ";

const contact = () => {
  return (
    // section 1 form
    <div>
      <>
        <Container className={styles.section1}>
          <Row>
            <Col xs={12} md={6}>
              <img src="/img/con5pp.png" />
            </Col>

            <Col xs={12} md={6} className={styles.form}>
              <div>
                <h2>You can reach out to us now!</h2>
                <p>We always respon between 24 - 48 hours.</p>

                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formGridAddress1"
                    >
                      <Form.Label>Phone number</Form.Label>
                      <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formGridAddress2"
                    >
                      <Form.Label>Subject</Form.Label>
                      <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>message</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                  </Row>

                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>

                  <Button variant="primary" type="submit" size="md">
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
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
                <p>121 Olisa street, Ajah Lagos.</p>
                <p>Ajah, Lekki. Nigeria</p>
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
                <p>We are avaliable online Mon - Fri</p>
                <p>For your queries, between 9am - 5pm</p>
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
