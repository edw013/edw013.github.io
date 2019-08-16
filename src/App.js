import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Blog, { BlogPost } from "./Blog";
import { Home } from "./Home";
import { Navbar, Nav } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
    render() {
        return (
            <HashRouter basenmae="/">
                <div>
                    <Navbar bg="light" expand="lg" sticky="top">
                        <Navbar.Brand>ew.</Navbar.Brand>
                        <Nav.Link href="#/">Home</Nav.Link>
                        <Nav.Link href="#/blog">Blog</Nav.Link>
                    </Navbar>

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/blog/" component={Blog} />
                        <Route exact path="/blog/:id" component={BlogPost} />
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}

export default App;
