import React from 'react';
import ReactDOM from 'react-dom';

import Home from './Home'

class Logout extends React.Component {
	contructor(props) {

		this.setState({
			textMessage: ''
		})

		this.handleSubmit = this.handleSumbit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();

		fetch(`${process.env.REACT_APP_BACKEND_API_ROOT}`+'/logout', {
			method: 'POST',
			credentials: "include",
			headers: {
				'Content-Type': 'application/json'
			},
			mode: 'cors',
			body: JSON.stringify({})
		}).then(response => {
			console.log("RESP")
			ReactDOM.render(
				<Home />,
				document.getElementById('root')
			);
		});
	}

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

				<div class="jumbotron text-center  ">
					<div class="login" onSubmit={this.handleSubmit}>
						<form class="login-container">
							<p><input type="submit" value="Log out"></input></p>
						</form>
					</div>
				</div>
				<h1>Logout</h1>
			</React.Fragment>
		)
	}
}

export default Logout;
