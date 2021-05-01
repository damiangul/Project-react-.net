import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";

import "./custom.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Strona Główna</Link>
            </li>
            <li>
              <Link to={"/shop"}>Sklep</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </Router>
    );
  }
}
