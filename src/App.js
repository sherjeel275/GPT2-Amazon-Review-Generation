import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css'
import Login from './Login';
import Signup from './Signup';
import Logout from './Logout'
import Home from './Home';
import About from './About';
import Play from './Play';
import Analytics from './Analytics';
import Team from './Team';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                //this.state.isLoggedIn === true
                  //? <Home />
                  //: <Redirect to="/login" />
                  <Home />
              )}
            />
            <Route
              path="/login"
              render={() => (
              //  this.state.isLoggedIn === true
               //   ? <Home />
               //   : <Login />
               <Login />
              )}
            />
            <Route
              path="/signup"
              render={() => (
                <Signup />
              )}
            />
            <Route
              path="/About"
              render={() => (
                //this.state.isLoggedIn === true
                 // ? <About />
                 // : <Login />
                 <About />
              )}
            />
            <Route
              path="/Play"
              render={() => (
                //this.state.isLoggedIn === true
                 // ? <Play />
                 // : <Login />
                 <Play />
              )}
            />
            <Route
              path="/Analytics"
              render={() => (
                //this.state.isLoggedIn === true
                 // ? <Analytics />
                 // : <Login />
                 <Analytics />
              )}
            />
            <Route
              path="/Team"
              render={() => (
                //this.state.isLoggedIn === true
                 // ? <Team />
                 // : <Login />
                 <Team />
              )}
            />
            <Route
              path='/logout'
              render={() => (
                <Logout />
               )}
            />
          </Switch>
        </Router>
      </div>

      );
  }

}



export default App;
