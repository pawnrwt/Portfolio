import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, I'm <b className="purple"> Pawan Rawat</b>, a seasoned Data
              Analyst and Frontend Developer with over 4 years of experience in
              Life Science and Insurance. Proficient in{" "}
              <b className="purple">
                {" "}
                HTML, CSS, React.js, JavaScript, SQL, and Selenium
              </b>
              , I excel in crafting web applications and deriving insights from
              data using{" "}
              <b className="purple">
                {" "}
                R Programming, Python, Microsoft Excel and Power BI
              </b>
              .
              <br />
              <br />
              <b className="purple">Professional Highlights</b>
              <br />
              <b className="purple">Cognizant:</b>
              <br /> Programmer Analyst, adept in project implementation and
              Frontend Development.
              <br />
              <b className="purple">UST Global:</b>
              <br />
              Developer III, led development of insurance portal, actively
              involved in Scrum ceremonies.
              <br />
              <b className="purple">Deloitte:</b>
              <br /> Consultant, developed chatbot, enhanced UI/UX, and
              conducted data analysis.
              <br />
              <br />
              <b className="purple">Education</b>
              <br />
              Masters in Data Science and its Applications from University of
              Essex, United Kingdom &nbsp;
              <br />
              <br />
              Harnessing my passion for <b className="purple"></b> and
              <b className="purple"> data analytics</b>, I leverage cutting-edge
              technologies like <b className="purple"></b> and
              <i>
                <b className="purple">
                  {" "}
                  Agile methodologies, Python, R, Power BI, SQL, and implement
                  innovative solutions using HTML, CSS, JavaScript, React.js,
                  Selenium, and Java.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              {/* <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li> */}
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
