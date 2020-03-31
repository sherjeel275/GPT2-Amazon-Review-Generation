import React from "react";

class Home extends React.Component {
  checkSubmission = () => {
    var cohort = document.getElementById("inputCohort").value;

    switch (cohort) {
      case "Aavo":
        // send to cohort one
        break;
      case "Andrew":
        // send to cohort ???
        break;
      case "Sherjeel":
        break;
      case "Srinath":
        break;
      default:
        alert(
          "Not a valid code, please check that you entered the code correctly."
        );
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
                Welcome to AMiAI!
              </font>
            </b>
          </h1>
          <br></br>
          <br></br>
          <br></br>
          <div class="form-group">
            <div class="pl-5 pr-5">
              <label for="inputCohort">
                Please enter the cohort code given to you to enter the site...
              </label>
              <input
                type="password"
                class="form-control"
                id="inputCohort"
                placeholder="Enter cohort code here..."
              ></input>
            </div>
            <button
              type="submit"
              class="btn btn-primary mt-2"
              onClick={() => this.checkSubmission()}
            >
              Submit
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
