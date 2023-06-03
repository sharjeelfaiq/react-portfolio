import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm Sharjeel Faiq, a MERN-Stack magician
            with 3+ years of experience in coding. Skilled in front-end
            frameworks <span className="purple">(Bootstrap, Material UI)</span>,
            hosting services, version control{" "}
            <span className="purple">(Git, Github)</span>, and project
            management <span className="purple">(Jira)</span>. I've delighted
            clients on Fiverr and locally, delivering high-quality results.
            Proficient in JavaScript and its frameworks{" "}
            <span className="purple">
              (React JS, Node JS, Express JS, Next JS)
            </span>
            , I create dynamic applications. Let's embark on this journey
            together, where innovation meets passion.
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
