import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sharjeel Faiq </span>
            from <span className="purple"> Quetta, Pakistan.</span>
            <br />I am an undergraduate in Mathematics and have choosen Web Development as my professional career.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Teaching Mathematics
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning To Solve Complex Problems
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I can't change the direction of the wind, but I can adjust my sails to always reach my destination!"{" "}
          </p>
          <footer className="blockquote-footer">Sharjeel</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
