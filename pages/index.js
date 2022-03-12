import groq from "groq";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
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

const index = ({}) => {
  return (
    <div>
      <div>
        <Head>
          <title>Welcome to Ace Initiatives Website</title>
          <link rel="icon" href="/img/favicon.png" />
        </Head>
        <div className={styles.section2}>
          <Container>
            <div>
              <h1>
                How you<span>can help</span>
              </h1>
            </div>
            <Row>
              <Col xs={6} md={3}>
                <Link href="/">
                  <a className={styles.homelinks}>
                    <div>
                      <Image
                        src="/img/exp1.jpg"
                        width={200}
                        height={200}
                        className={styles.tabimage}
                      />
                      <h3>Expertise</h3>
                      <p>
                        We welcome skilled and experienced professionals who are
                        willing to commit to the cause of the organization. your
                        expertise can make the work faster
                      </p>
                    </div>
                  </a>
                </Link>
              </Col>
              <Col xs={6} md={3}>
                <Link href="/">
                  <a className={styles.homelinks}>
                    <div>
                      <Image
                        src="/img/donation2.jpg"
                        width={200}
                        height={200}
                        className={styles.tabimage}
                      />
                      <h3>Donations</h3>
                      <p>
                        We rely strongly on donations and fundings to enable us
                        carry out our specific activities, every penny goes
                        along way in making that required change we truly
                        desire.
                      </p>
                    </div>
                  </a>
                </Link>
              </Col>
              <Col xs={6} md={3}>
                <Link href="/">
                  <a className={styles.homelinks}>
                    <div>
                      <Image
                        src="/img/volunteer1.jpg"
                        width={200}
                        height={200}
                        className={styles.tabimage}
                      />
                      <h3>Volunteers</h3>
                      <p>
                        Our pool of Volunteers have made many of our
                        accomplishments possible, you too can make a difference
                        by becoming a volunteer member
                      </p>
                    </div>
                  </a>
                </Link>
              </Col>
              <Col xs={6} md={3}>
                <Link href="#">
                  <a className={styles.homelinks}>
                    <div>
                      <Image
                        src="/img/research1.jpg"
                        width={200}
                        height={200}
                        className={styles.tabimage}
                      />
                      <h3>Research</h3>
                      <p>
                        Research & analysis is the bedrock upon which our major
                        activities is built upon, you can volunteer as a key
                        member of our research team and make a difference today
                      </p>
                    </div>
                  </a>
                </Link>
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
                  We are committed to seeing a healthy environment in Africa by
                  bridging the gap through research, intervention programmes and
                  community development activities. We are a non-profit team
                  with passion to ensure growth and measurable development in
                  Africa. Our projects rely heavily on both human and financial
                  resources from donors and volunteer members.
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
                    src="/img/ace-waste.jpg"
                    width={250}
                    height={200}
                  />

                  <Card.Body className={styles.cardbody}>
                    <ProgressBar
                      now={30}
                      variant="success"
                      color="primary"
                      className={styles.progress}
                    />
                    <span>
                      <Card.Text>Raised: ₦300,000</Card.Text>
                      <Card.Text>Goal: ₦1000, 000</Card.Text>
                    </span>
                    <Card.Title className="mb-5">
                      Clear plastic wastes in drainages and streams in rural
                      areas. Ogun State, Nigeria
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
                    src="/img/ace-training.jpg"
                    width={250}
                    height={200}
                  />

                  <Card.Body className={styles.cardbody}>
                    <ProgressBar
                      now={60}
                      variant="success"
                      color="primary"
                      className={styles.progress}
                    />
                    <span>
                      <Card.Text>Raised: ₦300,000</Card.Text>
                      <Card.Text>Goal: ₦500, 000</Card.Text>
                    </span>
                    <Card.Title className="mb-5">
                      Waste management sensitization in rural areas in Ogun
                      State, Nigeria.
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
                    src="/img/ace-ppe.jpg"
                    width={250}
                    height={200}
                  />

                  <Card.Body className={styles.cardbody}>
                    <ProgressBar
                      now={60}
                      variant="success"
                      color="primary"
                      className={styles.progress}
                    />
                    <span>
                      <Card.Text>Raised: ₦300,000</Card.Text>
                      <Card.Text>Goal: ₦500, 000</Card.Text>
                    </span>
                    <Card.Title className="mb-5">
                      Personal protective equipment for waste workers in Ogun
                      State, Nigeria.
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
              We are simply passionate about intense development of minds,
              people and environment with a strategic focus on Nigeria and the
              Africa continent, pursuing causes that will only ensure a
              sustainable development for Africa and a more civilized way of
              getting things done. Our quest is to build a system that will last
              and add values to our immediate environment and the continent of
              Africa. We remain committed to this cause and we daily ensure that
              all activities are focused on achieving our goals.
            </p>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default index;
