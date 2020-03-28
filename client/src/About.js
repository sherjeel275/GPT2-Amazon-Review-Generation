import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Home from "./Home";
import ReactDOM from "react-dom";

class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/">
            Home
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                        <a class="nav-link" href="Login">
                            Login
                        </a>
                      </li>
                      <li>
                        <a class="nav-link" href="signup">Signup</a>
                      </li>
                      <li>
                        <a class="nav-link" href="logout">Logout</a>
                      </li>
              <li class="nav-item">
                        <a class="nav-link" href="About">
                          About
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="Play">
                          Play
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="Analytics">
                          Analytics
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="Team">
                          Team
                        </a>
                      </li>
            </ul>
          </div>
        </nav>
        <div class="jumbotron text-center">
          <h1>
            <b>
              {" "}
              <font face="Verdana" size="24" color="#255a7b">
                About AMiAI...
              </font>
            </b>
          </h1>
          <br></br>
          <br></br>
          <br></br>
          <Container>
            <Col lg={true}>
              <p className="mt-5 mb-5">
                Greetings and welcome to our senior design project! We are a
                group of four from the University of Pennsylvania studying the
                potential for malicious behavior using state-of-the-art language
                models. In particular we are looking at the potential for
                OpenAI's GPT2 model to be exploited to create massive amounts of
                fake product reviews to damage the reputation of a rival product
                or artifically inflate the reputation of one's own product. With
                this more general question comes a multitude of smaller
                questions that we are investigating...
              </p>
              <i>How good are humans at spotting fake reviews?</i>
              <br></br>
              <i>How and when does a human know that a review is fake?</i>
              <br></br>
              <i>
                Can GPT2 finetuned to create even <b>more</b> convincing
                reviews?
              </i>
              <p className="mt-5">
                These are some of the questions that we hope to answer through
                <b> AMiAI</b> and with your help. Head over to the "Play" tab to
                see if you can spot when a review is fake!
              </p>
            </Col>
            <Col lg={true}>
              <Image
                className="mt-5 p-5"
                src={require("./img/2-line-bluetext-colorshield.png")}
                alt="Penn Engineering"
              />
              <Image
                className="p-5"
                src={require("./img/320px-OpenAI_Logo.svg.png")}
                alt="OpenAI"
              />
            </Col>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
