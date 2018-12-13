import React, { Component } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Blog from "./Blog";
import About from "./About";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>
          <Link to="/blog/">Blog</Link>
          <Link to="/about/">About</Link>

          <Switch>
            <Route exact path="/blog/" component={Blog} />
            <Route exact path="/about/" component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
