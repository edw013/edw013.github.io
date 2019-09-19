import React, { Component } from "react";

class Home extends Component {
    render() {
        let headshotStyle = {
            "width": "20%"
        };

        return (
            <div>
                <img src={process.env.PUBLIC_URL + "/ethan.jpg"} alt="Ethan" style={headshotStyle} />
                <h1>Ethan Wang</h1>
                <h3>About</h3>
                <p>I'm a computer science major at UC San Diego.</p>
            </div>
        )
    }
}

export { Home };
