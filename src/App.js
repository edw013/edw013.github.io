import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Blog, { BlogPost } from "./Blog";
import { Home } from "./Home";
import { Navbar, Nav } from "react-bootstrap";

class App extends Component {
    render() {
        const bodyContainer = {
            "width": "70%",
            "marginLeft": "15%",
            "marginRight": "15%",
            "marginTop": "2%"
        }

        const navContainer = {
            "width": "70%",
            "marginLeft": "15%",
            "marginRight": "15%",
            "display": "flex"
        }

        return (
            <HashRouter basename="/">
                <div>
                    <Navbar bg="light" expand="lg" sticky="top">
                        <div style={navContainer}>
                            <Navbar.Brand>ew.</Navbar.Brand>
                            <Nav.Link href="#/">Home</Nav.Link>
                            <Nav.Link href="#/blog">Blog</Nav.Link>
                            <Nav.Link href={process.env.PUBLIC_URL + "/Resume.pdf"} target="_blank">Resume</Nav.Link>
                        </div>
                    </Navbar>

                    <div style={bodyContainer}>
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