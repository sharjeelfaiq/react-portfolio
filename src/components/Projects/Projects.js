import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// IMAGE IMPORT STATEMENTS
import PI_1 from "../../Assets/ProjectsImgs/PI_1.webp";
import PI_2 from "../../Assets/ProjectsImgs/PI_2.webp";
import PI_3 from "../../Assets/ProjectsImgs/PI_3.webp";
import PI_4 from "../../Assets/ProjectsImgs/PI_4.webp";
import PI_5 from "../../Assets/ProjectsImgs/PI_5.webp";
import PI_6 from "../../Assets/ProjectsImgs/PI_6.webp";
import PI_7 from "../../Assets/ProjectsImgs/PI_7.webp";
import PI_8 from "../../Assets/ProjectsImgs/PI_8.webp";
import PI_9 from "../../Assets/ProjectsImgs/PI_9.webp";
import PI_10 from "../../Assets/ProjectsImgs/PI_10.webp";
import PI_11 from "../../Assets/ProjectsImgs/PI_11.webp";
import PI_12 from "../../Assets/ProjectsImgs/PI_12.webp";
import PI_13 from "../../Assets/ProjectsImgs/PI_13.webp";
import PI_14 from "../../Assets/ProjectsImgs/PI_14.webp";
import PI_15 from "../../Assets/ProjectsImgs/PI_15.webp";
import PI_16 from "../../Assets/ProjectsImgs/PI_16.webp";
import PI_17 from "../../Assets/ProjectsImgs/PI_17.webp";
import PI_18 from "../../Assets/ProjectsImgs/PI_18.webp";
import PI_19 from "../../Assets/ProjectsImgs/PI_19.webp";
import PI_20 from "../../Assets/ProjectsImgs/PI_20.webp";
import PI_21 from "../../Assets/ProjectsImgs/PI_21.webp";

function Projects() {
  const projectsData = [
    {
      image: PI_21,
      title: "TechTrip - Shopping Cart",
      description: "React JS | Tailwind CSS | Ant Design",
      responsiveness: "Mobile Responsive? Yes!",
      link: "https://techtrip.netlify.app/",
      repo: "https://github.com/sharjeelfaiq/techtrip.git"
    },
    {
      image: PI_20,
      title: "Power Your Mind",
      description: "HTML | CSS | JavaScript",
      responsiveness: "Mobile Responsive? Yes!",
      link: "https://pwmind.netlify.app/",
    },
    {
      image: PI_19,
      title: "UMED LLC",
      description: "HTML | CSS | JavaScript",
      responsiveness: "Mobile Responsive? Yes!",
      link: "https://umedllc.netlify.app/",
    },
    {
      image: PI_18,
      title: "Concierge Clients Landing Page",
      description: "WordPress | Elementor",
      responsiveness: "Mobile Responsive? Yes!",
      link: "https://elandingpages.net/carewell-concierge-clients-landing-page/#8889616369",
    },
    {
      image: PI_17,
      title: "Youngstarslabs",
      description: "React JS | Tailwind CSS",
      responsiveness: "Mobile Responsive? Yes!",
      link: "https://youngstarslabs.netlify.app/",
    },
    {
      image: PI_16,
      title: "Acion-Type",
      description: "React JS",
      responsiveness: "Mobile Responsive? Yes!",
      link: "https://action-type.netlify.app/",
      repo: "https://github.com/sharjeelfaiq/action-type.git",
    },
    {
      image: PI_15,
      title: "x-coin.network",
      description: "HTML | CSS | JavaScript",
      responsiveness: "Mobile Responsive? Yes!",
      link: "https://x-coin-network.netlify.app/",
    },
    {
      image: PI_14,
      title: "Jotter's Pad",
      description: "PHP | Laravel",
      responsiveness: "Mobile Responsive? Yes!",
      link: "https://jotterspad.com/",
    },
    {
      image: PI_13,
      title: "Shayan Faiq",
      description: "WordPress | Astra | Elementor",
      responsiveness: "Mobile Responsive? Yes!",
      link: "https://shayanfaiq.com/",
    },
    {
      image: PI_12,
      title: "Pakistan Prayers",
      description: "React JS | Al-Adhan API",
      link: "https://pakistanprayers.netlify.app/",
      repo: "https://github.com/sharjeelfaiq/pakistanprayers",
    },
    {
      image: PI_11,
      title: "SWAPI Demo Site",
      description: "React JS | BootStrap | Starwars API",
      responsiveness: "Mobile Responsive? Yes!",
      link: "https://swapi-demo-site.netlify.app/",
      repo: "https://github.com/sharjeelfaiq/Starwars-api-usage-with-react-and-bootstrap.git",
    },
    {
      image: PI_10,
      title: "Textbotonline",
      description: "React JS | BootStrap | Open-AI API",
      responsiveness: "Mobile Responsive? Yes!",
      link: "https://textbotonline.netlify.app/",
      repo: "https://github.com/sharjeelfaiq/textbotonline.git",
    },
    {
      image: PI_9,
      title: "TaskMate",
      description: "React JS | Material UI",
      responsiveness: "Mobile Responsive? Yes!",
      link: "https://taskmate610.netlify.app/",
      repo: "https://github.com/sharjeelfaiq/TaskMate",
    },
    {
      image: PI_8,
      title: "MemoMate",
      description: "Bootstrap | VaniLla JS",
      responsiveness: "Mobile Responsive? Yes!",
      link: "https://memomate.netlify.app/",
      repo: "https://github.com/sharjeelfaiq/MemoMate-Notes-taking-Web-App-",
    },
    {
      image: PI_7,
      title: "Go Nobita Go (Mini Game)",
      description: "HTML | CSS | JavaScript",
      responsiveness: "Mobile Responsive? No!",
      link: "https://jump-nobita-jump.netlify.app/",
      repo: "https://github.com/sharjeelfaiq/jump-nobita-jump",
    },
    {
      image: PI_6,
      title: "School Himalayas",
      description: "HTML | CSS",
      responsiveness: "Mobile Responsive? No!",
      link: "https://schoolhimalayas.netlify.app/",
      repo: "https://github.com/sharjeelfaiq/custom-school-website-template",
    },
    {
      image: PI_5,
      title: "Calculator #01",
      description: "HTML | CSS | JavaScript",
      responsiveness: "Mobile Responsive? Yes!",
      link: "https://calculator6101.netlify.app/",
      repo: "https://github.com/sharjeelfaiq/custom-calculator-using-html-css-javascript",
    },
    {
      image: PI_4,
      title: "Calculator #02",
      description: "HTML | CSS | JavaScript",
      responsiveness: "Mobile Responsive? Yes!",
      link: "https://calculator6102.netlify.app/",
      repo: "https://github.com/sharjeelfaiq/custom-calculator-with-HTML-CSS-JS",
    },
    {
      image: PI_3,
      title: "Email Template #01",
      description: "HTML | CSS",
      responsiveness: "Mobile Responsive? No!",
      link: "https://emailtemplate6101.netlify.app/",
    },
    {
      image: PI_2,
      title: "Email Template #02",
      description: "HTML | CSS",
      responsiveness: "Mobile Responsive? No!",
      link: "https://emailtemplate6102.netlify.app/",
    },
    {
      image: PI_1,
      title: "Landing Page #01",
      description: "HTML | CSS",
      responsiveness: "Mobile Responsive? No!",
      link: "https://oneposotion.netlify.app/",
      repo: "https://github.com/sharjeelfaiq/custom-landing-page-Oneposotion",
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Presenting recent web projects developed and deployed on
          various hosting providers such as Hostinger, Vercel, Netlify and else for your
          consideration.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectsData.map((project, index) => (
            <Col key={index} md={4} className="project-card">
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
