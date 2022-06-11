import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import TBO from "../../Assets/Projects/TBO.PNG";
import p1 from "../../Assets/Projects/p1.PNG";
import p2 from "../../Assets/Projects/p2.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TBO}
              isBlog={false}
              title="Textbotonline"
              description="Textbotonline is a FREE ONLINE TEXT UTILITY WEB APPLICATION OR A WEBSITE that allows you to edit your text online or generate different kinds of text online. Moreover, it tells you the statistics or summary of your text."
              link="https://textbotonline.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p1}
              isBlog={false}
              title="Personal Portfolio #01"
              description="Hey! This is Sharjeel. I'm a professional front-end web developer and React JS developer, currently working in Pakistan. I love to code, create efficient apps and interactive websites, resolve complex problems, and many more."
              link="https://sharjeelfaiq.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p2}
              isBlog={false}
              title="Personal  Portfolio #02"
              description="Hey! This is Sharjeel. I'm a professional front-end web developer and React JS developer, currently working in Pakistan. I love to code, create efficient apps and interactive websites, resolve complex problems, and many more."
              link="https://sharjeelfaiq610.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
