import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pawan Rawat </span>
            from <span className="purple"> Dehradun (U.K), India.</span>
            <br />
            I'm Pawan Rawat, currently pursuing a Master's in Data Science and
            its Applications.
            <br />
            <br />
            <br />
            Apart from Data analytics and coding, some other activities that I
            love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling and Trekking
            </li>
            <li className="about-activity">
              <ImPointRight /> Long Drives
            </li>
            <li className="about-activity">
              <ImPointRight /> Gymming
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            Driven by the belief in the transformative power of technology, I
            strive to contribute to projects that bring about positive change.
          </p>
          <footer className="blockquote-footer">Pawan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
