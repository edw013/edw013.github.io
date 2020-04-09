import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
    render() {
        return (
            <div>
                <img className="headshot-style" src={process.env.PUBLIC_URL + "/ethan.jpg"} alt="Ethan" />
                <h1>Ethan Wang</h1>
                <h3>About</h3>
                <p>I'm a recent graduate from UC San Diego with a bachelor's in computer science.</p>
            </div>
        )
    }
}

export { Home };
