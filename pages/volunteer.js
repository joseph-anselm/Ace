import Header2 from "../components/header2";
import Layouts from "../components/layouts";
import styles from "../styles/Volunteer.module.css";
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

Layouts.title = "Volunteer";
Header2.title = "Volunteer Page";

Header2.title = "Every little effort counts";
Header2.imgsrc = "/img/ace-banner3.jpg";
Header2.excerpt =
  "Every little effort means a lot towards making our world a better place. BE A VOLUNTEER! ";

const contact = () => {
  return (
    // section 1 form
    <div>
      <>
        <Container className={styles.section1}>
          <Row className="justify-content-center m-5">
            <Col xs={9} md={8} className={styles.form}>
              <div>
                <div className="text-center">
                  <h2>BE A VOLUNTEER!</h2>
                  <p>
                    Every little effort means a lot towards making our world a
                    better place. BE A VOLUNTEER!
                  </p>
                </div>

                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="email" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="email" placeholder="Enter name" />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
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
                      <Form.Control placeholder="+2348067890000" />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formGridAddress1"
                    >
                      <Form.Label>Location Landmark</Form.Label>
                      <Form.Control placeholder="Lagos" />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Label>Gender</Form.Label>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                          inline
                          label="Male"
                          name="group1"
                          type={type}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          inline
                          label="Female"
                          name="group1"
                          type={type}
                          id={`inline-${type}-2`}
                        />
                      </div>
                    ))}
                  </Row>

                  <Row className="mb-3">
                    <Form.Label>Areas of Interest</Form.Label>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                          inline
                          label="Research"
                          name="group1"
                          type={type}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          inline
                          label="IT and Media"
                          name="group1"
                          type={type}
                          id={`inline-${type}-2`}
                        />

                        <Form.Check
                          inline
                          label="Publicity"
                          name="group1"
                          type={type}
                          id={`inline-${type}-3`}
                        />
                        <Form.Check
                          inline
                          label="Finance"
                          name="group1"
                          type={type}
                          id={`inline-${type}-4`}
                        />
                      </div>
                    ))}
                  </Row>

                  <Row className="mb-3">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>
                        Mention the experiences you find relevant for any of the
                        above programs
                      </Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                  </Row>

                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>

                  <Button
                    className="mt-3"
                    variant="primary"
                    type="submit"
                    size="lg"
                    style={{
                      background: "#3c9234",
                      display: "block",
                      width: "100%",
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
