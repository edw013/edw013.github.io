import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Blog, { BlogPost } from "./Blog";
import { Home } from "./Home";
import { Navbar, Nav } from "react-bootstrap";
import "./App.css";

class App extends Component {
    render() {
        return (
            <HashRouter basename="/">
                <div>
                    <Navbar className="navBar-style" expand="lg" sticky="top">
                        <div className="navContainer-style">
                            <Navbar.Brand className="navBrand-style">ew.</Navbar.Brand>
                            <Nav.Link className="navLink-style" href="#/">home</Nav.Link>
                            <Nav.Link className="navLink-style" href="#/blog">blog</Nav.Link>
                            <Nav.Link className="navLink-style" href={process.env.PUBLIC_URL + "/Resume.pdf"} target="_blank">resume</Nav.Link>
                        </div>
                    </Navbar>

                    <div className="bodyContainer-style">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/blog/" component={Blog} />
                            <Route exact path="/blog/:id" component={BlogPost} />
                        </Switch>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;