import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            MERN Stack Developer with <span className="purple">3 years of working experience</span>. Proficient in HTML, CSS, and JavaScript, and its frameworks/libraries i.e React JS, Next JS, Node JS, Express JS and MongoDB. Skilled in CSS frameworks i.e. Bootstrap, Material UI, Tailwind CSS. Rich experience in Website Deployment. Relentlessly practicing version control with Git and Github. Been a part of project management in Jira and Trello. Proficient in seamless API integration for dynamic global web applications.

          </p>
          {/* <ImPointRight />  */}
          <p style={{ color: "rgb(155 126 172)" }}>
            "I can't change the direction of the wind, but I can adjust my sails
            to always reach my destination!"{" "}
          </p>
          <footer className="blockquote-footer">Jimmy Dean</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
