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
// import PV_8 from "../../Assets/ProjectsVideos/PV_8.mp4";
import PV_9 from "../../Assets/ProjectsVideos/PV_9.mp4";
import PV_10 from "../../Assets/ProjectsVideos/PV_10.mp4";
import PV_11 from "../../Assets/ProjectsVideos/PV_11.mp4";
import PV_12 from "../../Assets/ProjectsVideos/PV_12.mp4";
import PV_13 from "../../Assets/ProjectsVideos/PV_13.mp4";
import PV_14 from "../../Assets/ProjectsVideos/PV_14.mp4";
import PV_15 from "../../Assets/ProjectsVideos/PV_15.mp4";
import PV_16 from "../../Assets/ProjectsVideos/PV_16.mp4";
// import PV_17 from "../../Assets/ProjectsVideos/PV_17.mp4";
// import PV_18 from "../../Assets/ProjectsVideos/PV_18.mp4";

// IMAGE IMPORT STATEMENTS
import PI_1 from "../../Assets/ProjectsImgs/PI_1.PNG";
import PI_2 from "../../Assets/ProjectsImgs/PI_2.PNG";
import PI_3 from "../../Assets/ProjectsImgs/PI_3.PNG";
import PI_4 from "../../Assets/ProjectsImgs/PI_4.PNG";
import PI_5 from "../../Assets/ProjectsImgs/PI_5.PNG";
import PI_6 from "../../Assets/ProjectsImgs/PI_6.PNG";
import PI_7 from "../../Assets/ProjectsImgs/PI_7.PNG";
// import PI_8 from "../../Assets/ProjectsImgs/PI_8.PNG";
import PI_9 from "../../Assets/ProjectsImgs/PI_9.PNG";
import PI_10 from "../../Assets/ProjectsImgs/PI_10.PNG";
import PI_11 from "../../Assets/ProjectsImgs/PI_11.PNG";
import PI_12 from "../../Assets/ProjectsImgs/PI_12.PNG";
import PI_13 from "../../Assets/ProjectsImgs/PI_13.PNG";
import PI_14 from "../../Assets/ProjectsImgs/PI_14.PNG";
import PI_15 from "../../Assets/ProjectsImgs/PI_15.PNG";
import PI_16 from "../../Assets/ProjectsImgs/PI_16.jpg";
import PI_17 from "../../Assets/ProjectsImgs/PI_17.jpg";
import PI_18 from "../../Assets/ProjectsImgs/PI_18.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
        Presenting recent projects personally developed and deployed on various platforms including Hostinger and Netlify for your consideration.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              // videoPath={PV_16}
              thumbnail={PI_18}
              isBlog={false}
              title="Jotter's Pad"
              description="A premade PHP template using Laravel and MySQL customized by me. It employs AI for instant content creation and attractive visuals to boost engagement."
              responsiveness="Mobile Responsive? Yes!"
              link="https://jotterspad.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // videoPath={PV_18}
              thumbnail={PI_17}
              isBlog={false}
              title="Shayan Faiq"
              description="WordPress website built with the Elementor plug-in and the Astra template, hosted by Hostinger"
              responsiveness="Mobile Responsive? Yes!"
              link="https://shayanfaiq.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoPath={PV_16}
              thumbnail={PI_16}
              isBlog={false}
              title="Quetta Prayer Timings"
              description="Integrating React JS and AlAdhan API for prompt updates based on International University guidelines and Hanafi Madhab, ensuring dynamic user experience."
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
              description="The SWAPI Demo Site showcases Bootstrap and React JS synergy, demonstrating Starwars API potential through seamless modern web development."
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
              description="Introducing Textbotonline: a comprehensive, web-based React app. Edit, generate, and analyze text with ease. Experience its varied features now."
              responsiveness="Mobile Responsive? Yes!"
              link="https://textbotonline.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoPath={PV_13}
              thumbnail={PI_13}
              isBlog={false}
              title="Sharjeel Faiq"
              description="I customized and deployed a React JS portfolio template on Netlify for a professional web presence."
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
              description="Exemplifying data flow between child and parent components, this page harmonizes Material UI and React JS to showcase my expertise."
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
              description="Exclusively utilizing Material UI and React JS, I developed this application designed for task management and organization."
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
              title="Sharjeel Faiq"
              description="Highly customized and deployed this React JS portfolio template on Netlify. Customized for professionalism and functionality."
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
              description="Elevating creativity with MemoMate: Crafted with Bootstrap 5.2 and pure JavaScript, a notes-taking app stands as a testament to innovation."
              responsiveness="Mobile Responsive? Yes!"
              link="https://memomate.netlify.app/"
              repo="https://github.com/sharjeelfaiq/MemoMate-Notes-taking-Web-App-"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              videoPath={PV_8}
              thumbnail={PI_8}
              isBlog={false}
              title="Calendar"
              description="This calendar is purely made with HTML, CSS, JavaScript and jQuery..."
              responsiveness="Mobile Responsive? Yes!"
              link="https://mycalendar610.netlify.app/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              videoPath={PV_7}
              thumbnail={PI_7}
              isBlog={false}
              title="Go Nobita Go (Mini Game)"
              description="Crafted with elegantly structured HTML, CSS, and JavaScript, this mini game draws inspiration from the offline classic, Dino."
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
              description="Empowering Himalayan children's education, the website employs HTML, CSS, JavaScript, and captivating animations for impactful learning."
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
              description="Employing HTML, CSS, and JavaScript, I crafted this calculator, drawing design inspiration from a YouTube tutorial while coding it originally."
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
              description="Crafted using HTML, CSS, and JavaScript, this calculator reflects a Google-inspired design, showcasing web development's boundless creative potential."
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
              description="I was able to transform a YouTube video into a professional HTML/CSS email template thanks to my own self-driven study and practical experimentation."
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
              description="Self-driven learning and hands-on exploration empowered me to create a professional HTML/CSS email template."
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
