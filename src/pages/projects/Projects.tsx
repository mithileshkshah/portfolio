import { Col, Container, Row } from "react-bootstrap";
import ProjectCards from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Projects</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are some of the enterprise applications and products I've
          contributed to throughout my professional journey.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* PARIVESH */}
          <Col md={6} lg={4} className="project-card">
            <ProjectCards
              imgPath={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUhA0Cb8bf7omT0HNQcSVg4fNGggsGt8JWCcHXoxe2Qg&s=10"
              }
              isBlog={false}
              title="PARIVESH – Environmental Clearance Portal"
              description="Contributed to the development of the Government of India's PARIVESH platform by building scalable frontend features and reusable components using Angular, React, and TypeScript. Modernized legacy Angular templates using the latest control flow syntax. Integrated secure REST APIs, implemented role-based access control (RBAC), and optimized application performance through lazy loading and code splitting."
            />
          </Col>

          {/* American Standard Home Services */}
          <Col md={6} lg={4} className="project-card">
            <ProjectCards
              imgPath={
                "https://www.americanstandard.in/wp-content/uploads/sites/6/2026/01/AmericanStandardLogo.webp"
              }
              isBlog={false}
              title="American Standard Home Services"
              description="Developed enterprise modules for work order management, installation workflows, user management, and installer and sales representative onboarding using Angular and TypeScript. Built customer-facing features for appointment scheduling and online form submissions, streamlining manual coordination and improving the customer experience."
            />
          </Col>

          {/* Data Designer */}
          <Col md={6} lg={4} className="project-card">
            <ProjectCards
              imgPath={
                "https://www.americanstandard.in/wp-content/uploads/sites/6/2026/01/AmericanStandardLogo.webp"
              }
              isBlog={false}
              title="Data Designer – Data Management Platform"
              description="Developed a React-based enterprise data management platform for creating and modifying database tables, managing relationships and permissions, and integrating multiple data sources. Built dynamic interfaces using React Query, Redux, and Ant Design to simplify complex data management workflows."
            />
          </Col>

          {/* Butterfly Configurator */}
          <Col md={6} lg={4} className="project-card">
            <ProjectCards
              imgPath={
                "https://www.americanstandard.in/wp-content/uploads/sites/6/2026/01/AmericanStandardLogo.webp"
              }
              isBlog={false}
              title="Butterfly Configurator – Workflow Automation"
              description="Developed a configurable workflow automation platform using React, Redux, and Ant Design. Enabled users to configure data sources, apply custom filters, and define rule-based workflows for automated SMS, email, and push notifications. Integrated AWS Cognito for secure authentication and access management."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
