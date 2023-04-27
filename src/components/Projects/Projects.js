import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// VIDEO IMPORT STATEMENTS
import PV_1 from "../../Assets/ProjectsVideos/PV_1.mp4";
import PV_2 from "../../Assets/ProjectsVideos/PV_2.mp4";
import PV_3 from "../../Assets/ProjectsVideos/PV_3.mp4";
import PV_4 from "../../Assets/ProjectsVideos/PV_4.mp4";
import PV_5 from "../../Assets/ProjectsVideos/PV_5.mp4";
import PV_6 from "../../Assets/ProjectsVideos/PV_6.mp4";
import PV_7 from "../../Assets/ProjectsVideos/PV_7.mp4";
import PV_8 from "../../Assets/ProjectsVideos/PV_8.mp4";
import PV_9 from "../../Assets/ProjectsVideos/PV_9.mp4";
import PV_10 from "../../Assets/ProjectsVideos/PV_10.mp4";
import PV_11 from "../../Assets/ProjectsVideos/PV_11.mp4";
import PV_12 from "../../Assets/ProjectsVideos/PV_12.mp4";
import PV_13 from "../../Assets/ProjectsVideos/PV_13.mp4";
import PV_14 from "../../Assets/ProjectsVideos/PV_14.mp4";
import PV_15 from "../../Assets/ProjectsVideos/PV_15.mp4";
import PV_16 from "../../Assets/ProjectsVideos/PV_16.mp4";

// IMAGE IMPORT STATEMENTS
import PI_1 from "../../Assets/ProjectsImgs/PI_1.PNG";
import PI_2 from "../../Assets/ProjectsImgs/PI_2.PNG";
import PI_3 from "../../Assets/ProjectsImgs/PI_3.PNG";
import PI_4 from "../../Assets/ProjectsImgs/PI_4.PNG";
import PI_5 from "../../Assets/ProjectsImgs/PI_5.PNG";
import PI_6 from "../../Assets/ProjectsImgs/PI_6.PNG";
import PI_7 from "../../Assets/ProjectsImgs/PI_7.PNG";
import PI_8 from "../../Assets/ProjectsImgs/PI_8.PNG";
import PI_9 from "../../Assets/ProjectsImgs/PI_9.PNG";
import PI_10 from "../../Assets/ProjectsImgs/PI_10.PNG";
import PI_11 from "../../Assets/ProjectsImgs/PI_11.PNG";
import PI_12 from "../../Assets/ProjectsImgs/PI_12.PNG";
import PI_13 from "../../Assets/ProjectsImgs/PI_13.PNG";
import PI_14 from "../../Assets/ProjectsImgs/PI_14.PNG";
import PI_15 from "../../Assets/ProjectsImgs/PI_15.PNG";
import PI_16 from "../../Assets/ProjectsImgs/PI_16.jpg";

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
              videoPath={PV_16}
              thumbnail={PI_16}
              isBlog={false}
              title="Quetta Prayer Timings"
              description="Website built with React JS and AlAdhan API for automatic updates of latest data based on International University of Karachi and Hanafi Mazhab."
              responsiveness="Mobile Responsive? Yes!"
              link="https://quetta-prayer-timings.netlify.app/"
              repo="https://github.com/sharjeelfaiq/quetta-prayer-timings"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoPath={PV_15}
              thumbnail={PI_15}
              isBlog={false}
              title="SWAPI Demo Site"
              description="SWAPI Demo Site is a Bootstrap and React JS website that showcases basic usage of the free Starwars API."
              responsiveness="Mobile Responsive? Yes!"
              link="https://swapi-demo-site.netlify.app/"
              repo="https://github.com/sharjeelfaiq/Starwars-api-usage-with-react-and-bootstrap.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoPath={PV_14}
              thumbnail={PI_14}
              isBlog={false}
              title="Textbotonline"
              description="Textbotonline is a web-based React app that enables online text editing and generation, along with providing text statistics."
              responsiveness="Mobile Responsive? Yes!"
              link="https://textbotonline.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoPath={PV_13}
              thumbnail={PI_13}
              isBlog={false}
              title="Personal Portfolio #01"
              description="Hi, I'm Sharjeel, a front-end web and React JS developer based in Pakistan. I enjoy coding, building efficient apps and websites, and solving complex problems."
              responsiveness="Mobile Responsive? Yes!"
              link="https://sharjeelfaiq610.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoPath={PV_12}
              thumbnail={PI_12}
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
              videoPath={PV_11}
              thumbnail={PI_11}
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
              videoPath={PV_10}
              thumbnail={PI_10}
              isBlog={false}
              title="Personal  Portfolio #02"
              description="I'm Sharjeel, a professional front-end and React JS web developer based in Pakistan. I enjoy coding, creating efficient apps and websites, and solving complex problems."
              responsiveness="Mobile Responsive? Yes!"
              link="https://sharjeelfaiq.netlify.app/"
              repo="https://github.com/sharjeelfaiq/react-portfolio.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoPath={PV_9}
              thumbnail={PI_9}
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
              videoPath={PV_8}
              thumbnail={PI_8}
              isBlog={false}
              title="Calendar"
              description="This calendar is purely made with HTML, CSS, JavaScript and jQuery..."
              responsiveness="Mobile Responsive? Yes!"
              link="https://mycalendar610.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoPath={PV_7}
              thumbnail={PI_7}
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
              videoPath={PV_6}
              thumbnail={PI_6}
              isBlog={false}
              title="School Himalayas"
              description="This website motivates children who need education in the Himalayas. It uses pure HTML, CSS, and JavaScript with noticeable animations."
              responsiveness="Mobile Responsive? No!"
              link="https://schoolhimalayas.netlify.app/"
              repo="https://github.com/sharjeelfaiq/custom-school-website-template"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoPath={PV_5}
              thumbnail={PI_5}
              isBlog={false}
              title="Calculator #01"
              description="I created this calculator using HTML, CSS, and JavaScript, drawing inspiration from a YouTube video for the design but coding it completely from scratch."
              responsiveness="Mobile Responsive? Yes!"
              link="https://calculator6101.netlify.app/"
              repo="https://github.com/sharjeelfaiq/custom-calculator-using-html-css-javascript"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoPath={PV_4}
              thumbnail={PI_4}
              isBlog={false}
              title="Calculator #02"
              description="I created this calculator using HTML, CSS, and JavaScript, inspired by a design found on Google."
              responsiveness="Mobile Responsive? Yes!"
              link="https://calculator6102.netlify.app/"
              repo="https://github.com/sharjeelfaiq/custom-calculator-with-HTML-CSS-JS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoPath={PV_3}
              thumbnail={PI_3}
              isBlog={false}
              title="Email Template #01"
              description="This HTML/CSS email template was self-coded, inspired by a Youtube video."
              responsiveness="Mobile Responsive? No!"
              link="https://emailtemplate6101.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoPath={PV_2}
              thumbnail={PI_2}
              isBlog={false}
              title="Email Template #02"
              description="This HTML/CSS email template was self-coded, inspired by a Youtube video."
              responsiveness="Mobile Responsive? No!"
              link="https://emailtemplate6102.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoPath={PV_1}
              thumbnail={PI_1}
              isBlog={false}
              title="Landing Page #01"
              description="This landing page is a conversion of a Figma design into a web page purely written of HTML and CSS."
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
