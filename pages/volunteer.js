import React from "react";
import { useForm, ValidationError } from "@formspree/react";
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

function Contactform() {
  const [state, handleSubmit] = useForm("xeqnbqqo");
  if (state.succeeded) {
    return (
      <div className="d-flex flex-column">
        <p
          className="fw-bolder alert alert-success m-5 text-center "
          role="alert"
        >
          Thanks for joining us! We will ensure to respond in less than 48hours.
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
          <Row className="justify-content-center mt-5 mb-5">
            <Col xs={12} md={10} sm={12} className={styles.form}>
              <div>
                <div className="text-center">
                  <h2>BE A VOLUNTEER!</h2>
                  <p>
                    Every little effort means a lot towards making our world a
                    better place. VOLUNTEER NOW!
                  </p>
                </div>

                <Form className="fw-bold" onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label className="fw-bold">First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter name"
                        name="firstname"
                      />
                      <ValidationError
                        prefix="First Name"
                        field="name"
                        errors={state.errors}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label className="fw-bold">Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter name"
                        name="lastname"
                        required
                      />
                      <ValidationError
                        prefix="Last Name"
                        field="lname"
                        errors={state.errors}
                      />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        required
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
                      <Form.Control
                        placeholder="+2348067890000"
                        type="number"
                        name="phone"
                        required
                      />
                      <ValidationError
                        prefix="Phone Number"
                        field="phone"
                        errors={state.errors}
                      />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3 text-bold">
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formGridAddress1"
                    >
                      <Form.Label>Location Landmark</Form.Label>
                      <Form.Control placeholder="Lagos" name="location" />
                      <ValidationError
                        prefix="location"
                        field="location"
                        errors={state.errors}
                      />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Label>Gender</Form.Label>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mb-3 fw-normal">
                        <Form.Check
                          inline
                          label="Male"
                          name="gender"
                          type={type}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          inline
                          label="Female"
                          name="gender"
                          type={type}
                          id={`inline-${type}-2`}
                        />
                        <ValidationError
                          prefix="Choose your gender"
                          field="gender"
                          errors={state.errors}
                        />
                      </div>
                    ))}
                  </Row>

                  <Row className="mb-3">
                    <Form.Label>Areas of Interest</Form.Label>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mb-3 fw-normal">
                        <Form.Check
                          block
                          label="Research"
                          name="group1"
                          type={type}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          block
                          label="IT and Media"
                          name="group1"
                          type={type}
                          id={`inline-${type}-2`}
                        />

                        <Form.Check
                          block
                          label="Publicity"
                          name="group1"
                          type={type}
                          id={`inline-${type}-3`}
                        />
                        <Form.Check
                          block
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
                      <Form.Control as="textarea" rows={3} name="experience" />
                    </Form.Group>
                  </Row>

                  {/* <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group> */}

                  <Button
                    type="submit"
                    disabled={state.submitting}
                    className="mt-3"
                    variant="primary"
                    size="lg"
                    style={{
                      background: "#3c9234",
                      display: "block",
                      width: "100%",
                    }}
                  >
                    Be A Volunteer
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
          <Row className="mt-5">
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
}
function App() {
  return <Contactform />;
}

export default App;
