import Head from "next/head";
import styles from "../styles/Home.module.css";
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

export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to Ace Initiatives Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.section2}>
        <Container>
          <div>
            <h1>
              How could <span>you help?</span>
            </h1>
          </div>
          <Row>
            <Col xs={6} md={3}>
              <div>
                <Image
                  src="/ace1.jpg"
                  width={200}
                  height={200}
                  className={styles.tabimage}
                />
                <h3>Expertise skill</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt quisquam, iure inventore animi cum accusantium.
                </p>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div>
                <Image
                  src="/public/img/ace1.jpg"
                  width={200}
                  height={200}
                  className={styles.tabimage}
                />
                <h3>Expertise skill</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt quisquam, iure inventore animi cum accusantium.
                </p>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div>
                <Image
                  src="/../public/img/ace1.jpg"
                  width={200}
                  height={200}
                  className={styles.tabimage}
                />
                <h3>Expertise skill</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt quisquam, iure inventore animi cum accusantium.
                </p>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div>
                <Image
                  src="/../public/img/ace1.jpg"
                  width={200}
                  height={200}
                  className={styles.tabimage}
                />
                <h3>Expertise skill</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt quisquam, iure inventore animi cum accusantium.
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        <div className={styles.section2tabs}></div>
      </div>
      {/* section three */}
      <Container fluid>
        <Row className={styles.section3}>
          <Col className={styles.section3tab1} xs={12} md={6}></Col>
          <Col className={styles.section3tab2} xs={12} md={6}>
            <div className={styles.section3tab2}>
              <h2>
                We are <br />
                non-profit team
              </h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eveniet corporis deserunt labore cumque iste distinctio
                exercitationem molestias. Veniam reprehenderit distinctio
                delectus ea, assumenda quae eum facilis consequuntur aspernatur
                ut maiores non voluptatem ipsum, amet voluptatum perferendis,
                nostrum odit? Ab, illum.
              </p>
              <button className={styles.section3btn}>Donate now</button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* section four */}
      <div className={styles.section4}>
        <div className={styles.section4title}>
          <h2>
            Featured <span>causes</span>
          </h2>
        </div>
        <Container className={styles.sectioncards}>
          <Row>
            <Col xs={12} md={4}>
              <Card
                style={{ width: "20rem", margin: "15px auto" }}
                className={styles.sectioncards}
              >
                <Image
                  variant="top"
                  src="/../public/img/ace1.jpg"
                  width={250}
                  height={200}
                />

                <Card.Body className={styles.cardbody}>
                  <ProgressBar
                    now={60}
                    variant="danger"
                    color="primary"
                    className={styles.progress}
                  />
                  <span>
                    <Card.Text>Raised: $300,000</Card.Text>
                    <Card.Text>Goal: $500, 000</Card.Text>
                  </span>
                  <Card.Title className="mb-5">
                    African children need more food and water
                  </Card.Title>
                  <Button variant="dark" className={styles.section4btn}>
                    Donate Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card
                style={{ width: "20rem", margin: "15px auto" }}
                className={styles.sectioncards}
              >
                <Image
                  variant="top"
                  src="/../public/img/ace1.jpg"
                  width={250}
                  height={200}
                />

                <Card.Body className={styles.cardbody}>
                  <ProgressBar
                    now={60}
                    variant="danger"
                    color="primary"
                    className={styles.progress}
                  />
                  <span>
                    <Card.Text>Raised: $300,000</Card.Text>
                    <Card.Text>Goal: $500, 000</Card.Text>
                  </span>
                  <Card.Title className="mb-5">
                    African children need more food and water
                  </Card.Title>
                  <Button variant="dark" className={styles.section4btn}>
                    Donate Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card
                style={{ width: "20rem", margin: "15px auto" }}
                className={styles.sectioncards}
              >
                <Image
                  variant="top"
                  src="/../public/img/ace1.jpg"
                  width={250}
                  height={200}
                />

                <Card.Body className={styles.cardbody}>
                  <ProgressBar
                    now={60}
                    variant="danger"
                    color="primary"
                    className={styles.progress}
                  />
                  <span>
                    <Card.Text>Raised: $300,000</Card.Text>
                    <Card.Text>Goal: $500, 000</Card.Text>
                  </span>
                  <Card.Title className="mb-5">
                    African children need more food and water
                  </Card.Title>
                  <Button variant="dark" className={styles.section4btn}>
                    Donate Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* section five */}
      <div className={styles.section5}>
        <Container className={styles.section5tab}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed alias
            beatae ipsa? Cum possimus tenetur enim sint asperiores consectetur
            aliquid? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Amet labore iusto nam laboriosam accusamus. Architecto dolores
            delectus fugiat. Eius tempore eum fugiat delectus repudiandae quam
            dolore, optio corporis? Nesciunt suscipit sequi illo harum soluta
            exercitationem aperiam impedit quam corrupti iure.
          </p>
        </Container>
      </div>

      {/* Section Six */}
      <div className={styles.section6}>
        <Container>
          <Row>
            <div className={styles.section6title}>
              <h2>
                Blogs <span>& </span>Events
              </h2>
            </div>
            <Col xs={6} md={3} justify-content-md-center>
              <div className={styles.section6tabs}>
                <Image
                  src="/../public/img/ace1.jpg"
                  width={200}
                  height={150}
                  className={styles.section6image}
                />
                <h6>Another world of depth</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id,
                  dolorum.
                </p>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className={styles.section6tabs}>
                <Image
                  src="/../public/img/ace1.jpg"
                  width={200}
                  height={150}
                  className={styles.section6image}
                />
                <h6>Another world of depth</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id,
                  dolorum.
                </p>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className={styles.section6tabs}>
                <Image
                  src="/../public/img/ace1.jpg"
                  width={200}
                  height={150}
                  className={styles.section6image}
                />
                <h6>Another world of depth</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id,
                  dolorum.
                </p>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className={styles.section6tabs}>
                <Image
                  src="/../public/img/ace1.jpg"
                  width={200}
                  height={150}
                  className={styles.section6image}
                />
                <h6>Another world of depth</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id,
                  dolorum.
                </p>
              </div>
            </Col>
          </Row>
          <div className={styles.section6btn}>
            <a>more blogs >>>></a>
          </div>
        </Container>
      </div>
    </div>
  );
}
