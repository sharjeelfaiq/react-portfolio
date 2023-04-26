import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import TBO from "../../Assets/ProjectsImgs/TBO.PNG";
import p1 from "../../Assets/ProjectsImgs/p1.PNG";
import p2 from "../../Assets/ProjectsImgs/p2.PNG";
import lineups from "../../Assets/ProjectsImgs/lineups.PNG";
import calendar from "../../Assets/ProjectsImgs/mycalendar.PNG";
import car from "../../Assets/ProjectsImgs/animatedcar.PNG";
import nobita from "../../Assets/ProjectsImgs/gonobitago.PNG";
import himalayas from "../../Assets/ProjectsImgs/schoolhimalayas.PNG";
import calculator01 from "../../Assets/ProjectsImgs/cal 1.PNG";
import calculator02 from "../../Assets/ProjectsImgs/cal 2.PNG";
import emailtemplate01 from "../../Assets/ProjectsImgs/emailtemplate01.PNG";
import emailtemplate02 from "../../Assets/ProjectsImgs/emailtemplate02.PNG";
import landingpage01 from "../../Assets/ProjectsImgs/landingpage01.PNG";
import SWAPI from "../../Assets/ProjectsImgs/swapi.PNG";
import memomate from "../../Assets/ProjectsImgs/memomate.PNG";
import taskmate from "../../Assets/ProjectsImgs/taskmate.PNG"

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
              videoPath={"abc"}
              imgPath={SWAPI}
              isBlog={false}
              title="SWAPI Demo Site"
              description="SWAPI Demo Site is a website created using Bootstrap, React JS and Starwars API. This website is created in light to illustrate the basic usage of SWAPI. The API is free to use for anyone.."
              responsiveness="Mobile Responsive? Yes!"
              link="https://swapi-demo-site.netlify.app/"
              repo="https://github.com/sharjeelfaiq/Starwars-api-usage-with-react-and-bootstrap.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoPath={"abc"}
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
              videoPath={"abc"}
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
              videoPath={"abc"}
              imgPath={lineups}
              isBlog={false}
              title="Child To Parent Props (React)"
              description="This web page illustrates how we can pass data from child to parent components as props. The web page is created using Material UI and React JS."
              responsiveness="Mobile Responsive? Yes!"
              link="https://pass-props-from-child-to-parent.netlify.app/"
              repo="https://github.com/sharjeelfaiq/passsing-props-from-child-to-parents"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoPath={"abc"}
              imgPath={taskmate}
              isBlog={false}
              title="TaskMate (MUI + React)"
              description="This web app is made using React JS and Material UI React."
              responsiveness="Mobile Responsive? Yes!"
              link="https://taskmate610.netlify.app/"
              repo="https://github.com/sharjeelfaiq/TaskMate"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoPath={"abc"}
              imgPath={p2}
              isBlog={false}
              title="Personal  Portfolio #02"
              description="Hey! I'm Sharjeel. I'm a professional front-end web developer and React JS developer currently working in Pakistan. I love to code, create efficient apps and interactive websites, resolve complex problems, and many more."
              responsiveness="Mobile Responsive? Yes!"
              link="https://sharjeelfaiq.netlify.app/"
              repo="https://github.com/sharjeelfaiq/react-portfolio.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoPath={"abc"}
              imgPath={memomate}
              isBlog={false}
              title="MemoMate"
              description="Notes taking app made using Bootstrap 5.2 and pure JavaScript."
              responsiveness="Mobile Responsive? Yes!"
              link="https://memomate.netlify.app/"
              repo="https://github.com/sharjeelfaiq/MemoMate-Notes-taking-Web-App-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoPath={"abc"}
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
              videoPath={"abc"}
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
              videoPath={"abc"}
              imgPath={nobita}
              isBlog={false}
              title="Go Nobita Go (Mini Game)"
              description="This mini game is entirely made up of simple and smartly written HTML, CSS, and JavaScript. The idea is taken from the offline game Dino."
              responsiveness="Mobile Responsive? No!"
              link="https://jump-nobita-jump.netlify.app/"
              repo="https://github.com/sharjeelfaiq/jump-nobita-jump"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoPath={"abc"}
              imgPath={himalayas}
              isBlog={false}
              title="School Himalayas"
              description="This website is made in motivation of the childern who needs a proper education system in Himalayas. The website is entirely made up of simple and pure written HTML, CSS, and JavaScript with noticeable animations."
              responsiveness="Mobile Responsive? No!"
              link="https://schoolhimalayas.netlify.app/"
              repo="https://github.com/sharjeelfaiq/custom-school-website-template"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoPath={"abc"}
              imgPath={calculator01}
              isBlog={false}
              title="Calculator #01"
              description="This calculator is made in motivation of creating my first web app purely with HTML, CSS, and JavaScript. The design is taken from a Youtube video but the code is completely custom."
              responsiveness="Mobile Responsive? Yes!"
              link="https://calculator6101.netlify.app/"
              repo="https://github.com/sharjeelfaiq/custom-calculator-using-html-css-javascript"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoPath={"abc"}
              imgPath={calculator02}
              isBlog={false}
              title="Calculator #02"
              description="This calculator is made in motivation of creating my second web calculator purely with HTML, CSS, and JavaScript. The design is taken from an image seen on Google and is completely self coded."
              responsiveness="Mobile Responsive? Yes!"
              link="https://calculator6102.netlify.app/"
              repo="https://github.com/sharjeelfaiq/custom-calculator-with-HTML-CSS-JS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoPath={"abc"}
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
              videoPath={"abc"}
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
              videoPath={"abc"}
              imgPath={landingpage01}
              isBlog={false}
              title="Landing Page #01"
              description="This landing page is a conversion of a Figma design into a web page purely written of HTML and CSS.."
              responsiveness="Mobile Responsive? No!"
              link="https://oneposotion.netlify.app/"
              repo="https://github.com/sharjeelfaiq/custom-landing-page-Oneposotion"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
