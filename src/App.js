import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css'
import Home from './Home';


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
              </Switch>
        </Router>
      </div>

      );
  }

}



export default App;
