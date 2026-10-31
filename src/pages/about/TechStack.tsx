import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiGit } from "react-icons/di";
import { FaAngular, FaHtml5, FaCss3Alt, FaSass } from "react-icons/fa";
import {
  SiTypescript,
  SiRedux,
  SiReactquery,
  SiReactivex,
  SiJest,
  SiTestinglibrary,
  SiTailwindcss,
  SiNgrx,
  SiWebpack,
  SiVite,
} from "react-icons/si";

function TechStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Core Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="JavaScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript title="TypeScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 title="HTML5" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt title="CSS3" />
      </Col>

      {/* Frontend Frameworks */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAngular title="Angular" />
      </Col>

      {/* State Management & Data Fetching */}
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux title="Redux Toolkit" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNgrx title="NgRx" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReactquery title="React Query" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReactivex title="RxJS" />
      </Col>

      {/* Styling */}
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss title="Tailwind CSS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaSass title="SCSS / Sass" />
      </Col>

      {/* Testing & Build Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiJest title="Jest" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTestinglibrary title="React Testing Library" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVite title="Vite" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWebpack title="Webpack" />
      </Col>

      {/* Development Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git" />
      </Col>
    </Row>
  );
}

export default TechStack;
