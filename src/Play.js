import React from "react";
import Modal from "react-awesome-modal";
import Home from "./Home";
import ReactDOM from "react-dom";
import "./Play.css";

class Play extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      count: 1
    };
  }

  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }

  incrementRound = () => {
    if (this.state.count == 15) {
      this.openModal();
    } else {
      this.setState({ count: this.state.count + 1 });
    }
  };

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
                Guess if the following product review was AI generated!
              </font>
            </b>
          </h1>
          <span>Current round: {this.state.count}</span>
          <section class="container">
            <div class="review-box">
              <article>
                <p>Review text to be inserted here...</p>
              </article>
            </div>
          </section>
        </div>
        <button
          onClick={this.incrementRound}
          className="btn btn-secondary btn-sm"
        >
          Real
        </button>
        <button
          onClick={this.incrementRound}
          className="btn btn-secondary btn-sm"
        >
          Fake
        </button>

        <input type="button" value="Open" onClick={() => this.openModal()} />
        <Modal
          visible={this.state.visible}
          width="400"
          height="300"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <div>
            <h1>Thanks for playing!</h1>
            <a class="navbar-brand" href="/">
              Home
            </a>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Play;
