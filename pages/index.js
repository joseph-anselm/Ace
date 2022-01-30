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
                How could <span>you help?</span>
              </h1>
            </div>
            <Row>
              <Col xs={6} md={3}>
                <div>
                  <Image
                    src="/img/ace1.jpg"
                    width={200}
                    height={200}
                    className={styles.tabimage}
                  />
                  <h3>Expertise skill</h3>
                  <p>
                    We welcome skilled and experienced professionals who are
                    willing to commit to the cause of the organization. your
                    expertise can make the work faster
                  </p>
                </div>
              </Col>
              <Col xs={6} md={3}>
                <div>
                  <Image
                    src="/img/ace1.jpg"
                    width={200}
                    height={200}
                    className={styles.tabimage}
                  />
                  <h3>Donations Passion</h3>
                  <p>
                    We rely strongly on donations and fundings to enable us
                    carry out our specific activities, every penny goes along
                    way in making that required change we truly desire.
                  </p>
                </div>
              </Col>
              <Col xs={6} md={3}>
                <div>
                  <Image
                    src="/img/ace1.jpg"
                    width={200}
                    height={200}
                    className={styles.tabimage}
                  />
                  <h3>Volunteering</h3>
                  <p>
                    Our pool of Volunteers have made many of our accomplishments
                    possible, you too can make a difference by becoming a
                    volunteer member
                  </p>
                </div>
              </Col>
              <Col xs={6} md={3}>
                <div>
                  <Image
                    src="/img/ace1.jpg"
                    width={200}
                    height={200}
                    className={styles.tabimage}
                  />
                  <h3>Research</h3>
                  <p>
                    Research & analysis is the bedrock upon which our major
                    activities is built upon, you can volunteer as a key member
                    of our research team and make a difference today
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
                  We are committed to see Africa develop by bridging the gap
                  through research, intervention programmes and community
                  development activities. We are a non profit team with passion
                  to ensure growth and measurable development in Africa. Our
                  projects relies heavily on both human and financial resources
                  from donors and volunterr members.
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
                    src="/img/ace1.jpg"
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
                    src="/img/ace1.jpg"
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
                    src="/img/ace1.jpg"
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
              alias beatae ipsa? Cum possimus tenetur enim sint asperiores
              consectetur aliquid? Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Amet labore iusto nam laboriosam accusamus.
              Architecto dolores delectus fugiat. Eius tempore eum fugiat
              delectus repudiandae quam dolore, optio corporis? Nesciunt
              suscipit sequi illo harum soluta exercitationem aperiam impedit
              quam corrupti iure.
            </p>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default index;
