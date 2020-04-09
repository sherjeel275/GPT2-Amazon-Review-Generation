import React from "react";
import Modal from "react-awesome-modal";
import Home from "./Home";
import ReactDOM from "react-dom";
import "./Play.css";
import reviewAPI from "./services/reviewAPI";

class Play extends React.Component {
  constructor(props) {
    super(props);

    // NOTE: 'guess' represents user's guess, with true corresponding to 'real' and false to 'fake'
    this.state = {
      finalPopUp: false,
      roundPopUp: false,
      count: 1,
      guess: true,
      reviews: [],
    };
  }

  componentDidMount() {
    // fetch the reviews, once it retrieves resolve the promise and update the state
    this.getCohort(this.props.cohort).then((result) =>
      this.setState({
        reviews: result,
      })
    );
  }

  getCurrentReview = () => {
    var currReview = "";

    this.state.reviews.map((rev, i) => {
      //console.log("REVIEW: " + rev.review + " " + i);
      if (i == this.state.count - 1) {
        currReview = rev.review;
      }
    });

    return currReview.substring(0, 700);
  };

  getCurrentID = () => {
    var currID = "";

    this.state.reviews.map((rev, i) => {
      //console.log("REVIEW: " + rev.review + " " + i);
      if (i == this.state.count - 1) {
        currID = rev._id;
      }
    });

    return currID;
  };

  /*
  getCohort = async () => {
    let result = await reviewAPI.getCohort();
    return result;
  };
  */

  getCohort = async (cohort) => {
    return fetch("/getCohort", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cohort: cohort,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  addFeedback = async (cohort, _id, confidence_ranking, feedback, guess) => {
    console.log("fetching...");
    console.log(cohort, _id, confidence_ranking, feedback, guess);
    return fetch("/addFeedback", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cohort: cohort,
        _id: _id,
        guess: guess,
        confidence_ranking: confidence_ranking,
        feedback: feedback,
      }),
    }).catch((error) => {
      console.error(error);
    });

    /*
    await reviewAPI.addFeedback(
      cohort,
      _id,
      confidence_ranking,
      feedback,
      guess
    );
    */
  };

  openFinalPopUp = () => {
    this.setState({
      finalPopUp: true,
    });
  };

  closeFinalPopUp = () => {
    this.setState({
      finalPopUp: false,
    });
  };

  openRoundPopUp = () => {
    this.setState({
      roundPopUp: true,
    });
  };

  closeRoundPopUp = async () => {
    // fetch user input
    const cohort = this.props.cohort;
    const _id = this.getCurrentID();
    const guess = this.state.guess;
    const confidence_ranking = document.getElementById(
      "confidenceRankingSelection"
    ).value;
    const feedback = document.getElementById("responseTextarea").value;

    // add JSON to database thru reviewAPI
    this.addFeedback(cohort, _id, confidence_ranking, feedback, guess);
    //this.getCohort();

    this.setState({
      roundPopUp: false,
    });

    // update round
    this.incrementRound();
  };

  incrementRound = () => {
    if (this.state.count == 15) {
      // bring up popup window and end game
      this.openFinalPopUp();
    } else {
      // update current round
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
                <p>{this.getCurrentReview()}</p>
              </article>
              <button
                onClick={() => {
                  this.setState({ guess: true });
                  this.openRoundPopUp();
                }}
                // onClick={this.openRoundPopUp}
                className="btn btn-success m-2"
              >
                Real
              </button>
              <button
                onClick={() => {
                  this.setState({ guess: false });
                  this.openRoundPopUp();
                }}
                className="btn btn-danger m-2"
              >
                Fake
              </button>
            </div>
          </section>
        </div>
        <Modal
          id="endOfRoundModal"
          visible={this.state.roundPopUp}
          width="500"
          height="400"
          effect="fadeInUp"
          onClickAway={() => this.closeRoundPopUp()}
        >
          <div>
            <h1>end of round...</h1>
            <br></br>
            <div class="form-group col">
              <label for="confidenceRankingSelection">
                How confident are you in this answer? (1: hardly, 10: very)
              </label>
              <select class="form-control" id="confidenceRankingSelection">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
              <br></br>
              <label for="responseTextarea">
                Why did you choose this answer? (in a few words)
              </label>
              <textarea
                class="form-control"
                id="responseTextarea"
                rows="3"
              ></textarea>
            </div>
            <a
              href="javascript:void(0);"
              onClick={() => this.closeRoundPopUp()}
            >
              Next
            </a>
          </div>
        </Modal>
        <Modal
          visible={this.state.finalPopUp}
          width="400"
          height="300"
          effect="fadeInUp"
          onClickAway={() => this.closeFinalPopUp()}
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
