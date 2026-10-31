import { Col, Container, Row } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import myImg from "../../../public/assets/avatar.svg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I'm a{" "}
              <i>
                <b className="purple">Senior Frontend Developer</b>
              </i>{" "}
              with around{" "}
              <i>
                <b className="purple">5 years of experience</b>
              </i>{" "}
              building scalable, high-performance, and user-centric web
              applications.
              <br />
              <br />
              My core expertise lies in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, TypeScript, React, and Angular.
                </b>
              </i>
              <br />
              <br />
              I'm passionate about building
              <i>
                <b className="purple">
                  {" "}
                  modern web technologies, scalable products, and intuitive user
                  experiences.
                </b>
              </i>{" "}
              I enjoy solving complex engineering challenges, designing reusable
              components, and optimizing application performance.
              <br />
              <br />I love working with modern frontend architectures, state
              management, and development tools to build maintainable and
              reliable applications. Whenever possible, I also explore
              <i>
                <b className="purple">
                  {" "}
                  Node.js, AI-powered integrations, and emerging technologies
                </b>
              </i>{" "}
              to expand my engineering capabilities.
              <br />
              <br />
              Always curious, continuously learning, and passionate about
              <i>
                <b className="purple">
                  {" "}
                  building impactful products that solve real-world problems.
                </b>
              </i>{" "}
              🚀
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Mithileshkshah"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/channel/UC0MvOAs3A6-foxEb53usy0g"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mithileshkshah/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mithileshkshah"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
