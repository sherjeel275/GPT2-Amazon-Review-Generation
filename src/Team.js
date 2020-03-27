import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Home from "./Home";
import ReactDOM from "react-dom";

class Team extends React.Component {
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
                Meet the team!
              </font>
            </b>
          </h1>
          <br></br>
          <br></br>
          <Container fluid>
            <Row className="justify-content-md-center">
              <CardDeck>
                <Card border="success" style={{ width: "20rem" }}>
                  <Card.Header>Sherjeel Arif</Card.Header>
                  <Card.Img variant="top" src="" />
                  <Card.Body>
                    <Card.Text>
                      Hi, my name is Sherjeel and I'm a senior at Penn studying
                      Electrical Engineering with a concentration in Data
                      Science. I'm interested in machine learning and deep
                      learning. I hope to apply these disciples to better
                      understand our world!
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card border="danger" style={{ width: "20rem" }}>
                  <Card.Header>Srinath Makesh</Card.Header>
                  <Card.Img variant="top" src="" />
                  <Card.Body>
                    <Card.Text>
                      My name is Srinath and I'm a senior at Penn studying
                      computer science and statistics. My interests in CS
                      include predictive modeling, machine learning, and data
                      mining. In my free time, I enjoy playing pickup
                      basketball, singing, and reading scientific nonfiction.
                      I'll be working in software engineering in the San
                      Francisco Bay Area this fall!
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card border="primary" style={{ width: "20rem" }}>
                  <Card.Header>Aavo Reinvald</Card.Header>
                  <Card.Img variant="top" src="" />
                  <Card.Body>
                    <Card.Text>
                      Hello! My name is Aavo and I am a senior studing CS at
                      Penn. My interests currently lie in algorithm design, game
                      theory, software optimization, and humanitarian software
                      development. I'll be a software developer in Chicago after
                      I complete my degree.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card border="warning" style={{ width: "20rem" }}>
                  <Card.Header>Andrew Si</Card.Header>
                  <Card.Img variant="top" src="" />
                  <Card.Body>
                    <Card.Text>
                      My name is Andrew and I'm a senior at Penn majoring in
                      computer science. Some of my interests in CS include
                      natural language processing, computer vision, and computer
                      graphics. I'll be working in software engineering in the
                      San Francisco Bay Area after graduating.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <Row className="justify-content-md-center">
              <Card border="info" style={{ width: "36rem" }}>
                <Card.Header>A Special Thanks to Our Mentors</Card.Header>
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Text>
                    As a team trying to explore and answer questions in a
                    practically uncharted territory, this project would not have
                    been possible without the guidance and assistance from
                    Professor Ani Nenkova as well as our advisors, Professor
                    Chris Callison-Burch and Daphne Ippolito.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Team;
