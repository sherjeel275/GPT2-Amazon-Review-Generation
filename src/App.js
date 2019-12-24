import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css'
import Home from './Home';
import About from './About';
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
          </Switch>
        </Router>
      </div>

      );
  }

}



export default App;
