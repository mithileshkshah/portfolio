import { Col, Row } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";

function Github() {
  const calendarTheme = {
    light: ["#eee8f7", "#e4c9ff", "#c084f5", "#9333ea", "#6b21a8"],
    dark: ["#211b2b", "#4c2672", "#7435a8", "#a855f7", "#d8b4fe"],
  };

  return (
    <section className="github-section">
      <Row className="justify-content-center">
        <Col md={10} lg={9}>
          <div className="github-heading">
            <span className="github-subtitle">CONSISTENCY MATTERS</span>

            <h1 className="project-heading">
              Coding <strong className="purple">Activity</strong>
            </h1>

            <p className="github-description">
              A glimpse into my coding journey, contributions, and consistency
              in building software.
            </p>
          </div>

          <div className="github-calendar-card">
            <div className="github-card-header">
              <div>
                <h4>GitHub Contributions</h4>
                <p>My open-source and development activity</p>
              </div>
            </div>

            <div className="github-calendar-wrapper">
              <GitHubCalendar
                username="Mithileshkshah"
                blockSize={12}
                blockMargin={4}
                fontSize={12}
                theme={calendarTheme}
                colorScheme="dark"
                showWeekdayLabels
              />
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default Github;
