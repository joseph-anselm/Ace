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
import Link from "next/Link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to Ace Initiatives Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.section2}>
        <div>
          <h1>
            How could <span>you help?</span>
          </h1>
        </div>
        <div className={styles.section2tabs}>
          <div>
            <Image
              src="/../public/img/ace1.jpg"
              width={200}
              height={200}
              className={styles.tabimage}
            />
            <h3>Expertise skill</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              quisquam, iure inventore animi cum accusantium.
            </p>
          </div>
          <div>
            <Image
              src="/../public/img/ace2.jpg"
              width={200}
              height={200}
              className={styles.tabimage}
            />
            <h3>Expertise skill</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              quisquam, iure inventore animi cum accusantium.
            </p>
          </div>
          <div>
            <Image
              src="/../public/img/ace3.jpg"
              width={200}
              height={200}
              className={styles.tabimage}
            />
            <h3>Expertise skill</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              quisquam, iure inventore animi cum accusantium.
            </p>
          </div>
          <div>
            <Image
              src="/../public/img/ace4.jpg"
              width={200}
              height={200}
              className={styles.tabimage}
            />
            <h3>Expertise skill</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              quisquam, iure inventore animi cum accusantium.
            </p>
          </div>
        </div>
      </div>
      {/* section three */}

      <div className={styles.section3}>
        <div className={styles.section3tab1}></div>
        <div className={styles.section3tab2}>
          <h2>
            We are <br />
            non-profit team
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
            corporis deserunt labore cumque iste distinctio exercitationem
            molestias. Veniam reprehenderit distinctio delectus ea, assumenda
            quae eum facilis consequuntur aspernatur ut maiores non voluptatem
            ipsum, amet voluptatum perferendis, nostrum odit? Ab, illum.
          </p>
          <button className={styles.section3btn}>Donate now</button>
        </div>
      </div>

      {/* section four */}
      <div className={styles.section4}>
        <div className={styles.section4title}>
          <h2>
            Featured <span>causes</span>
          </h2>
        </div>
        <Container className={styles.sectioncards}>
          <Card style={{ width: "18rem" }} className={styles.sectioncards}>
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

          <Card style={{ width: "18rem" }} className={styles.sectioncards}>
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

          <Card style={{ width: "18rem" }} className={styles.sectioncards}>
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
            <Col justify-content-md-center>
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
            <Col>
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
            <Col>
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
            <Col>
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
