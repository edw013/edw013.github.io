import React, { Component } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Blog from "./Blog";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to="/blog/">Blog</Link>

          <Switch>
            <Route exact path="/blog/" component={Blog} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
