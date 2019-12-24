import React from 'react'

class Home extends React.Component {

  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/">Home</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">

            <li class="nav-item">
                <a class="nav-link" href="About">About</a>
            </li>
              
            </ul>
          </div>
        </nav>
        <div class="jumbotron text-center">
          <h1><b> <font face = "Verdana" size = "24" color ="#255a7b">Welcome to GuessAI!</font></b></h1>
        </div>
      </React.Fragment>
    );

  }
}



export default Home
