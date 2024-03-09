import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <img src={props.image} width="350" height="200" alt="" />
      </div>
      <Card.Body style={{}}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text
          style={{
            textAlign: "left",
            height: "50px",
            maxHeight: "120px",
            overFlow: "auto",
            marginTop:"20px"
          }}
        >
          <div style={{ width: "100%", textAlign: "center" }}>
            <h6 style={{ fontWeight: "bold" }}>Made with</h6>
            {props.description}
          </div>
        </Card.Text>
        <Card.Text style={{ textAlign: "center", fontWeight: "bolder" }}>
          {props.responsiveness}
        </Card.Text>
        <hr />
        <div className="d-flex align-items-center flex-column mt-3">
          <Button
            variant="primary"
            style={{ width: "7.5rem" }}
            href={props.link}
            target="_blank"
          >
            <BiLinkExternal /> &nbsp;
            {"Demo"}
          </Button>
          <Button
            variant="primary"
            className="mt-1"
            href={props.repo}
            target="_blank"
            style={{ width: "7.5rem" }}
          >
            {props.repo ? (
              <>
                <BiLinkExternal /> &nbsp; Repo
              </>
            ) : (
              "No Repo"
            )}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
