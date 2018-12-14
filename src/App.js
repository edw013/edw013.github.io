import React, { Component } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Blog, { BlogPost } from "./Blog";
import { Welcome, About } from "./About";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>
          <Link to="/blog/">Blog</Link>
          <Link to="/about/">About</Link>

          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/blog/" component={Blog} />
            <Route exact path="/about/" component={About} />
            <Route path="/blog/posts/:id" component={BlogPost} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
