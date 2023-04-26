import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// VIDEO IMPORT STATEMENTS
import TBOVideo from "../../Assets/ProjectsVideos/TBO.mp4";
import p1Video from "../../Assets/ProjectsVideos/p1.mp4";
import p2Video from "../../Assets/ProjectsVideos/p2.mp4";
import lineupsVideo from "../../Assets/ProjectsVideos/lineups.mp4";
import calendarVideo from "../../Assets/ProjectsVideos/calendar.mp4";
import nobitaVideo from "../../Assets/ProjectsVideos/nobita.mp4";
import himalayasVideo from "../../Assets/ProjectsVideos/himalayas.mp4";
import calculator01Video from "../../Assets/ProjectsVideos/cal1.mp4";
import calculator02Video from "../../Assets/ProjectsVideos/cal2.mp4";
import et1Video from "../../Assets/ProjectsVideos/et1.mp4";
import et2Video from "../../Assets/ProjectsVideos/et2.mp4";
import landingpage01Video from "../../Assets/ProjectsVideos/landingpage01.mp4";
import SWAPIVideo from "../../Assets/ProjectsVideos/SWAPI.mp4";
import memomateVideo from "../../Assets/ProjectsVideos/memomate.mp4";
import taskmateVideo from "../../Assets/ProjectsVideos/taskmate.mp4";

// IMAGE IMPORT STATEMENTS
import TBOPicture from "../../Assets/ProjectsImgs/TBO.PNG";
import p1Picture from "../../Assets/ProjectsImgs/p1.PNG";
import p2Picture from "../../Assets/ProjectsImgs/p2.PNG";
import lineupsPicture from "../../Assets/ProjectsImgs/lineups.PNG";
import calendarPicture from "../../Assets/ProjectsImgs/mycalendar.PNG";
import nobitaPicture from "../../Assets/ProjectsImgs/gonobitago.PNG";
import himalayasPicture from "../../Assets/ProjectsImgs/schoolhimalayas.PNG";
import calculator01Picture from "../../Assets/ProjectsImgs/cal 1.PNG";
import calculator02Picture from "../../Assets/ProjectsImgs/cal 2.PNG";
import et1Picture from "../../Assets/ProjectsImgs/emailtemplate01.PNG";
import et2Picture from "../../Assets/ProjectsImgs/emailtemplate02.PNG";
import landingpage01Picture from "../../Assets/ProjectsImgs/landingpage01.PNG";
import SWAPIPicture from "../../Assets/ProjectsImgs/swapi.PNG";
import memomatePicture from "../../Assets/ProjectsImgs/memomate.PNG";
import taskmatePicture from "../../Assets/ProjectsImgs/taskmate.PNG";
import QPTPicture from "../../Assets/ProjectsImgs/QPT.jpg";

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
              videoPath={SWAPIVideo}
              thumbnail={QPTPicture}
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
              videoPath={SWAPIVideo}
              thumbnail={SWAPIPicture}
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
              videoPath={TBOVideo}
              thumbnail={TBOPicture}
              isBlog={false}
              title="Textbotonline"
              description="Textbotonline is a web-based React app that enables online text editing and generation, along with providing text statistics."
              responsiveness="Mobile Responsive? Yes!"
              link="https://textbotonline.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoPath={p1Video}
              thumbnail={p1Picture}
              isBlog={false}
              title="Personal Portfolio #01"
              description="Hi, I'm Sharjeel, a front-end web and React JS developer based in Pakistan. I enjoy coding, building efficient apps and websites, and solving complex problems."
              responsiveness="Mobile Responsive? Yes!"
              link="https://sharjeelfaiq610.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoPath={lineupsVideo}
              thumbnail={lineupsPicture}
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
              videoPath={taskmateVideo}
              thumbnail={taskmatePicture}
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
              videoPath={p2Video}
              thumbnail={p2Picture}
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
              videoPath={memomateVideo}
              thumbnail={memomatePicture}
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
              videoPath={calendarVideo}
              thumbnail={calendarPicture}
              isBlog={false}
              title="Calendar"
              description="This calendar is purely made with HTML, CSS, JavaScript and jQuery..."
              responsiveness="Mobile Responsive? Yes!"
              link="https://mycalendar610.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoPath={nobitaVideo}
              thumbnail={nobitaPicture}
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
              videoPath={himalayasVideo}
              thumbnail={himalayasPicture}
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
              videoPath={calculator01Video}
              thumbnail={calculator01Picture}
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
              videoPath={calculator02Video}
              thumbnail={calculator02Picture}
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
              videoPath={et1Video}
              thumbnail={et1Picture}
              isBlog={false}
              title="Email Template #01"
              description="This HTML/CSS email template was self-coded, inspired by a Youtube video."
              responsiveness="Mobile Responsive? No!"
              link="https://emailtemplate6101.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoPath={et2Video}
              thumbnail={et2Picture}
              isBlog={false}
              title="Email Template #02"
              description="This HTML/CSS email template was self-coded, inspired by a Youtube video."
              responsiveness="Mobile Responsive? No!"
              link="https://emailtemplate6102.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoPath={landingpage01Video}
              thumbnail={landingpage01Picture}
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
