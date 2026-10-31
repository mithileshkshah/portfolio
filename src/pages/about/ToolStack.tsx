import { Col, Row } from "react-bootstrap";
import {
  SiGithub,
  SiJira,
  SiPostman,
  SiSlack,
  SiVercel,
  SiDocker,
  SiFigma,
  SiJenkins,
  SiBitbucket,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

function ToolStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Development */}
      <Col xs={4} md={2} className="tech-icons">
        <VscVscode title="VS Code" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGithub title="GitHub" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiBitbucket title="Bitbucket" />
      </Col>

      {/* API & Collaboration */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman title="Postman" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiJira title="Jira" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiSlack title="Slack" />
      </Col>

      {/* Design & Deployment */}
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma title="Figma" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiVercel title="Vercel" />
      </Col>

      {/* DevOps & CI/CD */}
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker title="Docker" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins title="Jenkins" />
      </Col>
    </Row>
  );
}

export default ToolStack;
