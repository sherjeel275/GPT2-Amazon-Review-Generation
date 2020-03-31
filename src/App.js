import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Signup from "./Signup";
import Logout from "./Logout";
import Home from "./Home";
import About from "./About";
import Play from "./Play";
import Analytics from "./Analytics";
import Team from "./Team";
import "bootstrap/dist/css/bootstrap.min.css";

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
            <Route path="/signup" render={() => <Signup />} />
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
            <Route path="/logout" render={() => <Logout />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

/*
// /client/src/App.js

import React, { useState, useEffect } from "react";

// SERVICES
import productService from "./services/productService";

function App() {
  const [products, setproducts] = useState(null);

  useEffect(() => {
    if (!products) {
      getProducts();
    }
  });

  const getProducts = async () => {
    let res = await productService.getAll();
    console.log("1");
    console.log(res);
    setproducts(res);
  };

  const renderProduct = product => {
    return (
      <li key={product._id} className="list__item product">
        <h3 className="product__name">{product.name}</h3>
        <p className="product__description">{product.description}</p>
      </li>
    );
  };

  return <div className="App">hello</div>;
}

export default App;
*/
