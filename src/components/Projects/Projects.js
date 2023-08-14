import React from "react";
// import { useState } from "react";
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
import PV_17 from "../../Assets/ProjectsVideos/PV_17.mp4";
import PV_18 from "../../Assets/ProjectsVideos/PV_18.mp4";
// import PV_19 from "../../Assets/ProjectsVideos/PV_19.mp4"; Video not available yet

// IMAGE IMPORT STATEMENTS
import PI_1 from "../../Assets/ProjectsImgs/PI_1.webp";
import PI_2 from "../../Assets/ProjectsImgs/PI_2.webp";
import PI_3 from "../../Assets/ProjectsImgs/PI_3.webp";
import PI_4 from "../../Assets/ProjectsImgs/PI_4.webp";
import PI_5 from "../../Assets/ProjectsImgs/PI_5.webp";
import PI_6 from "../../Assets/ProjectsImgs/PI_6.webp";
import PI_7 from "../../Assets/ProjectsImgs/PI_7.webp";
// import PI_8 from "../../Assets/ProjectsImgs/PI_8.webp";
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

function Projects() {
  const projectsData = [
    {
      // videoPath: PV_19,
      thumbnail: PI_19,
      isBlog: false,
      title: "Nuturafit",
      description:
        "I skillfully integrated a Shopify store with a Hostingerserved domain, deepening my DNS understanding and enhancing web solution proficiency.",
      responsiveness: "Mobile Responsive? Yes!",
      link: "https://www.nuturafit.com/",
    },
    {
      videoPath: PV_18,
      thumbnail: PI_18,
      isBlog: false,
      title: "Jotter's Pad",
      description:
        "A premade PHP template using Laravel and MySQL customized by me. It employs AI for instant content creation and attractive visuals to boost engagement.",
      responsiveness: "Mobile Responsive? Yes!",
      link: "https://jotterspad.com/",
    },
    {
      videoPath: PV_17,
      thumbnail: PI_17,
      isBlog: false,
      title: "Shayan Faiq",
      description:
        "WordPress website built with the Elementor plug-in and the Astra template, hosted by Hostinger",
      responsiveness: "Mobile Responsive? Yes!",
      link: "https://shayanfaiq.com/",
    },
    {
      videoPath: PV_16,
      thumbnail: PI_16,
      isBlog: false,
      title: "Quetta Prayer Timings",
      description:
        "Integrating React JS and AlAdhan API for prompt updates based on International University guidelines and Hanafi Madhab, ensuring dynamic user experience.",
      responsiveness: "Mobile Responsive? Yes!",
      link: "https://quetta-prayer-timings.netlify.app/",
      repo: "https://github.com/sharjeelfaiq/quetta-prayer-timings",
    },
    {
      videoPath: PV_15,
      thumbnail: PI_15,
      isBlog: false,
      title: "SWAPI Demo Site",
      description:
        "The SWAPI Demo Site showcases Bootstrap and React JS synergy, demonstrating Starwars API potential through seamless modern web development.",
      responsiveness: "Mobile Responsive? Yes!",
      link: "https://swapi-demo-site.netlify.app/",
      repo: "https://github.com/sharjeelfaiq/Starwars-api-usage-with-react-and-bootstrap.git",
    },
    {
      videoPath: PV_14,
      thumbnail: PI_14,
      isBlog: false,
      title: "Textbotonline",
      description:
        "Introducing Textbotonline: a comprehensive, web-based React app. Edit, generate, and analyze text with ease. Experience its varied features now.",
      responsiveness: "Mobile Responsive? Yes!",
      link: "https://textbotonline.netlify.app/",
    },
    {
      videoPath: PV_13,
      thumbnail: PI_13,
      isBlog: false,
      title: "Sharjeel Faiq",
      description:
        "I customized and deployed a React JS portfolio template on Netlify for a professional web presence.",
      responsiveness: "Mobile Responsive? Yes!",
      link: "https://sharjeelfaiq610.netlify.app/",
      repo: "https://github.com/sharjeelfaiq/textbotonline",
    },
    {
      videoPath: PV_12,
      thumbnail: PI_12,
      isBlog: false,
      title: "Child To Parent Props (React)",
      description:
        "Exemplifying data flow between child and parent components, this page harmonizes Material UI and React JS to showcase my expertise.",
      responsiveness: "Mobile Responsive? Yes!",
      link: "https://pass-props-from-child-to-parent.netlify.app/",
      repo: "https://github.com/sharjeelfaiq/passsing-props-from-child-to-parents",
    },
    {
      videoPath: PV_11,
      thumbnail: PI_11,
      isBlog: false,
      title: "TaskMate (MUI + React)",
      description:
        "Exclusively utilizing Material UI and React JS, I developed this application designed for task management and organization.",
      responsiveness: "Mobile Responsive? Yes!",
      link: "https://taskmate610.netlify.app/",
      repo: "https://github.com/sharjeelfaiq/TaskMate",
    },
    {
      videoPath: PV_10,
      thumbnail: PI_10,
      isBlog: false,
      title: "Sharjeel Faiq",
      description:
        "Highly customized and deployed this React JS portfolio template on Netlify. Customized for professionalism and functionality.",
      responsiveness: "Mobile Responsive? Yes!",
      link: "https://sharjeelfaiq.netlify.app/",
      repo: "https://github.com/sharjeelfaiq/react-portfolio.git",
    },
    {
      videoPath: PV_9,
      thumbnail: PI_9,
      isBlog: false,
      title: "MemoMate",
      description:
        "Elevating creativity with MemoMate: Crafted with Bootstrap 5.2 and pure JavaScript, a notes-taking app stands as a testament to innovation.",
      responsiveness: "Mobile Responsive? Yes!",
      link: "https://memomate.netlify.app/",
      repo: "https://github.com/sharjeelfaiq/MemoMate-Notes-taking-Web-App-",
    },
    // {
    //   videoPath: PV_8,
    //   thumbnail: PI_8,
    //   isBlog: false,
    //   title: "Calendar",
    //   description: "This calendar is purely made with HTML, CSS, JavaScript and jQuery...",
    //   responsiveness: "Mobile Responsive? Yes!",
    //   link: "https://mycalendar610.netlify.app/",
    // },
    {
      videoPath: PV_7,
      thumbnail: PI_7,
      isBlog: false,
      title: "Go Nobita Go (Mini Game)",
      description:
        "Crafted with elegantly structured HTML, CSS, and JavaScript, this mini game draws inspiration from the offline classic, Dino.",
      responsiveness: "Mobile Responsive? No!",
      link: "https://jump-nobita-jump.netlify.app/",
      repo: "https://github.com/sharjeelfaiq/jump-nobita-jump",
    },
    {
      videoPath: PV_6,
      thumbnail: PI_6,
      isBlog: false,
      title: "School Himalayas",
      description:
        "Empowering Himalayan children's education, the website employs HTML, CSS, JavaScript, and captivating animations for impactful learning.",
      responsiveness: "Mobile Responsive? No!",
      link: "https://schoolhimalayas.netlify.app/",
      repo: "https://github.com/sharjeelfaiq/custom-school-website-template",
    },
    {
      videoPath: PV_5,
      thumbnail: PI_5,
      isBlog: false,
      title: "Calculator #01",
      description:
        "Employing HTML, CSS, and JavaScript, I crafted this calculator, drawing design inspiration from a YouTube tutorial while coding it originally.",
      responsiveness: "Mobile Responsive? Yes!",
      link: "https://calculator6101.netlify.app/",
      repo: "https://github.com/sharjeelfaiq/custom-calculator-using-html-css-javascript",
    },
    {
      videoPath: PV_4,
      thumbnail: PI_4,
      isBlog: false,
      title: "Calculator #02",
      description:
        "Crafted using HTML, CSS, and JavaScript, this calculator reflects a Google-inspired design, showcasing web development's boundless creative potential.",
      responsiveness: "Mobile Responsive? Yes!",
      link: "https://calculator6102.netlify.app/",
      repo: "https://github.com/sharjeelfaiq/custom-calculator-with-HTML-CSS-JS",
    },
    {
      videoPath: PV_3,
      thumbnail: PI_3,
      isBlog: false,
      title: "Email Template #01",
      description:
        "I was able to transform a YouTube video into a professional HTML/CSS email template thanks to my own self-driven study and practical experimentation.",
      responsiveness: "Mobile Responsive? No!",
      link: "https://emailtemplate6101.netlify.app/",
    },
    {
      videoPath: PV_2,
      thumbnail: PI_2,
      isBlog: false,
      title: "Email Template #02",
      description:
        "Self-driven learning and hands-on exploration empowered me to create a professional HTML/CSS email template.",
      responsiveness: "Mobile Responsive? No!",
      link: "https://emailtemplate6102.netlify.app/",
    },
    {
      videoPath: PV_1,
      thumbnail: PI_1,
      isBlog: false,
      title: "Landing Page #01",
      description:
        "This landing page is a conversion of a Figma design into a web page purely written of HTML and CSS.",
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
          Presenting recent projects personally developed and deployed on
          various platforms including Hostinger and Netlify for your
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
