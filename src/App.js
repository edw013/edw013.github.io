import React, { Component } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Blog, { BlogPost } from "./Blog";
import { Home } from "./Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>
          <Link to="/blog/">Blog</Link>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/blog/" component={Blog} />
            <Route exact path="/blog/:id" component={BlogPost} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
