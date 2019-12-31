import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css'
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
                  <Home />
              )}
            />
            <Route
              path="/About"
              render={() => (
                 <About />
              )}
            />
            <Route
              path="/Play"
              render={() => (
                 <Play />
              )}
            />
            <Route
              path="/Analytics"
              render={() => (
                 <Analytics />
              )}
            />
            <Route
              path="/Team"
              render={() => (
                 <Team />
              )}
            />
            
          </Switch>
        </Router>
      </div>

      );
  }

}



export default App;
