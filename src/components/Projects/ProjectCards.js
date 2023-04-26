import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" /> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <video
          controls
          style={{ marginTop: "5px" }}
          poster={props.thumbnail}
          width="300"
          height="200"
        >
          <source src={props.videoPath} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Card.Body style={{}}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text
          style={{
            textAlign: "justify",
            height: "150px",
            maxHeight: "120px",
            overFlow: "auto",
          }}
        >
          {props.description}
        </Card.Text>
        <Card.Text style={{ textAlign: "center", fontWeight: "bolder" }}>
          {props.responsiveness}
        </Card.Text>
        <div className="d-flex align-items-center flex-column">
          <Button variant="primary" href={props.link} target="_blank">
            <BiLinkExternal /> &nbsp;
            {props.isBlog ? "View Blog" : "Demo"}
          </Button>
          <Button
            variant="primary"
            className="mt-1"
            href={props.repo}
            target="_blank"
          >
            <BiLinkExternal /> &nbsp;
            {props.repo ? "Github" : "No Repo"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
