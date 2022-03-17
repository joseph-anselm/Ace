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
Header2.imgsrc = "/img/ace-banner3.jpg";
Header2.excerpt =
  "We ensure all queries are well attended to, all our available contact options is a way to help us reach our audience and also keep us connected always  ";

const contact = () => {
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

                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="email" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="password" placeholder="Email" />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formGridAddress1"
                    >
                      <Form.Label>Phone number</Form.Label>
                      <Form.Control placeholder="1234567890" />
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formGridAddress2"
                    >
                      <Form.Label>Subject</Form.Label>
                      <Form.Control placeholder="Message subject" />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                  </Row>

                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    size="lg"
                    style={{
                      background: "#3c9234",
                    }}
                  >
                    Submit
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
