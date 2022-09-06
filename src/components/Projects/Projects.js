import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import TBO from "../../Assets/Projects/TBO.PNG";
import p1 from "../../Assets/Projects/p1.PNG";
import p2 from "../../Assets/Projects/p2.PNG";
import lineups from "../../Assets/Projects/lineups.PNG";
import calendar from "../../Assets/Projects/mycalendar.PNG";
import car from "../../Assets/Projects/animatedcar.PNG";
import nobita from "../../Assets/Projects/gonobitago.PNG";
import himalayas from "../../Assets/Projects/schoolhimalayas.PNG";
import calculator01 from "../../Assets/Projects/cal 1.PNG";
import calculator02 from "../../Assets/Projects/cal 2.PNG";
import emailtemplate01 from "../../Assets/Projects/emailtemplate01.PNG";
import emailtemplate02 from "../../Assets/Projects/emailtemplate02.PNG";
import landingpage01 from "../../Assets/Projects/landingpage01.PNG";
import SWAPI from "../../Assets/Projects/swapi.PNG";

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
              title="SWAPI Demo Site"
              description="SWAPI Demo Site is a website created using Bootstrap, React JS and Starwars API. This website is created in light to illustrate the basic usage of SWAPI. The API is free to use for anyone.."
              responsiveness="Mobile Responsive? Yes!"
              link="https://swapi-demo-site.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TBO}
              isBlog={false}
              title="Textbotonline"
              description="Textbotonline is an online text editor React App. It allows you to edit or generate different kinds of text online. Alongwith, giving you the statistics of your text."
              responsiveness="Mobile Responsive? Yes!"
              link="https://textbotonline.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p1}
              isBlog={false}
              title="Personal Portfolio #01"
              description="Hey! I'm Sharjeel. I'm a professional front-end web developer and React JS developer currently working in Pakistan. I love to code, create efficient apps and interactive websites, resolve complex problems, and many more."
              responsiveness="Mobile Responsive? Yes!"
              link="https://sharjeelfaiq610.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lineups}
              isBlog={false}
              title="Child To Parent Props (React)"
              description="This web page illustrates how we can pass data from child to parent components as props. The web page is created using Material UI and React JS."
              responsiveness="Mobile Responsive? Yes!"
              link="https://pass-props-from-child-to-parent.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p2}
              isBlog={false}
              title="Personal  Portfolio #02"
              description="Hey! I'm Sharjeel. I'm a professional front-end web developer and React JS developer currently working in Pakistan. I love to code, create efficient apps and interactive websites, resolve complex problems, and many more."
              responsiveness="Mobile Responsive? Yes!"
              link="https://sharjeelfaiq.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calendar}
              isBlog={false}
              title="Calendar"
              description="This calendar is purely made with HTML, CSS, JavaScript and jQuery..."
              responsiveness="Mobile Responsive? Yes!"
              link="https://mycalendar610.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={car}
              isBlog={false}
              title="Animated Car"
              description="This animated car and background is entirely made up of simple and smartly written HTML, CSS, and JavaScript."
              responsiveness="Mobile Responsive? No!"
              link="https://animatedcar610.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nobita}
              isBlog={false}
              title="Go Nobita Go (Mini Game)"
              description="This mini game is entirely made up of simple and smartly written HTML, CSS, and JavaScript. The idea is taken from the offline game Dino."
              responsiveness="Mobile Responsive? No!"
              link="https://jump-nobita-jump.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={himalayas}
              isBlog={false}
              title="School Himalayas"
              description="This website is made in motivation of the childern who needs a proper education system in Himalayas. The website is entirely made up of simple and pure written HTML, CSS, and JavaScript with noticeable animations."
              responsiveness="Mobile Responsive? No!"
              link="https://schoolhimalayas.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator01}
              isBlog={false}
              title="Calculator #01"
              description="This calculator is made in motivation of creating my first web app purely with HTML, CSS, and JavaScript. The design is taken from a Youtube video but the code is completely custom."
              responsiveness="Mobile Responsive? Yes!"
              link="https://calculator6101.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator02}
              isBlog={false}
              title="Calculator #02"
              description="This calculator is made in motivation of creating my second web calculator purely with HTML, CSS, and JavaScript. The design is taken from an image seen on Google and is completely self coded."
              responsiveness="Mobile Responsive? Yes!"
              link="https://calculator6102.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emailtemplate01}
              isBlog={false}
              title="Email Template #01"
              description="This Email Template is made in motivation of learning how to create email templates purely with HTML and CSS. The design is taken from a Youtube video and is completely self coded."
              responsiveness="Mobile Responsive? No!"
              link="https://emailtemplate6101.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emailtemplate02}
              isBlog={false}
              title="Email Template #02"
              description="This Email Template is made in motivation of learning how to create email templates purely with HTML and CSS. The design is taken from a Youtube video and is completely self coded."
              responsiveness="Mobile Responsive? No!"
              link="https://emailtemplate6102.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={landingpage01}
              isBlog={false}
              title="Landing Page #01"
              description="This landing page is a conversion of a Figma design into a web page purely written of HTML and CSS.."
              responsiveness="Mobile Responsive? No!"
              link="https://oneposotion.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
